import profileImage from "@/assets/dhruv.jpg";

export const AboutMe = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-16 md:py-24 border-t border-border">
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
            {/* Byline photo — editorial treatment */}
            <div>
              <div className="relative">
                {/* Soft glow */}
                <div
                  className="absolute -inset-3 rounded-2xl blur-xl opacity-25"
                  style={{ background: "hsl(var(--primary))" }}
                />
                {/* Offset accent frame */}
                <div
                  className="absolute -bottom-2 -right-2 w-full h-full rounded-xl border border-primary/30"
                  aria-hidden
                />
                {/* Photo card */}
                <div className="relative rounded-xl overflow-hidden border border-border bg-card">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={profileImage}
                      alt="Dhruv Ashok Patel"
                      className="w-full h-full object-cover object-top scale-105"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(to top, hsl(var(--card)) 0%, transparent 100%)",
                      }}
                    />
                  </div>
                  <div className="px-3 py-2.5 border-t border-border">
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-foreground/85">
                      Dhruv A. Patel
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      USC · MS Cybersec Eng
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-1.5">
                Filed under
              </p>
              <p className="text-sm font-mono text-foreground/85 leading-relaxed">
                detection_engineering,<br />
                cloud_security,<br />
                llm_agent_security
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
                'm a detection engineer with a researcher's mindset. I like building SOC
                pipelines with Wazuh and Splunk, hunting IAM privilege escalation in GCP
                audit logs, and figuring out how LLM agents actually break when you push
                on them.
              </span>
            </p>

            <p className="text-lg md:text-xl leading-[1.7] text-foreground/85 mt-8">
              At <strong className="text-foreground font-medium">Crossover Technology</strong>{" "}
              I sat with the security team and worked through{" "}
              <span className="text-primary font-medium">50+ SIEM alerts a day</span>,
              triaging by severity and writing up incident notes the SOC could act on the
              same morning. Outside of that, I built a home SOC lab with 15+ detection
              rules mapped to MITRE ATT&amp;CK, a GCP pipeline that catches IAM privilege
              escalation, and a red-team lab that tests 25 attack and defense pairs against
              LLM agents.
            </p>

            <p className="text-lg md:text-xl leading-[1.7] text-foreground/85 mt-8">
              What I care about most is closing the gap between security research and a
              detection that someone can actually ship to production. Right now I'm looking
              for a full-time team where I can keep doing that.
            </p>
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
