import { useEffect, useState } from "react";

/**
 * BootScreen — realistic terminal boot with a live progress bar.
 * Each phase advances progress %, shows a live status, and streams a log line.
 * Progress uses ease-out + tiny jitter so it feels real, not scripted.
 */

type Phase = {
  target: number;
  duration: number;
  logLine: string;
  logType?: "cmd" | "info" | "success";
  status: string;
};

const phases: Phase[] = [
  { target: 6,   duration: 220, logLine: "$ ssh dhruv@portfolio.exe",              logType: "cmd",     status: "Initializing..." },
  { target: 18,  duration: 480, logLine: "→ establishing secure connection...",    logType: "info",    status: "TLS handshake..." },
  { target: 34,  duration: 620, logLine: "→ verifying identity...",                logType: "info",    status: "Verifying identity..." },
  { target: 52,  duration: 780, logLine: "→ decrypting credentials [AES-256-GCM]", logType: "info",    status: "Decrypting AES-256-GCM..." },
  { target: 68,  duration: 540, logLine: "→ scanning for injection attacks...",    logType: "info",    status: "Scanning for injections..." },
  { target: 84,  duration: 460, logLine: "→ signature match: dhruv.ashok.patel ✓", logType: "info",    status: "Verifying signature..." },
  { target: 94,  duration: 320, logLine: "✓ ACCESS GRANTED",                       logType: "success", status: "Access granted" },
  { target: 100, duration: 380, logLine: "→ rendering portfolio...",               logType: "info",    status: "Rendering UI..." },
];

export const BootScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<Phase[]>([]);
  const [status, setStatus] = useState(phases[0].status);
  const [fadeOut, setFadeOut] = useState(false);
  const [speed, setSpeed] = useState("3.8");

  useEffect(() => {
    let cancelled = false;
    let currentProgress = 0;

    // Wobble speed indicator every 250ms for realism
    const speedInterval = window.setInterval(() => {
      setSpeed((2.9 + Math.random() * 1.6).toFixed(1));
    }, 250);

    const runPhase = (phase: Phase) => {
      if (cancelled) return Promise.resolve();
      setVisibleLines((prev) => [...prev, phase]);
      setStatus(phase.status);

      const startProgress = currentProgress;
      const delta = phase.target - startProgress;
      const start = performance.now();

      return new Promise<void>((resolve) => {
        const tick = (now: number) => {
          if (cancelled) return resolve();
          const elapsed = now - start;
          const t = Math.min(elapsed / phase.duration, 1);
          const eased = 1 - Math.pow(1 - t, 2.2);
          const jitter = (Math.random() - 0.5) * 0.6;
          const p = Math.min(startProgress + delta * eased + jitter, phase.target);
          currentProgress = p;
          setProgress(p);
          if (t < 1) {
            requestAnimationFrame(tick);
          } else {
            currentProgress = phase.target;
            setProgress(phase.target);
            resolve();
          }
        };
        requestAnimationFrame(tick);
      });
    };

    (async () => {
      for (const phase of phases) {
        await runPhase(phase);
      }
      if (cancelled) return;
      clearInterval(speedInterval);
      await new Promise((r) => setTimeout(r, 400));
      if (cancelled) return;
      setFadeOut(true);
      await new Promise((r) => setTimeout(r, 700));
      if (!cancelled) onDone();
    })();

    return () => {
      cancelled = true;
      clearInterval(speedInterval);
    };
  }, [onDone]);

  const progressInt = Math.floor(progress);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(225 30% 4%) 100%)",
      }}
    >
      {/* Animated grid backdrop */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Lime glow */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "hsl(var(--primary))" }}
      />

      {/* Terminal window */}
      <div className="relative w-full max-w-[560px] mx-6">
        <div className="border border-border bg-card/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
          {/* Chrome */}
          <div className="px-4 py-2.5 border-b border-border bg-muted/40 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[11px] font-mono text-muted-foreground">
              ~/dhruv-ashok-patel — portfolio.exe
            </span>
            <span className="w-8" />
          </div>

          {/* Log stream */}
          <div className="px-5 py-4 font-mono text-[13px] leading-relaxed min-h-[220px]">
            {visibleLines.map((line, i) => (
              <div
                key={i}
                className={
                  line.logType === "cmd"
                    ? "text-foreground"
                    : line.logType === "success"
                      ? "text-primary font-medium text-base my-1.5"
                      : "text-muted-foreground"
                }
              >
                {line.logLine}
              </div>
            ))}
            {progress < 100 && (
              <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle ml-0.5" />
            )}
          </div>

          {/* Progress bar row */}
          <div className="px-5 py-4 border-t border-border bg-muted/20">
            <div className="flex items-center justify-between mb-2 font-mono text-[11px]">
              <span className="text-muted-foreground truncate">{status}</span>
              <span className="text-primary font-medium ml-2 tabular-nums">
                {progressInt.toString().padStart(3, " ")}%
              </span>
            </div>
            <div className="relative h-1.5 bg-background rounded-full overflow-hidden border border-border">
              <div
                className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-100 ease-out"
                style={{
                  width: `${progress}%`,
                  boxShadow: `0 0 12px hsl(var(--primary) / 0.6)`,
                }}
              />
              {progress < 100 && progress > 5 && (
                <div
                  className="absolute inset-y-0 w-8 pointer-events-none"
                  style={{
                    left: `${Math.max(progress - 8, 0)}%`,
                    background:
                      "linear-gradient(90deg, transparent 0%, hsl(var(--primary-foreground) / 0.4) 50%, transparent 100%)",
                    filter: "blur(2px)",
                  }}
                />
              )}
            </div>
            <div className="flex items-center justify-between mt-2 font-mono text-[10px] text-muted-foreground/70">
              <span className="tabular-nums">
                {((progress / 100) * 24.5).toFixed(1)} / 24.5 MB
              </span>
              <span className="tabular-nums">
                {progress < 100 ? `${speed} MB/s` : "complete"}
              </span>
            </div>
          </div>
        </div>

        {/* Below terminal */}
        <div className="mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            secure_session
          </span>
          <span>portfolio · v2026</span>
        </div>
      </div>
    </div>
  );
};
