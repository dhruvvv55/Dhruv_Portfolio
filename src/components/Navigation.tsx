import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "wins", label: "Wins" },
  { id: "activities", label: "Activities" },
  { id: "contact", label: "Contact" },
];

export const Navigation = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const current = SECTIONS.find((s) => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 140 && r.bottom >= 140;
      });
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPalette = () => {
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      {/* Single-row nav — logo + sections + actions */}
      <div className="container mx-auto px-6 max-w-7xl py-5 flex items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => scrollTo("top")}
          className="flex items-center gap-0.5 font-serif text-xl tracking-tight text-foreground hover:text-primary transition-colors"
        >
          <span className="italic">Dhruv</span>
          <span className="text-primary text-2xl leading-none">.</span>
        </button>

        {/* Center sections */}
        <div className="hidden lg:flex items-center gap-7">
          {SECTIONS.map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`text-[11px] font-mono uppercase tracking-[0.15em] transition-colors relative ${
                active === s.id ? "text-primary" : "text-foreground/65 hover:text-foreground"
              }`}
            >
              {s.label}
              {active === s.id && (
                <span className="absolute -bottom-1.5 left-0 right-0 h-px bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Right: ⌘K + theme */}
        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            className="hidden md:flex items-center gap-2 px-3 h-9 rounded-md border border-border bg-card/50 hover:bg-card hover:border-primary/40 transition-colors text-xs text-muted-foreground"
          >
            <span className="font-mono">Quick nav</span>
            <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-muted border border-border rounded font-mono text-[10px] text-foreground/80">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
