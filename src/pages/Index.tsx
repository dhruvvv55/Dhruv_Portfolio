import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { MatrixRain } from "@/components/MatrixRain";
import { BinaryBackground } from "@/components/BinaryBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background cyber-grid hex-pattern">
      {/* Matrix rain effect */}
      <MatrixRain />
      
      {/* Binary background */}
      <BinaryBackground />
      
      {/* Scan line effect */}
      <div className="scan-line" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main className="relative z-10">
        <Hero />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Publications />
        <Achievements />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 border-t border-primary/20 py-8 terminal-window">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground font-mono text-sm">
              <span className="text-primary">{">"}</span> © 2025 Dhruv Ashok Patel. 
              <span className="text-secondary ml-2">Securing the digital frontier.</span>
            </p>
            <div className="flex items-center gap-2 font-mono text-xs">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-muted-foreground">System Status:</span>
              <span className="text-secondary">OPERATIONAL</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
