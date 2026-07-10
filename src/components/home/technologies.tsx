import { Reveal } from "@/components/ui/reveal";

const TECHNOLOGIES = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "GSAP",
  "Lenis",
  "shadcn/ui",
];

export function Technologies() {
  const items = [...TECHNOLOGIES, ...TECHNOLOGIES];

  return (
    <section className="border-b border-border py-16">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            Des fondations techniques sérieuses, pas des raccourcis
          </p>
        </Reveal>
      </div>

      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee gap-12 [animation-play-state:running] hover:[animation-play-state:paused]">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-sm tracking-wide text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
