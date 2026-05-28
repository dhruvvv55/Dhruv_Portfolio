/* ─────────────────────────────────────────────────────────────
   Central project data.
   Resume claims preserved verbatim. Workflows, system overviews,
   and screenshots sourced from the three uploaded capstone
   reports (MLCS, DLCS, QuantumShop BE Final).
   ───────────────────────────────────────────────────────────── */

import { ShieldCheck, Cpu, Activity, Brain, Flag } from "lucide-react";
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
    slug: "llm-agent-security",
    title: "Security of LLM-Powered AI Agents",
    category: "AI / SECURITY RESEARCH",
    icon: Brain,
    status: "Active",
    headline: "Independent research into prompt injection and data exfiltration risks in LLM agents.",
    description:
      "Currently conducting independent security research on vulnerabilities in LLM-powered AI agents, focusing on prompt injection, multi-turn manipulation, and data exfiltration risks, with the goal of contributing toward a publication.",
    tech: ["Python", "LLMs", "Threat Modeling", "OWASP LLM Top 10"],
    featured: true,
    metrics: [
      { value: "2025", label: "Ongoing" },
      { value: "Publication", label: "Goal" },
      { value: "3", label: "Attack vectors studied" },
    ],
    fullDescription:
      "Independent security research investigating how LLM-powered AI agents can be compromised. The work focuses on three vectors: direct prompt injection, multi-turn manipulation that bypasses single-turn safety filters, and indirect data exfiltration through tool use and external content.",
    systemOverview:
      "Research framework that taxonomizes attack vectors, reproduces published exploits in controlled environments, and evaluates mitigations against standard agent architectures.",
    workflow: [
      {
        title: "Literature review",
        body: "Synthesized current threat landscape across NIST AI RMF, OWASP LLM Top 10, and recent academic literature on adversarial inputs to LLMs.",
      },
      {
        title: "Attack reproduction",
        body: "Reproduced prompt injection, multi-turn manipulation, and data exfiltration scenarios against agent architectures in a sandboxed environment.",
      },
      {
        title: "Mitigation analysis",
        body: "Evaluated effectiveness of input filtering, output validation, and tool-use constraints against each attack class.",
      },
      {
        title: "Publication draft",
        body: "Writing up findings with the goal of contributing toward a peer-reviewed publication.",
      },
    ],
  },
  {
    slug: "quantumshop",
    title: "Quantum-Secured Online Payment System",
    category: "CRYPTOGRAPHY / FINTECH",
    icon: ShieldCheck,
    status: "Complete",
    headline: "Full-stack payments app combining BB84 quantum keys, ML fraud detection, and blockchain logging.",
    description:
      "Achieved 90%+ simulated reduction in key-interception risk by designing a QKD-inspired encrypted payment API, demonstrating expertise in data protection and secure application architecture.",
    tech: ["React.js", "FastAPI", "Python", "Qiskit (BB84)", "Solidity", "MongoDB", "XGBoost"],
    github:
      "https://github.com/dhruvvv55/Advancing-Security-in-Digital-Transactions-Using-Quantum-Cryptography",
    paperLink: "https://jisem-journal.com/index.php/journal/article/view/9214/4252",
    featured: true,
    metrics: [
      { value: "90%+", label: "Key-interception risk reduction" },
      { value: "<3%", label: "QBER on BB84 simulation" },
      { value: "~92%", label: "Fraud detection accuracy" },
    ],
    fullDescription:
      "Full-stack payment system that integrates three security layers: a BB84 quantum key distribution simulator built with Qiskit, an AI-based fraud detection engine using XGBoost, and a Solidity smart contract on a private Ethereum chain for immutable transaction logging. The React frontend supports Card, UPI, Net Banking, and Wallet flows with OTP verification, while a FastAPI backend orchestrates encryption, fraud scoring, and blockchain writes.",
    systemOverview:
      "Layered architecture: React UI → FastAPI orchestrator → three parallel security services (Qiskit-based BB84 quantum key generator, XGBoost fraud scorer, Solidity smart contract on Ganache). Transactions move through encryption → fraud check → blockchain logging → confirmation, with MongoDB persisting transaction metadata and keys.",
    workflow: [
      {
        title: "User interface (React.js)",
        body: "Built a payments frontend supporting Card, UPI, Net Banking, and Wallet flows with OTP entry, MetaMask integration, and real-time transaction feedback.",
      },
      {
        title: "FastAPI backend orchestration",
        body: "Backend coordinates all three security services, handles SSL-encrypted requests, performs AES-GCM encryption using quantum-generated keys, and returns success/failure responses. Average response time under 0.8 seconds.",
      },
      {
        title: "Quantum key distribution (BB84)",
        body: "Implemented the BB84 protocol simulation in Qiskit — photon polarization, random basis selection, key sifting, and error estimation. Average QBER under 3%, well within the threshold for secure communication.",
      },
      {
        title: "AI fraud detection (XGBoost)",
        body: "Trained ML classifiers (Logistic Regression, Random Forest, XGBoost) on synthetic transaction data using features like amount, location, device info, and frequency. XGBoost reached ~92% accuracy with 94% precision and 89% recall.",
      },
      {
        title: "Blockchain logging (Solidity + Ganache)",
        body: "Smart contracts written in Solidity, compiled with Hardhat, deployed locally on Ganache. Each verified transaction logs amount, fraud score, and timestamp immutably. MetaMask used for signing and approval.",
      },
      {
        title: "Publication",
        body: "Published findings in the Journal of Information Systems Engineering and Management (JISEM), April 2025.",
      },
    ],
    screenshots: [],
  },
  {
    slug: "malware-detection",
    title: "Malware Detection Using Deep Learning",
    category: "ML / SECURITY",
    icon: Cpu,
    status: "Complete",
    headline: "Hybrid CNN-LSTM model classifying PE-file malware across 25 families.",
    description:
      "Achieved 98.74% malware detection accuracy by engineering a hybrid CNN-LSTM model, applying adversarial ML techniques to identify threats that evade traditional signature-based detection.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "LSTM", "MobileNet", "SMOTE"],
    github: "https://github.com/dhruvvv55/Malware-Detection-using-CNN-LSTM",
    paperLink: "https://irjet.net/archives/V11/i11/IRJET-V11I1103.pdf",
    featured: true,
    metrics: [
      { value: "98.74%", label: "MobileNet accuracy" },
      { value: "25", label: "Malware families" },
      { value: "51,959", label: "PE samples processed" },
    ],
    fullDescription:
      "Hybrid CNN-LSTM malware detection system that converts Portable Executable (PE) files into 32×32 grayscale images, applies CNN layers for spatial feature extraction, then feeds them through LSTM layers to capture sequential patterns. SMOTE applied to handle class imbalance (2,583 benign vs 49,376 malware). Six architectures benchmarked (CNN, VGG16, VGG19, ResNet50, Xception, MobileNet); MobileNet achieved the highest accuracy at 98.74% with loss 0.0386. The published IRJET paper covers the full architecture comparison; the capstone implementation extended the work with a hybrid CNN-LSTM model and a web app for binary classification.",
    systemOverview:
      "PE file → grayscale image (32×32) → MinMax normalization → SMOTE for class balance → CNN feature extraction (Conv2D + MaxPooling × 3) → reshape → LSTM(128) → Dense(128) → Dropout(0.5) → sigmoid classifier. Adam optimizer, binary cross-entropy loss, hyperparameter search via Keras Tuner RandomSearch.",
    workflow: [
      {
        title: "Dataset preparation",
        body: "Used the Raw PE as Image dataset (51,959 samples — 49,376 malware, 2,583 benign) where each PE file is flattened into a 32×32 grayscale image. Benchmarked against the Malimg dataset (9,339 images across 25 malware families).",
      },
      {
        title: "Preprocessing & class balancing",
        body: "Normalized pixel values with MinMaxScaler and applied SMOTE (synthetic minority over-sampling) to balance the heavily skewed class distribution. Final balanced set: 49,376 malware + 46,907 synthetic benign samples.",
      },
      {
        title: "Six-architecture benchmark",
        body: "Benchmarked CNN, VGG16, VGG19, ResNet50, Xception, and MobileNet on the Malimg dataset. MobileNet achieved the highest accuracy at 98.74% with the lowest loss (0.0386), outperforming all five other architectures.",
      },
      {
        title: "CNN-LSTM hybrid",
        body: "Built a Sequential model: Conv2D + MaxPooling × 3 for spatial features, Reshape, LSTM(128, tanh) for sequential patterns, Dense(128) + Dropout(0.5), sigmoid output. Hyperparameters tuned via Keras Tuner RandomSearch.",
      },
      {
        title: "Training & evaluation",
        body: "Trained with Adam optimizer, binary cross-entropy loss, data augmentation (rotation, zoom, horizontal flip), and class weights. Used ModelCheckpoint to save the best validation accuracy model.",
      },
      {
        title: "Web app deployment",
        body: "Built a binary classification web app — user uploads a PE image, model returns Prediction: Malware or Benign with confidence probability.",
      },
      {
        title: "Publication",
        body: "Published in the International Research Journal of Engineering and Technology (IRJET), October 2024.",
      },
    ],
    screenshots: [
      { src: "/projects/malware-workflow.png", caption: "CNN-LSTM hybrid model architecture flowchart" },
      { src: "/projects/malware-curves.png", caption: "Training accuracy and loss curves across 10 epochs" },
      { src: "/projects/malware-confusion.png", caption: "Confusion matrix and classification report on the test set" },
      { src: "/projects/malware-app.png", caption: "Web app: binary classification with prediction probability" },
    ],
  },
  {
    slug: "predictive-maintenance",
    title: "Predictive Maintenance Using Machine Learning",
    category: "ML / RELIABILITY",
    icon: Activity,
    status: "Complete",
    headline: "Streamlit app predicting industrial equipment failures from sensor inputs.",
    description:
      "Achieved 98.5% accurate failure prediction by training supervised ML models on sensor data, demonstrating strong CS fundamentals and applied problem-solving skills.",
    tech: ["Python", "Scikit-learn", "Pandas", "Streamlit", "Random Forest", "Decision Tree"],
    github:
      "https://github.com/dhruvvv55/Predictive-Maintenance-of-Industrial-Equipment-using-ML-",
    paperLink: "https://ijarsct.co.in/Paper19379.pdf",
    metrics: [
      { value: "98.52%", label: "Random Forest accuracy" },
      { value: "6", label: "Sensor input features" },
      { value: "IJARSCT", label: "Published Aug 2024" },
    ],
    fullDescription:
      "Streamlit web app that predicts industrial machine failures from six real-time sensor inputs: machine type (Low/Medium/High), air temperature [K], process temperature [K], rotational speed [rpm], torque [Nm], and tool wear [min]. The trained Random Forest classifier reaches 98.52% accuracy on the test set, with Decision Tree achieving 97.52% as the baseline.",
    systemOverview:
      "Streamlit frontend collects six sensor readings → joblib-loaded Random Forest model → binary failure prediction with confidence. Backend pipeline: pandas dataframe → statistical analysis → preprocessing → model training (Decision Tree, Random Forest, SVM, Logistic Regression benchmarked) → joblib serialization → app.py deployment.",
    workflow: [
      {
        title: "Data ingestion",
        body: "Loaded predictive_maintenance.csv into a Pandas DataFrame with proper exception handling. Source dataset contains industrial sensor readings labeled with failure outcomes.",
      },
      {
        title: "Statistical analysis & preprocessing",
        body: "Performed exploratory analysis (histograms, box plots, scatter plot matrix) to understand feature distributions, then handled missing values, outliers, and feature scaling.",
      },
      {
        title: "Model benchmarking",
        body: "Trained and compared four ML algorithms: Decision Tree (97.52% accuracy), Random Forest (98.52% accuracy), Support Vector Machine, and Logistic Regression. Random Forest selected as best performer.",
      },
      {
        title: "Streamlit app deployment",
        body: "Built a Streamlit interface (app.py) with six input fields — machine type, air/process temperature, rotational speed, torque, tool wear — and a 'Predict Failure' button. Loads the serialized Random Forest model via joblib for real-time predictions.",
      },
      {
        title: "Publication",
        body: "Published in the International Journal of Advanced Research in Science, Communication and Technology (IJARSCT), August 2024.",
      },
    ],
    screenshots: [
      { src: "/projects/predictive-workflow.png", caption: "End-to-end project workflow: data ingestion through deployment" },
      { src: "/projects/predictive-app.png", caption: "Streamlit web app: sensor inputs and failure prediction output" },
    ],
  },
  {
    slug: "tryhackme-labs",
    title: "TryHackMe Capture the Flag Challenges",
    category: "OFFENSIVE SECURITY",
    icon: Flag,
    status: "Active",
    headline: "50+ hands-on security labs across the full attack surface.",
    description:
      "Completed 50+ labs covering vulnerability assessment, intrusion detection, digital forensics, mobile security, and exploit fundamentals, reinforcing practical security engineering skills.",
    tech: ["Hands-on Security Labs", "CTF"],
    metrics: [
      { value: "50+", label: "Labs completed" },
      { value: "5", label: "Domains covered" },
    ],
    fullDescription:
      "Completed 50+ labs covering vulnerability assessment, intrusion detection, digital forensics, mobile security, and exploit fundamentals, reinforcing practical security engineering skills.",
    systemOverview:
      "Ongoing hands-on practice across TryHackMe rooms spanning five major domains of practical security work.",
    workflow: [
      {
        title: "Vulnerability assessment",
        body: "Labs focused on identifying, scanning, and prioritizing vulnerabilities across realistic infrastructure.",
      },
      {
        title: "Intrusion detection",
        body: "Hands-on work with detection signatures, log analysis, and identifying compromise indicators.",
      },
      {
        title: "Digital forensics",
        body: "Recovered artifacts, analyzed disk and memory images, and reconstructed incident timelines.",
      },
      {
        title: "Mobile & exploit fundamentals",
        body: "Practical work on mobile attack surfaces and core exploitation techniques.",
      },
    ],
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  PROJECTS.find((p) => p.slug === slug);
