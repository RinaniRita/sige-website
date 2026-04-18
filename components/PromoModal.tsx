'use client'

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowRight } from "lucide-react"

interface PromoModalProps {
  consultationForm?: {
    nameLabel?: string
    namePlaceholder?: string
    phoneLabel?: string
    phonePlaceholder?: string
    submitText?: string
    submittingText?: string
    successMessage?: string
    errorMessage?: string
  }
}

const DEFAULTS = {
  nameLabel: "Họ và tên",
  namePlaceholder: "Ví dụ: Nguyễn Văn A",
  phoneLabel: "Số điện thoại",
  phonePlaceholder: "0912345678",
  submitText: "Nhận tư vấn ngay",
  submittingText: "Đang gửi...",
  successMessage: "Đăng ký thành công, SIGE sẽ liên hệ trong 24h.",
  errorMessage: "Gửi thất bại, vui lòng thử lại hoặc gọi hotline.",
}

export function PromoModal({ consultationForm }: PromoModalProps) {
  const form = consultationForm ?? DEFAULTS
  const nameLabel = form.nameLabel ?? DEFAULTS.nameLabel
  const namePlaceholder = form.namePlaceholder ?? DEFAULTS.namePlaceholder
  const phoneLabel = form.phoneLabel ?? DEFAULTS.phoneLabel
  const phonePlaceholder = form.phonePlaceholder ?? DEFAULTS.phonePlaceholder
  const submitText = form.submitText ?? DEFAULTS.submitText
  const submittingText = form.submittingText ?? DEFAULTS.submittingText
  const successMessage = form.successMessage ?? DEFAULTS.successMessage
  const errorMessage = form.errorMessage ?? DEFAULTS.errorMessage

  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [msg, setMsg] = useState("")
  const [msgType, setMsgType] = useState<"success" | "error" | "">("")

  // Open after mount (respects SSR — no hydration mismatch)
  useEffect(() => { setOpen(true) }, [])

  const handleOpenChange = (isOpen: boolean) => {
    setOpen(isOpen)
    if (!isOpen) {
      localStorage.setItem("hasSeenPromo", "true")
      setMsg("")
      setMsgType("")
      setSubmitting(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setSubmitting(true)
    setMsg(submittingText)
    setMsgType("")

    try {
      const res = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: "promo-modal@sige.vn",
          education: "promo",
          major: "",
          message: "",
        }),
      })

      const result = (await res.json()) as { ok?: boolean; message?: string }

      if (!res.ok || !result.ok) {
        setMsg(result.message || errorMessage)
        setMsgType("error")
        setSubmitting(false)
        return
      }

      setMsg(result.message || successMessage)
      setMsgType("success")
      setTimeout(() => { setOpen(false) }, 1500)
    } catch {
      setMsg(errorMessage)
      setMsgType("error")
      setSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        className="sm:max-w-md p-0 overflow-hidden bg-white/95 backdrop-blur-sm border-blue-100"
      >
        <div className="relative h-40 bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[url('/extracted_images/img_p0_270.png')] bg-cover bg-center"></div>
          </div>
          <div className="relative z-10 text-center px-4">
            <DialogTitle className="text-2xl font-bold text-white mb-2">Đăng ký nhận học bổng</DialogTitle>
            <DialogDescription className="text-blue-100 text-sm">
              Cơ hội nhận hỗ trợ kinh phí du học lên đến 100%
            </DialogDescription>
          </div>
        </div>

        <div className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="promo-name">{nameLabel}</Label>
              <Input
                id="promo-name"
                name="name"
                placeholder={namePlaceholder}
                required
                disabled={submitting}
                className="bg-slate-50 rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-100 disabled:opacity-60"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="promo-phone">{phoneLabel}</Label>
              <Input
                id="promo-phone"
                name="phone"
                type="tel"
                placeholder={phonePlaceholder}
                required
                disabled={submitting}
                className="bg-slate-50 rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-100 disabled:opacity-60"
              />
            </div>

            {msg && (
              <p className={msgType === "success"
                ? "text-emerald-600 text-sm text-center"
                : "text-red-600 text-sm text-center"}>
                {msg}
              </p>
            )}

            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-70"
            >
              {submitting ? submittingText : submitText}
              {!submitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          <p className="text-xs text-center text-gray-500 mt-4">
            Hoàn toàn miễn phí. Hỗ trợ 24/7.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
