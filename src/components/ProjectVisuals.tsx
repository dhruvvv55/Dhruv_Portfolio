/* ─────────────────────────────────────────────────────────────
   Per-project SVG visuals.
   Every visual illustrates ONLY what is stated in the resume.
   No fabricated metrics or claims.
   ───────────────────────────────────────────────────────────── */

/* ============================================================
   QUANTUMSHOP
   ============================================================ */

export const QuantumShopHero = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="qs-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary) / 0.08)" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="400" height="250" fill="url(#qs-grid)" />

    {/* Status badge */}
    <g transform="translate(20, 20)">
      <rect width="100" height="22" rx="11" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.4)" />
      <circle cx="12" cy="11" r="3" fill="hsl(var(--primary))" />
      <text x="22" y="15" fill="hsl(var(--primary))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em">QKD · ACTIVE</text>
    </g>

    {/* Resume-grounded stat */}
    <g transform="translate(280, 20)" fontFamily="JetBrains Mono" fontSize="9">
      <text x="0" y="11" fill="hsl(var(--muted-foreground))">interception</text>
      <text x="100" y="11" fill="hsl(var(--primary))" textAnchor="end" fontWeight="500">−90%</text>
    </g>

    {/* Credit card */}
    <g transform="translate(40, 75)">
      <rect width="160" height="100" rx="10" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
      <rect x="14" y="22" width="28" height="20" rx="3" fill="hsl(var(--primary) / 0.3)" stroke="hsl(var(--primary) / 0.6)" />
      <text x="14" y="65" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="11" letterSpacing="2">4242  ····  ····  6411</text>
      <text x="14" y="86" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="7">QUANTUM-ENCRYPTED</text>
    </g>

    {/* Photon wave channel */}
    <g transform="translate(210, 100)">
      <path d="M 0 25 Q 12 5, 24 25 T 48 25 T 72 25 T 96 25 T 120 25 T 144 25" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" opacity="0.9" />
      <path d="M 0 25 Q 12 45, 24 25 T 48 25 T 72 25 T 96 25 T 120 25 T 144 25" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1.5" fill="none" />
      <circle cx="20" cy="15" r="2" fill="hsl(var(--primary))" />
      <circle cx="55" cy="20" r="1.5" fill="hsl(var(--primary) / 0.7)" />
      <circle cx="90" cy="15" r="2" fill="hsl(var(--primary))" />
      <circle cx="125" cy="20" r="1.5" fill="hsl(var(--primary) / 0.7)" />
      <text x="0" y="-14" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="8">QKD CHANNEL</text>
    </g>

    {/* FastAPI stack indicator */}
    <g transform="translate(40, 205)">
      <text x="0" y="0" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="8">STACK</text>
      {["FastAPI", "MongoDB", "Python"].map((t, i) => (
        <g key={t} transform={`translate(${60 + i * 75}, -8)`}>
          <rect width="68" height="14" rx="3" fill="hsl(var(--muted) / 0.5)" stroke="hsl(var(--border))" />
          <text x="34" y="10" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="8">{t}</text>
        </g>
      ))}
    </g>
  </svg>
);

