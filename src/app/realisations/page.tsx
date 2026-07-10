import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { RealisationsGrid } from "@/components/realisations/grid";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Des sites réellement livrés pour des artisans, commerçants et PME — avec le contexte, la solution et les résultats obtenus.",
};

export default function RealisationsPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Réalisations
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Des projets livrés, pas des concepts
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Chaque projet ci-dessous est un site réel, en ligne, avec un
              client qui l&rsquo;a commandé et un résultat mesurable.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <RealisationsGrid />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
