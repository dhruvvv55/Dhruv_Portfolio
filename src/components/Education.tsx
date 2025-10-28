import { GraduationCap } from "lucide-react";
import { Card } from "./ui/card";

export const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> Education
        </h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="terminal-window p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold font-mono">Masters Degree</h3>
            </div>
            <div className="border-l-2 border-primary pl-4">
              <p className="text-sm text-primary font-mono">Aug 2025 – Present</p>
              <h4 className="text-lg font-semibold mt-1">Masters of Science in Cybersecurity Engineering</h4>
              <p className="text-muted-foreground">University of Southern California</p>
              <p className="text-sm text-muted-foreground mt-2 font-mono">
                Coursework: Computer Forensics, Foundations and Policy for Information Security
              </p>
            </div>
          </Card>

          <Card className="terminal-window p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-bold font-mono">Bachelor's Degree</h3>
            </div>
            <div className="border-l-2 border-secondary pl-4">
              <p className="text-sm text-secondary font-mono">Dec 2021 – May 2025</p>
              <h4 className="text-lg font-semibold mt-1">B.E. Computer Science & Engineering</h4>
              <p className="text-muted-foreground">University of Mumbai</p>
              <p className="text-sm text-accent font-semibold mt-2">CGPA: 9.1/10</p>
              <p className="text-sm text-muted-foreground mt-2 font-mono">
                Specialization in Cybersecurity
              </p>
            </div>
          </Card>

          <Card className="terminal-window p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-bold font-mono">Higher Secondary</h3>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <p className="text-sm text-accent font-mono">Aug 2019 – May 2021</p>
              <h4 className="text-lg font-semibold mt-1">Higher Secondary Education (12th)</h4>
              <p className="text-muted-foreground">Shri TP Bhatia Junior College of Science</p>
              <p className="text-sm text-accent font-semibold mt-2">Percentage: 92.8%</p>
            </div>
          </Card>

          <Card className="terminal-window p-6 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="w-6 h-6 text-muted-foreground" />
              <h3 className="text-xl font-bold font-mono">Secondary Education</h3>
            </div>
            <div className="border-l-2 border-muted-foreground pl-4">
              <p className="text-sm text-muted-foreground font-mono">May 2019</p>
              <h4 className="text-lg font-semibold mt-1">Indian Certificate of Secondary Education (10th)</h4>
              <p className="text-muted-foreground">Universal High Dahisar</p>
              <p className="text-sm text-accent font-semibold mt-2">Percentage: 93.4%</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