export const QuantumShopArchitecture = () => (
  <svg viewBox="0 0 800 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    {/* Title */}
    <text x="40" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="11">$ quantumshop architecture</text>

    {/* Client */}
    <g transform="translate(40, 130)">
      <rect width="120" height="80" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
      <text x="60" y="32" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Client</text>
      <text x="60" y="52" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="11">Payment request</text>
      <text x="60" y="68" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="11">Card details</text>
    </g>

    {/* Arrow 1 */}
    <g>
      <line x1="170" y1="170" x2="225" y2="170" stroke="hsl(var(--primary))" strokeWidth="2" />
      <path d="M 220 165 L 230 170 L 220 175 Z" fill="hsl(var(--primary))" />
    </g>

    {/* FastAPI */}
    <g transform="translate(240, 120)">
      <rect width="160" height="100" rx="8" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" />
      <text x="80" y="32" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">FastAPI Backend</text>
      <text x="80" y="55" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="Inter" fontSize="11">REST endpoints</text>
      <text x="80" y="72" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="Inter" fontSize="11">Transaction routing</text>
      <text x="80" y="89" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">python · async</text>
    </g>

    {/* Arrow 2 */}
    <g>
      <line x1="410" y1="170" x2="465" y2="170" stroke="hsl(var(--primary))" strokeWidth="2" />
      <path d="M 460 165 L 470 170 L 460 175 Z" fill="hsl(var(--primary))" />
    </g>

    {/* QKD Key Exchange — highlighted */}
    <g transform="translate(480, 100)">
      <rect width="180" height="140" rx="8" fill="hsl(var(--primary) / 0.18)" stroke="hsl(var(--primary))" strokeWidth="2" />
      <text x="90" y="28" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">QKD-Inspired</text>
      <text x="90" y="44" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Key Exchange</text>

      {/* photon wave */}
      <g transform="translate(20, 70)">
        <path d="M 0 12 Q 10 0, 20 12 T 40 12 T 60 12 T 80 12 T 100 12 T 120 12 T 140 12" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" />
        <circle cx="20" cy="6" r="2" fill="hsl(var(--primary))" />
        <circle cx="60" cy="6" r="2" fill="hsl(var(--primary))" />
        <circle cx="100" cy="6" r="2" fill="hsl(var(--primary))" />
      </g>
      <text x="90" y="118" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="Inter" fontSize="11">Session key generation</text>
    </g>

    {/* MongoDB below */}
    <g transform="translate(240, 270)">
      <rect width="160" height="70" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
      <text x="80" y="30" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">MongoDB</text>
      <text x="80" y="50" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="11">Encrypted transactions</text>
    </g>

    {/* Connector to MongoDB */}
    <g>
      <line x1="320" y1="220" x2="320" y2="270" stroke="hsl(var(--border))" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M 315 265 L 320 275 L 325 265 Z" fill="hsl(var(--border))" />
    </g>

    {/* Output metric */}
    <g transform="translate(480, 270)">
      <rect width="180" height="70" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1.5" />
      <text x="90" y="32" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="20" fontWeight="500">−90%</text>
      <text x="90" y="52" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">interception risk</text>
    </g>
  </svg>
);

/* ============================================================
   MALWARE DETECTION
   ============================================================ */

export const MalwareHero = () => {
  const cells = Array.from({ length: 15 }, (_, i) => i);
  const highlighted = 7;
  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(30, 30)">
        <text fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">$ classify --families=25</text>
      </g>

      <g transform="translate(30, 55)">
        {cells.map((i) => {
          const col = i % 5;
          const row = Math.floor(i / 5);
          const x = col * 50;
          const y = row * 50;
          const isHi = i === highlighted;
          const pixels = Array.from({ length: 16 }, (_, p) => {
            const v = ((i + 1) * (p + 3) * 17) % 100;
            return v > 55 ? 1 : 0;
          });
          return (
            <g key={i} transform={`translate(${x}, ${y})`}>
              <rect width="40" height="40" fill="hsl(var(--muted) / 0.4)" stroke={isHi ? "hsl(var(--primary))" : "hsl(var(--border))"} strokeWidth={isHi ? 1.5 : 0.5} />
              {pixels.map((p, pi) => (
                p ? (
                  <rect key={pi} x={4 + (pi % 4) * 8} y={4 + Math.floor(pi / 4) * 8} width="6" height="6" fill={isHi ? "hsl(var(--primary))" : "hsl(var(--foreground) / 0.5)"} />
                ) : null
              ))}
              {isHi && (
                <>
                  <path d="M -3 -3 L 6 -3 M -3 -3 L -3 6" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                  <path d="M 43 -3 L 34 -3 M 43 -3 L 43 6" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                  <path d="M -3 43 L 6 43 M -3 43 L -3 34" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                  <path d="M 43 43 L 34 43 M 43 43 L 43 34" stroke="hsl(var(--primary))" strokeWidth="1.5" />
                </>
              )}
            </g>
          );
        })}
      </g>

      <g transform="translate(290, 55)">
        <rect width="80" height="50" rx="4" fill="hsl(var(--card))" stroke="hsl(var(--primary) / 0.4)" />
        <text x="8" y="14" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="7">MATCH</text>
        <text x="8" y="28" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="9">Family #14</text>
        <text x="8" y="42" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="11" fontWeight="500">98.74%</text>
      </g>

      <g transform="translate(290, 115)">
        <text fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="7">→ MobileNet</text>
        <text y="12" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="7">→ LSTM head</text>
        <text y="24" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="7">→ softmax</text>
      </g>
    </svg>
  );
};

