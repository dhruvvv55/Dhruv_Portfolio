import { SectionHeader } from "./SectionHeader";
import { MapPin, GraduationCap } from "lucide-react";

const education = [
  {
    n: "01",
    period: "Aug 2025 – May 2027",
    location: "Los Angeles, CA, USA",
    metric: "GPA 3.7 / 4.0",
    school: "University of Southern California",
    degree: "M.S. in Cybersecurity Engineering",
    description: "Graduate study in computer forensics, security and privacy, malware analysis and reverse engineering, and information security foundations and policy.",
    coursework: [
      "Foundations and Policy for Information Security",
      "Computer Forensics",
      "Security and Privacy",
      "Malware Analysis and Reverse Engineering",
      "Security Systems",
      "Computer Systems Assurance",
    ],
    logo: "/logos/usc.webp",
    logoBg: "#990000", // USC cardinal red — seal sits on its native brand color
  },
  {
    n: "02",
    period: "Dec 2021 – May 2025",
    location: "Mumbai, India",
    metric: "GPA 9.1 / 10",
    school: "University of Mumbai · Thakur College of Engineering and Technology",
    degree: "B.E. in Computer Science & Engineering (Cybersecurity)",
    description: "Specialization in cybersecurity with focus on information security fundamentals, digital forensics, ethical hacking, and applied machine learning for security.",
    coursework: [
      "Fundamentals of Information Security",
      "Digital Forensics",
      "Cybersecurity Risk Management",
      "Information Security Compliance",
      "Ethical Hacking & Cybersecurity",
      "ML for Cybersecurity",
      "DL for Cybersecurity",
    ],
    logo: "/logos/tcet.jpeg",
    logoBg: "#FFFFFF", // White — matches TCET's native background
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="02"
          label="education"
          title={
            <>
              Structured rigor, <span className="font-serif italic text-primary">layered over curiosity.</span>
            </>
          }
        />

        <div className="space-y-12">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="grid md:grid-cols-[80px,1fr] gap-6 md:gap-8 animate-fade-up"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="md:text-right">
                <span className="text-5xl md:text-6xl font-serif italic text-muted-foreground/50">
                  {edu.n}
                </span>
              </div>

              <div className="editorial-card p-6 md:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-lg border border-border flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: edu.logoBg }}
                    >
                      <img
                        src={edu.logo}
                        alt={`${edu.school} logo`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to icon if logo file missing
                          e.currentTarget.style.display = "none";
                          const parent = e.currentTarget.parentElement;
                          if (parent && !parent.querySelector(".fallback-icon")) {
                            const span = document.createElement("span");
                            span.className = "fallback-icon text-primary";
                            span.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>';
                            parent.appendChild(span);
                          }
                        }}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <h3 className="text-xl md:text-2xl font-medium text-foreground">{edu.degree}</h3>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <p className="text-sm text-muted-foreground font-mono">{edu.period}</p>
                    <p className="text-sm text-primary font-medium mt-0.5 flex items-center gap-1 md:justify-end">
                      <MapPin className="w-3 h-3" />
                      {edu.location}
                    </p>
                    <p className="text-sm font-mono text-primary mt-1">{edu.metric}</p>
                  </div>
                </div>

                <p className="text-foreground/80 leading-relaxed mb-5">{edu.description}</p>

                <div>
                  <p className="section-num mb-2">Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course, i) => (
                      <span key={i} className="pill">{course}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
