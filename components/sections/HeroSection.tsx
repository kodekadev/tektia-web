"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, Shield, Clock, Zap } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  "Automatización de procesos",
  "CRM personalizado",
  "Chatbot con IA",
  "Migración de datos",
  "Página web",
  "Otro",
];

export default function HeroSection() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) router.push("/gracias");
      else setError("Algo salió mal. Escríbenos por WhatsApp.");
    } catch {
      setError("Algo salió mal. Escríbenos por WhatsApp.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F9F8F6]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F97316] via-[#F59E0B] to-[#F97316]" />

      <div className="relative w-full max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col gap-7"
          >
            <span className="inline-flex self-start items-center gap-2 bg-[#FEF3E8] text-[#C2580B] text-xs font-bold px-3 py-1.5 rounded-full border border-[#F97316]/25">
              🇨🇱 Para empresas chilenas
            </span>

            <div className="flex flex-col gap-3">
              <h1
                className="text-5xl sm:text-6xl font-black leading-[1.02] tracking-tight text-[#111111]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Haz en segundos{" "}
                <span style={{ background: "linear-gradient(135deg,#F97316,#F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  lo que hoy te toma horas.
                </span>
              </h1>
              <p className="text-lg text-[#4B5563] leading-relaxed max-w-md">
                Automatizamos los procesos repetitivos de tu negocio para que tú te enfoques en crecer — no en administrar.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: Zap, text: "Cotización gratis en 24 horas" },
                { icon: Clock, text: "Implementación en días, no meses" },
                { icon: Shield, text: "Sin contratos largos ni letra chica" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-[#4B5563]">
                  <div className="w-6 h-6 rounded-full bg-[#FEF3E8] flex items-center justify-center shrink-0">
                    <Icon size={12} className="text-[#F97316]" />
                  </div>
                  {text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
          >
            <div className="bg-white rounded-2xl shadow-xl border border-[#E8E5E0] p-7 sm:p-8">
              <h2
                className="text-xl font-black text-[#111111] mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Cotiza gratis hoy
              </h2>
              <p className="text-sm text-[#9CA3AF] mb-6">
                Te respondemos antes de 24 horas, sin compromiso.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="border border-[#E8E5E0] rounded-xl px-4 py-3 text-sm text-[#111] placeholder-[#C4C2BE] focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+56 9..."
                    className="border border-[#E8E5E0] rounded-xl px-4 py-3 text-sm text-[#111] placeholder-[#C4C2BE] focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                  />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@email.com"
                    className="border border-[#E8E5E0] rounded-xl px-4 py-3 text-sm text-[#111] placeholder-[#C4C2BE] focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all"
                  />
                </div>
                <select
                  required
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="border border-[#E8E5E0] rounded-xl px-4 py-3 text-sm text-[#111] focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/20 transition-all bg-white cursor-pointer"
                >
                  <option value="" disabled>¿Qué necesitas?</option>
                  {services.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>

                {error && <p className="text-xs text-red-500">{error}</p>}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#F97316] disabled:opacity-60 text-white font-black text-base py-4 rounded-xl transition-all duration-300 mt-1 group"
                >
                  {loading ? "Enviando..." : "Quiero una cotización gratis"}
                  {!loading && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                </button>

                <p className="text-xs text-center text-[#C4C2BE]">
                  Sin spam · Solo te escribimos para tu cotización
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
