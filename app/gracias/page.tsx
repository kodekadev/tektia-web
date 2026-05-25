import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "¡Gracias! — TEKTIA",
  robots: { index: false },
};

const WHATSAPP = "https://wa.me/56928764172?text=Hola%2C%20acabo%20de%20enviar%20mi%20consulta%20en%20TEKTIA.cl";

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] flex items-center justify-center px-6">
      {/* Google Ads conversion snippet — reemplaza con tu ID real */}
      {/* <script dangerouslySetInnerHTML={{ __html: `gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/YYYYYYY'});` }} /> */}

      <div className="max-w-md w-full text-center flex flex-col items-center gap-6">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-[#FEF3E8] flex items-center justify-center text-3xl">
          🎉
        </div>

        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <span
            className="text-2xl font-black text-[#111111]"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            TEKTIA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-0.5" />
        </div>

        <div className="flex flex-col gap-3">
          <h1
            className="text-3xl sm:text-4xl font-black text-[#111111] leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            ¡Recibimos tu cotización!
          </h1>
          <p className="text-[#4B5563] text-lg leading-relaxed">
            Te contactaremos en menos de 24 horas. Si quieres una respuesta más rápida, escríbenos por WhatsApp.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1EB958] text-white font-bold py-3.5 rounded-xl transition-colors"
          >
            💬 Hablar por WhatsApp
          </a>
          <Link
            href="/"
            className="flex-1 flex items-center justify-center border border-[#E8E5E0] text-[#4B5563] hover:text-[#111111] hover:border-[#111111] font-semibold py-3.5 rounded-xl transition-all"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

