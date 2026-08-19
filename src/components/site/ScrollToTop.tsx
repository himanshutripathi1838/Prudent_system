import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      type="button"
      aria-label="Scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="glass fixed bottom-24 right-4 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors hover:border-primary/50 sm:bottom-6 sm:right-6"
    >
      <ArrowUp className="h-5 w-5" aria-hidden />
    </button>
  );
}
