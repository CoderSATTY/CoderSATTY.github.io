import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { achievements, cpStats } from "../data/mock";
import { SectionHeader } from "./Stack";

function CountUp({ value, trigger }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let raf;
    const start = performance.now();
    const dur = 1500;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value, trigger]);
  return <>{v}</>;
}

export default function Achievements() {
  const [cpIn, setCpIn] = useState(false);
  const ref = useRef(null);

  return (
    <section
      id="achievements"
      className="relative py-32 sm:py-40 border-t border-white/10"
      ref={ref}
    >
      <div className="container-x">
        <SectionHeader index="05" title="Achievements" caption="Medals · Recognition · Numbers" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group border border-white/10 bg-[#111111] hover:bg-[#161616] hover:border-white/30 transition-colors p-8 sm:p-10 flex flex-col justify-between min-h-[360px]"
            >
              <div>
                <div className="flex items-start justify-between mb-8">
                <span className="font-mono text-[13px] uppercase tracking-[0.22em] text-white/50">
                  — 0{i + 1} / Recognition
                </span>
                <span className="font-mono text-[12px] font-bold uppercase tracking-[0.22em] border border-white px-4 py-2 bg-white text-black">
                  {a.rank}
                </span>
              </div>
              <h3 
                className="font-display text-white font-medium leading-tight"
                style={{ fontSize: "clamp(26px, 3.5vw, 50px)" }}
              >
                {a.title}
              </h3>
              <p 
                className="mt-4 text-white/70 leading-[1.65]"
                style={{ fontSize: "clamp(15px, 1.5vw, 18px)" }}
              >
                {a.sub}
              </p>
              </div>
              {a.links.length > 0 && (
                <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-4">
                  {a.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 transition-colors px-6 py-3 text-[14px] sm:text-[15px] font-bold uppercase tracking-[0.15em]"
                    >
                      <span>{l.label}</span>
                      <span className="font-mono text-black/60">↗</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          onViewportEnter={() => setCpIn(true)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h3 className="font-display text-white text-[48px] sm:text-[64px] font-medium leading-none">
              Competitive Programming
            </h3>
            <span className="font-mono text-[14px] sm:text-[16px] uppercase tracking-[0.2em] text-white/40 sm:mb-2">
              — Live Stats
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cpStats.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="border border-white/10 bg-[#111111] hover:bg-[#161616] hover:border-white/30 transition-colors p-8 sm:p-12 group flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div 
                    className="font-display text-white font-medium leading-[0.9]"
                    style={{ fontSize: "clamp(48px, 5.5vw, 90px)" }}
                  >
                    <CountUp value={s.value} trigger={cpIn} />
                    {s.suffix && <span className="text-white/55 ml-2" style={{ fontSize: "clamp(30px, 3.5vw, 50px)" }}>{s.suffix}</span>}
                  </div>
                </div>
                <div className="mt-12 flex items-center justify-between">
                  <span className="font-mono text-[16px] sm:text-[18px] font-bold uppercase tracking-[0.2em] text-white/80">
                    {s.label}
                  </span>
                  <span className="font-mono text-[20px] text-white/50 group-hover:text-white group-hover:translate-x-1.5 transition-transform">↗</span>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
