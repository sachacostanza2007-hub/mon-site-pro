"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  className,
}: {
  target: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 1],
    });
    return controls.stop;
  }, [inView, target, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span className="tabular-nums">{rounded}</motion.span>
      {suffix}
    </span>
  );
}
