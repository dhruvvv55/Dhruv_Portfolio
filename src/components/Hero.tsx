import { useEffect, useState, useRef, MouseEvent } from "react";
import { ArrowUpRight, ArrowDown, Github, Linkedin, FileText, Sparkles } from "lucide-react";
import profileImage from "@/assets/dhruv.jpg";

const roles = [
  "detection engineer",
  "soc analyst",
  "cloud security researcher",
  "llm agent red-teamer",
  "malware analyst",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [time, setTime] = useState(new Date());
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [magnet, setMagnet] = useState({ x: 0, y: 0 });

  // Rotate roles
  useEffect(() => {
    const t = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2200);
    return () => clearInterval(t);
  }, []);

  // Live LA time
  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  // Track mouse for parallax shapes
  useEffect(() => {
    const onMove = (e: globalThis.MouseEvent) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      setMouse({ x: (e.clientX / w - 0.5) * 2, y: (e.clientY / h - 0.5) * 2 });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Magnetic button effect
  const onButtonMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const r = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    setMagnet({ x: x * 0.25, y: y * 0.25 });
  };
  const onButtonLeave = () => setMagnet({ x: 0, y: 0 });

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const laTime = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
    hour12: false,
  }).format(time);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-8 overflow-hidden"
    >
      {/* PARALLAX BACKGROUND SHAPES */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Big lime blob top-right */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-25 transition-transform duration-300 ease-out"
          style={{
            background: "hsl(var(--primary))",
            top: "-15%",
            right: "-10%",
            transform: `translate(${mouse.x * 20}px, ${mouse.y * 20}px)`,
          }}
        />
        {/* Mid blob bottom-left */}
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 transition-transform duration-300 ease-out"
          style={{
            background: "hsl(280 80% 60%)",
            bottom: "-10%",
            left: "-5%",
            transform: `translate(${mouse.x * -25}px, ${mouse.y * -25}px)`,
          }}
        />

        {/* Floating geometric shapes */}
        <div
          className="absolute top-[20%] left-[8%] w-3 h-3 bg-primary rounded-full transition-transform duration-500 ease-out"
          style={{ transform: `translate(${mouse.x * -40}px, ${mouse.y * -40}px)` }}
        />
        <div
          className="absolute top-[35%] right-[12%] w-6 h-6 border-2 border-primary rounded-full transition-transform duration-500 ease-out"
          style={{ transform: `translate(${mouse.x * 35}px, ${mouse.y * 35}px) rotate(${mouse.x * 30}deg)` }}
        />
        <div
          className="absolute bottom-[28%] left-[15%] w-8 h-8 border border-primary/50 transition-transform duration-500 ease-out"
          style={{
            transform: `translate(${mouse.x * -30}px, ${mouse.y * -30}px) rotate(${45 + mouse.x * 20}deg)`,
          }}
        />
        <div
          className="absolute bottom-[15%] right-[20%] transition-transform duration-500 ease-out text-primary/60"
          style={{ transform: `translate(${mouse.x * 45}px, ${mouse.y * 45}px) rotate(${mouse.x * -20}deg)` }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
          </svg>
        </div>
        <div
          className="absolute top-[55%] right-[6%] transition-transform duration-500 ease-out text-foreground/30"
          style={{ transform: `translate(${mouse.x * -50}px, ${mouse.y * -50}px) rotate(${mouse.x * 40}deg)` }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12,2 22,20 2,20" />
          </svg>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Top status row — casual */}
        <div className="flex items-center gap-3 mb-10 animate-fade-up">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/80">
            seeking new grad full-time roles
          </span>
          <span className="text-muted-foreground/40 hidden sm:inline">·</span>
          <span className="font-mono text-xs text-muted-foreground hidden sm:inline">
            {laTime} LA
          </span>
        </div>

        {/* NAME + PHOTO row */}
        <div className="flex items-center justify-between gap-8 mb-8">
          {/* Name block */}
          <div className="min-w-0">
            {/* small kicker */}
            <p
              className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3 animate-fade-up flex items-center gap-2"
              style={{ animationDelay: "0.08s" }}
            >
              hey there <span className="inline-block animate-wave origin-bottom-right">👋</span> the name's
            </p>

            {/* Dhruv Ashok */}
            <h1
              className="font-serif font-medium leading-[0.84] tracking-tight animate-fade-up select-none"
              style={{ fontSize: "clamp(3rem, 8vw, 8rem)", animationDelay: "0.1s" }}
            >
              {"Dhruv Ashok".split("").map((ch, i) => (
                <span
                  key={i}
                  className={`inline-block transition-all duration-300 hover:text-primary hover:-translate-y-2 hover:scale-110 cursor-default ${
                    ch === " " ? "w-[0.25em]" : ""
                  }`}
                  style={{ transitionDelay: `${i * 16}ms` }}
                >
                  {ch === " " ? "\u00A0" : ch}
                </span>
              ))}
            </h1>

            {/* Patel */}
            <h1
              className="font-serif italic font-medium leading-[0.84] tracking-tight animate-fade-up select-none flex items-baseline gap-2 md:gap-4 flex-wrap"
              style={{ fontSize: "clamp(4rem, 11.5vw, 11.5rem)", animationDelay: "0.16s" }}
            >
              {"Patel".split("").map((ch, i) => (
                <span
                  key={i}
                  className="inline-block transition-all duration-300 hover:text-primary hover:-translate-y-2 hover:scale-110 cursor-default"
                  style={{ transitionDelay: `${i * 20}ms` }}
                >
                  {ch}
                </span>
              ))}
              <span className="inline-block text-primary not-italic" style={{ fontSize: "0.2em" }}>
                <Sparkles className="w-[1em] h-[1em] inline animate-pulse" />
              </span>
            </h1>
          </div>

          {/* Photo card — rounded rectangle reads more premium than a circle */}
          <div
            className="hidden md:block flex-shrink-0 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Soft glow behind */}
              <div
                className="absolute -inset-4 rounded-3xl blur-2xl opacity-25"
                style={{ background: "hsl(var(--primary))" }}
              />
              {/* Accent offset frame */}
              <div
                className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-primary/30"
                aria-hidden
              />
              {/* Photo */}
              <div
                className="relative rounded-2xl overflow-hidden border border-border bg-card"
                style={{ width: "clamp(200px, 21vw, 280px)" }}
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Dhruv Ashok Patel"
                    className="w-full h-full object-cover object-top scale-105"
                  />
                  {/* Bottom gradient fade for legibility */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%)",
                    }}
                  />
                </div>
                {/* Caption bar */}
                <div className="px-4 py-3 flex items-center justify-between border-t border-border">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/70">
                    Dhruv A. Patel
                  </span>
                  <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-primary">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtitle — playful, with rotating role */}
        <div
          className="flex items-baseline flex-wrap gap-x-3 gap-y-1 mb-5 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="text-xl md:text-2xl text-foreground/80">a</span>
          <span className="relative inline-block min-w-[280px] md:min-w-[420px]">
            <span
              key={roleIndex}
              className="text-xl md:text-2xl font-serif italic text-primary inline-block animate-role-fade"
            >
              {roles[roleIndex]}
            </span>
            <span className="absolute -bottom-1 left-0 h-0.5 bg-primary/50 animate-role-bar" />
          </span>
          <span className="text-xl md:text-2xl text-foreground/80">based in LA.</span>
        </div>

        {/* Real description */}
        <p
          className="text-base md:text-lg text-foreground/65 max-w-2xl leading-relaxed mb-7 animate-fade-up"
          style={{ animationDelay: "0.25s" }}
        >
          MS Cybersecurity Engineering at USC, focused on detection engineering, cloud
          threat detection, and LLM agent security. Building SOC pipelines and agentic
          detection workflows for a full-time team to ship secure things with.
        </p>

        {/* Action row — magnetic primary button */}
        <div
          className="flex flex-wrap items-center gap-3 mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          <button
            ref={buttonRef}
            onMouseMove={onButtonMove}
            onMouseLeave={onButtonLeave}
            onClick={() => scrollTo("projects")}
            className="group relative inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground rounded-full font-medium text-sm hover:shadow-[0_0_32px_hsl(var(--primary)/0.5)] transition-shadow"
            style={{
              transform: `translate(${magnet.x}px, ${magnet.y}px)`,
              transition: "transform 0.2s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.3s",
            }}
          >
            see what i've built
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
          <button
            onClick={() => window.open("/resume", "_blank")}
            className="inline-flex items-center gap-2 h-12 px-5 border border-border rounded-full font-medium text-sm hover:bg-card hover:border-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <FileText className="w-4 h-4" />
            resume
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => window.open("https://github.com/dhruvvv55", "_blank")}
            className="inline-flex items-center justify-center h-12 w-12 border border-border rounded-full hover:bg-card hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </button>
          <button
            onClick={() => window.open("https://www.linkedin.com/in/dhruvvv55/", "_blank")}
            className="inline-flex items-center justify-center h-12 w-12 border border-border rounded-full hover:bg-card hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Local styles for the animations */}
      <style>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          15% { transform: rotate(20deg); }
          30% { transform: rotate(-15deg); }
          45% { transform: rotate(15deg); }
          60% { transform: rotate(-10deg); }
        }
        .animate-wave {
          animation: wave 2.5s ease-in-out infinite;
        }
        @keyframes roleFade {
          0% { opacity: 0; transform: translateY(8px); }
          15% { opacity: 1; transform: translateY(0); }
          85% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-8px); }
        }
        .animate-role-fade {
          animation: roleFade 2.2s ease-in-out;
        }
        @keyframes roleBar {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-role-bar {
          animation: roleBar 2.2s linear infinite;
        }
      `}</style>
    </section>
  );
};
