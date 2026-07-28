import { useEffect, useRef, useState } from "react";
import { ShieldCheck } from "lucide-react";

/**
 * BootScreen — 2-stage boot:
 *   Stage 1: Terminal with live progress bar (loading)
 *   Stage 2: Full-screen ACCESS GRANTED takeover (matrix rain, scan lines, glitch)
 */

type Phase = {
  target: number;
  duration: number;
  logLine: string;
  logType?: "cmd" | "info" | "success";
  status: string;
};

const phases: Phase[] = [
  { target: 6,   duration: 120, logLine: "$ ssh dhruv@portfolio.exe",              logType: "cmd",     status: "Initializing..." },
  { target: 18,  duration: 260, logLine: "→ establishing secure connection...",    logType: "info",    status: "TLS handshake..." },
  { target: 34,  duration: 340, logLine: "→ verifying identity...",                logType: "info",    status: "Verifying identity..." },
  { target: 52,  duration: 420, logLine: "→ decrypting credentials [AES-256-GCM]", logType: "info",    status: "Decrypting AES-256-GCM..." },
  { target: 68,  duration: 300, logLine: "→ scanning for injection attacks...",    logType: "info",    status: "Scanning for injections..." },
  { target: 84,  duration: 260, logLine: "→ signature match: dhruv.ashok.patel ✓", logType: "info",    status: "Verifying signature..." },
  { target: 100, duration: 260, logLine: "→ authorization complete",               logType: "info",    status: "Finalizing..." },
];

type Stage = "loading" | "granted" | "done";

export const BootScreen = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [visibleLines, setVisibleLines] = useState<Phase[]>([]);
  const [status, setStatus] = useState(phases[0].status);
  const [speed, setSpeed] = useState("3.8");
  const [stage, setStage] = useState<Stage>("loading");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // ── Stage 1: run the loader ──────────────────────────
  useEffect(() => {
    let cancelled = false;
    let currentProgress = 0;

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
          if (t < 1) requestAnimationFrame(tick);
          else {
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
      await new Promise((r) => setTimeout(r, 250));
      if (cancelled) return;
      setStage("granted");
      await new Promise((r) => setTimeout(r, 700));
      if (cancelled) return;
      setStage("done");
      await new Promise((r) => setTimeout(r, 700));
      if (!cancelled) onDone();
    })();

    return () => {
      cancelled = true;
      clearInterval(speedInterval);
    };
  }, [onDone]);

  // ── Matrix rain canvas (only during granted stage, optimized) ───
  useEffect(() => {
    if (stage !== "granted") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.scale(dpr, dpr);

    const chars = "01アイウエオカキクケコ<>{}[]#$%&*+=ABCDEF0123456789";
    const fontSize = 16;
    const columns = Math.floor(w / fontSize);
    const drops: number[] = Array(columns).fill(0).map(() => Math.random() * -30);

    let animationId: number;
    let lastTime = 0;
    const frameInterval = 1000 / 24; // Cap at 24 fps — matrix rain doesn't need 60

    const draw = (time: number) => {
      if (time - lastTime < frameInterval) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastTime = time;

      // Fade previous frame
      ctx.fillStyle = "rgba(10, 12, 20, 0.14)";
      ctx.fillRect(0, 0, w, h);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;
      ctx.fillStyle = "hsl(75, 90%, 60%)";
      ctx.globalAlpha = 0.75;

      for (let i = 0; i < drops.length; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(ch, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.97) drops[i] = 0;
        drops[i] += 1;
      }
      animationId = requestAnimationFrame(draw);
    };
    animationId = requestAnimationFrame(draw);

    return () => cancelAnimationFrame(animationId);
  }, [stage]);

  const progressInt = Math.floor(progress);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${
        stage === "done" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(var(--background)) 0%, hsl(225 30% 4%) 100%)",
      }}
    >
      {/* Grid backdrop */}
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

      {/* ─── STAGE 1: LOADER TERMINAL ─── */}
      {stage === "loading" && (
        <div className="relative w-full max-w-[560px] mx-6 animate-boot-fade-in">
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

            {/* Progress bar */}
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

          <div className="mt-4 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              secure_session
            </span>
            <span>portfolio · v2026</span>
          </div>
        </div>
      )}

      {/* ─── STAGE 2: ACCESS GRANTED TAKEOVER ─── */}
      {stage === "granted" && (
        <>
          {/* Matrix rain canvas (optimized: 24fps cap, single fillText per column) */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none opacity-40"
          />

          {/* Vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, hsl(225 30% 4% / 0.6) 100%)",
            }}
          />

          {/* Center card */}
          <div className="relative z-10 text-center animate-granted-in">
            {/* Small tag */}
            <div className="mb-6 flex items-center justify-center gap-3">
              <span className="h-px bg-primary w-16" />
              <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-primary">
                identity confirmed
              </span>
              <span className="h-px bg-primary w-16" />
            </div>

            {/* Big shield icon with pulse */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/30 blur-3xl animate-pulse" />
                <ShieldCheck className="relative w-20 h-20 text-primary" strokeWidth={1.5} />
              </div>
            </div>

            {/* ACCESS GRANTED — glitch effect */}
            <div className="relative mb-8">
              <h1
                className="font-mono font-bold uppercase tracking-[0.15em] text-primary select-none glitch-text"
                data-text="ACCESS GRANTED"
                style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", lineHeight: 1 }}
              >
                ACCESS GRANTED
              </h1>
            </div>

            {/* Status lines */}
            <div className="space-y-1 font-mono text-xs md:text-sm text-muted-foreground">
              <div className="flex items-center justify-center gap-3">
                <span className="text-primary">▸</span>
                <span>USER: dhruv.ashok.patel</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-primary">▸</span>
                <span>CLEARANCE: cybersecurity_engineer</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <span className="text-primary">▸</span>
                <span>SESSION: verified · 256-bit</span>
              </div>
            </div>

            {/* Corner brackets */}
            <div className="absolute -top-8 -left-8 w-6 h-6 border-l-2 border-t-2 border-primary" />
            <div className="absolute -top-8 -right-8 w-6 h-6 border-r-2 border-t-2 border-primary" />
            <div className="absolute -bottom-8 -left-8 w-6 h-6 border-l-2 border-b-2 border-primary" />
            <div className="absolute -bottom-8 -right-8 w-6 h-6 border-r-2 border-b-2 border-primary" />
          </div>
        </>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes bootFadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-boot-fade-in { animation: bootFadeIn 0.5s ease-out; }

        @keyframes grantedIn {
          0% { opacity: 0; transform: scale(0.9); filter: blur(8px); }
          40% { opacity: 1; filter: blur(0); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .animate-granted-in { animation: grantedIn 0.5s cubic-bezier(0.16, 1, 0.3, 1); }

        /* Glitch text — RGB-split flicker */
        .glitch-text {
          position: relative;
          text-shadow:
            0 0 4px hsl(var(--primary) / 0.6),
            0 0 20px hsl(var(--primary) / 0.4);
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -1px 0 hsl(0, 90%, 60%);
          animation: glitchAnim 2.4s infinite linear alternate-reverse;
          clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -1px 0 hsl(190, 90%, 60%);
          animation: glitchAnim 3.1s infinite linear alternate-reverse;
          clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
        }
        @keyframes glitchAnim {
          0%   { transform: translate(0); }
          20%  { transform: translate(-2px, 1px); }
          40%  { transform: translate(-1px, -1px); }
          60%  { transform: translate(1px, 2px); }
          80%  { transform: translate(2px, -1px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </div>
  );
};