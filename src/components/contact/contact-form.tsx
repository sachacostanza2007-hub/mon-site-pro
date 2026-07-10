"use client";

import { FormEvent, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";

const SUBJECTS = [
  "Site vitrine",
  "Site e-commerce",
  "Refonte de site",
  "SEO & visibilité locale",
  "Autre projet",
];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-lg border border-border bg-surface-raised p-12 text-center"
      >
        <CheckCircle2 size={32} className="text-trust-600" />
        <p className="mt-4 text-lg font-semibold">Message bien reçu</p>
        <p className="mt-2 max-w-sm text-sm text-muted">
          Merci ! Vous recevrez une réponse sous 24h ouvrées à l&rsquo;adresse
          indiquée.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom complet" htmlFor="name">
          <input id="name" name="name" type="text" required className={inputClass} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Téléphone (optionnel)" htmlFor="phone">
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </Field>
        <Field label="Votre projet" htmlFor="subject">
          <select id="subject" name="subject" required className={inputClass} defaultValue="">
            <option value="" disabled>
              Choisissez une option
            </option>
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Votre message" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="Parlez-nous en quelques lignes de votre activité et de ce que vous cherchez à obtenir."
        />
      </Field>

      <MagneticButton className="inline-block">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-mauve-500 to-trust-500 px-7 py-3.5 text-[0.9375rem] font-semibold text-white shadow-[0_10px_24px_-8px_rgba(139,95,166,0.45)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:opacity-70"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={status}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
            >
              {status === "loading" ? "Envoi en cours…" : "Envoyer ma demande"}
            </motion.span>
          </AnimatePresence>
        </button>
      </MagneticButton>
      <p className="text-xs text-muted">
        En envoyant ce formulaire, vous acceptez notre{" "}
        <a href="/confidentialite" className="underline hover:text-ink">
          politique de confidentialité
        </a>
        .
      </p>
    </form>
  );
}

const inputClass =
  "w-full rounded-md border border-border bg-surface px-4 py-2.5 text-sm outline-none transition-colors focus:border-trust-500";

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
