import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { z } from "zod";
import { Award, BriefcaseBusiness, CheckCircle2, GraduationCap, HeartPulse, Loader2, MapPin, Users } from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { CurvedTimelinePath } from "@/components/viz/CurvedTimelinePath";
import { HR_POLICIES, JOBS, MILESTONES } from "@/data/company";
import { applicationSchema, validateResumeFile } from "@/lib/forms";
import { submitJobApplication } from "@/lib/submissions.functions";

const TITLE = "Careers — Engineering Roles at Prudent Systems";
const DESCRIPTION =
  "Join Prudent Systems: embedded, edge AI, cloud and data engineering roles building industrial IoT and Industry 4.0 systems.";

export const Route = createFileRoute("/career")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/career" },
    ],
    links: [{ rel: "canonical", href: "/career" }],
  }),
  component: CareerPage,
});

const WHY = [
  { title: "Real systems, real constraints", text: "Vibration, heat, unreliable links and long service lives — engineering with consequences.", Icon: BriefcaseBusiness },
  { title: "Full-stack of the physical world", text: "Move between firmware, acquisition, pipelines and models instead of one narrow layer.", Icon: GraduationCap },
  { title: "Small teams, wide ownership", text: "Engineers see their work reach the plant floor, not a backlog.", Icon: Users },
  { title: "Domain depth", text: "Industrial and railway domains reward expertise that compounds over years.", Icon: Award },
];

