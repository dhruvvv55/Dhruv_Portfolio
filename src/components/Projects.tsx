import { Code2, Github, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const projects = [
  {
    title: "Quantum-Resistant Online Payment System",
    tech: "Python, FastAPI, MongoDB",
    description: "Developed a secure API system with quantum-resistant cryptography (QKD BB84), integrating AI-based fraud detection (95.8% accuracy with LSTM) and ethical hacking to mitigate advanced threats.",
    color: "primary",
    github: "https://github.com/dhruvvv55/Advancing-Security-in-Digital-Transactions-Using-Quantum-Cryptography",
  },
  {
    title: "Malware Detection Using Deep Learning",
    tech: "Python, CNN, LSTM, TensorFlow",
    description: "Built a CNN-LSTM model achieving 98.7% accuracy in anomaly detection and malware classification, enhancing cybersecurity threat monitoring.",
    color: "secondary",
    github: "https://github.com/dhruvvv55/Malware-Detection-using-CNN-LSTM",
  },
  {
    title: "Predictive Maintenance Using Machine Learning",
    tech: "Python, ML Algorithms",
    description: "Created predictive models (98.5% accuracy) for risk forecasting, applying statistical methods to strengthen IT infrastructure resilience.",
    color: "accent",
    github: "https://github.com/dhruvvv55/Predictive-Maintenance-of-Industrial-Equipment-using-ML-",
  },
  {
    title: "TryHackMe CTF Challenges",
    tech: "Hands-on Labs",
    description: "Completed exercises in OWASP Top 10, API security, ethical hacking, and vulnerability assessments, building skills in penetration testing and secure configuration.",
    color: "primary",
    },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="terminal-window p-6 animate-fade-in hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 bg-${project.color}/10 rounded-lg border border-${project.color}/30`}>
                  <Code2 className={`w-6 h-6 text-${project.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary font-mono">{project.tech}</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <Button 
                variant="outline"
                className="w-full font-mono glow-border"
                onClick={() => window.open(project.github, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
