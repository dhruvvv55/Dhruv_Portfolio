import { GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";

export const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="terminal-window p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold font-mono">Education</h3>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-sm text-primary font-mono">Aug 2025 – Present</p>
                <h4 className="text-xl font-semibold mt-1">Masters of Science in Cybersecurity Engineering</h4>
                <p className="text-muted-foreground">University of Southern California</p>
                <p className="text-sm text-muted-foreground mt-2 font-mono">
                  Coursework: Computer Forensics, Foundations and Policy for Information Security
                </p>
              </div>
              
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-sm text-secondary font-mono">Dec 2021 – May 2025</p>
                <h4 className="text-xl font-semibold mt-1">B.E. Computer Science & Engineering</h4>
                <p className="text-muted-foreground">University of Mumbai</p>
                <p className="text-sm text-accent font-semibold mt-2">CGPA: 9.1/10</p>
                <p className="text-sm text-muted-foreground mt-2 font-mono">
                  Specialization in Cybersecurity
                </p>
              </div>
            </div>
          </Card>
          
          {/* Achievements */}
          <Card className="terminal-window p-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold font-mono">Achievements</h3>
            </div>
            
            <div className="space-y-4">
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
