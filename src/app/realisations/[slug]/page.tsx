import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PROJECTS, getProject } from "@/lib/projects-data";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/home/final-cta";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.name, description: project.objective };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-border">
        <div className={`bg-gradient-to-br ${project.from} ${project.to}`}>
          <div className="mx-auto max-w-4xl px-6 py-20">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-wider text-ink/60">
                Réalisations / {project.category}
              </p>
              <h1 className="mt-4 text-balance font-display text-5xl font-semibold tracking-tight md:text-6xl">
                {project.name}
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto grid max-w-4xl gap-10 px-6 py-16 md:grid-cols-3">
          <Reveal>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">Contexte</h2>
            <p className="mt-4 text-sm leading-relaxed">{project.context}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">Objectif</h2>
            <p className="mt-4 text-sm leading-relaxed">{project.objective}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted">Solution</h2>
            <p className="mt-4 text-sm leading-relaxed">{project.solution}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface-raised">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Résultat
            </p>
            <p className="mt-4 text-balance font-display text-3xl font-semibold tracking-tight md:text-4xl">
              {project.result}
            </p>
            <blockquote className="mx-auto mt-10 max-w-xl text-lg italic text-muted">
              &ldquo;{project.testimonial.quote}&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-semibold">{project.testimonial.author}</p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <Reveal>
            <p className="text-muted">Un projet similaire en tête ?</p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Parler de mon projet
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
