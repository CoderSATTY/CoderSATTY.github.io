import React, { useState } from "react";
import { motion } from "framer-motion";
import { certifications } from "../data/mock";
import { SectionHeader } from "./Stack";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-32 sm:py-40 border-t border-white/10 overflow-hidden">
      <div className="bg-glow left" />
      <div className="container-x relative z-10">
        <SectionHeader index="06" title="Certifications" caption="DeepLearning.AI · Coursera · Deep-ML" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group flex items-center justify-between gap-6 p-6 sm:p-8 border border-white/10 bg-[#111111] hover:bg-[#161616] hover:border-white/30 transition-colors"
              data-cursor="hover"
            >
              <div className="flex-1 min-w-0">
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                  — 0{i + 1} / {c.issuer}
                </div>
                <h3 className="mt-3 font-display text-white text-[20px] sm:text-[24px] leading-tight font-medium truncate">
                  {c.title}
                </h3>
              </div>
              <span className="shrink-0 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.18em] text-white border border-white/25 px-3 py-2 group-hover:bg-white group-hover:text-black transition-colors">
                Verify
                <span className="font-mono">↗</span>
              </span>
            </motion.a>
          ))}
        </div>


      </div>
    </section>
  );
}
