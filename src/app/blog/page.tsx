import type { Metadata } from "next";
import { Reveal } from "@/components/ui/reveal";
import { BlogExplorer } from "@/components/blog/blog-explorer";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Des conseils concrets sur le web pour artisans, commerçants et PME — stratégie, budget et bonnes pratiques.",
};

export default function BlogPage() {
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Blog
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Des conseils utiles, pas du contenu pour faire du contenu
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <BlogExplorer />
        </div>
      </section>

      <FinalCta />
    </>
  );
}
