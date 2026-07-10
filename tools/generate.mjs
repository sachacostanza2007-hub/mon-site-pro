// Authoring-time templating script — NOT required to host the site.
// Run with `node tools/pages.mjs` (from the repo root) to regenerate the
// flat .html files after editing content in this file. The output is
// plain static HTML/CSS/JS with zero runtime dependency — nothing here
// runs at request time.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const SITE = "https://bycosta.eu";
const OUT = new URL("../", import.meta.url);

/* ================= ICONS (inline SVG, stroke=currentColor) ================= */
const icon = {
  arrowRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  arrowUpRight:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>',
  sparkles:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z"/><path d="M19 15l.7 2.1L22 18l-2.3.9L19 21l-.7-2.1L16 18l2.3-.9L19 15z"/></svg>',
  chevronDown:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mapPin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  clock:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  shield:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  list:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  pen:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  server:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
  graduationCap:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>',
  refresh:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  userCheck:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
  layout:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
  bag:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2l1.5 4h9L18 2"/><rect x="3" y="6" width="18" height="15" rx="2"/></svg>',
  wrench:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 0 0-5.66 4.6L2 18l4 4 7-7a4 4 0 0 0 4.6-5.66l-2.83 2.83-2.83-.94-.94-2.83 2.7-2.7z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.6 7-6.2-3.8L6 21l1.6-7L2.2 9.2l7.1-.6L12 2z"/></svg>',
  checkCircle:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="8 12 12 16 16 8"/></svg>',
  alertCircle:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
};

