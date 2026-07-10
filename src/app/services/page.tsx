import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/services-data";
import { Reveal } from "@/components/ui/reveal";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Site vitrine, e-commerce, refonte, SEO local et maintenance — des services clairs pour donner à votre activité une image à la hauteur de son savoir-faire.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Services
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Une offre claire, pour chaque étape de votre présence en ligne
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Que vous partiez de zéro ou que vous ayez déjà un site à
              améliorer, il y a une offre pensée pour votre situation — sans
              jargon, avec un devis clair avant tout engagement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <div className="divide-y divide-border">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.05}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-5">
                    <service.icon size={24} className="mt-1 shrink-0 text-trust-600" strokeWidth={1.75} />
                    <div>
                      <h2 className="text-xl font-semibold group-hover:text-mauve-700">
                        {service.title}
                      </h2>
                      <p className="mt-1.5 max-w-lg text-sm text-muted">{service.short}</p>
                    </div>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mauve-600"
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
