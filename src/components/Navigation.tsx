import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-primary/20" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-primary font-bold">DHRUV.PATEL</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6 font-mono text-sm">
            <button onClick={() => scrollToSection("about")} className="text-foreground hover:text-primary transition-colors glow-border px-3 py-1 rounded">
              /about
            </button>
            <button onClick={() => scrollToSection("education")} className="text-foreground hover:text-primary transition-colors glow-border px-3 py-1 rounded">
              /education
            </button>
            <button onClick={() => scrollToSection("experience")} className="text-foreground hover:text-primary transition-colors glow-border px-3 py-1 rounded">
              /experience
            </button>
            <button onClick={() => scrollToSection("skills")} className="text-foreground hover:text-primary transition-colors glow-border px-3 py-1 rounded">
              /skills
            </button>
            <button onClick={() => scrollToSection("projects")} className="text-foreground hover:text-primary transition-colors glow-border px-3 py-1 rounded">
              /projects
            </button>
            <button onClick={() => scrollToSection("publications")} className="text-foreground hover:text-primary transition-colors glow-border px-3 py-1 rounded">
              /publications
            </button>
            <ThemeToggle />
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono"
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
