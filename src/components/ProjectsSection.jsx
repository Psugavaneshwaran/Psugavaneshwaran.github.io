import { ExternalLink, Github } from "lucide-react";
import React from "react";

const distros = [
  {
    name: "Ubuntu",
    bg: "bg-gradient-to-br from-blue-400 via-grey-800 to-black",
    header: "bg-blue-900",
    prompt: <span className="text-blue-400">ubuntu@projects:~$</span>,
    accent: "text-blue-400",
  },
  {
    name: "Kali",
    bg: "bg-gradient-to-br from-blue-900 via-gray-900 to-black",
    header: "bg-blue-900",
    prompt: <span className="text-blue-400">kali@projects:~$</span>,
    accent: "text-blue-400",
  },
  {
    name: "Arch",
    bg: "bg-gradient-to-br from-cyan-900 via-gray-900 to-black",
    header: "bg-cyan-900",
    prompt: <span className="text-cyan-400">arch@projects:~$</span>,
    accent: "text-cyan-400",
  },
  {
    name: "Fedora",
    bg: "bg-gradient-to-br from-indigo-900 via-gray-900 to-black",
    header: "bg-indigo-900",
    prompt: <span className="text-indigo-400">fedora@projects:~$</span>,
    accent: "text-indigo-400",
  },
];

