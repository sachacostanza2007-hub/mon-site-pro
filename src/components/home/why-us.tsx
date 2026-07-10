"use client";

import { Clock3, HeartHandshake, ListChecks, ShieldCheck } from "lucide-react";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/reveal";
import { motion } from "framer-motion";

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Un travail vérifiable, pas des promesses",
    text: "Chaque réalisation présentée est un site réellement livré, avec le retour du client qui l'a commandé — pas une maquette de démonstration.",
  },
  {
    icon: ListChecks,
    title: "Une méthode claire, du premier échange à la mise en ligne",
    text: "Un devis détaillé avant tout engagement, des étapes visibles, aucune surprise sur la facture finale.",
  },
  {
    icon: Clock3,
    title: "Une réponse en moins de 24h",
    text: "Avant, pendant et après la livraison — jamais aux abonnés absents une fois le site en ligne.",
  },
  {
    icon: HeartHandshake,
    title: "Pensé pour les indépendants, pas pour les grands groupes",
    text: "Un accompagnement humain et un langage clair, sans jargon technique, pour des entrepreneurs qui n'ont pas le temps de devenir experts du web.",
  },
];

export function WhyUs() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
            Pourquoi byCosta
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            La confiance se gagne avec des preuves, pas des slogans
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {REASONS.map((reason) => (
            <motion.div
              key={reason.title}
              variants={revealItemVariants}
              className="rounded-lg border border-border bg-surface p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-24px_rgba(59,78,158,0.35)]"
            >
              <reason.icon size={22} className="text-trust-600" strokeWidth={1.75} />
              <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {reason.text}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
