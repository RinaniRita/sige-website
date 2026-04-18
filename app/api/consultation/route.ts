import { NextResponse } from "next/server"
import { after } from "next/server"
import { consultationSchema } from "@/lib/consultation-schema"

export async function POST(request: Request) {
  const submitUrl = process.env.GOOGLE_SUBMIT_WEBHOOK_URL
  const secret = process.env.GOOGLE_APPS_SCRIPT_SECRET

  if (!submitUrl) {
    return NextResponse.json({ ok: false, message: "Thiếu cấu hình submit endpoint." }, { status: 500 })
  }

  let rawBody: unknown

  try {
    rawBody = await request.json()
  } catch {
    return NextResponse.json({ ok: false, message: "Dữ liệu gửi lên không hợp lệ." }, { status: 400 })
  }

  const parsed = consultationSchema.safeParse(rawBody)

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Vui lòng kiểm tra lại thông tin đã nhập."
    return NextResponse.json({ ok: false, message: firstIssue }, { status: 400 })
  }

  const payload = {
    ...parsed.data,
    submittedAt: new Date().toISOString(),
    source: "sige-homepage",
  }

  // Fire-and-forget: return success to user immediately,
  // write to Apps Script in background via after().
  after(async () => {
    try {
      const response = await fetch(submitUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          ...(secret ? { "x-sige-secret": secret } : {}),
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15000),
      })

      if (!response.ok) {
        console.error("[SIGE] Background submit failed — Apps Script returned", response.status)
        return
      }

      const contentType = response.headers.get("content-type") ?? ""
      if (!contentType.includes("application/json")) {
        console.error("[SIGE] Background submit failed — non-JSON response")
        return
      }

      const result = (await response.json()) as { ok?: boolean; message?: string }
      if (!result.ok) {
        console.error("[SIGE] Background submit failed — Apps Script result:", result.message)
        return
      }

      console.log("[SIGE] Background submit OK:", parsed.data.phone ?? "(no phone)")
    } catch (e) {
      console.error("[SIGE] Background submit error:", e)
    }
  })

  // Respond to user immediately — don't wait for Apps Script
  return NextResponse.json({
    ok: true,
    message: "Đăng ký thành công, SIGE sẽ liên hệ trong 24h.",
  })
}
