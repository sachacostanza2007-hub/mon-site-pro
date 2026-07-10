import { Layout, RefreshCcw, Search, ShoppingBag, Wrench, type LucideIcon } from "lucide-react";

export type ServiceStep = { title: string; text: string };

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  audience: string;
  why: string;
  benefits: string[];
  steps: ServiceStep[];
  technologies: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "site-vitrine",
    icon: Layout,
    title: "Site vitrine premium",
    short:
      "L'image de votre activité en ligne, claire, rapide et pensée pour convertir.",
    audience:
      "Artisans, commerçants, professions libérales et indépendants qui veulent un site qui inspire confiance dès la première visite.",
    why:
      "Pour la majorité de vos clients, votre site est le premier contact avec votre travail — avant même un appel ou une visite. S'il inspire confiance, il transforme un visiteur curieux en prospect qui vous contacte.",
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
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
    icon: ShoppingBag,
    title: "Site e-commerce",
    short: "Une boutique en ligne fiable, du catalogue au paiement, prête à vendre.",
    audience:
      "Commerçants et créateurs qui veulent vendre en ligne sans dépendre d'une marketplace ni d'un abonnement mensuel opaque.",
    why:
      "Une boutique en ligne mal conçue fait fuir les acheteurs au moment du paiement. Une boutique pensée pour la conversion transforme les visiteurs en clients, panier après panier.",
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    faqs: [
      {
        q: "Quel moyen de paiement est intégré ?",
        a: "Stripe est intégré par défaut (carte bancaire, Apple Pay, Google Pay). D'autres moyens de paiement peuvent être ajoutés selon vos besoins.",
      },
      {
        q: "La boutique gère-t-elle les stocks automatiquement ?",
        a: "Oui, chaque vente met à jour votre stock en temps réel, avec une alerte quand un produit est presque épuisé.",
      },
    ],
  },
  {
    slug: "refonte",
    icon: RefreshCcw,
    title: "Refonte de site",
    short: "Un site existant qui vieillit mal, remis à niveau sans repartir de zéro.",
    audience:
      "Entreprises dont le site actuel donne une image dépassée, charge lentement, ou ne fonctionne plus bien sur mobile.",
    why:
      "Un site vieillissant coûte des clients silencieusement : ils repartent sans jamais le dire. La refonte redonne une image à la hauteur de votre activité réelle aujourd'hui.",
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "SEO technique"],
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
    icon: Search,
    title: "SEO & visibilité locale",
    short: "Être trouvé par les bonnes personnes, au bon moment, près de chez vous.",
    audience:
      "Entreprises locales qui veulent apparaître dans les recherches Google de leur ville ou de leur quartier.",
    why:
      "Un site magnifique que personne ne trouve ne génère aucun client. Le référencement local est ce qui vous met devant les personnes qui cherchent activement vos services.",
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
    icon: Wrench,
    title: "Maintenance & évolution",
    short: "Un site à jour, sécurisé, et qui évolue avec les besoins de votre activité.",
    audience:
      "Tout propriétaire de site qui veut dormir tranquille sans se soucier des mises à jour techniques ou de la sécurité.",
    why:
      "Un site laissé à l'abandon devient une faille de sécurité et une source de lenteur. La maintenance protège votre investissement dans la durée.",
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
    technologies: ["Monitoring", "Sauvegardes automatiques", "Next.js"],
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

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
