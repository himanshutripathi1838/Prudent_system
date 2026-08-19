import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCenter, DaqStory, DigitalTwin, EnergySection, EnterpriseArchitecture, Industry40Core,
  MsmeRetrofit, OeeSection, PredictiveMaintenance, QualityControl, RemoteMonitoring, SmartFactory,
} from "@/components/industry40";
import { Section, SectionHeading } from "@/components/site/primitives";
import { ContactCta } from "@/components/home/sections";

const TITLE = "Industry 4.0 — DAQ, Edge Computing, OEE & Predictive Maintenance | Prudent Systems";
const DESCRIPTION =
  "How data acquisition, edge computing, cloud and AI/ML combine into predictive maintenance, OEE, energy management, AI quality control and digital twin capability.";

export const Route = createFileRoute("/industry-4-0")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/industry-4-0" },
    ],
    links: [{ rel: "canonical", href: "/industry-4-0" }],
  }),
  component: Industry40Page,
});

function Industry40Page() {
  return (
    <>
      <Section className="pt-14 pb-8">
        <SectionHeading
          eyebrow="Industry 4.0"
          title="Smart manufacturing, explained end to end"
          description="A technical walk-through of the Industry 4.0 stack Prudent Systems engineers: acquisition, edge, connectivity, cloud, models and the operational decisions they support."
        />
      </Section>
      <Industry40Core />
      <DaqStory />
      <SmartFactory />
      <PredictiveMaintenance />
      <OeeSection />
      <EnergySection />
      <QualityControl />
      <RemoteMonitoring />
      <AlertCenter />
      <DigitalTwin />
      <MsmeRetrofit />
      <EnterpriseArchitecture />
      <ContactCta />
    </>
  );
}
