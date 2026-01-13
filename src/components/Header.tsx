import logo from "../assets/images/app-icon.png";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "./ui/Button";

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
  const duration = 300; // milliseconds - faster scroll
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    smoothScrollTo(targetId);
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg shadow-primary/10 border-b border-border"
          : "bg-background/80 backdrop-blur-lg border-b border-border/50"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-3 cursor-pointer group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`relative w-12 h-12 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center transition-all duration-500 ${
              isHovered
                ? "scale-110 shadow-xl shadow-primary/40 rotate-12"
                : "scale-100 shadow-lg shadow-primary/20"
            }`}
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-primary/50 to-secondary/50 blur-sm animate-pulse-soft" />
            <img
              src={logo}
              alt="Energia Logo"
              className="relative w-full h-full object-contain rounded-full p-1.5"
            />
          </div>
          <span
            className={`text-xl md:text-2xl font-bold bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent transition-all duration-500 ${
              isHovered ? "scale-105" : ""
            }`}
          >
            Energia
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          {[
            { id: "about", label: "About" },
            { id: "features", label: "Features" },
            { id: "contact", label: "Contact" },
          ].map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 group cursor-pointer rounded-lg hover:bg-primary/5"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <span className="relative z-10">{item.label}</span>
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary to-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
              <span className="absolute inset-0 bg-linear-to-r from-primary/10 to-secondary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}

          {/* CTA Button */}
          <Button
            size="lg"
            className="relative cursor-pointer overflow-hidden bg-linear-to-r from-primary to-secondary text-primary-foreground rounded-full px-6 py-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105"
            onClick={() => smoothScrollTo("cta")}
          >
            <Download className="w-4 h-4 mr-2" />
            <span>Download</span>
            <div className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer"
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
        <nav className="container mx-auto px-4 py-4 space-y-2 border-t border-border/50">
          {[
            { id: "about", label: "About" },
            { id: "features", label: "Features" },
            { id: "contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CTA Button */}
          <Button
            size="lg"
            className="w-full mt-4 bg-linear-to-r from-primary to-secondary text-primary-foreground rounded-full shadow-lg shadow-primary/30"
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
  );
};
