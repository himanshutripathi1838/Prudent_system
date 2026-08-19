import { useEffect, useMemo, useState } from "react";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { Activity, AlertTriangle, CheckCircle2, Cpu, Gauge, Thermometer, Waves, Zap } from "lucide-react";
import { DemoDataNotice, GlassCard } from "@/components/site/primitives";

function seedSeries(seed: number, base: number, spread: number, n = 24) {
  let s = seed;
  const rand = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: n }, (_, i) => ({
    t: `${String(i).padStart(2, "0")}:00`,
    value: Number((base + (rand() - 0.5) * spread + Math.sin(i / 3) * spread * 0.4).toFixed(1)),
  }));
}

const KPIS = [
  { label: "Total Machines", value: "24", Icon: Cpu, tone: "text-primary" },
  { label: "Online", value: "21", Icon: CheckCircle2, tone: "text-ok" },
  { label: "Warning", value: "2", Icon: AlertTriangle, tone: "text-warn" },
  { label: "Critical", value: "1", Icon: Activity, tone: "text-destructive" },
];

export function ConceptDashboard() {
  const temperature = useMemo(() => seedSeries(11, 62, 9), []);
  const vibration = useMemo(() => seedSeries(29, 3.4, 1.8), []);
  const energy = useMemo(() => seedSeries(47, 18, 7), []);
  const utilisation = useMemo(
    () => ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d, i) => ({ t: d, value: 62 + ((i * 13) % 27) })),
    [],
  );

  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      if (document.visibilityState === "visible") setTick((t) => t + 1);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const live = [
    { label: "Temperature", value: `${(64 + (tick % 3) * 1.4).toFixed(1)} °C`, Icon: Thermometer },
    { label: "Vibration", value: `${(3.6 + (tick % 4) * 0.3).toFixed(2)} mm/s`, Icon: Waves },
    { label: "RPM", value: `${1440 + (tick % 5) * 6}`, Icon: Gauge },
    { label: "Energy", value: `${(18.4 + (tick % 3) * 0.7).toFixed(1)} kW`, Icon: Zap },
  ];

  return (
    <div className="space-y-5">
      <DemoDataNotice />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {KPIS.map(({ label, value, Icon, tone }) => (
          <GlassCard key={label} className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{label}</span>
              <Icon className={`h-4 w-4 ${tone}`} aria-hidden />
            </div>
            <p className="mt-2 font-display text-2xl font-semibold">{value}</p>
          </GlassCard>
        ))}
      </div>

      <GlassCard className="p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold">Machine CNC-01</h3>
            <p className="text-xs text-muted-foreground">Simulated telemetry stream</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-warn/40 bg-warn/10 px-3 py-1 text-xs text-warn">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-warn" aria-hidden />
            Status: Warning
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {live.map(({ label, value, Icon }) => (
            <div key={label} className="rounded-lg border border-border bg-surface-2/50 p-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Icon className="h-3.5 w-3.5 text-primary" aria-hidden />
                {label}
              </div>
              <p className="mt-1 font-mono text-lg">{value}</p>
            </div>
          ))}
        </div>
      </GlassCard>

      <div className="grid gap-4 lg:grid-cols-2">
        <ChartCard title="Temperature trend (°C)">
          <AreaChart data={temperature}>
            <defs>
              <linearGradient id="tempFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
              </linearGradient>
            </defs>
            {chartAxes()}
            <Area type="monotone" dataKey="value" stroke="var(--color-chart-1)" fill="url(#tempFill)" strokeWidth={2} />
          </AreaChart>
        </ChartCard>

        <ChartCard title="Vibration trend (mm/s)">
          <LineChart data={vibration}>
            {chartAxes()}
            <Line type="monotone" dataKey="value" stroke="var(--color-chart-3)" strokeWidth={2} dot={false} />
          </LineChart>
        </ChartCard>

        <ChartCard title="Energy trend (kW)">
          <AreaChart data={energy}>
            <defs>
              <linearGradient id="enFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.5} />
                <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
              </linearGradient>
            </defs>
            {chartAxes()}
            <Area type="monotone" dataKey="value" stroke="var(--color-chart-2)" fill="url(#enFill)" strokeWidth={2} />
          </AreaChart>
        </ChartCard>

        <ChartCard title="Machine utilisation (%)">
          <BarChart data={utilisation}>
            {chartAxes()}
            <Bar dataKey="value" fill="var(--color-chart-4)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ChartCard>
      </div>

      <GlassCard className="border-primary/30 bg-primary/5 p-5">
        <p className="font-mono text-[11px] uppercase tracking-wider text-primary">AI Insight</p>
        <p className="mt-2 text-sm text-foreground">
          "Abnormal vibration pattern detected." — illustrative model output for the concept demo, not a live diagnosis.
        </p>
      </GlassCard>
    </div>
  );
}

function chartAxes() {
  return (
    <>
      <CartesianGrid stroke="var(--color-border)" strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="t" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} interval="preserveStartEnd" />
      <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} width={34} />
      <Tooltip
        contentStyle={{
          background: "var(--color-popover)",
          border: "1px solid var(--color-border)",
          borderRadius: 8,
          color: "var(--color-foreground)",
          fontSize: 12,
        }}
      />
    </>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactElement }) {
  return (
    <GlassCard className="p-5">
      <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      <div className="mt-3 h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
