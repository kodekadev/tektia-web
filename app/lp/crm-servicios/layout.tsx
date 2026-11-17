import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CRM para empresas de servicios en Chile",
  description:
    "CRM para gestionar leads, clientes, servicios y cotizaciones profesionales en PDF. Configurado para tu rubro en menos de 2 semanas. Cotiza gratis.",
  alternates: { canonical: "/lp/crm-servicios" },
  openGraph: {
    title: "CRM para empresas de servicios en Chile | TEKTIA",
    description:
      "Leads, clientes, servicios y cotizaciones en PDF en un solo sistema, configurado para tu rubro.",
    url: "/lp/crm-servicios",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
