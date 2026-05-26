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

export const metadata: Metadata = {
  title: "TEKTIA — Automatizamos tu empresa",
  description:
    "Automatizaciones de procesos, CRM, chatbots, migraciones y páginas web para empresas chilenas. Construimos herramientas que trabajan por ti 24/7.",
  keywords: ["automatización", "CRM", "chatbot", "páginas web", "Chile", "tecnología"],
  openGraph: {
    title: "TEKTIA — Automatizamos tu empresa",
    description: "Transformamos procesos manuales en sistemas automáticos.",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
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
        {children}
      </body>
    </html>
  );
}

