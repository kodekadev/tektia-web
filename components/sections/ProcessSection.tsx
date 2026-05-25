"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Nos cuentas tu problema",
    description:
      "30 minutos por WhatsApp o videollamada. Sin PowerPoints ni vendehumo — escuchamos qué proceso te está costando tiempo o plata.",
    detail: "Gratis · Sin compromiso",
  },
  {
    num: "02",
    title: "Te proponemos una solución",
    description:
      "En 24 horas te enviamos una propuesta clara: qué vamos a construir, cuánto cuesta y en cuántos días lo tienes listo.",
    detail: "Propuesta en 24 hrs",
  },
  {
    num: "03",
    title: "Lo construimos y lo lanzamos",
    description:
      "Tú ves el avance en tiempo real. Cuando está listo, lo lanzamos juntos y te enseñamos a usarlo. Y seguimos disponibles después.",
    detail: "Soporte incluido",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 sm:py-32 bg-[#F9F8F6] border-t border-[#E8E5E0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-3">
            Cómo trabajamos
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-[#111111] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Simple. Sin sorpresas.
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-10 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px bg-gradient-to-r from-[#E8E5E0] via-[#F97316]/40 to-[#E8E5E0]" />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative flex flex-col gap-5"
            >
              {/* Number bubble */}
              <div className="relative w-20 h-20 rounded-2xl bg-white border-2 border-[#F97316] flex items-center justify-center shrink-0 shadow-sm">
                <span
                  className="text-2xl font-black text-[#F97316]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {step.num}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3
                  className="text-lg font-black text-[#111111]"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#4B5563] text-sm leading-relaxed">{step.description}</p>
                <span className="inline-flex self-start text-xs font-bold text-[#C2580B] bg-[#FEF3E8] px-2.5 py-1 rounded-full border border-[#F97316]/20 mt-1">
                  {step.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
