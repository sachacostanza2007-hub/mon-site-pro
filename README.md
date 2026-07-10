# bycosta.eu

Site vitrine de byCosta — agence de création de sites web premium pour
artisans, commerçants, PME et indépendants.

Site statique en HTML/CSS/JS classique : aucun framework, aucune étape de
build, aucune dépendance à installer pour l'héberger.

## Aperçu en local

Depuis la racine du dépôt, servez les fichiers avec n'importe quel serveur
statique, par exemple :

```bash
python3 -m http.server 8080
```

puis ouvrez `http://localhost:8080/`.

## Structure

- `index.html`, `services/`, `realisations/`, `a-propos/`, `blog/`,
  `contact/`, `mentions-legales/`, `confidentialite/`, `404.html` — les
  pages du site.
- `assets/css/style.css` — le système de design (couleurs, typographie,
  composants, animations).
- `assets/js/main.js` — les comportements interactifs (menu mobile, reveal
  au scroll, compteurs animés, cartes avec tilt/halo, filtre du blog,
  formulaire de contact, timeline de la méthode).
- `assets/img/` — favicon, icône Apple, image Open Graph.
- `sitemap.xml`, `robots.txt` — fichiers SEO.
- `tools/` — scripts Node utilisés pour générer les pages HTML à partir de
  gabarits communs (pas nécessaires pour héberger le site, seulement pour
  éditer le contenu — voir `AGENTS.md`).

## Déploiement

Le contenu de ce dépôt (hors `tools/`) peut être déployé tel quel sur
n'importe quel hébergeur de fichiers statiques (Vercel, Netlify, GitHub
Pages, Cloudflare Pages, etc.), sans configuration de build.
