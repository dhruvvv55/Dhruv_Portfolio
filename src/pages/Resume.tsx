import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download, ExternalLink, FileText, Home, Mail, Linkedin, Github, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { CommandPalette } from "@/components/CommandPalette";
import { ReadingProgress } from "@/components/ReadingProgress";

const Resume = () => {
  const resumeUrl = "/resume.pdf";
  const [pdfStatus, setPdfStatus] = useState<"loading" | "found" | "missing">("loading");

  useEffect(() => {
    fetch(resumeUrl, { method: "HEAD" })
      .then((res) => {
        const isHtml = res.headers.get("content-type")?.includes("text/html");
        setPdfStatus(res.ok && !isHtml ? "found" : "missing");
      })
      .catch(() => setPdfStatus("missing"));
  }, []);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "Dhruv_Patel_Resume.pdf";
    a.click();
  };

  return (
    <div className="relative min-h-screen bg-background cyber-grid">
      <ReadingProgress />
      <CommandPalette />

      {/* Slim top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 max-w-6xl py-4 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-border hover:border-primary/40 hover:bg-card transition-colors text-sm">
            <Home className="w-3.5 h-3.5" />
            <span className="font-mono">portfolio</span>
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => document.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }))}
              className="hidden md:flex items-center gap-2 px-3 h-9 rounded-md border border-border bg-card/50 hover:bg-card hover:border-primary/40 transition-colors text-xs text-muted-foreground group"
            >
              <span className="font-mono">Quick nav</span>
              <kbd className="inline-flex items-center gap-0.5 px-1.5 py-0.5 bg-muted border border-border rounded font-mono text-[10px] text-foreground/80">⌘K</kbd>
            </button>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="relative pt-28 pb-16">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Header */}
          <div className="animate-fade-up mb-8">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to portfolio</span>
            </Link>

            <div className="flex flex-wrap items-end justify-between gap-6 mb-2">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-8 h-px bg-primary" />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">/ resume.pdf</p>
                </div>
                <h1 className="text-4xl md:text-5xl font-medium tracking-tight">
                  Dhruv Patel <span className="font-serif italic text-primary">— Resume</span>
                </h1>
                <p className="text-muted-foreground mt-2 font-mono text-sm">Last updated: November 2025</p>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  onClick={handleDownload}
                  disabled={pdfStatus === "missing"}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono h-10 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4 mr-2" />
                  download.pdf
                </Button>
                <Button
                  variant="outline"
                  className="font-mono h-10 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={pdfStatus === "missing"}
                  onClick={() => window.open(resumeUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  open_in_new_tab
                </Button>
              </div>
            </div>
          </div>

          {/* Quick contact bar */}
          <div className="editorial-card p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-mono text-muted-foreground">
              <span className="text-primary">{">"}</span> Reach out:
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href="mailto:pateldhruv0609@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" />
                <span>pateldhruv0609@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/dhruvvv55/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/dhruvvv55" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* PDF Viewer or missing-file placeholder */}
          <div className="editorial-card overflow-hidden">
            <div className="px-4 py-3 border-b border-border bg-muted/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">Dhruv_Patel_Resume.pdf</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                <span className="text-xs text-muted-foreground font-mono">
                  {pdfStatus === "loading" && "checking..."}
                  {pdfStatus === "found" && "PDF · 2 pages"}
                  {pdfStatus === "missing" && "not deployed"}
                </span>
              </div>
            </div>

            {pdfStatus === "loading" && (
              <div className="h-[900px] flex items-center justify-center bg-muted/10">
                <p className="text-sm font-mono text-muted-foreground">$ loading resume.pdf...</p>
              </div>
            )}

            {pdfStatus === "found" && (
              <object data={resumeUrl} type="application/pdf" className="w-full h-[900px] bg-muted/10">
                <iframe src={resumeUrl} className="w-full h-[900px]" title="Dhruv Patel Resume" />
                <div className="p-12 text-center">
                  <FileText className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" strokeWidth={1} />
                  <p className="text-muted-foreground mb-6">
                    Your browser can't display the PDF inline. You can download it or open it in a new tab.
                  </p>
                  <div className="flex justify-center gap-3">
                    <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </Button>
                    <Button variant="outline" onClick={() => window.open(resumeUrl, "_blank")} className="font-mono">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Open in new tab
                    </Button>
                  </div>
                </div>
              </object>
            )}

            {pdfStatus === "missing" && (
              <div className="h-[600px] flex items-center justify-center bg-muted/10 p-8">
                <div className="max-w-md text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/30 mb-6">
                    <AlertCircle className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Resume not deployed yet</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    The resume PDF isn't available at <code className="font-mono text-foreground/80 text-xs bg-muted px-1.5 py-0.5 rounded">/resume.pdf</code> on this build. In the meantime, you can reach out directly or check the GitHub profile.
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-mono">
                      <a href="mailto:pateldhruv0609@gmail.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email me
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="font-mono">
                      <a href="https://www.linkedin.com/in/dhruvvv55/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="font-mono">
                      <a href="https://github.com/dhruvvv55" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Link to="/#projects" className="editorial-card p-6 group flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">Want to see the work?</p>
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">Browse projects</h3>
              </div>
              <ArrowLeft className="w-5 h-5 rotate-180 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
            <Link to="/#contact" className="editorial-card p-6 group flex items-center justify-between">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">Hiring?</p>
                <h3 className="text-lg font-medium group-hover:text-primary transition-colors">Get in touch</h3>
              </div>
              <ArrowLeft className="w-5 h-5 rotate-180 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-6 max-w-5xl text-sm text-muted-foreground text-center">
          <p>© 2026 Dhruv Patel · <Link to="/" className="hover:text-foreground transition-colors">Back to portfolio</Link></p>
        </div>
      </footer>
    </div>
  );
};

export default Resume;
