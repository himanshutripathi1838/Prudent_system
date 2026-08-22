import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Boxes,
  Cloud,
  Code2,
  Cpu,
  Database,
  Factory,
  GitBranch,
  LayoutDashboard,
  Lock,
  Network,
  RefreshCw,
  Router,
  ShieldCheck,
  Sparkles,
  Train,
  Waves,
} from "lucide-react";
import { Typewriter } from "@/components/ui/typewriter-text";
import {
  GlassCard,
  MaturityBadge,
  Reveal,
  Section,
  SectionHeading,
} from "@/components/site/primitives";
import { DataFlowBg } from "@/components/viz/DataFlowBg";
import { FlowDiagram } from "@/components/viz/FlowDiagram";
import { ArchitectureFlow } from "@/components/viz/ArchitectureFlow";
import { DetailModal, OpenableCard } from "@/components/site/DetailModal";
import { GradientButton } from "@/components/ui/gradient-button";
import { SOLUTIONS, type Solution } from "@/data/solutions";
import { SOLUTION_IMAGES } from "@/data/solution-images";
import { ACCELERATORS, PRODUCTS, type Product } from "@/data/products";
import { TECH_TAGS } from "@/data/expertise";
import { CLIENTS } from "@/data/company";

import { WordsStagger } from "@/components/ui/words-stagger";
import { useEyeTransition } from "@/components/site/EyeTransitionOverlay";

const ICONS: Record<string, typeof Cpu> = {
  Router,
  Code2,
  LayoutDashboard,
  BrainCircuit,
  Cpu,
  Cloud,
  Database,
  Network,
  ShieldCheck,
  Activity,
  Sparkles,
  GitBranch,
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">{title}</h3>
      <div className="mt-2">{children}</div>
    </section>
  );
}

