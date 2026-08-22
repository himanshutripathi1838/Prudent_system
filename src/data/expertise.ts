export interface Capability {
  title: string;
  description: string;
  icon: string;
  tags: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    title: "Firmware Systems",
    description:
      "Board bring-up, firmware architecture and deterministic control for rugged industrial and railway hardware.",
    icon: "Cpu",
    tags: ["Firmware C", "RTOS", "Bare-metal", "Bootloaders", "Board bring-up"],
  },
  {
    title: "Data Acquisition (DAQ)",
    description:
      "Signal conditioning and sampling that turns raw physical signals into trustworthy engineering data.",
    icon: "Activity",
    tags: ["ADC", "4-20mA", "CT inputs", "Pulse counting", "Digital I/O"],
  },
  {
    title: "Edge AI",
    description:
      "Model deployment close to the machine for low-latency anomaly detection and vision inference.",
    icon: "BrainCircuit",
    tags: ["TensorFlow", "Edge inference", "Anomaly detection", "Feature extraction"],
  },
  {
    title: "Industrial Connectivity",
    description:
      "Protocol translation and resilient transport between plant floor equipment and cloud services.",
    icon: "Network",
    tags: ["MQTT", "OPC-UA", "Modbus", "LoRa", "NB-IoT"],
  },
  {
    title: "Cloud Platform",
    description: "Ingestion, storage, rules and APIs designed for continuous industrial telemetry.",
    icon: "Cloud",
    tags: ["Cloud", "Telemetry ingestion", "Rules engine", "APIs"],
  },
  {
    title: "Data Engineering",
    description:
      "Time-series pipelines, aggregation and modelling that keep analytics fast at industrial data rates.",
    icon: "Database",
    tags: ["Time-series", "ETL", "Aggregation", "Analytics"],
  },
  {
    title: "AI / ML",
    description:
      "Model development for prediction, classification and quality inspection on industrial datasets.",
    icon: "Sparkles",
    tags: ["TensorFlow", "Computer Vision", "Predictive models", "Signal ML"],
  },
  {
    title: "DevOps",
    description:
      "Build, release and observability practices for firmware fleets and cloud services alike.",
    icon: "GitBranch",
    tags: ["CI/CD", "Containers", "Monitoring", "Release management"],
  },
  {
    title: "Security & OTA",
    description:
      "Signed firmware, secure boot, authenticated devices and recoverable updates across the fleet.",
    icon: "ShieldCheck",
    tags: ["Secure Boot", "Signed firmware", "TLS", "MQTTS", "Certificates", "Rollback"],
  },
];

export const TECH_TAGS = [
  "Firmware C",
  "RTOS",
  "LoRa",
  "NB-IoT",
  "MQTT",
  "OPC-UA",
  "TensorFlow",
  "Edge AI",
  "Cloud",
  "DAQ",
  "IoT",
  "AI/ML",
  "Sensors",
  "Modbus",
  "GPS",
  "Secure OTA",
  "Time-series",
  "Computer Vision",
  "Digital Twin",
  "Predictive Maintenance",
  "OEE",
  "Industry 4.0",
];
