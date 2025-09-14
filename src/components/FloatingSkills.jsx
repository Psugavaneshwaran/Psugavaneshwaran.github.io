import React from "react";

const skillLogos = [
  "react.svg",
  "tailwindcss.svg",
  "java.svg",
  "springboot.svg",
  "docker.svg",
  "mysql.svg",
  "mongodb.svg",
  "nodejs.svg",
  "expressjs.svg",
  "kubernetes.svg",
  "git.svg",
  "figma.svg",
  "photoshop.svg",
  "spline.svg",
];

const positions = [
  { top: "10%", left: "5%", scale: 1.1, rotate: 10 },
  { top: "20%", left: "80%", scale: 1, rotate: -8 },
  { top: "35%", left: "15%", scale: 0.9, rotate: 15 },
  { top: "50%", left: "70%", scale: 1.2, rotate: -12 },
  { top: "60%", left: "30%", scale: 1, rotate: 5 },
  { top: "75%", left: "60%", scale: 1.1, rotate: -5 },
  { top: "85%", left: "20%", scale: 0.8, rotate: 20 },
  { top: "15%", left: "50%", scale: 1.1, rotate: -15 },
  { top: "40%", left: "40%", scale: 1, rotate: 8 },
  { top: "65%", left: "80%", scale: 1.2, rotate: -10 },
  { top: "80%", left: "45%", scale: 0.9, rotate: 12 },
  { top: "30%", left: "60%", scale: 1, rotate: -7 },
  { top: "55%", left: "10%", scale: 1.1, rotate: 18 },
  { top: "90%", left: "75%", scale: 0.8, rotate: -20 },
];


// Generate unique keyframes for each skill
const floatKeyframes = skillLogos.map((_, i) => `
@keyframes float${i} {
  0% {
    transform: translateY(0) scale(${positions[i].scale}) rotate(${positions[i].rotate}deg);
  }
  25% {
    transform: translateY(-${10 + i * 2}px) scale(${positions[i].scale + 0.05}) rotate(${positions[i].rotate + 5}deg);
  }
  50% {
    transform: translateY(${8 + i * 3}px) scale(${positions[i].scale - 0.05}) rotate(${positions[i].rotate - 5}deg);
  }
  75% {
    transform: translateY(-${6 + i * 2}px) scale(${positions[i].scale + 0.03}) rotate(${positions[i].rotate + 3}deg);
  }
  100% {
    transform: translateY(0) scale(${positions[i].scale}) rotate(${positions[i].rotate}deg);
  }
}
`).join("\n");

export const FloatingSkills = () => (
  <>
    <style>{floatKeyframes}</style>
    <div className="fixed inset-0 pointer-events-none z-0">
      {skillLogos.map((logo, i) => (
        <img
          key={logo}
          src={`/src/assets/skills/${logo}`}
          alt={logo.replace(".svg", "")}
          style={{
            position: "absolute",
            top: positions[i].top,
            left: positions[i].left,
            width: "56px",
            height: "56px",
            opacity: 0.18,
            transform: `scale(${positions[i].scale}) rotate(${positions[i].rotate}deg)`,
            animation: `float${i} ${1.8 + i * 0.3}s ease-in-out infinite ${i * 0.8}s`,
            filter: "drop-shadow(0 2px 8px #0003)",
            zIndex: 0,
          }}
        />
      ))}
    </div>
  </>
);
