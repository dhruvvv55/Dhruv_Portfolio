import { BookOpen, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const publications = [
  {
    title: "Advancing Security in Digital Transactions using Quantum Cryptography",
    journal: "Journal of Information Systems Engineering and Management (JISEM)",
    date: "Apr 2025",
    link: "https://jisem-journal.com/index.php/journal/article/view/9214/4252",
  },
  {
    title: "Malware Classification using Deep Learning",
    journal: "International Research Journal of Engineering and Technology (IRJET)",
    date: "Oct 2024",
    link: "https://irjet.net/archives/V11/i11/IRJET-V11I1103.pdf",
  },
  {
    title: "Predictive Maintenance for Industrial Equipment using Machine Learning",
    journal: "International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)",
    date: "Aug 2024",
    link: "https://ijarsct.co.in/Paper19379.pdf",
  },
];

export const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> Publications
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {publications.map((pub, index) => (
            <Card 
              key={index}
              className="terminal-window p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold flex-1">{pub.title}</h3>
                    <span className="text-primary font-mono text-sm">{pub.date}</span>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{pub.journal}</p>
                  
                  <Button 
                    variant="outline"
                    size="sm"
                    className="font-mono glow-border"
                    onClick={() => window.open(pub.link, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Read Paper
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
