"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard, Users, ClipboardList, Wrench, History,
  FileText, CheckCircle2, Phone, ChevronDown, ArrowRight, Zap
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Dashboard en tiempo real",
    desc: "Ve de un vistazo cuántos leads tienes, cotizaciones enviadas, aprobadas y rechazadas. Todo actualizado al instante.",
  },
  {
    icon: Users,
    title: "Gestión de leads y clientes",
    desc: "Captura leads desde tu web, haz seguimiento por WhatsApp o email, y conviértelos en clientes con un clic.",
  },
  {
    icon: Wrench,
    title: "Catálogo de servicios dinámico",
    desc: "Crea tus propios servicios, categorías y precios. Funciona para cualquier rubro: médico, veterinario, ascensores, climatización y más.",
  },
  {
    icon: ClipboardList,
    title: "Cotizaciones profesionales en PDF",
    desc: "Genera cotizaciones con tu logo, detalle de servicios, precios y condiciones. Lista para enviar en segundos.",
  },
  {
    icon: History,
    title: "Historial completo",
    desc: "Revisa todas las cotizaciones enviadas, su estado y el historial de cada cliente. Sin perder nada.",
  },
  {
    icon: FileText,
    title: "Protocolos de mantención",
    desc: "Adjunta protocolos técnicos a cada cliente. Ideal para mantenciones preventivas y correctivas recurrentes.",
  },
];

const rubros = [
  "🏥 Equipos médicos",
  "🐾 Clínicas veterinarias",
  "🛗 Ascensores",
  "❄️ Climatización / HVAC",
  "💄 Equipos de estética",
  "🔥 Calderas y extintores",
  "⚡ Servicios eléctricos",
  "🔧 Cualquier empresa de servicios",
];

const faqs = [
  {
    q: "¿Necesito saber de tecnología para usarlo?",
    a: "No. Nosotros configuramos todo — tu catálogo, servicios y categorías. Solo necesitas aprender a usarlo, y eso te lo enseñamos en la misma sesión de entrega.",
  },
  {
    q: "¿Funciona para mi rubro específico?",
    a: "Sí. El catálogo es 100% dinámico — tú defines los servicios, categorías y precios. Ya lo hemos implementado en empresas de equipos médicos, y aplica exactamente igual para veterinarias, ascensores, climatización y más.",
  },
  {
    q: "¿Cuánto demora la implementación?",
    a: "Entre 5 y 10 días hábiles desde que nos das la información de tu empresa y catálogo de servicios.",
  },
  {
    q: "¿Qué pasa si necesito algo personalizado?",
    a: "Lo evaluamos sin costo. Muchas funcionalidades extra se pueden agregar como parte del proyecto o en una segunda etapa.",
  },
  {
    q: "¿El precio mensual incluye soporte?",
    a: "Sí. Soporte por WhatsApp, actualizaciones del sistema y hosting incluidos en la mensualidad.",
  },
];

const WHATSAPP = "https://wa.me/56928764172?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20el%20CRM%20de%20TEKTIA";

