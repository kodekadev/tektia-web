"use client";

import { motion } from "framer-motion";
import { Workflow, BarChart3, Bot, Database, Globe } from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Automatización de Procesos",
    description:
      "Eliminamos tareas repetitivas conectando tus herramientas. Los datos fluyen solos, sin errores ni tiempo perdido.",
    tags: ["Make", "n8n", "Zapier", "APIs"],
  },
  {
    icon: BarChart3,
    title: "CRM Personalizado",
    description:
      "Un CRM construido para tu negocio. Gestiona clientes, ventas y seguimientos desde un solo lugar.",
    tags: ["HubSpot", "Notion", "Airtable", "Custom"],
  },
  {
    icon: Bot,
    title: "Chatbot con IA",
    description:
      "Atiende a tus clientes 24/7 por WhatsApp, Instagram o tu web. Integrado con tu CRM.",
    tags: ["WhatsApp", "OpenAI", "Instagram", "Web"],
  },
  {
    icon: Database,
    title: "Migración de Datos",
    description:
      "Movemos tu información de un sistema a otro sin pérdidas. Limpieza, transformación y validación.",
    tags: ["SQL", "BigQuery", "Excel", "APIs"],
  },
  {
    icon: Globe,
    title: "Páginas Web",
    description:
      "Sitios rápidos, bien diseñados y optimizados para Google. Desde landing pages hasta plataformas.",
    tags: ["Next.js", "SEO", "CMS", "E-commerce"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-white border-t border-[#E8E5E0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
            Servicios
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#111111] mb-3 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Lo que construimos
          </h2>
          <p className="text-[#4B5563] text-lg max-w-lg">
            Soluciones a medida para que tu empresa opere más rápido con menos esfuerzo.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={card}
              className={`group flex flex-col gap-4 p-6 rounded-2xl border border-[#E8E5E0] hover:border-[#F97316]/40 hover:shadow-md transition-all duration-300 bg-[#F9F8F6] ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-[#FEF3E8] flex items-center justify-center group-hover:bg-[#F97316]/15 transition-colors">
                <s.icon size={20} className="text-[#F97316]" />
              </div>

              <div className="flex-1">
                <h3
                  className="text-base font-bold text-[#111111] mb-1.5"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {s.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#9CA3AF] bg-white px-2.5 py-1 rounded-full border border-[#E8E5E0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
