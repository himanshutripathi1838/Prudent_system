import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Search, X } from "lucide-react";
import { z } from "zod";
import { GlassCard, MaturityBadge, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { FlowDiagram } from "@/components/viz/FlowDiagram";
import { DataFlowBg } from "@/components/viz/DataFlowBg";
import { SOLUTIONS, SOLUTION_CATEGORIES, SOLUTION_INDUSTRIES, type Solution } from "@/data/solutions";
import { SOLUTION_IMAGES } from "@/data/solution-images";
import { ContactCta } from "@/components/home/sections";
import { OpenableCard } from "@/components/site/DetailModal";

const TITLE = "Solutions — Industrial IoT, Machine Health & Smart Manufacturing | Prudent Systems";
const DESCRIPTION =
  "Railway monitoring, machine health, predictive maintenance, energy analytics, water and weather monitoring, asset tracking and Industry 4.0 retrofit solutions.";

const searchSchema = z.object({
  q: z.string().optional(),
  category: z.string().optional(),
  industry: z.string().optional(),
});

export const Route = createFileRoute("/solutions")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/solutions" },
    ],
    links: [{ rel: "canonical", href: "/solutions" }],
  }),
  component: SolutionsPage,
});

function SolutionsPage() {
  const search = Route.useSearch();
  const [query, setQuery] = useState(search.q ?? "");
  const [category, setCategory] = useState<string>(search.category ?? "All");
  const [industry, setIndustry] = useState<string>(search.industry ?? "All");
  const [active, setActive] = useState<Solution | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return SOLUTIONS.filter((s) => {
      const matchesQuery =
        !q ||
        [s.title, s.summary, s.category, s.industry, ...s.technologies].join(" ").toLowerCase().includes(q);
      const matchesCategory = category === "All" || s.category === category;
      const matchesIndustry = industry === "All" || s.industry === industry;
      return matchesQuery && matchesCategory && matchesIndustry;
    });
  }, [query, category, industry]);

  return (
    <>
      <Section className="relative overflow-hidden pt-14 pb-8">
        <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <SectionHeading
            eyebrow="Solutions"
            title="Systems for machines, infrastructure and railways"
            description="Filter by category, industry or technology. Each solution is labelled by maturity — product, reference architecture, technology direction or concept demo."
          />
        </div>
      </Section>

      <Section className="pt-0">
        <div className="glass rounded-xl p-4">
          <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr]">
            <div className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden />
              <label htmlFor="solution-search" className="sr-only">Search solutions</label>
              <input
                id="solution-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search solutions, technologies…"
                className="w-full rounded-md border border-input bg-surface-2/50 py-2.5 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Select label="Category" value={category} onChange={setCategory} options={["All", ...SOLUTION_CATEGORIES]} />
            <Select label="Industry" value={industry} onChange={setIndustry} options={["All", ...SOLUTION_INDUSTRIES]} />
          </div>
          <p className="mt-3 text-xs text-muted-foreground" aria-live="polite">
            {results.length} solution{results.length === 1 ? "" : "s"} shown
          </p>
        </div>

        <motion.ul layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {results.map((s) => (
              <motion.li
                key={s.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.28 }}
              >
                <OpenableCard onOpen={() => setActive(s)}>
                <GlassCard className="relative flex h-full flex-col overflow-hidden p-6" interactive>
                  <DataFlowBg nodes={s.architecture} seed={s.slug.length} className="opacity-40" />
                  {s.image || SOLUTION_IMAGES[s.slug] ? (
                    <div className="relative -mx-6 -mt-6 mb-4 flex h-48 w-[calc(100%+3rem)] items-center justify-center overflow-hidden border-b border-border/40 bg-surface-2/60 p-3">
                      <img
                        src={s.image ?? SOLUTION_IMAGES[s.slug]}
                        alt={s.title}
                        loading="lazy"
                        className="h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="relative flex items-center justify-between gap-3">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{s.category}</span>
                    <MaturityBadge label={s.maturity} />
                  </div>
                  <h2 className="relative mt-3 font-display text-lg font-semibold">{s.title}</h2>
                  <p className="relative mt-2 flex-1 text-sm text-muted-foreground">{s.summary}</p>
                  <ul className="relative mt-4 flex flex-wrap gap-1.5">
                    {s.technologies.slice(0, 4).map((t) => (
                      <li key={t} className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</li>
                    ))}
                  </ul>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 self-start text-sm text-primary group-hover:underline">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </GlassCard>
                </OpenableCard>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {results.length === 0 ? (
          <GlassCard className="mt-8 p-8 text-center">
            <p className="text-sm text-muted-foreground">No solutions match those filters. Try clearing the search.</p>
          </GlassCard>
        ) : null}
      </Section>

      <SolutionModal solution={active} onClose={() => setActive(null)} />
      <ContactCta />
    </>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (v: string) => void; options: string[] }) {
  const id = `filter-${label.toLowerCase()}`;
  return (
    <div>
      <label htmlFor={id} className="sr-only">{label}</label>
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-input bg-surface-2/50 px-3 py-2.5 text-sm text-foreground"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-popover">{label}: {o}</option>
        ))}
      </select>
    </div>
  );
}

