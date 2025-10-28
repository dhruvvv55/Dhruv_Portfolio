import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center font-mono">
          <span className="text-primary">{">"}</span> Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <Card className="terminal-window p-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-6 font-mono">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-primary/10 rounded border border-primary/30 group-hover:border-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a 
                    href="mailto:pateldhruv0609@gmail.com" 
                    className="text-foreground hover:text-primary transition-colors font-mono"
                  >
                    pateldhruv0609@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-secondary/10 rounded border border-secondary/30 group-hover:border-secondary transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a 
                    href="tel:+12135511753" 
                    className="text-foreground hover:text-secondary transition-colors font-mono"
                  >
                    +1 (213) 551-1753
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-accent/10 rounded border border-accent/30 group-hover:border-accent transition-colors">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-mono">Los Angeles, CA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex gap-4">
                <Button 
                  variant="outline"
                  size="icon"
                  className="glow-border"
                  onClick={() => window.open("https://github.com/dhruvp0609", "_blank")}
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline"
                  size="icon"
                  className="glow-border"
                  onClick={() => window.open("https://linkedin.com/in/dhruv-patel-usc", "_blank")}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </Card>
          
          {/* Quick Message */}
          <Card className="terminal-window p-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-6 font-mono">Quick Message</h3>
            
            <div className="space-y-4">
              <div className="terminal-window p-4 font-mono text-sm">
                <p className="text-primary mb-2">{">"} Interested in collaboration?</p>
                <p className="text-muted-foreground mb-2">{">"} Looking for cybersecurity expertise?</p>
                <p className="text-secondary mb-2">{">"} Want to discuss a project?</p>
                <p className="text-foreground mt-4">
                  <span className="text-primary">{">"}</span> Feel free to reach out!
                </p>
              </div>
              
              <Button 
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-mono glow-border"
                onClick={() => window.location.href = "mailto:pateldhruv0609@gmail.com"}
              >
                <Send className="w-4 h-4 mr-2" />
                Send Email
              </Button>
              
              <div className="mt-6 p-4 bg-muted/30 rounded border border-primary/20">
                <p className="text-sm text-muted-foreground font-mono">
                  <span className="text-primary">Note:</span> Available for cybersecurity consulting, 
                  research collaborations, and full-time opportunities starting Summer 2027.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
