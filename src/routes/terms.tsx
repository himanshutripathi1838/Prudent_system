import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/primitives";
import { COMPANY } from "@/data/site";

const TITLE = "Terms & Conditions — Prudent Systems";
const DESCRIPTION = "Terms governing use of the Prudent Systems website.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <Section className="pt-14">
      <SectionHeading eyebrow="Legal" title="Terms & Conditions" />
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted-foreground">
        <h2 className="font-display text-lg font-semibold text-foreground">Use of this website</h2>
        <p>
          This website is provided by {COMPANY.name} for information about its products, solutions and engineering
          capability. You may browse and reference this content for evaluation purposes.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Content accuracy</h2>
        <p>
          Sections labelled as reference architecture, technology direction or concept demo describe engineering
          approaches and illustrative capability — not confirmed deployed systems. Dashboard values shown in concept
          sections are demonstration data and do not represent live industrial measurements or customer results.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">Intellectual property</h2>
        <p>
          Product names, designs, documentation and site content are the property of {COMPANY.name} unless stated
          otherwise, and may not be reproduced without permission.
        </p>
        <h2 className="font-display text-lg font-semibold text-foreground">No warranty</h2>
        <p>
          Website content is provided as is, without warranty. Technical specifications, availability and scope of
          any product or solution are confirmed only in a written proposal or agreement.
        </p>
        <p className="text-xs">
          The company's formal, legally reviewed terms replace this text once supplied.
        </p>
      </div>
    </Section>
  ),
});
