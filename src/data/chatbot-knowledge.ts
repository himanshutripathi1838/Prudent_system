import { COMPANY, CONTACT } from "@/data/site";

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export const QUICK_QUESTIONS = [
  "What is Industry 4.0?",
  "What is an IoT Gateway?",
  "What is Dual Partition A/B OTA?",
  "What is OEE?",
  "What is MSME Machine Retrofit?",
  "What is Edge AI?",
];

interface TopicAnswer {
  keywords: string[];
  shortResponse: string;
}

const TOPICS: TopicAnswer[] = [
  // 1. Industry 4.0 & Definition (PDF 1 - Page 1)
  {
    keywords: ["industry 4.0", "fourth industrial revolution", "4th industrial revolution", "smart manufacturing", "what is industry 4.0"],
    shortResponse: `**Industry 4.0 (Fourth Industrial Revolution)** transforms traditional factories into smart, connected, data-driven manufacturing systems.\n\n**Core Equation:**\n\`Machines + Sensors + Connectivity + Data + AI = Smart Manufacturing\`\n\nMachines, sensors, people, and software connect so factories collect data, analyze it, and automatically take corrective action.`,
  },

  // 2. Evolution of Industry (PDF 1 - Page 1)
  {
    keywords: ["evolution", "industry 1.0", "industry 2.0", "industry 3.0", "generations of industry", "history of industry"],
    shortResponse: `**Evolution of Industry:**\n- ⚙️ **Industry 1.0**: Steam & Mechanical Power (Mechanization)\n- ⚡ **Industry 2.0**: Electricity & Assembly Lines (Mass Production)\n- 💻 **Industry 3.0**: Electronics & Computers (Automation)\n- 🌐 **Industry 4.0**: IoT, AI, Cloud, Robotics (Smart Connected Manufacturing)`,
  },

  // 3. How Industry 4.0 Works / Architecture Flow (PDF 1 - Page 1 & 2)
  {
    keywords: ["how industry 4.0 works", "industry 4.0 architecture", "system flow", "data flow", "how it works"],
    shortResponse: `**Industry 4.0 System Flow:**\n\`MACHINES → SENSORS → DAQ → EDGE DEVICE / CONTROLLER → LOCAL / CLOUD PLATFORM → AI/ML ANALYTICS → DECISION / ALERT → AUTOMATIC ACTION\`\n\n**Example:** Motor vibration increases $\\rightarrow$ Edge DAQ samples data $\\rightarrow$ AI detects bearing wear $\\rightarrow$ Instant alert sent before motor fails.`,
  },

  // 4. Industrial IoT (IIoT) & Field Sensors (PDF 1 - Page 2)
  {
    keywords: ["iiot", "industrial iot", "field sensors", "industrial sensors"],
    shortResponse: `**Industrial IoT (IIoT)** connects machines and sensors to an industrial network.\n\n**Key Field Sensors:**\n- 🌡️ Temperature Sensors\n- 📳 Vibration Sensors (IMU / Accelerometers)\n- 🗜️ Pressure Transducers (4–20 mA)\n- ⚡ Energy Meters & CT Coils\n- 🌊 Flow Meters & Water Level Probes\n- 📊 Machine Status Relays`,
  },

  // 5. Data Acquisition Systems (DAQ) (PDF 1 - Page 2 & Page 8)
  {
    keywords: ["daq", "data acquisition", "daq system", "what is daq", "analog input", "high-speed adc"],
    shortResponse: `**Data Acquisition (DAQ)** collects raw physical signals from sensors and converts them into clean digital data.\n\n**DAQ Mapping Bridge:**\n- Temperature $\\rightarrow$ Analog Input $\\rightarrow$ Live Dashboard\n- Vibration $\\rightarrow$ High-Speed ADC $\\rightarrow$ Edge AI Predictive Maintenance\n- Current $\\rightarrow$ CT Input $\rightarrow$ Energy Analytics\n- Pressure $\rightarrow$ 4–20 mA Loop $\rightarrow$ Process Control\n- Machine Relay $\\rightarrow$ Digital Input $\rightarrow$ Real-time OEE`,
  },

  // 6. Edge Computing (PDF 1 - Page 3 & PDF 2 - Page 3)
  {
    keywords: ["edge computing", "edge processing", "edge device", "fft", "rms", "local processing"],
    shortResponse: `**Edge Computing** processes high-frequency data locally at the machine node instead of sending raw data to the cloud.\n\n**Flow:**\n\`Vibration Sensor → Edge Computer → FFT / RMS → Abnormal Vibration Detected → Immediate Local Alarm\`\n\n**Benefits:** Sub-millisecond response, zero cloud latency, lower bandwidth costs.`,
  },

  // 7. Cloud Computing (PDF 1 - Page 3)
  {
    keywords: ["cloud computing", "centralized cloud", "cloud platform", "bhopal pune chennai"],
    shortResponse: `**Cloud Computing** aggregates factory telemetry centrally so management can monitor multi-site operations from anywhere.\n\n**Example:** View Factory A (Bhopal), Factory B (Pune), and Factory C (Chennai) simultaneously on one central dashboard.`,
  },

  // 8. Artificial Intelligence & Machine Learning Applications (PDF 1 - Page 3)
  {
    keywords: ["ai applications", "ml applications", "ai in industry", "anomaly detection"],
    shortResponse: `**AI & ML Applications in Industry 4.0:**\n- 🔧 **Predictive Maintenance**: Predict machine failures before breakdown\n- 🎯 **Quality Prediction**: Detect defects at assembly line speed\n- 📈 **Anomaly Detection**: Identify abnormal vibration & thermal drift\n- ⚙️ **Production Optimization**: Eliminate bottlenecks\n- 💡 **Energy Optimization**: Prevent utility waste\n- 📊 **Demand Forecasting**: Optimize inventory`,
  },

  // 9. Digital Twin (PDF 1 - Page 3 & 4)
  {
    keywords: ["digital twin", "virtual representation", "virtual replica", "what is digital twin"],
    shortResponse: `A **Digital Twin** is a live virtual 3D/software representation of a physical machine, production line, or factory.\n\n**Key Displays:**\n- Current operating condition & live state\n- Historical performance logs\n- Predicted failure scenarios & Remaining Useful Life (RUL)\n- Energy consumption & production output`,
  },

  // 10. Robotics & Automation (PDF 1 - Page 4)
  {
    keywords: ["robotics", "cobots", "agv", "amr", "industrial robots", "automation"],
    shortResponse: `**Robotics & Automation Integration:**\nIndustry 4.0 connects software with:\n- 🤖 **Industrial Robots**: Heavy welding & assembly\n- 🤝 **Cobots**: Collaborative human-robot assembly\n- 🚚 **AGVs & AMRs**: Automated Guided & Autonomous Mobile Transport\n- 📷 **Automated Inspection Systems**: Computer vision sorting`,
  },

  // 11. Machine-to-Machine (M2M) Communication (PDF 1 - Page 4)
  {
    keywords: ["m2m", "machine to machine", "machine-to-machine"],
    shortResponse: `**Machine-to-Machine (M2M) Communication**:\nMachines communicate directly with each other without human intervention:\n\n\`CNC Machine → Production Controller → Robot → Vision Inspection System → Packaging Machine\``,
  },

  // 12. Predictive Maintenance (PDF 1 - Page 4 & 5)
  {
    keywords: ["predictive maintenance", "traditional vs industry 4.0", "bearing failure", "prevent failure"],
    shortResponse: `**Predictive Maintenance Comparison:**\n- ❌ **Traditional**: Machine Fails $\\rightarrow$ Production Stops $\\rightarrow$ Maintenance Repairs (High Downtime)\n- ✅ **Industry 4.0**: Sensor detects abnormal vibration $\\rightarrow$ Edge AI predicts bearing failure $\\rightarrow$ Maintenance scheduled $\\rightarrow$ Failure avoided!`,
  },

  // 13. Real-Time Machine Monitoring (PDF 1 - Page 5)
  {
    keywords: ["real-time machine monitoring", "machine monitoring", "parameters", "idle time", "cycle time"],
    shortResponse: `**Real-Time Machine Monitoring** provides live visibility into:\n- Machine Status (ON/OFF/IDLE)\n- Production Quantity & Cycle Time\n- Machine Downtime & Idle Reasons\n- Motor Temperature, Vibration & Current Draw`,
  },

  // 14. Overall Equipment Effectiveness (OEE) (PDF 1 - Page 5)
  {
    keywords: ["oee", "overall equipment effectiveness", "formula", "calculate oee"],
    shortResponse: `**Overall Equipment Effectiveness (OEE)**:\n\n**OEE = Availability × Performance × Quality**\n\n- ⏱️ **Availability**: Run Time / Planned Time\n- ⚡ **Performance**: Actual Speed / Target Speed\n- ✅ **Quality**: Good Parts / Total Parts Produced`,
  },

  // 15. Energy Management (PDF 1 - Page 5 & 6)
  {
    keywords: ["energy management", "utilities", "electricity gas steam", "compressed air"],
    shortResponse: `**Energy Management & Analytics**:\nMonitors Electricity, Gas, Steam, Compressed Air, Water, and Fuel.\n\n**Key Insights:**\n- Identifies which machine consumes excessive power\n- Pinpoints peak demand consumption hours\n- Detects compressed air & water leaks`,
  },

  // 16. Quality Control & Vision Inspection (PDF 1 - Page 6)
  {
    keywords: ["quality control", "quality inspection", "computer vision", "defect detection", "surface defects"],
    shortResponse: `**AI Quality Control & Vision Inspection**:\nAI and line cameras detect:\n- Surface defects & scratches\n- Dimensional errors\n- Missing components\n- Incorrect assembly\n- Colour variations & packaging flaws`,
  },

  // 17. Production Optimization (PDF 1 - Page 6)
  {
    keywords: ["production optimization", "bottlenecks", "slow machines", "changeover time"],
    shortResponse: `**Production Optimization** identifies shop floor inefficiency:\n- Line Bottlenecks & Slow Machines\n- Excessive Mold/Tool Changeover Time\n- Idle Machine Duration & Production Losses`,
  },

  // 18. Remote Monitoring & Alerts (PDF 1 - Page 6 & 7)
  {
    keywords: ["remote monitoring", "alerts", "mobile alerts", "compressor 3"],
    shortResponse: `**Remote Monitoring & Automated Alerts**:\nManagers monitor plant floor operations from phone or laptop (\`Machine → DAQ → Internet → Cloud → Mobile Dashboard\`).\n\n**Automated Alerts**: High Temp, Excessive Vibration, Overload, Power Failure, Machine Stoppage (e.g. *"Compressor #3: Abnormal vibration detected"*).`,
  },

  // 19. Small Factory / MSME Retrofit (PDF 1 - Page 7 & 8)
  {
    keywords: ["retrofit", "msme", "small factory", "cnc", "2-10 lakh", "investment"],
    shortResponse: `**MSME Industry 4.0 Retrofit**:\nSmall factories don't need ₹1–5 Crore replacements. With **₹2–10 Lakh**, 10 CNC machines install: \`Sensors + DAQ + Edge Gateway + Cloud Dashboard\` to monitor utilization, output, power, downtime, and vibration without replacing legacy equipment.`,
  },

  // 20. Large Factory & Enterprise Integration (PDF 1 - Page 7 & 8)
  {
    keywords: ["large factory", "enterprise", "scada", "mes", "erp", "plc"],
    shortResponse: `**Large Factory Architecture:**\n\`Thousands of Sensors → Hundreds of DAQ/Edge Nodes → Industrial Network → SCADA/MES → Cloud Data Lake → AI → ERP\`\n\nIntegrates with PLCs, SCADA, MES, ERP, Quality & Maintenance Systems for connected Smart Factories.`,
  },

  // 21. IoT Gateway Definition & Flow (PDF 2 - Page 1)
  {
    keywords: ["iot gateway", "gateway bridge", "what is iot gateway", "gateway flow"],
    shortResponse: `An **IoT Gateway** is a hardware & software device that acts as a bridge between field sensors and the cloud platform.\n\n**Flow:**\n\`Sensors & Machines → IoT Gateway → Cloud Dashboard / Mobile App\``,
  },

  // 22. Protocol Conversion (PDF 2 - Page 1 & 3)
  {
    keywords: ["protocol conversion", "modbus", "rs485", "can bus", "mqtt", "https", "websockets", "zigbee"],
    shortResponse: `**Gateway Protocol Conversion**:\nConverts industrial field protocols (Modbus RTU, RS485, CAN Bus, ZigBee, LoRa) into internet-compatible cloud protocols (MQTT, HTTPS, TCP/IP, WebSockets).`,
  },

  // 23. Functions of IoT Gateway (PDF 2 - Page 3 & 4)
  {
    keywords: ["gateway functions", "edge ai processing", "local storage", "store and forward", "alert generation"],
    shortResponse: `**7 Major Functions of IoT Gateway:**\n1. Data Collection (IMU, Temp, GPS, PLCs)\n2. Protocol Conversion (Modbus $\\rightarrow$ MQTT)\n3. Edge Computing (FFT, RMS vibration)\n4. Local AI Processing (Edge AI bearing alerts)\n5. Local Data Storage (Store-and-forward during outage)\n6. Alert Generation (Buzzer, SMS, WhatsApp)\n7. Device Management (Firmware updates, diagnostics)`,
  },

  // 24. Gateway Hardware Components & Specs (PDF 2 - Page 5 & 6)
  {
    keywords: ["raspberry pi cm4", "nxp", "jetson", "stm32", "esp32", "gateway specs", "hardware components"],
    shortResponse: `**IoT Gateway Hardware Specifications:**\n- **Processors**: Raspberry Pi CM4, NXP i.MX8, NVIDIA Jetson, STM32, ESP32\n- **Communication**: Ethernet, Wi-Fi, LoRa, 4G LTE, 5G, ZigBee\n- **Interfaces**: RS232, RS485, CAN Bus, Modbus, USB, GPIO\n- **Storage**: 32GB eMMC / SSD / SD Card\n- **Power**: Solar compatible with battery backup`,
  },

  // 25. Bridge Monitoring System (PDF 2 - Page 7)
  {
    keywords: ["bridge monitoring", "bridge health", "water level sensor", "flood risk"],
    shortResponse: `**Bridge Monitoring System**:\n- **Sensors**: Water level, Vibration, Wind, Tilt sensors\n- **Gateway**: Samples data every minute, checks thresholds, analyzes trends & estimates flood risk\n- **Dashboard**: Displays live bridge structural health, water level trends & flood alerts`,
  },

  // 26. Machine Health Monitoring Gateway (PDF 2 - Page 7 & 8)
  {
    keywords: ["machine health gateway", "fft spectrum", "bearing fault", "health score"],
    shortResponse: `**Machine Health Monitoring Gateway**:\n- **Motor Sensors**: IMU, Temperature, Current\n- **Gateway Computation**: Calculates FFT vibration spectrum, health score & bearing fault indicators\n- **Dashboard**: Shows machine condition, Remaining Useful Life (RUL) & maintenance recommendations`,
  },

  // 27. What is OTA (Over-The-Air) Firmware Update? (PDF 2 - Page 8 & 9)
  {
    keywords: ["what is ota", "ota firmware update", "over the air", "remote update"],
    shortResponse: `**OTA (Over-The-Air) Firmware Update** allows remote updating of software/firmware on IoT devices, gateways, and sensors without physically visiting installation sites.\n\n**Value**: Upload firmware once $\\rightarrow$ Select target units $\\rightarrow$ Auto-install over cellular/Wi-Fi $\\rightarrow$ Eliminates travel expenses.`,
  },

  // 28. OTA Architecture & Requirements (PDF 2 - Page 18 - 20)
  {
    keywords: ["ota architecture", "ota requirements", "ota bootloader", "flash memory"],
    shortResponse: `**OTA Hardware Requirements:**\n- **Controller**: ESP32 (16MB Flash), STM32, Nordic nRF52, RP2040\n- **Memory**: Extra Flash for dual partitions, RAM buffer\n- **Bootloader**: Verifies Checksum, CRC & Digital Signature before launching application`,
  },

  // 29. Dual-Partition A/B Failsafe OTA (PDF 2 - Page 14 & 15)
  {
    keywords: ["a/b partition", "dual partition", "failsafe", "rollback", "bricked"],
    shortResponse: `**Safe Dual-Partition A/B OTA Method**:\n- **Memory**: Partition A (Active) & Partition B (Inactive)\n- **Safe Write**: New firmware downloads into Partition B\n- **Verification**: Verifies hash & signature\n- **Failsafe Rollback**: If boot fails, system automatically reverts to Partition A so devices never get "bricked".`,
  },

  // 30. OTA Security Features (PDF 2 - Page 15 & 25)
  {
    keywords: ["ota security", "secure boot", "digital signature", "rsa-2048", "ecc", "encryption"],
    shortResponse: `**OTA Security Architecture:**\n- 🔒 **Secure Boot**: Only trusted firmware runs\n- ✍️ **Digital Signature**: Signed via RSA-2048 / ECC\n- 🛡️ **Encryption**: HTTPS TLS or MQTTS encrypted transfer\n- 🔑 **Device Authentication**: Unique device certificates prevent malicious updates`,
  },

  // 31. AI Model OTA Update (PDF 2 - Page 26 & 27)
  {
    keywords: ["ai model ota", "bearing_model_v3.tflite", "model ota", "update ai"],
    shortResponse: `**AI Model OTA Update**:\nInstead of updating entire firmware, remotely push updated neural network models (\`bearing_model_v3.tflite\`) to boost bearing detection accuracy (e.g. from 85% to 95%) without touching base firmware.`,
  },

  // 32. Complete 12-Step OTA Workflow (PDF 2 - Page 23 - 25)
  {
    keywords: ["ota workflow", "12 steps", "ota steps", "how ota works step"],
    shortResponse: `**12-Step OTA Workflow:**\n1. Build firmware (v2.0)\n2. Generate SHA256 checksum\n3. Digitally sign with Private Key\n4. Upload to OTA Server (AWS S3 / Blob)\n5. Send MQTT notify packet\n6. Device receives notification\n7. Download via HTTPS\n8. Verify SHA256 & Signature\n9. Write to Partition B\n10. Reboot into Bootloader B\n11. Self-test health\n12. Report success to dashboard!`,
  },

  // 33. Full OTA vs Delta OTA Update (PDF 2 - Page 13 & 14)
  {
    keywords: ["full ota", "delta ota", "diff update"],
    shortResponse: `**Full OTA vs Delta OTA**:\n- **Full OTA**: Replaces entire 50 MB firmware image.\n- **Delta OTA**: Downloads only changed code diff (e.g. 2 MB instead of 50 MB), saving 95% cellular data bandwidth!`,
  },

  // 34. OTA Tech Stack (PDF 2 - Page 27)
  {
    keywords: ["ota tech stack", "freertos", "mosquitto", "postgresql", "minio"],
    shortResponse: `**OTA Technology Stack:**\n- **Device Layer**: ESP32, STM32, FreeRTOS\n- **Communication**: MQTT, HTTPS, TLS Encryption\n- **Gateway**: Raspberry Pi CM4, Docker Containers\n- **Cloud**: Ubuntu Linux, Mosquitto MQTT Broker, Node.js/Python, PostgreSQL\n- **Storage**: AWS S3 / MinIO\n- **Dashboard**: React, Flutter Mobile App`,
  },

  // 35. Web Development & Cloud Engine
  {
    keywords: ["web", "web development", "website", "react", "frontend", "backend", "dashboard", "html", "css", "javascript", "typescript", "api", "web app"],
    shortResponse: `**Web Development & Cloud Dashboards**:\nWe build fast, responsive web applications, real-time telemetry dashboards, REST APIs, and monitoring UI using **React, TypeScript, Tailwind CSS, and Cloud Platforms** to visualize live IoT machine data and control hardware remotely.\n\nExplore our [Solutions Catalog](/solutions).`,
  },

  // 36. Company & Overview
  {
    keywords: ["prudent", "company", "about", "who are you", "prusys", "bhopal", "kya hai", "kon hai", "kaha hai"],
    shortResponse: `**Prudent Systems Pvt. Ltd.** is an ISO-certified technology company based in **Bhopal, MP, India**.\n\nWe build **Industry 4.0 Systems, Universal IoT Gateways, Modular DAQ, Edge AI, Web Dashboards, and Railway Electronics** (GPS OMS & Digital Speedometers).\n\n📍 Bhopal, MP | 📞 ${CONTACT.phone} | 📧 ${CONTACT.email}\nLearn more on our [About Page](/about).`,
  },

  // 37. Contact Info
  {
    keywords: ["contact", "email", "phone", "address", "location", "office", "call", "reach", "baat", "number"],
    shortResponse: `📍 **Office**: ${CONTACT.addressLine}\n📞 **Mobile**: ${CONTACT.phone}\n☎️ **Landline**: ${CONTACT.landline}\n📧 **Email**: ${CONTACT.email}\n🗺️ **Location**: [Open in Google Maps](${CONTACT.mapsUrl})\n\nFill out our enquiry form on the [Contact Page](/contact).`,
  },

  // 38. Railway Systems Portfolio
  {
    keywords: ["railway", "railways", "locomotive", "track", "speedometer", "oliver", "oms"],
    shortResponse: `**Prudent Systems Railway Portfolio**:\n- 🚆 **GPS OMS**: Track oscillation & location tracking.\n- 📟 **Digital Speedometer**: Cab display & driver memory log.\n- 📊 **OLIVER G & GHX**: Track geometry & multi-axis acceleration recording.\n\nSee full specs on our [Solutions Page](/solutions).`,
  },
];

