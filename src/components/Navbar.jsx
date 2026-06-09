import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/mock";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -32, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/85 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
      style={{ zIndex: 9999 }}
    >
      <div className="container-x flex items-center h-[72px]">
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-12 xl:gap-16">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`group py-2 text-[18px] xl:text-[20px] tracking-widest uppercase transition-colors ${
                active === l.id ? "text-white" : "text-white/60 hover:text-white"
              }`}
            >
              <span className="font-mono text-white/35 mr-3 text-[14px]">{l.num}</span>
              <span className="underline-grow font-display">{l.label}</span>
            </button>
          ))}
        </nav>



        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 inline-flex flex-col items-center justify-center gap-1.5 border border-white/15"
          aria-label="Menu"
        >
          <span
            className={`block w-4 h-px bg-white transition-transform ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-4 h-px bg-white transition-transform ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-white/10 bg-[#0a0a0a]"
          >
            <div className="container-x py-6 flex flex-col gap-1">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollTo(l.id)}
                  className="flex items-center justify-between py-3 text-left border-b border-white/5"
                >
                  <span className="text-[15px] uppercase tracking-wide">
                    <span className="font-mono text-white/35 mr-3">{l.num}</span>
                    {l.label}
                  </span>
                  <span className="font-mono text-white/40">→</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
