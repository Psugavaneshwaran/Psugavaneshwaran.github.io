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
  
];

const categories = ["all", "frontend", "backend", "database", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDark, setIsDark] = useState(false);

  // Detect dark mode by checking document.body class (Tailwind dark mode class)
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkTheme();
    // Optional: Listen for changes if you toggle dark mode dynamically
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", checkTheme);
    return () =>
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", checkTheme);
  }, []);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 px-4 relative bg-secondary/30 dark:bg-secondary-dark/30 transition-colors duration-500"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12 text-center tracking-wide text-gray-900 dark:text-gray-100">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
              className={cn(
                "px-6 py-2 rounded-full transition-all duration-300 capitalize font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-primary",
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.length === 0 ? (
            <p className="text-center text-muted-foreground col-span-full">
              No skills found in this category.
            </p>
          ) : (
            filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className={cn(
                  "relative rounded-xl p-6 cursor-pointer overflow-hidden border border-transparent transition-transform duration-300 ease-in-out",
                  isDark
                    ? "bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 shadow-[0_0_10px_2px_rgba(59,130,246,0.6)] hover:shadow-[0_0_20px_4px_rgba(96,165,250,0.8)] hover:scale-105"
                    : "bg-white shadow-md hover:scale-105 hover:shadow-[0_8px_24px_rgb(59,130,246,0.3)] border border-transparent hover:border-blue-400"
                )}
              >
                {/* Animated glowing ring */}
                <span
                  className={cn(
                    "absolute inset-0 rounded-xl pointer-events-none",
                    isDark
                      ? "animate-glowRingDark"
                      : "animate-glowRingLight"
                  )}
                ></span>

                <div className="relative z-10">
                  <h3
                    className={cn(
                      "font-semibold text-lg tracking-tight",
                      isDark ? "text-white" : "text-gray-900"
                    )}
                  >
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Additional styles for animations */}
      <style jsx>{`
        @keyframes glowRingLight {
          0%, 100% {
            box-shadow:
              0 0 10px 3px rgba(59, 130, 246, 0.4),
              0 0 20px 10px rgba(59, 130, 246, 0.15);
            transform: scale(1);
          }
          50% {
            box-shadow:
              0 0 15px 5px rgba(59, 130, 246, 0.7),
              0 0 25px 15px rgba(59, 130, 246, 0.3);
            transform: scale(1.05);
          }
        }

        @keyframes glowRingDark {
          0%, 100% {
            box-shadow:
              0 0 20px 5px rgba(96, 165, 250, 0.6),
              0 0 30px 15px rgba(96, 165, 250, 0.3);
            transform: scale(1);
          }
          50% {
            box-shadow:
              0 0 30px 10px rgba(96, 165, 250, 0.9),
              0 0 40px 20px rgba(96, 165, 250, 0.6);
            transform: scale(1.1);
          }
        }

        .animate-glowRingLight {
          animation: glowRingLight 3.5s ease-in-out infinite;
          position: absolute;
          top: 0; bottom: 0; left: 0; right: 0;
          border-radius: 1rem;
          z-index: 0;
        }

        .animate-glowRingDark {
          animation: glowRingDark 4s ease-in-out infinite;
          position: absolute;
          top: 0; bottom: 0; left: 0; right: 0;
          border-radius: 1rem;
          z-index: 0;
        }
      `}</style>
    </section>
  );
};
