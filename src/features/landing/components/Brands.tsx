"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type Brand = {
  name: string;
  src: string;
};

const brands: Brand[] = [
  { name: "Allianz México", src: "/images/allianz.webp" },
  { name: "BIVA", src: "/images/biva.webp" },
  { name: "UNAM", src: "/images/unam.webp" },
  { name: "CNSF", src: "/images/cnsf.webp" },
  { name: "AMIB", src: "/images/amib.webp" },
  { name: "Actinver", src: "/images/actinver.webp" },
];

const marqueeRow = [...brands, ...brands];

export default function Brands() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      aria-label="Instituciones y colaboraciones de Edgar López Rodríguez"
      className="w-full bg-[#080808] border-t border-white/5 py-14 overflow-hidden"
    >
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="font-mono text-[10px] tracking-[0.35em] text-white/70 uppercase text-center mb-10"
      >
        Instituciones de formación & colaboración
      </motion.p>

      {/* Marquee */}
      <div className="relative">
        {/* fades laterales */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-[#080808] to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-[#080808] to-transparent z-10"
        />

        <motion.ul
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          aria-hidden
        >
          {marqueeRow.map((brand, i) => (
            <li
              key={`${brand.name}-${i}`}
              className="relative flex-shrink-0 w-44 h-20 flex items-center justify-center border-r border-white/5"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                fill
                sizes="176px"
                className="object-contain brightness-0 invert opacity-50 hover:opacity-90 transition-opacity duration-300"
              />
            </li>
          ))}
        </motion.ul>
      </div>

      {/* SEO fallback */}
      <ul className="sr-only">
        {brands.map((b) => (
          <li key={b.name}>{b.name}</li>
        ))}
      </ul>
    </section>
  );
}