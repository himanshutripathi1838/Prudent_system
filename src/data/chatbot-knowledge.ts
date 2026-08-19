import { COMPANY, CONTACT } from "@/data/site";

export interface ChatMessage {
  id: string;
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

export const QUICK_QUESTIONS = [
  "What is a sensor?",
  "What is Prudent Systems?",
  "What is Web Development for IoT?",
  "What is Edge AI?",
  "What is DAQ?",
  "What is Dual Partition A/B OTA?",
];

const GREETINGS = ["hi", "hello", "hey", "hlo", "namaste", "good morning", "good afternoon", "good evening", "greetings", "hiii", "helo", "hy"];

interface TopicAnswer {
  keywords: string[];
  shortResponse: string;
}

const TOPICS: TopicAnswer[] = [
  // 1. Web Development & Engineering
  {
    keywords: ["web", "web development", "website", "react", "frontend", "backend", "dashboard", "html", "css", "javascript", "typescript", "api", "web app"],
    shortResponse: `**Web Development & Cloud Dashboards**:\nWe build fast, responsive web applications, real-time telemetry dashboards, REST APIs, and monitoring UI using **React, TypeScript, Tailwind CSS, and Cloud Platforms** to visualize live IoT machine data and control hardware remotely.\n\nExplore our [Solutions Catalog](/solutions).`,
  },

  // 2. Sensor
  {
    keywords: ["sensor", "sensors", "transducer", "sensing"],
    shortResponse: `A **Sensor** is an electronic device that detects physical parameters (like temperature, vibration, pressure, or current) and converts them into electrical signals.\n\n**Key Industrial Sensors:**\n- 🌡️ **Temperature**: RTD Pt100 / Thermocouples\n- 📳 **Vibration**: Accelerometers & IMUs\n- ⚡ **Current**: CT Coils\n- 🗜️ **Pressure**: 4–20 mA Transducers\n\nSensors send data to our [Modular DAQ](/solutions) & IoT Gateways.`,
  },

  // 3. Company & Overview
  {
    keywords: ["prudent", "company", "about", "who are you", "prusys", "bhopal", "kya hai", "kon hai", "kaha hai"],
    shortResponse: `**Prudent Systems Pvt. Ltd.** is an ISO-certified technology company based in **Bhopal, MP, India**.\n\nWe build **Industry 4.0 Systems, Universal IoT Gateways, Modular DAQ, Edge AI, Web Dashboards, and Railway Electronics** (GPS OMS & Digital Speedometers).\n\n📍 Bhopal, MP | 📞 ${CONTACT.phone} | 📧 ${CONTACT.email}\nLearn more on our [About Page](/about).`,
  },

  // 4. Contact
  {
    keywords: ["contact", "email", "phone", "address", "location", "office", "call", "reach", "baat", "number"],
    shortResponse: `📍 **Office**: ${CONTACT.addressLine}\n📞 **Mobile**: ${CONTACT.phone}\n☎️ **Landline**: ${CONTACT.landline}\n📧 **Email**: ${CONTACT.email}\n🗺️ **Location**: [Open in Google Maps](${CONTACT.mapsUrl})\n\nFill out our enquiry form on the [Contact Page](/contact).`,
  },

  // 5. Microcontroller & Embedded Hardware
  {
    keywords: ["microcontroller", "mcu", "esp32", "stm32", "embedded", "hardware", "raspberry pi", "processor"],
    shortResponse: `A **Microcontroller (MCU)** (like ESP32 or STM32) is a single-chip computer with a CPU, memory, and I/O pins designed to control embedded devices and process sensor data in real-time.`,
  },

  // 6. IoT & IIoT
  {
    keywords: ["iot", "iiot", "internet of things", "industrial iot"],
    shortResponse: `**IoT (Internet of Things)** connects physical devices and sensors to the internet to collect and exchange data.\n\n**Industrial IoT (IIoT)** applies IoT to factory machines and railways to track real-time OEE, power draw, and prevent machine breakdowns.`,
  },

  // 7. AI & Machine Learning
  {
    keywords: ["ai", "ml", "aiml", "artificial intelligence", "machine learning", "deep learning", "neural network", "computer vision"],
    shortResponse: `**Artificial Intelligence (AI)** & **Machine Learning (ML)** train algorithms on sensor time-series data to detect abnormal patterns and predict machine failures before they happen.\n\nExplore our [AI Predictive Maintenance Solution](/solutions).`,
  },

  // 8. Edge AI
  {
    keywords: ["edge ai", "edge computing", "edge vs cloud"],
    shortResponse: `**Edge AI** runs machine learning models (like TensorFlow Lite) directly on local IoT Gateways or microcontrollers instead of sending raw data to the cloud, giving instant (< 5ms) offline anomaly alerts.`,
  },

  // 9. DAQ (Data Acquisition)
  {
    keywords: ["daq", "data acquisition", "signal", "adc", "4-20ma"],
    shortResponse: `A **Data Acquisition (DAQ)** system collects physical signals (temperature, vibration, pressure, current) from sensors and converts them into digital data for IoT Gateways and dashboards.\n\nLearn more in [Solutions](/solutions).`,
  },

  // 10. Industry 4.0 & MSME Retrofit
  {
    keywords: ["industry 4.0", "smart manufacturing", "msme", "retrofit", "cost", "price", "kitne ka"],
    shortResponse: `**Industry 4.0** connects factory machines with sensors and AI to automate monitoring and improve production.\n\n💰 **MSME Retrofit Cost**: **₹2–10 Lakh** for ~10 machines without replacing existing equipment!\nCheck out [Industry 4.0 Retrofit](/solutions).`,
  },

  // 11. OTA & Dual Partition A/B
  {
    keywords: ["ota", "firmware", "dual partition", "a/b", "rollback", "update"],
    shortResponse: `**OTA (Over-The-Air)** allows remote firmware updates on deployed field devices.\n\n🛡️ **Dual-Partition (A/B)** memory split writes new code to Partition B while A runs. If update fails, it automatically rolls back to A so devices never brick!`,
  },

  // 12. Railway Products
  {
    keywords: ["railway", "gps oms", "speedometer", "locomotive", "train"],
    shortResponse: `We engineer rugged **Railway Electronics**:\n1. 🛰️ **GPS OMS**: GNSS track & fleet position monitoring.\n2. 📟 **Digital Speedometer**: Cab speed display & data logging.\n\n🏆 Awarded *10 Most Promising Railway Providers 2023* by CIO Tech Outlook.`,
  },

  // 13. Industrial Protocols
  {
    keywords: ["mqtt", "modbus", "rs485", "can bus", "lora", "protocol", "opc-ua"],
    shortResponse: `**Industrial Protocols:**\n- **Modbus RTU / RS485**: Serial standard for PLCs & energy meters.\n- **CAN Bus**: High-reliability automotive & railway bus.\n- **MQTT**: Lightweight telemetry protocol for IoT cloud streaming.\n- **LoRaWAN**: Long-range, low-power wireless.`,
  },
];

// Domains we answer: IoT, AI/ML, Web Development, Prudent Systems
const ALLOWED_DOMAIN_KEYWORDS = [
  "iot", "iiot", "sensor", "sensors", "hardware", "microcontroller", "mcu", "esp32", "stm32", "embedded",
  "gateway", "daq", "signal", "ota", "firmware", "protocol", "modbus", "mqtt", "rs485", "can", "lora",
  "ai", "ml", "aiml", "artificial intelligence", "machine learning", "deep learning", "edge ai", "predictive", "vibration", "fft",
  "web", "website", "development", "react", "frontend", "backend", "dashboard", "api", "html", "css", "javascript", "typescript",
  "prudent", "company", "about", "bhopal", "contact", "phone", "email", "address", "railway", "industry 4.0", "oee", "msme", "retrofit"
];

const SYSTEM_INSTRUCTION = `You are Prudent AI, an AI Assistant for Prudent Systems Pvt. Ltd.
STRICT DOMAIN SCOPE RULES:
1. You MUST ONLY answer questions related to:
   - IoT (Internet of Things, sensors, protocols, gateways, DAQ, OTA, embedded hardware)
   - AI/ML (Artificial Intelligence, Machine Learning, Edge AI, Predictive Maintenance, Computer Vision)
   - Web Development (Web apps, dashboards, APIs, React, frontend, backend, cloud systems)
   - Prudent Systems company, products, and contact info.
2. If a question is OUTSIDE these domains (e.g. movies, cooking, sports, general politics, trivia), reply politely with:
   "Sorry! 🙏 I am trained to assist only with IoT, AI/ML, Web Development, and Prudent Systems solutions. Please ask a question related to these domains!"
3. If the user greets with "Hi", "Hello", "Hey", "Hlo", "Namaste", reply EXACTLY with:
   "Hi! Hello! 👋 Welcome to Prudent Systems!\nHow can I help you today? Ask me any question about IoT, AI/ML, DAQ, OTA, or our solutions!"
4. Keep your domain answers SHORT, CRISP, and ACCURATE (2-4 concise lines/bullet points).`;

export function isGreeting(userQuery: string): boolean {
  const q = userQuery.trim().toLowerCase().replace(/[^a-z0-9\s]/g, "");
  if (!q) return true;
  
  // If query contains question indicators or domain keywords, it's a question, not a simple greeting!
  const QUESTION_WORDS = ["what", "how", "why", "who", "where", "explain", "tell", "cost", "price", "sensor", "iot", "ai", "ml", "web", "daq", "ota", "prudent", "kya", "kaise", "kaha"];
  if (QUESTION_WORDS.some((w) => q.includes(w))) {
    return false;
  }

  const GREETING_REGEX = /^(hi+|hello+|helo+|hey+|hlo+|hlw+|hy+|namaste+|namaskar+|greetings+)(\s.*)?$/i;
  if (GREETING_REGEX.test(q)) return true;
  if (q.startsWith("good morning") || q.startsWith("good afternoon") || q.startsWith("good evening")) return true;
  return false;
}

export const EXACT_GREETING_RESPONSE =
  "Hi! Hello! 👋 Welcome to Prudent Systems! How can I help you today? Ask me any question about IoT, AI/ML, DAQ, OTA, or our solutions!";

export async function getGeminiBotResponse(userQuery: string, chatHistory: ChatMessage[] = []): Promise<string> {
  // Instant Greeting Check with exact requested text
  if (isGreeting(userQuery)) {
    return EXACT_GREETING_RESPONSE;
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (apiKey && typeof apiKey === "string" && apiKey.trim().length > 10) {
    try {
      const contents = [
        {
          role: "user",
          parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser Question: ${userQuery}\n\nProvide a SHORT, CRISP response according to the domain rules:` }],
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

  // 1. Exact Friendly Greeting Check
  if (isGreeting(userQuery)) {
    return EXACT_GREETING_RESPONSE;
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
