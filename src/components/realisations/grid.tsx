"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/projects-data";
import { RevealGroup, revealItemVariants } from "@/components/ui/reveal";

export function RealisationsGrid() {
  return (
    <RevealGroup className="grid gap-6 md:grid-cols-3">
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
  );
}
