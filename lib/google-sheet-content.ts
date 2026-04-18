import { DEFAULT_HOME_CONTENT, type HomeContent } from "@/lib/home-content"

const SHEET_TIMEOUT_MS = 8000
const CACHE_TTL_MS = 1000 * 60 * 5 // 5-minute in-memory cache

let cachedHomeContent: HomeContent | null = null
let cacheTimestamp = 0

interface SheetRow {
  key?: unknown
  value?: unknown
}

type SheetPayload = Record<string, unknown> | SheetRow[]

function safeParseJson<T>(input: string): T | null {
  try {
    return JSON.parse(input) as T
  } catch {
    return null
  }
}

function asNonEmptyString(value: unknown): string | null {
  if (typeof value !== "string") return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

// Recursively flatten a nested object into dot-notation keys.
// { home: { header: { nav: { about: "Giới thiệu" } } } }
// → { "home.header.nav.about": "Giới thiệu" }
function flattenObject(obj: unknown, prefix: string, result: Record<string, unknown>): void {
  if (obj == null || typeof obj !== "object") return
  if (Array.isArray(obj)) return

  for (const [k, v] of Object.entries(obj as Record<string, unknown>)) {
    const key = prefix ? `${prefix}.${k}` : k
    if (v != null && typeof v === "object" && !Array.isArray(v)) {
      flattenObject(v, key, result)
    } else {
      result[key] = v
    }
  }
}

// Build nested object from dot-notation key.
// E.g. "home.services.featured.title" → { home: { services: { featured: { title: "..." } } } }
function buildNested(
  target: Record<string, unknown>,
  key: string,
  rawValue: unknown
): void {
  const parts = key.split(".")
  let current = target

  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i]
    if (!(part in current)) {
      current[part] = {}
    }
    current = current[part] as Record<string, unknown>
  }

  const lastPart = parts[parts.length - 1]
  current[lastPart] = rawValue
}

function rowsToNested(rows: SheetRow[]): Record<string, unknown> {
  const result: Record<string, unknown> = {}

  for (const row of rows) {
    const key = asNonEmptyString(row?.key)
    if (!key) continue

    const value = row?.value
    buildNested(result, key, typeof value === "string" ? value : value)
  }

  return result
}

function normalizePayload(payload: unknown): Record<string, unknown> {
  // Case 1: Array of {key, value} rows (CSV-imported format)
  if (Array.isArray(payload)) {
    return rowsToNested(payload as SheetRow[])
  }

  if (payload && typeof payload === "object") {
    // Case 2: { rows: [...] } wrapper
    if (Array.isArray((payload as Record<string, unknown>).rows)) {
      return rowsToNested((payload as Record<string, unknown>).rows as SheetRow[])
    }

    // Case 3: Flat key-value map, e.g. { "home.header.nav.about": "..." }
    // No nested objects, return as-is
    return payload as Record<string, unknown>
  }

  return {}
}

function getField(
  normalized: Record<string, unknown>,
  path: string,
  fallback: unknown
): unknown {
  const value = normalized[path]
  if (value == null) return fallback

  // If it's a plain string that looks like JSON (array or object), parse it
  if (typeof value === "string") {
    const trimmed = value.trim()
    if ((trimmed.startsWith("[") && trimmed.endsWith("]")) ||
        (trimmed.startsWith("{") && trimmed.endsWith("}"))) {
      const parsed = safeParseJson(trimmed)
      if (parsed != null) return parsed
    }
  }

  return value
}

function extractFlat(data: Record<string, unknown>): Record<string, unknown> {
  const flat: Record<string, unknown> = {}
  flattenObject(data, "", flat)
  return flat
}

