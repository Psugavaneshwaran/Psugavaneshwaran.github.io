import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "REST APIs", category: "backend" },
  { name: "Machine Learning (ML integration)", category: "backend" },
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },

  // Database
  { name: "MySQL", category: "database" },
  { name: "MongoDB", category: "database" },
  { name: "MySQL Workbench", category: "database" },

  // Tools & Others
  { name: "Linux commands", category: "tools" },
  { name: "Kubernetes", category: "tools" },
  { name: "EC2", category: "tools" },
  { name: "Docker", category: "tools" },
  { name: "Git", category: "tools" },
  { name: "Android Studio", category: "tools" },
  { name: "Spring Tool Suite (STS)", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "Photoshop", category: "tools" },
  { name: "Spline", category: "tools" },
];

const categories = ["all", "frontend", "backend", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden perspective-1000"
      style={{
        backgroundImage: "linear-gradient(135deg, rgba(49, 46, 129, 0.95), rgba(30, 58, 138, 0.85), rgba(56, 189, 248, 0.7))",
        animation: "gradientShift 12s ease-in-out infinite",
        backgroundSize: "200% 200%",
      }}
    >
      <style>
        {`
          .perspective-1000 {
            perspective: 1000px;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .skills-bg-layer {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(45deg, rgba(6, 182, 212, 0.6), rgba(30, 58, 138, 0.75), rgba(49, 46, 129, 0.9)),
              linear-gradient(225deg, rgba(14, 165, 233, 0.5), rgba(30, 64, 175, 0.7), rgba(49, 46, 129, 0.8)),
              radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.4), transparent 70%);
            background-size: 300% 300%, 250% 250%, 200% 200%;
            animation: gradientShift2 18s ease-in-out infinite reverse, gradientShift3 15s ease-in-out infinite, radialPulse 10s ease-in-out infinite;
            z-index: 0;
            opacity: 0.8;
            transform: translateZ(-100px);
          }

          @keyframes gradientShift2 {
            0% { background-position: 100% 50%; }
            50% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          @keyframes gradientShift3 {
            0% { background-position: 50% 0%; }
            50% { background-position: 50% 100%; }
            100% { background-position: 50% 0%; }
          }

          @keyframes radialPulse {
            0%, 100% { background-size: 200% 200%; opacity: 0.8; }
            50% { background-size: 250% 250%; opacity: 0.5; }
          }

          .particle-overlay {
            position: absolute;
            inset: 0;
            pointer-events: none;
            z-index: 1;
          }

          .particle {
            position: absolute;
            border-radius: 50%;
            background: rgba(34, 211, 238, 0.7);
            box-shadow: 0 0 12px rgba(34, 211, 238, 0.6), 0 0 20px rgba(56, 189, 248, 0.4);
            animation: particleOrbit 12s linear infinite, particleGlow 2s ease-in-out infinite alternate, particleSparkle 3s ease-in-out infinite;
            transform-style: preserve-3d;
          }

          .particle:nth-child(1) { top: 5%; left: 10%; width: 3px; height: 3px; animation-delay: 0s, 0s, 0s; animation-duration: 14s, 1.5s, 2.5s; }
          .particle:nth-child(2) { top: 20%; left: 25%; width: 4px; height: 4px; animation-delay: -1s, -0.5s, -0.8s; animation-duration: 16s, 2s, 3s; background: rgba(56, 189, 248, 0.7); }
          .particle:nth-child(3) { top: 35%; left: 40%; width: 2px; height: 2px; animation-delay: -2s, -1s, -1.2s; animation-duration: 18s, 1.8s, 2.8s; }
          .particle:nth-child(4) { top: 50%; left: 55%; width: 5px; height: 5px; animation-delay: -3s, -1.5s, -1.6s; animation-duration: 13s, 2.2s, 3.2s; background: rgba(59, 130, 246, 0.7); }
          .particle:nth-child(5) { top: 65%; left: 70%; width: 3px; height: 3px; animation-delay: -4s, -2s, -2s; animation-duration: 15s, 1.6s, 2.7s; }
          .particle:nth-child(6) { top: 80%; left: 15%; width: 4px; height: 4px; animation-delay: -5s, -2.5s, -2.4s; animation-duration: 17s, 2.5s, 3.1s; background: rgba(56, 189, 248, 0.7); }
          .particle:nth-child(7) { top: 10%; left: 85%; width: 2px; height: 2px; animation-delay: -6s, -3s, -2.8s; animation-duration: 19s, 1.7s, 2.9s; }
          .particle:nth-child(8) { top: 25%; left: 30%; width: 3px; height: 3px; animation-delay: -7s, -3.5s, -3.2s; animation-duration: 14s, 2.3s, 3.3s; background: rgba(34, 211, 238, 0.7); }
          .particle:nth-child(9) { top: 40%; left: 45%; width: 4px; height: 4px; animation-delay: -8s, -4s, -3.6s; animation-duration: 16s, 1.9s, 2.6s; background: rgba(59, 130, 246, 0.7); }
          .particle:nth-child(10) { top: 55%; left: 60%; width: 2px; height: 2px; animation-delay: -9s, -4.5s, -4s; animation-duration: 18s, 2.1s, 3s; }
          .particle:nth-child(11) { top: 70%; left: 75%; width: 3px; height: 3px; animation-delay: -10s, -5s, -4.4s; animation-duration: 15s, 1.8s, 2.8s; background: rgba(56, 189, 248, 0.7); }
          .particle:nth-child(12) { top: 85%; left: 20%; width: 4px; height: 4px; animation-delay: -11s, -5.5s, -4.8s; animation-duration: 17s, 2.4s, 3.4s; background: rgba(34, 211, 238, 0.7); }

          @keyframes particleOrbit {
            0% { transform: rotateY(0deg) translateX(40px) rotateZ(0deg) translateY(20px); opacity: 0.7; }
            50% { transform: rotateY(180deg) translateX(-40px) rotateZ(180deg) translateY(-20px); opacity: 0.4; }
            100% { transform: rotateY(360deg) translateX(40px) rotateZ(360deg) translateY(20px); opacity: 0.7; }
          }

          @keyframes particleGlow {
            0% { box-shadow: 0 0 12px rgba(34, 211, 238, 0.6), 0 0 20px rgba(56, 189, 248, 0.4); }
            100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.8), 0 0 30px rgba(56, 189, 248, 0.6); }
          }

          @keyframes particleSparkle {
            0%, 100% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.5); opacity: 1; }
          }

          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(30px) rotateX(15deg); filter: blur(4px); }
            100% { opacity: 1; transform: translateY(0) rotateX(0deg); filter: blur(0); }
          }

          @keyframes cardHoverGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.5), inset 0 0 10px rgba(56, 189, 248, 0.3); }
            50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.7), inset 0 0 15px rgba(56, 189, 248, 0.5); }
          }

          @keyframes buttonGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(34, 211, 238, 0.6), 0 0 30px rgba(56, 189, 248, 0.4); }
            50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.8), 0 0 40px rgba(56, 189, 248, 0.6); }
          }

          .card-hover {
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            transform-style: preserve-3d;
          }

          .card-hover:hover {
            transform: translateY(-10px) scale(1.05) rotateX(8deg) rotateY(5deg);
            box-shadow: 0 20px 40px rgba(34, 211, 238, 0.4);
          }

          .category-button {
            transition: all 0.3s ease-in-out;
          }

          .category-button:hover {
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(34, 211, 238, 0.5);
          }
        `}
      </style>
      <div className="skills-bg-layer" />
      <div className="particle-overlay">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center opacity-0 animate-[fadeInUp_1s_ease-in-out_0.2s_forwards]">
          My <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 opacity-0 animate-[fadeInUp_1s_ease-in-out_0.4s_forwards]">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "px-4 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 capitalize font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 category-button",
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-400 to-sky-400 text-white shadow-lg animate-[buttonGlow_4s_ease-in-out_infinite]"
                  : "bg-indigo-900/80 text-gray-300 hover:bg-indigo-800/80 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 opacity-0 animate-[fadeInUp_1s_ease-in-out_0.6s_forwards]">
          {filteredSkills.length === 0 ? (
            <p className="text-center text-gray-300 col-span-full text-lg">
              No skills found in this category.
            </p>
          ) : (
            filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="relative p-6 rounded-xl bg-gradient-to-br from-indigo-900/80 to-blue-900/80 backdrop-blur-md border border-cyan-400/30 card-hover animate-[cardHoverGlow_4s_ease-in-out_infinite]"
              >
                <div className="text-center">
                  <h3 className="font-semibold text-lg sm:text-xl text-cyan-400">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};