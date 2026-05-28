import { Hero } from "@/components/Hero";
import { StatBand } from "@/components/StatBand";
import { AboutMe } from "@/components/AboutMe";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Wins } from "@/components/Wins";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";
import { CommandPalette } from "@/components/CommandPalette";
import { BackToTop } from "@/components/BackToTop";
import { ReadingProgress } from "@/components/ReadingProgress";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background cyber-grid">
      <ReadingProgress />
      <Navigation />
      <CommandPalette />
      <BackToTop />

      <main className="relative">
        <Hero />
        <StatBand />
        <AboutMe />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Wins />
        <Activities />
        <Contact />
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Dhruv Patel</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/dhruvvv55" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/dhruvvv55/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="mailto:pateldhruv0609@gmail.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
