"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Servicios", href: "#servicios" },
  { label: "Casos", href: "#casos" },
  { label: "Contacto", href: "#contacto" },
];

const WHATSAPP = "https://wa.me/56928764172?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20TEKTIA";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-[#E8E5E0]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-1.5 group">
          <span
            className="text-xl font-black tracking-tight text-[#111111] group-hover:text-[#F97316] transition-colors"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            TEKTIA
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#F97316] mt-0.5" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#4B5563] hover:text-[#111111] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#C2580B] text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors shadow-brand"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-[#111111] p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-[#E8E5E0] px-6 py-6 flex flex-col gap-5 shadow-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-base text-[#4B5563] hover:text-[#111111] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex justify-center bg-[#F97316] hover:bg-[#C2580B] text-white font-bold text-sm px-4 py-3 rounded-lg transition-colors mt-2"
          >
            WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

