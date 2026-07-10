"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects-data";
import { RevealGroup, revealItemVariants } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";

export function RealisationsGrid() {
  return (
    <RevealGroup className="grid gap-6 md:grid-cols-3">
      {PROJECTS.map((project) => (
        <motion.div key={project.slug} variants={revealItemVariants}>
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </RevealGroup>
  );
}