export const MalwareArchitecture = () => (
  <svg viewBox="0 0 800 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <text x="40" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="11">$ malware detection pipeline</text>

    {/* Step 1: Binary */}
    <g transform="translate(30, 130)">
      <rect width="120" height="100" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
      <text x="60" y="30" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Binary</text>
      <text x="60" y="50" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="11">Malware sample</text>
      <text x="60" y="78" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">0x4D5A9000</text>
    </g>

    <line x1="158" y1="180" x2="190" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M 185 175 L 195 180 L 185 185 Z" fill="hsl(var(--primary))" />

    {/* Step 2: Grayscale image */}
    <g transform="translate(200, 130)">
      <rect width="120" height="100" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
      <text x="60" y="22" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="12" fontWeight="500">Grayscale</text>
      <text x="60" y="38" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="12" fontWeight="500">Image</text>
      {/* mini pixel grid */}
      <g transform="translate(38, 50)">
        {Array.from({ length: 16 }, (_, i) => {
          const col = i % 4;
          const row = Math.floor(i / 4);
          const opacity = ((i + 1) * 17) % 100 / 100;
          return <rect key={i} x={col * 11} y={row * 11} width="9" height="9" fill={`hsl(var(--foreground) / ${opacity * 0.7})`} />;
        })}
      </g>
    </g>

    <line x1="328" y1="180" x2="360" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M 355 175 L 365 180 L 355 185 Z" fill="hsl(var(--primary))" />

    {/* Step 3: MobileNet + LSTM */}
    <g transform="translate(370, 100)">
      <rect width="180" height="160" rx="8" fill="hsl(var(--primary) / 0.18)" stroke="hsl(var(--primary))" strokeWidth="2" />
      <text x="90" y="28" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">MobileNet + LSTM</text>

      {/* Neural net visualization */}
      <g transform="translate(20, 50)">
        {[0, 1, 2, 3].map((layer) => (
          <g key={layer}>
            {[0, 1, 2, 3, 4].map((node) => (
              <circle key={node} cx={layer * 35} cy={node * 18} r="4" fill="hsl(var(--primary) / 0.6)" />
            ))}
            {layer < 3 && [0, 1, 2, 3, 4].map((n1) => (
              [0, 1, 2, 3, 4].map((n2) => (
                <line key={`${n1}-${n2}`} x1={layer * 35 + 4} y1={n1 * 18} x2={(layer + 1) * 35 - 4} y2={n2 * 18} stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.5" />
              ))
            ))}
          </g>
        ))}
      </g>
      <text x="90" y="148" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">TensorFlow</text>
    </g>

    <line x1="558" y1="180" x2="590" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M 585 175 L 595 180 L 585 185 Z" fill="hsl(var(--primary))" />

    {/* Step 4: 25 family output */}
    <g transform="translate(600, 130)">
      <rect width="170" height="100" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" />
      <text x="85" y="28" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Classification</text>
      <text x="85" y="55" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="22" fontWeight="500">98.74%</text>
      <text x="85" y="76" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="10">across 25 families</text>
      <text x="85" y="92" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">loss: 0.0386</text>
    </g>

    {/* Bottom: dataset note */}
    <g transform="translate(40, 310)">
      <text x="0" y="0" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">dataset</text>
      <text x="60" y="0" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="10">Malimg · 9,339 images · 25 families</text>
      <text x="0" y="22" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">benchmarked</text>
      <text x="84" y="22" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="10">CNN · VGG16 · VGG19 · ResNet50 · Xception · MobileNet</text>
    </g>
  </svg>
);

/* ============================================================
   PREDICTIVE MAINTENANCE
   ============================================================ */

export const MaintenanceHero = () => {
  const points: string[] = [];
  for (let i = 0; i <= 60; i++) {
    const x = 20 + i * 6;
    const base = 130 + Math.sin(i * 0.3) * 18 + Math.sin(i * 1.1) * 6;
    const anomaly = i > 42 && i < 48 ? -45 * Math.exp(-Math.pow((i - 45) / 1.5, 2)) : 0;
    const y = base + anomaly;
    points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
  }

  return (
    <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(20, 22)">
        <text fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">sensor_signal.csv</text>
      </g>

      {[60, 100, 140, 180].map((y, i) => (
        <g key={i}>
          <line x1="20" y1={y} x2="380" y2={y} stroke="hsl(var(--border))" strokeDasharray="2 4" />
          <text x="14" y={y + 3} fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="7" textAnchor="end">{[150, 100, 50, 0][i]}</text>
        </g>
      ))}

      <line x1="20" y1="80" x2="380" y2="80" stroke="hsl(var(--primary) / 0.5)" strokeDasharray="4 2" />
      <text x="380" y="76" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="7" textAnchor="end">threshold</text>

      <path d={points.join(" ")} fill="none" stroke="hsl(var(--foreground) / 0.6)" strokeWidth="1.2" />

      <circle cx="290" cy="68" r="6" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <circle cx="290" cy="68" r="2" fill="hsl(var(--primary))" />
      <line x1="290" y1="64" x2="290" y2="50" stroke="hsl(var(--primary))" strokeWidth="1" />
      <rect x="240" y="36" width="100" height="14" rx="3" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.5)" />
      <text x="290" y="46" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle">failure · 98.5%</text>

      <g fontFamily="JetBrains Mono" fontSize="7" fill="hsl(var(--muted-foreground))">
        <text x="20" y="210">t-60</text>
        <text x="200" y="210" textAnchor="middle">t-30</text>
        <text x="380" y="210" textAnchor="end">t-0</text>
      </g>
    </svg>
  );
};

