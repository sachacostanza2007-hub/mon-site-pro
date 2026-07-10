"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * "Images qui se dévoilent" — a clip-path wipe used on card visuals instead
 * of a plain fade, triggered once when the element enters the viewport.
 */
export function RevealImage({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      initial={reduced ? false : { clipPath: "inset(0 100% 0 0)" }}
      whileInView={reduced ? undefined : { clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
