"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PointerEvent, useRef } from "react";
import { RevealImage } from "@/components/ui/reveal-image";

const MotionLink = motion.create(Link);

type Project = {
  slug: string;
  name: string;
  category: string;
  from: string;
  to: string;
};

/**
 * The one place in the site with a cursor-following effect — a localized
 * gradient halo plus a subtle 3D tilt, standing in for a full custom cursor
 * (ruled out in Phase 3 for accessibility/perceived-lag reasons).
 */
export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLAnchorElement>(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const haloX = useMotionValue(50);
  const haloY = useMotionValue(50);
  const haloOpacity = useMotionValue(0);
  const haloBackground = useTransform(
    [haloX, haloY],
    ([x, y]) =>
      `radial-gradient(220px circle at ${x}% ${y}%, var(--color-mauve-300), transparent 70%)`
  );

  function handlePointerMove(e: PointerEvent<HTMLAnchorElement>) {
    if (e.pointerType === "touch") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 8);
    rotateX.set((0.5 - py) * 8);
    haloX.set(px * 100);
    haloY.set(py * 100);
  }

  function handlePointerEnter() {
    haloOpacity.set(0.15);
  }

  function handlePointerLeave() {
    rotateX.set(0);
    rotateY.set(0);
    haloOpacity.set(0);
  }

  return (
    <motion.div style={{ perspective: 800 }}>
      <MotionLink
        ref={ref}
        href={`/realisations/${project.slug}`}
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX: springRotateX, rotateY: springRotateY, transformStyle: "preserve-3d" }}
        className="group relative block overflow-hidden rounded-lg border border-border bg-surface transition-shadow duration-300 hover:shadow-[0_28px_56px_-30px_rgba(59,78,158,0.4)]"
      >
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-10"
          style={{ background: haloBackground, opacity: haloOpacity }}
        />
        <RevealImage
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
        </RevealImage>
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
      </MotionLink>
    </motion.div>
  );
}