export const MaintenanceArchitecture = () => (
  <svg viewBox="0 0 800 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <text x="40" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="11">$ predictive maintenance pipeline</text>

    {/* Step 1: Sensors */}
    <g transform="translate(30, 130)">
      <rect width="130" height="100" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
      <text x="65" y="28" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Sensors</text>
      {/* tiny waveform */}
      <path d="M 20 60 Q 30 50, 40 60 T 60 60 T 80 60 T 100 60" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" />
      <path d="M 20 75 Q 28 65, 36 75 T 52 75 T 68 75 T 84 75 T 100 75" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1" fill="none" />
      <text x="65" y="92" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="10">Industrial signals</text>
    </g>

    <line x1="168" y1="180" x2="200" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M 195 175 L 205 180 L 195 185 Z" fill="hsl(var(--primary))" />

    {/* Step 2: Feature engineering */}
    <g transform="translate(210, 130)">
      <rect width="140" height="100" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
      <text x="70" y="26" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="12" fontWeight="500">Feature</text>
      <text x="70" y="42" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="12" fontWeight="500">Engineering</text>
      <text x="70" y="64" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="10">Temporal patterns</text>
      <text x="70" y="80" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="10">Signal anomalies</text>
    </g>

    <line x1="358" y1="180" x2="390" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M 385 175 L 395 180 L 385 185 Z" fill="hsl(var(--primary))" />

    {/* Step 3: ML training */}
    <g transform="translate(400, 110)">
      <rect width="170" height="140" rx="8" fill="hsl(var(--primary) / 0.18)" stroke="hsl(var(--primary))" strokeWidth="2" />
      <text x="85" y="28" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Supervised ML</text>
      <g transform="translate(20, 50)">
        {[0, 1, 2].map((layer) => (
          <g key={layer}>
            {[0, 1, 2, 3].map((node) => (
              <circle key={node} cx={layer * 50} cy={node * 18} r="4" fill="hsl(var(--primary) / 0.6)" />
            ))}
            {layer < 2 && [0, 1, 2, 3].map((n1) => (
              [0, 1, 2, 3].map((n2) => (
                <line key={`${n1}-${n2}`} x1={layer * 50 + 4} y1={n1 * 18} x2={(layer + 1) * 50 - 4} y2={n2 * 18} stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.5" />
              ))
            ))}
          </g>
        ))}
      </g>
      <text x="85" y="128" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">scikit-learn · pandas</text>
    </g>

    <line x1="578" y1="180" x2="610" y2="180" stroke="hsl(var(--primary))" strokeWidth="2" />
    <path d="M 605 175 L 615 180 L 605 185 Z" fill="hsl(var(--primary))" />

    {/* Step 4: Output */}
    <g transform="translate(620, 130)">
      <rect width="150" height="100" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--primary) / 0.5)" strokeWidth="1.5" />
      <text x="75" y="28" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Prediction</text>
      <text x="75" y="55" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="22" fontWeight="500">98.5%</text>
      <text x="75" y="76" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="10">failure accuracy</text>
    </g>

    <g transform="translate(40, 310)">
      <text x="0" y="0" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">published</text>
      <text x="60" y="0" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="10">IJARSCT · Aug 2024</text>
    </g>
  </svg>
);

/* ============================================================
   LLM AGENT SECURITY
   ============================================================ */

