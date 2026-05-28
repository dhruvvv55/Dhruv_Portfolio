import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import {
  Home, GraduationCap, Briefcase, Wrench, FolderOpen, Trophy, Activity,
  Mail, Github, Linkedin, FileText, Download, ExternalLink, User, Sun, Moon,
} from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { useTheme } from "@/components/theme-provider";

export const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        const target = e.target as HTMLElement;
        if (e.key === "/" && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
          return;
        }
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const run = (fn: () => void) => {
    setOpen(false);
    setTimeout(fn, 50);
  };

  const goToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Search portfolio... (type 'proj', 'github', 'resume', etc)" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigate">
          <CommandItem onSelect={() => run(() => goToSection("about"))}>
            <User className="mr-2 w-4 h-4" />
            <span>About</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">01</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => goToSection("education"))}>
            <GraduationCap className="mr-2 w-4 h-4" />
            <span>Education</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">02</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => goToSection("experience"))}>
            <Briefcase className="mr-2 w-4 h-4" />
            <span>Experience</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">03</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => goToSection("skills"))}>
            <Wrench className="mr-2 w-4 h-4" />
            <span>Skills</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">04</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => goToSection("projects"))}>
            <FolderOpen className="mr-2 w-4 h-4" />
            <span>Projects</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">05</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => goToSection("wins"))}>
            <Trophy className="mr-2 w-4 h-4" />
            <span>Wins</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">06</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => goToSection("activities"))}>
            <Activity className="mr-2 w-4 h-4" />
            <span>Activities</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">07</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => goToSection("contact"))}>
            <Mail className="mr-2 w-4 h-4" />
            <span>Contact</span>
            <span className="ml-auto text-xs text-muted-foreground font-mono">08</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Projects">
          {PROJECTS.map((p) => (
            <CommandItem key={p.slug} onSelect={() => run(() => navigate(`/projects/${p.slug}`))}>
              <p.icon className="mr-2 w-4 h-4" />
              <span className="truncate">{p.title}</span>
              <span className="ml-auto text-[10px] text-muted-foreground font-mono uppercase">{p.status}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="External">
          <CommandItem onSelect={() => run(() => window.open("https://github.com/dhruvvv55", "_blank"))}>
            <Github className="mr-2 w-4 h-4" />
            <span>GitHub Profile</span>
            <ExternalLink className="ml-auto w-3 h-3 text-muted-foreground" />
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open("https://www.linkedin.com/in/dhruvvv55/", "_blank"))}>
            <Linkedin className="mr-2 w-4 h-4" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="ml-auto w-3 h-3 text-muted-foreground" />
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.open("/resume", "_blank"))}>
            <FileText className="mr-2 w-4 h-4" />
            <span>View Resume</span>
            <ExternalLink className="ml-auto w-3 h-3 text-muted-foreground" />
          </CommandItem>
          <CommandItem onSelect={() => run(() => {
            const a = document.createElement("a");
            a.href = "/resume.pdf";
            a.download = "Dhruv_Patel_Resume.pdf";
            a.click();
          })}>
            <Download className="mr-2 w-4 h-4" />
            <span>Download Resume</span>
          </CommandItem>
          <CommandItem onSelect={() => run(() => window.location.href = "mailto:pateldhruv0609@gmail.com")}>
            <Mail className="mr-2 w-4 h-4" />
            <span>Send Email</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Preferences">
          <CommandItem onSelect={() => run(() => setTheme(theme === "dark" ? "light" : "dark"))}>
            {theme === "dark" ? <Sun className="mr-2 w-4 h-4" /> : <Moon className="mr-2 w-4 h-4" />}
            <span>Switch to {theme === "dark" ? "Light" : "Dark"} Mode</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
