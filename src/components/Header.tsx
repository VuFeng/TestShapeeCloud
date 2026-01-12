import { useState } from "react";
import logo from "../assets/images/app-icon.png";

export const Header = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 cursor-pointer">
          <img
            src={logo}
            alt="Energia"
            className="w-10 h-10 border-2 border-primary rounded-full"
          />
          <span className="text-xl font-semibold text-foreground">Energia</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-muted-foreground hover:text-foreground transition"
          >
            About
          </a>
          <a
            href="#features"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Features
          </a>
          <a
            href="#contact"
            className="text-muted-foreground hover:text-foreground transition"
          >
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden cursor-pointer inline-flex items-center justify-center rounded-full border-2 border-border p-2.5 text-muted-foreground hover:text-foreground hover:bg-card transition"
          aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="flex flex-col gap-1">
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                isMobileOpen ? "translate-y-1.5 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-opacity ${
                isMobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition-transform ${
                isMobileOpen ? "-translate-y-1.5 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      {isMobileOpen && (
        <nav className="md:hidden border-t border-border bg-background/95">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-2">
            <a
              href="#about"
              onClick={handleNavClick}
              className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              About
            </a>
            <a
              href="#features"
              onClick={handleNavClick}
              className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Features
            </a>
            <a
              href="#contact"
              onClick={handleNavClick}
              className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
