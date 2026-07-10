import {
  icon,
  SERVICES,
  PROJECTS,
  POSTS,
  FAQS,
  QUICK_FAQ,
  TESTIMONIALS,
  SITE,
  pulseDivider,
  finalCta,
  page,
  write,
} from "./generate.mjs";

const ICONS = {
  layout: icon.layout,
  bag: icon.bag,
  refresh: icon.refresh,
  search: icon.search,
  wrench: icon.wrench,
};

function projectCard(p) {
  return `<a href="/realisations/${p.slug}/" class="project-card">
    <div class="project-card-halo" aria-hidden="true"></div>
    <div class="project-visual" data-reveal-image>
      <div class="reveal-image-mask ${p.gradient}" style="display:flex;flex-direction:column;justify-content:space-between;padding:1.25rem;">
        <div class="dots"><span></span><span></span><span></span></div>
        <div class="lines"><span style="width:65%"></span><span style="width:45%"></span></div>
      </div>
    </div>
    <div class="project-card-body">
      <div><p class="name">${p.name}</p><p class="category">${p.category}</p></div>
      ${icon.arrowUpRight}
    </div>
  </a>`;
}

function blogCard(post, withExcerpt = false) {
  return `<a href="/blog/${post.slug}/" class="blog-card" data-blog-card data-category="${post.category}" data-search="${post.title.toLowerCase()} ${post.excerpt.toLowerCase()}">
    <div class="blog-card-image" data-reveal-image><div class="reveal-image-mask ${post.gradient}"></div></div>
    <div class="blog-card-body">
      <div class="blog-card-meta"><span>${post.category}</span><span aria-hidden="true">&middot;</span><span>${post.readTime} de lecture</span></div>
      <h3>${post.title}</h3>
      ${withExcerpt ? `<p>${post.excerpt}</p>` : ""}
      <span class="read-more">Lire l&rsquo;article ${icon.arrowUpRight}</span>
    </div>
  </a>`;
}

function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: SITE + it.path })),
  };
}

function faqJsonLd(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": SITE + "/#organization",
  name: "byCosta",
  url: SITE,
  description: "byCosta conçoit et développe des sites premium pour artisans, commerçants, PME et indépendants.",
  email: "contact@bycosta.eu",
  areaServed: "FR",
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE + "/#website",
  name: "byCosta",
  url: SITE,
  publisher: { "@id": SITE + "/#organization" },
  inLanguage: "fr-FR",
};

/* ================================================================
   HOME
   ================================================================ */
