import { useEffect, useState } from "react";

/**
 * BootScreen — terminal boot sequence that plays on first visit.
 * Types out an "access granted" flow, then fades to reveal the site.
 * Shows once per browser session (sessionStorage flag).
 */
const bootLines = [
  { text: "$ ssh dhruv@portfolio.exe", type: "cmd", delay: 200 },
  { text: "→ establishing secure connection...", type: "info", delay: 500 },
  { text: "→ verifying identity...", type: "info", delay: 900 },
  { text: "→ decrypting credentials [AES-256-GCM]", type: "info", delay: 1300 },
  { text: "→ scanning for injection attacks...", type: "info", delay: 1700 },
  { text: "→ signature match: dhruv.ashok.patel ✓", type: "info", delay: 2100 },
  { text: "✓ ACCESS GRANTED", type: "success", delay: 2500 },
  { text: "→ rendering portfolio...", type: "info", delay: 3000 },
];

export const BootScreen = ({ onDone }: { onDone: () => void }) => {
  const [step, setStep] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Type out each line at its delay
    const timers = bootLines.map((line, i) =>
      window.setTimeout(() => setStep(i + 1), line.delay)
    );

    // Fade out after last line + short pause
    const fadeTimer = window.setTimeout(() => setFadeOut(true), 3500);
    // Fully remove after fade
    const doneTimer = window.setTimeout(onDone, 4200);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-background flex items-center justify-center transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(225 30% 4%) 100%)",
      }}
    >
      {/* Subtle animated grid backdrop */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary) / 0.15) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Faint lime glow behind terminal */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "hsl(var(--primary))" }}
      />

      {/* Terminal window */}
      <div className="relative w-full max-w-[520px] mx-6">
        <div className="border border-border bg-card/95 backdrop-blur-sm rounded-lg overflow-hidden shadow-2xl">
          {/* Terminal chrome */}
          <div className="px-4 py-2.5 border-b border-border bg-muted/40 flex items-center justify-between">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[11px] font-mono text-muted-foreground">
              ~/dhruv-ashok-patel — portfolio.exe
            </span>
            <span className="w-8" /> {/* spacer for centering */}
          </div>

          {/* Terminal body */}
          <div className="px-5 py-4 font-mono text-[13px] leading-relaxed min-h-[240px]">
            {bootLines.slice(0, step).map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "cmd"
                    ? "text-foreground"
                    : line.type === "success"
                      ? "text-primary font-medium text-base my-2"
                      : "text-muted-foreground"
                }
              >
                {line.text}
              </div>
            ))}
            {step < bootLines.length && (
              <span className="inline-block w-2 h-4 bg-primary animate-pulse align-middle ml-0.5" />
            )}
          </div>
        </div>

        {/* Below terminal — small status */}
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
