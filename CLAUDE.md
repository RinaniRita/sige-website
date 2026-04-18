# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vietnamese-language marketing/landing page for **SIGE** (Viện Khoa Học Giáo Dục Toàn Cầu) — an educational institute helping Vietnamese students study abroad in Taiwan. Originally scaffolded with **Vercel v0**, deployed on **Vercel**.

## Commands

- **Dev server**: `pnpm dev`
- **Build**: `pnpm build`
- **Lint**: `pnpm lint`
- **No test suite** — no testing framework is configured

## Architecture

- **Next.js 16** with App Router, React 19, TypeScript, Tailwind CSS v4
- **Single-page app** — only one route (`/`) in `app/page.tsx` (~600 lines) with anchor-link navigation (`#gioi-thieu`, `#chuong-trinh`, `#tin-tuc`, `#lien-he`)
- **No API routes, no middleware, no dynamic routes**

### Key Directories

- `components/` — Custom client components (ActivitySlider, ContactBubbles, PartnerSchools, ProcessTimeline, PromoModal)
- `components/ui/` — shadcn/ui primitives (new-york style, Radix UI based)
- `lib/sige-parser.ts` — Server-side scraper that fetches blog posts from `sige.edu.vn` using cheerio, with in-memory cache (1hr TTL) and static fallback data
- `lib/utils.ts` — `cn()` utility (clsx + tailwind-merge)
- `public/extracted_images/` — PNGs extracted from "SIGE 2026.pdf" brochure

### Patterns

- **Server Components by default**; client components use `'use client'` directive
- `app/page.tsx` is an async Server Component that calls `getLatestPosts()` at build/request time
- **Styling**: Tailwind CSS v4 with CSS custom properties (oklch color space) in `app/globals.css`; shadcn/ui components use `class-variance-authority`
- **Font**: Be Vietnam Pro (Vietnamese-optimized) loaded via `next/font/google`
- **Path alias**: `@/*` maps to project root
- **Images**: `next/image` with `unoptimized: true` (no server-side optimization)
- **Forms**: `react-hook-form` + `zod` for validation; forms currently have no backend submission handlers

### Build Config Notes

- `typescript.ignoreBuildErrors: true` in `next.config.mjs` — TS errors won't block builds
- `images.unoptimized: true` — image optimization disabled
- No ESLint config file; relies on Next.js defaults
- `styles/globals.css` is legacy/unused — active styles are in `app/globals.css`
