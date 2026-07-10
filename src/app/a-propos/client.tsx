"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { revealItemVariants } from "@/components/ui/reveal";

export function AProposClient({
  stat,
}: {
  stat: { target: number; suffix: string; label: string };
}) {
  return (
    <motion.div variants={revealItemVariants} className="text-center">
      <AnimatedCounter
        target={stat.target}
        suffix={stat.suffix}
        className="font-display text-4xl font-semibold text-gradient"
      />
      <p className="mt-2 text-xs text-muted">{stat.label}</p>
    </motion.div>
  );
}
