export const VALUES = [
  { title: "Innovation", description: "Engineering new bridges between physical machines and intelligent software.", icon: "Lightbulb" },
  { title: "Reliability", description: "Systems designed for industrial and railway environments where downtime is unacceptable.", icon: "ShieldCheck" },
  { title: "Security", description: "Signed firmware, authenticated devices and encrypted transport as defaults, not add-ons.", icon: "Lock" },
  { title: "Impact", description: "Data that changes a decision on the shop floor is the only measure of success.", icon: "Target" },
] as const;

export const FOCUS_AREAS = [
  "Industrial IoT", "Data Acquisition", "Edge Computing", "Cloud Computing",
  "AI / ML", "Digital Twin", "Robotics & Automation", "Machine-to-Machine Communication",
] as const;

export const INDUSTRIAL_APPLICATIONS = [
  "Predictive Maintenance", "Real-Time Machine Monitoring", "OEE", "Energy Management",
  "AI Quality Control", "Production Optimization", "Remote Monitoring", "Automated Alerts",
] as const;

/**
 * Milestones must be verified before publishing. Undated entries are rendered
 * as portfolio milestones without fabricated years.
 */
export const MILESTONES: { year?: string; title: string; description: string }[] = [
  { title: "Railway electronics portfolio", description: "Development of railway-domain products including GPS OMS and the Digital Speedometer." },
  { title: "Industrial IoT & DAQ", description: "Expansion into modular data acquisition and industrial monitoring systems." },
  { title: "Edge AI and cloud dashboards", description: "Edge inference and cloud monitoring capability added to the IoT stack." },
  { title: "Industry 4.0 systems", description: "End-to-end sensor-to-insight architectures for smart manufacturing and retrofit programmes." },
];

/** Sourced from prusys.com/about-us. */
export const CERTIFICATIONS: { name: string; note: string }[] = [
  { name: "ISO Certified", note: "Prudent Systems Private Limited is an ISO certified technology company." },
];

/** Client / partner logos are displayed only when officially confirmed. */
export const CLIENTS: { name: string; logo?: string }[] = [];

export const JOBS: {
  id: string; title: string; location: string; type: string; description: string;
}[] = [
  // Open positions are published from official company sources.
];

export const HR_POLICIES = [
  { title: "Engineering-led culture", description: "Engineers own problems end-to-end, from sensor selection to the dashboard the customer uses." },
  { title: "Learning & development", description: "Time and support for deepening embedded, AI/ML and industrial-domain skills." },
  { title: "Safe & inclusive workplace", description: "A respectful workplace with clear channels for concerns and support." },
  { title: "Well-being", description: "Reasonable working practices and support for balance alongside project commitments." },
];
