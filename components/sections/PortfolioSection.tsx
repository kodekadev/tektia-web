"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    client: "Biomeditech",
    category: "Automatización · Web",
    description:
      "Plataforma web y automatización de gestión de clientes para empresa de tecnología médica.",
    tags: ["Next.js", "CRM", "Automatización"],
  },
  {
    client: "Luna de Cuarzo Cochiguaz",
    category: "Página Web · Reservas",
    description:
      "Sitio web con sistema de reservas online integrado para retiro espiritual en el Valle del Elqui.",
    tags: ["Diseño web", "Reservas", "SEO"],
  },
  {
    client: "Proyecto Jobs",
    category: "IA · Automatización",
    description:
      "Bot que identifica ofertas laborales relevantes y gestiona postulaciones automáticamente con IA.",
    tags: ["Python", "IA", "BigQuery"],
  },
  {
    client: "Clínica Bienestar",
    category: "Automatización · Salud",
    description:
      "Sistema de agenda médica automática con recordatorios por WhatsApp y confirmación de citas.",
    tags: ["WhatsApp", "Automatización", "CRM"],
  },
  {
    client: "Renta360",
    category: "CRM · Inmobiliaria",
    description:
      "CRM personalizado para gestión de leads inmobiliarios con seguimiento automático y cotizaciones.",
    tags: ["CRM", "Leads", "Email"],
  },
  {
    client: "Transportes Austral",
    category: "Automatización · Logística",
    description:
      "Sistema de tracking de flota y notificaciones automáticas a clientes sobre el estado de sus envíos.",
    tags: ["Tracking", "WhatsApp", "APIs"],
  },
  {
    client: "Colegio Digital Futuro",
    category: "Plataforma Web",
    description:
      "Plataforma educativa con portal para apoderados, notas en línea y comunicados automáticos.",
    tags: ["Next.js", "Portal", "Notificaciones"],
  },
  {
    client: "Moda Ñuñoa",
    category: "E-commerce · Web",
    description:
      "Tienda online con catálogo dinámico, carrito de compra y sincronización automática de stock.",
    tags: ["E-commerce", "Stock", "Pagos"],
  },
  {
    client: "Constructora Andina",
    category: "Gestión · Digital",
    description:
      "Digitalización de gestión de obras: presupuestos, avances y comunicación con subcontratistas.",
    tags: ["Dashboard", "Cotizaciones", "Excel"],
  },
  {
    client: "Delivery Express",
    category: "Chatbot · Pedidos",
    description:
      "Chatbot de WhatsApp para recepción de pedidos, confirmación y asignación automática a repartidores.",
    tags: ["Chatbot", "WhatsApp", "IA"],
  },
];

const VISIBLE = 3;

export default function PortfolioSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const maxIndex = cases.length - VISIBLE;

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => Math.max(0, Math.min(prev + dir, maxIndex)));
  };

  const startAuto = () => {
    autoRef.current = setInterval(() => {
      setCurrent((prev) => {
        if (prev >= maxIndex) { setDirection(-1); return 0; }
        setDirection(1);
        return prev + 1;
      });
    }, 3500);
  };

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const pause = () => { if (autoRef.current) clearInterval(autoRef.current); };
  const resume = () => startAuto();

  const visibleCases = cases.slice(current, current + VISIBLE);

  return (
    <section id="casos" className="py-24 sm:py-32 bg-[#F9F8F6] border-t border-[#E8E5E0]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
              Casos de éxito
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-[#111111] leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Lo que hemos construido
            </h2>
            <p className="text-[#4B5563] text-lg mt-3 max-w-lg">
              Proyectos reales, resultados concretos para empresas chilenas.
            </p>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => { pause(); go(-1); resume(); }}
              disabled={current === 0}
              className="w-10 h-10 rounded-full border border-[#E8E5E0] flex items-center justify-center text-[#4B5563] hover:border-[#F97316] hover:text-[#F97316] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => { pause(); go(1); resume(); }}
              disabled={current >= maxIndex}
              className="w-10 h-10 rounded-full border border-[#E8E5E0] flex items-center justify-center text-[#4B5563] hover:border-[#F97316] hover:text-[#F97316] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
              aria-label="Siguiente"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Carousel — desktop 3 cols, mobile 1 col scroll */}
        <div
          className="hidden md:grid grid-cols-3 gap-5 overflow-hidden"
          onMouseEnter={pause}
          onMouseLeave={resume}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {visibleCases.map((c) => (
              <motion.div
                key={c.client}
                initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="flex flex-col gap-4 p-7 rounded-2xl bg-white border border-[#E8E5E0] hover:border-[#F97316]/30 hover:shadow-lg transition-all duration-300"
              >
                <span
                  className="text-4xl font-black leading-none"
                  style={{
                    fontFamily: "var(--font-syne)",
                    background: "linear-gradient(135deg,#F97316,#F59E0B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {String(cases.indexOf(c) + 1).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1.5 flex-1">
                  <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-widest">
                    {c.category}
                  </p>
                  <h3
                    className="text-base font-bold text-[#111111] leading-snug"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {c.client}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {c.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-[#C2580B] bg-[#FEF3E8] px-2.5 py-1 rounded-full border border-[#F97316]/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {cases.map((c, i) => (
            <div
              key={c.client}
              className="snap-start shrink-0 w-[80vw] flex flex-col gap-4 p-6 rounded-2xl bg-white border border-[#E8E5E0]"
            >
              <span
                className="text-3xl font-black"
                style={{
                  fontFamily: "var(--font-syne)",
                  background: "linear-gradient(135deg,#F97316,#F59E0B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-col gap-1 flex-1">
                <p className="text-xs text-[#9CA3AF] font-medium uppercase tracking-widest">
                  {c.category}
                </p>
                <h3
                  className="text-base font-bold text-[#111111]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {c.client}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{c.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-[#C2580B] bg-[#FEF3E8] px-2.5 py-1 rounded-full border border-[#F97316]/15"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="hidden md:flex justify-center gap-1.5 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { pause(); setDirection(i > current ? 1 : -1); setCurrent(i); resume(); }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-6 bg-[#F97316]" : "w-1.5 bg-[#E8E5E0]"
              }`}
              aria-label={`Ir a grupo ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

