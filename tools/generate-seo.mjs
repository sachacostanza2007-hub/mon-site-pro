import { SERVICES, PROJECTS, POSTS, SITE, write } from "./generate.mjs";

const staticRoutes = [
  ["/", "weekly", "1.0"],
  ["/services/", "monthly", "0.9"],
  ["/realisations/", "weekly", "0.8"],
  ["/a-propos/", "monthly", "0.6"],
  ["/blog/", "weekly", "0.7"],
  ["/contact/", "monthly", "0.8"],
  ["/mentions-legales/", "yearly", "0.2"],
  ["/confidentialite/", "yearly", "0.2"],
];

const serviceRoutes = SERVICES.map((s) => [`/services/${s.slug}/`, "monthly", "0.7"]);
const projectRoutes = PROJECTS.map((p) => [`/realisations/${p.slug}/`, "monthly", "0.6"]);
const postRoutes = POSTS.map((p) => [`/blog/${p.slug}/`, "yearly", "0.5"]);

const all = [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...postRoutes];

const urlset = all
  .map(
    ([path, freq, priority]) =>
      `  <url>\n    <loc>${SITE}${path}</loc>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>\n`;

write("/sitemap.xml", sitemap);

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
write("/robots.txt", robots);

console.log("sitemap.xml + robots.txt generated");
