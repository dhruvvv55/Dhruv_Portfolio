import { SectionHeader } from "./SectionHeader";
import { Mail, Github, Linkedin, MapPin, Phone, ArrowUpRight } from "lucide-react";

const channels = [
  {
    label: "Email",
    value: "pateldhruv0609@gmail.com",
    href: "mailto:pateldhruv0609@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+1 (213) 551-1753",
    href: "tel:+12135511753",
    icon: Phone,
  },
  {
    label: "GitHub",
    value: "dhruvvv55",
    href: "https://github.com/dhruvvv55",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "dhruvvv55",
    href: "https://www.linkedin.com/in/dhruvvv55/",
    icon: Linkedin,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="08"
          label="contact"
          title={
            <>
              Let's <span className="font-serif italic text-primary">work together.</span>
            </>
          }
          subtitle="Seeking new grad full-time security engineering roles, graduating May 2027. Based in Los Angeles, open to remote and on-site. Also happy to talk research collaborations and side projects."
        />

        <div className="grid md:grid-cols-2 gap-4">
          {channels.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <a
                key={idx}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="editorial-card p-6 flex items-center justify-between group animate-fade-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="flex items-center gap-4">
                  <Icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{ch.label}</p>
                    <p className="text-foreground font-medium">{ch.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            );
          })}
        </div>

        <div className="mt-12 flex items-center gap-2 text-muted-foreground text-sm">
          <MapPin className="w-4 h-4" />
          <span>Los Angeles, CA · Open to relocation</span>
        </div>
      </div>
    </section>
  );
};
