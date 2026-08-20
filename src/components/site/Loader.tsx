import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NODE_LABELS = ["IoT", "AI", "ML", "API", "5G", "NN", "CV", "OTA"];
const DURATION_MS = 3800;

export function Loader() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const runLoader = (durationMs = DURATION_MS) => {
    setVisible(true);
    setProgress(0);
    document.body.style.overflow = "hidden";
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const pct = Math.min(100, Math.round(((t - start) / durationMs) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setVisible(false);
        document.body.style.overflow = "";
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Listen for Logo click event to trigger loader
    const handleTrigger = () => {
      runLoader(1800);
    };
    window.addEventListener("trigger-ps-loader", handleTrigger);

    // Initial load & hard refresh animation (only on true page load)
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduced && !(window as any).__ps_loader_executed) {
      (window as any).__ps_loader_executed = true;
      runLoader(2200);
    }

    return () => {
      window.removeEventListener("trigger-ps-loader", handleTrigger);
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="loader"
          role="status"
          aria-live="polite"
          aria-label="Loading Prudent Systems"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-background"
        >
          <div className="grid-tech absolute inset-0 opacity-40" aria-hidden />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[60vmax] w-[60vmax] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 60%)", opacity: 0.16 }}
          />
          <motion.div
            aria-hidden
            className="absolute inset-x-0 h-px bg-primary/50"
            initial={{ top: "0%" }}
            animate={{ top: ["0%", "100%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative h-64 w-64 md:h-96 md:w-96">
            <svg viewBox="0 0 200 200" className="absolute inset-0 h-full w-full text-primary" aria-hidden>
              <circle cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.5" />
              <motion.g
                style={{ originX: "100px", originY: "100px" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <ellipse cx="100" cy="100" rx="78" ry="30" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
                <ellipse cx="100" cy="100" rx="30" ry="78" fill="none" stroke="currentColor" strokeWidth="0.7" opacity="0.45" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.7" strokeDasharray="3 7" opacity="0.6" />
              </motion.g>
              <motion.g
                style={{ originX: "100px", originY: "100px" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {NODE_LABELS.map((label, i) => {
                  const a = (i / NODE_LABELS.length) * Math.PI * 2;
                  const x = 100 + Math.cos(a) * 84;
                  const y = 100 + Math.sin(a) * 84;
                  return (
                    <g key={label}>
                      <line x1="100" y1="100" x2={x} y2={y} stroke="currentColor" strokeWidth="0.4" opacity="0.25" />
                      <circle cx={x} cy={y} r="9" fill="var(--color-background)" stroke="currentColor" strokeWidth="0.8" />
                      <text x={x} y={y + 2.6} textAnchor="middle" fontSize="6.5" fill="currentColor" fontFamily="monospace">
                        {label}
                      </text>
                    </g>
                  );
                })}
              </motion.g>
              <motion.circle
                cx="100" cy="100" r="46" fill="none" stroke="currentColor" strokeWidth="2"
                strokeDasharray="290" strokeLinecap="round"
                animate={{ strokeDashoffset: [290, 0] }}
                transition={{ duration: DURATION_MS / 1000, ease: "easeInOut" }}
                transform="rotate(-90 100 100)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/40 bg-background/90 p-2 shadow-lg backdrop-blur-md md:h-28 md:w-28"
                animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.85, 1, 0.85] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/prudent-logo.png"
                  alt="Prudent Systems Logo"
                  className="h-full w-full object-contain filter drop-shadow-[0_0_12px_rgba(var(--primary-rgb),0.5)]"
                />
              </motion.div>
            </div>
          </div>

          <div className="relative mt-10 flex flex-col items-center gap-4">
            <Logo />
            <div className="h-px w-64 overflow-hidden bg-border md:w-80">
              <motion.div className="h-full bg-primary" style={{ width: `${progress}%` }} />
            </div>
            <p className="font-mono text-xs tracking-[0.3em] text-primary md:text-sm">
              {String(progress).padStart(3, "0")}%
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
