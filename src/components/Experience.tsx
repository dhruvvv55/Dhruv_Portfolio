import { Briefcase, Terminal, Shield, FileSearch, Database } from "lucide-react";
import { Card } from "./ui/card";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card/30 relative">
      <div className="absolute inset-0 hex-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> Experience
          <span className="animate-pulse">_</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="terminal-window p-8 animate-fade-in bg-card/50 backdrop-blur-sm border-primary/20 shadow-lg shadow-primary/10">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-primary/20">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-xs text-muted-foreground font-mono ml-2">~/career/experience.log</span>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-lg border border-primary/30 glow-border">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              
              <div className="flex-1">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary font-mono flex items-center gap-2">
                      <Terminal className="w-5 h-5" />
                      Cybersecurity Intern
                    </h3>
                    <p className="text-foreground mt-1 font-medium">Crossover Technology Pvt Ltd.</p>
                  </div>
                  <span className="text-secondary font-mono text-sm px-3 py-1 bg-secondary/10 rounded border border-secondary/30">
                    Mar 2025 – Jun 2025
                  </span>
                </div>
                
                <div className="space-y-4 mt-6">
                  <div className="flex gap-3 group">
                    <span className="text-primary font-mono mt-0.5 flex-shrink-0">$</span>
                    <FileSearch className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      Improved detection efficiency by <span className="text-primary font-semibold">30%</span> by automating 
                      vulnerability scans and log parsing using <span className="text-secondary font-semibold">Python</span> to 
                      accelerate threat triage.
                    </p>
                  </div>
                  
                  <div className="flex gap-3 group">
                    <span className="text-primary font-mono mt-0.5 flex-shrink-0">$</span>
                    <Database className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      Enhanced forensic readiness and incident traceability by documenting 
                      <span className="text-secondary font-semibold"> response playbooks</span> and performing 
                      <span className="text-secondary font-semibold"> forensic log analysis</span>.
                    </p>
                  </div>
                  
                  <div className="flex gap-3 group">
                    <span className="text-primary font-mono mt-0.5 flex-shrink-0">$</span>
                    <Shield className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0 group-hover:text-primary transition-colors" />
                    <p className="text-muted-foreground font-mono text-sm leading-relaxed">
                      Strengthened compliance with <span className="text-primary font-semibold">NIST/ISO 27001</span> standards 
                      by conducting risk assessments and collaborating with engineers on remediation workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
