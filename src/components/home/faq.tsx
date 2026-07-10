"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const FAQS = [
  {
    q: "Combien coûte un site avec byCosta ?",
    a: "Chaque projet est différent : le tarif dépend du nombre de pages, des fonctionnalités et de vos objectifs. Après un premier échange gratuit, vous recevez un devis détaillé et fixe — jamais d'estimation vague.",
  },
  {
    q: "Combien de temps faut-il pour livrer un site ?",
    a: "En général entre 3 et 6 semaines pour un site vitrine, et 6 à 10 semaines pour une boutique en ligne, selon la complexité et la rapidité des retours de votre côté.",
  },
  {
    q: "Je n'ai pas de photos ni de textes, est-ce un problème ?",
    a: "Non. On vous accompagne pour structurer vos contenus, et on peut vous orienter vers des ressources visuelles adaptées à votre secteur si besoin.",
  },
  {
    q: "Que se passe-t-il après la mise en ligne ?",
    a: "Vous recevez une formation pour gérer votre site en autonomie, et une offre de maintenance optionnelle pour les mises à jour, la sécurité et les évolutions futures.",
  },
  {
    q: "Puis-je demander des modifications après la livraison ?",
    a: "Oui, une période d'ajustements est incluse après la mise en ligne, et des forfaits d'évolution sont disponibles ensuite selon vos besoins.",
  },
];

export function Faq() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-3xl px-6 py-24">
        <Reveal className="text-center">
          <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
            Questions fréquentes
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Tout ce qu&rsquo;on nous demande avant de se lancer
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-14">
          <Accordion.Root type="single" collapsible className="space-y-3">
            {FAQS.map((item, i) => (
              <Accordion.Item
                key={item.q}
                value={`item-${i}`}
                className="overflow-hidden rounded-lg border border-border bg-surface"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold">
                    {item.q}
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-muted transition-transform duration-300 ease-[cubic-bezier(0.2,0.65,0.3,1)] group-data-[state=open]:rotate-180 group-data-[state=open]:text-mauve-600"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted data-[state=open]:animate-[accordion-down_0.3s_ease] data-[state=closed]:animate-[accordion-up_0.3s_ease]">
                  <p className="px-6 pb-5">{item.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 text-center">
          <p className="text-sm text-muted">Une autre question en tête ?</p>
          <Button href="/contact" variant="secondary" className="mt-4">
            Discutons de votre projet
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