export default function LandingCRM() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "CRM Personalizado" });
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

      {/* Header */}
      <header className="bg-white border-b border-[#E8E5E0] px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>TEKTIA</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
          </div>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#F97316] transition-colors">
            <Phone size={15} />
            +56 9 2876 4172
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 sm:py-24 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-[#FEF3E8] text-[#C2580B] text-xs font-bold px-3 py-1.5 rounded-full w-fit border border-[#F97316]/20">
              <Zap size={12} />
              CRM para empresas de servicios y mantenciones
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-[#111111] leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
              Deja de cotizar{" "}
              <span style={{ background: "linear-gradient(135deg, #F97316, #F59E0B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                en Excel.
              </span>
              <br />Tu CRM está listo.
            </h1>

            <p className="text-[#4B5563] text-lg leading-relaxed max-w-lg">
              Sistema completo para gestionar leads, clientes, servicios y cotizaciones profesionales en PDF. Configurado para tu rubro en menos de 2 semanas.
            </p>

            <ul className="flex flex-col gap-3">
              {[
                "Catálogo de servicios 100% personalizable",
                "Cotizaciones en PDF listas para enviar",
                "Desde $490.000 CLP + $99.000/mes",
              ].map((text) => (
                <li key={text} className="flex items-center gap-2.5 text-sm text-[#374151]">
                  <CheckCircle2 size={16} className="text-[#F97316] shrink-0" />
                  {text}
                </li>
              ))}
            </ul>

            {/* Caso real */}
            <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-[#E8E5E0]">
              <div className="w-10 h-10 rounded-full bg-[#FEF3E8] flex items-center justify-center shrink-0 text-lg">🏥</div>
              <div>
                <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-0.5">Caso real</p>
                <p className="text-sm text-[#111111] font-semibold">Biomeditech — Servicio técnico de equipos médicos</p>
                <p className="text-xs text-[#6B7280] mt-0.5">Pasó de Excel y WhatsApp a un CRM completo con gestión de leads, cotizaciones PDF y protocolos de mantención.</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white rounded-2xl border border-[#E8E5E0] shadow-xl p-8">
            <div className="mb-6">
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest mb-1">Demo gratuita</p>
              <h2 className="text-2xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>
                Agenda tu demo
              </h2>
              <p className="text-sm text-[#6B7280] mt-1">Te mostramos el sistema en vivo. Sin compromisos.</p>
            </div>

            <form onSubmit={submit} className="flex flex-col gap-4">
              {[
                { name: "name", label: "Nombre", type: "text", placeholder: "Tu nombre" },
                { name: "phone", label: "Teléfono", type: "tel", placeholder: "+56 9 ..." },
                { name: "email", label: "Email", type: "email", placeholder: "tu@empresa.cl" },
              ].map((f) => (
                <div key={f.name} className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-[#374151]">{f.label}</label>
                  <input name={f.name} type={f.type} required
                    value={form[f.name as keyof typeof form]}
                    onChange={handle}
                    placeholder={f.placeholder}
                    className="w-full px-4 py-3 rounded-xl border border-[#E8E5E0] bg-[#F9F8F6] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 transition-all"
                  />
                </div>
              ))}

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#374151]">¿A qué rubro pertenece tu empresa?</label>
                <select name="service" required value={form.service} onChange={handle}
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E5E0] bg-[#F9F8F6] text-sm focus:outline-none focus:border-[#F97316] focus:ring-2 focus:ring-[#F97316]/10 transition-all appearance-none cursor-pointer">
                  <option value="CRM Personalizado">Selecciona tu rubro</option>
                  <option>Equipos médicos / Biomédico</option>
                  <option>Clínica veterinaria</option>
                  <option>Ascensores y elevadores</option>
                  <option>Climatización / HVAC</option>
                  <option>Equipos de estética</option>
                  <option>Servicios eléctricos</option>
                  <option>Otro rubro de servicios</option>
                </select>
              </div>

              <button type="submit" disabled={loading}
                className="w-full py-3.5 rounded-xl bg-[#111111] hover:bg-[#F97316] text-white font-bold text-sm transition-all duration-200 disabled:opacity-60 mt-1">
                {loading ? "Enviando..." : "Quiero ver el sistema en vivo →"}
              </button>
              <p className="text-center text-xs text-[#9CA3AF]">Sin spam. Te contactamos para coordinar la demo.</p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Rubros */}
      <section className="py-12 px-6 bg-white border-t border-[#E8E5E0]">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-xs font-bold text-[#9CA3AF] uppercase tracking-widest mb-6">Funciona para cualquier empresa de servicios</p>
          <div className="flex flex-wrap justify-center gap-3">
            {rubros.map((r) => (
              <span key={r} className="px-4 py-2 rounded-full border border-[#E8E5E0] bg-[#F9F8F6] text-sm text-[#374151] font-medium">
                {r}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-6 bg-[#F9F8F6] border-t border-[#E8E5E0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">Lo que incluye</p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>
              Todo lo que necesitas para gestionar tu empresa
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <motion.div key={f.title}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }}
                className="flex flex-col gap-4 p-6 rounded-2xl bg-white border border-[#E8E5E0] hover:border-[#F97316]/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#FEF3E8] flex items-center justify-center">
                  <f.icon size={20} className="text-[#F97316]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#111111] mb-1.5" style={{ fontFamily: "var(--font-syne)" }}>{f.title}</h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-6 bg-white border-t border-[#E8E5E0]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">Precio</p>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] mb-10" style={{ fontFamily: "var(--font-syne)" }}>
            Simple y sin sorpresas
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {/* Setup */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl border border-[#E8E5E0] bg-[#F9F8F6] text-left">
              <p className="text-xs font-bold text-[#9CA3AF] uppercase tracking-widest">Pago único</p>
              <div>
                <span className="text-4xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>$490.000</span>
                <span className="text-[#6B7280] text-sm ml-1">CLP</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-[#4B5563]">
                {["Configuración completa del sistema", "Carga de tu catálogo de servicios", "Capacitación en vivo (1 sesión)", "Integración con tu sitio web"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#F97316] shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            {/* Monthly */}
            <div className="flex flex-col gap-4 p-8 rounded-2xl border-2 border-[#F97316] bg-[#111111] text-left relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-[#F97316] text-white text-xs font-bold px-2.5 py-1 rounded-full">Mensual</div>
              <p className="text-xs font-bold text-[#F97316] uppercase tracking-widest">Suscripción</p>
              <div>
                <span className="text-4xl font-black text-white" style={{ fontFamily: "var(--font-syne)" }}>$99.000</span>
                <span className="text-[#9CA3AF] text-sm ml-1">CLP/mes</span>
              </div>
              <ul className="flex flex-col gap-2.5 text-sm text-[#9CA3AF]">
                {["Hosting y base de datos incluidos", "Soporte por WhatsApp", "Actualizaciones del sistema", "Sin límite de usuarios"].map(i => (
                  <li key={i} className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#F97316] shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#F9F8F6] border-t border-[#E8E5E0]">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[#F97316] text-xs font-bold uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl font-black text-[#111111]" style={{ fontFamily: "var(--font-syne)" }}>Preguntas frecuentes</h2>
          </div>
          <div className="flex flex-col divide-y divide-[#E8E5E0]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-4">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left gap-4">
                  <span className="font-semibold text-sm text-[#111111]">{faq.q}</span>
                  <ChevronDown size={16} className={`shrink-0 text-[#9CA3AF] transition-transform duration-200 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && <p className="mt-3 text-sm text-[#4B5563] leading-relaxed">{faq.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-[#111111]">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            ¿Listo para ver el sistema en vivo?
          </h2>
          <p className="text-[#9CA3AF] text-base">Demo gratuita. Sin compromisos. Te lo mostramos funcionando.</p>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="px-8 py-3.5 rounded-xl bg-[#F97316] hover:bg-[#C2580B] text-white font-bold text-sm transition-colors text-center flex items-center justify-center gap-2">
              Agendar demo gratis <ArrowRight size={14} />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl border border-white/20 hover:border-white/40 text-white font-bold text-sm transition-colors text-center">
              💬 WhatsApp directo
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0D0D0D] py-6 px-6 text-center">
        <p className="text-[#4B5563] text-xs">
          © {new Date().getFullYear()} TEKTIA. Hecho en Chile 🇨🇱 ·{" "}
          <a href="mailto:contacto@tektia.cl" className="hover:text-white transition-colors">contacto@tektia.cl</a>
        </p>
      </footer>
    </div>
  );
}