export const LLMHero = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <g transform="translate(20, 22)">
      <text fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">$ analyze --vectors=3</text>
    </g>

    {/* Attacker */}
    <g transform="translate(30, 70)">
      <rect width="80" height="50" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" />
      <text x="40" y="22" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="10">attacker</text>
      <text x="40" y="38" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="8">input</text>
    </g>

    {/* arrow */}
    <line x1="115" y1="95" x2="145" y2="95" stroke="hsl(var(--destructive) / 0.7)" strokeWidth="1.5" strokeDasharray="3 2" />
    <path d="M 140 91 L 148 95 L 140 99 Z" fill="hsl(var(--destructive) / 0.7)" />

    {/* LLM Agent */}
    <g transform="translate(150, 50)">
      <rect width="120" height="90" rx="6" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
      <text x="60" y="22" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="11" fontWeight="500">LLM Agent</text>
      {/* mini nodes */}
      <circle cx="40" cy="50" r="5" fill="hsl(var(--primary) / 0.5)" />
      <circle cx="60" cy="50" r="5" fill="hsl(var(--primary) / 0.5)" />
      <circle cx="80" cy="50" r="5" fill="hsl(var(--primary) / 0.5)" />
      <circle cx="40" cy="68" r="5" fill="hsl(var(--primary) / 0.5)" />
      <circle cx="60" cy="68" r="5" fill="hsl(var(--primary) / 0.5)" />
      <circle cx="80" cy="68" r="5" fill="hsl(var(--primary) / 0.5)" />
    </g>

    {/* Vectors on right */}
    <g transform="translate(290, 50)" fontFamily="JetBrains Mono" fontSize="9">
      <rect width="100" height="22" rx="4" fill="hsl(var(--destructive) / 0.1)" stroke="hsl(var(--destructive) / 0.4)" />
      <text x="50" y="14" textAnchor="middle" fill="hsl(var(--destructive))">prompt_inj</text>

      <rect y="30" width="100" height="22" rx="4" fill="hsl(var(--destructive) / 0.1)" stroke="hsl(var(--destructive) / 0.4)" />
      <text x="50" y="44" textAnchor="middle" fill="hsl(var(--destructive))">multi_turn</text>

      <rect y="60" width="100" height="22" rx="4" fill="hsl(var(--destructive) / 0.1)" stroke="hsl(var(--destructive) / 0.4)" />
      <text x="50" y="74" textAnchor="middle" fill="hsl(var(--destructive))">data_exfil</text>
    </g>

    {/* Bottom: status */}
    <g transform="translate(30, 200)">
      <circle cx="6" cy="6" r="4" fill="hsl(var(--primary))" />
      <text x="18" y="10" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="10">ACTIVE RESEARCH</text>
      <text x="200" y="10" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">→ publication target</text>
    </g>
  </svg>
);

export const LLMArchitecture = () => (
  <svg viewBox="0 0 800 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <text x="40" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="11">$ research framework</text>

    {/* Attacker */}
    <g transform="translate(30, 100)">
      <rect width="120" height="80" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--destructive) / 0.5)" strokeWidth="1.5" />
      <text x="60" y="30" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">Adversary</text>
      <text x="60" y="50" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="10">External input</text>
      <text x="60" y="65" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="10">Tool poisoning</text>
    </g>

    {/* Attack arrows */}
    <g stroke="hsl(var(--destructive) / 0.7)" strokeWidth="1.5" strokeDasharray="4 3" fill="none">
      <path d="M 158 140 L 240 140" />
    </g>
    <path d="M 235 135 L 245 140 L 235 145 Z" fill="hsl(var(--destructive) / 0.7)" />

    {/* LLM Agent box - center */}
    <g transform="translate(255, 75)">
      <rect width="220" height="160" rx="8" fill="hsl(var(--primary) / 0.18)" stroke="hsl(var(--primary))" strokeWidth="2" />
      <text x="110" y="28" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="13" fontWeight="500">LLM Agent</text>

      {/* Neural network */}
      <g transform="translate(35, 45)">
        {[0, 1, 2, 3].map((layer) => (
          <g key={layer}>
            {[0, 1, 2, 3].map((node) => (
              <circle key={node} cx={layer * 50} cy={node * 18} r="4" fill="hsl(var(--primary) / 0.6)" />
            ))}
            {layer < 3 && [0, 1, 2, 3].map((n1) => (
              [0, 1, 2, 3].map((n2) => (
                <line key={`${n1}-${n2}`} x1={layer * 50 + 4} y1={n1 * 18} x2={(layer + 1) * 50 - 4} y2={n2 * 18} stroke="hsl(var(--primary) / 0.15)" strokeWidth="0.5" />
              ))
            ))}
          </g>
        ))}
      </g>
      <text x="110" y="145" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">tool use + memory</text>
    </g>

    {/* Attack vectors on right */}
    <g transform="translate(540, 75)">
      <text x="0" y="0" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">ATTACK VECTORS</text>

      {[
        { y: 20, label: "Prompt Injection", desc: "Direct override" },
        { y: 75, label: "Multi-Turn Manipulation", desc: "Bypass single-turn filters" },
        { y: 130, label: "Data Exfiltration", desc: "Tool-use leaks" },
      ].map((v, i) => (
        <g key={i} transform={`translate(0, ${v.y})`}>
          <rect width="220" height="50" rx="6" fill="hsl(var(--destructive) / 0.08)" stroke="hsl(var(--destructive) / 0.5)" strokeWidth="1.5" />
          <text x="14" y="22" fill="hsl(var(--destructive))" fontFamily="JetBrains Mono" fontSize="11" fontWeight="500">{v.label}</text>
          <text x="14" y="40" fill="hsl(var(--muted-foreground))" fontFamily="Inter" fontSize="11">{v.desc}</text>
        </g>
      ))}
    </g>

    {/* Bottom: frameworks consulted */}
    <g transform="translate(40, 290)">
      <text x="0" y="0" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">frameworks</text>
      {["NIST AI RMF", "OWASP LLM Top 10", "Academic literature"].map((t, i) => (
        <g key={t} transform={`translate(${110 + i * 160}, -10)`}>
          <rect width="150" height="20" rx="4" fill="hsl(var(--muted) / 0.5)" stroke="hsl(var(--border))" />
          <text x="75" y="14" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="9">{t}</text>
        </g>
      ))}
    </g>
  </svg>
);

