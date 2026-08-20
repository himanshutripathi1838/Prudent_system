import { COMPANY, CONTACT } from "@/data/site";

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export const QUICK_QUESTIONS = [
  "What is an IoT Gateway?",
  "What are the 7 Functions of an IoT Gateway?",
  "How does Safe A/B Partition OTA work?",
  "What is the 12-Step OTA Workflow?",
  "What is AI Model OTA?",
  "What is Delta OTA vs Full OTA?",
];

interface TopicAnswer {
  keywords: string[];
  shortResponse: string;
}

const TOPICS: TopicAnswer[] = [
  // ==========================================
  // EXHAUSTIVE 28-PAGE IOT GATEWAY & OTA PDF KNOWLEDGE
  // ==========================================

  // 1. Definition of IoT Gateway (Page 1)
  {
    keywords: ["what is an iot gateway", "iot gateway definition", "gateway simple terms", "bridge field sensors"],
    shortResponse: `An **IoT Gateway** is a hardware & software device acting as a bridge between field sensors/machines and the cloud platform.\n\n**Simple Terms:**\n\`Sensors & Machines → IoT Gateway → Cloud Dashboard / Mobile App\`\n\nIt collects data from multiple sensors, processes it locally, and securely transmits it to the cloud.`,
  },

  // 2. Why IoT Gateway is Needed & Protocol Conversion (Page 1 & 3)
  {
    keywords: ["why iot gateway needed", "protocol conversion", "modbus rtu", "rs485", "can bus", "zigbee", "lora", "bluetooth", "mqtt", "https", "websockets"],
    shortResponse: `**Why an IoT Gateway is Needed:**\nIndustrial sensors use field protocols (**Modbus RTU, RS485, CAN Bus, ZigBee, LoRa, Bluetooth**), while cloud platforms use internet protocols (**MQTT, HTTPS, TCP/IP, WebSockets**).\n\n**Protocol Mapping:**\n- RS485 $\\rightarrow$ Converts to MQTT\n- Modbus $\\rightarrow$ Converts to HTTPS\n- CAN Bus $\\rightarrow$ Converts to TCP/IP`,
  },

  // 3. Typical Gateway Architecture (Page 1 & 2)
  {
    keywords: ["gateway architecture", "ot connectivity", "it connectivity", "control center", "scada", "remote i/o"],
    shortResponse: `**IoT Gateway Architecture:**\n\`Control Center (SCADA / Dashboard) ← IT Connectivity ← IIoT Gateway (Wired/Wireless, Routing, Local Storage, Edge AI) ← OT Connectivity ← Remote I/O (DIO/AIO), Field Devices\``,
  },

  // 4. Field Devices & Sensors Connected to Gateway (Page 2)
  {
    keywords: ["field devices", "gateway sensors", "sensors connected to gateway"],
    shortResponse: `**Field Devices Connected to IoT Gateway:**\n- 📳 Vibration Sensors (IMU)\n- 🌡️ Temperature Sensors\n- ⚡ Current Sensors (CT Coils)\n- 📍 GPS Modules\n- 🌤️ Weather Sensors (Anemometers)\n- 🌊 Water Level Probes\n- 📷 Line Cameras`,
  },

  // 5. 7 Major Functions of an IoT Gateway (Page 3 - 5)
  {
    keywords: ["7 functions", "major functions", "functions of iot gateway", "what does gateway do"],
    shortResponse: `**7 Major Functions of an IoT Gateway:**\n1. **Data Collection**: Collects from IMU, Temp, GPS, PLCs (e.g. 50 motors, 20 pumps, 10 compressors)\n2. **Protocol Conversion**: Modbus/RS485/CAN $\\rightarrow$ MQTT/HTTPS\n3. **Edge Computing**: Computes RMS, Peak vibration & FFT spectrum locally\n4. **Local AI Processing**: Edge AI bearing fault alerts\n5. **Local Data Storage**: Store-and-forward local logging during internet failure\n6. **Alert Generation**: Direct local Buzzer, SMS & WhatsApp alerts\n7. **Device Management**: Remote firmware updates, config & diagnostics`,
  },

  // 6. Edge Computing Details & Benefits (Page 3 & 4)
  {
    keywords: ["edge computing benefits", "1000 readings", "rms vibration", "peak vibration", "fft spectrum"],
    shortResponse: `**Edge Computing on IoT Gateway:**\nA vibration sensor generates 1000 readings/sec. Instead of streaming raw data, the gateway computes **RMS vibration, Peak vibration, & FFT spectrum** locally.\n\n**Benefits:**\n- ⚡ Lower cellular bandwidth\n- 🚀 Sub-millisecond instant response\n- 💰 Lower cloud storage costs`,
  },

  // 7. Local AI Processing / Edge AI (Page 4)
  {
    keywords: ["local ai processing", "edge ai bearing", "bearing fault likely"],
    shortResponse: `**Local AI Processing (Edge AI):**\nWhen a motor vibration pattern indicates bearing failure, the gateway instantly detects *"Bearing fault likely"* locally and sends an alert without waiting for cloud analysis.`,
  },

  // 8. Local Data Storage & Store-and-Forward (Page 4)
  {
    keywords: ["local data storage", "store and forward", "internet fails", "prevent data loss"],
    shortResponse: `**Local Data Storage & Store-and-Forward:**\nIf internet connectivity fails, the gateway stores sensor data in local eMMC/SSD storage (32GB). When connectivity returns, data automatically syncs to the cloud, preventing data loss.`,
  },

  // 9. Local Alert Generation (Page 4 & 5)
  {
    keywords: ["alert generation", "buzzer sms whatsapp", "80°c", "instant alert"],
    shortResponse: `**Local Alert Generation:**\nIf temperature exceeds 80°C, the gateway instantly:\n- 🔊 Activates local Buzzer\n- 📱 Sends SMS notification\n- 💬 Sends WhatsApp alert\nwithout waiting for a cloud server response!`,
  },

  // 10. Gateway Device Management (Page 5)
  {
    keywords: ["gateway device management", "manage sensors", "smart meters"],
    shortResponse: `**Gateway Device Management:**\nManages connected Sensors, Controllers, Cameras, and Smart Meters.\n\n**Capabilities:** Remote firmware updates, configuration parameter changes, and self-diagnostics.`,
  },

  // 11. Hardware Components of an IoT Gateway (Page 5 & 6)
  {
    keywords: ["hardware components", "gateway hardware specs", "gateway processor", "raspberry pi cm4", "esp32", "stm32", "nxp i.mx", "intel atom", "nvidia jetson"],
    shortResponse: `**IoT Gateway Hardware Specs:**\n- **Processors**: Raspberry Pi CM4, ESP32, STM32, NXP i.MX8, Intel Atom, NVIDIA Jetson\n- **Communication**: Ethernet, Wi-Fi, LoRa, ZigBee, Bluetooth, 4G LTE, 5G\n- **Interfaces**: RS232, RS485, CAN Bus, Modbus, USB, GPIO\n- **Storage**: 32GB eMMC, SSD, SD Card (Stores local DB, logs & AI models)`,
  },

  // 12. Example Prudent Edge Gateway (Page 6 & 7)
  {
    keywords: ["prudent edge gateway", "gateway features", "32gb local storage", "solar compatible"],
    shortResponse: `**Prudent Edge Gateway Specs:**\n- **Interfaces**: RS485, Modbus RTU, CAN Bus, Analog/Digital Inputs\n- **Connectivity**: LoRa, Wi-Fi, 4G/5G, Ethernet\n- **Processing**: Edge AI, Local FFT analytics, Event detection\n- **Storage**: 32GB local eMMC/SSD\n- **Power**: Solar compatible with battery backup`,
  },

  // 13. Bridge Monitoring System Example (Page 7)
  {
    keywords: ["bridge monitoring system", "bridge sensors", "flood risk estimation", "tilt sensor"],
    shortResponse: `**Bridge Monitoring System Architecture:**\n- **Sensors**: Water level, Vibration, Wind speed, Tilt sensors\n- **Gateway**: Collects data every minute; executes threshold checks, trend analysis & flood risk estimation\n- **Cloud Dashboard**: Displays bridge structural health, water level trends, flood alerts & historical reports.`,
  },

  // 14. Machine Health Monitoring Gateway Example (Page 7 & 8)
  {
    keywords: ["machine health monitoring gateway", "motor sensors", "health score", "remaining life estimate"],
    shortResponse: `**Machine Health Monitoring System:**\n- **Sensors**: IMU vibration, Temperature, Current CT coils\n- **Gateway Calculation**: Calculates FFT spectrum, Health score & Bearing fault indicators\n- **Dashboard Output**: Displays Machine condition, Remaining Useful Life (RUL) estimate & Maintenance recommendations.`,
  },

  // 15. Universal Industrial IoT Gateway Applications (Page 8)
  {
    keywords: ["universal gateway applications", "gateway applications", "7 applications"],
    shortResponse: `**Universal Industrial IoT Gateway Applications:**\n1. Machine Health Monitoring\n2. Railway Monitoring\n3. Smart Bridges\n4. Water Infrastructure\n5. Weather Stations\n6. Solar Plant Monitoring\n7. Asset Tracking`,
  },

  // 16. What is OTA (Over-The-Air) Firmware Update? (Page 8 & 9)
  {
    keywords: ["what is ota", "ota firmware update", "why ota important", "500 railway units"],
    shortResponse: `**OTA (Over-The-Air) Firmware Update** allows remote software updates on deployed IoT devices, gateways, and sensors without site visits.\n\n**Why Important:** Updating 500 Railway Units, 200 Bridge Systems, 1000 Machine Health Devices & 300 Water Stations manually is expensive. With OTA: Upload once $\\rightarrow$ Select targets $\\rightarrow$ Devices auto install!`,
  },

  // 17. Basic OTA Architecture (Page 9 & 18)
  {
    keywords: ["basic ota architecture", "ota flow diagram"],
    shortResponse: `**Overall OTA Architecture:**\n\`Firmware Dev Team → OTA Server → Cloud Platform → MQTT/HTTPS Server → IoT Gateway → Sensor Devices\``,
  },

  // 18. 8-Step Basic OTA Execution Process (Page 11 - 13)
  {
    keywords: ["ota 8 steps", "basic ota process", "step 1 firmware development"],
    shortResponse: `**Basic OTA Update Process:**\n1. **Dev**: Build Firmware v1.1\n2. **Upload**: Push \`Firmware_v1.1.bin\` to AWS S3/Azure Blob\n3. **Check**: Device queries for updates\n4. **Reply**: Server confirms update available\n5. **Download**: Device downloads via 4G/Wi-Fi\n6. **Verify**: Check file size, SHA256 checksum & signature\n7. **Install**: Write to Flash & Reboot\n8. **Confirm**: Send "Version 1.1 Installed" to Cloud`,
  },

  // 19. OTA Example Scenarios (Railway & Bridge) (Page 13)
  {
    keywords: ["wheel flat defects", "flood prediction algorithm", "ota example"],
    shortResponse: `**Prudent OTA Real Scenarios:**\n- **Railway Vibration**: Installed units receive Firmware v2.0 OTA to detect *wheel flat defects* automatically.\n- **Bridge Monitoring**: Pushes new *flood prediction AI algorithms* to all deployed units over-the-air without site visits.`,
  },

  // 20. Full Firmware Update vs Delta OTA Update (Page 13 & 14)
  {
    keywords: ["full firmware update", "delta ota update", "50 mb vs 2 mb", "diff update"],
    shortResponse: `**Full OTA vs Delta OTA Update:**\n- 📦 **Full OTA**: Replaces entire 50 MB firmware image. Simple, but heavy data usage.\n- ⚡ **Delta OTA**: Downloads only changed code diff (**2 MB instead of 50 MB**). Ideal for remote cellular/4G sites (saves 95% bandwidth!).`,
  },

  // 21. Safe OTA Using Dual Firmware (A/B Partitioning) (Page 14 & 15)
  {
    keywords: ["a/b partition method", "dual firmware", "partition a partition b", "bricked"],
    shortResponse: `**Safe A/B Partition OTA Method:**\nMemory contains **Partition A (Active)** & **Partition B (Inactive)**.\n\nNew firmware v1.1 installs into Partition B. System reboots into B. If boot succeeds, system switches to B. If update fails, it **automatically reverts to Partition A**, preventing devices from becoming unusable ("bricked").`,
  },

  // 22. OTA Security Features (Page 15, 25 & 26)
  {
    keywords: ["ota security features", "secure boot", "digital signature verification", "rsa-2048", "ecc", "https tls", "mqtts", "device authentication"],
    shortResponse: `**OTA Security Architecture:**\n- 🛡️ **Secure Boot**: Only trusted firmware runs\n- ✍️ **Digital Signature**: Signed by Prudent Systems (RSA-2048 or ECC)\n- 🔒 **Encrypted Transfer**: HTTPS TLS or MQTTS\n- 🔑 **Device Authentication**: Unique SSL Certificate per device prevents unauthorized malicious updates`,
  },

  // 23. OTA Dashboard Features & Example Table (Page 15 & 16)
  {
    keywords: ["ota dashboard features", "device inventory", "mhm-001 bhopal", "mhm-002 indore", "mhm-003 nagpur"],
    shortResponse: `**OTA Dashboard Features:**\n- **Device Inventory**: Device ID, Location, Firmware Version\n- **Update Control**: Select devices, regions, or customer sites\n- **Status Monitoring**: e.g., \`MHM-001 Bhopal (Update Available)\`, \`MHM-002 Indore (Downloading)\`, \`MHM-003 Nagpur (Updated)\``,
  },

  // 24. OTA in AI Machine Health Monitoring (Page 16)
  {
    keywords: ["ota in ai machine health", "gear wear", "motor imbalance", "smarter over time"],
    shortResponse: `**AI Machine Health OTA Upgrades:**\nTo detect new faults (bearing defects, gear wear, motor imbalance), you don't replace hardware! You push updated **AI models, analytics algorithms & dashboard logic** OTA. Installed hardware becomes smarter over time!`,
  },

  // 25. Recommended OTA Hardware Requirements (Page 18 - 20)
  {
    keywords: ["sensor node hardware", "esp32 16 mb flash", "bootloader", "ram buffer"],
    shortResponse: `**OTA Sensor Node Hardware Requirements:**\n- **Controllers**: ESP32, STM32, Nordic nRF52, RP2040, NXP\n- **Flash Memory**: **ESP32 16 MB Flash** recommended (4 MB is too limited)\n- **Partitioning**: Bootloader, Firmware A, Firmware B, Settings, Logs\n- **Gateway**: RPi CM4 / NXP i.MX8 / Jetson Nano, 4GB RAM, 32GB eMMC/SSD`,
  },

  // 26. Communication Channels for OTA (WiFi, 4G/5G, LoRa) (Page 20 - 22)
  {
    keywords: ["wifi ota", "4g 5g ota", "lora ota", "communication channels for ota"],
    shortResponse: `**OTA Communication Channels:**\n- 📶 **WiFi OTA**: Fast & cheap (Factories & indoor sites)\n- 📡 **4G/5G OTA**: Most practical (Railway sites, bridges, water stations)\n- 📻 **LoRa OTA**: Limited bandwidth (2 MB takes hours). Use LoRa for **OTA Notifications ONLY**; actual download occurs over 4G/Wi-Fi!`,
  },

  // 27. OTA Server & Metadata Database (Page 22 & 23)
  {
    keywords: ["ota server design", "aws s3", "azure blob", "metadata database", "rw001 1.0"],
    shortResponse: `**OTA Server & Metadata DB:**\n- **Storage**: AWS S3, Azure Blob, or Private Linux Server stores \`Firmware_v2.0.bin\`\n- **Metadata DB**: Stores Device ID (\`RW001\`), Firmware Version (\`v1.0\`), Location, Customer, & Update Status`,
  },

  // 28. Complete 12-Step OTA Workflow with MQTT Payload (Page 23 - 25)
  {
    keywords: ["12-step ota workflow", "mqtt payload", "firmware.bin", "sha256 signature"],
    shortResponse: `**Complete 12-Step OTA Workflow:**\n1. Build Firmware v2.0\n2. Generate SHA256 Checksum\n3. Sign with Private Key\n4. Upload to OTA Server\n5. Cloud sends MQTT: \`{"version":"2.0","url":"firmware.bin"}\`\n6. Device receives notify\n7. Download via HTTPS\n8. Verify SHA256 & Signature\n9. Write to Partition B\n10. Reboot into Bootloader B\n11. Application self-test (Sensors, Comm, Memory)\n12. Send "Update Successful" to Cloud!`,
  },

  // 29. AI Model OTA Update Details (Page 26 & 27)
  {
    keywords: ["ai model ota update", "bearing_model_v3.tflite", "85% to 95%"],
    shortResponse: `**AI Model OTA Update:**\nInstead of reflashing base firmware, upload updated neural model \`bearing_model_v3.tflite\`. Bearing fault detection accuracy jumps from **85% to 95%** across all gateways instantly without firmware changes!`,
  },

  // 30. Suggested OTA Tech Stack (Page 27)
  {
    keywords: ["suggested ota tech stack", "freertos", "docker containers", "ubuntu linux", "mosquitto", "postgresql", "minio", "react", "flutter"],
    shortResponse: `**Complete OTA Tech Stack:**\n- **Device Layer**: ESP32, STM32, FreeRTOS\n- **Communication**: MQTT, HTTPS, TLS Encryption\n- **Gateway**: Raspberry Pi CM4, Docker Containers\n- **Cloud**: Ubuntu Linux, Mosquitto MQTT Broker, Node.js/Python, PostgreSQL\n- **Storage**: AWS S3 Compatible / MinIO\n- **Dashboard**: React, Flutter Mobile App`,
  },

  // 31. Business Value & Commercial Advantage (Page 17 & 28)
  {
    keywords: ["business value of ota", "without ota vs with ota", "commercial advantage", "single scalable platform"],
    shortResponse: `**Business Value of OTA:**\n- ❌ **Without OTA**: Expensive site visits, travel costs, slow deployments.\n- ✅ **With OTA**: Instant remote upgrades, instant bug fixes, lower maintenance costs, effortless scaling to thousands of devices.\n\nCreates a **Single Scalable Industry 4.0 Platform** supporting Railways, Machine Health, Bridges, Water, Weather & Asset Tracking!`,
  },

  // ==========================================
  // GENERAL DOMAIN KNOWLEDGE (Industry 4.0, Web Dev, Company)
  // ==========================================

  // 32. Industry 4.0 Definition & Equation (PDF 1)
  {
    keywords: ["industry 4.0 equation", "smart manufacturing equation"],
    shortResponse: `**Industry 4.0 Equation:**\n\`Machines + Sensors + Connectivity + Data + AI = Smart Manufacturing\``,
  },

  // 33. OEE Calculation (PDF 1)
  {
    keywords: ["oee calculation", "overall equipment effectiveness"],
    shortResponse: `**OEE Formula:**\n\n$$\\text{OEE} = \\text{Availability} \\times \\text{Performance} \\times \\text{Quality}$$\n\n- **Availability**: Run Time / Planned Time\n- **Performance**: Actual Speed / Target Speed\n- **Quality**: Good Parts / Total Output`,
  },

  // 34. Web Development & Cloud Engine
  {
    keywords: ["web", "web development", "website", "react", "frontend", "backend", "dashboard", "html", "css", "javascript", "typescript", "api", "web app"],
    shortResponse: `**Web Development & Cloud Dashboards**:\nWe build fast, responsive web applications, real-time telemetry dashboards, REST APIs, and monitoring UI using **React, TypeScript, Tailwind CSS, and Cloud Platforms** to visualize live IoT machine data and control hardware remotely.\n\nExplore our [Solutions Catalog](/solutions).`,
  },

  // 35. Company & Overview
  {
    keywords: ["prudent", "company", "about", "who are you", "prusys", "bhopal", "kya hai", "kon hai", "kaha hai"],
    shortResponse: `**Prudent Systems Pvt. Ltd.** is an ISO-certified technology company based in **Bhopal, MP, India**.\n\nWe build **Industry 4.0 Systems, Universal IoT Gateways, Modular DAQ, Edge AI, Web Dashboards, and Railway Electronics** (GPS OMS & Digital Speedometers).\n\n📍 Bhopal, MP | 📞 ${CONTACT.phone} | 📧 ${CONTACT.email}\nLearn more on our [About Page](/about).`,
  },

  // 36. Contact Info
  {
    keywords: ["contact", "email", "phone", "address", "location", "office", "call", "reach", "baat", "number"],
    shortResponse: `📍 **Office**: ${CONTACT.addressLine}\n📞 **Mobile**: ${CONTACT.phone}\n☎️ **Landline**: ${CONTACT.landline}\n📧 **Email**: ${CONTACT.email}\n🗺️ **Location**: [Open in Google Maps](${CONTACT.mapsUrl})\n\nFill out our enquiry form on the [Contact Page](/contact).`,
  },

  // 37. Railway Systems Portfolio
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
  "nxp", "agv", "amr", "cobot", "scada", "mes", "erp", "bridge", "anemometer", "7 functions",
  "store and forward", "mhm-001", "rw001", "bearing_model_v3", "85%", "95%", "greetings",
  "hi", "hello", "hey", "hlo", "namaste", "good morning", "good afternoon", "good evening", "good night"
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for Prudent Systems Pvt. Ltd. (Bhopal, MP, India).
You have COMPLETE A-to-Z 28-Page Knowledge from the official IoT Gateway & OTA Firmware Update Architecture specification:

1. IoT Gateway Architecture & Specs (Pages 1 - 8):
   - Definition: Bridge between field sensors and cloud (Sensors & Machines -> IoT Gateway -> Cloud Dashboard / Mobile App).
   - Protocol Conversion: Converts Modbus RTU, RS485, CAN Bus, ZigBee, LoRa, Bluetooth to MQTT, HTTPS, TCP/IP, WebSockets.
   - 7 Functions: Data collection, Protocol conversion, Edge computing (FFT/RMS), Local AI (.tflite), Store-and-forward local storage (32GB eMMC/SSD), Local alert generation (Buzzer, SMS, WhatsApp), Device management.
   - Hardware: RPi CM4, NXP i.MX8, Intel Atom, NVIDIA Jetson, ESP32, STM32, Ethernet, Wi-Fi, LoRa, 4G/5G, RS232/485, CAN Bus, Solar compatible.
   - Applications: Machine Health Monitoring, Railway Monitoring, Smart Bridges, Water Infrastructure, Weather Stations, Solar Plant Monitoring, Asset Tracking.

2. OTA Firmware Update Architecture (Pages 8 - 28):
   - What is OTA: Remote software/firmware update on deployed devices without site visits.
   - Flow: Dev Team -> OTA Server -> Cloud Platform -> MQTT/HTTPS Server -> IoT Gateway -> Sensor Devices.
   - Types: Full Firmware Update (entire 50MB image) vs Delta OTA Update (2MB diff code only, saves 95% bandwidth).
   - Safe A/B Partition Method: Partition A (Active) & Partition B (Inactive). Flash B, verify SHA256 & RSA-2048/ECC signature. Boot B. Automatic rollback to A if boot fails (Zero bricked devices).
   - Security: Secure Boot, Signed Firmware (RSA-2048/ECC), Encrypted Communication (HTTPS TLS / MQTTS), Device Authentication (Unique SSL Certificates).
   - AI Model OTA: Remote push of bearing_model_v3.tflite models to boost fault detection accuracy from 85% to 95% without firmware changes.
   - 12-Step OTA Workflow: Build v2.0 -> SHA256 checksum -> Private key signature -> Upload -> MQTT notify {"version":"2.0","url":"firmware.bin"} -> Device receives -> HTTPS download -> Verify -> Write Partition B -> Reboot B -> Health test -> Report success.
   - Tech Stack: ESP32/STM32/FreeRTOS -> MQTT/HTTPS/TLS -> RPi CM4/Docker -> Ubuntu/Mosquitto/Node/PostgreSQL -> AWS S3/MinIO -> React/Flutter.

3. Rules:
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
