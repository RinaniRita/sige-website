'use client'

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import type { ConsultationFormContent } from "@/lib/home-content"

type FormState = {
  name: string
  phone: string
  email: string
  education: string
  major: string
  message: string
}

const DEFAULT_FORM_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  education: "",
  major: "",
  message: "",
}

interface QuickConsultationFormProps {
  content: ConsultationFormContent
  privacyPrefix: string
  privacyLinkText: string
  privacyLinkHref: string
}

export function QuickConsultationForm({
  content,
  privacyPrefix,
  privacyLinkText,
  privacyLinkHref,
}: QuickConsultationFormProps) {
  const [formData, setFormData] = useState<FormState>(DEFAULT_FORM_STATE)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [statusMessage, setStatusMessage] = useState<string | null>(null)
  const [statusType, setStatusType] = useState<"success" | "error" | null>(null)

  const updateField = <K extends keyof FormState>(field: K, value: FormState[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatusMessage(null)
    setStatusType(null)

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = (await response.json()) as { ok?: boolean; message?: string }

      if (!response.ok || !result.ok) {
        setStatusType("error")
        setStatusMessage(result.message || content.errorMessage)
      } else {
        setStatusType("success")
        setStatusMessage(result.message || content.successMessage)
        setFormData(DEFAULT_FORM_STATE)
      }
    } catch {
      setStatusType("error")
      setStatusMessage(content.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-slate-700 font-medium text-sm">{content.nameLabel}</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder={content.namePlaceholder}
            required
            className="bg-slate-50/70 rounded-xl h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-100"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-slate-700 font-medium text-sm">{content.phoneLabel}</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder={content.phonePlaceholder}
            required
            className="bg-slate-50/70 rounded-xl h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-100"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-slate-700 font-medium text-sm">{content.emailLabel}</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(event) => updateField("email", event.target.value)}
          placeholder={content.emailPlaceholder}
          required
          className="bg-slate-50/70 rounded-xl h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="education" className="text-slate-700 font-medium text-sm">{content.educationLabel}</Label>
        <Select
          required
          value={formData.education}
          onValueChange={(value) => updateField("education", value)}
        >
          <SelectTrigger id="education" className="bg-slate-50/70 rounded-xl h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-100">
            <SelectValue placeholder={content.educationPlaceholder} />
          </SelectTrigger>
          <SelectContent>
            {content.educationOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="major" className="text-slate-700 font-medium text-sm">{content.majorLabel}</Label>
        <Input
          id="major"
          name="major"
          value={formData.major}
          onChange={(event) => updateField("major", event.target.value)}
          placeholder={content.majorPlaceholder}
          className="bg-slate-50/70 rounded-xl h-12 border-slate-200 focus:border-blue-400 focus:ring-blue-100"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-slate-700 font-medium text-sm">{content.messageLabel}</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder={content.messagePlaceholder}
          rows={4}
          className="bg-slate-50/70 rounded-xl border-slate-200 focus:border-blue-400 focus:ring-blue-100"
        />
      </div>

      {statusMessage && (
        <p
          className={statusType === "success" ? "text-emerald-600 text-sm" : "text-red-600 text-sm"}
          role="status"
        >
          {statusMessage}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-500 text-base py-6 rounded-xl shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transition-all hover:scale-[1.01] disabled:opacity-70"
      >
        {isSubmitting ? content.submittingText : content.submitText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>

      <p className="text-xs text-slate-400 text-center">
        {privacyPrefix}{" "}
        <Link href={privacyLinkHref} className="text-blue-500 hover:underline">
          {privacyLinkText}
        </Link>{" "}
        của chúng tôi
      </p>
    </form>
  )
}
