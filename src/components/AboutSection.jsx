import React, { useEffect, useRef, useState } from "react";

// File tree data
const fileTree = [
  {
    name: "bio.txt",
    type: "file",
    content: "Sugavaneshwaran: Full Stack Developer, Designer, Cloud Enthusiast. Passionate about scalable web apps, UI/UX, and cloud tech."
  },
  {
    name: "education/",
    type: "folder",
    children: [
      {
        name: "degree.txt",
        type: "file",
        content: "B.Tech in Computer Science, Anna University, 2022."
      },
      {
        name: "certifications.txt",
        type: "file",
        content: "AWS Certified Cloud Practitioner, Google UX Design Certificate."
      }
    ]
  },
  {
    name: "interests/",
    type: "folder",
    children: [
      {
        name: "tech.txt",
        type: "file",
        content: "React, Spring Boot, Figma, Spline, Cloud, 3D UI, Open Source."
      },
      {
        name: "hobbies.txt",
        type: "file",
        content: "Photography, UI/UX Design, Gaming, Reading, Traveling."
      }
    ]
  }
];

function getFileContent(selected) {
  for (const item of fileTree) {
    if (item.type === "file" && item.name === selected) return item.content;
    if (item.type === "folder") {
      for (const child of item.children) {
        if (`${item.name}${child.name}` === selected) return child.content;
      }
    }
  }
  return "Select a file to view details.";
}

