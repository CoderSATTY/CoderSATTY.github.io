import React, { useEffect } from "react";
import "./App.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import OpenSource from "./components/OpenSource";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

function App() {
  useEffect(() => {
    document.title = "Satyam's Portfolio";
  }, []);

  return (
    <div className="App noise bg-[#0a0a0a] text-[#f5f5f5]">
      <Cursor />
      <Navbar />

      <div className="relative z-10">
        <div className="bg-[#0a0a0a]">
          <Hero />
          <Marquee />
          <About />
        </div>
        <div className="bg-[#111111]">
          <Stack />
        </div>
        <div className="bg-[#0a0a0a]">
          <Experience />
        </div>
      </div>

      <div className="relative z-[100]">
        <div className="bg-[#111111]">
          <Projects />
        </div>
        <div className="bg-[#0a0a0a]">
          <OpenSource />
        </div>
        <div className="bg-[#111111]">
          <Achievements />
        </div>
        <div className="bg-[#0a0a0a]">
          <Certifications />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
