import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { PROJECTS } from "@/data/projects";
import { projectVisuals } from "./ProjectVisuals";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export const Projects = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`reveal ${visible ? "is-visible" : ""} py-24 md:py-32 border-t border-border`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="05"
          label="projects"
          title={
            <>
              Things I've built that I'm <span className="font-serif italic text-primary">proud of.</span>
            </>
          }
          subtitle="Click any project for the workflow, system overview, and screenshots."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => {
            const Visual = projectVisuals[project.slug]?.hero;
            return (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="group editorial-card overflow-hidden animate-fade-up block"
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="relative aspect-[16/10] bg-card border-b border-border overflow-hidden">
                  {Visual && <Visual />}

                  {project.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-background/85 backdrop-blur-sm border border-primary/40 rounded-md text-[10px] font-mono uppercase tracking-wider text-primary z-10">
                      Featured
                    </span>
                  )}
                  {project.status === "Active" && !project.featured && (
                    <span className="absolute top-3 left-3 px-2 py-1 bg-background/85 backdrop-blur-sm border border-border rounded-md text-[10px] font-mono uppercase tracking-wider text-foreground flex items-center gap-1.5 z-10">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Active
                    </span>
                  )}
                  {project.status === "Active" && project.featured && (
                    <span className="absolute top-12 left-3 px-2 py-1 bg-background/85 backdrop-blur-sm border border-border rounded-md text-[10px] font-mono uppercase tracking-wider text-foreground flex items-center gap-1.5 z-10">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      Active
                    </span>
                  )}

                  <div className="absolute top-3 right-3 p-2 bg-background/85 backdrop-blur-sm border border-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-[10px] font-mono uppercase tracking-wider text-primary mb-2">
                    {project.category}
                  </p>

                  <h3 className="text-xl md:text-2xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground/80 leading-snug mb-3 font-medium">
                    {project.headline}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map((t, i) => (
                      <span key={i} className="pill">{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm font-mono text-primary">
                    <span>read_more</span>
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};