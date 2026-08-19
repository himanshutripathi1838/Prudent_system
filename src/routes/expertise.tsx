import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Activity, BrainCircuit, Cloud, Cpu, Database, GitBranch, Network, ShieldCheck, Sparkles,
} from "lucide-react";
import { GlassCard, Reveal, Section, SectionHeading } from "@/components/site/primitives";
import { DetailModal, OpenableCard } from "@/components/site/DetailModal";
import { FlowDiagram } from "@/components/viz/FlowDiagram";
import { CAPABILITIES, TECH_TAGS } from "@/data/expertise";
import { ContactCta } from "@/components/home/sections";

const TITLE = "Technical Expertise — Embedded, Edge AI, Cloud & Security | Prudent Systems";
const DESCRIPTION =
  "Embedded systems, data acquisition, edge AI, industrial connectivity, cloud platform, data engineering, AI/ML, DevOps and secure OTA capability at Prudent Systems.";

const ICONS = { Cpu, Activity, BrainCircuit, Network, Cloud, Database, Sparkles, GitBranch, ShieldCheck } as const;

export const Route = createFileRoute("/expertise")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/expertise" },
    ],
    links: [{ rel: "canonical", href: "/expertise" }],
  }),
  component: ExpertisePage,
});

function ExpertisePage() {
  const [active, setActive] = useState<(typeof CAPABILITIES)[number] | null>(null);
  const ActiveIcon = active ? (ICONS[active.icon as keyof typeof ICONS] ?? Cpu) : Cpu;
  return (
    <>
      <Section className="relative overflow-hidden pt-14">
        <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <SectionHeading
            eyebrow="Technical Expertise"
            title="One team, the entire signal chain"
            description="Industrial intelligence breaks at handoffs. These capabilities exist together so a sensor decision, a firmware decision and a model decision are made by people who see the same system."
          />
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((c, i) => {
            const Icon = ICONS[c.icon as keyof typeof ICONS] ?? Cpu;
            return (
              <Reveal key={c.title} delay={(i % 3) * 0.05}>
                <OpenableCard onOpen={() => setActive(c)}>
                <GlassCard className="flex h-full flex-col p-6" interactive>
                  <Icon className="h-6 w-6 text-primary" aria-hidden />
                  <h2 className="mt-4 font-display text-lg font-semibold">{c.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <li key={t} className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">{t}</li>
                    ))}
                  </ul>
                  <span className="mt-5 text-sm text-primary">View capability →</span>
                </GlassCard>
                </OpenableCard>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section className="bg-surface/30">
        <SectionHeading eyebrow="Signal Flow" title="Sensor → DAQ → Edge → Cloud → Insight" />
        <Reveal>
          <GlassCard className="mt-8 p-6">
            <FlowDiagram
              nodes={[
                { label: "Sensor", hint: "physical" },
                { label: "DAQ", hint: "conditioning" },
                { label: "Edge", hint: "compute" },
                { label: "Cloud", hint: "storage" },
                { label: "Insight", hint: "decision" },
              ]}
            />
          </GlassCard>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="Technology Stack" title="Technologies we work with" />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {TECH_TAGS.map((t) => (
            <motion.li
              key={t}
              whileHover={{ y: -3, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="cursor-default rounded-full border border-border bg-surface-2/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            >
              {t}
            </motion.li>
          ))}
        </ul>
      </Section>

      <DetailModal
        open={active !== null}
        onClose={() => setActive(null)}
        label={active?.title ?? "Capability"}
        header={
          <div>
            <ActiveIcon className="h-6 w-6 text-primary" aria-hidden />
            <h2 className="mt-3 font-display text-2xl font-semibold">{active?.title}</h2>
          </div>
        }
      >
        {active ? (
          <div className="space-y-6 text-sm">
            <p className="text-muted-foreground">{active.description}</p>
            <section>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Technologies</h3>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {active.tags.map((t) => (
                  <li key={t} className="rounded border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground">{t}</li>
                ))}
              </ul>
            </section>
          </div>
        ) : null}
      </DetailModal>

      <ContactCta />
    </>
  );
}
