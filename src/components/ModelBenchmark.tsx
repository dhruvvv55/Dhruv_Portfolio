import { Award, Info } from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Model benchmark visualization.
   ONLY shows data confirmed by the IRJET paper:
   - 6 architectures tested
   - Accuracy range: 92.36% – 98.74%
   - MobileNet best (98.74%, loss 0.0386)
   - Xception runner-up (best & lowest loss tier with MobileNet)
   ───────────────────────────────────────────────────────────── */

const architectures = [
  { name: "CNN", description: "Baseline convolutional network", featured: false },
  { name: "VGG16", description: "Deep transfer-learning architecture", featured: false },
  { name: "VGG19", description: "Deepest VGG variant", featured: false },
  { name: "ResNet50", description: "Residual connections", featured: false },
  { name: "Xception", description: "Depthwise separable convolutions — runner-up", featured: true },
  { name: "MobileNet", description: "Lightweight depthwise separable — winner", winner: true, featured: true },
];

export const ModelBenchmark = () => {
  return (
    <div className="editorial-card overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border bg-muted/20">
        <div className="flex items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs font-mono uppercase tracking-wider text-primary mb-1">Benchmark</p>
            <h3 className="text-xl font-medium">6 architectures · Malimg dataset · 25 families</h3>
          </div>
          <span className="hidden md:inline-flex items-center gap-1 text-xs text-muted-foreground font-mono whitespace-nowrap">
            <Info className="w-3 h-3" />
            range 92.36% – 98.74%
          </span>
        </div>
      </div>

      {/* Architecture grid */}
      <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {architectures.map((m) => (
          <div
            key={m.name}
            className={`p-4 rounded-lg border transition-all ${
              m.winner
                ? "border-primary/50 bg-primary/5"
                : m.featured
                  ? "border-border bg-card"
                  : "border-border/60 bg-muted/20"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className={`font-mono text-sm font-medium ${m.winner ? "text-primary" : "text-foreground"}`}>
                {m.name}
              </span>
              {m.winner && (
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-primary/10 border border-primary/30 rounded text-[10px] font-mono text-primary">
                  <Award className="w-2.5 h-2.5" />
                  BEST
                </span>
              )}
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{m.description}</p>
          </div>
        ))}
      </div>

      {/* Winner detail */}
      <div className="px-6 pb-6">
        <div className="p-5 rounded-lg bg-card border border-primary/30 bg-gradient-to-br from-primary/8 to-transparent">
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-mono text-sm font-medium text-primary">Best result: MobileNet</span>
          </div>
          <div className="grid grid-cols-3 gap-6 mb-3">
            <div>
              <p className="text-3xl font-mono font-medium text-primary mb-1">98.74%</p>
              <p className="text-xs text-muted-foreground">Accuracy</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-medium text-foreground mb-1">0.0386</p>
              <p className="text-xs text-muted-foreground">Loss</p>
            </div>
            <div>
              <p className="text-3xl font-mono font-medium text-foreground mb-1">25</p>
              <p className="text-xs text-muted-foreground">Families classified</p>
            </div>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            MobileNet's depthwise separable convolutions delivered the highest accuracy and lowest loss across all six architectures tested, outperforming heavier networks like VGG16 and ResNet50.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 py-3 border-t border-border bg-muted/20 flex items-center justify-between flex-wrap gap-2">
        <p className="text-[10px] font-mono text-muted-foreground">
          source: IRJET, Oct 2024 · "Malware Classification using Deep Learning"
        </p>
        <a
          href="https://irjet.net/archives/V11/i11/IRJET-V11I1103.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-mono text-primary hover:underline"
        >
          read_paper →
        </a>
      </div>
    </div>
  );
};
