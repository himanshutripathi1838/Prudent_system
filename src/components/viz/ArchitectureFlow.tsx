import { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  BrainCircuit,
  Cloud,
  Cpu,
  Gauge,
  LayoutDashboard,
  Radio,
  Siren,
  Waves,
} from "lucide-react";
import { GlassCard } from "@/components/site/primitives";

const STAGES = [
  {
    key: "sensors",
    label: "Sensors",
    Icon: Waves,
    tech: "Temperature · Vibration · Current · Pressure",
    detail:
      "Physical parameters are picked up by industrial sensors mounted on machines, panels and infrastructure.",
  },
  {
    key: "daq",
    label: "DAQ",
    Icon: Activity,
    tech: "Analog · 4-20mA · Pulse · Digital I/O",
    detail:
      "Modular data acquisition conditions and samples raw signals into clean, timestamped engineering values.",
  },
  {
    key: "edge",
    label: "Edge Gateway",
    Icon: Cpu,
    tech: "Buffering · Edge AI · Local rules",
    detail:
      "The gateway normalises protocols, buffers during outages and can run inference locally for low latency.",
  },
  {
    key: "connectivity",
    label: "Connectivity",
    Icon: Radio,
    tech: "MQTT · OPC-UA · LoRa · NB-IoT · Wireless",
    detail: "Data is published over industrial and IoT protocols on secured transport.",
  },
  {
    key: "cloud",
    label: "Cloud",
    Icon: Cloud,
    tech: "Ingestion · Time-series storage",
    detail: "Telemetry is ingested, stored and made queryable for history and analytics.",
  },
  {
    key: "ai",
    label: "AI / ML",
    Icon: BrainCircuit,
    tech: "Anomaly detection · Prediction",
    detail:
      "Models detect deviations and predict developing conditions from historical and live signals.",
  },
  {
    key: "analytics",
    label: "Analytics",
    Icon: Gauge,
    tech: "OEE · Energy · Utilisation",
    detail:
      "Aggregations turn raw telemetry into operational metrics such as OEE, energy per asset and utilisation.",
  },
  {
    key: "dashboard",
    label: "Dashboard",
    Icon: LayoutDashboard,
    tech: "Web · Mobile",
    detail:
      "Operators and management see the current and historical state of every connected asset.",
  },
  {
    key: "alerts",
    label: "Alerts / Control",
    Icon: Siren,
    tech: "Rules · Notifications",
    detail: "Rules raise alerts and feed control actions so data ends in a decision, not a report.",
  },
] as const;

export function ArchitectureFlow() {
  const [active, setActive] = useState(0);
  const Current = STAGES[active] ?? STAGES[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      <GlassCard className="p-5 sm:p-6">
        <ol className="grid gap-2 sm:grid-cols-3">
          {STAGES.map((stage, i) => {
            const isActive = i === active;
            return (
              <li key={stage.key}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`group relative flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition-colors ${
                    isActive
                      ? "border-primary/60 bg-primary/10 text-foreground"
                      : "border-border bg-surface-2/40 text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <span className="font-mono text-[10px] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <stage.Icon className={`h-4 w-4 ${isActive ? "text-primary" : ""}`} aria-hidden />
                  <span className="text-sm font-medium">{stage.label}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <svg viewBox="0 0 600 40" className="mt-5 h-10 w-full text-primary" aria-hidden>
          <line
            x1="10"
            y1="20"
            x2="590"
            y2="20"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.25"
          />
          <line
            x1="10"
            y1="20"
            x2="590"
            y2="20"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="12 188"
            strokeLinecap="round"
            style={{ animation: "flow-dash 3s linear infinite" }}
          />
          {STAGES.map((_, i) => (
            <circle
              key={i}
              cx={10 + (i * 580) / (STAGES.length - 1)}
              cy="20"
              r={i === active ? 5 : 3}
              fill="currentColor"
              opacity={i === active ? 1 : 0.5}
            />
          ))}
        </svg>
      </GlassCard>

      <motion.div
        key={Current.key}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <GlassCard className="h-full border-primary/25 p-6">
          <Current.Icon className="h-7 w-7 text-primary" aria-hidden />
          <h3 className="mt-4 font-display text-2xl font-semibold">{Current.label}</h3>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-primary">
            {Current.tech}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{Current.detail}</p>
          <p className="mt-6 text-xs text-muted-foreground">
            Stage {active + 1} of {STAGES.length} in the Prudent Systems Industry 4.0 reference
            architecture.
          </p>
        </GlassCard>
      </motion.div>
    </div>
  );
}
