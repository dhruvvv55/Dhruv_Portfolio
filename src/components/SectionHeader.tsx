import { ReactNode } from "react";

interface SectionHeaderProps {
  number: string;
  label: string;
  title: ReactNode;
  subtitle?: string;
}

export const SectionHeader = ({ number, label, title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mb-16 max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          {">"} {number}
        </span>
        <div className="flex-1 border-t border-border" />
        <span className="section-num">/ {label}.sh</span>
      </div>
      <h2 className="heading-display text-foreground">{title}</h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
};
