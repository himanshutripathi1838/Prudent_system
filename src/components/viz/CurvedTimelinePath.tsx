import { useEffect, useRef, useState } from "react";
import { motionValue, useMotionValueEvent, useScroll, useSpring } from "motion/react";

/**
 * Curved timeline rail with a little car that drives along it.
 * Progress follows scroll, and while the pointer is over the timeline the car
 * follows the cursor back and forth.
 */
export function CurvedTimelinePath({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const pathRef = useRef<SVGPathElement>(null);
  const carRef = useRef<SVGGElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  });
  const raw = useRef(motionValue(0)).current;
  const t = useSpring(raw, { stiffness: 90, damping: 20, mass: 0.5 });
  const hovering = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setSize({ w: el.clientWidth, h: el.clientHeight }));
    ro.observe(el);
    setSize({ w: el.clientWidth, h: el.clientHeight });

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      hovering.current = true;
      raw.set(Math.min(1, Math.max(0, (e.clientY - r.top) / r.height)));
    };
    const onLeave = () => { hovering.current = false; };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      ro.disconnect();
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [containerRef, raw]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!hovering.current) raw.set(Math.min(1, Math.max(0, (v - 0.15) / 0.6)));
  });

  useMotionValueEvent(t, "change", (v) => {
    const path = pathRef.current;
    const car = carRef.current;
    if (!path || !car) return;
    const len = path.getTotalLength();
    if (!len) return;
    const p = path.getPointAtLength(len * Math.min(1, Math.max(0, v)));
    const p2 = path.getPointAtLength(Math.min(len, len * Math.min(1, Math.max(0, v)) + 2));
    const angle = (Math.atan2(p2.y - p.y, p2.x - p.x) * 180) / Math.PI - 90;
    car.setAttribute("transform", `translate(${p.x} ${p.y}) rotate(${angle})`);
  });

  const { w, h } = size;
  const isMobile = w < 768;
  const cx = isMobile ? 7 : w / 2;
  const amp = isMobile ? 7 : Math.min(44, w * 0.05);
  const waves = Math.max(2, Math.round(h / 320));
  const d = (() => {
    if (!w || !h) return "";
    let path = `M ${cx} 0`;
    const seg = h / waves;
    for (let i = 0; i < waves; i++) {
      const dir = i % 2 === 0 ? 1 : -1;
      const y0 = i * seg;
      path += ` C ${cx + dir * amp} ${y0 + seg * 0.3}, ${cx + dir * amp} ${y0 + seg * 0.7}, ${cx} ${y0 + seg}`;
    }
    return path;
  })();

  if (!w || !h) return null;

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-20 block h-full w-full"
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
    >
      <defs>
        <linearGradient id="ctp-line" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.8" />
          <stop offset="70%" stopColor="var(--color-primary)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--color-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path ref={pathRef} d={d} fill="none" stroke="url(#ctp-line)" strokeWidth="2" strokeLinecap="round" />
      <path d={d} fill="none" stroke="var(--color-primary)" strokeOpacity="0.25" strokeWidth="6" strokeDasharray="2 14" strokeLinecap="round" />
      <g ref={carRef}>
        <g transform={isMobile ? "scale(0.78)" : undefined}>
          <circle r="16" fill="var(--color-primary)" opacity="0.16" />
          <g transform="translate(-11 -8)">
            <rect x="0" y="4" width="22" height="9" rx="3" fill="var(--color-primary)" />
            <path d="M4 4 L7 0 L15 0 L18 4 Z" fill="var(--color-primary)" opacity="0.85" />
            <circle cx="6" cy="14" r="2.6" fill="var(--color-foreground)" />
            <circle cx="16" cy="14" r="2.6" fill="var(--color-foreground)" />
          </g>
        </g>
      </g>
    </svg>
  );
}
