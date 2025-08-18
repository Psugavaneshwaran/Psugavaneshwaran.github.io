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
        "fixed w-full z-50 transition-all duration-700 ease-in-out",
        isScrolled
          ? "py-2 bg-gradient-to-r from-indigo-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-2xl shadow-lg border-b border-cyan-400/30"
          : "py-4 bg-gradient-to-r from-indigo-800/80 via-blue-800/80 to-indigo-800/80 backdrop-blur-xl"
      )}
      style={{
        backgroundImage: isScrolled
          ? "linear-gradient(90deg, rgba(49, 46, 129, 0.95), rgba(30, 58, 138, 0.95), rgba(49, 46, 129, 0.95))"
          : "linear-gradient(90deg, rgba(55, 48, 163, 0.8), rgba(29, 78, 216, 0.8), rgba(55, 48, 163, 0.8))",
        animation: "gradientShift 12s ease-in-out infinite",
        backgroundSize: "200% 200%",
      }}
    >
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          className="text-2xl sm:text-3xl font-extrabold text-cyan-400 flex items-center group relative overflow-hidden"
          href="#hero"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActiveSection("hero");
          }}
        >
          <span className="relative z-10">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-500">
              Sugavanesh's
            </span>{" "}
            <span className="text-gray-200 group-hover:text-cyan-400 transition-colors duration-500">
              Portfolio
            </span>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "relative px-3 py-2 sm:px-4 sm:py-2 text-sm sm:text-base font-semibold rounded-xl transition-all duration-300 group",
                  activeSection === sectionId
                    ? "text-cyan-400 bg-cyan-400/10 shadow-inner"
                    : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/5"
                )}
                onClick={() => setActiveSection(sectionId)}
              >
                {item.name}
                {activeSection === sectionId && (
                  <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" />
                )}
                <span className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
              </a>
            );
          })}
        </div>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-full hover:bg-cyan-400/10 transition-colors duration-300 z-50 relative overflow-hidden"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? (
            <X size={28} className="text-cyan-400 relative z-10" />
          ) : (
            <Menu size={28} className="text-cyan-400 relative z-10" />
          )}
          <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </button>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-0 bg-gradient-to-b from-indigo-900/95 via-blue-900/95 to-indigo-900/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden",
            "transition-all duration-700 ease-in-out",
            isMenuOpen
              ? "opacity-100 scale-100 pointer-events-auto"
              : "opacity-0 scale-90 pointer-events-none"
          )}
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(49, 46, 129, 0.95), rgba(30, 58, 138, 0.95), rgba(49, 46, 129, 0.95))",
            animation: "gradientShift 12s ease-in-out infinite",
            backgroundSize: "200% 200%",
          }}
        >
          <div className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-2xl sm:text-3xl font-semibold px-8 py-4 rounded-2xl transition-all duration-300 relative group",
                    activeSection === sectionId
                      ? "text-cyan-400 bg-cyan-400/20 shadow-lg"
                      : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
                  )}
                  onClick={() => {
                    setIsMenuOpen(false);
                    setActiveSection(sectionId);
                  }}
                >
                  {item.name}
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};