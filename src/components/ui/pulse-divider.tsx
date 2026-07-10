"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

const PATH =
  "M2,10 L28,10 L36,2 L44,18 L52,10 L70,10 L76,4 L82,16 L88,10 L118,10";

/**
 * The recurring "Pouls" signature motif: a heartbeat-style line traced in the
 * brand gradient. Used as a section divider, a hover underline, or a loader.
 */
export function PulseDivider({
  className,
  withLines = true,
}: {
  className?: string;
  withLines?: boolean;
}) {
  const reduced = useReducedMotion();

  return (
    <div className={cn("flex items-center gap-5", className)}>
      {withLines && <span className="h-px flex-1 bg-border" />}
      <svg viewBox="0 0 120 20" width="90" height="16" aria-hidden="true">
        <motion.path
          d={PATH}
          fill="none"
          stroke="url(#pulse-gradient)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduced ? false : { pathLength: 0 }}
          whileInView={reduced ? undefined : { pathLength: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
        />
        <defs>
          <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-mauve-500)" />
            <stop offset="100%" stopColor="var(--color-trust-500)" />
          </linearGradient>
        </defs>
      </svg>
      {withLines && <span className="h-px flex-1 bg-border" />}
    </div>
  );
}
