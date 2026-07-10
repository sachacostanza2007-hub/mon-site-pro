"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { motion } from "framer-motion";
import { CATEGORIES, POSTS } from "@/lib/blog-data";
import { RevealGroup, revealItemVariants } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

export function BlogExplorer() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("Tous");

  const filtered = useMemo(() => {
    return POSTS.filter((post) => {
      const matchesCategory = category === "Tous" || post.category === category;
      const matchesQuery =
        query.trim() === "" ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search
            size={16}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un article"
            className="w-full rounded-full border border-border bg-surface py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-trust-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                category === cat
                  ? "border-transparent bg-gradient-to-r from-mauve-500 to-trust-500 text-white"
                  : "border-border text-muted hover:text-ink"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-sm text-muted">
          Aucun article ne correspond à votre recherche.
        </p>
      ) : (
        <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3">
          {filtered.map((post) => (
            <motion.div key={post.slug} variants={revealItemVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-lg border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(139,95,166,0.35)]"
              >
                <div className={`h-36 bg-gradient-to-br ${post.from} ${post.to}`} />
                <div className="p-6">
                  <div className="flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-wide text-muted">
                    <span>{post.category}</span>
                    <span aria-hidden>·</span>
                    <span>{post.readTime} de lecture</span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted line-clamp-2">{post.excerpt}</p>
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
      )}
    </div>
  );
}
