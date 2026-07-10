"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";

const STATS = [
  { target: 120, suffix: "+", label: "sites livrés" },
  { target: 98, suffix: "%", label: "clients satisfaits" },
  { target: 24, suffix: "h", label: "délai de première réponse" },
];

const BADGES = ["Sites conformes RGPD", "Hébergement inclus", "Support réactif"];

export function Hero() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 50]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-x-20 -top-40 -z-10 h-[640px] animate-drift"
        style={{
          background:
            "radial-gradient(ellipse 720px 480px at 15% 10%, var(--color-mauve-200), transparent 62%), radial-gradient(ellipse 640px 480px at 90% 60%, var(--color-trust-200), transparent 62%)",
          opacity: 0.5,
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
        <div>
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.2, 0.65, 0.3, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted"
          >
            <Sparkles size={13} className="text-mauve-600" />
            bycosta.eu — agence de création de sites web
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1], delay: 0.05 }}
            className="font-display text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            Des sites qui donnent{" "}
            <span className="text-gradient">envie d&rsquo;être contacté</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1], delay: 0.15 }}
            className="mt-6 max-w-xl text-lg text-muted"
          >
            byCosta conçoit et développe des sites premium pour artisans,
            commerçants, PME et indépendants qui veulent une image à la
            hauteur de leur savoir-faire — sans jargon, sans stress, avec un
            interlocuteur qui pilote tout de A à Z.
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1], delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href="/contact" variant="primary">
              Parler de mon projet
              <ArrowRight size={16} />
            </Button>
            <Button href="/realisations" variant="secondary">
              Voir les réalisations
            </Button>
          </motion.div>

          <motion.div
            initial={reduced ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {STATS.map((stat) => (
              <div key={stat.label}>
                <AnimatedCounter
                  target={stat.target}
                  suffix={stat.suffix}
                  className="font-mono text-2xl font-semibold text-trust-600 md:text-3xl"
                />
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>

          <div className="mt-8 flex flex-wrap gap-2">
            {BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <motion.div style={{ y: parallaxY }} className="relative hidden md:block">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.2, 0.65, 0.3, 1], delay: 0.2 }}
          >
            <div className="overflow-hidden rounded-lg border border-border bg-surface shadow-[0_30px_80px_-30px_rgba(59,78,158,0.35)]">
              <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
                <span className="ml-3 font-mono text-[0.65rem] text-muted">
                  atelier-rivière.fr
                </span>
              </div>
              <div className="space-y-4 bg-gradient-to-br from-mauve-50 to-trust-50 p-6">
                <div className="h-3 w-24 rounded-full bg-mauve-200" />
                <div className="h-6 w-4/5 rounded-md bg-ink/10" />
                <div className="h-3 w-3/5 rounded-full bg-ink/10" />
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="h-20 rounded-md border border-border bg-surface/80" />
                  <div className="h-20 rounded-md border border-border bg-surface/80" />
                </div>
                <div className="h-9 w-32 rounded-full bg-gradient-to-r from-mauve-500 to-trust-500" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 rounded-lg border border-border bg-surface p-4 shadow-[0_20px_50px_-20px_rgba(139,95,166,0.4)]">
              <p className="font-mono text-[0.65rem] uppercase tracking-wide text-muted">
                Satisfaction client
              </p>
              <p className="mt-1 font-display text-2xl font-semibold text-gradient">
                4,9 / 5
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
