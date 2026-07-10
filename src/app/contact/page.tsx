import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Clock3, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Parlons de votre projet — réponse sous 24h, devis clair et sans engagement.",
};

const GUARANTEES = [
  { icon: Clock3, text: "Réponse sous 24h ouvrées" },
  { icon: ShieldCheck, text: "Devis clair, sans engagement" },
];

const QUICK_FAQ = [
  {
    q: "Le premier échange est-il payant ?",
    a: "Non, le premier appel de cadrage est entièrement gratuit et sans engagement.",
  },
  {
    q: "Faut-il déjà avoir des idées précises ?",
    a: "Pas du tout — on vous aide à clarifier vos besoins pendant l'échange.",
  },
];

export default function ContactPage() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">
              Contact
            </p>
            <h1 className="mt-4 text-balance font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Discutons de votre projet
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">
              Racontez-nous où vous en êtes, même si tout n&rsquo;est pas encore
              clair dans votre tête. On vous aide à y voir clair, sans jargon
              et sans pression.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-10">
            <ContactForm />
          </Reveal>
        </div>

        <div className="space-y-8">
          <Reveal delay={0.05} className="rounded-lg border border-border bg-surface-raised p-7">
            <div className="flex gap-6">
              {GUARANTEES.map((g) => (
                <div key={g.text} className="flex items-center gap-2.5 text-sm">
                  <g.icon size={16} className="text-trust-600" />
                  {g.text}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-mauve-600" />
                <a href="mailto:contact@bycosta.eu" className="hover:text-mauve-700">
                  contact@bycosta.eu
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-mauve-600" />
                <a href="tel:+330000000000" className="hover:text-mauve-700">
                  +33 0 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-mauve-600" />
                France — interventions à distance et sur site
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="relative h-40 overflow-hidden rounded-lg border border-border"
              style={{
                backgroundImage:
                  "radial-gradient(var(--color-border-strong) 1px, transparent 1px)",
                backgroundSize: "16px 16px",
                backgroundColor: "var(--color-surface-raised)",
              }}
              aria-hidden
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-mauve-500 to-trust-500 shadow-[0_10px_24px_-6px_rgba(139,95,166,0.5)]">
                  <MapPin size={16} className="text-white" />
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <Accordion.Root type="single" collapsible className="space-y-2.5">
              {QUICK_FAQ.map((item, i) => (
                <Accordion.Item
                  key={item.q}
                  value={`q-${i}`}
                  className="overflow-hidden rounded-lg border border-border bg-surface"
                >
                  <Accordion.Header>
                    <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold">
                      {item.q}
                      <ChevronDown
                        size={16}
                        className="shrink-0 text-muted transition-transform duration-300 group-data-[state=open]:rotate-180 group-data-[state=open]:text-mauve-600"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-sm text-muted data-[state=open]:animate-[accordion-down_0.3s_ease] data-[state=closed]:animate-[accordion-up_0.3s_ease]">
                    <p className="px-5 pb-4">{item.a}</p>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
