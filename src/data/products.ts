export interface Product {
  slug: string;
  name: string;
  category: string;
  summary: string;
  overview: string;
  features: string[];
  applications: string[];
  architecture: string[];
  /** Only verified specifications belong here. Empty = nothing published yet. */
  specifications: { label: string; value: string }[];
  status: "Product" | "Reference Architecture" | "Technology Direction";
}

export const PRODUCTS: Product[] = [
  {
    slug: "gps-oms",
    name: "GPS OMS",
    category: "Railways",
    summary: "GPS-based monitoring electronics for railway operations.",
    overview:
      "GPS OMS is a railway-domain monitoring system from the Prudent Systems portfolio. It acquires location and operational parameters and makes them available for monitoring and record keeping.",
    features: [
      "GPS-based position acquisition",
      "Local data logging",
      "Rugged controller design",
      "Field-serviceable configuration",
    ],
    applications: [
      "Locomotive monitoring",
      "Operational record keeping",
      "Route and asset visibility",
    ],
    architecture: [
      "Sensors",
      "Controller",
      "Local Storage",
      "Connectivity",
      "Monitoring Dashboard",
    ],
    specifications: [],
    status: "Product",
  },
  {
    slug: "digital-speedometer",
    name: "Digital Speedometer",
    category: "Railways",
    summary: "Digital speed indication unit for railway rolling stock.",
    overview:
      "A digital speed indication product in the Prudent Systems railway portfolio, replacing analogue indication with a digital readout and electronic speed acquisition.",
    features: [
      "Digital speed readout",
      "Electronic speed acquisition",
      "Rugged onboard enclosure",
      "Designed for railway environments",
    ],
    applications: ["Locomotive cab indication", "Speed record keeping"],
    architecture: ["Speed Sensor", "Signal Conditioning", "Signal Processing", "Cab Display"],
    specifications: [],
    status: "Product",
  },
  {
    slug: "universal-iot-gateway",
    name: "Universal IoT Gateway",
    category: "IoT Infrastructure",
    summary: "Protocol-agnostic edge gateway bridging industrial devices to cloud platforms.",
    overview:
      "A universal gateway concept that normalises industrial protocols at the edge, buffers data during connectivity loss, runs edge logic and publishes securely to cloud platforms. Presented as a platform capability of the Prudent Systems Industry 4.0 stack.",
    features: [
      "Multi-protocol ingestion (Modbus, OPC-UA, digital/analog I/O)",
      "Store-and-forward buffering",
      "Edge rules and pre-processing",
      "MQTTS/TLS cloud publishing",
      "Secure OTA firmware updates",
    ],
    applications: ["Machine connectivity", "Retrofit of legacy equipment", "Multi-site telemetry"],
    architecture: ["Devices", "Gateway", "Connectivity", "IoT Platform", "Analytics", "Dashboard"],
    specifications: [],
    status: "Reference Architecture",
  },
  {
    slug: "modular-daq",
    name: "Modular DAQ Unit",
    category: "Data Acquisition",
    summary:
      "Configurable acquisition channels for analog, digital, pulse and 4-20mA industrial signals.",
    overview:
      "Modular data acquisition is the bridge between physical industrial systems and digital platforms: it conditions raw sensor signals into clean, timestamped, engineering-unit data that analytics can trust.",
    features: [
      "Analog inputs for temperature and process signals",
      "High-speed ADC channels for vibration",
      "CT inputs for current",
      "4-20mA loop inputs",
      "Digital inputs for machine status",
      "Pulse inputs for RPM and counters",
    ],
    applications: [
      "Machine health monitoring",
      "Energy analytics",
      "OEE data capture",
      "Process monitoring",
    ],
    architecture: ["Industrial Sensors", "Modular DAQ", "Edge Gateway", "MQTT / OPC-UA", "Cloud"],
    specifications: [],
    status: "Reference Architecture",
  },
  {
    slug: "edge-ai-node",
    name: "Edge AI Node",
    category: "Edge Computing",
    summary: "Local inference for anomaly detection and vision at the machine.",
    overview:
      "An edge compute node concept that runs trained models close to the machine so anomalies are detected with low latency and only meaningful events travel to the cloud.",
    features: [
      "On-device inference",
      "Local anomaly detection",
      "Event-based cloud publishing",
      "AI model delivery over OTA",
    ],
    applications: [
      "Vibration anomaly detection",
      "Vision inspection",
      "Bandwidth-constrained sites",
    ],
    architecture: ["Sensors", "Edge AI Node", "Event Stream", "Cloud", "Dashboard"],
    specifications: [],
    status: "Technology Direction",
  },
  {
    slug: "cloud-dashboard",
    name: "Cloud Monitoring Dashboard",
    category: "Software",
    summary: "Telemetry visualisation, rules, alerts and analytics for connected assets.",
    overview:
      "The visualisation and rules layer of the Prudent IoT platform: device inventory, live telemetry, historical trends, threshold and pattern rules, and alert delivery.",
    features: [
      "Device management view",
      "Live telemetry and trends",
      "Rules and thresholds",
      "Alerts and notifications",
      "Role-based access design",
    ],
    applications: ["Plant monitoring", "Multi-site rollouts", "Maintenance teams"],
    architecture: [
      "Devices",
      "Gateway",
      "IoT Platform",
      "Telemetry",
      "Rules",
      "Analytics",
      "Dashboard",
    ],
    specifications: [],
    status: "Reference Architecture",
  },
];

export const ACCELERATORS = [
  {
    title: "Gateways",
    description:
      "Hardened gateway firmware baselines with protocol adapters, buffering and secure transport already solved.",
    icon: "Router",
  },
  {
    title: "SDKs",
    description:
      "Device and integration SDKs so new sensors and applications attach to the platform without rebuilding plumbing.",
    icon: "Code2",
  },
  {
    title: "Dashboards",
    description: "Composable dashboard blocks for telemetry, trends, alarms and asset views.",
    icon: "LayoutDashboard",
  },
  {
    title: "ML Kits",
    description:
      "Reusable feature-extraction and anomaly-detection pipelines for industrial signals.",
    icon: "BrainCircuit",
  },
] as const;
