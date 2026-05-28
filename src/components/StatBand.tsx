/* ─────────────────────────────────────────────────────────────
   StatBand
   Two counter-scrolling marquee rows:
   Row 1 — Stats (right to left), every number from resume
   Row 2 — Tools (left to right), every tool from resume
   ───────────────────────────────────────────────────────────── */

const stats = [
  { value: "98.74%", label: "Malware detection accuracy", source: "IRJET 2024" },
  { value: "90%+", label: "Key-interception risk reduction", source: "JISEM 2025" },
  { value: "98.5%", label: "Failure prediction accuracy", source: "IJARSCT 2024" },
  { value: "30%", label: "Improved threat detection efficiency", source: "Crossover Tech" },
  { value: "50+", label: "TryHackMe rooms completed", source: "Ongoing" },
  { value: "3", label: "Peer-reviewed publications", source: "2024–2025" },
  { value: "GPA 3.7", label: "USC MS Cybersecurity Eng.", source: "Aug 2025–May 2027" },
  { value: "1st", label: "WordHack Competition", source: "CyberPeace Foundation" },
];

const tools = [
  // Languages
  "Python", "Java", "C", "C++", "Bash", "PowerShell", "SQL",
  // Security tools
  "Wireshark", "Burp Suite", "Metasploit", "Autopsy", "EnCase", "Splunk", "Nessus",
  // Cloud & systems
  "AWS IAM", "AWS GuardDuty", "Linux", "Windows", "Active Directory",
  // Frameworks & standards
  "NIST", "ISO 27001", "MITRE ATT&CK", "OWASP",
  // ML & dev
  "TensorFlow", "Git", "REST APIs",
];

const marqueeStats = [...stats, ...stats];
const marqueeTools = [...tools, ...tools, ...tools];

export const StatBand = () => {
  return (
    <section className="relative py-8 border-y border-border bg-card/30 overflow-hidden space-y-4">
      {/* Edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Row: Tools (left → right) */}
      <div className="flex items-center gap-3 animate-marquee-reverse whitespace-nowrap">
        {marqueeTools.map((tool, i) => (
          <span
            key={i}
            className="inline-flex items-center px-3 py-1.5 rounded-md bg-card border border-border text-xs font-mono text-foreground/70 hover:text-primary hover:border-primary/40 transition-colors flex-shrink-0"
          >
            {tool}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeReverse {
          0% { transform: translateX(-66.666%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marqueeReverse 80s linear infinite;
        }
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
