import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/app-icon.png";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const FooterLink = ({ href, label }: { href: string; label: string }) => (
    <li>
      <a
        href={href}
        onMouseEnter={() => setHoveredLink(label)}
        onMouseLeave={() => setHoveredLink(null)}
        className="text-muted-foreground hover:text-primary transition-colors duration-300 relative inline-flex items-center gap-1 group"
      >
        {label}
        <ArrowRight
          className={`w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
            hoveredLink === label ? "translate-x-1" : ""
          }`}
        />
      </a>
    </li>
  );

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={logo}
                  alt=""
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <span className="font-semibold text-foreground bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Energia
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Frequency audio for calm living and mental clarity.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" label="Features" />
              <FooterLink href="#" label="Pricing" />
              <FooterLink href="#" label="FAQ" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" label="About" />
              <FooterLink href="#" label="Blog" />
              <FooterLink href="#" label="Contact" />
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Energia. All rights reserved.
            </p>
            <a
              href="mailto:support@energia.app"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
            >
              <Mail className="w-4 h-4" />
              <span className="relative">
                support@energia.app
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
