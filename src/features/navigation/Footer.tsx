"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/edgarlrdz",
    label: "Perfil de Instagram de Edgar López Rodríguez",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/edgar-l%C3%B3pez-rodr%C3%ADguez-2a32b2313",
    label: "Perfil de LinkedIn de Edgar López Rodríguez",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/5215521180067",
    label: "Contactar a Edgar López por WhatsApp",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.855L.057 23.012a.75.75 0 0 0 .921.921l5.188-1.462A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.5-5.243-1.376l-.374-.217-3.882 1.093 1.107-3.77-.234-.388A9.953 9.953 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (d: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: d },
  }),
};

export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      aria-label="Pie de página — Edgar López Rodríguez"
      className="w-full bg-[#080808] border-t border-white/5 px-8 md:px-16 pt-12 pb-8"
    >
      <div className="space-y-6">

        {/* Top */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-2.5"
        >
          <p className="font-display text-3xl text-white tracking-tight">
            Edgar López Rodríguez
          </p>
          <p className="f-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">
            Asesor Financiero · Economista · UNAM
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1 }}
          className="h-px bg-white/8 origin-left"
        />

        {/* Bottom */}
        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5"
        >
          {/* Socials */}
          <nav aria-label="Redes sociales">
            <ul className="flex gap-5">
              {socials.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/25 hover:text-white transition"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <div className="flex flex-wrap items-center gap-3 text-white/40 text-[9px] tracking-widest uppercase">
            <span>© {year} Todos los derechos reservados</span>

            <span aria-hidden>·</span>

            <Link href="/terminos" className="hover:text-white transition">
              Términos y Condiciones
            </Link>

            <span aria-hidden>·</span>

            <Link href="/privacidad" className="hover:text-white transition">
              Políticas de Privacidad
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}