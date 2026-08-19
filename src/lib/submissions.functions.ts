import { createServerFn } from "@tanstack/react-start";
import { applicationSchema, contactSchema } from "./forms";

/**
 * Server-side entry point for contact enquiries.
 * Validation and sanitisation run here as well as on the client.
 * Connect a database, email service or CRM inside the handler when a backend is configured.
 */
export const submitContactEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    console.info("[contact-enquiry]", { subject: data.subject, email: data.email });
    return { ok: true as const, receivedAt: new Date().toISOString() };
  });

/**
 * Server-side entry point for career applications.
 * Resume metadata is validated here; file storage is wired up when a backend is configured.
 */
export const submitJobApplication = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => applicationSchema.parse(data))
  .handler(async ({ data }) => {
    console.info("[job-application]", { role: data.role, email: data.email, resume: data.resumeName });
    return { ok: true as const, receivedAt: new Date().toISOString() };
  });
