import type { Metadata } from "next";
import { Newsreader, Instrument_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

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
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