export const AboutSection = () => {
  // If you want to restore interactive features, uncomment below:
  // const [selectedFile, setSelectedFile] = useState("bio.txt");
  // const [commandOutput, setCommandOutput] = useState("");



  // ASCII art profile
  const asciiArt = `
      .---.        .-----------
     /     \  __  /    ------
    / /     \(  )/    -----
   //////   ' \/ \\--
  //// / // :    : ---
 // /   /  /\`    '--
//          //..\\
       ====UU====UU====
           '//||\\'
             ''
`;

  // Interactive command input
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [easterEgg, setEasterEgg] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(true);

  const commandSuggestions = [
    "whoami",
    "cat bio.txt",
    "sudo rm -rf /",
    "clear",
    "help",
    "cat what_i_build.txt",
    "cat design_future.txt",
    "cat build_web.txt",
    "cat innovate_3d.txt",
    "ls interests/",
    "cat interests/tech.txt",
  ];

  function handleCommand(e) {
    e.preventDefault();
    setError("");
    setEasterEgg("");
    let cmd = command.trim().toLowerCase();
    if (cmd === "whoami") {
      setOutput("sugavaneshwaran");
    } else if (cmd === "cat bio.txt") {
      setOutput("Full Stack Developer, Designer, Cloud Enthusiast. Passionate about scalable web apps, UI/UX, and cloud tech.");
    } else if (cmd === "ls skills/") {
      setOutput("Java SpringBoot React Node.js MongoDB Figma Photoshop Spline Cloud UI/UX");
    } else if (cmd === "ls certifications/") {
      setOutput("Azure AI Certified\nMongoDB with Node.js Associate Level Certified");
    } else if (cmd === "cat ascii.txt") {
      setOutput(asciiArt);
    } else if (cmd === "fortune") {
      setEasterEgg("You will build something amazing today!");
    } else if (cmd === "sudo rm -rf /") {
      setError("Error: Permission denied. Nice try!");
      setEasterEgg("🐧 Linux protects itself!");
    } else if (cmd === "clear") {
      setOutput("");
      setError("");
      setEasterEgg("");
    } else if (cmd === "help") {
      setOutput("Available commands:\n" + commandSuggestions.join("\n"));
    } else if (cmd === "cat what_i_build.txt") {
      setOutput("With advanced Figma and Photoshop skills, I design engaging UI/UX prototypes and assets. Using Spline, I integrate stunning 3D interactive elements for a modern touch. From banking systems to e-commerce platforms and ML-powered tools, I prioritize performance, usability, and aesthetics. I deliver end-to-end solutions—robust backends, sleek interfaces, and 3D designs—that create impactful experiences for users and businesses.");
    } else if (cmd === "cat design_future.txt") {
      setOutput("Using Figma and Photoshop, I create visually stunning UI/UX designs and assets that ensure intuitive and engaging user experiences.");
    } else if (cmd === "cat build_web.txt") {
      setOutput("With Java, Spring Boot, and React, I develop scalable, secure web applications that deliver seamless performance across devices.");
    } else if (cmd === "cat innovate_3d.txt") {
      setOutput("Leveraging Spline, I integrate captivating 3D interactive elements, elevating projects with modern, dynamic visuals.");
    } else if (cmd === "ls interests/") {
      setOutput("tech.txt  hobbies.txt");
    } else if (cmd === "cat interests/tech.txt") {
      setOutput("React, Spring Boot, Figma, Spline, Cloud, 3D UI, Open Source.");
    } else if (cmd === "cat interests/hobbies.txt") {
      setOutput("Photography, UI/UX Design, Gaming, Reading, Traveling.");
    } else {
      setError("Command not found: " + cmd);
    }
    setCommand("");
    setShowSuggestions(false);
  }

  return (
    <section
      id="about"
      className="py-8 sm:py-16 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-950 min-h-screen"
      style={{ fontFamily: 'IBM Plex Mono, Fira Code, monospace' }}
    >
      <div className="max-w-3xl mx-auto rounded-xl shadow-2xl border border-gray-800 font-mono text-base sm:text-lg text-green-300 relative overflow-hidden bg-gray-900/90" style={{boxShadow: "0 8px 32px 0 rgba(0,0,0,0.45), 0 1.5px 8px 0 rgba(0,255,255,0.08)"}}>
        {/* Terminal header bar */}
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-t-xl border-b border-gray-700">
          <span className="w-3 h-3 rounded-full bg-yellow-400/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-green-400/80 inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-blue-400/80 inline-block"></span>
          <span className="ml-4 text-xs text-gray-300">about @ me</span>
        </div>
        {/* CRT scanline effect */}
        <div className="absolute inset-0 pointer-events-none" style={{background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,255,0.03) 3px, transparent 4px)"}} />
        <div className="relative z-10 p-4 sm:p-8">
          {/* ASCII Art Profile */}
          <pre className="text-green-400 text-xs sm:text-sm select-none mb-4 text-center" style={{fontFamily: 'inherit'}}>{asciiArt}</pre>
          {/* Interactive Command Input */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="text-green-400 font-mono text-sm">$</span>
            <input
              className="bg-gray-900 border border-gray-700 rounded px-2 py-1 text-xs text-green-200 font-mono w-48 focus:outline-none"
              value={command}
              onChange={e => { setCommand(e.target.value); setShowSuggestions(true); }}
              placeholder="Type a command..."
              autoFocus
            />
            <button type="submit" className="px-2 py-1 rounded bg-cyan-700 text-white text-xs font-bold hover:bg-cyan-500 transition">Run</button>
          </form>
          {/* Command Suggestions */}
          {showSuggestions && (
            <div className="mb-2 text-xs text-cyan-300 font-mono flex flex-wrap gap-2">
              <span className="text-gray-400">Try:</span>
              {commandSuggestions.slice(0, 6).map(cmd => (
                <span key={cmd} className="bg-gray-800 px-2 py-1 rounded border border-cyan-700/30 cursor-pointer hover:bg-cyan-900" onClick={() => { setCommand(cmd); }}>
                  {cmd}
                </span>
              ))}
              <span className="text-gray-400">...and more (type <b>help</b>)</span>
            </div>
          )}
          {/* Output/Error/Easter Egg */}
          {output && (
            <pre className="text-green-300 text-xs sm:text-sm font-mono mb-2 whitespace-pre-line">{output}</pre>
          )}
          {error && (
            <div className="text-red-400 text-xs font-mono mb-2">{error}</div>
          )}
          {easterEgg && (
            <div className="text-yellow-300 text-xs font-mono mb-2">{easterEgg}</div>
          )}
          {/* Responsive Info Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-900 rounded-lg p-6 shadow-md border border-cyan-700/30">
              <h3 className="text-xl font-bold text-cyan-300 mb-2">$ cat what_i_build.txt</h3>
              <p className="mb-2 text-green-200">With advanced Figma and Photoshop skills, I design engaging UI/UX prototypes and assets. Using Spline, I integrate stunning 3D interactive elements for a modern touch.</p>
              <p className="text-green-200">From banking systems to e-commerce platforms and ML-powered tools, I prioritize performance, usability, and aesthetics. I deliver end-to-end solutions—robust backends, sleek interfaces, and 3D designs—that create impactful experiences for users and businesses.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-6 shadow-md border border-cyan-700/30 flex flex-col gap-4">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-1">$ ls certifications/</h4>
                <ul className="list-disc list-inside text-green-200">
                  <li>Azure AI Certified</li>
                  <li>MongoDB with Node.js Associate Level Certified</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-1">$ ls skills/</h4>
                <ul className="list-disc list-inside text-green-200">
                  <li>Java, Spring Boot, React, Node.js, MongoDB</li>
                  <li>Figma, Photoshop, Spline (3D UI)</li>
                  <li>Cloud, Open Source, UI/UX Design</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 mt-6">
            <a href="#contact" className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 text-white font-bold shadow-lg hover:scale-105 transition">$ mail sugavaneshwaran</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-gray-900 rounded-lg p-5 shadow-md border border-cyan-700/30">
              <h4 className="text-cyan-300 font-bold mb-2">$ cat design_future.txt</h4>
              <p className="text-green-200">Using Figma and Photoshop, I create visually stunning UI/UX designs and assets that ensure intuitive and engaging user experiences.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-5 shadow-md border border-cyan-700/30">
              <h4 className="text-cyan-300 font-bold mb-2">$ cat build_web.txt</h4>
              <p className="text-green-200">With Java, Spring Boot, and React, I develop scalable, secure web applications that deliver seamless performance across devices.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-5 shadow-md border border-cyan-700/30">
              <h4 className="text-cyan-300 font-bold mb-2">$ cat innovate_3d.txt</h4>
              <p className="text-green-200">Leveraging Spline, I integrate captivating 3D interactive elements, elevating projects with modern, dynamic visuals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};