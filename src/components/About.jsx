import React from "react";
import { motion } from "framer-motion";
import { profile } from "../data/mock";
import { SectionHeader } from "./Stack";

// Live stats fetched statically (can wire to APIs later)
const liveStats = [
  { value: "15+", label: "Projects Shipped", icon: "⬡" },
  { value: "300+", label: "CP Problems Solved", icon: "⬡" },
  { value: "02", label: "Internships", icon: "⬡" },
  { value: "8+", label: "Certifies Courses", icon: "⬡" },
  { value: "3+", label: "Hackathons Won", icon: "⬡" },
  { value: "1220", label: "CF Rating (Pupil)", icon: "⬡" },
];

export default function About() {
  return (
    <section
      id="about"
      className="about-section relative min-h-screen border-t border-white/10 overflow-hidden"
    >
      <div className="bg-glow left" />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="about-shell container-x relative z-10">
        <div className="about-heading">
          <SectionHeader title="About Myself" caption="Portfolio 2026" />
        </div>

        <div className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="about-panel about-copy"
          >
            <div className="panel-kicker">About Me</div>
            <div className="about-copy-text !text-[18px] lg:!text-[22px] xl:!text-[24px] !leading-[1.7]">
              <p>
                I am <span className="text-white font-medium">Satyam Ashtikar</span>, a pre-final year student from Pune, Maharashtra. I am a student deeply passionate about building intelligent systems and scalable pipelines. My primary focus lies in <span className="text-white font-medium">Generative AI</span>, <span className="text-white font-medium">NLP with LLMs</span>, and high-performance <span className="text-white font-medium">Computer Vision</span>. I love exploring new AI tools and constantly learning about <span className="text-white font-medium">system design</span> and <span className="text-white font-medium">backend development</span> to build robust architectures. When I'm not coding, you'll likely find me playing <span className="text-white font-medium">chess</span> or <span className="text-white font-medium">football</span>, or out hiking and exploring historic forts.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.08, ease: [0.25, 0.1, 0.25, 1] }}
            className="about-panel"
          >
            <div className="panel-kicker">Live Stats</div>
            <div className="about-stat-grid">
              {liveStats.map((s) => (
                <StatCard key={s.label} s={s} />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.25, 0.1, 0.25, 1] }}
            className="about-panel"
          >
            <div className="panel-kicker mb-0">Education</div>
            <div className="flex flex-col">
              <div className="font-display font-medium leading-none text-white tracking-tight" style={{ fontSize: "clamp(42px, 6vw, 76px)" }}>IIT Indore</div>
              <div className="font-display text-white/80 mt-2 leading-tight" style={{ fontSize: "clamp(24px, 2.5vw, 42px)" }}>B.Tech · Mechanical Engineering</div>
              <div className="font-mono text-[16px] lg:text-[20px] text-white/50 uppercase tracking-widest mt-2">2024 — 2028</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.25, 0.1, 0.25, 1] }}
            className="about-panel"
          >
            <div className="panel-kicker">Connect With Me</div>
            <div className="grid grid-cols-3 gap-4 w-full h-full pb-4">
              <a href={profile.socials.github} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-4 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg py-6 px-4">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span className="font-mono text-[13px] uppercase tracking-wider">GitHub</span>
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="flex flex-row items-center justify-center gap-4 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg py-6 px-4">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span className="font-mono text-[13px] uppercase tracking-wider">LinkedIn</span>
              </a>
              <a href={`mailto:${profile.socials.email}`} className="flex flex-row items-center justify-center gap-4 border border-white/20 hover:border-white hover:bg-white text-white hover:text-black transition-all duration-300 rounded-lg py-6 px-4">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span className="font-mono text-[13px] uppercase tracking-wider">Email</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ s }) {
  return (
    <div className="about-stat-card group">
      <div className="about-stat-value">
        {s.value}
      </div>
      <div className="about-stat-label">
        {s.label}
      </div>
    </div>
  );
}
