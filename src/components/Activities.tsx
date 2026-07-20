import { SectionHeader } from "./SectionHeader";
import { Trophy, Shield, Code2, Star } from "lucide-react";

export const Activities = () => {
  return (
    <section id="activities" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="07"
          label="extras"
          title={
            <>
              Competitions, internships, <span className="font-serif italic text-primary">and community.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured: WordHack 1st Place */}
          <div className="md:col-span-2 editorial-card overflow-hidden animate-fade-up bg-gradient-to-br from-primary/10 via-transparent to-transparent">
            <div className="grid md:grid-cols-[1fr,180px] gap-6 p-8 md:p-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-3.5 h-3.5 text-primary" fill="currentColor" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary">Featured · 1st Place</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-3">
                  WordHack Competition <span className="font-serif italic text-primary">— First Place</span>
                </h3>
                <p className="text-foreground/75 leading-relaxed mb-4">
                  Took first place in the WordHack competition organized by the CyberPeace Foundation, a cybersecurity-focused contest.
                </p>
                <p className="text-sm text-primary font-mono">CyberPeace Foundation</p>
              </div>

              {/* Big trophy */}
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                  <Trophy className="relative w-24 h-24 md:w-32 md:h-32 text-primary" strokeWidth={1} />
                </div>
              </div>
            </div>
          </div>

          {/* CyberPeace Social Internship */}
          <div className="editorial-card p-6 animate-fade-up" style={{ animationDelay: "0.08s" }}>
            <div className="flex items-start justify-between mb-4">
              <Shield className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 bg-muted rounded">
                Internship
              </span>
            </div>
            <h3 className="text-lg font-medium mb-1">Social Internship</h3>
            <p className="text-sm text-primary font-mono mb-3">CyberPeace Foundation</p>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Completed a social internship focused on cybersecurity awareness and outreach.
            </p>
          </div>

          {/* Web/Mobile dev internships */}
          <div className="editorial-card p-6 animate-fade-up" style={{ animationDelay: "0.16s" }}>
            <div className="flex items-start justify-between mb-4">
              <Code2 className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground px-2 py-1 bg-muted rounded">
                Internship
              </span>
            </div>
            <h3 className="text-lg font-medium mb-1">Web & Mobile Development</h3>
            <p className="text-sm text-primary font-mono mb-3">In-house Internships</p>
            <p className="text-sm text-foreground/75 leading-relaxed">
              Completed in-house internships in web development and mobile app development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
