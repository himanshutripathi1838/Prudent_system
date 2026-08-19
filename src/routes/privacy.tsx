import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { COMPANY, CONTACT } from "@/data/site";

const TITLE = "Privacy Policy — Prudent Systems";
const DESCRIPTION = "How Prudent Systems handles information submitted through this website.";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <Section className="pt-14">
      <SectionHeading eyebrow="Legal" title="Privacy Policy" />
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>
          This policy explains how {COMPANY.name} handles information submitted through this website.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Information we collect</h2>
        <p>
          We collect only the information you choose to submit through the contact and career forms: your name,
          email address, phone number, message content and, for applications, the documents you attach.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">How it is used</h2>
        <p>
          Submitted information is used solely to respond to your enquiry or to assess your application. It is not
          sold, and it is not shared with third parties except where required to respond to your request.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Retention</h2>
        <p>
          Enquiries and applications are retained only as long as needed for the purpose they were submitted for,
          or as required by applicable law.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Your choices</h2>
        <p>
          You may request access to, correction of, or deletion of the information you have submitted by writing to{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-primary hover:underline">
            {CONTACT.email}
          </a>.
        </p>
        <p className="text-xs">
          This page provides a general statement of practice. The company's formal, legally reviewed policy replaces
          this text once supplied.
        </p>
      </div>
    </Section>
  ),
});