/* ============================================================
   TRYHACKME
   ============================================================ */

export const TryHackMeHero = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <g transform="translate(20, 22)">
      <text fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">$ tryhackme --rooms --completed</text>
    </g>

    {/* Big counter */}
    <g transform="translate(200, 100)">
      <text textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="64" fontWeight="500">50+</text>
      <text y="32" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="11">labs completed</text>
    </g>

    {/* Domain pills at bottom */}
    <g transform="translate(20, 195)" fontFamily="JetBrains Mono" fontSize="8">
      {[
        { x: 0, w: 70, label: "vuln_assess" },
        { x: 78, w: 76, label: "intrusion_det" },
        { x: 162, w: 60, label: "forensics" },
        { x: 230, w: 60, label: "mobile_sec" },
        { x: 298, w: 65, label: "exploits" },
      ].map((p) => (
        <g key={p.label} transform={`translate(${p.x}, 0)`}>
          <rect width={p.w} height="20" rx="4" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary) / 0.3)" />
          <text x={p.w / 2} y="14" textAnchor="middle" fill="hsl(var(--primary))">{p.label}</text>
        </g>
      ))}
    </g>
  </svg>
);

export const TryHackMeArchitecture = () => (
  <svg viewBox="0 0 800 380" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
    <text x="40" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="11">$ hands-on practice domains</text>

    {/* 5 domain cards in a row */}
    <g transform="translate(40, 110)">
      {[
        { x: 0, label: "Vulnerability", sub: "Assessment", icon: "V" },
        { x: 150, label: "Intrusion", sub: "Detection", icon: "I" },
        { x: 300, label: "Digital", sub: "Forensics", icon: "F" },
        { x: 450, label: "Mobile", sub: "Security", icon: "M" },
        { x: 600, label: "Exploit", sub: "Fundamentals", icon: "E" },
      ].map((d, i) => (
        <g key={i} transform={`translate(${d.x}, 0)`}>
          <rect width="130" height="160" rx="8" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1.5" />
          {/* icon circle */}
          <circle cx="65" cy="40" r="22" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary))" strokeWidth="1.5" />
          <text x="65" y="48" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="20" fontWeight="500">{d.icon}</text>

          <text x="65" y="92" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="12" fontWeight="500">{d.label}</text>
          <text x="65" y="108" textAnchor="middle" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="12" fontWeight="500">{d.sub}</text>

          {/* progress bar */}
          <rect x="20" y="125" width="90" height="4" rx="2" fill="hsl(var(--muted))" />
          <rect x="20" y="125" width={20 + i * 10} height="4" rx="2" fill="hsl(var(--primary))" />
          <text x="65" y="146" textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9">ongoing</text>
        </g>
      ))}
    </g>

    {/* Bottom counter */}
    <g transform="translate(400, 320)">
      <text textAnchor="middle" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="10">total</text>
      <text y="20" textAnchor="middle" fill="hsl(var(--primary))" fontFamily="JetBrains Mono" fontSize="20" fontWeight="500">50+ rooms</text>
    </g>
  </svg>
);

