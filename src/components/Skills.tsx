import { Shield, Code, Database, Lock, Cloud, Terminal } from "lucide-react";
import { Card } from "./ui/card";

const skillCategories = [
  {
    icon: Shield,
    title: "Cybersecurity & Privacy",
    color: "primary",
    skills: [
      "Ethical Hacking",
      "Penetration Testing",
      "Vulnerability Exploitation",
      "Incident Response",
      "Risk Assessment",
      "Data Protection",
      "Cloud Security",
      "AI in Cybersecurity",
    ],
  },
  {
    icon: Lock,
    title: "Offensive Security",
    color: "accent",
    skills: [
      "Binary Exploitation",
      "Exploit Development",
      "Reverse Engineering",
      "CTF Challenges",
    ],
  },
  {
    icon: Code,
    title: "Programming & Scripting",
    color: "secondary",
    skills: [
      "Python (Pandas, NumPy, TensorFlow)",
      "C/C++",
      "Java",
      "JavaScript",
      "Bash",
      "PowerShell",
    ],
  },
  {
    icon: Terminal,
    title: "Security Tools",
    color: "primary",
    skills: [
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "Nmap",
      "IDS/IPS",
    ],
  },
  {
    icon: Lock,
    title: "Cryptography & Secure Systems",
    color: "secondary",
    skills: [
      "Encryption",
      "Secure Coding",
      "Network Security",
      "TCP/IP, HTTP, SSH, DNS",
    ],
  },
  {
    icon: Database,
    title: "Cloud & Databases",
    color: "accent",
    skills: [
      "AWS (IAM, S3, GuardDuty)",
      "MySQL",
      "MongoDB",
      "Windows, Linux, macOS",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="terminal-window p-6 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 bg-${category.color}/10 rounded border border-${category.color}/30`}>
                    <Icon className={`w-5 h-5 text-${category.color}`} />
                  </div>
                  <h3 className="text-lg font-bold font-mono">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-muted/50 border border-primary/20 rounded text-sm font-mono hover:border-primary/50 hover:bg-muted transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
