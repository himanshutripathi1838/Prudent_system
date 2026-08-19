import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import {
  Accelerators, ArchitectureSection, ClientLogos, ContactCta, ExpertisePreview, FeaturedProducts,
  IoTPlatform, OtaSection, RailwayHighlight, SolutionPortfolio, SolutionPreview, StatsBand, WhoWeAre,
} from "@/components/home/sections";

const TITLE = "Prudent Systems — Industrial IoT, Edge AI & Industry 4.0";
const DESCRIPTION =
  "Turning smart devices into intelligent decisions: universal IoT gateways, data acquisition, edge AI, secure OTA, cloud dashboards and predictive monitoring for industry and railways.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <StatsBand />
      <WhoWeAre />
      <SolutionPreview />
      <SolutionPortfolio />
      <Accelerators />
      <IoTPlatform />
      <ArchitectureSection />
      <OtaSection />
      <FeaturedProducts />
      <RailwayHighlight />
      <ExpertisePreview />
      <ClientLogos />
      <ContactCta />
    </>
  );
}
