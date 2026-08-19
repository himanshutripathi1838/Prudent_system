export type Maturity = "Product" | "Reference Architecture" | "Technology Direction" | "Concept Demo";

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface DaqMapping {
  physicalWorld: string;
  daqInput: string;
  digitalOutcome: string;
}

export interface Solution {
  slug: string;
  title: string;
  category: string;
  industry: string;
  summary: string;
  problem: string;
  approach: string;
  technologies: string[];
  architecture: string[];
  applications: string[];
  outcomes: string[];
  maturity: Maturity;
  image?: string;
  workflowSteps?: WorkflowStep[];
  daqMapping?: DaqMapping[];
  scaleInfo?: string;
  otaCapability?: string;
}

export const SOLUTIONS: Solution[] = [
  // 1. GPS OMS
  {
    slug: "gps-oms",
    title: "GPS OMS",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/gps-oms.jpg",
    summary: "GNSS-based track oscillation and location monitoring system engineered for locomotive fleet tracking and track health indication.",
    problem: "Manual track inspection and unrecorded acceleration peaks make track anomaly identification slow and prone to human error.",
    approach: "High-precision GNSS position module and high-frequency accelerometers sample vertical and lateral acceleration peaks, logging timestamps and GPS locations to the cloud.",
    technologies: ["Embedded C", "GNSS/GPS", "Cellular MQTTS", "Secure OTA", "3-Axis Accelerometer"],
    architecture: ["Onboard Accelerometer", "GNSS Receiver", "Embedded Controller", "Cellular Gateway", "Fleet Cloud Dashboard"],
    applications: ["Track oscillation monitoring", "Speed compliance tracking", "Locomotive fleet position"],
    outcomes: ["Continuous track defect location pinpointing", "Automated speed compliance logs"],
    maturity: "Product",
    scaleInfo: "Deploys on distributed railway fleets (500+ locomotives) without trackside intervention.",
    otaCapability: "Signed Dual-Partition (A/B) OTA with Cryptographic Digital Signatures & Failsafe Rollback.",
    workflowSteps: [
      { step: 1, title: "Onboard Acceleration & GPS Sampling", description: "Acquire high-speed vertical and lateral G-force oscillations alongside live GPS coordinates." },
      { step: 2, title: "Edge Threshold Filtering", description: "Filter noise and flag acceleration peaks exceeding RDSO safety thresholds." },
      { step: 3, title: "Encrypted Cellular Upload", description: "Stream flagged location coordinates over TLS-encrypted cellular networks to cloud servers." },
      { step: 4, title: "Track Health Dashboard", description: "Maintenance engineers view real-time track anomaly maps with precise chainage marker locations." },
    ],
    daqMapping: [
      { physicalWorld: "Track Vibration Peak", daqInput: "High-Speed 3-Axis ADC Accelerometer", digitalOutcome: "Track Anomaly Location Alert" },
      { physicalWorld: "Train Position", daqInput: "GNSS / GPS Receiver Module", digitalOutcome: "Geofenced Route & Live Map Position" },
    ],
  },

  // 2. GPS Based OLIVER G
  {
    slug: "gps-based-oliver-g",
    title: "GPS Based OLIVER G",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/oliver-g.jpg",
    summary: "On-Line Track Acceleration & Oscillation Recording System (OLIVER G) engineered for track inspection coaches and locomotives.",
    problem: "Real-time track acceleration monitoring requires portable, high-accuracy instruments that log speed, acceleration, and location simultaneously.",
    approach: "Compact embedded system combining high-resolution ADC, digital signal processing (DSP), and GNSS tracking to record track geometry irregularities.",
    technologies: ["DSP", "GNSS", "High-Resolution ADC", "Flash Logging", "Cellular Sync"],
    architecture: ["Track Sensor", "DSP Engine", "GNSS Module", "Onboard Storage", "Reporting Software"],
    applications: ["Track geometry inspection", "Oscillation recording", "Railway safety compliance"],
    outcomes: ["Instant track defect detection", "Automated section inspection reports"],
    maturity: "Product",
    scaleInfo: "Portable and locomotive-mountable unit for Indian Railways track inspection.",
    otaCapability: "Remote firmware update over cellular interface with encrypted binary verification.",
  },

  // 3. GPS Based OLIVER GHX
  {
    slug: "gps-based-oliver-ghx",
    title: "GPS Based OLIVER GHX",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/oliver-ghx.jpg",
    summary: "Advanced multi-channel oscillation recorder and track parameters analyzer (OLIVER GHX) with enhanced cloud data logging.",
    problem: "High-speed rail corridors demand higher sampling rates and multi-axis acceleration recording for safety certification.",
    approach: "Multi-channel high-rate ADC system sampling at 1000+ Hz, integrating edge FFT spectrum analysis and cellular telemetry.",
    technologies: ["Multi-channel ADC", "FFT Spectrum Analysis", "GNSS", "MQTTS", "Rugged Enclosure"],
    architecture: ["Multi-Axis Sensors", "High-Rate ADC", "Edge Analyzer", "Telemetry Unit", "Cloud Platform"],
    applications: ["High-speed corridor monitoring", "Multi-axis oscillation recording", "Predictive track maintenance"],
    outcomes: ["Sub-meter track flaw location", "Real-time safety threshold notifications"],
    maturity: "Product",
    scaleInfo: "High-speed rail and heavy-haul freight line deployment.",
    otaCapability: "Dual-Partition A/B Failsafe Firmware & AI Model OTA.",
  },

  // 4. GPS Based Speedometer
  {
    slug: "gps-based-speedometer",
    title: "GPS Based Speedometer",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/speedometer.jpg",
    summary: "Digital speedometer and cab recorder system featuring high-visibility digital display and non-volatile memory logging.",
    problem: "Legacy analogue mechanical speedometers suffer from wear, inaccuracies, and lack electronic memory for event investigation.",
    approach: "Electronic speed indicator combining GNSS speed acquisition with axle pulse encoder backup and non-volatile memory storage.",
    technologies: ["Microcontroller", "GNSS Speed Acquisition", "Digital LED Display", "Non-Volatile Memory"],
    architecture: ["Pulse Encoder / GNSS", "Speed Calculator", "Cab Display", "Event Memory Log"],
    applications: ["Locomotive cab speed display", "Driver memory recording", "Overspeed alert system"],
    outcomes: ["Crystal-clear cab speed visibility", "Tamper-proof electronic speed logging"],
    maturity: "Product",
    scaleInfo: "Fits standard locomotive cab console cutouts across all railway zones.",
    otaCapability: "Failsafe configuration and software update support.",
  },

  // 5. Water level Monitoring System
  {
    slug: "water-level-monitoring-system",
    title: "Water level Monitoring System",
    category: "Smart Infrastructure",
    industry: "Utilities",
    image: "/solutions/water-level.jpg",
    summary: "Automated ultrasonic and hydrostatic water level measurement unit with remote cellular and LoRaWAN telemetry.",
    problem: "Manual gauge reading at remote water tanks, reservoirs, and river bridges is irregular and delays flood warning alerts.",
    approach: "Non-contact ultrasonic level sensor integrated with low-power microcontrollers and solar-powered wireless telemetry.",
    technologies: ["Ultrasonic Level Sensor", "4-20mA Loop", "LoRaWAN / Cellular", "Solar Charging", "Low-Power MCU"],
    architecture: ["Level Sensor", "Low-Power Field Node", "Wireless Gateway", "Cloud Analytics", "Alert Engine"],
    applications: ["Reservoir level monitoring", "River bridge water level tracking", "Industrial water tank automation"],
    outcomes: ["24/7 continuous level visibility", "Instant flood and overflow SMS/email alerts"],
    maturity: "Product",
    scaleInfo: "Solar-powered autonomous field stations for municipal and industrial water networks.",
    otaCapability: "Remote OTA Sensor Calibration & Firmware Maintenance.",
  },

  // 6. Wind speed monitoring system
  {
    slug: "wind-speed-monitoring-system",
    title: "Wind speed monitoring system",
    category: "Smart Infrastructure",
    industry: "Infrastructure",
    image: "/solutions/wind-speed.jpg",
    summary: "Industrial anemometer and microclimate weather station providing real-time wind speed, direction, and gust alerts.",
    problem: "Railway bridges, crane towers, and solar plants require continuous localized wind velocity monitoring for structural safety.",
    approach: "Optoelectronic anemometer and wind vane sampled by a rugged DAQ controller connected to telemetry gateways.",
    technologies: ["Optoelectronic Anemometer", "Pulse Counter", "RS485 Modbus", "Cellular MQTTS"],
    architecture: ["Anemometer & Vane", "DAQ Controller", "Cellular Gateway", "Weather Dashboard"],
    applications: ["Railway bridge wind safety", "Crane tower operation control", "Solar & wind plant monitoring"],
    outcomes: ["Real-time high-wind trip warnings", "Automated microclimate logbook"],
    maturity: "Product",
    scaleInfo: "Deploys on remote railway bridges, ports, and industrial structures.",
    otaCapability: "Over-The-Air Threshold & Calibration Configuration.",
  },

  // 7. Live Monitoring System
  {
    slug: "live-monitoring-system",
    title: "Live Monitoring System",
    category: "Industrial Monitoring",
    industry: "Manufacturing",
    image: "/solutions/live-monitoring.jpg",
    summary: "Centralized live dashboard and IoT gateway system bringing real-time machine status, load, and alerts to web and mobile.",
    problem: "Plant managers lack real-time visibility into machine status across multi-building or multi-city manufacturing facilities.",
    approach: "Edge gateways tap machine relays and power meters, pushing encrypted telemetry to cloud dashboards for live status rendering.",
    technologies: ["IoT Gateways", "MQTTS / WebSockets", "React Dashboard", "Time-Series Database"],
    architecture: ["Field Gateway", "MQTTS Broker", "Cloud Backend", "Web/Mobile Dashboard"],
    applications: ["Plant-wide machine status", "Remote generator monitoring", "Multi-city factory dashboards"],
    outcomes: ["Instant visibility from anywhere", "Downtime response time reduced by 60%"],
    maturity: "Product",
    scaleInfo: "Scales from single-factory 10-machine setups to multi-site global enterprises.",
    otaCapability: "Remote Gateway Software & Dashboard Rule OTA Sync.",
  },

  // 8. Continuous Rail Thermometer
  {
    slug: "continuous-rail-thermometer",
    title: "Continuous Rail Thermometer",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/rail-thermometer.jpg",
    summary: "Trackside rail temperature monitoring device designed to prevent rail buckling and track fracture during extreme thermal variations.",
    problem: "Extreme summer heat causes rail expansion and buckling, posing derailment risks if track temperature is not monitored continuously.",
    approach: "Magnetic RTD/thermocouple probes clamp onto the rail web, sampling temperature continuously and sending solar-powered telemetry to railway control rooms.",
    technologies: ["RTD Pt100", "Precision ADC", "Solar Power", "SMS / Cellular Telemetry"],
    architecture: ["Rail Clamp Probe", "Precision ADC Unit", "Solar MCU Controller", "Railway Control Display"],
    applications: ["Continuous rail web temperature tracking", "Track buckling risk warning", "Speed restriction advisories"],
    outcomes: ["Early warning before rail buckling threshold", "Automated speed restriction alerts"],
    maturity: "Product",
    scaleInfo: "Installed at critical railway track sections and hot-weather vulnerable zones.",
    otaCapability: "Remote threshold configuration over cellular network.",
  },

  // 9. Electronic Toe Load Measuring Device
  {
    slug: "electronic-toe-load-measuring-device",
    title: "Electronic Toe Load Measuring Device",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/toe-load.jpg",
    summary: "Precision digital load cell instrument for measuring elastic rail clip toe load strength on concrete sleepers.",
    problem: "Manual mechanical toe load testing is slow, subjective, and leaves no digital audit trail for track maintenance records.",
    approach: "Digital strain-gauge load cell connected to a handheld readout unit with memory storage and bluetooth/USB data export.",
    technologies: ["Strain Gauge Load Cell", "Precision Amplifier", "Microcontroller", "LCD Display", "Internal Storage"],
    architecture: ["Load Cell Assembly", "Signal Amplifier", "Handheld Indicator", "PC Data Export"],
    applications: ["Elastic rail clip testing", "Track sleeper maintenance inspection", "Quality audit logging"],
    outcomes: ["Digital accuracy in toe load testing", "Exportable digital test certificates"],
    maturity: "Product",
    scaleInfo: "Handheld instrument used by track inspectors across railway divisions.",
    otaCapability: "PC Software and calibration firmware updates.",
  },

  // 10. Route Data Preparation System
  {
    slug: "route-data-preparation-system",
    title: "Route Data Preparation System",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/route-data.jpg",
    summary: "Software and hardware suite for preparing, verifying, and mapping railway track route data for onboard safety systems.",
    problem: "Inaccurate route data maps lead to false overspeed warnings and improper geofence boundaries in locomotive monitoring.",
    approach: "Integrated survey data processing tool that compiles track gradient, curvature, station locations, and speed limits into validated binary maps.",
    technologies: ["GIS / GNSS Processing", "Route Compiler", "Cryptographic Hashing", "Desktop & Web Suite"],
    architecture: ["Field Survey GPS", "Route Compiler", "Validation Engine", "Onboard Locomotive Flasher"],
    applications: ["Locomotive route map creation", "Track feature surveying", "Safety system data flashing"],
    outcomes: ["Zero-error verified route maps", "Seamless onboard safety system synchronization"],
    maturity: "Product",
    scaleInfo: "Deploys across railway engineering offices and locomotive sheds.",
    otaCapability: "Direct remote route map package flashing over OTA connection.",
  },

  // 11. Potable Train Detection System
  {
    slug: "potable-train-detection-system",
    title: "Potable Train Detection System",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/train-detection.jpg",
    summary: "Portable trackside sensor system alerting track maintenance personnel when a train is approaching the work zone.",
    problem: "Track gangs working on live lines are vulnerable to approaching trains, especially in curves, fog, or heavy noise.",
    approach: "Portable magnetic/vibration trackside sensors clamped to the rail detect train approach 1–2 km away and trigger audible/flashing alerts.",
    technologies: ["Magnetic Track Sensors", "Vibration Pickups", "RF Wireless Link", "High-Decibel Siren"],
    architecture: ["Trackside Sensor Clamp", "RF Transmitter", "Portable Worker Receiver", "Visual & Audio Siren"],
    applications: ["Track maintenance worker safety", "Temporary work zone protection", "Foggy weather train warning"],
    outcomes: ["30+ seconds early warning for track workers", "Significant reduction in trackside accidents"],
    maturity: "Product",
    scaleInfo: "Lightweight portable kit carried by track maintenance gangs.",
    otaCapability: "RF channel and firmware update capability.",
  },

  // 12. Emergency Light
  {
    slug: "emergency-light",
    title: "Emergency Light",
    category: "Smart Infrastructure",
    industry: "Infrastructure",
    image: "/solutions/emergency-light.jpg",
    summary: "Ruggedized LED emergency lighting and solar-hybrid illumination units for railway platforms, tunnels, and industrial plants.",
    problem: "Power outages in railway tunnels, yards, and industrial plants create severe safety hazards.",
    approach: "High-efficiency LED array with intelligent battery management system (BMS) and automatic mains-fail failover.",
    technologies: ["LED Driver", "LiFePO4 BMS", "Solar Charger", "Automatic Failover Circuit"],
    architecture: ["Mains / Solar Input", "Battery Management System", "LED Array", "Status Indicator"],
    applications: ["Railway tunnel illumination", "Platform emergency lighting", "Industrial backup lights"],
    outcomes: ["Zero-downtime emergency illumination", "Long-life battery back-up"],
    maturity: "Product",
    scaleInfo: "Deploys across railway stations, tunnels, and factory facilities.",
    otaCapability: "BMS firmware and battery health diagnostic support.",
  },

  // 13. RGB Facade Light
  {
    slug: "rgb-facade-light",
    title: "RGB Facade Light",
    category: "Smart Infrastructure",
    industry: "Infrastructure",
    image: "/solutions/rgb-facade.jpg",
    summary: "Architectural RGB facade lighting system with DMX/wireless control for station buildings, bridges, and landmarks.",
    problem: "Architectural lighting control is complex and lacks central scheduling or dynamic color scene switching.",
    approach: "High-lumen DMX512 RGB LED fixtures synchronized through wireless controllers and scheduled cloud software.",
    technologies: ["DMX512 Protocol", "RGB LED Arrays", "Wireless Mesh", "Schedule Software"],
    architecture: ["Cloud Scene Scheduler", "Wireless Controller", "DMX Fixture Cluster"],
    applications: ["Railway building illumination", "Bridge aesthetic lighting", "Architectural facades"],
    outcomes: ["Dynamic automated scene switching", "80% energy savings over HID lamps"],
    maturity: "Product",
  },

  // 14. Solar & Hybrid Light
  {
    slug: "solar-hybrid-light",
    title: "Solar & Hybrid Light",
    category: "Smart Infrastructure",
    industry: "Infrastructure",
    image: "/solutions/solar-hybrid.png",
    summary: "Autonomous solar and AC grid hybrid lighting system for remote railway crossings, yards, and perimeter fences.",
    problem: "Remote railway yards and level crossings lack reliable grid power, causing unsafe dark spots.",
    approach: "Integrated MPPT solar charge controller with intelligent AC grid failover to maintain 100% lighting availability.",
    technologies: ["MPPT Solar Controller", "LiFePO4 Battery", "AC Grid Failover", "Smart Dimming"],
    architecture: ["Solar Panel & Grid", "MPPT Hybrid Controller", "LiFePO4 Battery", "LED Luminaire"],
    applications: ["Railway level crossing lighting", "Remote yard security", "Industrial perimeters"],
    outcomes: ["100% lighting uptime regardless of grid outages", "Zero electricity cost under solar mode"],
    maturity: "Product",
  },

  // 15. Pit & Catwalk Light
  {
    slug: "pit-catwalk-light",
    title: "Pit & Catwalk Light",
    category: "Railways",
    industry: "Railways",
    image: "/solutions/pit-catwalk.jpg",
    summary: "Heavy-duty waterproof and impact-resistant LED luminaires engineered for locomotive inspection pits and maintenance catwalks.",
    problem: "Locomotive inspection pits endure water, oil drips, and heavy impact, causing frequent traditional light breakage.",
    approach: "IP68 sealed poly-carbonate low-profile LED fixtures designed for low-glare under-chassis locomotive inspection.",
    technologies: ["IP68 Sealed Enclosure", "Low-Voltage DC Drive", "Impact Resistant", "High CRI LEDs"],
    architecture: ["Low Voltage Power Unit", "IP68 Luminaire Cluster"],
    applications: ["Locomotive maintenance pit lighting", "Catwalk safety illumination", "Wash-pit enclosures"],
    outcomes: ["Glare-free inspection visibility", "Zero water/oil ingress failures"],
    maturity: "Product",
  },

  // 16. Industry 4.0 Retrofit (Architecture Solution - NO PRODUCT IMAGE)
  {
    slug: "industry-4-0-retrofit",
    title: "Industry 4.0 Retrofit for Existing Machines",
    category: "Industry 4.0",
    industry: "MSME Manufacturing",
    summary: "Modernise legacy machines with external sensors, modular DAQ and an edge gateway — without replacing the machine.",
    problem: "Existing machines have no digital interface, so production, downtime and energy data stay invisible.",
    approach: "Non-intrusive sensors and digital inputs are added to legacy equipment; a modular DAQ unit normalises signals and an edge gateway publishes them to a dashboard.",
    technologies: ["Modular DAQ", "Digital I/O", "4-20mA", "OPC-UA", "MQTT"],
    architecture: ["Existing Machines", "Sensors", "DAQ", "Edge Gateway", "Cloud Dashboard"],
    applications: ["Production counting", "Downtime capture", "OEE baselining", "Energy monitoring"],
    outcomes: ["Machine data without capital replacement", "Baseline for OEE improvement"],
    maturity: "Reference Architecture",
    scaleInfo: "Practical MSME Investment: ₹2–10 Lakh for 10 CNC machines — Zero machine replacement cost.",
    otaCapability: "Remote Gateway Software & Configuration OTA Updates.",
  },

  // 17. Machine Health Monitoring (Architecture Solution - NO PRODUCT IMAGE)
  {
    slug: "machine-health-monitoring",
    title: "Machine Health Monitoring",
    category: "Industrial IoT",
    industry: "Manufacturing",
    summary: "Vibration, temperature, current and RPM acquisition feeding anomaly detection and maintenance recommendations.",
    problem: "Unplanned machine stoppages are detected only after failure, causing downtime and secondary damage.",
    approach: "High-speed DAQ channels stream machine signals to an edge gateway; baselines and anomaly models flag deviations before thresholds are breached.",
    technologies: ["High-speed ADC", "Edge AI", "MQTT", "TensorFlow", "Time-series storage"],
    architecture: ["Sensors", "DAQ", "Edge Gateway", "Cloud", "AI/ML", "Dashboard", "Alerts"],
    applications: ["Motor and pump monitoring", "Bearing degradation tracking", "Gearbox condition monitoring"],
    outcomes: ["Earlier detection of abnormal behaviour", "Condition-based maintenance planning"],
    maturity: "Reference Architecture",
    scaleInfo: "MSME Retrofit (₹2–10 Lakh for 10 machines) up to Enterprise Multi-Plant Deployment.",
    otaCapability: "Dual Partition (A/B) OTA & On-Device AI Model (.tflite) Remote Push.",
  },

  // 18. Predictive Maintenance (Architecture Solution - NO PRODUCT IMAGE)
  {
    slug: "predictive-maintenance",
    title: "AI Predictive Maintenance",
    category: "AI/ML Monitoring",
    industry: "Manufacturing",
    summary: "Anomaly detection and failure-prediction models running across edge and cloud on acquired machine signals.",
    problem: "Fixed-interval maintenance either over-services healthy machines or misses developing faults.",
    approach: "Sensor streams are cleaned and featurised, anomaly detection runs continuously, and prediction models produce maintenance recommendations with confidence context.",
    technologies: ["TensorFlow", "Edge AI", "Feature engineering", "Time-series analytics"],
    architecture: ["Sensor Data", "Anomaly Detection", "AI Prediction", "Maintenance Recommendation"],
    applications: ["Rotating equipment", "Compressors", "Conveyors"],
    outcomes: ["Maintenance driven by condition", "Fewer surprise interventions"],
    maturity: "Technology Direction",
  },

  // 19. Energy Management (Architecture Solution - NO PRODUCT IMAGE)
  {
    slug: "energy-management",
    title: "Energy Management & Analytics",
    category: "Energy",
    industry: "Manufacturing / Utilities",
    summary: "Metering and analytics across electricity, gas, steam, compressed air, water and fuel.",
    problem: "Energy is billed in aggregate, so per-machine and per-shift consumption remains unknown.",
    approach: "CT inputs, pulse meters and Modbus energy meters are acquired at the edge and aggregated into consumption analytics by asset, line and shift.",
    technologies: ["CT inputs", "Modbus RTU/TCP", "Pulse counting", "Cloud analytics"],
    architecture: ["Meters & CT", "DAQ", "Edge Gateway", "Cloud", "Energy Analytics", "Dashboard"],
    applications: ["Per-machine energy cost", "Peak load analysis", "Utility benchmarking"],
    outcomes: ["Visibility of energy per asset", "Data to target efficiency actions"],
    maturity: "Reference Architecture",
  },

  // 20. AI Quality Inspection (Architecture Solution - NO PRODUCT IMAGE)
  {
    slug: "ai-quality-control",
    title: "AI Quality Inspection",
    category: "AI/ML Monitoring",
    industry: "Manufacturing",
    summary: "Machine-vision inspection concepts for surface, dimensional, assembly and packaging defects.",
    problem: "Manual visual inspection is inconsistent and hard to scale at line speed.",
    approach: "Line cameras capture frames, an edge inference model classifies pass/defect, and results are logged with images for traceability.",
    technologies: ["Computer Vision", "Edge inference", "TensorFlow", "Image pipelines"],
    architecture: ["Camera", "Image", "AI/ML", "PASS / DEFECT", "Traceability Log"],
    applications: ["Surface defects", "Dimensional errors", "Missing components", "Incorrect assembly"],
    outcomes: ["Consistent inspection criteria", "Traceable inspection records"],
    maturity: "Technology Direction",
  },

  // 21. Asset Tracking (Architecture Solution - NO PRODUCT IMAGE)
  {
    slug: "asset-tracking",
    title: "Asset Tracking",
    category: "Industrial Monitoring",
    industry: "Logistics / Industry",
    summary: "GNSS and network-based tracking of mobile assets with geofencing and history.",
    problem: "Mobile assets move between sites without a reliable digital trail.",
    approach: "Tracker nodes report position and status on schedule or event; the backend maintains history, geofences and utilisation views.",
    technologies: ["GNSS", "Cellular", "Geofencing", "Time-series storage"],
    architecture: ["Tracker Node", "Connectivity", "Cloud", "Analytics", "Dashboard", "Alerts"],
    applications: ["Fleet and equipment location", "Geofence violations", "Utilisation analysis"],
    outcomes: ["Location history per asset", "Automated boundary alerts"],
    maturity: "Reference Architecture",
  },

  // 22. Digital Twin (Concept Architecture - NO PRODUCT IMAGE)
  {
    slug: "digital-twin",
    title: "Digital Twin",
    category: "Industry 4.0",
    industry: "Manufacturing",
    summary: "A live digital representation of a physical machine, kept in sync by acquired telemetry.",
    problem: "Machine state, history and predicted behaviour live in separate, disconnected systems.",
    approach: "Telemetry, historical performance and model outputs are bound to a single machine model so condition, trends and predictions are viewed together.",
    technologies: ["Time-series modelling", "Simulation", "AI/ML", "3D visualisation"],
    architecture: ["Physical Machine", "Telemetry", "Digital Representation", "Prediction", "Decision"],
    applications: ["Current condition view", "Historical performance", "Predicted failures"],
    outcomes: ["Single view of machine reality", "Scenario understanding before intervention"],
    maturity: "Concept Demo",
  },
];

export const SOLUTION_CATEGORIES = Array.from(new Set(SOLUTIONS.map((s) => s.category)));
export const SOLUTION_INDUSTRIES = Array.from(new Set(SOLUTIONS.map((s) => s.industry)));