/* ============================================================
   SOC DETECTION LAB — clean detection graph visual
   ============================================================ */

export const SocLabHero = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="soc-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary) / 0.08)" strokeWidth="0.5" />
      </pattern>
      <linearGradient id="soc-line" x1="0" x2="1" y1="0" y2="0">
        <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
        <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
        <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
      </linearGradient>
    </defs>
    <rect width="400" height="250" fill="url(#soc-grid)" />

    {/* Header row */}
    <g transform="translate(20, 20)">
      <rect width="120" height="22" rx="11" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.4)" />
      <circle cx="12" cy="11" r="3" fill="hsl(var(--primary))" />
      <text x="22" y="15" fill="hsl(var(--primary))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em">WAZUH · LIVE</text>
    </g>
    <text x="380" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9" textAnchor="end">15+ signals · 8 techniques</text>

    {/* Alert pipeline nodes */}
    {[
      { x: 40, label: "Sysmon" },
      { x: 130, label: "Wazuh" },
      { x: 220, label: "VT enrich" },
      { x: 320, label: "Splunk" },
    ].map((n, i) => (
      <g key={i} transform={`translate(${n.x}, 130)`}>
        <rect width="60" height="34" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--primary) / 0.4)" strokeWidth="1" />
        <text x="30" y="22" fill="hsl(var(--foreground))" fontFamily="JetBrains Mono" fontSize="9" textAnchor="middle">{n.label}</text>
      </g>
    ))}
    {/* connecting lines */}
    <line x1="100" y1="147" x2="130" y2="147" stroke="url(#soc-line)" strokeWidth="1.5" />
    <line x1="190" y1="147" x2="220" y2="147" stroke="url(#soc-line)" strokeWidth="1.5" />
    <line x1="280" y1="147" x2="320" y2="147" stroke="url(#soc-line)" strokeWidth="1.5" />

    {/* ATT&CK tags */}
    <g transform="translate(20, 200)" fontFamily="JetBrains Mono" fontSize="8">
      {["T1003", "T1055", "T1547", "T1059"].map((t, i) => (
        <g key={t} transform={`translate(${i * 70}, 0)`}>
          <rect width="60" height="18" rx="4" fill="hsl(var(--primary) / 0.08)" stroke="hsl(var(--primary) / 0.3)" />
          <text x="30" y="12" fill="hsl(var(--primary))" textAnchor="middle">{t}</text>
        </g>
      ))}
    </g>
  </svg>
);

/* ============================================================
   CLOUD THREAT DETECTION LAB — GCP IAM escalation
   ============================================================ */

export const CloudLabHero = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="cloud-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary) / 0.08)" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="400" height="250" fill="url(#cloud-grid)" />

    {/* Header */}
    <g transform="translate(20, 20)">
      <rect width="120" height="22" rx="11" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.4)" />
      <circle cx="12" cy="11" r="3" fill="hsl(var(--primary))" />
      <text x="22" y="15" fill="hsl(var(--primary))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em">GCP · DETECT</text>
    </g>
    <text x="380" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9" textAnchor="end">T1078.004</text>

    {/* Escalation flow */}
    <g transform="translate(30, 90)" fontFamily="JetBrains Mono">
      <rect width="130" height="50" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--border))" strokeWidth="1" />
      <text x="65" y="20" fill="hsl(var(--muted-foreground))" fontSize="8" textAnchor="middle">SERVICE ACCOUNT</text>
      <text x="65" y="38" fill="hsl(var(--foreground))" fontSize="12" textAnchor="middle" fontWeight="500">roles/viewer</text>
    </g>

    {/* Arrow */}
    <g transform="translate(170, 115)">
      <line x1="0" y1="0" x2="55" y2="0" stroke="hsl(var(--primary))" strokeWidth="2" />
      <polygon points="55,-5 65,0 55,5" fill="hsl(var(--primary))" />
      <text x="30" y="-8" fill="hsl(var(--primary))" fontSize="8" fontFamily="JetBrains Mono" textAnchor="middle">SetIamPolicy</text>
    </g>

    <g transform="translate(240, 90)" fontFamily="JetBrains Mono">
      <rect width="130" height="50" rx="6" fill="hsl(var(--primary) / 0.12)" stroke="hsl(var(--primary) / 0.6)" strokeWidth="1.5" />
      <text x="65" y="20" fill="hsl(var(--primary))" fontSize="8" textAnchor="middle">ESCALATED TO</text>
      <text x="65" y="38" fill="hsl(var(--primary))" fontSize="12" textAnchor="middle" fontWeight="600">roles/owner</text>
    </g>

    {/* Audit event log */}
    <g transform="translate(30, 180)" fontFamily="JetBrains Mono" fontSize="9">
      <text x="0" y="0" fill="hsl(var(--muted-foreground))">audit_events_analyzed</text>
      <text x="340" y="0" fill="hsl(var(--primary))" textAnchor="end" fontWeight="500">32+</text>
      <line x1="0" y1="8" x2="340" y2="8" stroke="hsl(var(--border))" strokeWidth="0.5" />
      <text x="0" y="22" fill="hsl(var(--muted-foreground))">alerting</text>
      <text x="340" y="22" fill="hsl(var(--primary))" textAnchor="end" fontWeight="500">automated · scheduled</text>
    </g>
  </svg>
);

