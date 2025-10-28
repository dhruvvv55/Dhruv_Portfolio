import { Shield, Github, Linkedin, Terminal, Lock, Unlock, Binary, Code } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/dhruv.jpg";
import { useState, useEffect } from "react";

export const Hero = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [displayText, setDisplayText] = useState("");
  const fullText = "ACCESS_GRANTED";

  useEffect(() => {
    if (!isLocked) {
      let index = 0;
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isLocked]);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating binary codes */}
      <div className="absolute top-20 right-10 font-mono text-primary/30 text-xs animate-pulse">
        01001000 01000001 01000011 01001011
      </div>
      <div className="absolute bottom-40 left-10 font-mono text-secondary/30 text-xs animate-pulse" style={{ animationDelay: "0.5s" }}>
        11000101 10101010 00110011 01010101
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 animate-fade-in">
            <div className="terminal-window p-3 inline-block">
              <div className="font-mono text-primary text-sm flex items-center gap-2">
                <Terminal className="w-4 h-4 animate-pulse" />
                <span className="text-secondary">root@cybersec</span>
                <span className="text-muted-foreground">:</span>
                <span className="text-primary">~</span>
                <span className="text-muted-foreground">$</span>
                <span className="text-foreground animate-pulse">_</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-8 h-8 text-primary animate-pulse" />
                <span className="text-primary font-mono text-sm tracking-wider">SECURITY_PROFILE.init()</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-foreground glitch hover:text-primary transition-colors cursor-pointer">Dhruv Ashok </span>
                <span className="text-primary glitch hover:text-secondary transition-colors cursor-pointer">Patel</span>
              </h1>
            </div>
            
            <div className="terminal-window p-4 font-mono text-sm relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-primary/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
                  <div className="w-3 h-3 rounded-full bg-secondary animate-pulse" style={{ animationDelay: "0.2s" }} />
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.4s" }} />
                </div>
                <span className="text-xs text-primary">security_profile.sh</span>
              </div>
              
              {/* Terminal content */}
              <div className="space-y-1">
                <p className="text-muted-foreground">
                  <span className="text-primary">{">"}</span> const occupation = <span className="text-secondary">"Cybersecurity Engineer"</span>;
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">{">"}</span> const education = <span className="text-secondary">"MS in Cybersecurity @ USC"</span>;
                </p>
                <p className="text-muted-foreground">
                  <span className="text-primary">{">"}</span> const expertise = [
                </p>
                <p className="text-muted-foreground pl-6">
                  <span className="text-secondary">"Ethical Hacking"</span>,
                </p>
                <p className="text-muted-foreground pl-6">
                  <span className="text-secondary">"Penetration Testing"</span>,
                </p>
                <p className="text-muted-foreground pl-6">
                  <span className="text-secondary">"Quantum Cryptography"</span>,
                </p>
                <p className="text-muted-foreground pl-6">
                  <span className="text-secondary">"AI-Powered Threat Detection"</span>
                </p>
                <p className="text-muted-foreground">];</p>
                <p className="text-muted-foreground mt-2">
                  <span className="text-primary">{">"}</span> status: <span className="text-secondary animate-pulse">⚡ Securing the digital frontier...</span>
                </p>
                <p className="text-muted-foreground mt-2">
                  <span className="text-accent">{">"}</span> threat_level: <span className="text-accent font-bold animate-pulse">MAXIMUM</span>
                </p>
              </div>
            </div>
            
            <div className="glow-border p-4 rounded bg-card/50">
              <div className="flex items-center gap-2 mb-2">
                <Lock 
                  className={`w-5 h-5 cursor-pointer transition-all ${isLocked ? 'text-accent' : 'text-secondary'}`}
                  onClick={() => setIsLocked(!isLocked)}
                />
                <span className="font-mono text-sm text-primary">
                  {isLocked ? "SYSTEM_LOCKED" : displayText}
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Masters student in <span className="text-primary font-semibold">Cybersecurity Engineering</span> at USC, 
                specializing in <span className="text-secondary font-semibold">offensive security</span>, 
                <span className="text-primary font-semibold"> quantum cryptography</span>, and 
                <span className="text-secondary font-semibold"> AI-powered threat detection</span>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono glow-border"
              >
                <Shield className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              
              <Button 
                variant="outline"
                className="font-mono glow-border"
                onClick={() => window.open("https://github.com/dhruvvv55", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              
              <Button 
                variant="outline"
                className="font-mono glow-border"
                onClick={() => window.open("https://www.linkedin.com/in/dhruvvv55/", "_blank")}
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
          
          {/* Right side - Profile image */}
          <div className="relative flex justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Multiple rotating rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent animate-glow-pulse blur-2xl opacity-60" />
              <div className="absolute -inset-4 rounded-full border border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute -inset-8 rounded-full border border-secondary/20 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              
              {/* Scanning effect */}
              <div className="absolute -inset-2 rounded-full border-2 border-transparent border-t-primary animate-spin" style={{ animationDuration: "3s" }} />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary glow-border shadow-2xl">
                <img 
                  src={profileImage}
                  alt="Dhruv Ashok Patel - Cybersecurity Engineer"
                  className="w-full h-full object-cover object-top scale-110"
                />
                {/* Scanning line overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" />
              </div>
              
              {/* Corner brackets - hacker aesthetic */}
              <div className="absolute -top-2 -left-2 w-12 h-12 md:w-16 md:h-16 border-l-2 border-t-2 border-primary" />
              <div className="absolute -top-2 -right-2 w-12 h-12 md:w-16 md:h-16 border-r-2 border-t-2 border-secondary" />
              <div className="absolute -bottom-2 -left-2 w-12 h-12 md:w-16 md:h-16 border-l-2 border-b-2 border-secondary" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 md:w-16 md:h-16 border-r-2 border-b-2 border-primary" />
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-2 md:p-3 bg-primary/10 rounded-lg border border-primary/30 animate-pulse">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 p-2 md:p-3 bg-secondary/10 rounded-lg border border-secondary/30 animate-pulse" style={{ animationDelay: "0.5s" }}>
                <Binary className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </div>
              
              {/* Status indicator */}
              <div className="absolute top-4 right-4 terminal-window px-3 py-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                  <span className="text-xs font-mono text-secondary">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
