import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const SITE_URL = "https://tektia.cl";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TEKTIA | Automatización, CRM y chatbots con IA en Chile",
    template: "%s | TEKTIA",
  },
  description:
    "Automatizamos los procesos de tu empresa: CRM a medida, chatbots con IA para WhatsApp, migración de datos y páginas web. Cotiza gratis y recibe tu propuesta en 24 horas.",
  applicationName: "TEKTIA",
  openGraph: {
    title: "TEKTIA | Automatización, CRM y chatbots con IA en Chile",
    description:
      "Transformamos procesos manuales en sistemas automáticos: CRM, chatbots con IA, automatizaciones y páginas web para empresas chilenas.",
    url: SITE_URL,
    siteName: "TEKTIA",
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TEKTIA | Automatización, CRM y chatbots con IA en Chile",
    description:
      "CRM, chatbots con IA, automatizaciones y páginas web para empresas chilenas.",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_URL}/#empresa`,
      name: "TEKTIA",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-tektia.svg`,
      image: `${SITE_URL}/opengraph-image`,
      description:
        "Automatización de procesos, CRM personalizados, chatbots con IA, migración de datos y páginas web para empresas en Chile.",
      telephone: "+56928764172",
      email: "contacto@tektia.cl",
      areaServed: { "@type": "Country", name: "Chile" },
      address: { "@type": "PostalAddress", addressCountry: "CL" },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
      ],
      knowsAbout: [
        "Automatización de procesos",
        "CRM",
        "Chatbots con inteligencia artificial",
        "WhatsApp Business",
        "Migración de datos",
        "Desarrollo web",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#web`,
      url: SITE_URL,
      name: "TEKTIA",
      inLanguage: "es-CL",
      publisher: { "@id": `${SITE_URL}/#empresa` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es-CL"
      className={`${inter.variable} ${syne.variable} h-full`}
    >
      <head>
        {/* Google Ads — Global Site Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17907784712"
          strategy="afterInteractive"
        />
        <Script id="google-ads-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17907784712');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#F9F8F6] text-[#111111]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}

