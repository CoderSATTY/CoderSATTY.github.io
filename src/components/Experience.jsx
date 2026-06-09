import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/mock";
import { SectionHeader } from "./Stack";

export default function Experience() {
  return (
    <section id="experience" className="relative min-h-screen flex flex-col justify-center py-24 border-t border-white/10">
      <div className="container-x">
        <SectionHeader title="Experiences" caption="Selected Work / 2025 — 2026" />

        <div className="mt-20 space-y-8">
          {experience.map((e, i) => (
            <motion.article
              key={e.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-white/5 bg-gradient-to-br from-[#111111] to-[#0a0a0a] hover:border-white/20 transition-colors lg:divide-x divide-white/10"
            >
              {/* Left meta */}
              <div className="lg:col-span-4 p-8 sm:p-14">
                <h3 className="font-display text-white text-[42px] sm:text-[58px] lg:text-[66px] leading-none font-medium tracking-tight">
                  {e.company}
                </h3>
                <div className="mt-4 font-mono text-[15px] uppercase tracking-[0.2em] text-white/60">
                  {e.period} <span className="mx-2 text-white/30">•</span> {e.location}
                </div>
                <div className="mt-2 text-[18px] sm:text-[22px] font-bold text-white tracking-wide">{e.role}</div>
                <div className="mt-2 text-[16px] text-white/40">{e.sub}</div>
                <a
                  href={e.certificate}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex w-max items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.15em]"
                >
                  <span>Certificate</span>
                  <span className="font-mono text-black/60">↗</span>
                </a>
              </div>

              {/* Right content + tags */}
              <div className="lg:col-span-8 p-8 sm:p-14 border-t border-white/10 lg:border-t-0">
                <div className="text-white/80 text-[18px] sm:text-[20px] leading-[1.8] font-light">
                  <span dangerouslySetInnerHTML={{ __html: e.description }} />
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  {e.tags.map((t) => (
                    <span key={t} className="px-4 py-2 border border-white/10 bg-white/5 text-[14px] text-white/80 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}
