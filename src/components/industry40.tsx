import { motion } from "motion/react";
import {
  AlertTriangle, Camera, Cloud, Database, Factory, Flame, Fuel, Gauge, Droplets, Wind, Zap,
} from "lucide-react";
import { DemoDataNotice, GlassCard, Reveal, Section, SectionHeading } from "./site/primitives";
import { FlowDiagram } from "./viz/FlowDiagram";
import { ConceptDashboard } from "./viz/ConceptDashboard";
import { FOCUS_AREAS, INDUSTRIAL_APPLICATIONS } from "@/data/company";

export function Industry40Core() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Industry 4.0"
        title="The core technologies, and what they change"
        description="Industry 4.0 is not one product. It is the combination of acquisition, connectivity, computation and models applied to equipment that already exists."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {FOCUS_AREAS.map((f, i) => (
          <Reveal key={f} delay={(i % 4) * 0.05}>
            <GlassCard className="h-full p-5" interactive>
              <span className="font-mono text-[10px] text-primary">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-3 font-display text-base font-semibold">{f}</p>
            </GlassCard>
          </Reveal>
        ))}
      </div>
      <h3 className="mt-12 font-display text-xl font-semibold">Industrial applications</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {INDUSTRIAL_APPLICATIONS.map((a) => (
          <li key={a} className="rounded-full border border-border bg-surface-2/50 px-4 py-2 text-sm text-muted-foreground">
            {a}
          </li>
        ))}
      </ul>
    </Section>
  );
}

const DAQ_ROWS = [
  { signal: "Temperature", channel: "Analog Input", outcome: "Dashboard" },
  { signal: "Vibration", channel: "High-Speed ADC", outcome: "AI Predictive Maintenance" },
  { signal: "Current", channel: "CT Input", outcome: "Energy Analytics" },
  { signal: "Pressure", channel: "4–20mA", outcome: "Process Monitoring" },
  { signal: "Machine Status", channel: "Digital Input", outcome: "OEE" },
  { signal: "RPM", channel: "Pulse Input", outcome: "Performance Analytics" },
];

