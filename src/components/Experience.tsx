import { SectionHeader } from "./SectionHeader";

const experience = [
  {
    initials: "CT",
    logo: "/logos/crossover.jpeg",
    logoBg: "#FFFFFF",
    title: "Cybersecurity Intern",
    company: "Crossover Technology Pvt. Ltd.",
    period: "Mar 2025 – Jun 2025",
    summary:
      "Embedded with the security operations team on daily SIEM alert triage and log analysis. Handled 50+ security alerts per day and built structured incident documentation the SOC could act on.",
    bullets: [
      "Reduced alert triage time by monitoring and classifying 50+ daily security alerts across the SIEM dashboard, escalating confirmed threats by severity to the security team for remediation.",
      "Improved incident documentation accuracy by parsing and analyzing system logs to identify anomalous activity patterns, producing structured reports for the security operations team.",
    ],
    tags: ["SIEM", "Alert Triage", "Log Analysis", "Incident Response", "SOC Operations"],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="reveal py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="03"
          label="experience"
          title={
            <>
              Hands-on <span className="font-serif italic text-primary">SOC operations.</span>
            </>
          }
        />

        <div className="space-y-8">
          {experience.map((exp, idx) => (
            <div key={idx} className="editorial-card p-6 md:p-10">
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
