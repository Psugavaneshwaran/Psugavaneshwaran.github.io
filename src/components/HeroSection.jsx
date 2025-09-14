import { motion } from "framer-motion";
import React from "react";
import { ChevronDown, Code2, Download, Rocket } from "lucide-react";

export const HeroSection = () => {
  // CRT scanline effect
  // Cyberpunk/Quantum scanline effect
  const scanlineStyle = {
    background: "repeating-linear-gradient(180deg, rgba(0,255,255,0.04) 0px, rgba(128,0,255,0.08) 2px, transparent 4px, transparent 8px)",
    pointerEvents: "none",
    position: "absolute",
    inset: 0,
    zIndex: 1,
    borderRadius: "1rem"
  };

  // Quantum grid effect
  const quantumGrid = (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <g opacity="0.15">
          {[...Array(20)].map((_, i) => (
            <circle key={i} cx={20 + i * 18} cy={100 + Math.sin(i) * 40} r="8" fill={i % 2 === 0 ? "#8F00FF" : "#00FFF0"} />
          ))}
        </g>
      </svg>
    </div>
  );

  // Boot sequence lines
  const bootLines = [
    "[ OK ] Initializing PortfolioOS...",
    "[ OK ] Loading quantum modules...",
    "[ OK ] Checking system integrity...",
    "[ OK ] Importing skills: Java, SpringBoot, React, Node.js, MongoDB...",
    "[ OK ] Importing design tools: Figma, Photoshop, Spline...",
    "[ OK ] Activating cloud services...",
    "[ OK ] System online.",
    "",
    "Sugavaneshwaran@PortfolioOS:~$"
  ];

  // Flicker animation
  const flickerClass = "animate-flicker";

  // Blinking cursor (cyberpunk purple)
  const cursor = <span className="animate-blink text-purple-400">█</span>;

  return (
    <section
      id="hero"
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[60vh] bg-black"
      style={{ perspective: "1200px" }}
    >
      {/* Quantum grid background */}
      {quantumGrid}
      {/* 3D CRT Terminal */}
      <div
        className="relative z-10 mx-auto w-full max-w-2xl shadow-2xl"
        style={{
          borderRadius: "1rem",
          boxShadow: "0 0 32px #8F00FF, 0 0 0 4px #222 inset",
          transform: "rotateY(-8deg) rotateX(4deg) scale(1.04)",
          background: "linear-gradient(135deg, #1a0033 60%, #222 100%)",
          border: "2px solid #8F00FF",
          overflow: "hidden"
        }}
      >
        {/* CRT scanlines overlay */}
        <div style={scanlineStyle} />
        {/* Terminal content */}
        <div className="relative p-6 sm:p-8 font-mono text-cyan-300 text-lg sm:text-xl tracking-wide" style={{ minHeight: "340px" }}>
          {/* Name at top with gradient color */}
          <div className="w-full flex justify-center mb-2">
            <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg animate-gradient-x">
              Sugavaneshwaran
            </span>
          </div>
          {/* Flicker effect */}
          <div className={flickerClass}>
            {/* Boot sequence animation */}
            <BootSequence lines={bootLines} cursor={cursor} />
            {/* Description after boot */}
            <div className="mt-6 text-purple-200 text-base sm:text-lg max-w-xl mx-auto opacity-90">
              Crafting intelligent solutions through full-stack development, machine learning, and modern frameworks.<br />
              Driven by adaptability and a passion for creating impactful digital experiences.
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="#projects"
                className="relative flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full shadow-md hover:bg-purple-400 transition"
                style={{ boxShadow: "0 0 16px #8F00FF" }}
              >
                View My Work
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20">
        <span className="text-sm sm:text-base text-cyan-300 mb-2">Scroll</span>
        <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 animate-bounce" />
      </div>
      {/* Flicker, blink, and gradient keyframes */}
      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          45% { opacity: 0.92; }
          48% { opacity: 0.98; }
          50% { opacity: 0.85; }
          52% { opacity: 0.98; }
          55% { opacity: 0.92; }
        }
        .animate-flicker { animation: flicker 1.8s infinite linear alternate; }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .animate-blink { animation: blink 1s steps(1) infinite; }
        @keyframes gradient-x {
          0%,100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );

}

// Boot sequence animation component
function BootSequence({ lines, cursor }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    if (step < lines.length) {
      const t = setTimeout(() => setStep(step + 1), step < lines.length - 2 ? 350 : 700);
      return () => clearTimeout(t);
    }
  }, [step, lines.length]);
  return (
    <pre className="whitespace-pre-line text-green-400 text-lg sm:text-xl font-mono select-none">
      {lines.slice(0, step).join("\n")}
      {step === lines.length && cursor}
    </pre>
  );
}