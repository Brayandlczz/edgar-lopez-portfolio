"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const certs = [
  { label: "CNSF A1",        desc: "Agente de Seguros" },
  { label: "AMIB Fig. 3",    desc: "En proceso" },
  { label: "Embajador BIVA", desc: "6ª Edición" },
  { label: "Investor Camp",  desc: "BIVA" },
  { label: "Reto Actinver",  desc: "Finalista" },
];

const pillars = [
  { n: "01", t: "Planeación Patrimonial", d: "Estrategias personalizadas para proteger y hacer crecer el patrimonio con visión de largo plazo." },
  { n: "02", t: "Gestión de Portafolios", d: "Administración en renta fija y variable adaptada a tu perfil de riesgo y horizonte de inversión." },
  { n: "03", t: "Asesoría Integral",      d: "Acompañamiento en cada decisión financiera, desde la estructuración hasta la ejecución." },
];

const jumpIn: Variants = {
  hidden:  { opacity: 0, y: 40, scale: 0.97 },
  visible: (d: number = 0) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay: d },
  }),
};

// Slow fade — para párrafos y elementos secundarios
const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (d: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: d },
  }),
};

export default function AboutSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      aria-label="Sobre Edgar López Rodríguez"
      className="w-full bg-[#080808] border-t border-white/5 px-8 md:px-16 py-24 md:py-32"
    >
      {/* Label — salto */}
      <motion.p
        variants={jumpIn} custom={0} initial="hidden" animate={inView ? "visible" : "hidden"}
        className="f-mono text-[10px] tracking-[0.35em] text-white/60 uppercase mb-12"
      >
        Sobre mí
      </motion.p>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">

        {/* ── Izquierda: bio + certs ── */}
        <div className="space-y-7">

          {/* Título — salto */}
          <motion.h2
            variants={jumpIn} custom={0.08} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-white"
          >
            Donde la teoría encuentra{" "}
            <em className="not-italic text-white/35">la estrategia.</em>
          </motion.h2>

          <motion.p
            variants={fadeUp} custom={0.14} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-white/45 text-sm leading-[1.9] text-justify"
          >
            Estudiante de Economía en la{" "}
            <strong className="text-white font-normal">UNAM</strong>, enfocado en el diseño de estrategias financieras sólidas y sostenibles. He desarrollado experiencia en la gestión de portafolios superiores a{" "}
            <strong className="text-white font-normal">10 millones de pesos</strong> en{" "}
            <strong className="text-white font-normal">Allianz México</strong>, estructurando estrategias en renta fija y variable con un enfoque disciplinado en el rendimiento ajustado por riesgo.
          </motion.p>

          <motion.p
            variants={fadeUp} custom={0.2} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-white/45 text-sm leading-[1.9] text-justify"
          >
            Mi enfoque parte de una visión integral: las decisiones financieras responden a dinámicas operativas, comerciales y humanas. Complemento mi formación con experiencia en el sector salud y en la gestión de una franquicia de tequila, desarrollando estrategias comerciales y posicionamiento de marca.
          </motion.p>

          <motion.p
            variants={fadeUp} custom={0.26} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-white/45 text-sm leading-[1.9] text-justify"
          >
            Mi objetivo es claro: convertir la complejidad financiera en estrategias accionables que generen valor real, integrando rigor técnico con visión estratégica.
          </motion.p>

          {/* Certificaciones — grid horizontal */}
          <motion.div
            variants={fadeUp} custom={0.32} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="pt-3"
          >
            <p className="f-mono text-[9px] tracking-[0.3em] text-white/80 uppercase mb-4">
              Certificaciones &amp; formación
            </p>
            <div className="flex flex-wrap gap-2">
              {certs.map((c) => (
                <div
                  key={c.label}
                  className="group flex flex-col border border-white/8 px-4 py-2.5 hover:border-white/20 hover:bg-white/[0.03] transition-all duration-200 cursor-default"
                >
                  <span className="text-white/70 text-xs group-hover:text-white transition-colors duration-200 leading-none mb-1">
                    {c.label}
                  </span>
                  <span className="f-mono text-[8px] tracking-widest text-white/50 uppercase">
                    {c.desc}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Derecha: pilares ── */}
        <div>
          <motion.p
            variants={fadeUp} custom={0.1} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="f-mono text-[9px] tracking-[0.3em] text-white/80 uppercase mb-6"
          >
            Áreas de enfoque
          </motion.p>

          <div className="space-y-4">
            {pillars.map((p, i) => (
              <motion.article
                key={p.n}
                variants={fadeUp} custom={0.14 + i * 0.08} initial="hidden" animate={inView ? "visible" : "hidden"}
                className="group border border-white/5 p-6 hover:border-white/15 hover:bg-white/[0.02] transition-all duration-300 cursor-default"
              >
                <div className="flex gap-5">
                  <span className="f-mono text-[10px] text-white/45 pt-0.5 select-none">{p.n}</span>
                  <div>
                    <h3 className="text-white/75 text-sm font-medium mb-2 group-hover:text-white transition-colors duration-200">
                      {p.t}
                    </h3>
                    <p className="text-white/35 text-sm leading-relaxed">{p.d}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
