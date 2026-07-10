"use client";

import Link from "next/link";
import { ArrowUpRight, Layout, RefreshCcw, Search, ShoppingBag, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const SERVICES = [
  {
    icon: Layout,
    slug: "site-vitrine",
    title: "Site vitrine premium",
    text: "L'image de votre activité en ligne, claire, rapide et pensée pour convertir.",
  },
  {
    icon: ShoppingBag,
    slug: "e-commerce",
    title: "Site e-commerce",
    text: "Une boutique en ligne fiable, du catalogue au paiement, prête à vendre.",
  },
  {
    icon: RefreshCcw,
    slug: "refonte",
    title: "Refonte de site",
    text: "Un site existant qui vieillit mal, remis à niveau sans repartir de zéro.",
  },
  {
    icon: Search,
    slug: "seo",
    title: "SEO & visibilité locale",
    text: "Être trouvé par les bonnes personnes, au bon moment, près de chez vous.",
  },
  {
    icon: Wrench,
    slug: "maintenance",
    title: "Maintenance & évolution",
    text: "Un site à jour, sécurisé, et qui évolue avec les besoins de votre activité.",
  },
];

export function Services() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Services
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Une offre claire, du premier site à la boutique en ligne
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/services" variant="secondary">
              Voir tous les services
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <motion.div key={service.slug} variants={revealItemVariants}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-lg border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_24px_48px_-28px_rgba(59,78,158,0.4)]"
              >
                <div className="flex items-start justify-between">
                  <service.icon size={22} className="text-trust-600" strokeWidth={1.75} />
                  <ArrowUpRight
                    size={18}
                    className="text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mauve-600 group-hover:opacity-100"
                  />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
