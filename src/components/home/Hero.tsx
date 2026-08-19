import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { SceneMount } from "@/components/three/SceneMount";
import { Typewriter } from "@/components/ui/typewriter-text";
import { GradientButton } from "@/components/ui/gradient-button";

const CHIPS = ["IoT", "AI/ML", "Edge AI", "OTA", "Cloud", "DAQ", "Industrial Monitoring", "Industry 4.0"];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-16 pb-24 sm:px-8 md:pt-24 md:pb-32">
      <div className="grid-tech absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute inset-0"
        aria-hidden
        style={{ background: "var(--gradient-hero)" }}
      />
      <SceneMount className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/2 opacity-70 md:block" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" aria-hidden />
            Industrial IoT · Edge AI · Industry 4.0
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-6 text-4xl font-semibold leading-[1.05] text-balance sm:text-5xl lg:text-6xl"
          >
            Turning Smart Devices into{" "}
            <span className="text-gradient">
              <Typewriter text={["Intelligent Decisions.", "Predictive Insight.", "Industry 4.0 Action."]} speed={80} deleteSpeed={40} loop />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Prudent Systems builds end-to-end Industry 4.0 systems — universal IoT gateways, secure OTA,
            edge AI, cloud dashboards and predictive monitoring — so industrial and railway assets produce
            data that changes decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <GradientButton variant="variant" asChild className="gap-2">
              <Link to="/solutions">
                Explore Solutions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </GradientButton>
            <GradientButton variant="default" asChild className="gap-2">
              <Link to="/contact">
                Talk to Our Experts
                <ArrowUpRight className="h-4 w-4" aria-hidden />
              </Link>
            </GradientButton>
          </motion.div>

          <ul className="mt-10 flex flex-wrap gap-2">
            {CHIPS.map((chip, i) => (
              <motion.li
                key={chip}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.05 }}
                className="rounded-full border border-border bg-surface-2/50 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground"
              >
                {chip}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="relative h-[320px] md:h-[440px]">
          <SceneMount className="absolute inset-0 md:hidden" />
          <div className="glass absolute inset-x-0 bottom-0 rounded-xl p-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Signal path</p>
            <p className="mt-2 font-display text-sm leading-relaxed">
              Sensor → DAQ → Edge → Connectivity → Cloud → AI/ML → Insight → Action
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
