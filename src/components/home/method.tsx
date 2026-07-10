"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    title: "Échange & découverte",
    text: "On parle de votre activité, vos objectifs et votre budget, sans engagement.",
  },
  {
    title: "Devis & cadrage",
    text: "Un devis clair, un périmètre défini par écrit — aucune surprise sur la facture.",
  },
  {
    title: "Design & maquette",
    text: "Une direction visuelle que vous validez avant qu'une seule ligne de code ne soit écrite.",
  },
  {
    title: "Développement",
    text: "Le site prend vie et est testé sur mobile, tablette et ordinateur.",
  },
  {
    title: "Mise en ligne & formation",
    text: "Votre site est publié, et vous savez modifier vos contenus en toute autonomie.",
  },
  {
    title: "Suivi & évolution",
    text: "On reste disponible après la livraison, pour ajuster et faire grandir le site.",
  },
];

export function Method() {
  return (
    <section className="border-b border-border bg-surface-raised">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
            Méthode de travail
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Six étapes, aucune zone d&rsquo;ombre
          </h2>
        </Reveal>

        <div className="relative mt-16 pl-12">
          <motion.div
            className="absolute left-4 top-1 bottom-1 w-px origin-top bg-gradient-to-b from-mauve-500 to-trust-500"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="relative mb-12 last:mb-0">
              <span className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs text-trust-600">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
