import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Bot, MessageSquare, X, Send, RotateCcw, Sparkles, ChevronDown, User } from "lucide-react";
import { getBotResponse, getGeminiBotResponse, EXACT_GREETING_RESPONSE, QUICK_QUESTIONS, type ChatMessage } from "@/data/chatbot-knowledge";
import { scrollToTop } from "@/components/site/SmoothScroll";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: EXACT_GREETING_RESPONSE,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend ?? input).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: "user",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsTyping(true);

    try {
      const botAnswer = await getGeminiBotResponse(text, messages);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const fallbackAnswer = getBotResponse(text);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: fallbackAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleReset = () => {
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: "bot",
        text: "Conversation reset! How can I assist you with Prudent Systems, Industry 4.0, DAQ, or OTA updates?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      },
    ]);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-5 right-5 z-[80]">
        {!isOpen ? (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            onClick={() => setIsOpen(true)}
            aria-label="Open AI Assistant"
            className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_25px_var(--color-primary)] outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <Bot className="h-7 w-7 transition-transform group-hover:rotate-12" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex h-4 w-4 rounded-full bg-accent"></span>
            </span>
          </motion.button>
        ) : null}
      </div>

      {/* Chat Window Drawer / Modal */}
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            data-lenis-prevent
            className="fixed bottom-4 right-4 z-[90] flex h-[85vh] max-h-[620px] w-[92vw] max-w-[420px] flex-col overflow-hidden rounded-2xl border border-primary/30 bg-background/95 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:bottom-6 sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border/80 bg-surface-2/70 px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/30">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold flex items-center gap-1.5">
                    Prudent AI Assistant
                    <Sparkles className="h-3.5 w-3.5 text-accent animate-pulse" />
                  </h3>
                  <p className="font-mono text-[10px] uppercase tracking-wider text-ok">
                    ● Knowledge Engine Online
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={handleReset}
                  title="Reset conversation"
                  aria-label="Reset chat"
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close assistant"
                  className="rounded-md p-1.5 text-muted-foreground hover:bg-surface hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Quick Questions Chips */}
            <div className="border-b border-border/50 bg-surface/30 px-3 py-2">
              <p className="mb-1.5 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
                Suggested Questions:
              </p>
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {QUICK_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => handleSend(q)}
                    className="shrink-0 rounded-full border border-border bg-surface-2/80 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Message Stream */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm scrollbar-thin">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${
                    msg.sender === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                      msg.sender === "user"
                        ? "bg-accent/20 text-accent border border-accent/40"
                        : "bg-primary/20 text-primary border border-primary/40"
                    }`}
                  >
                    {msg.sender === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                  </div>

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-primary text-primary-foreground rounded-tr-none font-medium"
                        : "bg-surface-2/90 border border-border text-foreground rounded-tl-none"
                    }`}
                  >
                    <MarkdownRenderer content={msg.text} />
                    <p
                      className={`mt-1 font-mono text-[9px] text-right ${
                        msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {msg.timestamp}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping ? (
                <div className="flex items-center gap-2.5 text-muted-foreground">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/40">
                    <Bot className="h-3.5 w-3.5" />
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-surface-2 border border-border px-3 py-1.5">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0.15s]"></span>
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-primary [animation-delay:0.3s]"></span>
                  </div>
                </div>
              ) : null}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="border-t border-border bg-surface-2/60 p-3"
            >
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Industry 4.0, DAQ, OTA, etc..."
                  className="w-full rounded-xl border border-input bg-surface/90 py-2.5 pl-3.5 pr-10 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  aria-label="Send message"
                  className="absolute right-1.5 flex h-7 w-7 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-opacity disabled:opacity-40"
                >
                  <Send className="h-3.5 w-3.5" />
                </button>
              </div>
            </form>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

/**
 * Lightweight Markdown Parser for Bot Responses
 */
function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");

  return (
    <div className="space-y-1.5">
      {lines.map((line, index) => {
        if (!line.trim()) return <div key={index} className="h-1" />;

        // Header ###
        if (line.startsWith("### ")) {
          return (
            <h4 key={index} className="font-display font-semibold text-primary mt-2 text-xs">
              {line.replace("### ", "")}
            </h4>
          );
        }

        // Bullet point -
        if (line.startsWith("- ")) {
          return (
            <li key={index} className="ml-3 list-disc pl-1 text-muted-foreground">
              {parseText(line.replace("- ", ""))}
            </li>
          );
        }

        return <p key={index}>{parseText(line)}</p>;
      })}
    </div>
  );
}

function parseText(text: string) {
  // Replace links [label](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIdx = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(parseBold(text.substring(lastIdx, match.index)));
    }
    const label = match[1];
    const url = match[2];
    const isInternal = url.startsWith("/");

    parts.push(
      isInternal ? (
        <Link
          key={match.index}
          to={url}
          onClick={() => {
            scrollToTop();
          }}
          className="text-primary font-semibold underline hover:opacity-80 active:opacity-60"
        >
          {label}
        </Link>
      ) : (
        <a key={match.index} href={url} target="_blank" rel="noopener noreferrer" className="text-primary font-medium underline hover:opacity-80">
          {label}
        </a>
      )
    );
    lastIdx = match.index + match[0].length;
  }

  if (lastIdx < text.length) {
    parts.push(parseBold(text.substring(lastIdx)));
  }

  return parts;
}

function parseBold(text: string) {
  const boldRegex = /\*\*([^*]+)\*\*/g;
  const parts = [];
  let lastIdx = 0;
  let match;

  while ((match = boldRegex.exec(text)) !== null) {
    if (match.index > lastIdx) {
      parts.push(text.substring(lastIdx, match.index));
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-foreground">
        {match[1]}
      </strong>
    );
    lastIdx = match.index + match[0].length;
  }

  if (lastIdx < text.length) {
    parts.push(text.substring(lastIdx));
  }

  return parts;
}
