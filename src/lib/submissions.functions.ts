import { applicationSchema, contactSchema, type ApplicationInput, type ContactInput } from "./forms";

/**
 * Client entry point for contact enquiries.
 */
export const submitContactEnquiry = async (data: ContactInput) => {
  const validated = contactSchema.parse(data);
  console.info("[contact-enquiry]", { subject: validated.subject, email: validated.email });
  return { ok: true as const, receivedAt: new Date().toISOString() };
};

/**
 * Client entry point for career applications.
 */
export const submitJobApplication = async (data: ApplicationInput) => {
  const validated = applicationSchema.parse(data);
  console.info("[job-application]", { role: validated.role, email: validated.email, resume: validated.resumeName });
  return { ok: true as const, receivedAt: new Date().toISOString() };
};
