"use client";

import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "Planeación Patrimonial",
    summary: "Estrategia de largo plazo para preservar y multiplicar tu patrimonio.",
    what: "Construyo un plan financiero integral a partir de un diagnóstico completo de tu situación: ingresos, pasivos, objetivos y horizonte temporal. Cada estrategia es diseñada para maximizar el rendimiento ajustado por riesgo y garantizar la continuidad de tu patrimonio.",
    items: ["Diagnóstico financiero personal", "Plan de ahorro e inversión", "Seguros y coberturas", "Proyección de retiro"],
  },
  {
    id: "02",
    title: "Gestión de Portafolios",
    summary: "Administración activa de inversiones con criterio y visión.",
    what: "Diseño y gestiono portafolios de inversión en instrumentos de renta fija y variable, calibrados a tu perfil de riesgo, horizonte de inversión y metas de rendimiento. El seguimiento es continuo y los ajustes, oportunos.",
    items: ["Análisis riesgo-rendimiento", "Diversificación de activos", "Rebalanceo estratégico", "Reportes periódicos"],
  },
  {
    id: "03",
    title: "Asesoría Empresarial",
    summary: "Estructura financiera sólida para decisiones empresariales.",
    what: "Apoyo a empresas y emprendedores en la estructuración financiera de sus negocios: análisis de rentabilidad, optimización de flujos de caja y desarrollo de estrategias de crecimiento basadas en datos reales.",
    items: ["Análisis de P&L", "Flujo de caja y tesorería", "Estrategia de crecimiento", "Posicionamiento de producto"],
  },
  {
    id: "04",
    title: "Educación Financiera",
    summary: "Inteligencia financiera que genera autonomía real.",
    what: "Sesiones de mentoría y talleres personalizados para desarrollar una cultura financiera sólida: desde los fundamentos de la inversión hasta el análisis de mercados de capitales y la psicología detrás de las decisiones financieras.",
    items: ["Talleres personalizados", "Fundamentos de inversión", "Mercados de capitales", "Psicología del inversor"],
  },
];

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: d },
  }),
};

export default function ServicesSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      aria-label="Servicios de asesoría financiera de Edgar López Rodríguez"
      className="w-full bg-[#0a0a0a] border-t border-white/5 px-8 md:px-16 py-24 md:py-32"
    >
      {/* Header */}
      <div className="mb-16">
        <motion.p
          variants={fadeUp} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="f-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-4"
        >
          Servicios
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <motion.h2
            variants={fadeUp} custom={0.06} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-display text-[clamp(2.2rem,4.5vw,4rem)] text-white leading-[1.0] tracking-[-0.02em]"
          >
            En qué puedo
            <br />
            <em className="not-italic text-white/35">aportarte valor</em>
          </motion.h2>

          <motion.p
            variants={fadeUp} custom={0.12} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-white/35 text-sm leading-relaxed max-w-xs md:text-right"
          >
            Cada cliente tiene objetivos distintos. Mi enfoque combina rigor analítico con estrategia personalizada.
          </motion.p>
        </div>
      </div>

      {/* Accordion */}
      <div className="border-t border-white/5">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            variants={fadeUp} custom={0.1 + i * 0.06} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="border-b border-white/5"
          >
            {/* Trigger */}
            <button
              onClick={() => setOpen(open === s.id ? null : s.id)}
              aria-expanded={open === s.id}
              aria-controls={`service-content-${s.id}`}
              className="w-full flex items-center justify-between py-6 text-left group cursor-pointer"
            >
              <div className="flex items-center gap-6 md:gap-10">
                <span className="f-mono text-[10px] text-white/15 w-5 shrink-0">{s.id}</span>
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-5">
                  <span className="font-display text-xl md:text-2xl text-white/80 group-hover:text-white transition-colors duration-200">
                    {s.title}
                  </span>
                  <span className="f-mono text-[9px] text-white/20 tracking-wide hidden md:inline">
                    {s.summary}
                  </span>
                </div>
              </div>

              <motion.span
                animate={{ rotate: open === s.id ? 45 : 0 }}
                transition={{ duration: 0.22 }}
                aria-hidden
                className="text-white/25 text-xl font-light shrink-0 ml-4 leading-none group-hover:text-white/50 transition-colors duration-200"
              >
                +
              </motion.span>
            </button>

            {/* Panel expandido */}
            <AnimatePresence initial={false}>
              {open === s.id && (
                <motion.div
                  id={`service-content-${s.id}`}
                  role="region"
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] as const }}
                  className="overflow-hidden"
                >
                  <div className="pl-11 md:pl-16 pr-4 pb-10 grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-16 items-start">

                    {/* Descripción */}
                    <p className="text-white/40 text-sm leading-[1.9] text-justify">
                      {s.what}
                    </p>

                    {/* Items */}
                    <div>
                      <p className="f-mono text-[8px] tracking-[0.3em] text-white/15 uppercase mb-4">
                        Incluye
                      </p>
                      <ul className="space-y-2.5" aria-label={`Qué incluye ${s.title}`}>
                        {s.items.map((it) => (
                          <li key={it} className="flex items-center gap-3">
                            <span aria-hidden className="w-3 h-px bg-white/20 shrink-0" />
                            <span className="f-mono text-[10px] text-white/45 tracking-wide">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
