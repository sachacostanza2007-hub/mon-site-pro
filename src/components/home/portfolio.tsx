"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects-data";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ui/project-card";

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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
