import type { Metadata } from "next";
import { Newsreader, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { JsonLd } from "@/components/seo/json-ld";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bycosta.eu"),
  title: {
    default: "byCosta — Création de sites web premium",
    template: "%s — byCosta",
  },
  description:
    "byCosta conçoit et développe des sites premium pour artisans, commerçants, PME et indépendants qui veulent une image à la hauteur de leur savoir-faire.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://bycosta.eu",
    siteName: "byCosta",
    title: "byCosta — Création de sites web premium",
    description:
      "Des sites qui donnent envie d'être contacté. Sites vitrines, e-commerce, refonte et SEO pour artisans, commerçants et PME.",
  },
  twitter: {
    card: "summary_large_image",
    title: "byCosta — Création de sites web premium",
    description:
      "Des sites qui donnent envie d'être contacté. Sites vitrines, e-commerce, refonte et SEO pour artisans, commerçants et PME.",
  },
};

const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://bycosta.eu/#organization",
  name: "byCosta",
  url: "https://bycosta.eu",
  description:
    "byCosta conçoit et développe des sites premium pour artisans, commerçants, PME et indépendants.",
  email: "contact@bycosta.eu",
  areaServed: "FR",
  sameAs: [],
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://bycosta.eu/#website",
  name: "byCosta",
  url: "https://bycosta.eu",
  publisher: { "@id": "https://bycosta.eu/#organization" },
  inLanguage: "fr-FR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${newsreader.variable} ${instrumentSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <JsonLd data={ORGANIZATION_JSON_LD} />
        <JsonLd data={WEBSITE_JSON_LD} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Aller au contenu principal
        </a>
        <SmoothScrollProvider>
          <Navbar />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