function homePage() {
  const hero = `<section class="hero">
    <div class="hero-glow" aria-hidden="true"></div>
    <div class="hero-grid">
      <div>
        <div class="hero-badge">${icon.sparkles} bycosta.eu — agence de création de sites web</div>
        <h1 class="text-balance">Des sites qui donnent <span class="text-gradient">envie d&rsquo;être contacté</span></h1>
        <p class="hero-lede">byCosta conçoit et développe des sites premium pour artisans, commerçants, PME et indépendants qui veulent une image à la hauteur de leur savoir-faire — sans jargon, sans stress, avec un interlocuteur qui pilote tout de A à Z.</p>
        <div class="hero-cta">
          <div class="magnetic"><a href="/contact/" class="btn btn-primary">Parler de mon projet ${icon.arrowRight}</a></div>
          <div class="magnetic"><a href="/realisations/" class="btn btn-secondary">Voir les réalisations</a></div>
        </div>
        <div class="hero-stats">
          <div><span class="stat-value" data-counter="120">0</span><span style="color:var(--trust-600)">+</span><p class="stat-label">sites livrés</p></div>
          <div><span class="stat-value" data-counter="98">0</span><span style="color:var(--trust-600)">%</span><p class="stat-label">clients satisfaits</p></div>
          <div><span class="stat-value" data-counter="24">0</span><span style="color:var(--trust-600)">h</span><p class="stat-label">délai de première réponse</p></div>
        </div>
        <div class="hero-badges">
          <span class="pill">Sites conformes RGPD</span>
          <span class="pill">Hébergement inclus</span>
          <span class="pill">Support réactif</span>
        </div>
      </div>
      <div class="hero-mock">
        <div class="browser-frame">
          <div class="browser-chrome"><span></span><span></span><span></span><span class="url">atelier-rivière.fr</span></div>
          <div class="browser-body">
            <div class="skeleton line-sm"></div>
            <div class="skeleton line-md"></div>
            <div class="skeleton line-lg"></div>
            <div class="skeleton-boxes"><div></div><div></div></div>
            <div class="skeleton-btn"></div>
          </div>
        </div>
        <div class="floating-card"><p class="label">Satisfaction client</p><p class="value text-gradient">4,9 / 5</p></div>
      </div>
    </div>
  </section>`;

  const whyUs = `<section class="section-pad">
    <div class="wrap">
      <div data-reveal>
        <p class="eyebrow">Pourquoi byCosta</p>
        <h2 class="text-balance" style="margin-top:1rem;max-width:40rem;">La confiance se gagne avec des preuves, pas des slogans</h2>
      </div>
      <div class="grid grid-2" style="margin-top:3.5rem;" data-reveal-group>
        <div class="card">${icon.shield}<h3>Un travail vérifiable, pas des promesses</h3><p>Chaque réalisation présentée est un site réellement livré, avec le retour du client qui l&rsquo;a commandé — pas une maquette de démonstration.</p></div>
        <div class="card">${icon.list}<h3>Une méthode claire, du premier échange à la mise en ligne</h3><p>Un devis détaillé avant tout engagement, des étapes visibles, aucune surprise sur la facture finale.</p></div>
        <div class="card">${icon.clock}<h3>Une réponse en moins de 24h</h3><p>Avant, pendant et après la livraison — jamais aux abonnés absents une fois le site en ligne.</p></div>
        <div class="card">${icon.heart}<h3>Pensé pour les indépendants, pas pour les grands groupes</h3><p>Un accompagnement humain et un langage clair, sans jargon technique, pour des entrepreneurs qui n&rsquo;ont pas le temps de devenir experts du web.</p></div>
      </div>
    </div>
  </section>`;

  const advantages = `<section class="section-pad" style="background:var(--surface-raised);">
    <div class="wrap">
      <div data-reveal style="max-width:34rem;">
        <p class="eyebrow">Ce qui est inclus</p>
        <h2 class="text-balance" style="margin-top:1rem;">Bien plus qu&rsquo;un site livré et oublié</h2>
      </div>
      <div class="grid grid-3" style="margin-top:3.5rem;" data-reveal-group>
        <div class="card">${icon.pen}<h3>Design sur-mesure</h3><p>Aucun template générique — chaque site est pensé pour votre activité et votre image.</p></div>
        <div class="card">${icon.search}<h3>SEO inclus dès la conception</h3><p>Structure, balises et performance pensées pour être trouvé sur Google dès le lancement.</p></div>
        <div class="card">${icon.server}<h3>Hébergement pris en main</h3><p>Nom de domaine, hébergement et certificat de sécurité configurés pour vous.</p></div>
        <div class="card">${icon.graduationCap}<h3>Formation à la prise en main</h3><p>Vous savez modifier vos textes et vos photos vous-même, en toute autonomie.</p></div>
        <div class="card">${icon.refresh}<h3>Maintenance et évolutions</h3><p>Le site continue d&rsquo;évoluer avec votre activité, bien après la mise en ligne.</p></div>
        <div class="card">${icon.userCheck}<h3>Un seul interlocuteur</h3><p>Pas de service client anonyme — vous échangez toujours avec la même personne.</p></div>
      </div>
    </div>
  </section>`;

  const services = `<section class="section-pad">
    <div class="wrap">
      <div class="section-head">
        <div class="section-head-title" data-reveal><span class="eyebrow">Services</span><h2 class="text-balance">Une offre claire, du premier site à la boutique en ligne</h2></div>
        <div data-reveal><a href="/services/" class="btn btn-secondary">Voir tous les services</a></div>
      </div>
      <div class="grid grid-3" data-reveal-group>
        ${SERVICES.map(
          (s) => `<a href="/services/${s.slug}/" class="card-link"><div class="card"><div class="card-link-head">${ICONS[s.icon]}<span class="arrow">${icon.arrowUpRight}</span></div><h3>${s.title}</h3><p>${s.short}</p></div></a>`
        ).join("\n        ")}
      </div>
    </div>
  </section>`;

  const method = `<section class="section-pad" style="background:var(--surface-raised);">
    <div class="wrap-narrow">
      <div data-reveal><p class="eyebrow">Méthode de travail</p><h2 class="text-balance" style="margin-top:1rem;">Six étapes, aucune zone d&rsquo;ombre</h2></div>
      <div class="timeline" data-timeline>
        <div class="timeline-track"></div>
        <div class="timeline-progress"></div>
        ${[
          ["Échange & découverte", "On parle de votre activité, vos objectifs et votre budget, sans engagement."],
          ["Devis & cadrage", "Un devis clair, un périmètre défini par écrit — aucune surprise sur la facture."],
          ["Design & maquette", "Une direction visuelle que vous validez avant qu&rsquo;une seule ligne de code ne soit écrite."],
          ["Développement", "Le site prend vie et est testé sur mobile, tablette et ordinateur."],
          ["Mise en ligne & formation", "Votre site est publié, et vous savez modifier vos contenus en toute autonomie."],
          ["Suivi & évolution", "On reste disponible après la livraison, pour ajuster et faire grandir le site."],
        ]
          .map(
            ([t, d], i) =>
              `<div class="timeline-step" data-reveal><span class="timeline-badge">${String(i + 1).padStart(2, "0")}</span><h3>${t}</h3><p>${d}</p></div>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>`;

  const technologies = `<section class="section-pad" style="padding:4rem 0;">
    <div class="wrap" style="text-align:center;" data-reveal><p class="font-mono" style="font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);">Des fondations techniques sérieuses, pas des raccourcis</p></div>
    <div class="marquee-wrap">
      <div class="marquee-track">
        <ul>${["HTML5", "CSS3", "JavaScript", "Accessibilité WCAG", "SEO technique", "Performance Web", "Design responsive", "Sécurité"].map((t) => `<li>${t}</li>`).join("")}</ul>
        <ul aria-hidden="true">${["HTML5", "CSS3", "JavaScript", "Accessibilité WCAG", "SEO technique", "Performance Web", "Design responsive", "Sécurité"].map((t) => `<li>${t}</li>`).join("")}</ul>
      </div>
    </div>
  </section>`;

  const portfolio = `<section class="section-pad">
    <div class="wrap">
      <div class="section-head">
        <div class="section-head-title" data-reveal><span class="eyebrow">Réalisations</span><h2 class="text-balance">Des projets livrés, pas des concepts</h2></div>
        <div data-reveal><a href="/realisations/" class="btn btn-secondary">Voir toutes les réalisations</a></div>
      </div>
      <div class="grid grid-3" data-reveal-group>
        ${PROJECTS.map(projectCard).join("\n        ")}
      </div>
    </div>
  </section>`;

  const testimonials = `<section class="section-pad" style="background:var(--surface-raised);">
    <div class="wrap">
      <div data-reveal><p class="eyebrow">Avis clients</p><h2 class="text-balance" style="margin-top:1rem;max-width:34rem;">Ce qu&rsquo;en disent ceux qui l&rsquo;ont vécu</h2></div>
      <div class="grid grid-3" style="margin-top:3.5rem;" data-reveal-group>
        ${TESTIMONIALS.map(
          (t) => `<figure class="testimonial"><div class="stars">${icon.star.repeat(5)}</div><blockquote>&ldquo;${t.quote}&rdquo;</blockquote><figcaption><p class="t-name">${t.name}</p><p class="t-role">${t.role}</p></figcaption></figure>`
        ).join("\n        ")}
      </div>
    </div>
  </section>`;

  const faq = `<section class="section-pad">
    <div class="wrap-narrow">
      <div data-reveal style="text-align:center;"><p class="eyebrow">Questions fréquentes</p><h2 class="text-balance" style="margin-top:1rem;">Tout ce qu&rsquo;on nous demande avant de se lancer</h2></div>
      <div style="margin-top:3.5rem;" data-reveal>
        ${FAQS.map(
          (f) => `<details class="accordion-item"><summary>${f.q}${icon.chevronDown}</summary><div class="accordion-body">${f.a}</div></details>`
        ).join("\n        ")}
      </div>
      <div style="margin-top:2.5rem;text-align:center;" data-reveal>
        <p style="color:var(--muted);font-size:.9rem;">Une autre question en tête ?</p>
        <div class="magnetic" style="margin-top:1rem;display:inline-block;"><a href="/contact/" class="btn btn-secondary">Discutons de votre projet</a></div>
      </div>
    </div>
  </section>`;

  const blogPreview = `<section class="section-pad" style="background:var(--surface-raised);">
    <div class="wrap">
      <div class="section-head">
        <div class="section-head-title" data-reveal><span class="eyebrow">Blog</span><h2 class="text-balance">Des conseils utiles, pas du contenu pour faire du contenu</h2></div>
        <div data-reveal><a href="/blog/" class="btn btn-secondary">Lire le blog</a></div>
      </div>
      <div class="blog-grid" style="margin-top:0;" data-reveal-group>
        ${POSTS.map((p) => blogCard(p, false)).join("\n        ")}
      </div>
    </div>
  </section>`;

  return page({
    title: "byCosta — Création de sites web premium",
    description:
      "byCosta conçoit et développe des sites premium pour artisans, commerçants, PME et indépendants qui veulent une image à la hauteur de leur savoir-faire.",
    path: "/",
    active: "",
    jsonLd: [ORG_JSONLD, WEBSITE_JSONLD, faqJsonLd(FAQS)],
    body: [hero, whyUs, advantages, services, method, technologies, portfolio, testimonials, faq, blogPreview, finalCta()].join("\n"),
  });
}

/* ================================================================
   SERVICES
   ================================================================ */
function servicesHubPage() {
  const body = `<section class="section-pad" style="text-align:center;">
    <div class="wrap-narrow" data-reveal>
      <p class="eyebrow">Services</p>
      <h1 class="text-balance" style="margin-top:1rem;">Une offre claire, pour chaque étape de votre présence en ligne</h1>
      <p class="lede" style="margin:1.5rem auto 0;text-align:center;">Que vous partiez de zéro ou que vous ayez déjà un site à améliorer, il y a une offre pensée pour votre situation — sans jargon, avec un devis clair avant tout engagement.</p>
    </div>
  </section>
  <section class="section-pad">
    <div class="wrap-narrow">
      ${SERVICES.map(
        (s, i) =>
          `<a href="/services/${s.slug}/" data-reveal style="display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:2rem 0;${i > 0 ? "border-top:1px solid var(--border);" : ""}">
        <div style="display:flex;align-items:flex-start;gap:1.25rem;">${ICONS[s.icon]}<div><h2 style="font-size:1.25rem;">${s.title}</h2><p style="margin-top:.35rem;max-width:32rem;font-size:.9rem;color:var(--muted);">${s.short}</p></div></div>
        ${icon.arrowUpRight}
      </a>`
      ).join("\n      ")}
    </div>
  </section>
  ${finalCta()}`;

  write(
    "/services/index.html",
    page({
      title: "Services",
      description: "Site vitrine, e-commerce, refonte, SEO local et maintenance — des services clairs pour donner à votre activité une image à la hauteur de son savoir-faire.",
      path: "/services/",
      active: "/services/",
      jsonLd: [breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Services", path: "/services/" }])],
      body,
    })
  );
}

function serviceDetailPages() {
  SERVICES.forEach((s) => {
    const breadcrumbs = breadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Services", path: "/services/" },
      { name: s.title, path: `/services/${s.slug}/` },
    ]);
    const serviceJsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: s.title,
      description: s.short,
      provider: { "@id": SITE + "/#organization" },
      areaServed: "FR",
      audience: { "@type": "Audience", audienceType: s.audience },
    };

    const body = `<section class="section-pad">
      <div class="wrap-article" data-reveal>
        <div style="display:flex;align-items:center;gap:.75rem;">${ICONS[s.icon]}<p class="eyebrow">Services / ${s.title}</p></div>
        <h1 class="text-balance" style="margin-top:1.2rem;">${s.title}</h1>
        <p class="lede" style="margin-top:1.2rem;">${s.short}</p>
        <div class="magnetic" style="margin-top:2rem;display:inline-block;"><a href="/contact/" class="btn btn-primary">Parler de mon projet ${icon.arrowRight}</a></div>
      </div>
    </section>
    <section class="section-pad" style="background:var(--surface-raised);">
      <div class="wrap-narrow grid grid-2">
        <div data-reveal><p class="eyebrow" style="color:var(--muted);">À qui ça s&rsquo;adresse</p><p style="margin-top:1rem;">${s.audience}</p></div>
        <div data-reveal><p class="eyebrow" style="color:var(--muted);">Pourquoi c&rsquo;est important</p><p style="margin-top:1rem;">${s.why}</p></div>
      </div>
    </section>
    <section class="section-pad">
      <div class="wrap-narrow">
        <h2 data-reveal>Ce que vous obtenez</h2>
        <div class="grid grid-2" style="margin-top:2rem;" data-reveal-group>
          ${s.benefits.map((b) => `<div class="card" style="display:flex;gap:.75rem;align-items:flex-start;"><span style="margin-top:.4rem;width:6px;height:6px;flex-shrink:0;border-radius:50%;background:linear-gradient(90deg,var(--mauve-500),var(--trust-500));"></span><p style="margin:0;font-size:.9rem;">${b}</p></div>`).join("\n          ")}
        </div>
      </div>
    </section>
    <section class="section-pad" style="background:var(--surface-raised);">
      <div class="wrap-article">
        <h2 data-reveal>Déroulement étape par étape</h2>
        <div class="timeline" style="margin-top:3rem;" data-reveal>
          <div class="timeline-track"></div>
          ${s.steps
            .map(
              (step, i) =>
                `<div class="timeline-step"><span class="timeline-badge is-active">${String(i + 1).padStart(2, "0")}</span><h3>${step.title}</h3><p>${step.text}</p></div>`
            )
            .join("\n          ")}
        </div>
      </div>
    </section>
    <section class="section-pad">
      <div class="wrap-article" data-reveal>
        <p class="eyebrow" style="color:var(--muted);">Technologies utilisées</p>
        <div style="margin-top:1.25rem;display:flex;flex-wrap:wrap;gap:.5rem;">${s.technologies.map((t) => `<span class="pill font-mono">${t}</span>`).join("")}</div>
      </div>
    </section>
    <section class="section-pad" style="background:var(--surface-raised);">
      <div class="wrap-article">
        <h2 data-reveal>Questions fréquentes</h2>
        <div style="margin-top:2.5rem;" data-reveal>
          ${s.faqs.map((f) => `<details class="accordion-item"><summary>${f.q}${icon.chevronDown}</summary><div class="accordion-body">${f.a}</div></details>`).join("\n          ")}
        </div>
      </div>
    </section>
    <div class="wrap-article" style="padding-top:4rem;">${pulseDivider()}</div>
    ${finalCta()}`;

    write(
      `/services/${s.slug}/index.html`,
      page({
        title: s.title,
        description: s.short,
        path: `/services/${s.slug}/`,
        active: "/services/",
        jsonLd: [serviceJsonLd, breadcrumbs, faqJsonLd(s.faqs)],
        body,
      })
    );
  });
}

/* ================================================================
   RÉALISATIONS
   ================================================================ */
function realisationsHubPage() {
  const body = `<section class="section-pad" style="text-align:center;">
    <div class="wrap-narrow" data-reveal>
      <p class="eyebrow">Réalisations</p>
      <h1 class="text-balance" style="margin-top:1rem;">Des projets livrés, pas des concepts</h1>
      <p class="lede" style="margin:1.5rem auto 0;text-align:center;">Chaque projet ci-dessous est un site réel, en ligne, avec un client qui l&rsquo;a commandé et un résultat mesurable.</p>
    </div>
  </section>
  <section class="section-pad">
    <div class="wrap grid grid-3" data-reveal-group>
      ${PROJECTS.map(projectCard).join("\n      ")}
    </div>
  </section>
  ${finalCta()}`;

  write(
    "/realisations/index.html",
    page({
      title: "Réalisations",
      description: "Des sites réellement livrés pour des artisans, commerçants et PME — avec le contexte, la solution et les résultats obtenus.",
      path: "/realisations/",
      active: "/realisations/",
      jsonLd: [breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Réalisations", path: "/realisations/" }])],
      body,
    })
  );
}

function realisationDetailPages() {
  PROJECTS.forEach((p) => {
    const breadcrumbs = breadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Réalisations", path: "/realisations/" },
      { name: p.name, path: `/realisations/${p.slug}/` },
    ]);

    const body = `<section class="section-pad" style="padding:0 0 3rem;">
      <div data-reveal-image>
        <div class="reveal-image-mask ${p.gradient}">
          <div class="wrap-article" style="padding:5rem 1.5rem;">
            <p class="eyebrow" style="color:color-mix(in srgb, var(--ink) 60%, transparent);">Réalisations / ${p.category}</p>
            <h1 class="text-balance" style="margin-top:1rem;">${p.name}</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="section-pad">
      <div class="wrap-article grid grid-3">
        <div data-reveal><p class="eyebrow" style="color:var(--muted);">Contexte</p><p style="margin-top:1rem;font-size:.9rem;">${p.context}</p></div>
        <div data-reveal><p class="eyebrow" style="color:var(--muted);">Objectif</p><p style="margin-top:1rem;font-size:.9rem;">${p.objective}</p></div>
        <div data-reveal><p class="eyebrow" style="color:var(--muted);">Solution</p><p style="margin-top:1rem;font-size:.9rem;">${p.solution}</p></div>
      </div>
    </section>
    <section class="section-pad" style="background:var(--surface-raised);text-align:center;">
      <div class="wrap-article" data-reveal>
        <p class="eyebrow">Résultat</p>
        <p class="font-display text-balance" style="margin-top:1rem;font-size:1.6rem;font-weight:600;">${p.result}</p>
        <blockquote style="margin:2.5rem auto 0;max-width:36rem;font-size:1.1rem;font-style:italic;color:var(--muted);">&ldquo;${p.testimonial.quote}&rdquo;</blockquote>
        <p style="margin-top:.75rem;font-weight:600;font-size:.9rem;">${p.testimonial.author}</p>
      </div>
    </section>
    <section class="section-pad" style="text-align:center;">
      <div class="wrap-article" data-reveal>
        <p style="color:var(--muted);">Un projet similaire en tête ?</p>
        <div class="magnetic" style="margin-top:1.5rem;display:inline-block;"><a href="/contact/" class="btn btn-primary">Parler de mon projet ${icon.arrowRight}</a></div>
      </div>
    </section>
    ${finalCta()}`;

    write(
      `/realisations/${p.slug}/index.html`,
      page({
        title: p.name,
        description: p.objective,
        path: `/realisations/${p.slug}/`,
        active: "/realisations/",
        jsonLd: [breadcrumbs],
        body,
      })
    );
  });
}

/* ================================================================
   À PROPOS
   ================================================================ */
function aProposPage() {
  const body = `<section class="section-pad">
    <div class="wrap-article" data-reveal>
      <p class="eyebrow">À propos</p>
      <h1 class="text-balance" style="margin-top:1rem;">Un nom propre, engagé sur chaque site</h1>
      <p style="margin-top:1.5rem;font-size:1.1rem;line-height:1.7;color:var(--muted);">byCosta est né d&rsquo;un constat simple&nbsp;: trop d&rsquo;artisans et de PME se voient proposer des sites génériques, livrés à la chaîne, sans jamais être vraiment accompagnés. Ce n&rsquo;est pas une agence anonyme — c&rsquo;est un nom qui engage sa réputation sur chaque projet livré.</p>
    </div>
  </section>
  <section class="section-pad" style="background:var(--surface-raised);">
    <div class="wrap-article grid grid-3" data-reveal-group style="text-align:center;">
      <div><span class="font-display text-gradient" style="font-size:2.5rem;font-weight:600;"><span data-counter="120">0</span>+</span><p style="margin-top:.5rem;font-size:.75rem;color:var(--muted);">sites livrés</p></div>
      <div><span class="font-display text-gradient" style="font-size:2.5rem;font-weight:600;"><span data-counter="6">0</span> ans</span><p style="margin-top:.5rem;font-size:.75rem;color:var(--muted);">d&rsquo;expérience web</p></div>
      <div><span class="font-display text-gradient" style="font-size:2.5rem;font-weight:600;"><span data-counter="12">0</span></span><p style="margin-top:.5rem;font-size:.75rem;color:var(--muted);">secteurs accompagnés</p></div>
    </div>
  </section>
  <section class="section-pad">
    <div class="wrap-article">
      <h2 data-reveal>Convictions</h2>
      <div class="grid grid-3" style="margin-top:2.5rem;" data-reveal-group>
        <div><h3 style="font-size:1rem;">Transparence</h3><p style="margin-top:.5rem;font-size:.9rem;color:var(--muted);">Un devis clair avant tout engagement, jamais de ligne surprise sur la facture finale.</p></div>
        <div><h3 style="font-size:1rem;">Exigence</h3><p style="margin-top:.5rem;font-size:.9rem;color:var(--muted);">Chaque site est conçu avec le même soin, qu&rsquo;il s&rsquo;agisse d&rsquo;un artisan ou d&rsquo;une PME établie.</p></div>
        <div><h3 style="font-size:1rem;">Disponibilité</h3><p style="margin-top:.5rem;font-size:.9rem;color:var(--muted);">Une réponse en moins de 24h, avant comme après la mise en ligne.</p></div>
      </div>
    </div>
  </section>
  <div class="wrap-article" style="padding-top:4rem;">${pulseDivider()}</div>
  <section class="section-pad" style="text-align:center;">
    <div class="wrap-article" data-reveal>
      <p style="color:var(--muted);">Envie d&rsquo;échanger sur votre projet ?</p>
      <div class="magnetic" style="margin-top:1.5rem;display:inline-block;"><a href="/contact/" class="btn btn-primary">Discutons de votre projet ${icon.arrowRight}</a></div>
    </div>
  </section>
  ${finalCta()}`;

  write(
    "/a-propos/index.html",
    page({
      title: "À propos",
      description: "byCosta, c'est un nom propre engagé sur chaque projet — le parcours, la méthode et les convictions derrière l'agence.",
      path: "/a-propos/",
      active: "/a-propos/",
      jsonLd: [breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "À propos", path: "/a-propos/" }])],
      body,
    })
  );
}

/* ================================================================
   BLOG
   ================================================================ */
function blogHubPage() {
  const categories = ["Tous", "Stratégie", "Budget", "Conseils"];
  const body = `<section class="section-pad" style="text-align:center;">
    <div class="wrap-narrow" data-reveal>
      <p class="eyebrow">Blog</p>
      <h1 class="text-balance" style="margin-top:1rem;">Des conseils utiles, pas du contenu pour faire du contenu</h1>
    </div>
  </section>
  <section class="section-pad">
    <div class="wrap">
      <div class="blog-controls" data-reveal>
        <div class="search-box">${icon.search}<input type="search" placeholder="Rechercher un article" data-blog-search /></div>
        <div class="category-filters">
          ${categories.map((c, i) => `<button type="button" data-blog-filter="${c}" class="${i === 0 ? "is-active" : ""}">${c}</button>`).join("\n          ")}
        </div>
      </div>
      <p class="no-results hidden" data-blog-empty>Aucun article ne correspond à votre recherche.</p>
      <div class="blog-grid" data-blog-grid data-reveal-group>
        ${POSTS.map((p) => blogCard(p, true)).join("\n        ")}
      </div>
    </div>
  </section>
  ${finalCta()}`;

  write(
    "/blog/index.html",
    page({
      title: "Blog",
      description: "Des conseils concrets sur le web pour artisans, commerçants et PME — stratégie, budget et bonnes pratiques.",
      path: "/blog/",
      active: "/blog/",
      jsonLd: [breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Blog", path: "/blog/" }])],
      body,
    })
  );
}

function blogArticlePages() {
  POSTS.forEach((post) => {
    const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 2);
    const articleJsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.isoDate,
      dateModified: post.isoDate,
      author: { "@id": SITE + "/#organization" },
      publisher: { "@id": SITE + "/#organization" },
      mainEntityOfPage: SITE + `/blog/${post.slug}/`,
    };
    const breadcrumbs = breadcrumbJsonLd([
      { name: "Accueil", path: "/" },
      { name: "Blog", path: "/blog/" },
      { name: post.title, path: `/blog/${post.slug}/` },
    ]);

    const body = `<section class="section-pad" style="padding-bottom:0;">
      <div class="wrap-article" data-reveal>
        <div class="article-meta"><span class="category">${post.category}</span><span aria-hidden="true">&middot;</span><span>${post.date}</span><span aria-hidden="true">&middot;</span><span>${post.readTime} de lecture</span></div>
        <h1 class="text-balance" style="margin-top:1.2rem;">${post.title}</h1>
      </div>
    </section>
    <div class="article-hero-image" data-reveal-image style="margin-top:3rem;"><div class="reveal-image-mask ${post.gradient}"></div></div>
    <section class="section-pad">
      <div class="wrap-article">
        <div class="article-body" data-reveal>
          ${post.body.map((p) => `<p>${p}</p>`).join("\n          ")}
        </div>
        <div style="margin-top:3.5rem;">${pulseDivider()}</div>
        <div class="article-cta" data-reveal style="margin-top:2.5rem;">
          <p>Envie d&rsquo;un site qui travaille pour vous, comme dans cet article ?</p>
          <div class="magnetic" style="margin-top:1.5rem;display:inline-block;"><a href="/contact/" class="btn btn-primary">Parler de mon projet ${icon.arrowRight}</a></div>
        </div>
      </div>
    </section>
    ${
      related.length
        ? `<section class="section-pad">
      <div class="wrap">
        <p class="eyebrow" style="color:var(--muted);" data-reveal>À lire aussi</p>
        <div class="related-list" data-reveal-group>
          ${related.map((r) => `<a href="/blog/${r.slug}/">${r.title}${icon.arrowUpRight}</a>`).join("\n          ")}
        </div>
      </div>
    </section>`
        : ""
    }`;

    write(
      `/blog/${post.slug}/index.html`,
      page({
        title: post.title,
        description: post.excerpt,
        path: `/blog/${post.slug}/`,
        active: "/blog/",
        jsonLd: [articleJsonLd, breadcrumbs],
        body,
      })
    );
  });
}

/* ================================================================
   CONTACT
   ================================================================ */
function contactPage() {
  const body = `<section class="section-pad">
    <div class="wrap" style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:4rem;">
      <div>
        <div data-reveal>
          <p class="eyebrow">Contact</p>
          <h1 class="text-balance" style="margin-top:1rem;">Discutons de votre projet</h1>
          <p class="lede" style="margin-top:1.5rem;">Racontez-nous où vous en êtes, même si tout n&rsquo;est pas encore clair dans votre tête. On vous aide à y voir clair, sans jargon et sans pression.</p>
        </div>
        <div data-reveal style="margin-top:2.5rem;">
          <form data-contact-form novalidate>
            <div class="form-banner error hidden" data-form-error>${icon.alertCircle}<span></span></div>
            <div class="field-row" style="margin-bottom:1.25rem;">
              <div class="field"><label for="name">Nom complet</label><input id="name" name="name" type="text" required /></div>
              <div class="field"><label for="email">Email</label><input id="email" name="email" type="email" required /></div>
            </div>
            <div class="field-row" style="margin-bottom:1.25rem;">
              <div class="field"><label for="phone">Téléphone (optionnel)</label><input id="phone" name="phone" type="tel" /></div>
              <div class="field"><label for="subject">Votre projet</label>
                <select id="subject" name="subject" required>
                  <option value="" disabled selected>Choisissez une option</option>
                  <option>Site vitrine</option>
                  <option>Site e-commerce</option>
                  <option>Refonte de site</option>
                  <option>SEO &amp; visibilité locale</option>
                  <option>Autre projet</option>
                </select>
              </div>
            </div>
            <div class="field" style="margin-bottom:1.5rem;">
              <label for="message">Votre message</label>
              <textarea id="message" name="message" rows="5" required placeholder="Parlez-nous en quelques lignes de votre activité et de ce que vous cherchez à obtenir."></textarea>
            </div>
            <div class="magnetic" style="display:inline-block;"><button type="submit" class="btn btn-primary">Envoyer ma demande</button></div>
            <p class="form-note" style="margin-top:1rem;">En envoyant ce formulaire, vous acceptez notre <a href="/confidentialite/">politique de confidentialité</a>.</p>
          </form>
          <div class="form-success hidden" data-form-success>${icon.checkCircle}<p>Message bien reçu</p><p>Votre client email va s&rsquo;ouvrir pour finaliser l&rsquo;envoi — vous recevrez une réponse sous 24h ouvrées.</p></div>
        </div>
      </div>
      <div>
        <div class="guarantees" data-reveal><div>${icon.clock} Réponse sous 24h ouvrées</div><div>${icon.shield} Devis clair, sans engagement</div></div>
        <ul class="footer-contact" data-reveal style="margin-top:2rem;font-size:.9rem;">
          <li>${icon.mail}<a href="mailto:contact@bycosta.eu">contact@bycosta.eu</a></li>
          <li>${icon.phone}<a href="tel:+33612345678">+33 6 12 34 56 78</a></li>
          <li>${icon.mapPin}Lyon, France — interventions à distance et sur site</li>
        </ul>
        <div class="map-box" data-reveal style="margin-top:2rem;"><div class="map-pin">${icon.mapPin}</div></div>
        <div style="margin-top:2rem;" data-reveal>
          ${QUICK_FAQ.map((f) => `<details class="accordion-item"><summary>${f.q}${icon.chevronDown}</summary><div class="accordion-body">${f.a}</div></details>`).join("\n          ")}
        </div>
      </div>
    </div>
  </section>`;

  write(
    "/contact/index.html",
    page({
      title: "Contact",
      description: "Parlons de votre projet — réponse sous 24h, devis clair et sans engagement.",
      path: "/contact/",
      active: "/contact/",
      jsonLd: [breadcrumbJsonLd([{ name: "Accueil", path: "/" }, { name: "Contact", path: "/contact/" }])],
      body,
    })
  );
}

/* ================================================================
   LEGAL
   ================================================================ */
function legalPages() {
  const mentions = `<section class="section-pad">
    <div class="wrap-article" data-reveal>
      <p class="eyebrow">Légal</p>
      <h1 style="margin-top:1rem;font-size:2.5rem;">Mentions légales</h1>
      <div style="margin-top:2.5rem;">
        <div class="legal-block"><h2>Éditeur du site</h2><p>byCosta — bycosta.eu<br />Entreprise individuelle (micro-entreprise) immatriculée au RCS de Lyon<br />SIRET&nbsp;: 912 345 678 00019<br />Siège social&nbsp;: 12 rue de la République, 69002 Lyon, France<br />Directeur de la publication&nbsp;: Sacha Costa<br />Email&nbsp;: contact@bycosta.eu<br />Téléphone&nbsp;: +33 6 12 34 56 78</p></div>
        <div class="legal-block"><h2>Hébergement</h2><p>Ce site statique peut être hébergé sur tout hébergeur de fichiers statiques (ex. Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis, ou tout hébergeur équivalent).</p></div>
        <div class="legal-block"><h2>Propriété intellectuelle</h2><p>L&rsquo;ensemble des contenus présents sur ce site (textes, images, identité visuelle) est la propriété de byCosta, sauf mention contraire, et ne peut être reproduit sans autorisation.</p></div>
        <div class="legal-block"><h2>Responsabilité</h2><p>byCosta s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des informations diffusées sur ce site, sans garantir l&rsquo;absence totale d&rsquo;erreurs ou d&rsquo;interruptions de service.</p></div>
      </div>
    </div>
  </section>`;

  write(
    "/mentions-legales/index.html",
    page({ title: "Mentions légales", description: "Mentions légales de bycosta.eu.", path: "/mentions-legales/", body: mentions })
  );

  const confidentialite = `<section class="section-pad">
    <div class="wrap-article" data-reveal>
      <p class="eyebrow">Légal</p>
      <h1 style="margin-top:1rem;font-size:2.5rem;">Politique de confidentialité</h1>
      <div style="margin-top:2.5rem;">
        <div class="legal-block"><h2>Données collectées</h2><p>Lorsque vous utilisez le formulaire de contact, nous collectons votre nom, votre email, éventuellement votre téléphone, et le contenu de votre message, dans le seul but de répondre à votre demande.</p></div>
        <div class="legal-block"><h2>Utilisation des données</h2><p>Ces informations ne sont ni revendues ni transmises à des tiers. Elles sont conservées uniquement le temps nécessaire au traitement de votre demande et à la relation commerciale qui pourrait en découler.</p></div>
        <div class="legal-block"><h2>Vos droits</h2><p>Conformément au RGPD, vous disposez d&rsquo;un droit d&rsquo;accès, de rectification et de suppression de vos données. Vous pouvez exercer ce droit en écrivant à contact@bycosta.eu.</p></div>
        <div class="legal-block"><h2>Cookies</h2><p>Ce site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement — aucun cookie publicitaire ou de suivi n&rsquo;est déposé sans votre consentement.</p></div>
      </div>
    </div>
  </section>`;

  write(
    "/confidentialite/index.html",
    page({ title: "Politique de confidentialité", description: "Politique de confidentialité de bycosta.eu.", path: "/confidentialite/", body: confidentialite })
  );
}

/* ================================================================
   404
   ================================================================ */
function notFoundPage() {
  const body = `<div class="error-page">
    <p class="eyebrow">Erreur 404</p>
    <h1 class="text-balance">Cette page n&rsquo;existe pas (encore)</h1>
    <p>La page que vous cherchez a peut-être été déplacée ou n&rsquo;a jamais existé. Retournez à l&rsquo;accueil ou parlez-nous de votre projet.</p>
    <div class="magnetic"><a href="/" class="btn btn-primary">Retour à l&rsquo;accueil</a></div>
  </div>`;

  write("/404.html", page({ title: "Page introuvable", description: "Cette page n'existe pas.", path: "/404.html", body }));
}

/* ================================================================
   RUN
   ================================================================ */
write("/index.html", homePage());
servicesHubPage();
serviceDetailPages();
realisationsHubPage();
realisationDetailPages();
aProposPage();
blogHubPage();
blogArticlePages();
contactPage();
legalPages();
notFoundPage();

console.log("Static site regenerated at the repo root.");
