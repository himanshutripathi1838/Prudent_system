import { AnimatePresence, motion } from "motion/react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { scrollToTop } from "./SmoothScroll";

interface EyeContextType {
  openSolutionWithEyeTransition: (slug: string) => void;
}

const EyeContext = createContext<EyeContextType>({
  openSolutionWithEyeTransition: () => {},
});

export function useEyeTransition() {
  return useContext(EyeContext);
}

export function EyeTransitionProvider({ children }: { children: React.ReactNode }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const navigate = useNavigate();

  const openSolutionWithEyeTransition = (slug: string) => {
    setActiveSlug(slug);
    // After 650ms of blinking eyes GIF animation, navigate directly to /solutions
    setTimeout(() => {
      scrollToTop();
      navigate({ to: "/solutions", search: { open: slug } });
      setTimeout(() => {
        setActiveSlug(null);
      }, 350);
    }, 650);
  };

  return (
    <EyeContext.Provider value={{ openSolutionWithEyeTransition }}>
      {children}
      <AnimatePresence>
        {activeSlug ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background/95 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.28 }}
              className="relative flex flex-col items-center justify-center p-6 text-center"
            >
              {/* Glowing aura behind eyes */}
              <div className="absolute h-36 w-36 rounded-full bg-primary/25 blur-2xl animate-pulse" />

              {/* Animated Blinking Eyes GIF */}
              <img
                src="/eyes-icon.gif"
                alt="Opening Solution..."
                className="relative h-24 w-auto object-contain animate-eyes-blink drop-shadow-[0_0_20px_rgba(110,231,183,0.85)]"
              />

              <p className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary">
                Opening Solution...
              </p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </EyeContext.Provider>
  );
}
