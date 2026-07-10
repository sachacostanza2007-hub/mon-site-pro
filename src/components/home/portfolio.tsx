"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const PROJECTS = [
  {
    slug: "atelier-riviere",
    name: "Atelier Rivière",
    category: "Menuiserie d'art",
    from: "from-mauve-100",
    to: "to-mauve-50",
  },
  {
    slug: "le-comptoir",
    name: "Le Comptoir",
    category: "Restaurant",
    from: "from-trust-100",
    to: "to-trust-50",
  },
  {
    slug: "maison-verte",
    name: "Maison Verte",
    category: "E-commerce déco",
    from: "from-mauve-50",
    to: "to-trust-100",
  },
];

export function Portfolio() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Réalisations
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Des projets livrés, pas des concepts
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/realisations" variant="secondary">
              Voir toutes les réalisations
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <motion.div key={project.slug} variants={revealItemVariants}>
              <Link
                href={`/realisations/${project.slug}`}
                className="group block overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-30px_rgba(59,78,158,0.4)]"
              >
                <div
                  className={`flex h-48 flex-col justify-between bg-gradient-to-br ${project.from} ${project.to} p-5`}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                    <span className="h-2 w-2 rounded-full bg-ink/15" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-2.5 w-2/3 rounded-full bg-ink/15" />
                    <div className="h-2.5 w-1/2 rounded-full bg-ink/15" />
                  </div>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <p className="font-semibold">{project.name}</p>
                    <p className="text-xs text-muted">{project.category}</p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mauve-600"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
