import logo from "../assets/images/app-icon.png";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

// Smooth scroll function with easing
const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const headerHeight = 80; // Approximate header height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

  // Easing function for smooth animation
  const easeInOutCubic = (t: number): number => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const startPosition = window.pageYOffset;
  const distance = offsetPosition - startPosition;
  const duration = 500; // milliseconds - slightly smoother
  let start: number | null = null;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const progressRatio = Math.min(progress / duration, 1);
    const ease = easeInOutCubic(progressRatio);

    window.scrollTo(0, startPosition + distance * ease);

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = scrollTop / (documentHeight - windowHeight);
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Magnetic effect for logo
  const handleLogoMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  const handleLogoMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar - Gold/Pink Gradient */}
      <div
        className="fixed top-0 left-0 w-full h-[3px] bg-gradient-to-r from-primary via-accent to-secondary origin-left z-[100]"
        style={{
          transform: `scaleX(${scrollProgress})`,
          transition: "transform 0.1s ease-out",
        }}
      />

      <header
        className={`fixed z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "top-4 left-4 right-4 rounded-2xl bg-white/70 backdrop-blur-xl shadow-lg shadow-primary/5 border border-white/40 py-2"
            : "top-0 left-0 right-0 bg-transparent border-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 cursor-pointer group magnetic"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleLogoMouseLeave();
            }}
            onMouseMove={handleLogoMouseMove}
            style={{
              transform: `translate(${mousePosition.x * 0.15}px, ${
                mousePosition.y * 0.15
              }px)`,
            }}
          >
            <div
              className={`relative w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-all duration-500 ${
                isHovered
                  ? "scale-110 shadow-xl shadow-primary/40 rotate-12"
                  : "scale-100 shadow-lg shadow-primary/20"
              }`}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/50 to-accent/50 blur-sm animate-pulse-soft" />
              <img
                src={logo}
                alt="Energia Logo"
                className="relative w-full h-full object-contain rounded-full p-1"
              />
            </div>
            <span
              className={`text-2xl font-bold font-heading bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-500 ${
                isHovered ? "scale-105" : ""
              }`}
            >
              Energia
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { id: "about", label: "About" },
              { id: "features", label: "Features" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="relative px-5 py-2 text-foreground/70 font-sans font-medium hover:text-primary transition-all duration-300 group cursor-pointer rounded-full hover:bg-white/50"
              >
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}

            {/* CTA Button with Magnetic Effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Button
                size="md"
                className="relative cursor-pointer overflow-hidden bg-gradient-to-r from-accent to-yellow-500 text-white rounded-full px-6 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300 border-none"
                onClick={() => smoothScrollTo("cta")}
              >
                <Download className="w-4 h-4 mr-2" />
                <span className="font-semibold">Download</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="md:hidden p-2 rounded-lg text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-4 space-y-2">
            {[
              { id: "about", label: "About" },
              { id: "features", label: "Features" },
              { id: "contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="block px-4 py-3 text-foreground/80 font-medium hover:text-primary hover:bg-white/50 rounded-xl transition-all duration-300"
              >
                {item.label}
              </a>
            ))}

            {/* Mobile CTA Button */}
            <Button
              size="lg"
              className="w-full mt-4 bg-gradient-to-r from-accent to-yellow-500 text-white rounded-xl shadow-lg shadow-accent/20"
              onClick={() => {
                setIsMobileOpen(false);
                smoothScrollTo("cta");
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              <span>Download App</span>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};
