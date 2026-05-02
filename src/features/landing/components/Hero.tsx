"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stats = [
  { value: "+$10 MDP", label: "Administrados en portafolios" },
  { value: "A1",       label: "Certificado por la CNSF" },
  { value: "6ª Ed.",   label: "Embajador universitario BIVA" },
];

const container = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};

const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } },
};

const divider = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] as const, delay: 0.5 } },
};

export default function HeroSection() {
  return (
    <section
      aria-label="Presentación de Edgar López Rodríguez, asesor financiero"
      className="relative h-screen w-full flex flex-col bg-[#080808] overflow-hidden"
    >
      {/* ── Layout: texto | foto ── */}
      <div className="flex-1 flex items-stretch min-h-0">

        {/* Columna izquierda — texto */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container}
          className="flex flex-col justify-center px-8 md:px-16 w-full md:w-1/2 gap-5 pt-16"
        >
          <motion.p
            variants={item}
            className="f-mono text-[10px] tracking-[0.35em] text-white/40 uppercase"
          >
            Asesor Financiero · Economista
          </motion.p>

          {/* H1 — escalones para cada línea */}
          <h1 className="sr-only">Edgar López Rodríguez — Asesor Financiero y Economista</h1>
          <div aria-hidden="true">
            <motion.p variants={item}
              className="font-display text-[clamp(3.2rem,6vw,6.5rem)] leading-[1] tracking-[-0.02em] text-white">
              Edgar
            </motion.p>
            <motion.p variants={item}
              className="font-display text-[clamp(3.2rem,6vw,6.5rem)] leading-[1] tracking-[-0.02em] text-white pl-10 md:pl-14">
              López
            </motion.p>
            <motion.p variants={item}
              className="font-display text-[clamp(3.2rem,6vw,6.5rem)] leading-[1] tracking-[-0.02em] text-white/35 pl-20 md:pl-28">
              Rodríguez
            </motion.p>
          </div>

          <motion.div variants={divider} className="h-px w-20 bg-white/20 origin-left" />

          <motion.p
            variants={item}
            className="text-white/50 text-sm leading-relaxed max-w-xs"
          >
            Creando valor real a través de la planeación patrimonial 
            y la gestión estratégica de inversiones.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              aria-label="Agendar una consulta con Edgar López"
              className="group relative inline-flex items-center gap-2 border border-white/20 text-white text-xs f-mono tracking-widest uppercase px-6 py-2.5 overflow-hidden hover:text-black transition-colors duration-500"
            >
              <span aria-hidden className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <span className="relative z-10">Agendar consulta</span>
              <span className="relative z-10" aria-hidden>→</span>
            </a>
            <a
              href="#about"
              aria-label="Conocer más sobre Edgar López"
              className="text-white/40 text-xs f-mono tracking-widest uppercase py-2.5 hover:text-white transition-colors duration-200"
            >
              Conocer más ↓
            </a>
          </motion.div>
        </motion.div>

        {/* Columna derecha — foto */}
        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="hidden md:block md:w-1/2 relative"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/logos/me.png"
              alt="Edgar López Rodríguez, asesor financiero y economista de la UNAM"
              fill
              sizes="30vw"
              className="object-cover object-top grayscale"
              priority
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/20 to-transparent" />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.7 }}
        className="w-full border-t border-white/8 px-8 md:px-16 py-4 flex items-center justify-between shrink-0"
      >
        <dl className="flex gap-8 md:gap-16">
          {stats.map((s) => (
            <div key={s.value}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-xl md:text-2xl text-white">{s.value}</dd>
              <p aria-hidden className="f-mono text-[9px] text-white/35 tracking-widest uppercase mt-0.5">{s.label}</p>
            </div>
          ))}
        </dl>

        <motion.a
          href="#about"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          aria-label="Ir a la siguiente sección"
          className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/30 hover:border-white/40 hover:text-white transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M2.5 5.5l4.5 4.5 4.5-4.5" />
          </svg>
        </motion.a>
      </motion.div>
    </section>
  );
}
