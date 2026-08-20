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
  // 1. Industry 4.0 & Evolution (From PDF 1)
  {
    keywords: ["industry 4.0", "fourth industrial revolution", "revolution", "1.0", "2.0", "3.0", "4.0", "evolution", "smart manufacturing"],
    shortResponse: `**Industry 4.0 (Fourth Industrial Revolution)** connects machines, sensors, people, and AI into smart manufacturing systems.\n\n**Core Equation:**\n\`Machines + Sensors + Connectivity + Data + AI = Smart Manufacturing\`\n\n**Evolution:**\n- **1.0**: Steam Power (Mechanization)\n- **2.0**: Electricity (Mass Production)\n- **3.0**: Electronics (Automation)\n- **4.0**: IoT, Cloud, AI, Robotics (Smart Connected Factory)`,
  },

  // 2. IoT Gateway & Protocols (From PDF 2)
  {
    keywords: ["gateway", "iot gateway", "protocol conversion", "modbus", "can bus", "rs485", "mqtt", "zigbee", "lora"],
    shortResponse: `An **IoT Gateway** acts as a hardware/software bridge between field sensors and cloud platforms.\n\n**Flow:**\n\`Sensors & Machines → IoT Gateway → Cloud Dashboard / Mobile App\`\n\n**Key Functions:**\n- **Protocol Conversion**: Converts RS485 / Modbus / CAN Bus into MQTT / HTTPS / WebSockets.\n- **Edge Computing**: FFT vibration analysis & local store-and-forward logging.\n- **Local AI**: Executes .tflite models for instant alerts.`,
  },

  // 3. OEE (Overall Equipment Effectiveness) (From PDF 1)
  {
    keywords: ["oee", "overall equipment effectiveness", "availability", "performance", "quality"],
    shortResponse: `**OEE (Overall Equipment Effectiveness)** measures factory productivity using the formula:\n\n**OEE = Availability × Performance × Quality**\n\n- ⏱️ **Availability**: Actual Run Time vs Planned Time\n- ⚡ **Performance**: Actual Machine Speed vs Target Speed\n- ✅ **Quality**: Good Conforming Parts vs Total Output`,
  },

  // 4. MSME Machine Retrofit (From PDF 1)
  {
    keywords: ["retrofit", "msme", "small factory", "cnc", "legacy", "cost", "investment", "lakh"],
    shortResponse: `**MSME Industry 4.0 Retrofit**:\nSmall factories don't need ₹1–5 Crore machine replacements. With practical investment (**₹2–10 Lakh for 10 CNC machines**), legacy equipment is retrofitted with external CT coils, proximity sensors, modular DAQ, and an IoT gateway to log live production, OEE, downtime, and energy.`,
  },

  // 5. Dual Partition A/B OTA & Security (From PDF 2)
  {
    keywords: ["ota", "firmware", "over the air", "a/b partition", "rollback", "secure boot", "digital signature", "rsa-2048", "ecc"],
    shortResponse: `**Failsafe A/B Partition OTA Update**:\n- **Dual Partition**: Active Partition A & Inactive Partition B.\n- **Safe Flashing**: Firmware downloads to Partition B, verifies SHA-256 hash & RSA-2048/ECC digital signature.\n- **Failsafe Rollback**: If boot fails, the system automatically reverts to Partition A to prevent device bricking.`,
  },

  // 6. AI Model OTA (From PDF 2)
  {
    keywords: ["ai model ota", "model update", "tflite", "bearing accuracy"],
    shortResponse: `**AI Model OTA Update**:\nInstead of reflashing base firmware, upgrade machine learning neural networks (\`bearing_model_v3.tflite\`) remotely over-the-air to boost fault detection accuracy (e.g. from 85% to 95%) without site visits.`,
  },

  // 7. Hardware Specs & Processors (From PDF 2)
  {
    keywords: ["raspberry pi", "cm4", "jetson", "stm32", "esp32", "processor", "hardware", "specifications"],
    shortResponse: `**Prudent Gateway Hardware Stack**:\n- **Processors**: Raspberry Pi CM4, NXP i.MX8, STM32, ESP32, NVIDIA Jetson\n- **Connectivity**: 4G LTE, 5G, LoRaWAN, Wi-Fi, Ethernet\n- **Storage**: 32GB eMMC / SSD\n- **Interfaces**: RS485, Modbus RTU, CAN Bus, 4–20mA, High-Speed ADC`,
  },

  // 8. M2M (Machine-to-Machine) (From PDF 1)
  {
    keywords: ["m2m", "machine to machine", "machine-to-machine"],
    shortResponse: `**Machine-to-Machine (M2M) Communication**:\nMachines communicate directly with each other without human intervention:\n\n\`CNC Machine → Production Controller → Robot → Vision Inspection → Packaging Machine\``,
  },

  // 9. AI Quality Inspection (From PDF 1)
  {
    keywords: ["quality control", "vision", "camera", "surface defect", "dimensional", "missing parts"],
    shortResponse: `**AI Quality Control & Vision Inspection**:\nHigh-speed line cameras and computer vision models detect surface defects, dimensional errors, missing components, incorrect assembly, and packaging errors at full line speed with PASS/REJECT sorting.`,
  },

  // 10. Energy Analytics (From PDF 1)
  {
    keywords: ["energy", "kwh", "power", "utility", "electricity", "compressed air", "steam", "gas"],
    shortResponse: `**Energy Management & Analytics**:\nCT current coils and Modbus energy meters monitor electricity, gas, steam, compressed air, and water per machine and per shift to identify peak demand spikes, off-shift energy leaks, and calculate cost per part.`,
  },

  // 11. Predictive Maintenance & Vibration DAQ (From PDF 1 & 2)
  {
    keywords: ["predictive maintenance", "vibration", "bearing", "fft", "rms", "kurtosis", "anomaly"],
    shortResponse: `**AI Predictive Maintenance**:\nHigh-speed DAQ samples motor vibration (1000+ Hz). Edge AI calculates RMS, Kurtosis, and FFT spectrums to detect bearing wear and misalignments before motor failure occurs.`,
  },

  // 12. Web Development & Engineering
  {
    keywords: ["web", "web development", "website", "react", "frontend", "backend", "dashboard", "html", "css", "javascript", "typescript", "api", "web app"],
    shortResponse: `**Web Development & Cloud Dashboards**:\nWe build fast, responsive web applications, real-time telemetry dashboards, REST APIs, and monitoring UI using **React, TypeScript, Tailwind CSS, and Cloud Platforms** to visualize live IoT machine data and control hardware remotely.\n\nExplore our [Solutions Catalog](/solutions).`,
  },

  // 13. Sensor
  {
    keywords: ["sensor", "sensors", "transducer", "sensing"],
    shortResponse: `A **Sensor** is an electronic device that detects physical parameters (like temperature, vibration, pressure, or current) and converts them into electrical signals.\n\n**Key Industrial Sensors:**\n- 🌡️ **Temperature**: RTD Pt100 / Thermocouples\n- 📳 **Vibration**: Accelerometers & IMUs\n- ⚡ **Current**: CT Coils\n- 🗜️ **Pressure**: 4–20 mA Transducers\n\nSensors send data to our [Modular DAQ](/solutions) & IoT Gateways.`,
  },

  // 14. Company & Overview
  {
    keywords: ["prudent", "company", "about", "who are you", "prusys", "bhopal", "kya hai", "kon hai", "kaha hai"],
    shortResponse: `**Prudent Systems Pvt. Ltd.** is an ISO-certified technology company based in **Bhopal, MP, India**.\n\nWe build **Industry 4.0 Systems, Universal IoT Gateways, Modular DAQ, Edge AI, Web Dashboards, and Railway Electronics** (GPS OMS & Digital Speedometers).\n\n📍 Bhopal, MP | 📞 ${CONTACT.phone} | 📧 ${CONTACT.email}\nLearn more on our [About Page](/about).`,
  },

  // 15. Contact
  {
    keywords: ["contact", "email", "phone", "address", "location", "office", "call", "reach", "baat", "number"],
    shortResponse: `📍 **Office**: ${CONTACT.addressLine}\n📞 **Mobile**: ${CONTACT.phone}\n☎️ **Landline**: ${CONTACT.landline}\n📧 **Email**: ${CONTACT.email}\n🗺️ **Location**: [Open in Google Maps](${CONTACT.mapsUrl})\n\nFill out our enquiry form on the [Contact Page](/contact).`,
  },

  // 16. Microcontroller & Embedded Hardware
  {
    keywords: ["microcontroller", "mcu", "esp32", "stm32", "embedded", "hardware", "raspberry pi", "processor"],
    shortResponse: `A **Microcontroller (MCU)** (like ESP32 or STM32) is a single-chip computer with a CPU, memory, and I/O pins designed to control embedded devices and process sensor data in real-time.`,
  },

  // 17. IoT & IIoT
  {
    keywords: ["iot", "iiot", "internet of things", "industrial iot"],
    shortResponse: `**IoT (Internet of Things)** connects physical devices and sensors to the internet to collect and exchange data.\n\n**Industrial IoT (IIoT)** applies IoT to factory machines and railways to track real-time OEE, power draw, and prevent machine breakdowns.`,
  },

  // 18. DAQ & Data Acquisition
  {
    keywords: ["daq", "data acquisition", "acquisition", "analog input"],
    shortResponse: `**Data Acquisition (DAQ)** samples signals from sensors (vibration, temperature, pressure), conditions raw electrical signals, and converts them into digital parameters for edge AI & cloud analysis.`,
  },

  // 19. Railway Systems
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
  "greetings", "hi", "hello", "hey", "hlo", "namaste", "good morning", "good afternoon", "good evening", "good night"
];

