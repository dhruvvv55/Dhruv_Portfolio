import { SectionHeader } from "./SectionHeader";
import { Radar, Cloud, Bot, Bug, Code2, Wrench } from "lucide-react";

type Skill = { name: string; slug?: string };

const categories: {
  n: string;
  icon: typeof Radar;
  title: string;
  skills: Skill[];
}[] = [
  {
    n: "01",
    icon: Radar,
    title: "Detection Engineering",
    skills: [
      { name: "Wazuh" },
      { name: "Splunk (SPL)", slug: "splunk" },
      { name: "Sigma rules" },
      { name: "MITRE ATT&CK" },
      { name: "Sysmon" },
      { name: "Custom Detection Rules" },
      { name: "Incident Response" },
    ],
  },
  {
    n: "02",
    icon: Cloud,
    title: "Cloud & IAM Security",
    skills: [
      { name: "GCP Cloud Audit Logs", slug: "googlecloud" },
      { name: "GCP IAM", slug: "googlecloud" },
      { name: "Cloud Security Command Center" },
      { name: "Linux", slug: "linux" },
      { name: "Active Directory" },
    ],
  },
  {
    n: "03",
    icon: Bot,
    title: "AI / LLM Security",
    skills: [
      { name: "Prompt Injection" },
      { name: "Indirect Injection" },
      { name: "LLM Agent Security" },
      { name: "Agentic Detection Workflows" },
      { name: "MITRE ATLAS" },
    ],
  },
  {
    n: "04",
    icon: Bug,
    title: "Malware Analysis",
    skills: [
      { name: "Ghidra" },
      { name: "x64dbg" },
      { name: "scdbg" },
      { name: "CyberChef" },
      { name: "Static/Dynamic Analysis" },
      { name: "Shellcode Extraction" },
      { name: "API Hashing" },
    ],
  },
  {
    n: "05",
    icon: Code2,
    title: "Languages",
    skills: [
      { name: "Python", slug: "python" },
      { name: "Bash", slug: "gnubash" },
      { name: "PowerShell", slug: "powershell" },
      { name: "C", slug: "c" },
      { name: "C++", slug: "cplusplus" },
      { name: "SQL", slug: "mysql" },
      { name: "JavaScript", slug: "javascript" },
    ],
  },
  {
    n: "06",
    icon: Wrench,
    title: "Security Tools",
    skills: [
      { name: "Wireshark", slug: "wireshark" },
      { name: "Metasploit" },
      { name: "Nessus" },
      { name: "Nmap" },
      { name: "VirusTotal API" },
      { name: "Burp Suite" },
    ],
  },
];

const SkillIcon = ({ skill }: { skill: Skill }) => {
  if (skill.slug) {
    return (
      <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-muted border border-border text-xs font-medium hover:border-primary/40 transition-colors">
        <img
          src={`https://cdn.simpleicons.org/${skill.slug}/BEF264`}
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
    <section id="skills" className="reveal py-24 md:py-32 border-t border-border">
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
                className="editorial-card p-6"
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
