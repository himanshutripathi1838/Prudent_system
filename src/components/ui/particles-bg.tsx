"use client";

import { useEffect, useCallback } from "react";

export default function ParticlesComponent() {
  const initParticles = useCallback((isDark: boolean) => {
    // cleanup old canvas
    const oldCanvas = document.querySelector("#particles-js canvas");
    if (oldCanvas) oldCanvas.remove();

    // @ts-ignore
    if (window.pJSDom?.length > 0) {
      // @ts-ignore
      window.pJSDom.forEach((p: any) => p.pJS?.fn?.vendors?.destroypJS());
      // @ts-ignore
      window.pJSDom = [];
    }

    const colors = isDark
      ? {
          particles: "#00f5ff",
          lines: "#00d9ff",
          accent: "#0096c7",
        }
      : {
          particles: "#0277bd",
          lines: "#0288d1",
          accent: "#039be5",
        };

    // @ts-ignore
    if (typeof window !== "undefined" && window.particlesJS) {
      // @ts-ignore
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: colors.particles },
          shape: { type: "circle", stroke: { width: 0.5, color: colors.accent } },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.2 },
          },
          size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 1 },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: colors.lines,
            opacity: 0.25,
            width: 1,
          },
          move: { enable: true, speed: 1.8, random: true, out_mode: "bounce" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.6 } },
            push: { particles_nb: 3 },
            repulse: { distance: 180, duration: 0.4 },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let isMounted = true;
    const existingScript = document.querySelector(
      'script[src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"]'
    );

    const onScriptLoad = () => {
      if (!isMounted) return;
      const html = document.documentElement;
      const detectDark = () =>
        html.classList.contains("dark") ||
        html.getAttribute("data-theme") === "dark" ||
        true; // default to dark in our dark-themed app

      initParticles(detectDark());

      const observer = new MutationObserver(() => {
        if (isMounted) initParticles(detectDark());
      });
      observer.observe(html, {
        attributes: true,
        attributeFilter: ["class", "data-theme"],
      });
    };

    if (existingScript) {
      onScriptLoad();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = onScriptLoad;
    }

    return () => {
      isMounted = false;
    };
  }, [initParticles]);

  return (
    <div
      id="particles-js"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen overflow-hidden transition-colors duration-500 bg-background/40"
    />
  );
}
