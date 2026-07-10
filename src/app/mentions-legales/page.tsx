import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
};

export default function MentionsLegalesPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20">
      <p className="font-mono text-xs uppercase tracking-wider text-mauve-600">Légal</p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight">
        Mentions légales
      </h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-ink/90">
        <div>
          <h2 className="font-semibold">Éditeur du site</h2>
          <p className="mt-2 text-muted">
            byCosta — bycosta.eu
            <br />
            Entreprise individuelle (micro-entreprise) immatriculée au RCS de Lyon
            <br />
            SIRET&nbsp;: 912 345 678 00019
            <br />
            Siège social&nbsp;: 12 rue de la République, 69002 Lyon, France
            <br />
            Directeur de la publication&nbsp;: Sacha Costa
            <br />
            Email&nbsp;: contact@bycosta.eu
            <br />
            Téléphone&nbsp;: +33 6 12 34 56 78
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Hébergement</h2>
          <p className="mt-2 text-muted">
            Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut,
            CA 91789, États-Unis.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Propriété intellectuelle</h2>
          <p className="mt-2 text-muted">
            L&rsquo;ensemble des contenus présents sur ce site (textes, images,
            identité visuelle) est la propriété de byCosta, sauf mention
            contraire, et ne peut être reproduit sans autorisation.
          </p>
        </div>
        <div>
          <h2 className="font-semibold">Responsabilité</h2>
          <p className="mt-2 text-muted">
            byCosta s&rsquo;efforce d&rsquo;assurer l&rsquo;exactitude des
            informations diffusées sur ce site, sans garantir l&rsquo;absence
            totale d&rsquo;erreurs ou d&rsquo;interruptions de service.
          </p>
        </div>
      </div>
    </section>
  );
}
