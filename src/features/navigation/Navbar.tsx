"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { href: "#about",      label: "Sobre mí" },
  { href: "#experience", label: "Trayectoria" },
  { href: "#services",   label: "Servicios" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { scrollY }               = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 60));

  return (
    <>
      <motion.nav
        role="navigation"
        aria-label="Navegación principal"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center px-8 md:px-16 justify-between transition-colors duration-300 ${
          scrolled
            ? "bg-black/90 backdrop-blur-md border-b border-white/8"
            : "bg-gradient-to-b from-black/40 to-transparent"
        }`}
      >
        <a
          href="#"
          aria-label="Edgar López Rodríguez — Inicio"
          className="flex flex-col leading-none group"
        >
          <span className="font-display text-lg text-white tracking-tight group-hover:text-white/80 transition-colors duration-200">
            Edgar López Rodríguez
          </span>
          <span className="f-mono text-[9px] tracking-[0.3em] text-white/50 uppercase">
            Asesor Financiero
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="f-mono text-[10px] tracking-widest uppercase text-white/80 hover:text-white transition-colors duration-200 relative group"
            >
              {l.label}
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300"
              />
            </a>
          ))}
          <a
            href="#contact"
            className="f-mono text-[10px] tracking-widest uppercase border border-white/40 text-white px-5 py-2.5 hover:bg-white hover:text-black transition-all duration-300"
          >
            Contáctame
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <motion.span animate={{ rotate: menuOpen ? 45 : 0,  y: menuOpen ?  8 : 0 }} className="block w-5 h-px bg-white" />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}                         className="block w-5 h-px bg-white" />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-5 h-px bg-white" />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación móvil"
        initial={false}
        animate={{
          opacity:       menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
        className="fixed inset-0 z-40 bg-[#080808] flex flex-col justify-center items-center gap-8 md:hidden"
      >
        {[...navLinks, { href: "#contact", label: "Contacto" }].map((l, i) => (
          <motion.a
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            initial={false}
            animate={{ opacity: menuOpen ? 1 : 0, y: menuOpen ? 0 : 20 }}
            transition={{ delay: i * 0.06 }}
            className="font-display text-4xl text-white hover:text-white/50 transition-colors"
          >
            {l.label}
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}
