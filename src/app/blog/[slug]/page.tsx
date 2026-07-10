import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { POSTS, getPost } from "@/lib/blog-data";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { PulseDivider } from "@/components/ui/pulse-divider";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-2xl px-6 py-20">
          <Reveal>
            <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-muted">
              <span className="text-mauve-600">{post.category}</span>
              <span aria-hidden>·</span>
              <span>{post.date}</span>
              <span aria-hidden>·</span>
              <span>{post.readTime} de lecture</span>
            </div>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
              {post.title}
            </h1>
          </Reveal>
        </div>
      </section>

      <section className={`h-56 bg-gradient-to-br ${post.from} ${post.to} md:h-72`} />

      <section className="border-b border-border">
        <div className="mx-auto max-w-2xl px-6 py-16">
          <Reveal>
            <div className="space-y-6 text-base leading-relaxed text-ink/90">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="mt-14">
            <PulseDivider />
          </div>

          <Reveal delay={0.1} className="mt-10 rounded-lg border border-border bg-surface-raised p-8 text-center">
            <p className="font-display text-xl font-semibold">
              Envie d&rsquo;un site qui travaille pour vous, comme dans cet article ?
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary">
                Parler de mon projet
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section>
          <div className="mx-auto max-w-4xl px-6 py-16">
            <Reveal>
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted">
                À lire aussi
              </h2>
            </Reveal>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex items-center justify-between gap-4 rounded-lg border border-border bg-surface p-5"
                >
                  <span className="text-sm font-medium">{p.title}</span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mauve-600"
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
