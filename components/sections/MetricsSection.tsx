"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 10, suffix: "+", label: "Proyectos entregados", description: "Empresas automatizadas" },
  { value: 24, suffix: "h", label: "Tiempo de respuesta", description: "Propuesta lista en un día" },
  { value: 15, suffix: "hrs", label: "Ahorro semanal promedio", description: "Por empresa automatizada" },
  { value: 100, suffix: "%", label: "Soporte post-entrega", description: "Seguimos contigo después" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function MetricsSection() {
  return (
    <section className="bg-[#F97316] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex flex-col gap-1 text-center lg:text-left lg:border-r lg:border-white/20 lg:last:border-0 lg:px-6 first:pl-0"
            >
              <div
                className="text-4xl sm:text-5xl font-black text-white leading-none"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                <Counter target={m.value} suffix={m.suffix} />
              </div>
              <p className="text-white font-bold text-sm mt-1">{m.label}</p>
              <p className="text-white/70 text-xs">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
