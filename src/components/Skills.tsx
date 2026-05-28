import { SectionHeader } from "./SectionHeader";
import { Code2, ShieldCheck, Wrench, Cpu, Cloud, FileCheck, GitBranch, Brain } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Skill icons — uses simple-icons CDN (https://simpleicons.org)
   Format: https://cdn.simpleicons.org/<slug>/<color>
   For tools without a brand logo (Vulnerability Assessment, etc.)
   we just render the text in a pill.
   ───────────────────────────────────────────────────────────── */

type Skill = { name: string; slug?: string };

const categories: {
  n: string;
  icon: typeof Code2;
  title: string;
  skills: Skill[];
}[] = [
  {
    n: "01",
    icon: Code2,
    title: "Programming & Scripting",
    skills: [
      { name: "Python", slug: "python" },
      { name: "Java", slug: "openjdk" },
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "Bash", slug: "gnubash" },
      { name: "PowerShell", slug: "powershell" },
      { name: "SQL", slug: "mysql" },
    ],
  },
  {
    n: "02",
    icon: ShieldCheck,
    title: "Security Engineering",
    skills: [
      { name: "Vulnerability Assessment" },
      { name: "Application Security" },
      { name: "Threat Detection" },
      { name: "Incident Response" },
      { name: "Data Protection" },
      { name: "Network Security" },
      { name: "Mobile Security" },
      { name: "Digital Forensics" },
    ],
  },
  {
    n: "03",
    icon: Wrench,
    title: "Security Tools",
    skills: [
      { name: "Wireshark", slug: "wireshark" },
      { name: "Burp Suite" },
      { name: "Metasploit" },
      { name: "Autopsy" },
      { name: "EnCase" },
      { name: "Splunk", slug: "splunk" },
      { name: "Nessus" },
    ],
  },
  {
    n: "04",
    icon: Cpu,
    title: "CS Fundamentals",
    skills: [
      { name: "Algorithms" },
      { name: "Data Structures" },
      { name: "Operating Systems" },
      { name: "TCP/IP" },
      { name: "DNS" },
      { name: "HTTP/HTTPS" },
      { name: "Firewalls" },
      { name: "Packet Analysis" },
    ],
  },
  {
    n: "05",
    icon: Cloud,
    title: "Cloud & Systems",
    skills: [
      { name: "AWS IAM", slug: "amazonaws" },
      { name: "AWS GuardDuty", slug: "amazonaws" },
      { name: "Linux", slug: "linux" },
      { name: "Windows" },
      { name: "Active Directory" },
      { name: "Mobile App Dev" },
    ],
  },
  {
    n: "06",
    icon: FileCheck,
    title: "Frameworks & Standards",
    skills: [
      { name: "NIST" },
      { name: "ISO 27001" },
      { name: "MITRE ATT&CK" },
      { name: "OWASP", slug: "owasp" },
    ],
  },
  {
    n: "07",
    icon: GitBranch,
    title: "Development & Automation",
    skills: [
      { name: "Git", slug: "git" },
      { name: "REST APIs" },
      { name: "Security Automation" },
      { name: "Log Analysis" },
    ],
  },
  {
    n: "08",
    icon: Brain,
    title: "Machine Learning (Applied)",
    skills: [
      { name: "TensorFlow", slug: "tensorflow" },
      { name: "Malware Classification" },
      { name: "Feature Engineering" },
      { name: "Model Evaluation" },
    ],
  },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
  if (skill.slug) {
    return (
      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-muted border border-border text-xs font-medium hover:border-primary/40 transition-colors">
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/14B8A6`}
          alt={skill.name}
          className="w-3.5 h-3.5"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <span className="font-mono">{skill.name}</span>
      </div>
    );
  }
  return <span className="pill">{skill.name}</span>;
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="04"
          label="skills"
          title={
            <>
              The tools and frameworks I <span className="font-serif italic text-primary">actually use.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="editorial-card p-6 animate-fade-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-serif italic text-muted-foreground/40">
                    {cat.n}
                  </span>
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-medium mb-1">{cat.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 font-mono">
                  {cat.skills.length} skill{cat.skills.length !== 1 ? "s" : ""}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <SkillIcon key={i} skill={skill} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