function SolutionModal({ solution, onClose }: { solution: Solution | null; onClose: () => void }) {
  useEffect(() => {
    if (!solution) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [solution, onClose]);

  return (
    <AnimatePresence>
      {solution ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={solution.title}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="glass max-h-[85vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-xl p-6 sm:p-8"
          >
            {solution.image || SOLUTION_IMAGES[solution.slug] ? (
              <div className="relative -mx-6 -mt-6 mb-6 flex h-60 w-[calc(100%+3rem)] items-center justify-center overflow-hidden rounded-t-xl border-b border-border/40 bg-surface-2/60 p-4 sm:-mx-8 sm:-mt-8 sm:h-80 sm:w-[calc(100%+4rem)]">
                <img
                  src={solution.image ?? SOLUTION_IMAGES[solution.slug]}
                  alt={solution.title}
                  loading="lazy"
                  className="h-full max-w-full object-contain"
                />
              </div>
            ) : null}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{solution.category}</span>
                  <MaturityBadge label={solution.maturity} />
                </div>
                <h2 className="mt-2 font-display text-2xl font-semibold">{solution.title}</h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close solution details"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="mt-6 space-y-6 text-sm">
              <Block title="Problem"><p className="text-muted-foreground">{solution.problem}</p></Block>
              <Block title="Solution & Approach"><p className="text-muted-foreground">{solution.approach}</p></Block>

              {solution.scaleInfo || solution.otaCapability ? (
                <div className="grid gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 sm:grid-cols-2">
                  {solution.scaleInfo ? (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-primary">Deployment & Scale</p>
                      <p className="mt-1 text-xs text-foreground/90">{solution.scaleInfo}</p>
                    </div>
                  ) : null}
                  {solution.otaCapability ? (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-primary">OTA & Remote Management</p>
                      <p className="mt-1 text-xs text-foreground/90">{solution.otaCapability}</p>
                    </div>
                  ) : null}
                </div>
              ) : null}

              {solution.workflowSteps && solution.workflowSteps.length > 0 ? (
                <Block title="System Workflow & Process">
                  <ol className="relative space-y-3 pl-4 border-l border-primary/30">
                    {solution.workflowSteps.map((step) => (
                      <li key={step.step} className="relative pl-3">
                        <span className="absolute -left-[21px] top-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-mono text-[10px] font-bold text-primary-foreground">
                          {step.step}
                        </span>
                        <p className="font-display text-sm font-semibold text-foreground">{step.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">{step.description}</p>
                      </li>
                    ))}
                  </ol>
                </Block>
              ) : null}

              {solution.daqMapping && solution.daqMapping.length > 0 ? (
                <Block title="DAQ Physical-to-Digital Signal Bridge">
                  <div className="overflow-x-auto rounded-lg border border-border">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-surface-2/60 font-mono text-[10px] uppercase tracking-wider text-primary">
                        <tr>
                          <th className="px-3 py-2">Physical Parameter</th>
                          <th className="px-3 py-2">DAQ Channel</th>
                          <th className="px-3 py-2">Digital Outcome</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border/50 text-muted-foreground">
                        {solution.daqMapping.map((row, i) => (
                          <tr key={i} className="hover:bg-surface-2/30">
                            <td className="px-3 py-2 font-medium text-foreground">{row.physicalWorld}</td>
                            <td className="px-3 py-2 font-mono text-[11px] text-primary/90">{row.daqInput}</td>
                            <td className="px-3 py-2">{row.digitalOutcome}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Block>
              ) : null}

              <Block title="Technology Stack">
                <ul className="flex flex-wrap gap-1.5">
                  {solution.technologies.map((t) => (
                    <li key={t} className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">{t}</li>
                  ))}
                </ul>
              </Block>
              <Block title="Architecture Signal Chain"><FlowDiagram nodes={solution.architecture} compact /></Block>
              <Block title="Applications">
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  {solution.applications.map((a) => <li key={a}>{a}</li>)}
                </ul>
              </Block>
              <Block title="Expected outcomes">
                <ul className="list-inside list-disc space-y-1 text-muted-foreground">
                  {solution.outcomes.map((o) => <li key={o}>{o}</li>)}
                </ul>
                <p className="mt-3 text-xs text-muted-foreground">
                  Qualitative outcomes only. Quantitative results are published per project after verification.
                </p>
              </Block>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}
