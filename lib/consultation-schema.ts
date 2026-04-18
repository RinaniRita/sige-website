import { z } from "zod"

export const consultationSchema = z.object({
  name: z.string().trim().min(1, "Vui lòng nhập họ và tên").max(120, "Họ tên quá dài"),
  phone: z
    .string()
    .trim()
    .regex(/^[0-9+\-\s().]{8,20}$/, "Số điện thoại không hợp lệ"),
  email: z.string().trim().email("Email không hợp lệ").max(120, "Email quá dài"),
  education: z.string().trim().min(1, "Vui lòng chọn trình độ học vấn"),
  major: z.string().trim().max(200, "Ngành học quá dài").optional().default(""),
  message: z.string().trim().max(1000, "Nội dung quá dài").optional().default(""),
})

export type ConsultationPayload = z.infer<typeof consultationSchema>
