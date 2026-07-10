import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services-data";
import { PROJECTS } from "@/lib/projects-data";
import { POSTS } from "@/lib/blog-data";

const BASE_URL = "https://bycosta.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/realisations`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/a-propos`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mentions-legales`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/confidentialite`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS.map((p) => ({
    url: `${BASE_URL}/realisations/${p.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const postRoutes: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...postRoutes];
}
