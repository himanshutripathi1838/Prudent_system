import { z } from "zod";

export const MAX_RESUME_BYTES = 5 * 1024 * 1024;
export const ALLOWED_RESUME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

/** Basic sanitisation: strip control characters and trim. */
export function sanitize(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, " ").trim();
}

export const contactSchema = z.object({
  name: z.string().transform(sanitize).pipe(z.string().min(2, "Please enter your full name").max(80)),
  email: z.string().transform(sanitize).pipe(z.string().email("Enter a valid email address")),
  subject: z.string().transform(sanitize).pipe(z.string().min(3, "Please add a subject").max(120)),
  message: z.string().transform(sanitize).pipe(z.string().min(20, "Please describe your requirement (at least 20 characters)").max(4000)),
});
export type ContactInput = z.input<typeof contactSchema>;

export const applicationSchema = z.object({
  fullName: z.string().transform(sanitize).pipe(z.string().min(2, "Please enter your full name").max(80)),
  email: z.string().transform(sanitize).pipe(z.string().email("Enter a valid email address")),
  phone: z.string().transform(sanitize).pipe(z.string().regex(/^[+0-9][0-9 ()-]{6,19}$/, "Enter a valid phone number")),
  role: z.string().min(1, "Select or enter the role you are applying for"),
  coverMessage: z.string().transform(sanitize).pipe(z.string().min(20, "Tell us briefly why you're a fit (at least 20 characters)").max(3000)),
  linkedin: z.string().transform(sanitize).pipe(z.string().url("Enter a valid URL").or(z.literal(""))).optional(),
  github: z.string().transform(sanitize).pipe(z.string().url("Enter a valid URL").or(z.literal(""))).optional(),
  resumeName: z.string().min(1, "Attach your resume"),
  resumeType: z.string().refine((t) => ALLOWED_RESUME_TYPES.includes(t), "Resume must be a PDF or Word document"),
  resumeSize: z.number().max(MAX_RESUME_BYTES, "Resume must be smaller than 5 MB"),
});
export type ApplicationInput = z.input<typeof applicationSchema>;

export function validateResumeFile(file: File | null): string | null {
  if (!file) return "Attach your resume";
  if (!ALLOWED_RESUME_TYPES.includes(file.type)) return "Resume must be a PDF or Word document";
  if (file.size > MAX_RESUME_BYTES) return "Resume must be smaller than 5 MB";
  return null;
}
