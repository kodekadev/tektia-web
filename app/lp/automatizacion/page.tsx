"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Workflow, BarChart3, Bot, Database, Globe,
  CheckCircle2, Zap, Clock, Shield, Phone, ChevronDown
} from "lucide-react";

const services = [
  { icon: Workflow, title: "Automatización de Procesos", desc: "Conectamos tus herramientas para que trabajen solas. Sin tocar nada." },
  { icon: BarChart3, title: "CRM Personalizado", desc: "Tu pipeline de ventas en automático. Sin perder ningún cliente." },
  { icon: Bot, title: "Chatbot con IA", desc: "Tu empresa responde aunque estés durmiendo. 24/7." },
  { icon: Database, title: "Migración de Datos", desc: "Tus datos limpios, ordenados y listos para automatizar." },
  { icon: Globe, title: "Páginas Web", desc: "Diseñadas para convertir leads en clientes reales." },
];

const faqs = [
  { q: "¿Cuánto demora implementar una automatización?", a: "La mayoría de los proyectos están listos en 1 a 2 semanas. Proyectos más complejos pueden tomar 3-4 semanas." },
  { q: "¿Necesito saber de tecnología?", a: "No. Nosotros nos encargamos de todo. Tú solo nos cuentas qué proceso quieres automatizar y nosotros lo hacemos realidad." },
  { q: "¿Qué pasa si algo falla después?", a: "Incluimos soporte post-entrega. Si algo falla, lo reparamos sin costo adicional." },
  { q: "¿Es caro?", a: "Depende del proyecto. Tenemos opciones desde 3 UF para automatizaciones simples. La cotización es siempre gratis." },
];

const WHATSAPP = "https://wa.me/56928764172?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20TEKTIA";

export default function LandingAds() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "" });
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      router.push("/gracias");
    } catch {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#111111]" style={{ fontFamily: "var(--font-inter)" }}>

      {/* ── Minimal header ── */}
      <header className="bg-white border-b border-[#E8E5E0] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>
              TEKTIA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
          </div>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#F97316] transition-colors"
          >
            <Phone size={15} />
            +56 9 2876 4172
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2 bg-[#FEF3E8] text-[#C2580B] text-xs font-bold px-3 py-1.5 rounded-full w-fit border border-[#F97316]/20">
              <Zap size={12} />
              Automatización para empresas chilenas
            </div>

            <h1
              className="text-4xl sm:text-5xl font-black text-[#111111] leading-tight"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Deja de hacer{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #F97316, #F59E0B)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                a mano
              </span>{" "}
              lo que una máquina puede hacer por ti.
            </h1>

            <p className="text-[#4B5563] text-lg leading-relaxed max-w-lg">
              Automatizamos los procesos de tu empresa para que puedas enfocarte en lo que importa. CRM, chatbots, páginas web y más.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                { icon: Zap, text: "Implementación en 1-2 semanas" },
                { icon: Clock, text: "Ahorra hasta 15 horas semanales" },
                { icon: Shield, text: "Soporte incluido post-entrega" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-[#374151]">
                  <Icon size={16} className="text-[#F97316] shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Metrics strip */}
            <div className="flex gap-6 pt-2">
              {[
                { val: "10+", label: "empresas automatizadas" },
                { val: "24h", label: "primera propuesta" },
                { val: "100%", label: "soporte incluido" },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col">
                  <span className="text-2xl font-black text-[#F97316]" style={{ fontFamily: "var(--font-syne)" }}>{val}</span>
                  <span className="text-xs text-[#6B7280]">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-[#E8E5E0] shadow-xl p-8"
          >
            <div className="mb-6">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-1">Cotización gratuita</p>
              <h2 className="text-2xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>
                Cuéntanos tu problema
              </h2>
              <p className="text-sm text-[#6B7280] mt-1">Te respondemos en menos de 24 horas.</p>
            </div>

            <form onSubmit={submit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#374151]">Nombre</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handle}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E5E0] bg-[#F9F8F6] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#374151]">Teléfono</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  value={form.phone}
                  onChange={handle}
                  placeholder="+56 9 ..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E5E0] bg-[#F9F8F6] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#374151]">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handle}
                  placeholder="tu@empresa.cl"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E5E0] bg-[#F9F8F6] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 transition-all"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#374151]">¿Qué necesitas?</label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handle}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E5E0] bg-[#F9F8F6] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Selecciona un servicio</option>
                  <option>Automatización de Procesos</option>
                  <option>CRM Personalizado</option>
                  <option>Chatbot con IA</option>
                  <option>Migración de Datos</option>
                  <option>Página Web</option>
                  <option>No sé / Necesito asesoría</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#111111] hover:bg-[#F97316] text-white font-bold text-sm transition-all duration-200 disabled:opacity-60 mt-1"
              >
                {loading ? "Enviando..." : "Quiero mi cotización gratis →"}
              </button>

              <p className="text-center text-xs text-[#9CA3AF]">
                Sin spam. Te contactamos solo para hablar de tu proyecto.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E5E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">Lo que hacemos</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>
              Todo lo que tu empresa necesita
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex gap-4 p-5 rounded-2xl border border-[#E8E5E0] bg-[#F9F8F6] hover:border-[#F97316]/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FEF3E8] flex items-center justify-center shrink-0">
                  <s.icon size={18} className="text-[#F97316]" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#111111] mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                    {s.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA card */}
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 5 * 0.07 }}
              className="flex gap-4 p-5 rounded-2xl bg-[#111111] border border-transparent hover:border-[#F97316]/40 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F97316]/15 flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} className="text-[#F97316]" />
              </div>
              <div>
                <h3 className="font-bold text-sm text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                  ¿No sabes cuál necesitas?
                </h3>
                <p className="text-xs text-[#6B7280] leading-relaxed">Cuéntanos tu problema y te asesoramos gratis por WhatsApp.</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Social proof ── */}
      <section className="py-14 px-6 bg-[#F97316]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
          {[
            { val: "10+", label: "Empresas automatizadas" },
            { val: "24h", label: "Primera propuesta" },
            { val: "15hrs", label: "Ahorro semanal promedio" },
            { val: "100%", label: "Soporte post-entrega" },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center gap-1">
              <span className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-syne)" }}>{val}</span>
              <span className="text-sm text-white/70">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E5E0]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>
              Preguntas frecuentes
            </h2>
          </div>

          <div className="flex flex-col divide-y divide-[#E8E5E0]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left gap-4"
                >
                  <span className="font-semibold text-sm text-[#111111]">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`shrink-0 text-[#9CA3AF] transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-16 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            ¿Listo para dejar de perder tiempo?
          </h2>
          <p className="text-[#9CA3AF] text-base">
            La cotización es gratis. Sin compromisos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#C2580B] text-white font-bold text-sm transition-colors text-center"
            >
              Cotizar ahora — es gratis
            </a>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white font-bold text-sm transition-colors text-center"
            >
              💬 WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* ── Minimal footer ── */}
      <footer className="bg-[#0D0D0D] py-6 px-6 text-center">
        <p className="text-[#4B5563] text-xs">
          © {new Date().getFullYear()} TEKTIA. Hecho en Chile 🇨🇱 ·{" "}
          <a href="mailto:contacto@tektia.cl" className="hover:text-white transition-colors">
            contacto@tektia.cl
          </a>
        </p>
      </footer>
    </div>
  );
}
