"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Section {
  id: string;
  title: string;
  content: string[];
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  dateISO: string;
  meta: { label: string; value: string }[];
  sections: Section[];
  footerLink: { href: string; label: string };
}

export default function LegalLayout({
  badge, title, subtitle, lastUpdated, dateISO, meta, sections, footerLink,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[#080808] text-white flex flex-col">

      {/* ── Navbar ── */}
      <header className="w-full border-b border-white/5 px-8 md:px-16 h-16 flex items-center justify-between shrink-0">
        <Link href="/" aria-label="Volver al inicio" className="flex flex-col leading-none group">
          <span className="font-display text-base text-white tracking-tight group-hover:text-white/60 transition-colors duration-200">
            Edgar López Rodríguez
          </span>
          <span className="f-mono text-[9px] tracking-[0.3em] text-white/30 uppercase">Asesor Financiero</span>
        </Link>
        <Link href="/" className="f-mono text-[10px] tracking-widest uppercase text-white/30 hover:text-white transition-colors duration-200">
          ← Inicio
        </Link>
      </header>

      <div className="flex flex-1 w-full">

        <aside className="hidden lg:flex flex-col w-72 xl:w-80 shrink-0 border-r border-white/5 px-8 py-12 sticky top-0 h-screen overflow-y-auto">

          {/* Info del documento */}
          <div className="space-y-6 mb-12">
            <p className="f-mono text-[9px] tracking-[0.3em] text-white/20 uppercase">{badge}</p>
            <h2 className="font-display text-2xl text-white leading-tight">{title}</h2>
            <div className="space-y-3 pt-2 border-t border-white/5">
              <div>
                <span className="f-mono text-[8px] tracking-widest text-white/15 uppercase block mb-0.5">Actualización</span>
                <time className="f-mono text-[9px] text-white/35" dateTime={dateISO}>{lastUpdated}</time>
              </div>
              {meta.map((m) => (
                <div key={m.label}>
                  <span className="f-mono text-[8px] tracking-widest text-white/15 uppercase block mb-0.5">{m.label}</span>
                  <span className="f-mono text-[9px] text-white/35">{m.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Índice */}
          <nav aria-label="Índice de secciones">
            <p className="f-mono text-[8px] tracking-[0.3em] text-white/15 uppercase mb-4">Índice</p>
            <ol className="space-y-1.5">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}
                    className="f-mono text-[9px] tracking-wide text-white/25 hover:text-white/70 transition-colors duration-200 block leading-relaxed">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Footer sidebar */}
          <div className="mt-auto pt-8 border-t border-white/5 space-y-2">
            <Link href={footerLink.href}
              className="f-mono text-[9px] tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors duration-200 block">
              {footerLink.label} →
            </Link>
            <p className="f-mono text-[8px] text-white/12 tracking-wide">
              © {new Date().getFullYear()} Edgar López Rodríguez
            </p>
          </div>
        </aside>

        <main className="flex-1 min-w-0 px-8 md:px-16 xl:px-20 py-16">

          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
            className="mb-16 pb-12 border-b border-white/5"
          >
            <p className="f-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-4">{badge}</p>
            <h1 className="font-display text-[clamp(3rem,5vw,5rem)] leading-[0.95] tracking-[-0.02em] text-white mb-6">
              {title}
            </h1>
            <p className="text-white/35 text-sm leading-relaxed max-w-xl mb-8">{subtitle}</p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-3">
              <div className="border border-white/8 px-4 py-2">
                <span className="f-mono text-[8px] tracking-widests text-white/20 uppercase block mb-0.5">Actualización</span>
                <time className="f-mono text-[10px] text-white/50" dateTime={dateISO}>{lastUpdated}</time>
              </div>
              {meta.map((m) => (
                <div key={m.label} className="border border-white/8 px-4 py-2">
                  <span className="f-mono text-[8px] tracking-widest text-white/20 uppercase block mb-0.5">{m.label}</span>
                  <span className="f-mono text-[10px] text-white/50">{m.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Índice móvil */}
          <nav aria-label="Índice" className="lg:hidden mb-12 p-5 border border-white/5">
            <p className="f-mono text-[9px] tracking-[0.3em] text-white/20 uppercase mb-4">Índice</p>
            <ol className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="f-mono text-[10px] tracking-wide text-white/35 hover:text-white transition-colors duration-200">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Secciones */}
          <article className="space-y-16" aria-label={`${title} — contenido completo`}>
            {sections.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                aria-labelledby={`heading-${s.id}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.03 }}
              >
                <h2 id={`heading-${s.id}`}
                  className="font-display text-2xl md:text-3xl text-white mb-5 leading-tight">
                  {s.title}
                </h2>
                <div className="space-y-4 pl-0 border-l-0">
                  {s.content.map((p, j) => (
                    <p key={j}
                      className="text-white/40 text-sm leading-[1.95] text-justify whitespace-pre-line">
                      {p}
                    </p>
                  ))}
                </div>
              </motion.section>
            ))}
          </article>

          {/* Footer móvil */}
          <footer className="lg:hidden mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="f-mono text-[9px] tracking-wide text-white/20 uppercase">
              © {new Date().getFullYear()} Edgar López Rodríguez
            </p>
            <Link href={footerLink.href}
              className="f-mono text-[9px] tracking-widest uppercase text-white/20 hover:text-white/50 transition-colors duration-200">
              {footerLink.label} →
            </Link>
          </footer>
        </main>
      </div>
    </div>
  );
}
