"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const pains = [
  { emoji: "💬", text: "Responder los mismos WhatsApp todos los días" },
  { emoji: "📊", text: "Actualizar planillas Excel una por una" },
  { emoji: "😤", text: "Perder clientes por no hacer seguimiento a tiempo" },
  { emoji: "📋", text: "Cotizar manualmente cada vez que llega un cliente" },
  { emoji: "🔁", text: "Hacer el mismo proceso desde cero cada semana" },
  { emoji: "🌐", text: "Tener una web que no genera nada" },
];

export default function PainSection() {
  return (
    <section className="bg-[#111111] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest">
              Seamos honestos
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              ¿Tu equipo sigue haciendo esto?
            </h2>
            <p className="text-[#6B7280] text-lg leading-relaxed">
              Si alguna de estas situaciones te suena conocida, estás perdiendo tiempo y dinero que podrías estar invirtiendo en hacer crecer tu negocio.
            </p>
            <a
              href="#servicios"
              className="inline-flex self-start items-center gap-2 text-[#F97316] font-bold text-sm hover:gap-3 transition-all"
            >
              Ver cómo lo resolvemos <ArrowRight size={15} />
            </a>
          </motion.div>

          {/* Right — pain cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {pains.map((p, i) => (
              <motion.div
                key={p.text}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex items-start gap-3 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] rounded-xl p-4 transition-colors"
              >
                <span className="text-xl shrink-0 mt-0.5">{p.emoji}</span>
                <p className="text-[#9CA3AF] text-sm leading-snug">{p.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 p-6 rounded-2xl border border-[#F97316]/20 bg-[#F97316]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <p className="text-white font-semibold max-w-lg">
            💡 En promedio, las empresas que automatizamos{" "}
            <span className="text-[#F97316]">recuperan entre 6 y 15 horas semanales</span>{" "}
            de trabajo manual.
          </p>
          <a
            href="#contacto"
            className="shrink-0 inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#C2580B] text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors whitespace-nowrap"
          >
            Quiero recuperar mi tiempo <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
