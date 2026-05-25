"use client";

import { motion } from "framer-motion";
import { Workflow, BarChart3, Bot, Database, Globe, ArrowRight } from "lucide-react";

const services = [
  {
    id: "auto",
    icon: Workflow,
    title: "Automatización de Procesos",
    description:
      "Conectamos tus herramientas para que trabajen solas. Desde enviar un correo automático hasta procesar cientos de pedidos sin tocar nada.",
    tags: ["Make", "n8n", "Zapier", "APIs"],
    span: "lg:col-span-2 lg:row-span-2",
    large: true,
  },
  {
    id: "crm",
    icon: BarChart3,
    title: "CRM Personalizado",
    description: "Para que nunca pierdas el seguimiento de un cliente. Tu pipeline de ventas en automático.",
    tags: ["HubSpot", "Notion", "Custom"],
    span: "lg:col-span-1",
    large: false,
  },
  {
    id: "chatbot",
    icon: Bot,
    title: "Chatbot con IA",
    description: "Para que tu empresa responda aunque estés durmiendo. Integrado con tu CRM.",
    tags: ["WhatsApp", "OpenAI", "Instagram"],
    span: "lg:col-span-1",
    large: false,
  },
  {
    id: "migration",
    icon: Database,
    title: "Migración de Datos",
    description: "El paso previo a automatizar bien. Tus datos limpios, ordenados y listos para trabajar.",
    tags: ["SQL", "BigQuery", "Excel"],
    span: "lg:col-span-1",
    large: false,
  },
  {
    id: "web",
    icon: Globe,
    title: "Páginas Web",
    description: "Para que tus leads lleguen solos a tu sistema. Diseñado para convertir, no solo para verse bien.",
    tags: ["Next.js", "SEO", "E-commerce"],
    span: "lg:col-span-1",
    large: false,
  },
];

export default function BentoServices() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-white border-t border-[#E8E5E0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">Servicios</p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#111111] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Todo lo que necesitas,<br />en un solo lugar.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`group relative flex flex-col justify-between gap-6 rounded-2xl border border-[#E8E5E0] hover:border-[#F97316]/40 hover:shadow-lg transition-all duration-300 overflow-hidden ${s.span} ${
                s.large ? "p-8 bg-[#111111]" : "p-6 bg-[#F9F8F6]"
              }`}
            >
              {/* Large card has gradient background element */}
              {s.large && (
                <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-[#F97316]/10 blur-3xl pointer-events-none" />
              )}

              <div className="flex flex-col gap-4 relative">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    s.large ? "bg-[#F97316]/15" : "bg-[#FEF3E8]"
                  }`}
                >
                  <s.icon size={20} className={s.large ? "text-[#F97316]" : "text-[#F97316]"} />
                </div>

                <div>
                  <h3
                    className={`font-black mb-2 leading-snug ${
                      s.large ? "text-2xl text-white" : "text-base text-[#111111]"
                    }`}
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className={`leading-relaxed ${
                      s.large ? "text-[#9CA3AF] text-base" : "text-[#4B5563] text-sm"
                    }`}
                  >
                    {s.description}
                  </p>
                </div>
              </div>

              <div className="flex items-end justify-between relative">
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full border ${
                        s.large
                          ? "text-[#6B7280] border-white/10 bg-white/5"
                          : "text-[#9CA3AF] border-[#E8E5E0] bg-white"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {s.large && (
                  <a
                    href="#contacto"
                    className="shrink-0 ml-4 flex items-center gap-1.5 text-[#F97316] font-bold text-sm group-hover:gap-2.5 transition-all"
                  >
                    Cotizar <ArrowRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
