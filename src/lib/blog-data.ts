export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  from: string;
  to: string;
  body: string[];
};

export const CATEGORIES = ["Tous", "Stratégie", "Budget", "Conseils"] as const;

export const POSTS: Post[] = [
  {
    slug: "site-internet-artisan-premiers-clients",
    title: "Comment un site internet vous amène vos premiers clients quand vous êtes artisan",
    excerpt:
      "Un site bien pensé fait le travail de prospection à votre place, même quand vous êtes sur un chantier.",
    category: "Stratégie",
    readTime: "6 min",
    date: "12 mai 2026",
    from: "from-mauve-100",
    to: "to-mauve-50",
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
    excerpt:
      "Entre les offres à 300€ et celles à 15 000€, comment savoir ce qui correspond réellement à votre besoin ?",
    category: "Budget",
    readTime: "5 min",
    date: "28 avril 2026",
    from: "from-trust-100",
    to: "to-trust-50",
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
    excerpt:
      "Une refonte mal préparée peut vous faire perdre votre référencement et des mois de travail.",
    category: "Conseils",
    readTime: "7 min",
    date: "3 avril 2026",
    from: "from-mauve-50",
    to: "to-trust-100",
    body: [
      "Refaire un site qui fonctionne déjà, même imparfaitement, est plus risqué qu'on ne le pense. Voici les erreurs les plus fréquentes que l'on observe.",
      "Première erreur : changer toutes les URLs sans redirections. Résultat, tout le référencement accumulé pendant des années disparaît du jour au lendemain.",
      "Deuxième erreur : repartir de zéro sans regarder ce qui fonctionnait déjà. Une refonte n'est pas toujours un rejet total de l'existant — parfois, il suffit d'améliorer ce qui est déjà là.",
      "Troisième erreur : ne pas prévoir de période de test avant la bascule officielle. Un nouveau site doit être vérifié dans tous les sens avant de remplacer l'ancien.",
      "Les deux dernières erreurs concernent la suite : ne pas former l'équipe à la prise en main du nouveau site, et ne pas prévoir de budget pour les évolutions post-lancement.",
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}
