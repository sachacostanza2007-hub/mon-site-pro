"use client";

import {
  GraduationCap,
  PenTool,
  RefreshCw,
  Search,
  Server,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItemVariants } from "@/components/ui/reveal";

const ADVANTAGES = [
  {
    icon: PenTool,
    title: "Design sur-mesure",
    text: "Aucun template générique — chaque site est pensé pour votre activité et votre image.",
  },
  {
    icon: Search,
    title: "SEO inclus dès la conception",
    text: "Structure, balises et performance pensées pour être trouvé sur Google dès le lancement.",
  },
  {
    icon: Server,
    title: "Hébergement pris en main",
    text: "Nom de domaine, hébergement et certificat de sécurité configurés pour vous.",
  },
  {
    icon: GraduationCap,
    title: "Formation à la prise en main",
    text: "Vous savez modifier vos textes et vos photos vous-même, en toute autonomie.",
  },
  {
    icon: RefreshCw,
    title: "Maintenance et évolutions",
    text: "Le site continue d'évoluer avec votre activité, bien après la mise en ligne.",
  },
  {
    icon: UserCheck,
    title: "Un seul interlocuteur",
    text: "Pas de service client anonyme — vous échangez toujours avec la même personne.",
  },
];

export function Advantages() {
  return (
    <section className="border-b border-border bg-surface-raised">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
            Ce qui est inclus
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Bien plus qu&rsquo;un site livré et oublié
          </h2>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItemVariants}
              className="bg-surface p-7"
            >
              <item.icon size={20} className="text-mauve-600" strokeWidth={1.75} />
              <h3 className="mt-4 text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.text}
              </p>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
