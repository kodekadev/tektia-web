const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP = "https://wa.me/56928764172?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20TEKTIA";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <span
                className="text-xl font-black text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                TEKTIA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#F97316]" />
            </div>
            <p className="text-[#6B7280] text-sm max-w-xs">
              Automatizamos empresas chilenas. CRM, chatbots, webs y procesos automáticos.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 items-center">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-[#6B7280] hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm bg-[#F97316] hover:bg-[#C2580B] text-white font-bold px-4 py-2 rounded-lg transition-colors"
            >
              WhatsApp
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[#4B5563] text-xs">
            © {new Date().getFullYear()} TEKTIA. Hecho en Chile 🇨🇱
          </p>
          <a
            href="mailto:contacto@tektia.cl"
            className="text-[#4B5563] hover:text-white text-xs transition-colors"
          >
            contacto@tektia.cl
          </a>
        </div>
      </div>
    </footer>
  );
}

