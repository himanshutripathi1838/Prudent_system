import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id, className, children, ...rest
}: { id?: string; className?: string; children: ReactNode } & { "aria-label"?: string }) {
  return (
    <section id={id} className={cn("relative px-5 py-20 sm:px-8 md:py-28", className)} {...rest}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
      <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow, title, description, align = "left",
}: { eyebrow?: string; title: ReactNode; description?: ReactNode; align?: "left" | "center" }) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-4 text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}

export function Reveal({
  children, delay = 0, className,
}: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function GlassCard({
  children, className, interactive = false,
}: { children: ReactNode; className?: string; interactive?: boolean }) {
  return (
    <div
      className={cn(
        "glass relative overflow-hidden rounded-xl p-6",
        interactive &&
          "cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_24px_60px_-30px_var(--color-primary)] active:scale-[0.98] active:opacity-90 active:border-primary/60 active:shadow-[0_24px_60px_-20px_var(--color-primary)] touch-manipulation",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MaturityBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface-2/70 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
      {label}
    </span>
  );
}

export function DemoDataNotice({ className }: { className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 rounded-md border border-warn/40 bg-warn/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-warn",
        className,
      )}
    >
      Concept Demo — Not Live Industrial Data
    </p>
  );
}
