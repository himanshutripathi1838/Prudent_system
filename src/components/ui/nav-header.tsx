import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { scrollToTop } from "@/components/site/SmoothScroll";

type Pos = { left: number; width: number; opacity: number };

export function NavHeader({ items }: { items: readonly { label: string; to: string }[] }) {
  return (
    <ul className="relative mx-auto flex w-fit items-center rounded-full border border-border bg-surface/80 p-1 backdrop-blur-md">
      {items.map((item) => (
        <Tab key={item.to} to={item.to}>
          {item.label}
        </Tab>
      ))}
    </ul>
  );
}

function Tab({ children, to }: { children: React.ReactNode; to: string }) {
  return (
    <li className="relative block">
      <Link
        to={to}
        onClick={() => {
          scrollToTop();
        }}
        activeOptions={{ exact: to === "/" }}
        className="relative block cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 md:px-4 md:py-2"
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <motion.span
                layoutId="activeNavPill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 z-0 rounded-full border border-primary/40 bg-primary/20 shadow-[0_0_12px_rgba(0,217,255,0.25)]"
              />
            )}
            <span
              className={`relative z-10 inline-flex items-center gap-1.5 ${
                isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isActive ? (
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse shrink-0" aria-hidden />
              ) : null}
              {children}
            </span>
          </>
        )}
      </Link>
    </li>
  );
}

export default NavHeader;