export const SYSTEM_INSTRUCTION = `You are the AI Assistant for Prudent Systems Pvt. Ltd. (Bhopal, MP, India).
You have full knowledge from the official company documentation:

1. Industry 4.0 & Manufacturing:
   - Industry 4.0: Machines + Sensors + Connectivity + Data + AI = Smart Manufacturing
   - Evolution: 1.0 Steam, 2.0 Electricity, 3.0 Electronics, 4.0 IoT/AI/Cloud
   - OEE = Availability × Performance × Quality
   - MSME Retrofit: ₹2–10 Lakh for 10 CNC machines without replacing legacy equipment
   - M2M: CNC -> Controller -> Robot -> Vision -> Packaging
   - Quality Inspection: Camera + Edge AI detecting surface defects & dimensions
   - Energy Analytics: kWh, Gas, Steam, Compressed Air per machine & shift

2. IoT Gateway & OTA Update Architecture:
   - IoT Gateway: Sensors -> Gateway -> Cloud. Converts Modbus/CAN/RS485 to MQTT/HTTPS/WebSockets.
   - Gateway Specs: RPi CM4, ESP32, STM32, NXP i.MX8, NVIDIA Jetson, 4G/5G/LoRa.
   - Dual-Partition A/B OTA: Active A, Inactive B. Flash B, verify SHA-256 & RSA-2048/ECC signature. Failsafe rollback to A if boot fails.
   - AI Model OTA: Remote push of .tflite models without touching base firmware.

3. Rules:
   - Provide SHORT, CRISP, POINT-TO-POINT answers (2-4 lines/bullets).
   - Link to [Solutions](/solutions), [About](/about), or [Contact](/contact) where appropriate.
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
  
  const QUESTION_WORDS = ["what", "how", "why", "who", "where", "explain", "tell", "cost", "price", "sensor", "iot", "ai", "ml", "web", "daq", "ota", "prudent", "kya", "kaise", "kaha", "oee", "gateway", "retrofit"];
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
