"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Reveal } from "@/components/ui/reveal";

const STEPS = [
  {
    title: "Échange & découverte",
    text: "On parle de votre activité, vos objectifs et votre budget, sans engagement.",
  },
  {
    title: "Devis & cadrage",
    text: "Un devis clair, un périmètre défini par écrit — aucune surprise sur la facture.",
  },
  {
    title: "Design & maquette",
    text: "Une direction visuelle que vous validez avant qu'une seule ligne de code ne soit écrite.",
  },
  {
    title: "Développement",
    text: "Le site prend vie et est testé sur mobile, tablette et ordinateur.",
  },
  {
    title: "Mise en ligne & formation",
    text: "Votre site est publié, et vous savez modifier vos contenus en toute autonomie.",
  },
  {
    title: "Suivi & évolution",
    text: "On reste disponible après la livraison, pour ajuster et faire grandir le site.",
  },
];

export function Method() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const badgeRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (lineRef.current) gsap.set(lineRef.current, { scaleY: 1, transformOrigin: "top" });
      badgeRefs.current.forEach((badge) => {
        if (badge) badge.dataset.active = "true";
      });
      return;
    }
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (!containerRef.current || !lineRef.current) return;

      gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top" });

      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 75%",
        end: "bottom 55%",
        scrub: 0.6,
        onUpdate: (self) => {
          gsap.set(lineRef.current, { scaleY: self.progress });
          const active = Math.round(self.progress * (STEPS.length - 1));
          badgeRefs.current.forEach((badge, i) => {
            if (!badge) return;
            badge.dataset.active = i <= active ? "true" : "false";
          });
        },
      });

      return () => trigger.kill();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="border-b border-border bg-surface-raised">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
            Méthode de travail
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Six étapes, aucune zone d&rsquo;ombre
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative mt-16 pl-12">
          <div className="absolute left-4 top-1 bottom-1 w-px bg-border" />
          <div
            ref={lineRef}
            className="absolute left-4 top-1 bottom-1 w-px bg-gradient-to-b from-mauve-500 to-trust-500"
          />

          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.05} className="relative mb-12 last:mb-0">
              <span
                ref={(el) => {
                  badgeRefs.current[i] = el;
                }}
                data-active="false"
                className="absolute -left-12 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs text-muted transition-colors duration-300 data-[active=true]:border-transparent data-[active=true]:bg-gradient-to-r data-[active=true]:from-mauve-500 data-[active=true]:to-trust-500 data-[active=true]:text-white"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                {step.text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
