import { motion } from "framer-motion";
import {
  SiPython, SiCplusplus, SiTypescript, SiPytorch, SiScikitlearn,
  SiDocker, SiGooglecloud, SiGit, SiFastapi, SiNginx,
  SiMongodb, SiOpencv, SiGnubash, SiJupyter, SiHuggingface
} from "react-icons/si";

// All stack items for the marquee
const items = [
  { name: "Python", icon: <SiPython className="text-[0.8em]" /> },
  { name: "C / C++", icon: <SiCplusplus className="text-[0.8em]" /> },
  { name: "DSA", icon: null },
  { name: "OOPs", icon: null },
  { name: "TypeScript", icon: <SiTypescript className="text-[0.8em]" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-[0.8em]" /> },
  { name: "Bash", icon: <SiGnubash className="text-[0.8em]" /> },
  { name: "Jupyter", icon: <SiJupyter className="text-[0.8em]" /> },
  { name: "Hugging Face", icon: <SiHuggingface className="text-[0.8em]" /> },
  { name: "LangChain", icon: null },
  { name: "LangGraph", icon: null },
  { name: "Diffusers", icon: <span className="text-[0.8em] grayscale contrast-125">🧨</span> },
  { name: "Transformers", icon: null },
  { name: "OpenCV", icon: <SiOpencv className="text-[0.8em]" /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn className="text-[0.8em]" /> },
  { name: "Docker", icon: <SiDocker className="text-[0.8em]" /> },
  { name: "GCP", icon: <SiGooglecloud className="text-[0.8em]" /> },
  { name: "Modal", icon: <span className="font-bold text-[0.8em]">M</span> },
  { name: "Git", icon: <SiGit className="text-[0.8em]" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-[0.8em]" /> },

  { name: "Nginx", icon: <SiNginx className="text-[0.8em]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[0.8em]" /> },
];

export default function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="relative border-y border-white/10 overflow-hidden bg-[#0a0a0a]">
      <motion.div
        className="flex whitespace-nowrap py-6"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        style={{ width: "fit-content" }}
      >
        {loop.map((t, i) => (
          <span
            key={i}
            className="flex items-center shrink-0"
            style={{ marginRight: "100px" }}
          >
            <span className="font-display text-white/70 text-[44px] sm:text-[56px] leading-none uppercase font-medium flex items-center shrink-0 gap-4 tracking-wide">
              {t.icon}
              {t.name}
            </span>
            <span className="w-3 h-3 bg-white/40 rounded-full inline-block shrink-0" style={{ marginLeft: "50px" }} />
          </span>
        ))}
      </motion.div>
    </section>
  );
}