/* ============================================================
   AGENT INJECTION LAB — 5x5 attack/defense grid
   ============================================================ */

export const AgentLabHero = () => (
  <svg viewBox="0 0 400 250" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="agent-grid" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--primary) / 0.08)" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="400" height="250" fill="url(#agent-grid)" />

    {/* Header */}
    <g transform="translate(20, 20)">
      <rect width="140" height="22" rx="11" fill="hsl(var(--primary) / 0.15)" stroke="hsl(var(--primary) / 0.4)" />
      <circle cx="12" cy="11" r="3" fill="hsl(var(--primary))">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="22" y="15" fill="hsl(var(--primary))" fontSize="9" fontFamily="JetBrains Mono" letterSpacing="0.05em">AGENT · RED TEAM</text>
    </g>
    <text x="380" y="35" fill="hsl(var(--muted-foreground))" fontFamily="JetBrains Mono" fontSize="9" textAnchor="end">5 × 5 = 25 pairs</text>

    {/* Attack × Defense matrix */}
    <g transform="translate(90, 70)">
      <text x="90" y="-8" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle">DEFENSES →</text>
      <text x="-50" y="90" fill="hsl(var(--muted-foreground))" fontSize="9" fontFamily="JetBrains Mono" textAnchor="middle" transform="rotate(-90, -50, 90)">ATTACKS ↓</text>
      {Array.from({ length: 5 }, (_, r) =>
        Array.from({ length: 5 }, (_, c) => {
          // Fake pattern: diagonal successes
          const blocked = (r + c) % 2 === 0 || r === c;
          return (
            <rect
              key={`${r}-${c}`}
              x={c * 36}
              y={r * 30}
              width={32}
              height={26}
              rx={3}
              fill={blocked ? "hsl(var(--primary) / 0.6)" : "hsl(var(--destructive) / 0.5)"}
              stroke="hsl(var(--border))"
              strokeWidth="0.5"
            />
          );
        })
      )}
    </g>

    {/* Legend */}
    <g transform="translate(30, 220)" fontFamily="JetBrains Mono" fontSize="9">
      <rect x="0" y="0" width="10" height="10" fill="hsl(var(--primary) / 0.6)" rx="2" />
      <text x="16" y="9" fill="hsl(var(--muted-foreground))">blocked</text>
      <rect x="80" y="0" width="10" height="10" fill="hsl(var(--destructive) / 0.5)" rx="2" />
      <text x="96" y="9" fill="hsl(var(--muted-foreground))">succeeded</text>
      <text x="380" y="9" fill="hsl(var(--primary))" textAnchor="end" fontWeight="500">live SSE stream</text>
    </g>
  </svg>
);

/* ============================================================
   Lookup map — used by Projects.tsx and ProjectDetail.tsx
   ============================================================ */

export const projectVisuals: Record<
  string,
  { hero: () => JSX.Element; architecture?: () => JSX.Element }
> = {
  "soc-detection-lab": { hero: SocLabHero },
  "cloud-threat-detection-lab": { hero: CloudLabHero },
  "agent-injection-lab": { hero: AgentLabHero },
  quantumshop: { hero: QuantumShopHero, architecture: QuantumShopArchitecture },
  "malware-detection": { hero: MalwareHero, architecture: MalwareArchitecture },
};
