import { SectionHeader } from "./SectionHeader";

const experience = [
  {
    initials: "CT",
    logo: "/logos/crossover.jpeg",
    logoBg: "#FFFFFF",
    title: "Cybersecurity Intern",
    company: "Crossover Technology Pvt. Ltd.",
    period: "Mar 2025 – Jun 2025",
    summary: "Embedded with the security operations team. Owned Python automation that accelerated vulnerability triage and participated in real-world incident response workflows.",
    bullets: [
      "Improved threat detection efficiency by 30% by developing Python-based security automation scripts to accelerate vulnerability triage and reduce mean-time-to-detect across security operations.",
      "Performed manual vulnerability scans across internal systems, triaging findings by severity and communicating results to the security team to support prioritized remediation.",
      "Participated in security team meetings, gaining exposure to real-world incident response workflows, threat discussion, and cross-functional security decision-making processes.",
    ],
    tags: ["Python", "Security Automation", "Vulnerability Assessment", "Incident Response"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="03"
          label="experience"
          title={
            <>
              Hands-on industry <span className="font-serif italic text-primary">security engineering.</span>
            </>
          }
        />

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div
              key={idx}
              className="editorial-card p-6 md:p-10 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-lg border border-border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm"
                    style={{ backgroundColor: exp.logoBg }}
                  >
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-1"
                      />
                    ) : (
                      <span className="font-medium text-sm text-primary">{exp.initials}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-medium">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-mono mt-1">{exp.period}</p>
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 md:pl-[72px]">{exp.summary}</p>

              <ul className="space-y-3 mb-6 md:pl-[72px]">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-foreground/80 leading-relaxed">
                    <span className="text-primary mt-2 flex-shrink-0">
                      <span className="block w-1 h-1 rounded-full bg-primary" />
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 md:pl-[72px]">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="pill">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