const projects = [
  {
    id: 1,
    title: "Banking System - SpringBoot Starter Project",
    description: "Designed and implemented a banking system using Spring Boot, JSP, and MySQL, account management, and fund transfers.",
    image: "/projects/project1.png",
    tags: ["Java","MySQL","Docker","Kubernetes"],
    demoUrl: "#",
    githubUrl: "https://github.com/SugavaneshwaranP/Banking-Application-SpringBoot",
  },
  {
    id: 2,
    title: "Drug Inventory and Supply chain Management System",
    description:
      "The Drug Inventory Supply Chain Tracking System automates drug stock management with real time tracking and analytics. ",
    image: "/projects/project2.png",
    tags: ["React","Node.js","Express.js","MongoDB","Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/SugavaneshwaranP/Drug-Inventory-and-Supply-Chain-Tracking-System",
  },
  {
    id: 3,
    title: "TechSync",
    description:
      " TechSync is a dynamic platform designed to revolutionize the way you connect, collaborate, and create in the tech world.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Express.js","MongoDB", "Tailwind CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/SugavaneshwaranP/TechSync",
  },

  {
    id: 4,
    title: "Skin Disease Prediction Using Machine Learning and Deep Learning",
    description:
      " Improving diagnostic accuracy by analyzing medical image patterns for early detection. Enabling automated, scalable screening to enhance dermatological care access",
    image: "/projects/project4.png",
    tags: ["Python","Machine Learning","Deep Learning"],
    demoUrl: "#",
    githubUrl: "https://github.com/SugavaneshwaranP/Skin-disease-prediction-using-machine-learning-and-deep-learning",
  },

  {
    id: 5,
    title: "CarHouse",
    description:
" UI/UX in Figma, 3D Showcase in Spline: CarHouse blends sleek automotive browsing with immersive 3D vehicle previews for a next-gen car buying experience.Designed in Figma, powered by Spline: Explore photorealistic 3D car models with interactive customization in this modern automotive platform.Figma meets Spline: A revolutionary car marketplace featuring intuitive interfaces and lifelike 3D vehicle visualizations. ",   image: "/projects/project5.png",
    tags: [ "Spline", "Figma"],
    demoUrl: "#",
  },
  {
    id: 6,
    title: "Whatsapp Clone",
    description:
" UI/UX in Figma, 3D magic in Spline: This WhatsApp clone combines sleek messaging design with interactive 3D elements for a futuristic chat experience.Designed in Figma, elevated with Spline: Experience floating message bubbles, animated reactions and immersive 3D call screens in this modern WhatsApp redesign.Figma meets Spline: A next-gen WhatsApp UI with polished messaging flows enhanced by dynamic 3D animations and depth effects.",
    image: "/projects/project6.png",
    tags: [ "Spline", "Figma"],
    demoUrl: "#",
  },
];

export const ProjectsSection = () => {
  const [distroIdx, setDistroIdx] = React.useState(0);

  const distro = distros[distroIdx];

  // Typing effect state
  const [typedIdx, setTypedIdx] = React.useState(-1);
  const [showLoader, setShowLoader] = React.useState(false);
  const [showError, setShowError] = React.useState(false);
  React.useEffect(() => {
    setShowLoader(true);
    setShowError(false);
    setTypedIdx(-1);
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
      setTypedIdx(0);
    }, 1200);
    // Randomly show error for fun
    const errorTimeout = setTimeout(() => {
      if (Math.random() < 0.18) setShowError(true);
    }, 2500);
    return () => { clearTimeout(loaderTimeout); clearTimeout(errorTimeout); };
  }, [distroIdx]);

  // ASCII art banner
  const asciiBanner = `
   ____            _           _       
  |  _ \ ___  _ __| | ___  ___| |_ ___ 
  | |_) / _ \| '__| |/ _ \/ __| __/ __|
  |  __/ (_) | |  | |  __/ (__| |_\__ \
  |_|   \___/|_|  |_|\___|\___|\__|___/
`;

  // CRT scanline effect
  const crtStyle = {
    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 22px, rgba(255,255,255,0.04) 23px, transparent 24px)",
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(0,255,255,0.08)",
  };

  // Typing effect for project details
  const [typedText, setTypedText] = React.useState("");
  React.useEffect(() => {
    if (typedIdx >= 0 && typedIdx < projects.length) {
      let text = `${projects[typedIdx].title}\n${projects[typedIdx].description}\nTags: ${projects[typedIdx].tags.join(", ")}`;
      let i = 0;
      setTypedText("");
      const interval = setInterval(() => {
        setTypedText(text.slice(0, i));
        i++;
        if (i > text.length) {
          clearInterval(interval);
          setTimeout(() => setTypedIdx(typedIdx + 1), 800);
        }
      }, 18);
      return () => clearInterval(interval);
    }
  }, [typedIdx]);

  // Progress bar loader
  const loaderBar = (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <pre className="text-green-400 text-xs mb-2">Loading projects...</pre>
      <div className="w-2/3 h-3 bg-gray-800 rounded-full overflow-hidden">
        <div className="h-3 bg-green-400 animate-pulse" style={{width: '100%'}}></div>
      </div>
    </div>
  );

  // Playful error output
  const errorOutput = (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <pre className="text-purple-400 text-xs mb-2">Playfull Error😂 more Secured -- switch Linux version 👉😊 </pre>
      <pre className="text-yellow-400 text-xs">Permission denied: cannot access /projects/</pre>
    </div>
  );

  return (
    <section
      id="projects"
      className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${distro.bg} transition-all duration-500 relative`}
    >
      {/* Floating line particles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 80 + 40}px`,
              height: "2px",
              background: "linear-gradient(90deg, #00fff0 0%, #8F00FF 100%)",
              opacity: Math.random() * 0.4 + 0.2,
              borderRadius: "2px",
              animation: `floatLine ${Math.random() * 8 + 8}s linear infinite`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes crtFlicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.97; }
        }
        @keyframes floatLine {
          0% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-30px); opacity: 0.6; }
          100% { transform: translateY(0px); opacity: 0.3; }
        }
      `}</style>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-8 text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-2 ${distro.accent}`}>Projects</h2>
          <p className="text-gray-300">Switch Linux version to change the terminal theme!</p>
          <div className="flex justify-center gap-3 mt-4">
            {distros.map((d, i) => (
              <button
                key={d.name}
                onClick={() => setDistroIdx(i)}
                className={`px-4 py-2 rounded-full font-semibold shadow-sm border border-gray-700 transition-all duration-300 ${distroIdx === i ? `${d.accent} bg-gray-900/80` : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80"}`}
              >
                {d.name}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl shadow-2xl border border-gray-800 font-mono text-base sm:text-lg text-gray-200 relative overflow-hidden" style={crtStyle}>
          {/* CRT scanline overlay */}
          <div style={{position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, mixBlendMode: 'soft-light', animation: 'crtFlicker 2.5s infinite'}}></div>
          {/* Terminal header bar */}
          <div className={`flex items-center gap-2 px-4 py-2 ${distro.header} rounded-t-xl border-b border-gray-800`}>
            <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-blue-400/80 inline-block"></span>
            <span className="ml-4 text-xs text-gray-300">{distro.name} Terminal</span>
          </div>
          <div className="px-6 pb-6 pt-4">
            {/* ASCII Art Banner */}
            <pre className="text-green-400 text-xs mb-4 leading-none select-none" style={{fontFamily: 'monospace'}}>{asciiBanner}</pre>
            <div className="mb-4 flex items-center gap-2 text-lg">
              {distro.prompt}
              <span className="text-gray-300">cat projects/</span>
            </div>
            {/* Loader, Error, or Typing Effect */}
            {showLoader ? loaderBar : showError ? errorOutput : (
              <div className="space-y-8">
                {typedIdx >= 0 && projects.slice(0, typedIdx + 1).map((project, key) => {
                  const cardDistro = distros[key % distros.length];
                  return (
                    <div key={key} className={`rounded-xl shadow-2xl border border-gray-800 font-mono text-base sm:text-lg text-gray-200 relative overflow-hidden bg-gray-900/80`} style={{boxShadow: "0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(0,255,255,0.08)"}}>
                      {/* Terminal header bar */}
                      <div className={`flex items-center gap-2 px-4 py-2 ${cardDistro.header} rounded-t-xl border-b border-gray-800`}>
                        <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-blue-400/80 inline-block"></span>
                        <span className="ml-4 text-xs text-gray-300">{cardDistro.name} Terminal</span>
                      </div>
                      <div className="px-6 pb-6 pt-4">
                        <div className="mb-4 flex items-center gap-2 text-lg">
                          {cardDistro.prompt}
                          <span className="text-gray-300">cat {project.title.replace(/\s+/g, '-').toLowerCase()}/</span>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                          <img src={project.image} alt={project.title} className="w-24 h-24 object-cover rounded-lg border border-gray-800 shadow" />
                          <div className="flex-1">
                            <h3 className={`font-bold text-xl mb-1 ${cardDistro.accent}`}>{project.title}</h3>
                            <pre className="text-gray-300 text-sm mb-2 whitespace-pre-line" style={{fontFamily: 'inherit'}}>{typedIdx === key ? typedText : `${project.description}\nTags: ${project.tags.join(", ")}`}</pre>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {project.tags && project.tags.map((tag, i) => (
                                <span key={i} className={`px-3 py-1 rounded-full bg-gray-800/80 ${cardDistro.accent} text-xs font-semibold shadow-sm border border-gray-700`}>{tag}</span>
                              ))}
                            </div>
                            <div className="flex gap-4 mt-2">
                              {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-900/60 ${cardDistro.accent} hover:bg-gray-800/80 transition-colors duration-300 font-medium shadow`}>
                                  <Github className="w-5 h-5" />
                                  <span>GitHub</span>
                                </a>
                              )}
                              {project.demoUrl && project.demoUrl !== "#" && (
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-gray-800/80 text-white hover:bg-gray-900 transition-colors duration-300 font-medium shadow`}>
                                  <ExternalLink className="w-5 h-5" />
                                  <span>Live Demo</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};