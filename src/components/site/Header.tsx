import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";
import { Logo } from "./Logo";
import { NavHeader } from "@/components/ui/nav-header";
import { scrollToTop } from "@/components/site/SmoothScroll";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border" : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 md:h-20">
        <Link
          to="/"
          onClick={() => {
            scrollToTop();
            window.dispatchEvent(new Event("trigger-ps-loader"));
          }}
          className="shrink-0"
          aria-label={`Prudent Systems — home`}
        >
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <NavHeader items={NAV} />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            onClick={() => scrollToTop()}
            className="hidden items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Talk to Our Experts
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </div>

      {open ? (
        <nav aria-label="Mobile" className="glass border-t border-border lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-3 sm:px-8">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => {
                    scrollToTop();
                    setOpen(false);
                  }}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{
                    className: "text-primary font-bold bg-primary/10 border-l-2 border-primary pl-3 rounded-r-md",
                  }}
                  inactiveProps={{
                    className: "text-muted-foreground hover:text-foreground",
                  }}
                  className="block border-b border-border/60 py-3 text-base transition-all"
                >
                  {({ isActive }) => (
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {isActive ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2 py-0.5 font-mono text-[10px] uppercase text-primary border border-primary/30">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary"></span> Active
                        </span>
                      ) : null}
                    </div>
                  )}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                to="/contact"
                onClick={() => {
                  scrollToTop();
                  setOpen(false);
                }}
                className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground"
              >
                Talk to Our Experts
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
