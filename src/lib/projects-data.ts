export type Project = {
  slug: string;
  name: string;
  category: string;
  from: string;
  to: string;
  context: string;
  objective: string;
  solution: string;
  result: string;
  testimonial: { quote: string; author: string };
};

export const PROJECTS: Project[] = [
  {
    slug: "atelier-riviere",
    name: "Atelier Rivière",
    category: "Menuiserie d'art",
    from: "from-mauve-100",
    to: "to-mauve-50",
    context:
      "Julien fabrique des meubles sur mesure depuis douze ans, mais n'avait qu'une page Facebook pour présenter son travail.",
    objective:
      "Donner à son savoir-faire une vitrine à la hauteur, capable de rassurer une clientèle plus haut de gamme.",
    solution:
      "Un site vitrine épuré, centré sur de grandes photos de réalisations et un formulaire de demande de devis simplifié.",
    result:
      "Premiers appels dès la deuxième semaine de mise en ligne, panier moyen des demandes en hausse de 40%.",
    testimonial: {
      quote:
        "Je ne pensais pas qu'un site pouvait vraiment changer quelque chose pour un artisan comme moi.",
      author: "Julien Rivière",
    },
  },
  {
    slug: "le-comptoir",
    name: "Le Comptoir",
    category: "Restaurant",
    from: "from-trust-100",
    to: "to-trust-50",
    context:
      "Un restaurant de quartier avec un site vieux de huit ans, illisible sur mobile et jamais mis à jour.",
    objective:
      "Un site rapide, avec le menu du jour facile à mettre à jour et une réservation simplifiée.",
    solution:
      "Refonte complète avec un menu géré en autonomie et un lien direct vers la réservation en ligne.",
    result: "Taux de réservation en ligne multiplié par trois en un trimestre.",
    testimonial: {
      quote:
        "Enfin quelqu'un qui explique les choses simplement, pas de mauvaise surprise sur le devis.",
      author: "Camille Auger",
    },
  },
  {
    slug: "maison-verte",
    name: "Maison Verte",
    category: "E-commerce déco",
    from: "from-mauve-50",
    to: "to-trust-100",
    context:
      "Une créatrice d'objets déco qui vendait uniquement sur les réseaux sociaux et les marchés.",
    objective: "Une boutique en ligne fiable pour vendre au-delà de sa zone géographique.",
    solution:
      "Site e-commerce avec catalogue clair, paiement sécurisé et gestion des stocks automatisée.",
    result: "Ventes en ligne doublées en trois mois, nouvelle clientèle hors région.",
    testimonial: {
      quote:
        "Le site est magnifique, mais surtout il tourne parfaitement — les ventes ont doublé en trois mois.",
      author: "Sophie Marchand",
    },
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
