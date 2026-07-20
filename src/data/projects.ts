/* ─────────────────────────────────────────────────────────────
   Central project data.
   Source of truth: latest resume (detection engineering focus).
   ───────────────────────────────────────────────────────────── */

import { Radar, Cloud, Bot, ShieldCheck, Cpu } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ProjectStep = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  icon: LucideIcon;
  status: "Active" | "Complete";
  headline: string;
  description: string;
  tech: string[];
  github?: string;
  paperLink?: string;
  featured?: boolean;
  metrics: { value: string; label: string }[];
  fullDescription: string;
  systemOverview: string;
  workflow: ProjectStep[];
  screenshots?: { src: string; caption: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "soc-detection-lab",
    title: "SOC Detection Engineering Lab",
    category: "DETECTION ENGINEERING",
    icon: Radar,
    status: "Complete",
    headline:
      "End-to-end SOC lab: 5 attack scenarios, 15+ detection signals, Wazuh + Splunk with automated IOC enrichment.",
    description:
      "Built a home SOC lab simulating 5 attack scenarios against Windows 11 + Wazuh SIEM. Developed 15+ high-fidelity detection signals mapped to 8 MITRE ATT&CK techniques and automated alert triage with VirusTotal enrichment.",
    tech: ["Wazuh", "Sysmon", "Splunk", "Python", "MITRE ATT&CK", "VirusTotal API"],
    github: "https://github.com/dhruvvv55/soc-home-lab",
    featured: true,
    metrics: [
      { value: "15+", label: "Detection signals" },
      { value: "8", label: "MITRE ATT&CK techniques" },
      { value: "500+", label: "Alerts forwarded to Splunk" },
    ],
    fullDescription:
      "A production-grade SOC home lab that simulates realistic attacker behavior against a Windows 11 endpoint monitored by Wazuh SIEM. Covers credential access, defense evasion, persistence, and execution across 8 MITRE ATT&CK techniques. Includes an automated triage pipeline that enriches alerts with VirusTotal IOC lookups and forwards them to Splunk via HTTP Event Collector for SPL-based hunting queries.",
    systemOverview:
      "Windows 11 endpoint with Sysmon → Wazuh agent → Wazuh manager (detection rules + SCA) → alert triage pipeline (Python + VirusTotal enrichment) → Splunk HEC → SPL detection queries for hunting and dashboarding.",
    workflow: [
      {
        title: "Lab build-out",
        body: "Provisioned isolated Windows 11 endpoint and Wazuh manager, deployed Sysmon with a custom config, and instrumented full endpoint telemetry.",
      },
      {
        title: "Attack simulation",
        body: "Simulated 5 realistic attack scenarios covering credential dumping, defense evasion, persistence mechanisms, and living-off-the-land execution.",
      },
      {
        title: "Detection engineering",
        body: "Authored 15+ high-fidelity Wazuh detection rules and mapped each to specific MITRE ATT&CK techniques (T1003, T1055, T1547, T1059 and more).",
      },
      {
        title: "Automated enrichment",
        body: "Built a Python pipeline that pulls alerts from Wazuh, queries VirusTotal for IOC context, and enriches events with reputation and category data.",
      },
      {
        title: "Splunk integration",
        body: "Forwarded 500+ enriched alerts to Splunk via HEC and wrote SPL detection queries + dashboards for threat hunting and metrics.",
      },
    ],
  },
  {
    slug: "cloud-threat-detection-lab",
    title: "Cloud Threat Detection Lab (GCP)",
    category: "CLOUD SECURITY",
    icon: Cloud,
    status: "Complete",
    headline:
      "Detected GCP IAM privilege escalation via Cloud Audit Logs, mapped to MITRE ATT&CK, with scheduled alerting.",
    description:
      "Simulated an IAM privilege escalation attack on GCP (roles/viewer → roles/owner via SetIamPolicy), then built a Python detection pipeline analyzing 32+ audit events and mapped the detections to MITRE ATT&CK T1078.004.",
    tech: ["GCP Cloud Audit Logs", "GCP IAM", "Splunk", "Python", "MITRE ATT&CK"],
    github: "https://github.com/dhruvvv55/cloud-threat-detection-lab",
    featured: true,
    metrics: [
      { value: "32+", label: "Audit events analyzed" },
      { value: "T1078.004", label: "MITRE ATT&CK mapping" },
      { value: "Auto", label: "Scheduled alerting" },
    ],
    fullDescription:
      "A cloud-native threat detection project that simulates one of the most damaging attack patterns in cloud environments: IAM privilege escalation. The lab escalates a service account from roles/viewer to roles/owner using SetIamPolicy, then detects the escalation from Cloud Audit Logs. Every detection is mapped to MITRE ATT&CK T1078.004 (Valid Accounts: Cloud Accounts) and shipped through a scheduled alerting pipeline.",
    systemOverview:
      "GCP project with test IAM roles → controlled SetIamPolicy escalation from roles/viewer to roles/owner → Cloud Audit Logs (Admin Activity) → Python detection pipeline (parses 32+ event types, matches escalation patterns) → scheduled alerts + Splunk sink for retention and hunting.",
    workflow: [
      {
        title: "Attack simulation",
        body: "Provisioned a controlled GCP project and executed a realistic IAM privilege escalation: roles/viewer service account elevated to roles/owner via SetIamPolicy.",
      },
      {
        title: "Log collection",
        body: "Enabled Cloud Audit Logs (Admin Activity + Data Access) and streamed events to a central sink for parsing.",
      },
      {
        title: "Detection pipeline",
        body: "Built a Python pipeline that parses 32+ audit event types, identifies escalation patterns, and emits structured detections with full context.",
      },
      {
        title: "ATT&CK mapping",
        body: "Mapped every detection to MITRE ATT&CK T1078.004 (Valid Accounts: Cloud Accounts) for cross-tool correlation.",
      },
      {
        title: "Scheduled alerting",
        body: "Configured recurring detection runs and automated alerting to reduce manual triage toil and give the SOC a real-time signal on IAM abuse.",
      },
    ],
  },
  {
    slug: "agent-injection-lab",
    title: "LLM Agent Security: Indirect Prompt Injection Lab",
    category: "AI / LLM SECURITY",
    icon: Bot,
    status: "Active",
    headline:
      "5 indirect prompt injection attacks × 5 defensive mitigations against a tool-using LLM agent, with an eval harness and live UI.",
    description:
      "Built a red-team + defense lab targeting Anthropic's tool-use loop. Implemented 5 indirect prompt injection attack classes, developed 5 defensive mitigations, and shipped an eval harness that benchmarks every attack × defense combination.",
    tech: ["Python", "Anthropic API", "React", "SSE Streaming", "OWASP LLM Top 10"],
    github: "https://github.com/dhruvvv55/agent-injection-lab",
    featured: true,
    metrics: [
      { value: "5×5", label: "Attack × defense matrix" },
      { value: "Live", label: "Real-time SSE UI" },
      { value: "Eval", label: "Automated harness" },
    ],
    fullDescription:
      "A hands-on security lab focused on the newest attack surface in AI systems: indirect prompt injection against LLM agents that use tools. The lab implements 5 attack classes (data exfiltration, tool-call hijacking, memory poisoning, output steering, and instruction override) against Anthropic's tool-use loop, then evaluates 5 defensive mitigations (input filtering, output validation, tool-call constraints, execution sandboxing, and rewrite-guard) across every combination. The frontend streams live detection signals via SSE so you can watch attacks succeed or get blocked in real time — the same pattern used in agentic detection engineering workflows.",
    systemOverview:
      "React frontend with real-time SSE streaming → Anthropic API tool-use loop under test → attack injection harness (5 classes) → defense middleware layer (5 mitigations) → eval harness scoring every attack × defense pair → live UI showing which attacks succeed, which get caught, and why.",
    workflow: [
      {
        title: "Threat modeling",
        body: "Mapped the attack surface of LLM agents using tools, drawing from OWASP LLM Top 10 (LLM01, LLM06) and MITRE ATLAS to identify indirect injection vectors.",
      },
      {
        title: "Attack implementation",
        body: "Built 5 concrete attack classes: data exfiltration via tool output, tool-call hijacking through hidden instructions, memory poisoning across turns, output steering, and instruction override.",
      },
      {
        title: "Defensive mitigations",
        body: "Implemented 5 layered defenses: input filtering, output validation, tool-call constraints, execution sandboxing, and a rewrite-guard that neutralizes suspicious content before it reaches the agent.",
      },
      {
        title: "Eval harness",
        body: "Benchmarked every attack × defense combination (25 pairs) with automated scoring for success rate, false positives, and detection latency.",
      },
      {
        title: "Live UI",
        body: "Built a React frontend that streams the agent's reasoning and defense triggers via SSE, giving a real-time view directly applicable to agentic detection engineering.",
      },
    ],
  },
  {
    slug: "quantumshop",
    title: "Quantum-Secured Payment System",
    category: "CRYPTOGRAPHY / FINTECH",
    icon: ShieldCheck,
    status: "Complete",
    headline:
      "Full-stack payment platform with BB84 quantum key distribution, AES-256-GCM encryption, and OTP-verified checkout.",
    description:
      "Built a full-stack payment platform implementing BB84 quantum key distribution with eavesdropper detection, AES-256-GCM transaction encryption, card tokenization, and OTP-verified checkout across card, UPI, and net banking flows.",
    tech: ["Python", "FastAPI", "React", "MongoDB", "Docker", "Qiskit"],
    github:
      "https://github.com/dhruvvv55/Advancing-Security-in-Digital-Transactions-Using-Quantum-Cryptography",
    paperLink: "https://jisem-journal.com/index.php/journal/article/view/9214/4252",
    metrics: [
      { value: "BB84", label: "Quantum key distribution" },
      { value: "AES-256-GCM", label: "Transaction encryption" },
      { value: "3", label: "Payment flows (Card/UPI/NetBanking)" },
    ],
    fullDescription:
      "A production-shaped fintech platform that puts quantum-safe cryptography into a real checkout flow. Implements the BB84 QKD protocol (with eavesdropper detection through basis reconciliation and error rate estimation), uses the generated key for AES-256-GCM transaction encryption, tokenizes card data, and enforces OTP-verified checkout across three payment flows. Published as peer-reviewed research in JISEM.",
    systemOverview:
      "React frontend (card/UPI/net-banking checkout with OTP) → FastAPI backend → BB84 QKD engine (Qiskit-based key exchange with eavesdropper detection) → AES-256-GCM transaction encryption using the quantum-derived key → card tokenization service → MongoDB for encrypted transaction storage → Docker-orchestrated deployment.",
    workflow: [
      {
        title: "Checkout & OTP flow",
        body: "React frontend handles card, UPI, and net banking selection with OTP verification before any encryption or transaction touches the wire.",
      },
      {
        title: "BB84 key distribution",
        body: "FastAPI backend runs the BB84 protocol: photon polarization encoding, basis reconciliation, error rate estimation, and eavesdropper detection.",
      },
      {
        title: "AES-256-GCM encryption",
        body: "The quantum-derived key is used to encrypt the full transaction payload with AES-256-GCM, providing authenticated encryption over the wire.",
      },
      {
        title: "Card tokenization",
        body: "Sensitive card data is never stored raw — replaced with tokens issued by the tokenization service and mapped to the encrypted MongoDB record.",
      },
      {
        title: "Publication",
        body: "Full protocol design and results published in JISEM (Apr 2025), including QBER measurements and eavesdropper-detection accuracy.",
      },
    ],
  },
  {
    slug: "malware-detection",
    title: "Malware Detection Using CNN-LSTM",
    category: "APPLIED ML / SECURITY",
    icon: Cpu,
    status: "Complete",
    headline:
      "94.06% accuracy on imbalanced Windows PE dataset with hybrid CNN-LSTM, SMOTE, and explainability via saliency maps.",
    description:
      "Achieved 94.06% accuracy on an imbalanced Windows PE dataset using a hybrid CNN-LSTM model with SMOTE class balancing and Keras Tuner hyperparameter search. Deployed as a Flask app with a confidence threshold slider and saliency map explainability.",
    tech: ["Python", "TensorFlow", "Keras", "Flask", "SMOTE", "Keras Tuner"],
    github: "https://github.com/dhruvvv55/Malware-Detection-using-CNN-LSTM",
    paperLink: "https://irjet.net/archives/V11/i11/IRJET-V11I1103.pdf",
    metrics: [
      { value: "94.06%", label: "Accuracy on imbalanced PE dataset" },
      { value: "CNN-LSTM", label: "Hybrid architecture" },
      { value: "Flask", label: "Deployed app + saliency maps" },
    ],
    fullDescription:
      "A hybrid deep learning model that converts Windows PE files into 32×32 grayscale images and classifies them as malware or benign. Uses CNN layers for spatial feature extraction, LSTM layers for sequential patterns, SMOTE for class balancing on the heavily imbalanced dataset, and Keras Tuner for hyperparameter search. Ships as a Flask web app with a live confidence-threshold slider and saliency map overlays so the model's decisions are explainable, not black-box. Published in IRJET, Oct 2024.",
    systemOverview:
      "PE file → 32×32 grayscale image → MinMax normalization → SMOTE class balancing → CNN feature extraction (Conv2D + MaxPooling × 3) → reshape → LSTM(128) → Dense + Dropout → sigmoid classifier. Keras Tuner RandomSearch for hyperparameter selection. Deployed as Flask app with interactive threshold and saliency maps.",
    workflow: [
      {
        title: "Dataset & preprocessing",
        body: "Windows PE files converted to 32×32 grayscale images, pixel values MinMax-normalized. Heavy class imbalance addressed with SMOTE synthetic oversampling.",
      },
      {
        title: "Hybrid CNN-LSTM model",
        body: "Sequential architecture: Conv2D + MaxPooling × 3 for spatial features, reshape, LSTM(128, tanh) for sequential patterns, Dense(128) + Dropout(0.5), sigmoid output.",
      },
      {
        title: "Hyperparameter search",
        body: "Keras Tuner RandomSearch across filter counts, LSTM units, dropout, and learning rate to find the best-performing configuration.",
      },
      {
        title: "Training & evaluation",
        body: "Trained with Adam optimizer, binary cross-entropy loss, and data augmentation. Achieved 94.06% accuracy on the held-out imbalanced test set.",
      },
      {
        title: "Explainable Flask app",
        body: "Deployed as a Flask web app with a confidence-threshold slider and saliency map overlays so users can see which regions of the PE image drove each classification.",
      },
      {
        title: "Publication",
        body: "Full architecture comparison and results published in IRJET (Oct 2024).",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
