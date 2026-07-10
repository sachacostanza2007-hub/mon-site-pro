"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PulseDivider } from "@/components/ui/pulse-divider";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 640px 420px at 20% 20%, var(--color-mauve-100), transparent 60%), radial-gradient(ellipse 640px 420px at 80% 80%, var(--color-trust-100), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-6 py-28 text-center">
        <Reveal>
          <PulseDivider className="mx-auto mb-10 max-w-[220px]" />
          <h2 className="text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Et si votre prochain site donnait,{" "}
            <span className="text-gradient">lui aussi</span>, envie d&rsquo;être
            contacté ?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Un audit gratuit de votre présence actuelle, sans engagement — pour
            savoir précisément ce qui vous ferait gagner des clients.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Demander un audit gratuit
              <ArrowRight size={16} />
            </Button>
            <Button href="/contact" variant="secondary">
              Réserver un appel
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
