import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
};

export default function ConfidentialitePage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">Légal</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        Politique de confidentialité
      </h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/90">
        <div>
          <h2 className="font-semibold">Données collectées</h2>
          <p className="mt-2 text-muted">
            Lorsque vous utilisez le formulaire de contact, nous collectons
            votre nom, votre email, éventuellement votre téléphone, et le
            contenu de votre message, dans le seul but de répondre à votre
            demande.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Utilisation des données</h2>
          <p className="mt-2 text-muted">
            Ces informations ne sont ni revendues ni transmises à des tiers.
            Elles sont conservées uniquement le temps nécessaire au traitement
            de votre demande et à la relation commerciale qui pourrait en
            découler.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Vos droits</h2>
          <p className="mt-2 text-muted">
            Conformément au RGPD, vous disposez d&rsquo;un droit d&rsquo;accès,
            de rectification et de suppression de vos données. Vous pouvez
            exercer ce droit en écrivant à contact@bycosta.eu.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Cookies</h2>
          <p className="mt-2 text-muted">
            Ce site utilise uniquement des cookies techniques nécessaires à
            son bon fonctionnement — aucun cookie publicitaire ou de suivi
            n&rsquo;est déposé sans votre consentement.
          </p>
        </div>
      </div>
    </section>
  );
}
