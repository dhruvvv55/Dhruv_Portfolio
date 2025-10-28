import { Lightbulb, Zap, Users, Code2, User } from "lucide-react";
import { Card } from "./ui/card";
import { useState } from "react";

const traits = [
  {
    id: "innovative",
    icon: Lightbulb,
    title: "Innovative",
    description: "Always seeking new solutions",
    detail: "Innovation drives my approach to cybersecurity. I constantly explore cutting-edge technologies and methodologies to stay ahead of emerging threats and develop novel security solutions."
  },
  {
    id: "dedicated",
    icon: Zap,
    title: "Dedicated",
    description: "Committed to excellence in every project",
    detail: "Dedication is at the core of everything I do. I'm committed to delivering excellence in every security assessment, code review, and vulnerability analysis, ensuring robust protection for digital assets."
  },
  {
    id: "collaborative",
    icon: Users,
    title: "Collaborative",
    description: "Thrives in team environments",
    detail: "Cybersecurity is a team effort. I thrive in collaborative environments, working closely with developers, security teams, and stakeholders to build comprehensive security strategies."
  },
  {
    id: "adaptable",
    icon: Code2,
    title: "Adaptable",
    description: "Quick to learn and apply new technologies",
    detail: "Adaptability is essential in the fast-evolving tech landscape. I quickly learn new technologies and frameworks, applying them effectively to solve complex security challenges and stay ahead of threat actors."
  }
];

export const AboutMe = () => {
  const [selectedTrait, setSelectedTrait] = useState(traits[3]);

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* About Me Profile */}
          <Card className="terminal-window p-8 animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold font-mono">Profile</h3>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary">{">"}</span> I'm a passionate <span className="text-primary font-semibold">Cybersecurity Engineer</span> currently 
                pursuing my Masters at the <span className="text-secondary font-semibold">University of Southern California</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary">{">"}</span> My expertise lies in <span className="text-secondary font-semibold">offensive security</span>, 
                <span className="text-primary font-semibold"> ethical hacking</span>, and cutting-edge technologies 
                like <span className="text-accent font-semibold">quantum cryptography</span> and 
                <span className="text-secondary font-semibold"> AI-powered threat detection</span>.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-primary">{">"}</span> With a strong academic background and hands-on experience in 
                <span className="text-primary font-semibold"> penetration testing</span> and 
                <span className="text-secondary font-semibold"> vulnerability assessment</span>, 
                I'm dedicated to securing the digital frontier.
              </p>
            </div>
          </Card>

          {/* What Drives Me */}
          <Card className="terminal-window p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-mono">
              <span className="text-secondary">{">"}</span> What Drives Me
            </h3>
            
            <div className="grid grid-cols-2 gap-3 mb-6">
              {traits.map((trait) => {
                const Icon = trait.icon;
                const isSelected = selectedTrait.id === trait.id;
                
                return (
                  <div
                    key={trait.id}
                    onClick={() => setSelectedTrait(trait)}
                    className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                      isSelected 
                        ? 'bg-primary text-primary-foreground glow-border' 
                        : 'bg-card/50 border border-primary/20 hover:border-primary/40'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-primary-foreground' : 'text-primary'}`} />
                      <h4 className="text-lg font-bold font-mono">{trait.title}</h4>
                    </div>
                    <p className={`text-xs ${isSelected ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {trait.description}
                    </p>
                  </div>
                );
              })}
            </div>
            
            {/* Detail section */}
            <div className="glow-border p-4 rounded-lg bg-card/30">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="text-primary font-bold">{selectedTrait.title}:</span> {selectedTrait.detail}
              </p>
            </div>
            
            {/* Pagination dots */}
            <div className="flex justify-center gap-2 mt-4">
              {traits.map((trait) => (
                <button
                  key={trait.id}
                  onClick={() => setSelectedTrait(trait)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    selectedTrait.id === trait.id 
                      ? 'bg-primary w-8' 
                      : 'bg-primary/30 hover:bg-primary/50'
                  }`}
                  aria-label={`Select ${trait.title}`}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
