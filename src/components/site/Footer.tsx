import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, ExternalLink, ArrowUpRight, ShieldCheck, Cpu, Radio, Linkedin } from "lucide-react";
import { COMPANY, CONTACT, NAV, SOCIALS } from "@/data/site";
import { Logo } from "./Logo";
import { scrollToTop } from "@/components/site/SmoothScroll";

export function Footer() {
  const TOP_SOLUTIONS = [
    { label: "GPS OMS (Onboard Monitor)", to: "/solutions" },
    { label: "GPS Based OLIVER GHX", to: "/solutions" },
    { label: "GPS Based Speedometer", to: "/solutions" },
    { label: "Modular DAQ & IoT Gateway", to: "/solutions" },
    { label: "Edge AI Predictive System", to: "/solutions" },
    { label: "Water Level & Weather Station", to: "/solutions" },
  ];

  return (
    <footer className="relative border-t border-border bg-background/80 pt-16 pb-24 backdrop-blur-xl sm:px-8">
      {/* Top Gradient Accent Line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5">
        {/* Call-to-Action Banner */}
        <div className="relative mb-14 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-surface-2/90 via-surface/80 to-background p-6 shadow-2xl backdrop-blur-md md:p-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                <Radio className="h-3.5 w-3.5 animate-pulse" />
                Industry 4.0 & Railway Electronics Specialists
              </div>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground md:text-2xl">
                Ready to Upgrade Your Industrial & Railway Assets?
              </h3>
              <p className="mt-1 max-w-2xl text-xs text-muted-foreground md:text-sm">
                Deploy universal IoT gateways, secure A/B OTA, modular DAQ, and Edge AI predictive maintenance.
              </p>
            </div>
            <Link
              to="/contact"
              onClick={() => scrollToTop()}
              className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-primary px-5 py-3 text-xs font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-primary/25"
            >
              Request Consultation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Footer Main Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_1fr_1.1fr]">
          {/* Column 1: Company Branding & Badges */}
          <div className="flex flex-col justify-between">
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
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {COMPANY.description}
              </p>
            </div>

            {/* Certifications Badges */}
            <div className="mt-6 flex flex-wrap gap-2">
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/60 px-2.5 py-1 text-[11px] font-medium text-foreground">
                <ShieldCheck className="h-3.5 w-3.5 text-ok" />
                ISO 9001:2015 Certified
              </div>
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/60 px-2.5 py-1 text-[11px] font-medium text-foreground">
                <Cpu className="h-3.5 w-3.5 text-primary" />
                CIO Tech Outlook 2023
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5">
              {NAV.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => scrollToTop()}
                    className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-all hover:text-primary"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/40 transition-all group-hover:w-2 group-hover:bg-primary" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Solutions */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Solutions Catalog
            </h4>
            <ul className="mt-4 space-y-2.5">
              {TOP_SOLUTIONS.map((sol) => (
                <li key={sol.label}>
                  <Link
                    to={sol.to}
                    onClick={() => scrollToTop()}
                    className="group inline-flex items-center gap-2 text-xs text-muted-foreground transition-all hover:text-primary"
                  >
                    <span className="h-1 w-1 rounded-full bg-primary/40 transition-all group-hover:w-2 group-hover:bg-primary" />
                    {sol.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Office Location */}
          <div className="space-y-4">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-foreground">
              Headquarters Location
            </h4>
            <div className="rounded-xl border border-border bg-surface-2/50 p-4 backdrop-blur-sm">
              <div className="flex items-start gap-2.5 text-xs text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <p className="font-medium text-foreground">{CONTACT.addressLine}</p>
                  <a
                    href={CONTACT.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] font-semibold text-primary hover:underline"
                  >
                    Google Maps Directions
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" />
                <a href={`tel:${CONTACT.phone?.replace(/\s+/g, "")}`} className="hover:text-primary font-mono">
                  {CONTACT.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary font-mono">
                  {CONTACT.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href={SOCIALS[0]?.url || "https://www.linkedin.com/company/prudent-systems-pvt-ltd-/"}
                target="_blank"
                rel="noreferrer noopener"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2/60 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-2/60 text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col gap-4 border-t border-border/80 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
            <span className="hidden h-3 w-px bg-border sm:inline-block" />
            <div className="inline-flex items-center gap-1.5 font-mono text-[11px] text-ok">
              <span className="h-2 w-2 rounded-full bg-ok animate-pulse" />
              All Systems Operational
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link to="/contact" onClick={() => scrollToTop()} className="hover:text-primary">
              Support &amp; Enquiries
            </Link>
            <a href="https://prusys.com/" target="_blank" rel="noreferrer noopener" className="hover:text-primary">
              Official Site
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
