import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { profile, stats } from "../data/mock";

function useTypewriter(words, opts = {}) {
  const { typing = 70, deleting = 35, hold = 1400 } = opts;
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("type");

  useEffect(() => {
    const word = words[i % words.length];
    let t;
    if (phase === "type") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), typing);
      } else {
        t = setTimeout(() => setPhase("delete"), hold);
      }
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), deleting);
      } else {
        setPhase("type");
        setI((v) => v + 1);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, i, words, typing, deleting, hold]);

  return text;
}

function useCountUp(target, trigger) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    const num = parseInt(String(target).replace(/\D/g, ""), 10) || 0;
    if (!num) { setV(0); return; }
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setV(Math.floor(eased * num));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, trigger]);
  return v;
}

export default function Hero() {
  const word = useTypewriter(profile.roles);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 80]);
  const y2 = useTransform(scrollY, [0, 600], [0, -60]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [statsIn, setStatsIn] = useState(false);

  const particlesInit = async (engine) => { await loadSlim(engine); };

  const particleOptions = useMemo(() => ({
    fullScreen: { enable: false },
    background: { color: "transparent" },
    fpsLimit: 30,
    particles: {
      number: { value: 25, density: { enable: true, area: 900 } },
      color: { value: "#ffffff" },
      opacity: { value: 0.35 },
      size: { value: { min: 0.4, max: 1.6 } },
      move: { enable: true, speed: 0.45, outModes: { default: "out" } },
      links: { enable: true, distance: 140, color: "#ffffff", opacity: 0.08, width: 1 },
    },
    detectRetina: false,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, resize: true },
      modes: { grab: { distance: 160, links: { opacity: 0.25 } } },
    },
  }), []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Particles id="hero-particles" init={particlesInit} options={particleOptions} className="absolute inset-0" />
      </div>
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] pointer-events-none" />

      <motion.div style={{ opacity }} className="relative z-10 container-x w-full pt-16 pb-8 mt-12">
        {/* Name */}
        <motion.h1
          style={{ y: y1 }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="font-display text-white leading-[0.92] tracking-tight"
        >
          <span className="block text-[clamp(56px,11vw,180px)] font-medium">SATYAM</span>
          <span className="block text-[clamp(56px,11vw,180px)] font-medium text-white/70">
            ASHTIKAR<span className="text-white">.</span>
          </span>
        </motion.h1>

        {/* Typewriting effect (moved above quote) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-2 mb-0 ml-24"
        >
          <div
            className="font-display text-white tracking-wide leading-none"
            style={{ fontSize: "clamp(36px, 10vw,40px)" }}
          >
            {word}
            <span
              className="caret inline-block bg-white ml-2"
              style={{ width: "12px", height: "40px", verticalAlign: "-4px" }}
            />
          </div>
        </motion.div>

        {/* Quote 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-3 max-w-[1180px]"
        >
          <p className="hero-quote font-display font-medium text-[22px] sm:text-[28px] leading-snug">
            "The best engineers don't just solve problems, they build systems that solve problems for them."
          </p>
        </motion.div>
        */}

        {/* CTAs + Stats */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="lg:col-span-6 flex justify-start"
          >
            <div className="flex flex-wrap justify-start gap-5 ml-24">
              <a
                href="#projects"
                onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                className="group inline-flex items-center gap-3 font-medium uppercase tracking-wider bg-white text-black hover:bg-white/90 hover:scale-[1.02] transition-all duration-300 rounded-md px-8 py-4 text-[15px]"
              >
                View Projects <span className="font-mono">↗</span>
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-3 font-medium uppercase tracking-wider border-2 border-white/40 text-white/80 hover:border-white hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 rounded-md px-8 py-4 text-[15px]"
              >
                Resume <span className="font-mono">↗</span>
              </a>
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 font-medium uppercase tracking-wider border-2 border-white/40 text-white/80 hover:border-white hover:bg-white hover:text-black hover:scale-[1.02] transition-all duration-300 rounded-md px-8 py-4 text-[15px]"
              >
                GitHub <span className="font-mono">↗</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            onViewportEnter={() => setStatsIn(true)}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-2 sm:grid-cols-5 border-t border-l border-white/10">
              {stats.map((s, i) => (<Stat key={s.label} s={s} trigger={statsIn} index={i} />))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-0 right-0 flex items-center justify-center gap-3 text-[11px] uppercase tracking-[0.28em] text-white/45 font-mono z-10"
      >
        <span>Scroll</span>
        <span className="w-12 h-px bg-white/30" />
      </motion.div>
    </section>
  );
}

function Stat({ s, trigger, index }) {
  const num = useCountUp(s.value, trigger);
  const raw = String(s.value);
  const hasNum = /\d/.test(raw);
  const suffix = raw.replace(/[\d]/g, "").trim();
  const isColor = index === 0 || index === 2 || index === 4;

  return (
    <div className={`border-b border-r border-white/10 p-5 ${isColor ? 'bg-blue-500/5' : ''}`}>
      <div className={`font-display text-[44px] leading-none font-medium ${isColor ? 'text-blue-400' : 'text-white'}`}>
        {hasNum ? num : raw}
        {hasNum && suffix && <span className={`text-[28px] ${isColor ? 'text-blue-400/70' : 'text-white/55'}`}>{suffix}</span>}
      </div>
      <div className={`mt-4 text-[13px] uppercase tracking-[0.22em] font-mono ${isColor ? 'text-blue-400/60' : 'text-white/45'}`}>{s.label}</div>
    </div>
  );
}