export const ALLOWED_DOMAIN_KEYWORDS = [
  "iot", "iiot", "ai", "ml", "daq", "ota", "web", "react", "dashboard", "sensor",
  "embedded", "prudent", "railway", "speedometer", "oliver", "oms", "firmware",
  "microcontroller", "esp32", "stm32", "manufacturing", "industry 4.0", "bhopal",
  "contact", "phone", "email", "about", "solution", "product", "machine", "vibration",
  "temperature", "energy", "digital twin", "predictive", "quality", "tracking", "water",
  "weather", "light", "toe load", "thermometer", "train", "bogie", "route", "gateway",
  "modbus", "can bus", "rs485", "mqtt", "oee", "retrofit", "msme", "cnc", "a/b partition",
  "rollback", "secure boot", "digital signature", "m2m", "vision", "fft", "rms", "kurtosis",
  "evolution", "1.0", "2.0", "3.0", "4.0", "delta ota", "full ota", "tflite", "cm4", "jetson",
  "nxp", "agv", "amr", "cobot", "scada", "mes", "erp", "bridge", "anemometer", "greetings",
  "hi", "hello", "hey", "hlo", "namaste", "good morning", "good afternoon", "good evening", "good night"
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for Prudent Systems Pvt. Ltd. (Bhopal, MP, India).
You have COMPLETE A-to-Z knowledge from both official company documentation PDFs:

1. Industry 4.0 & Manufacturing (PDF 1):
   - Equation: Machines + Sensors + Connectivity + Data + AI = Smart Manufacturing
   - Evolution: 1.0 Steam/Mechanization, 2.0 Electricity/Mass Production, 3.0 Electronics/Automation, 4.0 IoT/AI/Cloud/Robotics
   - System Flow: Machines -> Sensors -> DAQ -> Edge Controller -> Local/Cloud Platform -> AI/ML -> Decision -> Action
   - Technologies: IIoT, DAQ, Edge Computing (FFT/RMS), Cloud Computing (Bhopal, Pune, Chennai), AI/ML, Digital Twin, Robotics (Cobots, AGVs, AMRs), M2M
   - Uses: Predictive Maintenance, Real-time Machine Monitoring, OEE (Availability x Performance x Quality), Energy Management (kWh, Gas, Steam, Air, Water), Quality Control (Vision defects), Production Optimization, Remote Monitoring, Automated Alerts
   - MSME Retrofit: ₹2-10 Lakh for 10 CNC machines without replacing legacy machinery
   - Large Factory: Sensors -> DAQ/Edge -> Network -> SCADA/MES -> Cloud -> AI -> ERP

2. IoT Gateway & OTA Architecture (PDF 2):
   - IoT Gateway: Bridge between field sensors and cloud (Sensors -> Gateway -> Cloud). Converts RS485/Modbus/CAN to MQTT/HTTPS/WebSockets.
   - Hardware: RPi CM4, NXP i.MX8, STM32, ESP32, NVIDIA Jetson, 4G LTE, 5G, LoRaWAN, 32GB eMMC/SSD.
   - Gateway Functions: Data collection, protocol conversion, edge computing (FFT), edge AI (.tflite), store-and-forward local storage, alert generation, device management.
   - Applications: Bridge Monitoring System, Machine Health Monitoring, Railway Monitoring, Weather Stations, Water Infrastructure.
   - OTA Firmware Update: Remote updates without site visits.
   - Safe OTA Dual Partition A/B: Active A, Inactive B. Flash B, verify SHA256 & RSA-2048/ECC signature. Automatic rollback to A if boot fails.
   - Delta OTA vs Full OTA: Delta downloads only changed diff (2MB vs 50MB).
   - AI Model OTA: Update only .tflite neural networks remotely over-the-air.
   - 12-Step OTA Workflow: Build -> Checksum -> Sign -> Upload -> MQTT notify -> Receive -> Download -> Verify -> Write B -> Reboot B -> Health test -> Report success.
   - Tech Stack: ESP32/STM32/FreeRTOS -> MQTT/HTTPS/TLS -> RPi CM4/Docker -> Ubuntu/Mosquitto/Node/PostgreSQL -> AWS S3/MinIO -> React/Flutter.

3. Web Development, IoT & AI/ML Capabilities:
   - React, TypeScript, Tailwind CSS, REST APIs, Real-time WebSockets dashboards, Edge AI, Python models.

4. Strict Rules:
   - Provide SHORT, CRISP, ACCURATE, and POINT-TO-POINT answers (2-4 concise lines/bullets).
   - Include page links [Solutions](/solutions), [About](/about), [Contact](/contact) where appropriate.
   - If question is OUTSIDE IoT, AI/ML, Web Dev, or Prudent Systems, reply with:
     "Sorry! 🙏 I am trained to assist only with IoT, AI/ML, Web Development, and Prudent Systems solutions. Please ask a question related to these domains!"`;

export function getTimeBasedGreeting(): string {
  const hour = new Date().getHours();
  let timePrefix = "Good Morning! 🌅";
  if (hour >= 12 && hour < 17) {
    timePrefix = "Good Afternoon! ☀️";
  } else if (hour >= 17 && hour < 21) {
    timePrefix = "Good Evening! 🌆";
  } else if (hour >= 21 || hour < 5) {
    timePrefix = "Good Night! 🌙";
  }
  return `${timePrefix} Hi! Hello! 👋 Welcome to Prudent Systems! How can I help you today? Ask me any question about IoT, AI/ML, DAQ, OTA, or our solutions!`;
}

export function isGreeting(userQuery: string): boolean {
  const q = userQuery.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "");
  if (!q) return true;
  
  const QUESTION_WORDS = ["what", "how", "why", "who", "where", "explain", "tell", "cost", "price", "sensor", "iot", "ai", "ml", "web", "daq", "ota", "prudent", "kya", "kaise", "kaha", "oee", "gateway", "retrofit", "m2m", "fft", "rms", "agv", "amr", "cobot", "scada", "mes", "erp"];
  if (QUESTION_WORDS.some((w) => q.includes(w))) {
    return false;
  }

  const GREETING_REGEX = /^(hi+|hello+|helo+|hey+|hlo+|hlw+|hy+|namaste+|namaskar+|greetings+)(\s.*)?$/i;
  if (GREETING_REGEX.test(q)) return true;
  if (q.startsWith("good morning") || q.startsWith("good afternoon") || q.startsWith("good evening") || q.startsWith("good night")) return true;
  return false;
}

export async function getGeminiBotResponse(userQuery: string, chatHistory: ChatMessage[] = []): Promise<string> {
  if (isGreeting(userQuery)) {
    return getTimeBasedGreeting();
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (apiKey && typeof apiKey === "string" && apiKey.trim().length > 10) {
    try {
      const contents = [
        {
          role: "user",
          parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userQuery}\n\nProvide a SHORT, CRISP response:` }],
        },
      ];

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey.trim()}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ contents }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        const generatedText = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        if (generatedText && typeof generatedText === "string") {
          return generatedText;
        }
      }
    } catch (err) {
      console.warn("Gemini API call failed, using local short answer engine:", err);
    }
  }

  return getBotResponse(userQuery);
}

