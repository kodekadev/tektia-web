"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowRight, Clock } from "lucide-react";

const WHATSAPP = "https://wa.me/56928764172?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20sus%20servicios";

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-[#111111] py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-5">Hablemos</p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¿Listo para dejar de perder tiempo?
          </h2>
          <p className="text-[#6B7280] text-lg max-w-xl mx-auto mb-10">
            La primera conversación es gratis. En 30 minutos te decimos exactamente qué podemos hacer por tu empresa y cuánto costaría.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#C2580B] text-white font-black text-base px-8 py-4 rounded-xl transition-colors"
              style={{ boxShadow: "0 0 40px rgba(249,115,22,0.35)" }}
            >
              Cotizar ahora — es gratis <ArrowRight size={16} />
            </motion.a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-base px-8 py-4 rounded-xl transition-all"
            >
              <MessageCircle size={17} className="text-[#25D366]" />
              WhatsApp directo
            </a>
          </div>
        </motion.div>

        {/* Info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/10 pt-14"
        >
          {[
            {
              icon: MessageCircle,
              color: "#25D366",
              title: "WhatsApp",
              sub: "Respuesta en minutos",
              href: WHATSAPP,
            },
            {
              icon: Mail,
              color: "#F97316",
              title: "Email",
              sub: "contacto@TEKTIA.cl",
              href: "mailto:contacto@TEKTIA.cl",
            },
            {
              icon: Clock,
              color: "#6366F1",
              title: "Horario",
              sub: "Lun – Vie · 9:00 a 18:00",
              href: null,
            },
          ].map((c) => (
            <div
              key={c.title}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.04] border border-white/[0.07]"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${c.color}18` }}
              >
                <c.icon size={18} style={{ color: c.color }} />
              </div>
              <div>
                <p className="text-white font-bold text-sm">{c.title}</p>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                    className="text-[#6B7280] text-sm hover:text-white transition-colors">
                    {c.sub}
                  </a>
                ) : (
                  <p className="text-[#6B7280] text-sm">{c.sub}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

