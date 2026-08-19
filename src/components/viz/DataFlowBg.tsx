import { motion } from "motion/react";
import { useMemo } from "react";
import { cn } from "@/lib/utils";

/**
 * Animated background showing where the data comes from for a solution:
 * source (sensor / train / meter) -> edge -> connectivity -> cloud.
 * Purely decorative.
 */
export function DataFlowBg({
  nodes,
  className,
  seed = 0,
  showLabels = true,
}: {
  nodes: string[];
  className?: string;
  seed?: number;
  showLabels?: boolean;
}) {
  const stages = useMemo(() => {
    const list = nodes.length ? nodes : ["Sensor", "Edge", "Cloud"];
    return list.slice(0, 5);
  }, [nodes]);

  const width = 320;
  const height = 160;
  const y = height / 2;
  const points = stages.map((label, i) => ({
    label,
    x: 26 + (i * (width - 52)) / Math.max(1, stages.length - 1),
  }));

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="none"
        className="h-full w-full opacity-[0.55]"
      >
        <defs>
          <linearGradient id={`dfg-${seed}`} x1="0" x2="1">
            <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.05" />
            <stop offset="50%" stopColor="var(--color-primary)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* signal path */}
        <path
          d={`M ${points[0]?.x ?? 0} ${y} ${points.map((p) => `L ${p.x} ${y}`).join(" ")}`}
          stroke={`url(#dfg-${seed})`}
          strokeWidth="1"
          fill="none"
        />

        {/* transmission arcs from the source node */}
        {[0, 1, 2].map((r) => (
          <motion.circle
            key={r}
            cx={points[0]?.x ?? 0}
            cy={y}
            r={6}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="0.8"
            initial={{ scale: 0.4, opacity: 0.5 }}
            animate={{ scale: [0.4, 2.6], opacity: [0.5, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, delay: r * 0.85 + seed * 0.15, ease: "easeOut" }}
            style={{ transformOrigin: `${points[0]?.x ?? 0}px ${y}px` }}
          />
        ))}

        {/* stage nodes */}
        {points.map((p, i) => (
          <g key={p.label + i}>
            <motion.circle
              cx={p.x}
              cy={y}
              r={2.6}
              fill="var(--color-primary)"
              initial={{ opacity: 0.25 }}
              animate={{ opacity: [0.25, 0.9, 0.25] }}
              transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 + seed * 0.1 }}
            />
            <circle cx={p.x} cy={y} r={7} fill="none" stroke="var(--color-primary)" strokeOpacity="0.18" />
          </g>
        ))}

        {/* data packets travelling along the chain */}
        {[0, 1].map((k) => (
          <motion.circle
            key={k}
            r={2}
            cy={y}
            fill="var(--color-primary)"
            initial={{ opacity: 0 }}
            animate={{
              cx: points.map((p) => p.x),
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              delay: k * 1.7 + seed * 0.2,
              ease: "linear",
              times: points.map((_, i) => i / Math.max(1, points.length - 1)),
            }}
          />
        ))}
      </svg>

      {showLabels ? (
        <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between">
          {points.map((p, i) => (
            <span
              key={p.label + i}
              className="max-w-[64px] truncate font-mono text-[8px] uppercase tracking-wider text-primary/45"
            >
              {p.label}
            </span>
          ))}
        </div>
      ) : null}
    </div>
  );
}
