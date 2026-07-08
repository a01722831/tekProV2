import type { Metadata, Viewport } from "next";
import { Barlow, Lato } from "next/font/google";
import { contact } from "@/data/site";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap"
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Tek Products Monterrey | Materiales ecológicos para construcción",
    template: "%s | Tek Products Monterrey"
  },
  description:
    "Catálogo de productos ecológicos para decks, pergolados, fachadas, plafones, muros, pisos y soluciones de bajo mantenimiento.",
  metadataBase: new URL("https://tekproductsmonterrey.com"),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Tek Products Monterrey",
    description:
      "Soluciones ecológicas, durables y de bajo mantenimiento para construcción y acabados arquitectónicos.",
    locale: "es_MX",
    type: "website",
    siteName: "Tek Products Monterrey"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  themeColor: "#15803d"
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: contact.brand,
  telephone: contact.phoneRaw,
  areaServed: contact.serviceArea,
  url: "https://tekproductsmonterrey.com",
  description:
    "Comercialización de materiales ecológicos y sostenibles para construcción y acabados arquitectónicos."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX" className={`${barlow.variable} ${lato.variable}`}>
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido principal
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
