import React from "react";
import { motion } from "framer-motion";
import { stack } from "../data/mock";

// Category icons (SVG paths inline)
const ICONS = {
  "Languages": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  "ML / AI": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><path d="M12 2v3m0 14v3M4.22 4.22l2.12 2.12m11.32 11.32 2.12 2.12M2 12h3m14 0h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </svg>
  ),
  "Tools & Infrastructure": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "Databases": (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  ),
};

export default function Stack() {
  return (
    <section id="stack" className="stack-section relative min-h-screen border-t border-white/10">
      <div className="container-x">
        <SectionHeader title="Tech Stacks" caption="Tools / Libraries / Infrastructure" />

        <div className="stack-list">
          {stack.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: gi * 0.04, ease: [0.25, 0.1, 0.25, 1] }}
              className="stack-row"
            >
              <div className="stack-category">
                <span className="stack-category-icon">
                  {ICONS[group.category]}
                </span>
                <span className="stack-category-title">
                  {group.category}
                </span>
              </div>

              <div className="stack-tags">
                {group.items.map((item, ii) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: ii * 0.03 }}
                    className="stack-tag"
                    data-cursor="hover"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/10" />
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ title, caption }) {
  return (
    <div className={`section-header flex flex-col items-center justify-center text-center gap-6 px-6 sm:px-10 py-8 rounded-2xl mb-16 border bg-black border-white/10`}>
      <h2 className="section-title font-display font-medium text-[42px] sm:text-[56px] text-white leading-none tracking-tight">
        {title}.
      </h2>
      <div className={`section-caption font-mono text-[14px] uppercase tracking-widest px-5 py-2.5 rounded-full border text-white/50 bg-[#111111] border-white/10`}>
        {caption}
      </div>
    </div>
  );
}
