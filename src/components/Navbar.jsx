import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-700 ease-in-out font-sans",
        isScrolled
          ? "py-2 bg-white/10 backdrop-blur-xl shadow-2xl border-b border-gray-300/20"
          : "py-4 bg-white/5 backdrop-blur-lg shadow-lg"
      )}
      style={{ borderRadius: '18px', fontFamily: 'SF Pro Display, Inter, sans-serif' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* MacOS traffic lights + Linux terminal bar */}
        <div className="flex items-center gap-4">
          <div className="flex gap-2 mr-4">
            <span className="w-3 h-3 rounded-full bg-red-500 border border-red-300 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 border border-yellow-200 shadow-sm" />
            <span className="w-3 h-3 rounded-full bg-green-500 border border-green-300 shadow-sm" />
          </div>
          <span className="text-xs sm:text-sm font-mono text-gray-400 bg-gray-900/60 px-2 py-1 rounded-lg border border-gray-700/30 shadow-inner">Sugavanesh@portfolio:~$</span>
        </div>
      

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 group font-mono",
                  activeSection === sectionId
                    ? "text-blue-400 bg-blue-400/10 shadow-inner border-b-2 border-blue-400"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-400/5"
                )}
                onClick={() => setActiveSection(sectionId)}
              >
                <span className="flex items-center gap-1">
                  <span className="inline-block w-4 h-4 bg-gray-400 rounded-sm" style={{ mask: `url(/icons/${item.name.toLowerCase()}.svg) no-repeat center / contain`, WebkitMask: `url(/icons/${item.name.toLowerCase()}.svg) no-repeat center / contain` }} />
                  {item.name}
                </span>
                {activeSection === sectionId && (
                  <span className="absolute left-2 right-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                )}
                <span className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              </a>
            );
          })}
        </div>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-full hover:bg-blue-400/10 transition-colors duration-300 z-50 relative overflow-hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X size={28} className="text-blue-400 relative z-10" />
          ) : (
            <Menu size={28} className="text-blue-400 relative z-10" />
          )}
          <span className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-gradient-to-b from-gray-900/95 via-blue-900/95 to-gray-900/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden",
            "transition-all duration-700 ease-in-out",
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          )}
          style={{ borderRadius: '18px' }}
        >
          <div className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-2xl sm:text-3xl font-semibold px-8 py-4 rounded-2xl transition-all duration-300 relative group font-mono",
                    activeSection === sectionId
                      ? "text-blue-400 bg-blue-400/20 shadow-lg border-b-2 border-blue-400"
                      : "text-gray-300 hover:text-blue-400 hover:bg-blue-400/10"
                  )}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(sectionId);
                  }}
                >
                  <span className="flex items-center gap-1">
                    <span className="inline-block w-5 h-5 bg-gray-400 rounded-sm" style={{ mask: `url(/icons/${item.name.toLowerCase()}.svg) no-repeat center / contain`, WebkitMask: `url(/icons/${item.name.toLowerCase()}.svg) no-repeat center / contain` }} />
                    {item.name}
                  </span>
                  <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse" />
                  <span className="absolute inset-0 bg-blue-400/10 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      {/* MacOS+Linux Navbar Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
        @font-face {
          font-family: 'SF Pro Display';
          src: local('SF Pro Display'), url('https://fonts.cdnfonts.com/s/17374/SFProDisplay-Regular.woff') format('woff');
        }
      `}</style>
    </nav>
  );
};