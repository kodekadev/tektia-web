import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatización de procesos para empresas en Chile",
  description:
    "Automatizamos los procesos de tu empresa: CRM, chatbots con IA, integraciones y páginas web. Implementación en 1 a 2 semanas. Cotiza gratis.",
  alternates: { canonical: "/lp/automatizacion" },
  openGraph: {
    title: "Automatización de procesos para empresas en Chile | TEKTIA",
    description:
      "Deja de hacer a mano lo que una máquina puede hacer por ti. CRM, chatbots con IA e integraciones para tu empresa.",
    url: "/lp/automatizacion",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
