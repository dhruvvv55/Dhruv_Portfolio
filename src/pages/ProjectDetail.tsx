import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, FileText, Home, FolderOpen } from "lucide-react";
import { getProjectBySlug, PROJECTS } from "@/data/projects";
import { projectVisuals } from "@/components/ProjectVisuals";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommandPalette } from "@/components/CommandPalette";
import { ModelBenchmark } from "@/components/ModelBenchmark";
import { BackToTop } from "@/components/BackToTop";
import { ReadingProgress } from "@/components/ReadingProgress";

const sections = [
  { id: "system-overview", label: "System Overview", num: "01" },
  { id: "workflow", label: "Project Workflow", num: "02" },
  { id: "tech-stack", label: "Tech Stack", num: "03" },
];

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  useEffect(() => {
    const onScroll = () => {
      const found = sections.find((s) => {
        const el = document.getElementById(s.id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 200 && r.bottom >= 200;
      });
      if (found) setActiveSection(found.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const Icon = project.icon;
  const Architecture = projectVisuals[project.slug]?.architecture;
  const currentIdx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const nextProject = PROJECTS[(currentIdx + 1) % PROJECTS.length];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen bg-background cyber-grid">
      <ReadingProgress />
      <CommandPalette />
      <BackToTop />
      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:border-primary/40 hover:bg-card transition-colors text-sm">
              <Home className="w-3.5 h-3.5" />
              <span className="font-mono">portfolio</span>
            </Link>
            <Link to="/#projects" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:border-primary/40 hover:bg-card transition-colors text-sm">
              <FolderOpen className="w-3.5 h-3.5" />
              <span className="font-mono">all_projects</span>
            </Link>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      <main className="relative pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Hero */}
          <div className="animate-fade-up max-w-5xl">
            <Link to="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to projects</span>
            </Link>

            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-primary" />
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                {project.category}
              </p>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] tracking-tight mb-6 max-w-4xl">
              {project.title}
            </h1>

            {/* Metrics strip */}
            <div className="flex flex-wrap gap-8 py-6 border-l-2 border-primary pl-6 mb-8">
              {project.metrics.map((m, i) => (
                <div key={i}>
                  <p className="text-3xl md:text-4xl font-mono font-medium text-foreground">
                    {m.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-lg md:text-xl text-foreground/85 leading-relaxed max-w-3xl mb-8">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t, i) => (
                <span key={i} className="pill">{t}</span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {project.github && (
                <Button
                  variant="outline"
                  className="font-mono h-10"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  view_on_github
                  <ArrowUpRight className="w-3 h-3 ml-1.5" />
                </Button>
              )}
              {project.paperLink && (
                <Button
                  variant="outline"
                  className="font-mono h-10"
                  onClick={() => window.open(project.paperLink, "_blank")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  read_paper
                  <ArrowUpRight className="w-3 h-3 ml-1.5" />
                </Button>
              )}
            </div>
          </div>

          {/* Content with sticky TOC */}
          <div className="mt-24 grid lg:grid-cols-[200px,1fr] gap-12">
            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-24">
                <p className="section-num mb-4">Contents</p>
                <ul className="space-y-2 border-l border-border">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`block text-left text-sm pl-4 -ml-px py-1.5 border-l-2 transition-colors w-full ${
                          activeSection === s.id
                            ? "border-primary text-primary"
                            : "border-transparent text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="font-mono text-xs mr-2">{s.num}</span>
                        {s.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="space-y-24 min-w-0">
              {/* System Overview */}
              <section id="system-overview" className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{">"} 01</span>
                  <p className="section-num">/ system_overview.sh</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium mb-6">System Overview</h2>
                <p className="text-lg text-foreground/85 leading-relaxed mb-10">
                  {project.systemOverview}
                </p>

                {/* Architecture SVG */}
                {Architecture ? (
                  <div className="editorial-card overflow-hidden">
                    <div className="aspect-[800/380] bg-card">
                      <Architecture />
                    </div>
                    <div className="p-4 border-t border-border bg-muted/30">
                      <p className="text-xs text-muted-foreground font-mono">
                        <span className="text-primary">{">"}</span> Architecture diagram — illustrative
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="editorial-card aspect-[16/9] flex flex-col items-center justify-center text-center p-12 bg-gradient-to-br from-primary/5 to-transparent">
                    <Icon className="w-16 h-16 text-primary/40 mb-4" strokeWidth={1} />
                    <p className="text-sm font-mono text-muted-foreground">Diagram placeholder</p>
                  </div>
                )}

                {/* Special: model benchmark for malware detection project */}
                {project.slug === "malware-detection" && (
                  <div className="mt-8">
                    <ModelBenchmark />
                  </div>
                )}
              </section>

              {/* Workflow */}
              <section id="workflow" className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{">"} 02</span>
                  <p className="section-num">/ project_workflow.sh</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium mb-10">How it came together</h2>

                <div className="space-y-6">
                  {project.workflow.map((step, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[60px,1fr] md:grid-cols-[80px,1fr] gap-4 md:gap-6 animate-fade-up"
                      style={{ animationDelay: `${i * 0.08}s` }}
                    >
                      <div className="text-right">
                        <span className="text-3xl md:text-4xl font-serif italic text-muted-foreground/40">
                          0{i + 1}
                        </span>
                      </div>
                      <div className="editorial-card p-5 md:p-6">
                        <h3 className="text-lg md:text-xl font-medium mb-2">{step.title}</h3>
                        <p className="text-foreground/80 leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Tech Stack */}
              <section id="tech-stack" className="scroll-mt-24">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{">"} 03</span>
                  <p className="section-num">/ tech_stack.sh</p>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium mb-8">Tech Stack</h2>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {project.tech.map((t, i) => (
                    <div key={i} className="editorial-card p-4 flex items-center gap-3">
                      <span className="text-primary font-mono text-sm">$</span>
                      <span className="font-mono text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Next project */}
              <section className="pt-12 border-t border-border">
                <p className="section-num mb-3">Next project</p>
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="editorial-card p-6 md:p-8 flex items-center justify-between group"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground font-mono mb-2">{nextProject.category}</p>
                    <h3 className="text-2xl md:text-3xl font-medium group-hover:text-primary transition-colors truncate">
                      {nextProject.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0 ml-4" />
                </Link>
              </section>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 max-w-6xl text-sm text-muted-foreground text-center">
          <p>© 2026 Dhruv Patel · <Link to="/" className="hover:text-foreground transition-colors">Back to portfolio</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectDetail;
