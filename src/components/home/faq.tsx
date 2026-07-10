"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { FAQS } from "@/lib/faq-data";

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