export function DaqStory() {
  return (
    <Section className="bg-surface/30">
      <SectionHeading
        eyebrow="Data Acquisition"
        title="DAQ is the bridge between the physical plant and the digital platform"
        description="Analytics is only as good as its input. Each physical parameter needs the right channel type, conditioning and sampling before it becomes usable data."
      />
      <div className="mt-10 overflow-x-auto">
        <table className="w-full min-w-[560px] border-separate border-spacing-y-2 text-left">
          <caption className="sr-only">Physical signal to acquisition channel to analytics outcome</caption>
          <thead>
            <tr className="font-mono text-[10px] uppercase tracking-wider text-primary">
              <th scope="col" className="px-4 pb-2">Physical signal</th>
              <th scope="col" className="px-4 pb-2">Acquisition channel</th>
              <th scope="col" className="px-4 pb-2">Analytics outcome</th>
            </tr>
          </thead>
          <tbody>
            {DAQ_ROWS.map((r) => (
              <tr key={r.signal} className="glass">
                <td className="rounded-l-lg px-4 py-3 text-sm font-medium">{r.signal}</td>
                <td className="px-4 py-3 font-mono text-xs text-primary">{r.channel}</td>
                <td className="rounded-r-lg px-4 py-3 text-sm text-muted-foreground">{r.outcome}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

export function SmartFactory() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Interactive Industry 4.0 Concept"
        title="Smart factory monitoring"
        description="Machine status, production quantity, cycle time, idle time, downtime, temperature, vibration and energy consumption in one operational view."
      />
      <div className="mt-8">
        <ConceptDashboard />
      </div>
    </Section>
  );
}

export function PredictiveMaintenance() {
  return (
    <Section className="bg-surface/30">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Predictive Maintenance"
            title="From raw signal to a maintenance decision"
            description="Continuous monitoring of temperature, vibration, current, RPM and machine status lets deviation be detected while it is still a trend and not yet a failure."
          />
          <div className="mt-6"><DemoDataNotice /></div>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard className="p-6">
            <FlowDiagram
              orientation="vertical"
              compact
              nodes={[
                { label: "Sensor Data", hint: "temperature · vibration · current · rpm" },
                { label: "Anomaly Detection", hint: "baseline deviation" },
                { label: "AI Prediction", hint: "developing fault" },
                { label: "Maintenance Recommendation", hint: "action" },
              ]}
            />
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

export function OeeSection() {
  const availability = 91;
  const performance = 88;
  const quality = 97;
  const oee = ((availability / 100) * (performance / 100) * (quality / 100) * 100).toFixed(1);
  const bars = [
    { label: "Availability", value: availability },
    { label: "Performance", value: performance },
    { label: "Quality", value: quality },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="OEE"
        title="Overall Equipment Effectiveness, computed continuously"
        description="OEE = Availability × Performance × Quality. When the inputs are acquired automatically, OEE stops being a monthly report and becomes a live signal."
      />
      <div className="mt-8 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <GlassCard className="p-6">
          <DemoDataNotice />
          <ul className="mt-6 space-y-5">
            {bars.map((b, i) => (
              <li key={b.label}>
                <div className="flex justify-between text-sm">
                  <span>{b.label}</span>
                  <span className="font-mono text-primary">{b.value}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${b.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.12 }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </GlassCard>
        <GlassCard className="flex flex-col items-center justify-center p-6">
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">OEE</p>
          <p className="mt-3 font-display text-6xl font-semibold">{oee}%</p>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Demo values only — computed live from the illustrative inputs shown.
          </p>
        </GlassCard>
      </div>
    </Section>
  );
}

const ENERGY = [
  { label: "Electricity", Icon: Zap }, { label: "Gas", Icon: Flame }, { label: "Steam", Icon: Wind },
  { label: "Compressed Air", Icon: Gauge }, { label: "Water", Icon: Droplets }, { label: "Fuel", Icon: Fuel },
];

export function EnergySection() {
  return (
    <Section className="bg-surface/30">
      <SectionHeading
        eyebrow="Energy Management"
        title="Every utility, measured at the point of use"
        description="Metering each energy stream per asset and per shift shows where consumption actually happens instead of where it is billed."
      />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {ENERGY.map((e, i) => (
          <Reveal key={e.label} delay={(i % 3) * 0.05}>
            <GlassCard className="flex items-center gap-3 p-5" interactive>
              <e.Icon className="h-5 w-5 text-primary" aria-hidden />
              <span className="font-display text-base font-medium">{e.label}</span>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function QualityControl() {
  const defects = ["Surface defects", "Dimensional errors", "Missing components", "Incorrect assembly", "Colour variations", "Packaging defects"];
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="AI Quality Control"
            title="Machine vision applied to inspection"
            description="Potential inspection use cases where a trained vision model can apply the same criteria to every part at line speed."
          />
          <ul className="mt-8 grid gap-2 sm:grid-cols-2">
            {defects.map((d) => (
              <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Camera className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard className="p-6">
            <FlowDiagram orientation="vertical" compact nodes={["Camera", "Image", "AI / ML", "PASS / DEFECT"]} />
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

export function RemoteMonitoring() {
  return (
    <Section className="bg-surface/30">
      <SectionHeading
        eyebrow="Remote Monitoring"
        title="Plant visibility from anywhere"
        description="The same telemetry pipeline serves a control-room wall and a phone on a train."
      />
      <Reveal>
        <GlassCard className="mt-8 p-6">
          <FlowDiagram nodes={["Machine", "DAQ", "Internet", "Cloud", "Dashboard", "Mobile"]} compact />
        </GlassCard>
      </Reveal>
    </Section>
  );
}

const ALERTS = [
  "High Temperature", "Excessive Vibration", "Low Pressure", "Motor Overload",
  "Power Failure", "Machine Stoppage", "Abnormal Energy", "Production Deviation",
];

export function AlertCenter() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Automated Alerts"
        title="Alert center"
        description="Application examples of rule-driven alerts. Actual alert sets are configured per installation."
      />
      <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ALERTS.map((a, i) => (
          <Reveal key={a} delay={(i % 4) * 0.05}>
            <GlassCard className="flex h-full items-start gap-3 p-5">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-warn" aria-hidden />
              <span className="text-sm">{a}</span>
            </GlassCard>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function DigitalTwin() {
  const views = ["Current condition", "Historical performance", "Predicted failures", "Energy consumption", "Production performance"];
  return (
    <Section className="bg-surface/30">
      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <SectionHeading
            eyebrow="Concept · Reference Capability"
            title="Digital Twin"
            description="A digital representation of a physical machine, continuously reconciled with live telemetry so condition, history and prediction share one model."
          />
          <ul className="mt-8 space-y-2">
            {views.map((v) => (
              <li key={v} className="flex items-center gap-2 text-sm text-muted-foreground">
                <Database className="h-4 w-4 shrink-0 text-primary" aria-hidden />
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <GlassCard className="p-8 text-center">
            <div className="flex items-center justify-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <Factory className="h-10 w-10 text-foreground" aria-hidden />
                <span className="text-xs text-muted-foreground">Physical Machine</span>
              </div>
              <div className="flex flex-col items-center text-primary">
                <span className="font-mono text-xs">↔</span>
                <span className="mt-1 font-mono text-[10px] uppercase tracking-wider">sync</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Cloud className="h-10 w-10 text-primary" aria-hidden />
                <span className="text-xs text-muted-foreground">Digital Representation</span>
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}

export function MsmeRetrofit() {
  return (
    <Section>
      <SectionHeading
        eyebrow="MSME Retrofit"
        title="Modernize Existing Machines"
        description="Industry 4.0 does not require replacing the shop floor. External sensors, modular DAQ and an edge gateway make existing machines observable."
      />
      <Reveal>
        <GlassCard className="mt-8 p-6">
          <FlowDiagram nodes={["Existing Machines", "Sensors", "DAQ", "Edge Gateway", "Cloud Dashboard"]} compact />
          <p className="mt-5 text-xs text-muted-foreground">
            Investment depends entirely on machine count, signal types and site conditions. Prudent Systems does not
            publish a generic price range — scope is assessed per site.
          </p>
        </GlassCard>
      </Reveal>
    </Section>
  );
}

export function EnterpriseArchitecture() {
  return (
    <Section className="bg-surface/30">
      <SectionHeading
        eyebrow="Reference Architecture"
        title="Enterprise-scale Industry 4.0"
        description="At plant and group scale, acquisition must coexist with existing SCADA, MES and ERP systems rather than replace them."
      />
      <Reveal>
        <GlassCard className="mt-8 p-6">
          <FlowDiagram
            orientation="vertical"
            compact
            nodes={[
              { label: "Thousands of Sensors", hint: "field layer" },
              { label: "DAQ / Edge", hint: "acquisition & pre-processing" },
              { label: "Industrial Network", hint: "OT" },
              { label: "SCADA / MES", hint: "operations" },
              { label: "Cloud / Data Lake", hint: "storage" },
              { label: "AI", hint: "prediction & optimisation" },
              { label: "ERP", hint: "business action" },
            ]}
          />
        </GlassCard>
      </Reveal>
    </Section>
  );
}
