import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, FileText } from "lucide-react";
import { GlassCard, MaturityBadge, Section, SectionHeading } from "@/components/site/primitives";
import { FlowDiagram } from "@/components/viz/FlowDiagram";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product unavailable — Prudent Systems" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.product.name} — ${loaderData.product.category} | Prudent Systems`;
    return {
      meta: [
        { title },
        { name: "description", content: loaderData.product.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: loaderData.product.summary },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();

  return (
    <>
      <Section className="relative overflow-hidden pt-14">
        <div className="grid-tech absolute inset-0 opacity-50" aria-hidden />
        <div className="relative">
          <Link to="/" hash="products" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All products
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-primary">{product.category}</span>
            <MaturityBadge label={product.status} />
          </div>
          <h1 className="mt-3 text-4xl font-semibold sm:text-5xl">{product.name}</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">{product.summary}</p>
        </div>
      </Section>

      <Section className="pt-4">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <GlassCard className="p-6">
              <h2 className="font-display text-xl font-semibold">Overview</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.overview}</p>
            </GlassCard>
            <GlassCard className="p-6">
              <h2 className="font-display text-xl font-semibold">Features</h2>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
                {product.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
            </GlassCard>
            <GlassCard className="p-6">
              <h2 className="font-display text-xl font-semibold">Architecture</h2>
              <div className="mt-4"><FlowDiagram nodes={product.architecture} compact /></div>
            </GlassCard>
            <GlassCard className="p-6">
              <h2 className="font-display text-xl font-semibold">Applications</h2>
              <ul className="mt-3 list-inside list-disc space-y-1.5 text-sm text-muted-foreground">
                {product.applications.map((a) => <li key={a}>{a}</li>)}
              </ul>
            </GlassCard>
          </div>

          <div className="space-y-6">
            <GlassCard className="p-6">
              <h2 className="font-display text-xl font-semibold">Technical details</h2>
              {product.specifications.length > 0 ? (
                <dl className="mt-3 space-y-2 text-sm">
                  {product.specifications.map((s) => (
                    <div key={s.label} className="flex justify-between gap-4 border-b border-border pb-2">
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="font-mono">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="mt-3 text-sm text-muted-foreground">
                  Detailed specifications for this product are shared on request and published here once verified.
                </p>
              )}
            </GlassCard>

            <GlassCard className="p-6">
              <h2 className="font-display text-xl font-semibold">Downloads</h2>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                Datasheets and documentation are provided on request — no unverified documents are published here.
              </p>
            </GlassCard>

            <GlassCard className="glow-ring p-6">
              <h2 className="font-display text-xl font-semibold">Discuss this product</h2>
              <p className="mt-2 text-sm text-muted-foreground">Talk to our engineers about fit, integration and deployment.</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                Talk to Our Experts
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </GlassCard>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Gallery" title="Product imagery" description="Official product photography is published here once supplied by Prudent Systems." />
      </Section>
    </>
  );
}
