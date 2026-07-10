import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PulseDivider } from "@/components/ui/pulse-divider";
import { FinalCta } from "@/components/home/final-cta";
import { AProposClient } from "./client";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "byCosta, c'est un nom propre engagé sur chaque projet — le parcours, la méthode et les convictions derrière l'agence.",
};

const STATS = [
  { target: 120, suffix: "+", label: "sites livrés" },
  { target: 6, suffix: " ans", label: "d'expérience web" },
  { target: 12, suffix: "", label: "secteurs accompagnés" },
];

const VALUES = [
  {
    title: "Transparence",
    text: "Un devis clair avant tout engagement, jamais de ligne surprise sur la facture finale.",
  },
  {
    title: "Exigence",
    text: "Chaque site est conçu avec le même soin, qu'il s'agisse d'un artisan ou d'une PME établie.",
  },
  {
    title: "Disponibilité",
    text: "Une réponse en moins de 24h, avant comme après la mise en ligne.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              À propos
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Un nom propre, engagé sur chaque site
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              byCosta est né d&rsquo;un constat simple&nbsp;: trop d&rsquo;artisans et de
              PME se voient proposer des sites génériques, livrés à la chaîne,
              sans jamais être vraiment accompagnés. Ce n&rsquo;est pas une agence
              anonyme — c&rsquo;est un nom qui engage sa réputation sur chaque
              projet livré.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <RevealGroup className="grid grid-cols-3 gap-8">
            {STATS.map((stat) => (
              <AProposClient key={stat.label} stat={stat} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight">
              Convictions
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.05}>
                <h3 className="text-base font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 pt-16">
        <PulseDivider />
      </div>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Reveal>
            <p className="text-muted">Envie d&rsquo;échanger sur votre projet ?</p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Discutons de votre projet
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
