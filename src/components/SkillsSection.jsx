import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import React from "react";

const skills = [
  // Frontend
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Java", category: "backend" },
  { name: "Spring Boot", category: "backend" },
  { name: "REST APIs", category: "backend" },
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
  // Interactive terminal state
  const [command, setCommand] = useState('ls skills/');
  const [output, setOutput] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let match = command.match(/^ls skills\/?(\w+)?$/);
    if (match) {
      setError('');
      let category = match[1];
      let filtered = category && category !== 'all'
        ? skills.filter(s => s.category === category).map(s => s.name)
        : skills.map(s => s.name);
      // Format output in columns
      const columns = 4;
      const rows = Math.ceil(filtered.length / columns);
      const skillGrid = Array.from({ length: rows }, (_, r) =>
        Array.from({ length: columns }, (_, c) => filtered[r + c * rows]).filter(Boolean)
      );
      setOutput(skillGrid.flat());
    } else {
      setError('Command not found. Try: ls skills/, ls skills/frontend, ls skills/backend, ls skills/database, ls skills/tools');
      setOutput([]);
    }
  }, [command]);

  return (
    <section
      id="skills"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 relative"
    >
      {/* Animated particles */}
      <style>{`
        @keyframes particleMove {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(-30px) translateX(20px) scale(1.2); opacity: 0.6; }
          100% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
        }
      `}</style>
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-cyan-400/20"
            style={{
              width: `${16 + Math.random() * 24}px`,
              height: `${16 + Math.random() * 24}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `particleMove ${6 + Math.random() * 6}s linear infinite`,
              animationDelay: `${Math.random() * 4}s`,
              opacity: 0.18,
              filter: "blur(2px)",
              zIndex: 0,
            }}
          />
        ))}
      </div>
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">Skills</h2>
          <p className="text-gray-300">Type a command below to list skills by category.</p>
          <div className="mt-4 inline-block bg-gray-800/80 text-cyan-300 px-4 py-2 rounded-lg shadow border border-cyan-400/20 text-sm">
            <span className="font-semibold text-green-400">Examples:</span> <br />
            <span className="text-green-400">$</span> ls skills/<span className="text-cyan-400">frontend</span> &nbsp;
            <span className="text-green-400">$</span> ls skills/<span className="text-cyan-400">backend</span> &nbsp;
            <span className="text-green-400">$</span> ls skills/<span className="text-cyan-400">database</span> &nbsp;
            <span className="text-green-400">$</span> ls skills/<span className="text-cyan-400">tools</span> &nbsp;
            <span className="text-green-400">$</span> ls skills/<span className="text-cyan-400">all</span>
          </div>
        </div>
        <div className="bg-gray-950 rounded-xl shadow-2xl border border-gray-800 p-0 font-mono text-base sm:text-lg text-green-400 relative overflow-hidden" style={{boxShadow: "0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(0,255,255,0.08)"}}>
          {/* Terminal header bar */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 rounded-t-xl border-b border-gray-800">
            <span className="w-3 h-3 rounded-full bg-red-400/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block"></span>
            <span className="ml-4 text-xs text-gray-400">my@skills:~</span>
          </div>
          <div className="px-6 pb-6 pt-4">
            <div className="mb-2 text-cyan-300 flex items-center">
              <span className="text-green-400">$</span>
              <input
                type="text"
                value={command}
                onChange={e => setCommand(e.target.value)}
                className="bg-transparent outline-none border-none text-cyan-300 ml-2 w-full"
                spellCheck={false}
                autoFocus
              />
            </div>
            {error ? (
              <div className="text-red-400 mt-2">{error}</div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-2">
                {output.map((skill, i) => (
                  <span key={skill} className="block px-2 py-1 rounded hover:bg-cyan-400/10 transition-colors duration-200">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}