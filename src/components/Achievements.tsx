import { Award } from "lucide-react";
import { Card } from "./ui/card";

export const Achievements = () => {
  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> Achievements
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="terminal-window p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold font-mono">Awards & Recognition</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glow-border p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <p className="font-semibold">1st Place - WordHack Competition</p>
                </div>
                <p className="text-sm text-muted-foreground">CyberPeace Foundation, 2023</p>
              </div>
              
              <div className="glow-border p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <p className="font-semibold">OWASP Club Member</p>
                </div>
                <p className="text-sm text-muted-foreground">College Chapter, 2024-2025</p>
              </div>
              
              <div className="glow-border p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  <p className="font-semibold">Social Internship</p>
                </div>
                <p className="text-sm text-muted-foreground">CyberPeace Foundation, 2023</p>
              </div>
              
              <div className="glow-border p-4 rounded">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <p className="font-semibold">Multiple Certifications</p>
                </div>
                <p className="text-sm text-muted-foreground">Google, University of Maryland, University of Michigan</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