function AnimatedDataArchitecture({ nodes }: { nodes: string[] }) {
  const stageDescriptions = [
    "Data starts at the field source as movement, position, speed, level, temperature, or machine status.",
    "The signal is captured and converted into clean digital readings.",
    "The controller filters, timestamps, and prepares the data for transfer.",
    "The gateway sends the prepared data securely toward the cloud layer.",
    "The platform turns the stream into dashboards, alerts, and records.",
  ];

  const stageIcons = [Activity, Cpu, Router, Cloud, LayoutDashboard];
  const stages = nodes.map((node, index) => {
    const Icon =
      index === nodes.length - 1
        ? LayoutDashboard
        : (stageIcons[index] ?? stageIcons[stageIcons.length - 1]);

    return {
      label: node,
      description: stageDescriptions[Math.min(index, stageDescriptions.length - 1)],
      Icon,
    };
  });

  return (
    <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-surface-2/45 p-4">
      <DataFlowBg nodes={nodes} seed={nodes.length} className="opacity-35" />
      <div className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Live data path
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Follow how field data travels from source to monitoring insight.
            </p>
          </div>
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[10px] uppercase text-primary">
            Animated flow
          </span>
        </div>

        <ol className="flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {stages.map((stage, index) => (
            <li key={`${stage.label}-${index}`} className="flex flex-1 flex-col lg:flex-row">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.28, delay: index * 0.06 }}
                className="relative flex min-h-36 flex-1 flex-col rounded-lg border border-border bg-background/55 p-4"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                    <stage.Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                    Step {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h4 className="mt-4 font-display text-sm font-semibold text-foreground">
                  {stage.label}
                </h4>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-muted-foreground">
                  {stage.description}
                </p>
                <div className="mt-4 flex items-center gap-1.5" aria-hidden>
                  {[0, 1, 2].map((pulse) => (
                    <motion.span
                      key={pulse}
                      className="h-1.5 w-5 rounded-full bg-primary/70"
                      animate={{ opacity: [0.25, 1, 0.25], scaleX: [0.65, 1, 0.65] }}
                      transition={{
                        duration: 1.1,
                        repeat: Infinity,
                        delay: index * 0.12 + pulse * 0.16,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {index < stages.length - 1 ? (
                <div className="relative flex h-10 items-center justify-center lg:h-auto lg:w-12">
                  <span className="absolute h-full w-px bg-primary/25 lg:h-px lg:w-full" />
                  <motion.span
                    className="absolute h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)] lg:hidden"
                    animate={{ y: [-18, 18], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.12 }}
                  />
                  <motion.span
                    className="absolute hidden h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_16px_var(--color-primary)] lg:block"
                    animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: index * 0.12 }}
                  />
                  <ArrowRight
                    className="absolute hidden h-4 w-4 text-primary lg:block"
                    aria-hidden
                  />
                </div>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="mt-4 rounded-lg border border-border bg-background/45 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
          Data flow: <span className="text-foreground">{nodes.join(" -> ")}</span>
        </p>
      </div>
    </div>
  );
}

function SolutionDetailModal({
  solution,
  onClose,
}: {
  solution: Solution | null;
  onClose: () => void;
}) {
  return (
    <DetailModal
      open={Boolean(solution)}
      onClose={onClose}
      label={solution?.title ?? "Solution"}
      header={
        solution ? (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {solution.category}
              </span>
              <MaturityBadge label={solution.maturity} />
            </div>
            <WordsStagger
              key={`h-title-${solution.slug}`}
              className="mt-2 font-display text-2xl font-semibold text-foreground"
            >
              {solution.title}
            </WordsStagger>
          </>
        ) : null
      }
    >
      {solution ? (
        <div className="space-y-6 text-sm">
          {solution.image || SOLUTION_IMAGES[solution.slug] ? (
            <div className="relative -mx-4 -mt-4 mb-6 flex h-52 w-[calc(100%+2rem)] items-center justify-center overflow-hidden rounded-t-xl border-b border-border/40 bg-surface-2/60 p-3 sm:-mx-6 sm:-mt-6 sm:h-72 sm:w-[calc(100%+3rem)]">
              <img
                src={solution.image ?? SOLUTION_IMAGES[solution.slug]}
                alt={solution.title}
                loading="lazy"
                className="h-full max-w-full object-contain"
              />
            </div>
          ) : null}
          <Block title="Problem">
            <WordsStagger
              key={`h-prob-${solution.slug}`}
              className="text-muted-foreground leading-relaxed"
              stagger={0.04}
              speed={0.3}
            >
              {solution.problem}
            </WordsStagger>
          </Block>
          <Block title="Solution & Approach">
            <WordsStagger
              key={`h-appr-${solution.slug}`}
              className="text-muted-foreground leading-relaxed"
              stagger={0.04}
              speed={0.3}
            >
              {solution.approach}
            </WordsStagger>
          </Block>

          {solution.scaleInfo || solution.otaCapability ? (
            <div className="grid gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 sm:grid-cols-2">
              {solution.scaleInfo ? (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    Deployment & Scale
                  </p>
                  <WordsStagger
                    key={`h-scale-${solution.slug}`}
                    className="mt-1 text-xs text-foreground/90 leading-relaxed"
                    stagger={0.04}
                    speed={0.3}
                  >
                    {solution.scaleInfo}
                  </WordsStagger>
                </div>
              ) : null}
              {solution.otaCapability ? (
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    OTA & Remote Management
                  </p>
                  <WordsStagger
                    key={`h-ota-${solution.slug}`}
                    className="mt-1 text-xs text-foreground/90 leading-relaxed"
                    stagger={0.04}
                    speed={0.3}
                  >
                    {solution.otaCapability}
                  </WordsStagger>
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
                    <p className="font-display text-sm font-semibold text-foreground">
                      {step.title}
                    </p>
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
                        <td className="px-3 py-2 font-medium text-foreground">
                          {row.physicalWorld}
                        </td>
                        <td className="px-3 py-2 font-mono text-[11px] text-primary/90">
                          {row.daqInput}
                        </td>
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
                <li
                  key={t}
                  className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                >
                  {t}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Architecture Signal Chain">
            <FlowDiagram nodes={solution.architecture} compact />
          </Block>
          <Block title="Applications">
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {solution.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Block>
          <Block title="Expected outcomes">
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {solution.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </Block>
          <Link
            to="/solutions"
            search={{ q: solution.title }}
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            Open in Solutions
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      ) : null}
    </DetailModal>
  );
}

function ProductDetailModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  return (
    <DetailModal
      open={Boolean(product)}
      onClose={onClose}
      label={product?.name ?? "Product"}
      header={
        product ? (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {product.category}
              </span>
              <MaturityBadge label={product.status} />
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold">{product.name}</h2>
          </>
        ) : null
      }
    >
      {product ? (
        <div className="space-y-6 text-sm">
          <Block title="Overview">
            <p className="text-muted-foreground">{product.overview}</p>
          </Block>
          <Block title="Features">
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {product.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Block>
          <Block title="Applications">
            <ul className="list-inside list-disc space-y-1 text-muted-foreground">
              {product.applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Block>
          <Block title="Architecture">
            <FlowDiagram nodes={product.architecture} compact />
          </Block>
          <Link
            to="/products/$slug"
            params={{ slug: product.slug }}
            className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
          >
            View full product page
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      ) : null}
    </DetailModal>
  );
}

export function StatsBand() {
  const items = [
    {
      label: "Industrial Technology",
      role: "Builds the physical layer: sensors, embedded electronics, DAQ, rugged devices, and field hardware.",
      link: "This creates trusted machine data for IoT systems.",
      Icon: Factory,
    },
    {
      label: "IoT + AI/ML",
      role: "Connects devices, gateways, cloud dashboards, and AI/ML models into one intelligence layer.",
      link: "This turns raw field data into alerts, predictions, and decisions.",
      Icon: BrainCircuit,
    },
    {
      label: "Railway Solutions",
      role: "Applies the same electronics, connectivity, and analytics stack to railway products and safety systems.",
      link: "This proves the stack in demanding real-world environments.",
      Icon: Train,
    },
    {
      label: "Industry 4.0",
      role: "Combines hardware, IoT, AI/ML, dashboards, OTA, and domain workflows into smart operations.",
      link: "This is the complete sensor-to-insight transformation.",
      Icon: Boxes,
    },
  ];
  return (
    <Section className="py-12 md:py-14">
      <div className="mb-6 max-w-3xl">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          Connected capability flow
        </p>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
          One engineering stack, four linked outcomes
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          These are not separate services. Each layer feeds the next: field hardware captures data,
          IoT and AI make it useful, railway products validate the stack, and Industry 4.0 brings
          the complete system into factories and infrastructure.
        </p>
      </div>

      <ol className="grid gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.06}>
            <li className="relative h-full">
              {i < items.length - 1 ? (
                <ArrowRight
                  className="absolute left-[calc(100%-0.5rem)] top-8 z-10 hidden h-5 w-5 text-primary/70 lg:block"
                  aria-hidden
                />
              ) : null}
              <GlassCard className="relative h-full p-5" interactive>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-primary/25 bg-primary/10 text-primary">
                    <item.Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <span className="rounded-full border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
                    Step {i + 1}
                  </span>
                </div>
                <p className="mt-4 font-display text-lg font-semibold">{item.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.role}</p>
                <div className="mt-4 border-t border-border pt-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Link to next
                  </p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                    {item.link}
                  </p>
                </div>
              </GlassCard>
            </li>
          </Reveal>
        ))}
      </ol>
      <p className="mt-4 text-xs text-muted-foreground">
        Quantitative company metrics are published only once verified by Prudent Systems.
      </p>
    </Section>
  );
}

export function WhoWeAre() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Who We Are"
            title="An IoT and AI/ML solutions partner for industrial systems"
            description="Prudent Systems works where embedded engineering meets advanced computing: acquiring signals from real machines, moving them securely to the edge and cloud, and turning them into decisions people act on. The same team designs the hardware, the firmware, the pipeline and the dashboard."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              About Prudent Systems
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              What we engineer
            </p>
            <div className="grid gap-3.5 sm:grid-cols-2">
              {[
                {
                  Icon: Cpu,
                  title: "Firmware & DAQ",
                  text: "Firmware and acquisition hardware for industrial and railway environments.",
                },
                {
                  Icon: Network,
                  title: "Connectivity",
                  text: "MQTT, OPC-UA, Modbus, LoRa and NB-IoT bridged through a universal gateway.",
                },
                {
                  Icon: BrainCircuit,
                  title: "Edge & Cloud AI",
                  text: "Anomaly detection and prediction across edge nodes and cloud analytics.",
                },
                {
                  Icon: ShieldCheck,
                  title: "Secure Operations",
                  text: "Signed firmware, authenticated devices, encrypted transport and recoverable OTA.",
                },
              ].map((row, idx) => (
                <Reveal key={row.title} delay={0.06 * idx}>
                  <GlassCard
                    className="group relative h-full overflow-hidden p-5 transition-transform duration-300 hover:-translate-y-1"
                    interactive
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/20">
                      <row.Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <h4 className="mt-3.5 font-display text-base font-semibold text-foreground">
                      {row.title}
                    </h4>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {row.text}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

const PREVIEW_ICONS: Record<string, typeof Cpu> = {
  Railways: Train,
  "Industrial IoT": Activity,
  "Industry 4.0": Factory,
  "AI/ML Monitoring": BrainCircuit,
  "Smart Infrastructure": Waves,
  "Industrial Monitoring": Network,
  Energy: Sparkles,
};

export function SolutionPreview() {
  const featured = SOLUTIONS.slice(0, 4);
  const [active, setActive] = useState<Solution | null>(null);
  return (
    <Section>
      <SectionHeading
        eyebrow="Flagship Verticals"
        title={<Typewriter text="Where our systems run" speed={60} cursor="" />}
        description="Domain-focused solution families built on one shared sensor-to-insight architecture."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((s, i) => {
          const Icon = PREVIEW_ICONS[s.category] ?? Cpu;
          return (
            <Reveal key={s.slug} delay={i * 0.06}>
              <OpenableCard onOpen={() => setActive(s)}>
                <GlassCard className="group relative h-full overflow-hidden p-6" interactive>
                  <DataFlowBg nodes={s.architecture} seed={i} className="opacity-40" />
                  <Icon className="relative h-6 w-6 text-primary" aria-hidden />
                  <h3 className="relative mt-4 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground">{s.summary}</p>
                  <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" aria-hidden />
                  </span>
                </GlassCard>
              </OpenableCard>
            </Reveal>
          );
        })}
      </div>
      <SolutionDetailModal solution={active} onClose={() => setActive(null)} />
    </Section>
  );
}

export function SolutionPortfolio() {
  const { openSolutionWithEyeTransition } = useEyeTransition();
  const [activePreview, setActivePreview] = useState<Solution | null>(null);

  const openCompleteDetails = (slug: string) => {
    setActivePreview(null);
    openSolutionWithEyeTransition(slug);
  };

  return (
    <Section className="bg-surface/30">
      <SectionHeading
        eyebrow="Solution Portfolio"
        title={
          <Typewriter text="A portfolio built from one engineering stack" speed={45} cursor="" />
        }
        description="Each entry is labelled by maturity so deployed products are never confused with reference architectures or concepts."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SOLUTIONS.map((s, i) => (
          <Reveal key={s.slug} delay={(i % 3) * 0.05}>
            <OpenableCard onOpen={() => setActivePreview(s)}>
              <GlassCard
                className="group relative flex h-full flex-col overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                interactive
              >
                <DataFlowBg nodes={s.architecture} seed={i} className="opacity-40" />
                {s.image || SOLUTION_IMAGES[s.slug] ? (
                  <div className="relative -mx-6 -mt-6 mb-4 flex h-44 w-[calc(100%+3rem)] items-center justify-center overflow-hidden border-b border-border/40 bg-surface-2/60 p-3">
                    <img
                      src={s.image ?? SOLUTION_IMAGES[s.slug]}
                      alt={s.title}
                      loading="lazy"
                      className="h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                ) : null}
                <div className="relative flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    {s.category}
                  </span>
                  <MaturityBadge label={s.maturity} />
                </div>
                <h3 className="relative mt-3 font-display text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  {s.title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm text-muted-foreground">
                  Touch the card to preview the problem, purpose, architecture, and details.
                </p>

                <span className="relative mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md border border-primary/40 bg-primary/10 px-4 py-2.5 text-sm font-medium text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <img
                    src="/eyes-icon.gif"
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-auto animate-eyes-blink object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                  Preview solution
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </GlassCard>
            </OpenableCard>
          </Reveal>
        ))}
      </div>
      <SolutionPreviewModal
        solution={activePreview}
        onClose={() => setActivePreview(null)}
        onOpenDetails={openCompleteDetails}
      />
    </Section>
  );
}

function SolutionPreviewModal({
  solution,
  onClose,
  onOpenDetails,
}: {
  solution: Solution | null;
  onClose: () => void;
  onOpenDetails: (slug: string) => void;
}) {
  return (
    <DetailModal
      open={Boolean(solution)}
      onClose={onClose}
      label={solution ? `Understand ${solution.title}` : "Solution preview"}
      header={
        solution ? (
          <>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                {solution.category}
              </span>
              <MaturityBadge label={solution.maturity} />
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
              {solution.title}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Start with a simple explanation, then open the complete technical details.
            </p>
          </>
        ) : null
      }
    >
      {solution ? (
        <div className="space-y-6 text-sm">
          {solution.image || SOLUTION_IMAGES[solution.slug] ? (
            <div className="relative -mx-4 -mt-2 flex h-56 w-[calc(100%+2rem)] items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-surface-2/70 p-4 sm:h-72">
              <img
                src={solution.image ?? SOLUTION_IMAGES[solution.slug]}
                alt={solution.title}
                loading="lazy"
                className="h-full max-w-full object-contain"
              />
            </div>
          ) : null}

          <section className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Problem
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">{solution.problem}</p>
          </section>

          <div className="grid gap-3 sm:grid-cols-2">
            <section className="rounded-lg border border-border bg-surface-2/45 p-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                What is {solution.title}?
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {solution.title} is a {solution.category.toLowerCase()} solution that connects field
                sensors, embedded electronics, and software so real-world data becomes useful
                monitoring information.
              </p>
            </section>
            <section className="rounded-lg border border-border bg-surface-2/45 p-4">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                What does it do?
              </h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{solution.approach}</p>
            </section>
          </div>

          <section>
            <div className="mb-3 flex items-center justify-between gap-3">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
                Animated Architecture
              </h3>
              <span className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                {solution.architecture.length} stages
              </span>
            </div>
            <AnimatedDataArchitecture nodes={solution.architecture} />
          </section>

          <button
            type="button"
            onClick={() => onOpenDetails(solution.slug)}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            Complete solution details
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      ) : null}
    </DetailModal>
  );
}

export function Accelerators() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Engineering Accelerators"
        title="Reusable building blocks, not blank pages"
        description="Every engagement starts from hardened components so effort goes into the domain problem instead of rebuilt plumbing."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACCELERATORS.map((a, i) => {
          const Icon = ICONS[a.icon] ?? Cpu;
          return (
            <Reveal key={a.title} delay={i * 0.06}>
              <GlassCard className="h-full p-6" interactive>
                <Icon className="h-6 w-6 text-primary" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.description}</p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function IoTPlatform() {
  const caps = [
    {
      title: "Device Management",
      text: "Provisioning, identity, configuration and firmware state for every connected node.",
      Icon: Router,
    },
    {
      title: "Telemetry",
      text: "Continuous ingestion of machine signals with buffering and time-series storage.",
      Icon: Activity,
    },
    {
      title: "Rules",
      text: "Threshold and pattern rules that turn telemetry into alerts and actions.",
      Icon: GitBranch,
    },
    {
      title: "Analytics",
      text: "Aggregation into OEE, energy, utilisation and health views.",
      Icon: LayoutDashboard,
    },
  ];
  return (
    <Section className="bg-surface/30">
      <SectionHeading
        eyebrow="Platform Capability · Technology Direction"
        title="Prudent IoT Platform"
        description="The platform layer that binds devices, telemetry, rules and analytics into one operational picture. Presented as platform capability and technology direction."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {caps.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.06}>
            <GlassCard className="h-full p-6" interactive>
              <c.Icon className="h-6 w-6 text-primary" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.text}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.1}>
        <FlowDiagram
          className="mt-10"
          compact
          nodes={[
            "Devices",
            "Gateway",
            "Connectivity",
            "IoT Platform",
            "Telemetry",
            "Rules",
            "Analytics",
            "Dashboard",
          ]}
        />
      </Reveal>
    </Section>
  );
}

export function ArchitectureSection() {
  return (
    <Section id="architecture">
      <SectionHeading
        eyebrow="Reference Architecture"
        title="From Sensor to Insight"
        description="Select any stage to see what happens to industrial data as it moves from the physical world to a decision."
      />
      <div className="mt-10">
        <ArchitectureFlow />
      </div>
    </Section>
  );
}

export function OtaSection() {
  const security = [
    "Secure Boot",
    "Signed Firmware",
    "Digital Signature",
    "TLS / HTTPS",
    "MQTTS",
    "Device Authentication",
    "Unique Certificates",
    "Rollback",
  ];
  return (
    <Section className="bg-surface/30">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow="Secure OTA"
            title="Secure Over-The-Air Updates"
            description="Field devices must be updatable without a truck roll — and without becoming an attack surface. Firmware is signed before it leaves the build system, verified on the device, and recoverable if an update fails."
          />
          <ul className="mt-8 flex flex-wrap gap-2">
            {security.map((s) => (
              <li
                key={s}
                className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-2/50 px-3 py-1.5 text-xs text-muted-foreground"
              >
                <Lock className="h-3.5 w-3.5 text-primary" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <RefreshCw className="h-4 w-4 text-primary" aria-hidden />
            AI model delivery over the same signed OTA channel is an advanced capability direction.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard className="p-6">
            <FlowDiagram
              orientation="vertical"
              compact
              nodes={[
                { label: "Firmware", hint: "build output" },
                { label: "Signing", hint: "digital signature" },
                { label: "Secure Upload", hint: "TLS" },
                { label: "OTA Server", hint: "cloud" },
                { label: "Device", hint: "authenticated" },
                { label: "Verification", hint: "secure boot" },
                { label: "Update", hint: "atomic" },
                { label: "Rollback / Recovery", hint: "failsafe" },
              ]}
            />
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

export function FeaturedProducts() {
  const [active, setActive] = useState<Product | null>(null);
  return (
    <Section>
      <SectionHeading
        eyebrow="Products"
        title="Featured products & platform components"
        description="Technical specifications are published per product only after verification."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 0.05}>
            <OpenableCard onOpen={() => setActive(p)}>
              <GlassCard className="flex h-full flex-col p-6" interactive>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                    {p.category}
                  </span>
                  <MaturityBadge label={p.status} />
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.summary}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
                  View product
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </span>
              </GlassCard>
            </OpenableCard>
          </Reveal>
        ))}
      </div>
      <ProductDetailModal product={active} onClose={() => setActive(null)} />
    </Section>
  );
}

export function RailwayHighlight() {
  return (
    <Section className="relative overflow-hidden bg-surface/30">
      <div className="grid-tech absolute inset-0 opacity-40" aria-hidden />
      <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Railway Technology"
            title="Electronics engineered for the track"
            description="Railway systems demand equipment that survives vibration, temperature swings and long unattended duty cycles. Our railway portfolio includes GPS monitoring systems and the Digital Speedometer."
          />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {PRODUCTS.filter((p) => p.category === "Railways").map((p) => (
              <li key={p.slug}>
                <GlassCard className="h-full p-5" interactive>
                  <Train className="h-5 w-5 text-primary" aria-hidden />
                  <h3 className="mt-3 font-display text-base font-semibold">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.summary}</p>
                </GlassCard>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <GradientButton variant="variant" asChild className="gap-2">
              <Link to="/solutions" search={{ q: "Railway" }}>
                Explore Railway Solutions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </GradientButton>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard className="p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Railway signal chain
            </p>
            <FlowDiagram
              className="mt-4"
              orientation="vertical"
              compact
              nodes={[
                "Sensors",
                "Controller",
                "Local Storage",
                "Connectivity",
                "Monitoring Dashboard",
              ]}
            />
            <p className="mt-5 text-xs text-muted-foreground">
              Deployment and partnership figures are published only when officially confirmed.
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

export function ExpertisePreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Technical Expertise"
        title="The stack behind the systems"
        description="From bare-metal firmware to cloud analytics, one team owns the whole chain."
      />
      <div className="mt-10 flex flex-wrap gap-2.5">
        {TECH_TAGS.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: (i % 12) * 0.04 }}
            className="rounded-full border border-border bg-surface-2/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <Link
        to="/expertise"
        className="mt-8 inline-flex items-center gap-2 text-sm text-primary hover:underline"
      >
        See full technical expertise
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </Section>
  );
}

export function ClientLogos() {
  if (CLIENTS.length === 0) {
    return (
      <Section className="py-14">
        <GlassCard className="p-6 text-center">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
            Clients &amp; Partners
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Client and partner logos are displayed here once officially confirmed by Prudent
            Systems. We do not publish unverified logos or customer claims.
          </p>
        </GlassCard>
      </Section>
    );
  }
  return (
    <Section className="py-14">
      <div className="relative overflow-hidden">
        <ul className="flex w-max gap-12" style={{ animation: "marquee-x 30s linear infinite" }}>
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <li key={c.name + i} className="text-sm text-muted-foreground">
              {c.name}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function ContactCta() {
  return (
    <Section className="pb-10">
      <Reveal>
        <GlassCard className="glow-ring relative overflow-hidden p-10 text-center sm:p-14">
          <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
          <div className="relative">
            <h2 className="text-3xl font-semibold text-balance sm:text-5xl">
              Let's Build What's Next.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Tell us about the machines, assets or infrastructure you want to connect — we'll map
              the path from sensor to insight.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <GradientButton variant="variant" asChild className="gap-2">
                <Link to="/contact">
                  Talk to Our Experts
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </GradientButton>
              <GradientButton variant="default" asChild className="gap-2">
                <Link to="/solutions">Explore Solutions</Link>
              </GradientButton>
            </div>
          </div>
        </GlassCard>
      </Reveal>
    </Section>
  );
}