function parseHomeContent(data: SheetPayload): HomeContent {
  // Sheet returns flat dot-notation keys: { "home.header.nav.about": "Giới thiệu chương", ... }
  // We read leaf-level dot keys directly and merge over defaults.
  const flat = data as Record<string, unknown>

  // Helper: read a dot-notation key with a fallback
  const dot = <T>(key: string, fallback: T): T => {
    const raw = flat[key]
    if (raw == null) return fallback
    if (typeof raw === "string") {
      const trimmed = (raw as string).trim()
      if ((trimmed.startsWith("[") && trimmed.endsWith("]")) ||
          (trimmed.startsWith("{") && trimmed.endsWith("}"))) {
        const parsed = safeParseJson<T>(trimmed)
        if (parsed != null) return parsed
      }
    }
    return raw as T
  }

  // header — nav items
  const headerNav = {
    about:     dot("home.header.nav.about",     DEFAULT_HOME_CONTENT.header.nav.about),
    programs:  dot("home.header.nav.programs",  DEFAULT_HOME_CONTENT.header.nav.programs),
    activities: dot("home.header.nav.activities", DEFAULT_HOME_CONTENT.header.nav.activities),
    news:      dot("home.header.nav.news",      DEFAULT_HOME_CONTENT.header.nav.news),
    contact:   dot("home.header.nav.contact",   DEFAULT_HOME_CONTENT.header.nav.contact),
  }
  const headerTopBar = {
    hotlineLabel: dot("home.header.topBar.hotlineLabel",   DEFAULT_HOME_CONTENT.header.topBar.hotlineLabel),
    hotlineNumber: dot("home.header.topBar.hotlineNumber",  DEFAULT_HOME_CONTENT.header.topBar.hotlineNumber),
    tiktokLabel:   dot("home.header.topBar.tiktokLabel",    DEFAULT_HOME_CONTENT.header.topBar.tiktokLabel),
    facebookLabel: dot("home.header.topBar.facebookLabel",  DEFAULT_HOME_CONTENT.header.topBar.facebookLabel),
    zaloLabel:     dot("home.header.topBar.zaloLabel",     DEFAULT_HOME_CONTENT.header.topBar.zaloLabel),
    tiktokUrl:     dot("home.header.topBar.tiktokUrl",     DEFAULT_HOME_CONTENT.header.topBar.tiktokUrl),
    facebookUrl:   dot("home.header.topBar.facebookUrl",   DEFAULT_HOME_CONTENT.header.topBar.facebookUrl),
    zaloUrl:       dot("home.header.topBar.zaloUrl",       DEFAULT_HOME_CONTENT.header.topBar.zaloUrl),
  }
  const headerLinks = {
    activitiesUrl: dot("home.header.links.activitiesUrl", DEFAULT_HOME_CONTENT.header.links.activitiesUrl),
    newsUrl:       dot("home.header.links.newsUrl",        DEFAULT_HOME_CONTENT.header.links.newsUrl),
  }

  return {
    ...DEFAULT_HOME_CONTENT,
    header: {
      ...DEFAULT_HOME_CONTENT.header,
      nav: { ...DEFAULT_HOME_CONTENT.header.nav, ...headerNav },
      topBar: { ...DEFAULT_HOME_CONTENT.header.topBar, ...headerTopBar },
      links: { ...DEFAULT_HOME_CONTENT.header.links, ...headerLinks },
      ctaText:       dot("home.header.ctaText",       DEFAULT_HOME_CONTENT.header.ctaText),
      mobileCtaText: dot("home.header.mobileCtaText", DEFAULT_HOME_CONTENT.header.mobileCtaText),
    },
    heroSlides: dot("home.heroSlides", DEFAULT_HOME_CONTENT.heroSlides),
    sections: {
      programs:      dot("home.programs",      DEFAULT_HOME_CONTENT.sections.programs),
      differentiators: dot("home.differentiators", DEFAULT_HOME_CONTENT.sections.differentiators),
      services:      dot("home.services",      DEFAULT_HOME_CONTENT.sections.services),
      activities:    dot("home.activities",    DEFAULT_HOME_CONTENT.sections.activities),
      testimonials:   dot("home.testimonials",   DEFAULT_HOME_CONTENT.sections.testimonials),
      process:       dot("home.process",       DEFAULT_HOME_CONTENT.sections.process),
      trust:         dot("home.trust",         DEFAULT_HOME_CONTENT.sections.trust),
      partners:       dot("home.partners",       DEFAULT_HOME_CONTENT.sections.partners),
      news:           dot("home.news",           DEFAULT_HOME_CONTENT.sections.news),
      bottomCta:      dot("home.bottomCta",      DEFAULT_HOME_CONTENT.sections.bottomCta),
      contact:        dot("home.contact",        DEFAULT_HOME_CONTENT.sections.contact),
    },
    consultationForm: dot("home.consultationForm", DEFAULT_HOME_CONTENT.consultationForm),
    activityItems:   dot("home.activityItems",   DEFAULT_HOME_CONTENT.activityItems),
    testimonials:     dot("home.testimonials",     DEFAULT_HOME_CONTENT.testimonials),
    footer:           dot("home.footer",           DEFAULT_HOME_CONTENT.footer),
  }
}


export async function getHomeContent(): Promise<HomeContent> {
  const url = process.env.GOOGLE_CONTENT_WEBHOOK_URL

  // Return cached data if still valid
  if (cachedHomeContent && Date.now() - cacheTimestamp < CACHE_TTL_MS) {
    return cachedHomeContent
  }

  if (!url) {
    return DEFAULT_HOME_CONTENT
  }

  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), SHEET_TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: { Accept: "application/json" },
      signal: controller.signal,
      redirect: "follow",
      cache: "no-store",
    })

    const contentType = response.headers.get("content-type") ?? ""

    if (!response.ok || !contentType.includes("application/json")) {
      console.warn("[SIGE] getHomeContent: non-JSON or non-ok response", response.status, contentType)
      // Still return stale cache if available
      return cachedHomeContent ?? DEFAULT_HOME_CONTENT
    }

    const text = await response.text()
    const data = JSON.parse(text) as SheetPayload
    cachedHomeContent = parseHomeContent(data)
    cacheTimestamp = Date.now()
    return cachedHomeContent
  } catch (e) {
    console.error("[SIGE] getHomeContent: fetch error:", e)
    // Return stale cache on error rather than defaults
    return cachedHomeContent ?? DEFAULT_HOME_CONTENT
  } finally {
    clearTimeout(timeoutId)
  }
}
