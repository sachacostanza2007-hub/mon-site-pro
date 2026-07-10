"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { POSTS } from "@/lib/blog-data";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { RevealImage } from "@/components/ui/reveal-image";

export function BlogPreview() {
  return (
    <section className="border-b border-border bg-surface-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal className="max-w-xl">
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Blog
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
              Des conseils utiles, pas du contenu pour faire du contenu
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button href="/blog" variant="secondary">
              Lire le blog
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {POSTS.map((post) => (
            <motion.div key={post.slug} variants={revealItemVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(139,95,166,0.35)]"
              >
                <RevealImage className={`h-36 bg-gradient-to-br ${post.from} ${post.to}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-wide text-muted">
                    <span>{post.category}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm text-mauve-700">
                    Lire l&rsquo;article
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
