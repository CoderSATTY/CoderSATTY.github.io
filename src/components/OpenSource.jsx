import React from "react";
import { motion } from "framer-motion";
import { openSource } from "../data/mock";
import { SectionHeader } from "./Stack";

export default function OpenSource() {
  return (
    <section id="oss" className="relative py-32 sm:py-40 border-t border-white/10">
      <div className="container-x">
        <SectionHeader index="04" title="Open Source" caption="Contributions / PyTorch Core" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-16 relative border border-white/15 bg-[#111111] p-8 sm:p-12 overflow-hidden"
        >
          <div className="absolute inset-y-0 left-0 w-px bg-white" />
          <div className="absolute top-6 right-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
            — contributor / 2026
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/40">
                github.com / pytorch / pytorch
              </div>
              <h3 
                className="mt-3 font-display text-white font-medium leading-[0.95]"
                style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                PyTorch
              </h3>
              <div 
                className="mt-4 text-white/60"
                style={{ fontSize: "clamp(15px, 2vw, 18px)" }}
              >
                Open-source contributor — core memory / accelerator modules.
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1.5 border border-white text-[11px] uppercase tracking-[0.2em] font-mono bg-white text-black">
                1 × MERGED
              </span>
              <span className="px-3 py-1.5 border border-white/35 text-[11px] uppercase tracking-[0.2em] font-mono text-white/75">
                1 × IN REVIEW
              </span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
            {openSource.prs.map((pr, i) => (
              <motion.a
                key={pr.id}
                href={pr.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="group border border-white/12 p-6 bg-[#0e0e0e] hover:bg-[#161616] hover:border-white/35 transition-colors flex flex-col min-h-full"
                data-cursor="hover"
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/45">
                      PR #{pr.id}
                    </span>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border ${
                        pr.status === "MERGED"
                          ? "bg-white text-black border-white"
                          : "text-white/85 border-white/40"
                      }`}
                    >
                      {pr.status}
                    </span>
                  </div>
                  <h4 
                    className="mt-5 font-display text-white font-medium leading-snug"
                    style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
                  >
                    {pr.title}
                  </h4>
                  <p 
                    className="mt-4 text-white/60 leading-[1.65]"
                    style={{ fontSize: "clamp(14px, 1.5vw, 16px)" }}
                  >
                    {pr.desc}
                  </p>
                </div>
                <div className="mt-8 inline-flex self-start items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.15em]">
                  <span>View on GitHub</span>
                  <span className="font-mono text-black/60 group-hover:translate-x-0.5 transition-transform">↗</span>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-[12px] text-white/40 font-mono uppercase tracking-[0.18em]">
            — {openSource.blurb}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
