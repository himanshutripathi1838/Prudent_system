import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { COMPANY, CONTACT, NAV, SOCIALS } from "@/data/site";
import { Logo } from "./Logo";
import { scrollToTop } from "@/components/site/SmoothScroll";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/40 px-5 pt-16 pb-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Link
            to="/"
            onClick={() => {
              scrollToTop();
              window.dispatchEvent(new Event("trigger-ps-loader"));
            }}
            className="inline-block"
          >
            <Logo />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">{COMPANY.description}</p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            {NAV.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  onClick={() => scrollToTop()}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
              <span>{CONTACT.addressLine}</span>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => scrollToTop()}
                className="inline-flex items-center gap-1.5 text-primary transition-colors hover:underline"
              >
                Get in touch
              </Link>
            </li>
          </ul>
          {SOCIALS.length > 0 ? (
            <ul className="mt-4 flex gap-3">
              {SOCIALS.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noreferrer noopener" className="text-sm text-muted-foreground hover:text-primary">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>

      <div className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
        <div className="flex gap-5">
          <Link to="/privacy" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-primary">Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