/* ================= DATA ================= */
const SERVICES = [
  {
    slug: "site-vitrine",
    icon: "layout",
    title: "Site vitrine premium",
    short: "L'image de votre activité en ligne, claire, rapide et pensée pour convertir.",
    audience:
      "Artisans, commerçants, professions libérales et indépendants qui veulent un site qui inspire confiance dès la première visite.",
    why: "Pour la majorité de vos clients, votre site est le premier contact avec votre travail — avant même un appel ou une visite. S'il inspire confiance, il transforme un visiteur curieux en prospect qui vous contacte.",
    benefits: [
      "Une présentation claire de votre activité et de vos services",
      "Un formulaire de contact qui génère de vraies demandes",
      "Un référencement local pensé dès la conception",
      "Un site que vous pouvez faire évoluer vous-même",
    ],
    steps: [
      { title: "Échange & découverte", text: "On cerne votre activité, vos clients et vos objectifs." },
      { title: "Arborescence & contenus", text: "On structure les pages et on organise vos textes et photos." },
      { title: "Design & maquette", text: "Une direction visuelle sur-mesure, validée avant développement." },
      { title: "Développement", text: "Le site est codé, optimisé et testé sur tous les écrans." },
      { title: "Mise en ligne & formation", text: "Publication, nom de domaine, et prise en main expliquée." },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Accessibilité WCAG"],
    faqs: [
      {
        q: "Combien de pages sont incluses ?",
        a: "La formule standard inclut jusqu'à 6 pages (accueil, services, à propos, contact, mentions légales, confidentialité). Des pages supplémentaires peuvent être ajoutées selon vos besoins.",
      },
      {
        q: "Puis-je modifier mes textes après la livraison ?",
        a: "Oui, une formation est incluse pour que vous puissiez modifier vos contenus en toute autonomie, sans compétence technique.",
      },
    ],
  },
  {
    slug: "e-commerce",
    icon: "bag",
    title: "Site e-commerce",
    short: "Une boutique en ligne fiable, du catalogue au paiement, prête à vendre.",
    audience:
      "Commerçants et créateurs qui veulent vendre en ligne sans dépendre d'une marketplace ni d'un abonnement mensuel opaque.",
    why: "Une boutique en ligne mal conçue fait fuir les acheteurs au moment du paiement. Une boutique pensée pour la conversion transforme les visiteurs en clients, panier après panier.",
    benefits: [
      "Un catalogue produit clair et facile à mettre à jour",
      "Un tunnel de paiement rapide, sécurisé et sans friction",
      "Une gestion des stocks et des commandes simplifiée",
      "Un design qui valorise vos produits",
    ],
    steps: [
      { title: "Cadrage catalogue", text: "On structure vos produits, catégories et moyens de paiement." },
      { title: "Design & maquette", text: "Une boutique pensée pour la conversion, validée avant développement." },
      { title: "Développement & paiement", text: "Intégration sécurisée du paiement et des livraisons." },
      { title: "Tests & mise en ligne", text: "Parcours d'achat testé de bout en bout avant publication." },
      { title: "Formation", text: "Gestion des produits, commandes et stocks en autonomie." },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Paiement sécurisé"],
    faqs: [
      {
        q: "Quel moyen de paiement est intégré ?",
        a: "Le paiement par carte bancaire est intégré par défaut (Apple Pay, Google Pay). D'autres moyens de paiement peuvent être ajoutés selon vos besoins.",
      },
      {
        q: "La boutique gère-t-elle les stocks automatiquement ?",
        a: "Oui, chaque vente met à jour votre stock en temps réel, avec une alerte quand un produit est presque épuisé.",
      },
    ],
  },
  {
    slug: "refonte",
    icon: "refresh",
    title: "Refonte de site",
    short: "Un site existant qui vieillit mal, remis à niveau sans repartir de zéro.",
    audience:
      "Entreprises dont le site actuel donne une image dépassée, charge lentement, ou ne fonctionne plus bien sur mobile.",
    why: "Un site vieillissant coûte des clients silencieusement : ils repartent sans jamais le dire. La refonte redonne une image à la hauteur de votre activité réelle aujourd'hui.",
    benefits: [
      "Un audit complet de ce qui freine votre site actuel",
      "Une reprise du meilleur de l'existant, sans repartir de zéro",
      "Des performances et un référencement nettement améliorés",
      "Une transition sans coupure pour vos clients",
    ],
    steps: [
      { title: "Audit du site actuel", text: "Analyse technique, contenu et parcours utilisateur." },
      { title: "Recommandations", text: "Ce qu'on garde, ce qu'on améliore, ce qu'on repense." },
      { title: "Design & maquette", text: "Une nouvelle direction visuelle validée avant développement." },
      { title: "Développement & migration", text: "Reprise des contenus utiles, sans perte de référencement." },
      { title: "Mise en ligne", text: "Bascule contrôlée, sans interruption de service." },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO technique"],
    faqs: [
      {
        q: "Vais-je perdre mon référencement actuel ?",
        a: "Non — la migration est faite pour préserver vos positions existantes (redirections, structure d'URL, contenu conservé quand il fonctionne).",
      },
      {
        q: "Faut-il tout refaire ou peut-on garder certaines pages ?",
        a: "L'audit initial identifie précisément ce qui mérite d'être conservé et ce qui doit être repensé.",
      },
    ],
  },
  {
    slug: "seo",
    icon: "search",
    title: "SEO & visibilité locale",
    short: "Être trouvé par les bonnes personnes, au bon moment, près de chez vous.",
    audience:
      "Entreprises locales qui veulent apparaître dans les recherches Google de leur ville ou de leur quartier.",
    why: "Un site magnifique que personne ne trouve ne génère aucun client. Le référencement local est ce qui vous met devant les personnes qui cherchent activement vos services.",
    benefits: [
      "Une fiche Google Business Profile optimisée",
      "Des pages structurées pour les recherches locales",
      "Un suivi de position sur vos mots-clés prioritaires",
      "Des recommandations claires, mois après mois",
    ],
    steps: [
      { title: "Audit SEO", text: "Analyse technique, mots-clés et positionnement actuel." },
      { title: "Stratégie de mots-clés", text: "Sélection des recherches à cibler en priorité." },
      { title: "Optimisation technique", text: "Structure, vitesse, balises et données structurées." },
      { title: "Contenu local", text: "Pages et fiche Google pensées pour votre zone de chalandise." },
      { title: "Suivi mensuel", text: "Rapport de positions et ajustements réguliers." },
    ],
    technologies: ["Schema.org", "Core Web Vitals", "Google Business Profile"],
    faqs: [
      {
        q: "En combien de temps voit-on des résultats ?",
        a: "Les premiers effets apparaissent généralement entre 6 et 12 semaines, le référencement étant un travail de fond plutôt qu'un effet immédiat.",
      },
      {
        q: "Le SEO est-il inclus dans un site vitrine ?",
        a: "Les fondations techniques le sont. Ce service ajoute un travail continu de suivi et d'optimisation dans la durée.",
      },
    ],
  },
  {
    slug: "maintenance",
    icon: "wrench",
    title: "Maintenance & évolution",
    short: "Un site à jour, sécurisé, et qui évolue avec les besoins de votre activité.",
    audience: "Tout propriétaire de site qui veut dormir tranquille sans se soucier des mises à jour techniques ou de la sécurité.",
    why: "Un site laissé à l'abandon devient une faille de sécurité et une source de lenteur. La maintenance protège votre investissement dans la durée.",
    benefits: [
      "Mises à jour de sécurité appliquées en continu",
      "Sauvegardes régulières de votre site",
      "Petites modifications de contenu incluses",
      "Un interlocuteur direct en cas de problème",
    ],
    steps: [
      { title: "État des lieux", text: "Vérification de la sécurité et des performances actuelles." },
      { title: "Mise en place", text: "Sauvegardes automatiques et surveillance continue." },
      { title: "Suivi mensuel", text: "Mises à jour, rapport de santé du site." },
      { title: "Évolutions", text: "Ajouts de contenu ou de fonctionnalités selon vos besoins." },
    ],
    technologies: ["Monitoring", "Sauvegardes automatiques", "HTML/CSS/JS"],
    faqs: [
      {
        q: "Que couvre exactement la maintenance ?",
        a: "Sécurité, sauvegardes, disponibilité et petites modifications de contenu. Les évolutions plus importantes font l'objet d'un devis séparé.",
      },
      {
        q: "Puis-je résilier à tout moment ?",
        a: "Oui, sans engagement de durée minimale au-delà du mois en cours.",
      },
    ],
  },
];

const PROJECTS = [
  {
    slug: "atelier-riviere",
    name: "Atelier Rivière",
    category: "Menuiserie d'art",
    gradient: "gradient-mauve-100-50",
    context: "Julien fabrique des meubles sur mesure depuis douze ans, mais n'avait qu'une page Facebook pour présenter son travail.",
    objective: "Donner à son savoir-faire une vitrine à la hauteur, capable de rassurer une clientèle plus haut de gamme.",
    solution: "Un site vitrine épuré, centré sur de grandes photos de réalisations et un formulaire de demande de devis simplifié.",
    result: "Premiers appels dès la deuxième semaine de mise en ligne, panier moyen des demandes en hausse de 40%.",
    testimonial: { quote: "Je ne pensais pas qu'un site pouvait vraiment changer quelque chose pour un artisan comme moi.", author: "Julien Rivière" },
  },
  {
    slug: "le-comptoir",
    name: "Le Comptoir",
    category: "Restaurant",
    gradient: "gradient-trust-100-50",
    context: "Un restaurant de quartier avec un site vieux de huit ans, illisible sur mobile et jamais mis à jour.",
    objective: "Un site rapide, avec le menu du jour facile à mettre à jour et une réservation simplifiée.",
    solution: "Refonte complète avec un menu géré en autonomie et un lien direct vers la réservation en ligne.",
    result: "Taux de réservation en ligne multiplié par trois en un trimestre.",
    testimonial: { quote: "Enfin quelqu'un qui explique les choses simplement, pas de mauvaise surprise sur le devis.", author: "Camille Auger" },
  },
  {
    slug: "maison-verte",
    name: "Maison Verte",
    category: "E-commerce déco",
    gradient: "gradient-mauve-50-trust-100",
    context: "Une créatrice d'objets déco qui vendait uniquement sur les réseaux sociaux et les marchés.",
    objective: "Une boutique en ligne fiable pour vendre au-delà de sa zone géographique.",
    solution: "Site e-commerce avec catalogue clair, paiement sécurisé et gestion des stocks automatisée.",
    result: "Ventes en ligne doublées en trois mois, nouvelle clientèle hors région.",
    testimonial: { quote: "Le site est magnifique, mais surtout il tourne parfaitement — les ventes ont doublé en trois mois.", author: "Sophie Marchand" },
  },
];

const POSTS = [
  {
    slug: "site-internet-artisan-premiers-clients",
    title: "Comment un site internet vous amène vos premiers clients quand vous êtes artisan",
    excerpt: "Un site bien pensé fait le travail de prospection à votre place, même quand vous êtes sur un chantier.",
    category: "Stratégie",
    readTime: "6 min",
    date: "12 mai 2026",
    isoDate: "2026-05-12",
    gradient: "gradient-mauve-100-50",
    body: [
      "Quand on est artisan, le bouche-à-oreille reste la première source de clients. Mais il a une limite claire : il ne fonctionne que dans le cercle de ceux qui vous connaissent déjà.",
      "Un site internet prend le relais là où le bouche-à-oreille s'arrête. Quelqu'un qui cherche « menuisier sur mesure » près de chez lui ne vous connaît pas encore — c'est votre site qui va faire le travail de le convaincre, pendant que vous êtes occupé sur un chantier.",
      "Pour que ça fonctionne, trois éléments sont indispensables : des photos de vos réalisations qui parlent d'elles-mêmes, un moyen de vous contacter en moins de deux clics, et une présence sur Google quand on tape votre métier et votre ville.",
      "Ce n'est pas une question de budget illimité. C'est une question de priorités bien posées dès le départ.",
    ],
  },
  {
    slug: "combien-coute-site-internet-professionnel",
    title: "Combien coûte vraiment un site internet professionnel en 2026 ?",
    excerpt: "Entre les offres à 300€ et celles à 15 000€, comment savoir ce qui correspond réellement à votre besoin ?",
    category: "Budget",
    readTime: "5 min",
    date: "28 avril 2026",
    isoDate: "2026-04-28",
    gradient: "gradient-trust-100-50",
    body: [
      "La question revient presque à chaque premier échange : « combien ça coûte, un site internet ? » La réponse honnête est : ça dépend de ce que vous voulez qu'il fasse pour vous.",
      "Un site vitrine simple, avec vos informations essentielles, coûte moins cher qu'une boutique en ligne avec gestion de stock et paiement intégré. Ce n'est pas la taille du site qui détermine le prix, mais sa complexité fonctionnelle.",
      "Méfiez-vous des offres à 300€ « tout compris » : elles cachent souvent des templates non personnalisés, un hébergement de mauvaise qualité, ou des frais cachés qui apparaissent après coup.",
      "Un devis sérieux détaille toujours ce qui est inclus : nombre de pages, référencement, formation, maintenance. C'est ce détail qui vous permet de comparer des offres réellement comparables.",
    ],
  },
  {
    slug: "erreurs-a-eviter-refonte-site",
    title: "Les 5 erreurs à éviter avant de refaire le site de votre entreprise",
    excerpt: "Une refonte mal préparée peut vous faire perdre votre référencement et des mois de travail.",
    category: "Conseils",
    readTime: "7 min",
    date: "3 avril 2026",
    isoDate: "2026-04-03",
    gradient: "gradient-mauve-50-trust-100",
    body: [
      "Refaire un site qui fonctionne déjà, même imparfaitement, est plus risqué qu'on ne le pense. Voici les erreurs les plus fréquentes que l'on observe.",
      "Première erreur : changer toutes les URLs sans redirections. Résultat, tout le référencement accumulé pendant des années disparaît du jour au lendemain.",
      "Deuxième erreur : repartir de zéro sans regarder ce qui fonctionnait déjà. Une refonte n'est pas toujours un rejet total de l'existant — parfois, il suffit d'améliorer ce qui est déjà là.",
      "Troisième erreur : ne pas prévoir de période de test avant la bascule officielle. Un nouveau site doit être vérifié dans tous les sens avant de remplacer l'ancien.",
      "Les deux dernières erreurs concernent la suite : ne pas former l'équipe à la prise en main du nouveau site, et ne pas prévoir de budget pour les évolutions post-lancement.",
    ],
  },
];

const FAQS = [
  { q: "Combien coûte un site avec byCosta ?", a: "Chaque projet est différent : le tarif dépend du nombre de pages, des fonctionnalités et de vos objectifs. Après un premier échange gratuit, vous recevez un devis détaillé et fixe — jamais d'estimation vague." },
  { q: "Combien de temps faut-il pour livrer un site ?", a: "En général entre 3 et 6 semaines pour un site vitrine, et 6 à 10 semaines pour une boutique en ligne, selon la complexité et la rapidité des retours de votre côté." },
  { q: "Je n'ai pas de photos ni de textes, est-ce un problème ?", a: "Non. On vous accompagne pour structurer vos contenus, et on peut vous orienter vers des ressources visuelles adaptées à votre secteur si besoin." },
  { q: "Que se passe-t-il après la mise en ligne ?", a: "Vous recevez une formation pour gérer votre site en autonomie, et une offre de maintenance optionnelle pour les mises à jour, la sécurité et les évolutions futures." },
  { q: "Puis-je demander des modifications après la livraison ?", a: "Oui, une période d'ajustements est incluse après la mise en ligne, et des forfaits d'évolution sont disponibles ensuite selon vos besoins." },
];

const QUICK_FAQ = [
  { q: "Le premier échange est-il payant ?", a: "Non, le premier appel de cadrage est entièrement gratuit et sans engagement." },
  { q: "Faut-il déjà avoir des idées précises ?", a: "Pas du tout — on vous aide à clarifier vos besoins pendant l'échange." },
];

const TESTIMONIALS = PROJECTS.map((p) => ({
  quote: p.testimonial.quote,
  name: p.testimonial.author,
  role: p.name + (p.category ? ", " + p.category : ""),
}));

/* ================= LAYOUT PARTIALS ================= */
function baseHead({ title, description, path, jsonLd = [], ogImage = "/assets/img/og-image.png" }) {
  const url = SITE + path;
  const fullTitle = title.includes("byCosta") ? title : `${title} — byCosta`;
  const ld = jsonLd.map((d) => `<script type="application/ld+json">${JSON.stringify(d)}</script>`).join("\n    ");
  return `<meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${fullTitle}</title>
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${url}" />
    <link rel="icon" href="/assets/img/icon.svg" type="image/svg+xml" />
    <link rel="apple-touch-icon" href="/assets/img/apple-icon.png" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name" content="byCosta" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${SITE}${ogImage}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${fullTitle}" />
    <meta name="twitter:description" content="${description}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,wght@0,400;0,500;0,600;1,400&family=Instrument+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="/assets/css/style.css" />
    ${ld}`;
}

function svgDefs() {
  return `<svg width="0" height="0" style="position:absolute">
    <defs>
      <linearGradient id="pulse-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#8b5fa6" />
        <stop offset="100%" stop-color="#3b4e9e" />
      </linearGradient>
    </defs>
  </svg>`;
}

function pulseDivider(cls = "") {
  return `<div class="pulse-divider ${cls}">
    <span class="line"></span>
    <svg viewBox="0 0 120 20" width="90" height="16" aria-hidden="true"><path d="M2,10 L28,10 L36,2 L44,18 L52,10 L70,10 L76,4 L82,16 L88,10 L118,10"/></svg>
    <span class="line"></span>
  </div>`;
}

function navbar(active = "") {
  const links = [
    ["/services/", "Services"],
    ["/realisations/", "Réalisations"],
    ["/a-propos/", "À propos"],
    ["/blog/", "Blog"],
  ];
  const linkHtml = links
    .map(([href, label]) => `<li><a href="${href}"${active === href ? ' aria-current="page"' : ""}>${label}</a></li>`)
    .join("\n        ");
  return `<header class="navbar">
    <div class="navbar-inner">
      <a href="/" class="wordmark"><span class="by">by</span><span class="costa font-display text-gradient">Costa</span></a>
      <ul class="nav-links">
        ${linkHtml}
      </ul>
      <a href="/contact/" class="btn btn-primary nav-cta">Parler de mon projet</a>
      <button type="button" class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false">${icon.menu || '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>'}</button>
    </div>
    <nav class="mobile-menu">
      <ul>
        ${links.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("\n        ")}
        <li><a href="/contact/" class="btn btn-primary" style="width:100%;margin-top:.5rem;">Parler de mon projet</a></li>
      </ul>
    </nav>
  </header>`;
}

function footer() {
  return `<footer class="footer">
    <div class="footer-grid">
      <div class="footer-about">
        <a href="/" class="wordmark"><span class="by">by</span><span class="costa font-display text-gradient">Costa</span></a>
        <p>Des sites premium pour artisans, commerçants, PME et indépendants qui veulent une image à la hauteur de leur savoir-faire.</p>
        <ul class="footer-contact">
          <li>${icon.mail}<a href="mailto:contact@bycosta.eu">contact@bycosta.eu</a></li>
          <li>${icon.phone}<a href="tel:+33612345678">+33 6 12 34 56 78</a></li>
          <li>${icon.mapPin}Lyon, France</li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Services</h3>
        <ul>
          ${SERVICES.map((s) => `<li><a href="/services/${s.slug}/">${s.title}</a></li>`).join("\n          ")}
        </ul>
      </div>
      <div class="footer-col">
        <h3>Agence</h3>
        <ul>
          <li><a href="/a-propos/">À propos</a></li>
          <li><a href="/realisations/">Réalisations</a></li>
          <li><a href="/blog/">Blog</a></li>
          <li><a href="/contact/">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h3>Légal</h3>
        <ul>
          <li><a href="/mentions-legales/">Mentions légales</a></li>
          <li><a href="/confidentialite/">Politique de confidentialité</a></li>
        </ul>
      </div>
    </div>
    <div class="wrap">${pulseDivider()}</div>
    <div class="footer-bottom">
      <p>&copy; 2026 byCosta. Tous droits réservés.</p>
      <p>bycosta.eu — sites web premium</p>
    </div>
  </footer>`;
}

function finalCta({
  heading = `Et si votre prochain site donnait, <span class="text-gradient">lui aussi</span>, envie d'être contacté ?`,
  text = "Un audit gratuit de votre présence actuelle, sans engagement — pour savoir précisément ce qui vous ferait gagner des clients.",
  primary = "Demander un audit gratuit",
  secondary = "Réserver un appel",
} = {}) {
  return `<section class="final-cta">
    <div class="final-cta-glow" aria-hidden="true"></div>
    <div class="final-cta-inner">
      <div data-reveal>
        ${pulseDivider()}
        <h2 class="text-balance">${heading}</h2>
        <p class="lede">${text}</p>
        <div class="final-cta-buttons">
          <div class="magnetic"><a href="/contact/" class="btn btn-primary">${primary} ${icon.arrowRight}</a></div>
          <div class="magnetic"><a href="/contact/" class="btn btn-secondary">${secondary}</a></div>
        </div>
      </div>
    </div>
  </section>`;
}

function page({ title, description, path, active = "", jsonLd = [], body, extraHead = "" }) {
  return `<!doctype html>
<html lang="fr">
  <head>
    ${baseHead({ title, description, path, jsonLd })}
    ${extraHead}
  </head>
  <body>
    <a href="#main-content" class="skip-link">Aller au contenu principal</a>
    ${svgDefs()}
    ${navbar(active)}
    <main id="main-content">
      ${body}
    </main>
    ${footer()}
    <script src="/assets/js/main.js" defer></script>
  </body>
</html>
`;
}

function write(path, html) {
  const filePath = new URL("." + path, OUT);
  mkdirSync(dirname(filePath.pathname), { recursive: true });
  writeFileSync(filePath, html, "utf8");
}

export {
  baseHead,
  svgDefs,
  pulseDivider,
  navbar,
  footer,
  finalCta,
  page,
  write,
  icon,
  SERVICES,
  PROJECTS,
  POSTS,
  FAQS,
  QUICK_FAQ,
  TESTIMONIALS,
  SITE,
  OUT,
};
