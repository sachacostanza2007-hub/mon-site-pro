import type { Metadata } from "next";
import { notFound } from "next/navigation";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { SERVICES, getService } from "@/lib/services-data";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PulseDivider } from "@/components/ui/pulse-divider";
import { FinalCta } from "@/components/home/final-cta";
import { JsonLd } from "@/components/seo/json-ld";
import { BASE_URL, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.short };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.short,
    provider: { "@id": `${BASE_URL}/#organization` },
    areaServed: "FR",
    audience: { "@type": "Audience", audienceType: service.audience },
  };

  const breadcrumbs = breadcrumbJsonLd([
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ]);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={breadcrumbs} />
      <JsonLd data={faqJsonLd(service.faqs)} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal>
            <div className="flex items-center gap-3">
              <service.icon size={28} className="text-trust-600" strokeWidth={1.75} />
              <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
                Services / {service.title}
              </p>
            </div>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-muted">{service.short}</p>
            <div className="mt-8">
              <Button href="/contact" variant="primary">
                Parler de mon projet
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface-raised">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-2">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
              À qui ça s&rsquo;adresse
            </h2>
            <p className="mt-4 text-base leading-relaxed">{service.audience}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
              Pourquoi c&rsquo;est important
            </h2>
            <p className="mt-4 text-base leading-relaxed">{service.why}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Ce que vous obtenez
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit, i) => (
              <Reveal key={benefit} delay={i * 0.04}>
                <li className="flex items-start gap-3 rounded-lg border border-border bg-surface p-5 text-sm leading-relaxed">
                  <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-mauve-500 to-trust-500" />
                  {benefit}
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Déroulement étape par étape
            </h2>
          </Reveal>
          <div className="relative mt-12 pl-12">
            <div className="absolute left-4 top-1 bottom-1 w-px bg-gradient-to-b from-mauve-500 to-trust-500" />
            {service.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.05} className="relative mb-10 last:mb-0">
                <span className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs text-trust-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
              Technologies utilisées
            </h2>
            <div className="mt-5 flex flex-wrap gap-2">
              {service.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-border px-3.5 py-1.5 font-mono text-xs text-ink/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Questions fréquentes
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="mt-10">
            <Accordion.Root type="single" collapsible className="space-y-3">
              {service.faqs.map((item, i) => (
                <Accordion.Item
                  key={item.q}
                  value={`item-${i}`}
                  className="overflow-hidden rounded-lg border border-border bg-surface"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold">
                      {item.q}
                      <ChevronDown
                        size={18}
                        className="shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-mauve-600"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted data-[state=open]:animate-[accordion-down_0.3s_ease] data-[state=closed]:animate-[accordion-up_0.3s_ease]">
                    <p className="px-6 pb-5">{item.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 pt-16">
        <PulseDivider />
      </div>

      <FinalCta />
    </>
  );
}
