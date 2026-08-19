import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface FlowNode {
  label: string;
  hint?: string;
}

export function FlowDiagram({
  nodes, orientation = "auto", className, compact = false,
}: {
  nodes: (FlowNode | string)[];
  orientation?: "auto" | "vertical";
  className?: string;
  compact?: boolean;
}) {
  const items = nodes.map((n) => (typeof n === "string" ? { label: n } : n));
  return (
    <ol
      className={cn(
        "flex flex-col items-stretch gap-3",
        orientation === "auto" && "md:flex-row md:flex-wrap md:items-center",
        className,
      )}
    >
      {items.map((node, i) => (
        <li
          key={node.label + i}
          className={cn("flex items-center gap-3", orientation === "auto" && "md:flex-1 md:min-w-[150px]")}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.07 }}
            className={cn(
              "glass flex-1 rounded-lg border-primary/20 text-center",
              compact ? "px-3 py-2" : "px-4 py-3",
            )}
          >
            <span className="block font-display text-sm font-medium">{node.label}</span>
            {node.hint ? (
              <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {node.hint}
              </span>
            ) : null}
          </motion.div>
          {i < items.length - 1 ? <FlowArrow /> : null}
        </li>
      ))}
    </ol>
  );
}

function FlowArrow() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 40 12"
      className="hidden h-3 w-8 shrink-0 text-primary md:block"
    >
      <line x1="0" y1="6" x2="32" y2="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.8">
        <animate attributeName="stroke-dashoffset" from="8" to="0" dur="0.8s" repeatCount="indefinite" />
      </line>
      <path d="M31 2 L39 6 L31 10 Z" fill="currentColor" />
    </svg>
  );
}
