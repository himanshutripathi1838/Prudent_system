import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import type { ZodError } from "zod";
import { CheckCircle2, ExternalLink, Loader2, Mail, MapPin, Phone, Clock, ShieldCheck, Send } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { CONTACT, COMPANY, SOCIALS } from "@/data/site";
import { contactSchema } from "@/lib/forms";
import { submitContactEnquiry } from "@/lib/submissions.functions";
import { Field } from "./career";
import { ContactCta } from "@/components/home/sections";
import OfficeMap from "@/components/viz/OfficeMap";
import { GradientButton } from "@/components/ui/gradient-button";

const TITLE = "Contact Prudent Systems — Industrial IoT & Industry 4.0 Enquiries";
const DESCRIPTION =
  "Talk to the Prudent Systems engineering team about industrial IoT, data acquisition, edge AI, secure OTA and Industry 4.0 projects.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-14 pb-8">
        <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <SectionHeading
            eyebrow="Contact Us"
            title="Talk to Our Engineering Team"
            description="Tell us what you want to monitor, connect or automate. We'll come back with a technical engineering view, non-intrusive DAQ solution, or Industry 4.0 roadmap."
          />
        </div>
      </Section>

      <Section className="py-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <Reveal>
            <GlassCard className="flex h-full flex-col justify-between p-6" interactive>
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Headquarters Office</h2>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{CONTACT.addressLine}</p>
              </div>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Open in Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.06}>
            <GlassCard className="flex h-full flex-col justify-between p-6" interactive>
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Phone & Support</h2>
                <p className="mt-2 text-xs text-muted-foreground">Mobile: <strong className="text-foreground">{CONTACT.phone}</strong></p>
                <p className="mt-1 text-xs text-muted-foreground">Landline: <strong className="text-foreground">{CONTACT.landline}</strong></p>
              </div>
              <a
                href={`tel:${CONTACT.phone?.replace(/\s+/g, "")}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Call Office Directly
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </GlassCard>
          </Reveal>

          <Reveal delay={0.12}>
            <GlassCard className="flex h-full flex-col justify-between p-6" interactive>
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" aria-hidden />
                </div>
                <h2 className="mt-4 font-display text-lg font-semibold text-foreground">Official Email</h2>
                <p className="mt-2 text-xs text-muted-foreground">General & Project Enquiries:</p>
                <p className="mt-1 font-mono text-xs font-medium text-foreground">{CONTACT.email}</p>
              </div>
              <a
                href={`mailto:${CONTACT.email}`}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
              >
                Send Direct Email
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section className="py-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Interactive Map & Location Info */}
          <Reveal>
            <GlassCard className="flex h-full flex-col overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-border bg-surface-2/60 px-5 py-3.5">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="font-display text-xs font-semibold uppercase tracking-wider text-foreground">
                    Prudent Systems Location — Bhopal, MP
                  </span>
                </div>
                <span className="rounded-full bg-ok/10 border border-ok/30 px-2 py-0.5 font-mono text-[10px] uppercase text-ok">
                  Verified Location
                </span>
              </div>

              <div className="h-[420px] w-full bg-surface-2">
                <OfficeMap />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 bg-surface/80 p-5">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">18, Vaishali Nagar, Kotra Sultanabad</p>
                  <p className="text-xs text-muted-foreground">Bhopal, Madhya Pradesh 462003, India</p>
                </div>
                <a
                  href={CONTACT.mapsUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/10 px-3.5 py-2 text-xs font-medium text-primary transition-colors hover:bg-primary/20"
                >
                  Navigate in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </GlassCard>
          </Reveal>

          {/* Right Column: Contact Form */}
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>

      <Section className="py-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <GlassCard className="p-6">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <h2 className="font-display text-base font-semibold">Business Hours</h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              Monday – Saturday: <strong className="text-foreground">9:30 AM – 6:30 PM IST</strong><br />
              Sunday: Closed (Emergency Support Active)
            </p>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-ok" />
              <h2 className="font-display text-base font-semibold">Verified Standards</h2>
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              ISO Certified Organization · Awarded <strong className="text-foreground">CIO Tech Outlook 10 Most Promising Railway Providers 2023</strong>.
            </p>
          </GlassCard>
        </div>
      </Section>

      <ContactCta />
    </>
  );
}

function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string | undefined>>({});
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const payload = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      subject: String(form.get("subject") ?? ""),
      message: String(form.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of (parsed.error as ZodError).issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    setState("loading");
    try {
      await submitContactEnquiry(payload);
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <GlassCard className="flex flex-col items-center justify-center border-ok/40 p-8 text-center h-full">
        <CheckCircle2 className="h-10 w-10 text-ok" aria-hidden />
        <p className="mt-4 font-display text-xl font-semibold">Message Sent Successfully!</p>
        <p className="mt-2 text-xs text-muted-foreground">Thank you for reaching out. Our engineering team will review your enquiry and respond within 24 hours.</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold">Send Us an Enquiry</h2>
      <p className="mt-1 text-xs text-muted-foreground">Have a question about DAQ, Gateways, Edge AI, or Railway Electronics? Send us a message.</p>

      <form onSubmit={onSubmit} noValidate className="mt-5 grid gap-4">
        <Field label="Your Name" name="name" error={errors["name"]} required />
        <Field label="Email Address" name="email" type="email" error={errors["email"]} required />
        <Field label="Subject / Project Area" name="subject" error={errors["subject"]} required />
        <Field label="Message / Technical Description" name="message" error={errors["message"]} required textarea />

        {state === "error" ? (
          <p role="alert" className="rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-xs text-destructive">
            Your message couldn't be sent right now. Please try calling or emailing us directly.
          </p>
        ) : null}

        <GradientButton variant="variant" type="submit" disabled={state === "loading"} className="mt-2 w-full gap-2 py-3.5">
          {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" />}
          {state === "loading" ? "Sending Enquiry…" : "Send Project Enquiry"}
        </GradientButton>
      </form>
    </GlassCard>
  );
}
