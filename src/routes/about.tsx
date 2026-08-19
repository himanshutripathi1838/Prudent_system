import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Compass, Expand, Lightbulb, Lock, Rocket, ShieldCheck, Target, X } from "lucide-react";
import { useEffect } from "react";
import { GlassCard, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { FlowDiagram } from "@/components/viz/FlowDiagram";
import { CurvedTimelinePath } from "@/components/viz/CurvedTimelinePath";
import { CERTIFICATIONS, MILESTONES, VALUES } from "@/data/company";
import { COMPANY } from "@/data/site";
import certificateAsset from "@/assets/cio-certificate.jpg.asset.json";

const TITLE = "About Prudent Systems — Industrial IoT & Engineering Company";
const DESCRIPTION =
  "Prudent Systems is an IoT and AI/ML solutions partner engineering embedded systems, data acquisition, edge computing and Industry 4.0 platforms for industry and railways.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUE_ICONS = { Lightbulb, ShieldCheck, Lock, Target } as const;

function AboutPage() {
  const [zoom, setZoom] = useState(false);
  const timelineRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (!zoom) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setZoom(false); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoom]);

  return (
    <>
      <Section className="relative overflow-hidden pt-14">
        <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <SectionHeading
            eyebrow="About Us"
            title="Engineering the bridge between machines and intelligence"
            description={COMPANY.description}
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <h2 className="font-display text-2xl font-semibold">Who we are</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              <p>
                Prudent Systems Private Limited is a technology company engaged in developing high-end products using
                cutting-edge technology like IoT, AI and ML.
              </p>
              <p>
                We engineer solutions to solve complex business requirements related to data capturing, analytics and
                automation. As an ISO certified company, we are proud of a talented team of engineers and R&amp;D
                specialists.
              </p>
              <p>
                That capability is applied across railway electronics, industrial monitoring and Industry 4.0
                programmes — connecting existing machines, monitoring asset health, computing OEE and energy
                performance, and delivering secure over-the-air updates across distributed fleets.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard className="p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Our engineering chain</p>
              <FlowDiagram
                className="mt-4"
                orientation="vertical"
                compact
                nodes={["Sensors", "DAQ", "Edge", "Connectivity", "Cloud", "AI / ML", "Insight", "Action"]}
              />
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <GlassCard className="h-full p-8">
              <Rocket className="h-6 w-6 text-primary" aria-hidden />
              <h2 className="mt-4 font-display text-2xl font-semibold">Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To turn smart devices into intelligent decisions — engineering reliable, secure systems that carry
                industrial data from the sensor all the way to the action it should trigger.
              </p>
            </GlassCard>
          </Reveal>
          <Reveal delay={0.08}>
            <GlassCard className="h-full p-8">
              <Compass className="h-6 w-6 text-primary" aria-hidden />
              <h2 className="mt-4 font-display text-2xl font-semibold">Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                An industrial landscape where every critical machine and asset is observable, predictable and
                updatable — with Industry 4.0 capability reachable for established plants and smaller manufacturers
                alike.
              </p>
            </GlassCard>
          </Reveal>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Formal mission and vision statements are replaced with official company wording once supplied.
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Milestones" title="Portfolio milestones" description="Listed without dates until each date is verified by the company." />
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

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Values" title="What we hold to" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v, i) => {
            const Icon = VALUE_ICONS[v.icon as keyof typeof VALUE_ICONS] ?? Target;
            return (
              <Reveal key={v.title} delay={i * 0.06}>
                <GlassCard className="h-full p-6" interactive>
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                  <h3 className="mt-4 font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Certifications" title="Certifications & compliance" />
        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <GlassCard className="overflow-hidden p-3">
              <button
                type="button"
                onClick={() => setZoom(true)}
                aria-label="View certificate full screen"
                className="group relative block w-full overflow-hidden rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <img
                  src="/cio-certificate.jpg"
                  onError={(e) => { e.currentTarget.src = "/cio-certificate.svg"; }}
                  alt="CIO Tech Outlook certificate — 10 Most Promising Railway Technology Solution Providers 2023, awarded to Prudent Systems"
                  loading="lazy"
                  className="w-full rounded-md transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-2 rounded-md border border-primary/50 px-3 py-2 text-sm text-primary">
                    <Expand className="h-4 w-4" aria-hidden /> View full screen
                  </span>
                </span>
              </button>
              <p className="mt-3 px-2 pb-1 text-sm text-muted-foreground">
                CIO Tech Outlook — 10 Most Promising Railway Technology Solution Providers, 2023.
              </p>
            </GlassCard>
          </Reveal>
          <div>
          {CERTIFICATIONS.length > 0 ? (
            <ul className="grid gap-3">
              {CERTIFICATIONS.map((c) => (
                <li key={c.name}>
                  <GlassCard className="p-5">
                    <p className="font-display font-semibold">{c.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
                  </GlassCard>
                </li>
              ))}
            </ul>
          ) : (
            <GlassCard className="p-6">
              <p className="text-sm text-muted-foreground">
                Certification and compliance badges are published here only after verification. No unverified
                certification claims are displayed.
              </p>
            </GlassCard>
          )}
          </div>
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading
          eyebrow="Technology Direction"
          title="Where our engineering is heading"
          description="Edge inference on more device classes, AI model delivery over the same signed OTA channel as firmware, digital-twin representations of monitored assets, and retrofit paths that bring existing machines into Industry 4.0 without replacement."
        />
        <Link to="/industry-4-0" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90">
          Explore our Industry 4.0 approach
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </Section>

      <AnimatePresence>
        {zoom ? (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoom(false)}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate full screen"
          >
            <button
              type="button"
              onClick={() => setZoom(false)}
              aria-label="Close certificate"
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-background/60 transition-colors hover:border-primary/60 hover:text-primary"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
            <motion.img
              src="/cio-certificate.jpg"
              onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/cio-certificate.svg"; }}
              alt="CIO Tech Outlook certificate — 10 Most Promising Railway Technology Solution Providers 2023, awarded to Prudent Systems"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.28 }}
              className="max-h-[90vh] w-auto max-w-full rounded-lg border border-border shadow-2xl"
            />
            <p className="pointer-events-none absolute bottom-5 left-0 right-0 text-center text-xs text-muted-foreground">
              Press Esc or click outside to close
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