function CareerPage() {
  const timelineRef = useRef<HTMLOListElement>(null);
  return (
    <>
      <Section className="relative overflow-hidden pt-14">
        <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <SectionHeading
            eyebrow="Career"
            title="Build systems that industry depends on"
            description="We look for engineers who care about what happens after the demo — in the field, in the heat, under vibration, three years later."
          />
        </div>
      </Section>

      <Section className="pt-4">
        <SectionHeading eyebrow="Why Join Us" title="What working here looks like" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.06}>
              <GlassCard className="h-full p-6" interactive>
                <w.Icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Career Path"
          title="How an engineering career grows here"
          description="A portfolio path built from one engineering stack — from embedded systems to edge AI and Industry 4.0 delivery."
        />
        <ol ref={timelineRef} className="relative mt-12 md:mx-auto md:max-w-4xl">
          <CurvedTimelinePath containerRef={timelineRef} />
          {MILESTONES.map((m, i) => {
            const right = i % 2 === 1;
            return (
              <Reveal key={m.title} delay={i * 0.06}>
                <li className="relative pb-8 pl-10 md:pl-0">
                  <span
                    aria-hidden
                    className="absolute left-0 top-4 flex h-3.5 w-3.5 items-center justify-center rounded-full border border-primary/60 bg-background md:left-1/2 md:-translate-x-1/2"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <div className={right ? "md:ml-[calc(50%+2rem)]" : "md:mr-[calc(50%+2rem)]"}>
                    <GlassCard className="p-5" interactive>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                        {m.year ?? `Step ${String(i + 1).padStart(2, "0")}`}
                      </p>
                      <h3 className="mt-2 font-display text-lg font-semibold">{m.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground">{m.description}</p>
                    </GlassCard>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </Section>

      <Section className="pt-4">
        <SectionHeading
          eyebrow="Life at Prudent"
          title="An engineering workplace"
          description="Design reviews at the bench, hardware on the desk, and field trips to the machines our systems monitor."
        />
        <GlassCard className="mt-8 p-6">
          <p className="text-sm text-muted-foreground">
            Official workplace photography and team highlights are published here once supplied by the company. We do
            not publish stock imagery presented as our workplace or people.
          </p>
        </GlassCard>
      </Section>

      <Section>
        <SectionHeading eyebrow="Benefits & Policies" title="How we work together" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {HR_POLICIES.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06}>
              <GlassCard className="h-full p-6">
                <HeartPulse className="h-5 w-5 text-primary" aria-hidden />
                <h3 className="mt-3 font-display text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{p.description}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Detailed HR policy documents are published here from official company sources.
        </p>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Open Positions" title="Current openings" />
        <div className="mt-8">
          {JOBS.length > 0 ? (
            <ul className="grid gap-3">
              {JOBS.map((job) => (
                <li key={job.id}>
                  <GlassCard className="flex flex-wrap items-center justify-between gap-4 p-5">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{job.title}</h3>
                      <p className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" aria-hidden />{job.location}</span>
                        <span>{job.type}</span>
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
                    </div>
                    <a href="#apply" className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90">
                      Apply
                    </a>
                  </GlassCard>
                </li>
              ))}
            </ul>
          ) : (
            <GlassCard className="p-6">
              <p className="text-sm text-muted-foreground">
                There are no verified openings published at the moment. We still welcome applications — use the form
                below and tell us where you fit.
              </p>
            </GlassCard>
          )}
        </div>
      </Section>

      <Section id="apply">
        <SectionHeading eyebrow="Apply" title="Send us your application" />
        <div className="mt-8 max-w-3xl">
          <ApplicationForm />
        </div>
      </Section>
    </>
  );
}

type Errors = Record<string, string | undefined>;

function ApplicationForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [resume, setResume] = useState<File | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const resumeError = validateResumeFile(resume);
    const payload = {
      fullName: String(form.get("fullName") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
      role: String(form.get("role") ?? ""),
      coverMessage: String(form.get("coverMessage") ?? ""),
      linkedin: String(form.get("linkedin") ?? ""),
      github: String(form.get("github") ?? ""),
      resumeName: resume?.name ?? "",
      resumeType: resume?.type ?? "",
      resumeSize: resume?.size ?? 0,
    };

    const parsed = applicationSchema.safeParse(payload);
    if (!parsed.success || resumeError) {
      const next: Errors = {};
      if (!parsed.success) {
        for (const issue of (parsed.error as z.ZodError).issues) next[String(issue.path[0])] = issue.message;
      }
      if (resumeError) next["resume"] = resumeError;
      setErrors(next);
      setState("idle");
      return;
    }

    setErrors({});
    setState("loading");
    try {
      await submitJobApplication(payload);
      setState("success");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <GlassCard className="border-ok/40 p-8 text-center">
        <CheckCircle2 className="mx-auto h-8 w-8 text-ok" aria-hidden />
        <p className="mt-4 font-display text-xl font-semibold">Application submitted successfully.</p>
        <p className="mt-2 text-sm text-muted-foreground">Thank you — our team reviews every application.</p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-6 sm:p-8">
      <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" error={errors["fullName"]} required />
        <Field label="Email" name="email" type="email" error={errors["email"]} required />
        <Field label="Phone" name="phone" type="tel" error={errors["phone"]} required />
        <Field label="Job Role" name="role" error={errors["role"]} required placeholder="e.g. Embedded Firmware Engineer" />
        <div className="sm:col-span-2">
          <label htmlFor="resume" className="block text-sm font-medium">
            Resume <span className="text-primary">*</span>
          </label>
          <input
            id="resume"
            name="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            required
            onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            aria-invalid={Boolean(errors["resume"])}
            aria-describedby={errors["resume"] ? "resume-error" : "resume-hint"}
            className="mt-2 w-full rounded-md border border-input bg-surface-2/50 px-3 py-2.5 text-sm file:mr-3 file:rounded file:border-0 file:bg-primary file:px-3 file:py-1.5 file:text-primary-foreground"
          />
          <p id="resume-hint" className="mt-1 text-xs text-muted-foreground">PDF or Word document, up to 5 MB.</p>
          {errors["resume"] ? <p id="resume-error" className="mt-1 text-xs text-destructive">{errors["resume"]}</p> : null}
        </div>
        <Field label="LinkedIn" name="linkedin" type="url" error={errors["linkedin"]} placeholder="https://linkedin.com/in/…" />
        <Field label="GitHub" name="github" type="url" error={errors["github"]} placeholder="https://github.com/…" />
        <Field label="Cover Message" name="coverMessage" error={errors["coverMessage"]} required textarea className="sm:col-span-2" />

        <div className="sm:col-span-2">
          {state === "error" ? (
            <p role="alert" className="mb-3 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
              We couldn't submit your application. Please try again.
            </p>
          ) : null}
          <button
            type="submit"
            disabled={state === "loading"}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground disabled:opacity-60"
          >
            {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : null}
            {state === "loading" ? "Submitting…" : "Submit Application"}
          </button>
        </div>
      </form>
    </GlassCard>
  );
}

export function Field({
  label, name, type = "text", error, required, textarea, placeholder, className,
}: {
  label: string; name: string; type?: string | undefined; error?: string | undefined;
  required?: boolean | undefined; textarea?: boolean | undefined;
  placeholder?: string | undefined; className?: string | undefined;
}) {
  const id = `field-${name}`;
  const common = {
    id,
    name,
    required,
    placeholder,
    "aria-invalid": Boolean(error),
    "aria-describedby": error ? `${id}-error` : undefined,
    className:
      "mt-2 w-full rounded-md border border-input bg-surface-2/50 px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground",
  };
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium">
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>
      {textarea ? <textarea rows={5} {...common} /> : <input type={type} {...common} />}
      {error ? <p id={`${id}-error`} className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