export function getBotResponse(userQuery: string): string {
  const query = userQuery.trim().toLowerCase();

  // 1. Time-Based Greeting Check
  if (isGreeting(userQuery)) {
    return getTimeBasedGreeting();
  }

  // 2. Strict Domain Relevance Check
  const isDomainRelevant = ALLOWED_DOMAIN_KEYWORDS.some((kw) => query.includes(kw));

  // 3. Topic Matching
  let bestMatch: TopicAnswer | null = null;
  let maxScore = 0;

  for (const topic of TOPICS) {
    let score = 0;
    for (const kw of topic.keywords) {
      if (query.includes(kw)) {
        score += kw.length * 4;
      } else {
        const tokens = query.split(/\s+/);
        for (const token of tokens) {
          if (token.length > 2 && kw.includes(token)) {
            score += token.length * 2;
          }
        }
      }
    }
    if (score > maxScore) {
      maxScore = score;
      bestMatch = topic;
    }
  }

  if (bestMatch && maxScore > 0) {
    return bestMatch.shortResponse;
  }

  // 4. If query is outside IoT, AI/ML, Web Development, or Prudent Systems domain -> Return Sorry Message
  if (!isDomainRelevant) {
    return "Sorry! 🙏 I am trained to assist only with IoT, AI/ML, Web Development, and Prudent Systems solutions. Please ask a question related to these domains!";
  }

  // Fallback for domain-relevant queries
  return `Regarding **"${userQuery}"**: **Prudent Systems** specializes in **IoT, AI/ML, Web Development, Modular DAQ, IIoT Gateways, and Railway Electronics**.\n\nFeel free to ask about sensors, web apps, ML algorithms, or check our [Solutions Catalog](/solutions) & [Contact Page](/contact)!`;
}
