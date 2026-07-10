import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { PulseDivider } from "@/components/ui/pulse-divider";

const COLUMNS = [
  {
    title: "Services",
    links: [
      { href: "/services/site-vitrine", label: "Site vitrine premium" },
      { href: "/services/e-commerce", label: "Site e-commerce" },
      { href: "/services/refonte", label: "Refonte de site" },
      { href: "/services/seo", label: "SEO & visibilité locale" },
      { href: "/services/maintenance", label: "Maintenance & évolution" },
    ],
  },
  {
    title: "Agence",
    links: [
      { href: "/a-propos", label: "À propos" },
      { href: "/realisations", label: "Réalisations" },
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Légal",
    links: [
      { href: "/mentions-legales", label: "Mentions légales" },
      { href: "/confidentialite", label: "Politique de confidentialité" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <Link href="/" className="flex items-baseline gap-[0.15em] text-2xl">
              <span className="font-sans font-light text-muted text-[0.55em]">by</span>
              <span className="font-display font-semibold text-gradient">Costa</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Des sites premium pour artisans, commerçants, PME et indépendants
              qui veulent une image à la hauteur de leur savoir-faire.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-mauve-600" />
                <a href="mailto:contact@bycosta.eu" className="hover:text-ink">
                  contact@bycosta.eu
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-mauve-600" />
                <a href="tel:+330000000000" className="hover:text-ink">
                  +33 0 00 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-mauve-600" />
                France
              </li>
            </ul>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono text-xs uppercase tracking-wider text-muted">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink/80 hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <PulseDivider className="mt-14 mb-6" />

        <div className="flex flex-col items-center justify-between gap-3 text-xs text-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} byCosta. Tous droits réservés.</p>
          <p>bycosta.eu — sites web premium</p>
        </div>
      </div>
    </footer>
  );
}
