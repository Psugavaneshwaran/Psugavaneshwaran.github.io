import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
  return (
    <section
      id="projects"
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

          .projects-bg-layer {
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

          .image-hover {
            transition: transform 0.5s ease-in-out;
          }

          .card-hover:hover .image-hover {
            transform: scale(1.15) rotate(3deg);
          }

          .tag-hover {
            transition: all 0.3s ease-in-out;
          }

          .tag-hover:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(34, 211, 238, 0.3);
          }
        `}
      </style>
      <div className="projects-bg-layer" />
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center opacity-0 animate-[fadeInUp_1s_ease-in-out_0.2s_forwards]">
          Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">Projects</span>
        </h2>

        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto text-base sm:text-lg opacity-0 animate-[fadeInUp_1s_ease-in-out_0.4s_forwards]">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 animate-[fadeInUp_1s_ease-in-out_0.6s_forwards]">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group relative rounded-xl overflow-hidden bg-gradient-to-br from-indigo-900/80 to-blue-900/80 backdrop-blur-md border border-cyan-400/30 card-hover animate-[cardHoverGlow_4s_ease-in-out_infinite]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover image-hover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/30 tag-hover">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold mb-1 text-cyan-400">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 opacity-0 animate-[fadeInUp_1s_ease-in-out_0.8s_forwards]">
          <a
            className="relative inline-block px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold text-white bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full hover:from-sky-400 hover:to-cyan-400 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-cyan-400/60 group animate-[buttonGlow_4s_ease-in-out_infinite] card-hover flex items-center mx-auto gap-2 w-fit"
            target="_blank"
            href="https://github.com/sugavaneshwaranp"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};