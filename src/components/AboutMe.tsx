import { useScrollReveal } from "@/hooks/useScrollReveal";

export const AboutMe = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className={`reveal ${visible ? "is-visible" : ""} relative py-24 md:py-36 border-t border-border`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Section header — editorial style */}
        <div className="grid lg:grid-cols-[1fr,3fr] gap-8 mb-16 animate-fade-up">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-primary mb-2">§ 01</p>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">About</p>
          </div>
          <h2
            className="font-serif font-medium leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 4rem)" }}
          >
            Security work that lives in <span className="italic text-primary">production</span>,
            <br className="hidden md:block" /> not just slide decks.
          </h2>
        </div>

        {/* Editorial body — content + marginalia */}
        <div className="grid lg:grid-cols-[1fr,3fr,1fr] gap-8 lg:gap-12">
          {/* LEFT marginalia */}
          <aside className="hidden lg:block space-y-8 pt-1 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                Filed under
              </p>
              <p className="text-sm font-mono text-foreground/85 leading-relaxed">
                application_security,<br />
                ml_security,<br />
                cryptography
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                Reading time
              </p>
              <p className="text-sm font-mono text-foreground/85">90 sec</p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                Last revised
              </p>
              <p className="text-sm font-mono text-foreground/85">May 2026</p>
            </div>
          </aside>

          {/* CENTER — main body */}
          <div className="animate-fade-up" style={{ animationDelay: "0.15s" }}>
            <p className="text-lg md:text-xl leading-[1.7] text-foreground/85">
              <span className="float-left font-serif text-7xl md:text-8xl leading-[0.85] mr-3 mt-1 text-primary font-medium">
                I
              </span>
              <span>
                'm a cybersecurity engineer and applied researcher. I've worked on everything from PE-image
                malware classifiers and quantum-secure payment APIs to Python automation for vulnerability
                triage. What I care about most is closing the gap between security research and a system
                someone actually has to defend.
              </span>
            </p>

            {/* Pull quote breaking the body */}
            <blockquote className="my-12 md:my-16 py-8 border-y border-border relative">
              <span className="absolute -top-4 left-0 px-2 bg-background text-primary font-serif text-5xl leading-none">
                "
              </span>
              <p className="font-serif italic text-2xl md:text-3xl leading-[1.3] text-foreground/90 max-w-3xl pl-2">
                Ambiguous problems don't scare me. If anything, those are the ones I find most interesting.
              </p>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground pl-2">
                — Working principle
              </p>
            </blockquote>

            <p className="text-lg md:text-xl leading-[1.7] text-foreground/85 mb-8">
              At <strong className="text-foreground font-medium">Crossover Technology</strong> I wrote
              Python automation that lifted threat detection efficiency by{" "}
              <span className="text-primary font-medium">30%</span><sup className="text-xs text-muted-foreground ml-0.5">¹</sup> —
              turning hours of manual vulnerability work into prioritized output the security team
              could act on the same morning.
            </p>

            <p className="text-lg md:text-xl leading-[1.7] text-foreground/85">
              <strong className="text-foreground font-medium">End-to-end builds</strong> are how I work
              best. I led a quantum-secured payment system from BB84 protocol simulation through XGBoost
              fraud scoring and Solidity smart contracts — one of{" "}
              <strong className="text-foreground font-medium">three peer-reviewed papers</strong><sup className="text-xs text-muted-foreground ml-0.5">²</sup>{" "}
              published from my undergraduate work.{" "}
              <strong className="text-foreground font-medium">Adversarial thinking</strong> is what I
              bring to AI: I'm currently researching prompt injection and data exfiltration in
              LLM-powered agents.{" "}
              <strong className="text-foreground font-medium">Cross-stack fluency</strong> lets me move
              between Python research notebooks and React/FastAPI production in the same sprint.
            </p>

            {/* Footnotes */}
            <div className="mt-16 pt-6 border-t border-border space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Footnotes
              </p>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                <sup className="text-primary">¹</sup>{" "}
                Crossover Technology Pvt. Ltd., Cybersecurity Intern, Mar–Jun 2025.
              </p>
              <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                <sup className="text-primary">²</sup>{" "}
                JISEM (Apr 2025), IRJET (Oct 2024), IJARSCT (Aug 2024). See <a href="#projects" className="text-primary hover:underline">§04 Projects</a>.
              </p>
            </div>
          </div>

          {/* RIGHT marginalia — what I'm into */}
          <aside className="hidden lg:block space-y-8 pt-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                Currently
              </p>
              <p className="text-sm font-mono text-foreground/85 leading-relaxed">
                researching LLM<br />
                agent security
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                Looking for
              </p>
              <p className="text-sm font-mono text-foreground/85 leading-relaxed">
                new grad<br />
                full-time
              </p>
            </div>
            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                Work style
              </p>
              <p className="text-sm font-mono text-foreground/85 leading-relaxed">
                end-to-end,<br />
                across the stack
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};