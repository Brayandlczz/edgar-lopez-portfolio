"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    period: "2025 – Presente",
    dateTime: "2025",
    company: "Martín Bursátil Advisors",
    role: "Corredor de Bolsa",
    tags: ["Gestión de Fondos de Inversión para el Retiro", "Correduría de Seguros", "Asesoría Financiera y Gestión patrimonial"],
    desc: "Asesoría y gestión activa de portafolios de inversión para clientes patrimoniales, diseñando estrategias en instrumentos de renta fija y variable. Análisis de mercados, construcción de cartera propia y seguimiento continuo orientado a la preservación y crecimiento del capital bajo un enfoque de riesgo controlado.",
  },
  {
    period: "2025 – Presente",
    dateTime: "2025",
    company: "Tequila Don Ramón",
    role: "Franquiciado · Gestor Comercial",
    tags: ["Desarrollo de Franquicia & Posicionamiento de marca", "Venta directa & Contabilidad", "Análisis P&L - Estrategia GTM", "Marketing & Social Media"],
    desc: "Operación y desarrollo de franquicia de spirits premium. Responsable del diseño e implementación de la estrategia go-to-market, posicionamiento de producto en el segmento objetivo y gestión integral del P&L del negocio. Experiencia directa en la intersección entre finanzas operativas y estrategia comercial.",
  },
  {
    period: "2025",
    dateTime: "2025",
    company: "Allianz México",
    role: "Asesor Financiero",
    tags: ["Portafolios +$10 MDP", "Renta fija", "Renta variable", "Planeación patrimonial"],
    desc: "Construcción de cartera propia de clientes y administración de portafolios de inversión superiores a 10 millones de pesos. Diseño de estrategias en renta fija y variable con enfoque en rendimiento ajustado por riesgo, planeación patrimonial y preservación del capital a largo plazo.",
  },
  {
    period: "2024 – 2025",
    dateTime: "2024/2025",
    company: "BIVA",
    role: "Embajador Universitario · 6ª Edición",
    tags: ["Investor Camp", "Reto Actinver", "Mercados de capitales", "Análisis bursátil"],
    desc: "Seleccionado como representante de la Bolsa Institucional de Valores en su sexta edición del programa de embajadores universitarios. Formación intensiva en mercados financieros, análisis bursátil y estrategias de inversión a través de Investor Camp y el Reto Actinver.",
  },
  {
    period: "2021 – 2025",
    dateTime: "2021/2025",
    company: "Hospital EDYBE",
    role: "Coordinador Administrativo",
    tags: ["Gestión Administrativa y Documental", "Control de Ingresos/Egresos", "Normatividad Fiscal & Facturación", "Análisis Financiero"],
    desc: "Coordinación administrativa en institución de salud privada bajo entorno altamente regulado. Gestión de procesos operativos, análisis de indicadores financieros y toma de decisiones bajo restricciones normativas. Experiencia que fortaleció la capacidad de operar con criterio analítico en contextos de alta exigencia institucional.",
  },
];

const slideIn: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: (d: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: d },
  }),
};

export default function ExperienceSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      aria-label="Trayectoria profesional de Edgar López Rodríguez"
      className="w-full bg-[#080808] border-t border-white/5 py-24 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <div className="px-8 md:px-16 mb-16 flex items-end gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="f-mono text-[10px] tracking-[0.35em] text-white/45 uppercase mb-3"
          >
            Trayectoria
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.08 }}
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.92] tracking-[-0.03em] text-white"
          >
            Experiencia
          </motion.h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
          className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/10 to-transparent origin-left"
          aria-hidden
        />
      </div>

      {/* Lista cronológica */}
      <ol className="relative" aria-label="Lista de experiencias profesionales">

        {/* Línea vertical */}
        <motion.div
          initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }}
          className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-white/5 origin-top"
          aria-hidden
        />

        <div className="divide-y divide-white/5">
          {experiences.map((e, i) => (
            <motion.li
              key={`${e.company}-${i}`}
              variants={slideIn} custom={0.2 + i * 0.09}
              initial="hidden" animate={inView ? "visible" : "hidden"}
              className="group relative pl-8 md:pl-16 list-none"
            >
              {/* Nodo en línea vertical */}
              <div
                aria-hidden
                className="absolute left-8 md:left-16 top-10 -translate-x-1/2 w-2 h-2 rounded-full border border-white/15 bg-[#080808] group-hover:border-white/50 group-hover:bg-white/10 transition-all duration-300"
              />

              {/* Acento izquierdo al hover */}
              <div
                aria-hidden
                className="absolute left-0 top-0 bottom-0 w-px bg-white/30 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              />

              <div className="pl-10 md:pl-16 pr-8 md:pr-16 py-10 grid md:grid-cols-[1fr_2fr_1fr] gap-6 md:gap-12 items-start">

                {/* Col 1: índice + periodo + empresa */}
                <div className="flex md:flex-col gap-4 md:gap-2">
                  <span
                    aria-hidden
                    className="font-display text-[3.5rem] leading-none text-white/25 select-none hidden md:block group-hover:text-white/15 transition-colors duration-500"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="f-mono text-[9px] tracking-widest text-white/30 uppercase mb-1.5">
                      <time dateTime={e.dateTime}>{e.period}</time>
                    </p>
                    <p className="f-mono text-[11px] tracking-widest text-white/50 uppercase">{e.company}</p>
                  </div>
                </div>

                {/* Col 2: rol + descripción */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-display text-[clamp(1.3rem,2.2vw,1.9rem)] text-white leading-tight tracking-[-0.01em]">
                    {e.role}
                  </h3>
                  <p className="text-white/35 text-sm leading-[1.85] text-justify group-hover:text-white/50 transition-colors duration-300">
                    {e.desc}
                  </p>
                </div>

                {/* Col 3: tags */}
                <div className="flex flex-wrap md:flex-col gap-2">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="f-mono text-[9px] tracking-wide border border-white/8 text-white/30 px-2.5 py-1 group-hover:border-white/20 group-hover:text-white/45 transition-all duration-300 w-fit"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </div>
      </ol>
    </section>
  );
}
