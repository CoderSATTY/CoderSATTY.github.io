import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/mock";

export default function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 mt-10 overflow-hidden bg-[#0a0a0a]">
      <div className="container-x py-20 sm:py-28">
        {/* Giant signature word */}
        <div className="pt-10 overflow-hidden flex justify-center w-full">
          <div 
            className="font-display text-white/95 leading-[0.8] tracking-tight font-medium whitespace-nowrap select-none"
            style={{ fontSize: "12vw" }}
          >
            THANK YOU.
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-row flex-wrap items-center justify-center gap-4"
        >
          <a href={`mailto:${profile.socials.email}`} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-3 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg px-6 py-4">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <span className="font-mono text-[12px] uppercase tracking-wider">Gmail</span>
          </a>
          <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-3 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg px-6 py-4">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span className="font-mono text-[12px] uppercase tracking-wider">LinkedIn</span>
          </a>
          <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-3 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg px-6 py-4">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span className="font-mono text-[12px] uppercase tracking-wider">GitHub</span>
          </a>
          <a href={profile.socials.leetcode} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-3 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg px-6 py-4">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span className="font-mono text-[12px] uppercase tracking-wider">LeetCode</span>
          </a>
          <a href={profile.socials.codeforces} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-3 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg px-6 py-4">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            <span className="font-mono text-[12px] uppercase tracking-wider">Codeforces</span>
          </a>
          <a href={profile.socials.deepml} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-3 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg px-6 py-4">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 17 22 12"></polyline></svg>
            <span className="font-mono text-[12px] uppercase tracking-wider">Deep-ML</span>
          </a>
        </motion.div>

        <div className="mt-12 flex items-center justify-center font-mono text-[12px] uppercase tracking-[0.2em] text-white/40">
          <span>© 2026 — SATYAM ASHTIKAR</span>
        </div>
      </div>
    </footer>
  );
}
