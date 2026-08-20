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

const GREETINGS = ["hi", "hello", "hey", "hlo", "namaste", "good morning", "good afternoon", "good evening", "good night", "greetings", "hiii", "helo", "hy"];

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

  // 7. DAQ & Data Acquisition
  {
    keywords: ["daq", "data acquisition", "acquisition", "analog input"],
    shortResponse: `**Data Acquisition (DAQ)** samples signals from sensors (vibration, temperature, pressure), conditions raw electrical signals, and converts them into digital parameters for edge AI & cloud analysis.`,
  },

  // 8. OTA & Remote Firmware Update
  {
    keywords: ["ota", "firmware", "over the air", "a/b partition", "rollback"],
    shortResponse: `**OTA (Over-The-Air)** allows remote software & AI model updates without physical site visits.\n\n**Failsafe A/B Partition**: If an update fails, the system automatically rolls back to the working partition to prevent device bricking.`,
  },

  // 9. Edge AI & Machine Learning
  {
    keywords: ["edge ai", "ai", "ml", "machine learning", "tensorflow", "anomaly"],
    shortResponse: `**Edge AI** runs lightweight AI models (.tflite) directly on local gateways/controllers. It identifies vibration anomalies & bearing faults instantly without waiting for cloud roundtrips.`,
  },

  // 10. Railway Systems
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
  "weather", "light", "toe load", "thermometer", "train", "bogie", "route", "greetings",
  "hi", "hello", "hey", "hlo", "namaste", "good morning", "good afternoon", "good evening", "good night"
];

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
  
  // If query contains question indicators or domain keywords, it's a question, not a simple greeting!
  const QUESTION_WORDS = ["what", "how", "why", "who", "where", "explain", "tell", "cost", "price", "sensor", "iot", "ai", "ml", "web", "daq", "ota", "prudent", "kya", "kaise", "kaha"];
  if (QUESTION_WORDS.some((w) => q.includes(w))) {
    return false;
  }

  const GREETING_REGEX = /^(hi+|hello+|helo+|hey+|hlo+|hlw+|hy+|namaste+|namaskar+|greetings+)(\s.*)?$/i;
  if (GREETING_REGEX.test(q)) return true;
  if (q.startsWith("good morning") || q.startsWith("good afternoon") || q.startsWith("good evening") || q.startsWith("good night")) return true;
  return false;
}

export async function getGeminiBotResponse(userQuery: string, chatHistory: ChatMessage[] = []): Promise<string> {
  // Instant Greeting Check with time-based dynamic greeting
  if (isGreeting(userQuery)) {
    return getTimeBasedGreeting();
  }

  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

  if (apiKey && typeof apiKey === "string" && apiKey.trim().length > 10) {
    try {
      const contents = [
        {
          role: "user",
          parts: [{ text: `User Question: ${userQuery}\n\nProvide a SHORT, CRISP response:` }],
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
