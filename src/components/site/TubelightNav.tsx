import { Link, useRouterState } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Home, Building2, Layers, Cpu, Briefcase, Mail } from "lucide-react";

const ITEMS = [
  { label: "Home", to: "/", Icon: Home },
  { label: "About", to: "/about", Icon: Building2 },
  { label: "Solutions", to: "/solutions", Icon: Layers },
  { label: "Expertise", to: "/expertise", Icon: Cpu },
  { label: "Career", to: "/career", Icon: Briefcase },
  { label: "Contact", to: "/contact", Icon: Mail },
] as const;

export function TubelightNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <nav
      aria-label="Section navigation"
      className="pointer-events-none fixed inset-x-0 bottom-4 z-40 flex justify-center px-4"
    >
      <ul className="glass pointer-events-auto flex items-center gap-0.5 rounded-full p-1.5 shadow-[0_20px_60px_-30px_var(--color-primary)]">
        {ITEMS.map(({ label, to, Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <li key={to} className="relative">
              <Link
                to={to}
                aria-label={label}
                aria-current={active ? "page" : undefined}
                className="relative flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:px-4"
              >
                {active ? (
                  <motion.span
                    layoutId="tubelight"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-primary/15"
                  >
                    <span className="absolute -top-1.5 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary shadow-[0_0_18px_4px_var(--color-primary)]" />
                  </motion.span>
                ) : null}
                <Icon className={`relative h-4 w-4 ${active ? "text-primary" : ""}`} aria-hidden />
                <span className={`relative hidden sm:inline ${active ? "text-foreground" : ""}`}>{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
