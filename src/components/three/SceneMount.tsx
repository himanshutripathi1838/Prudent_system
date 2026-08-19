import { ClientOnly } from "@tanstack/react-router";
import { Suspense, lazy, useEffect, useState } from "react";

const TechScene = lazy(() => import("./TechScene"));

export function SceneMount({ className }: { className?: string }) {
  const [enabled, setEnabled] = useState(false);
  const [simplified, setSimplified] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    setSimplified(small);
    if (!reduced) setEnabled(true);
  }, []);

  return (
    <div className={className} aria-hidden>
      <ClientOnly fallback={null}>
        {enabled ? (
          <Suspense fallback={null}>
            <TechScene simplified={simplified} />
          </Suspense>
        ) : null}
      </ClientOnly>
    </div>
  );
}
