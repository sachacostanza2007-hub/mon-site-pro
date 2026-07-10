# bycosta.eu — static site

Plain HTML/CSS/JS. No framework, no build step, no dependencies to install.

- `index.html`, `services/`, `realisations/`, `a-propos/`, `blog/`, `contact/`,
  `mentions-legales/`, `confidentialite/`, `404.html` — the site itself. Every
  page is a flat `.html` file; open any of them directly or serve the repo
  root with any static file server.
- `assets/css/style.css` — the whole design system (tokens, components,
  animations). Hand-edited directly.
- `assets/js/main.js` — nav toggle, scroll reveals, counters, card tilt/halo,
  blog filter, contact form, method timeline scrub. Vanilla JS, no library.
- `assets/img/` — favicon, apple touch icon, Open Graph image.
- `sitemap.xml`, `robots.txt` — static SEO files.
- `tools/` — the Node scripts used to *generate* the HTML pages from shared
  templates and content data (services, réalisations, blog posts, FAQ). Not
  required to host the site — only run them if you're editing page content:
  `node tools/pages.mjs && node tools/generate-seo.mjs` from the repo root.
  They use only Node's built-in `fs`/`path`, no npm install needed.

To preview locally: `python3 -m http.server 8080` (or any static server) from
the repo root, then open `http://localhost:8080/`.

The contact form has no backend (this is a static export) — it validates
client-side and opens a pre-filled `mailto:` to contact@bycosta.eu. Swap that
in `assets/js/main.js` for a form service (Formspree, Netlify Forms, etc.) if
you deploy behind one and want submissions handled server-side.
