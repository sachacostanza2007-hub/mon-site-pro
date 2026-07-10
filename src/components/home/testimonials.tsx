"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    quote:
      "J'ai reçu mes premiers appels via le site dès la deuxième semaine. Je ne pensais pas qu'un site pouvait vraiment changer quelque chose pour un artisan comme moi.",
    name: "Julien Rivière",
    role: "Menuiserie d'art",
  },
  {
    quote:
      "Enfin quelqu'un qui explique les choses simplement. J'ai compris chaque étape et chaque ligne du devis, pas de mauvaise surprise.",
    name: "Camille Auger",
    role: "Restaurant Le Comptoir",
  },
  {
    quote:
      "Le site est magnifique, mais surtout il tourne parfaitement en boutique en ligne — les ventes ont doublé en trois mois.",
    name: "Sophie Marchand",
    role: "Maison Verte, e-commerce",
  },
];

export function Testimonials() {
  return (
    <section className="border-b border-border bg-surface-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
            Avis clients
          </p>
          <h2 className="mt-4 max-w-2xl text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Ce qu&rsquo;en disent ceux qui l&rsquo;ont vécu
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={revealItemVariants}
              className="flex flex-col rounded-lg border border-border bg-surface p-7"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="fill-mauve-500 text-mauve-500" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </figcaption>
            </motion.figure>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
