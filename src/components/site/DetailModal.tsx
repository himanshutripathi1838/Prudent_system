import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import { X } from "lucide-react";

/**
 * Shared overlay dialog: locks page scroll, scrolls internally (Lenis-safe),
 * closes on backdrop click / Escape.
 */
export function DetailModal({
  open,
  onClose,
  label,
  header,
  children,
}: {
  open: boolean;
  onClose: () => void;
  label: string;
  header: React.ReactNode;
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm sm:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={label}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28 }}
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
            className="glass max-h-[85vh] w-full max-w-3xl overflow-y-auto overscroll-contain rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>{header}</div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close details"
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border transition-colors hover:border-primary/60 hover:text-primary"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

/**
 * Card wrapper: openable by click/keyboard, with a 3D tilt that follows the
 * pointer plus a light glare that tracks the cursor.
 */
export function OpenableCard({ onOpen, children }: { onOpen: () => void; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useSpring(useMotionValue(0), { stiffness: 200, damping: 20, mass: 0.6 });
  const ry = useSpring(useMotionValue(0), { stiffness: 200, damping: 20, mass: 0.6 });
  const gx = useMotionValue(50);
  const gy = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(340px circle at ${gx}% ${gy}%, var(--color-primary), transparent 60%)`;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * 14);
    rx.set((0.5 - py) * 14);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const onTouch = (e: React.TouchEvent) => {
    const el = ref.current;
    if (!el || !e.touches[0]) return;
    const r = el.getBoundingClientRect();
    const px = (e.touches[0].clientX - r.left) / r.width;
    const py = (e.touches[0].clientY - r.top) / r.height;
    ry.set((px - 0.5) * 12);
    rx.set((0.5 - py) * 12);
    gx.set(px * 100);
    gy.set(py * 100);
  };

  const reset = () => { rx.set(0); ry.set(0); gx.set(50); gy.set(50); };

  return (
    <div className="h-full [perspective:1200px]">
      <motion.div
        ref={ref}
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onMouseMove={onMove}
        onMouseLeave={reset}
        onTouchStart={onTouch}
        onTouchMove={onTouch}
        onTouchEnd={reset}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); }
        }}
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        whileHover={{ y: -8, scale: 1.015 }}
        whileTap={{ scale: 0.97, rotateX: 3 }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
        className="group relative h-full cursor-pointer rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.985]"
      >
        <motion.span
          aria-hidden
          style={{ backgroundImage: glare }}
          className="pointer-events-none absolute inset-0 z-10 rounded-xl opacity-0 mix-blend-soft-light transition-opacity duration-300 group-hover:opacity-40 group-active:opacity-50"
        />
        <div className="h-full [transform:translateZ(30px)]">{children}</div>
      </motion.div>
    </div>
  );
}
