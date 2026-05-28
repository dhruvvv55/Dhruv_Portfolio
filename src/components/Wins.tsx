import { SectionHeader } from "./SectionHeader";
import { ExternalLink } from "lucide-react";

const wins = [
  {
    type: "Publication",
    image: "/wins/pub-jisem.png",
    title: "Advancing Security in Digital Transactions using Quantum Cryptography",
    org: "Journal of Information Systems Engineering and Management (JISEM)",
    date: "Apr 2025",
    link: "https://jisem-journal.com/index.php/journal/article/view/9214/4252",
  },
  {
    type: "Publication",
    image: "/wins/pub-irjet.png",
    title: "Malware Classification using Deep Learning",
    org: "International Research Journal of Engineering and Technology (IRJET)",
    date: "Oct 2024",
    link: "https://irjet.net/archives/V11/i11/IRJET-V11I1103.pdf",
  },
  {
    type: "Publication",
    image: "/wins/pub-ijarsct.png",
    title: "Predictive Maintenance for Industrial Equipment using Machine Learning",
    org: "International Journal of Advanced Research in Science, Communication and Technology (IJARSCT)",
    date: "Aug 2024",
    link: "https://ijarsct.co.in/Paper19379.pdf",
  },
  {
    type: "Certification",
    image: "/wins/cert-google.jpg",
    title: "Google Cybersecurity Specialization",
    org: "Google · 8 courses",
    date: "Jun 2024",
    link: "https://coursera.org/verify/professional-cert/AKLH23KJA5FL",
  },
  {
    type: "Certification",
    image: "/wins/cert-umd.jpg",
    title: "Cybersecurity for Everyone",
    org: "University of Maryland",
    date: "Nov 2024",
    link: "https://coursera.org/verify/9IWF937GXA6K",
  },
  {
    type: "Certification",
    image: "/wins/cert-umich.jpg",
    title: "Introduction to Data Science in Python",
    org: "University of Michigan",
    date: "Nov 2024",
    link: "https://coursera.org/verify/4JWEHRFHZT7S",
  },
];

export const Wins = () => {
  return (
    <section id="wins" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <SectionHeader
          number="06"
          label="recon"
          title={
            <>
              Publications, certifications, and{" "}
              <span className="font-serif italic text-primary">recognized work.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {wins.map((win, idx) => (
            <a
              key={idx}
              href={win.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group editorial-card overflow-hidden animate-fade-up block"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              {/* Image preview */}
              <div className="relative aspect-video bg-white border-b border-border overflow-hidden">
                <img
                  src={win.image}
                  alt={win.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Type badge */}
                <span className="absolute top-3 left-3 px-2 py-1 bg-background/85 backdrop-blur-sm border border-primary/40 rounded-md text-[10px] font-mono uppercase tracking-wider text-primary z-10">
                  {win.type}
                </span>
                {/* Hover external-link */}
                <div className="absolute top-3 right-3 p-1.5 bg-background/85 backdrop-blur-sm border border-border rounded-md opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Text */}
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-medium text-primary uppercase tracking-wider font-mono">
                    {win.type === "Publication" ? "Peer-reviewed" : "Verified"}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{win.date}</span>
                </div>
                <h3 className="font-medium leading-snug mb-1 group-hover:text-primary transition-colors">
                  {win.title}
                </h3>
                <p className="text-sm text-muted-foreground">{win.org}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
