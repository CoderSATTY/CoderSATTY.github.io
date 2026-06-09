import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/mock";
import { SectionHeader } from "./Stack";


export default function Projects() {
  return (
    <section id="projects" className="relative py-32 sm:py-40 border-t border-white/10 overflow-hidden">
      <div className="bg-glow right" />
      <div className="container-x relative z-10">
        <SectionHeader title="Projects" caption={`${projects.length} × shipped / 2025 — 2026`} />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="group relative h-full border border-white/10 bg-[#111111] hover:bg-[#161616] hover:border-white/30 transition-colors duration-300 p-8 flex flex-col">
                {p.badge && (
                  <div className="absolute top-4 right-4 z-20">
                    <span className="font-mono text-[12px] uppercase tracking-[0.2em] bg-white text-black px-3 py-1 font-bold">
                      {p.badge}
                    </span>
                  </div>
                )}

                <div className="mb-6 aspect-[16/10] border border-white/10 bg-[#0a0a0a] relative overflow-hidden">
                  {p.image ? (
                    <>
                      <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0 grid-bg opacity-50" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-white/85 text-[44px] sm:text-[60px] font-medium tracking-tight">
                          {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3).toUpperCase()}
                        </span>
                      </div>
                    </>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <h3 className="font-display text-white text-[44px] sm:text-[56px] lg:text-[64px] leading-tight font-medium mt-4">
                  {p.title}
                </h3>
                <div className="mt-2 text-[15px] sm:text-[18px] uppercase tracking-[0.16em] text-white/45 font-mono">{p.sub}</div>
                <p className="mt-6 text-[16px] sm:text-[18px] leading-[1.65] text-white/70 line-clamp-4">{p.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {p.tags.slice(0, 5).map((t) => (
                    <span key={t} className="px-3 py-1.5 border border-white/12 text-[13px] sm:text-[14px] text-white/70 font-mono">{t}</span>
                  ))}
                </div>

                <div className="mt-12 pt-3 border-t border-white/10 flex flex-wrap gap-4">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.15em]"
                      data-cursor="hover"
                    >
                      <span>{l.label}</span>
                      <span className="font-mono text-black/60">↗</span>
                    </a>
                  ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
