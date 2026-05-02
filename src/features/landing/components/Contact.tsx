"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, useState } from "react";

const contactInfo = [
  { label: "Ubicación", value: "Ciudad de México, México" },
  { label: "Disponibilidad", value: "Lunes a viernes, 9am – 7pm" },
  { label: "Respuesta", value: "Menos de 24 horas" },
];

const slideIn: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: (d: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay: d },
  }),
};

const slideRight: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: (d: number = 0) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const, delay: d },
  }),
};

export default function ContactSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent]       = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section
      id="contact"
      ref={ref}
      aria-label="Contacto con Edgar López Rodríguez"
      className="w-full bg-[#080808] border-t border-white/5 py-24 md:py-32 overflow-hidden"
    >
      {/* Header */}
      <div className="px-8 md:px-16 mb-16 flex items-end gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="f-mono text-[10px] tracking-[0.35em] text-white/25 uppercase mb-3"
          >
            Contacto
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay: 0.08 }}
            className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.92] tracking-[-0.03em] text-white"
          >
            Hablemos
          </motion.h2>
        </div>

        <motion.div
          initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] as const, delay: 0.3 }}
          className="hidden md:block h-px flex-1 bg-gradient-to-r from-white/10 to-transparent origin-left"
          aria-hidden
        />
      </div>

      {/* Body */}
      <div className="relative px-8 md:px-16">

        {/* Línea vertical decorativa */}
        <motion.div
          initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] as const, delay: 0.4 }}
          className="absolute left-8 md:left-16 top-0 bottom-0 w-px bg-white/5 origin-top"
          aria-hidden
        />

        <div className="pl-10 md:pl-16 grid md:grid-cols-[1fr_1.6fr] gap-16 md:gap-28">

          {/* Left — info */}
          <motion.div
            variants={slideIn} custom={0.2} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-8"
          >
            <div className="space-y-3">
              <p className="font-display text-[clamp(1.4rem,2.5vw,2.2rem)] leading-tight tracking-[-0.02em] text-white">
                Una conversación puede cambiar la dirección de tus finanzas.
              </p>
              <p className="text-white/35 text-sm leading-relaxed">
                Sin compromisos. Agenda una consulta y construyamos juntos la estrategia que tu patrimonio necesita.
              </p>
            </div>

            {/* Info de contacto */}
            <div className="border-t border-white/5 pt-6 space-y-4">
              {contactInfo.map((c) => (
                <div key={c.label} className="flex gap-6 items-baseline">
                  <span className="f-mono text-[9px] tracking-widest text-white/20 uppercase w-24 shrink-0">
                    {c.label}
                  </span>
                  <span className="text-white/50 text-sm">{c.value}</span>
                </div>
              ))}
            </div>

            {/* Nota de privacidad */}
            <p className="f-mono text-[9px] text-white/15 leading-relaxed max-w-xs">
              Tu información es confidencial y nunca será compartida con terceros.
            </p>
          </motion.div>

          {/* Right — formulario */}
          <motion.div
            variants={slideRight} custom={0.3} initial="hidden" animate={inView ? "visible" : "hidden"}
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="border border-white/8 p-8 flex flex-col items-center justify-center gap-4 text-center min-h-[320px]"
              >
                <span className="f-mono text-[10px] tracking-widest text-white/30 uppercase">Mensaje enviado</span>
                <p className="font-display text-2xl text-white">Gracias por escribir.</p>
                <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                  Me pondré en contacto contigo en menos de 24 horas.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Formulario de contacto"
                className="border border-white/8 p-8 flex flex-col gap-7"
              >
                {/* Nombre */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-name" className="f-mono text-[9px] tracking-widest uppercase text-white/25">
                    Nombre
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre completo"
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-transparent border-b pb-2.5 text-sm text-white outline-none placeholder:text-white/12 transition-colors duration-300 ${
                      focused === "name" ? "border-white/40" : "border-white/10"
                    }`}
                  />
                </div>

                {/* Correo */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-email" className="f-mono text-[9px] tracking-widest uppercase text-white/25">
                    Correo
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@correo.com"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-transparent border-b pb-2.5 text-sm text-white outline-none placeholder:text-white/12 transition-colors duration-300 ${
                      focused === "email" ? "border-white/40" : "border-white/10"
                    }`}
                  />
                </div>

                {/* Mensaje */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="f-mono text-[9px] tracking-widests uppercase text-white/25">
                    Mensaje
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Cuéntame sobre tus objetivos financieros..."
                    onFocus={() => setFocused("msg")}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-transparent border-b pb-2.5 text-sm text-white outline-none resize-none placeholder:text-white/12 transition-colors duration-300 ${
                      focused === "msg" ? "border-white/40" : "border-white/10"
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full border border-white/15 text-white f-mono text-xs tracking-widest uppercase py-4 overflow-hidden hover:text-black transition-colors duration-500 mt-1"
                >
                  <span aria-hidden className="absolute inset-0 bg-white -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="relative z-10">Enviar mensaje →</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
