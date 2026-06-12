import React, { useState, useEffect } from "react";
import {
  Bot,
  Brain,
  Code,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Heart,
  Layers,
  Lightbulb,
  MessageSquare,
  Server,
  ShieldCheck,
  Users,
  Workflow,
  Activity,
  Eye,
  Lock,
  Zap,
  CheckCircle2,
} from "lucide-react";

/* ── Data ────────────────────────────────────────────── */
const TOOLS = [
  {
    icon: Workflow,
    name: "Playwright E2E",
    desc: "Cross-browser automation, traces, screenshots & parallel runs.",
    color: "#22c55e",
    category: "framework",
    level: 4,
  },
  {
    icon: Code,
    name: "Selenium WebDriver",
    desc: "Robust UI automation with Page Object Model and reusable utilities.",
    color: "#43b02a",
    category: "framework",
    level: 4,
  },
  {
    icon: Layers,
    name: "Cypress Automation",
    desc: "Fast component and E2E coverage for modern frontend workflows.",
    color: "#14b8a6",
    category: "framework",
    level: 3,
  },
  {
    icon: Database,
    name: "API Automation",
    desc: "Postman · Newman · REST Assured — contract checks & payload validation.",
    color: "#fb7185",
    category: "framework",
    level: 4,
  },
  {
    icon: Brain,
    name: "AI Test Case Design",
    desc: "Generate edge cases, negative flows, and risk-based scenarios.",
    color: "#67e8f9",
    category: "ai",
    level: 5,
  },
  {
    icon: Bot,
    name: "Self-Healing Scripts",
    desc: "Recover unstable selectors and eliminate flaky test failures.",
    color: "#c084fc",
    category: "ai",
    level: 4,
  },
  {
    icon: Eye,
    name: "Visual AI Testing",
    desc: "Screenshot diff, layout drift detection, and UI anomaly checks.",
    color: "#38bdf8",
    category: "ai",
    level: 4,
  },
  {
    icon: FileCode,
    name: "Prompt-Based QA",
    desc: "Structured prompts for reviewing flows, criteria, and bug analysis.",
    color: "#a78bfa",
    category: "ai",
    level: 5,
  },
  {
    icon: ShieldCheck,
    name: "AI Quality Gates",
    desc: "Block risky releases using test health, coverage & defect signals.",
    color: "#fbbf24",
    category: "ai",
    level: 4,
  },
  {
    icon: Database,
    name: "Test Data AI",
    desc: "Synthetic data, boundary values, masking & smart data coverage.",
    color: "#34d399",
    category: "ai",
    level: 3,
  },
  {
    icon: GitBranch,
    name: "GitHub Actions",
    desc: "Automated test suites on pull requests, merges & release branches.",
    color: "#f97316",
    category: "cicd",
    level: 4,
  },
  {
    icon: Server,
    name: "Jenkins Pipelines",
    desc: "Scheduled regression, smoke checks, reports & notifications.",
    color: "#60a5fa",
    category: "cicd",
    level: 3,
  },
  {
    icon: Code,
    name: "Java · Python · JS",
    desc: "Automation logic, helpers, assertions & framework scripting.",
    color: "#facc15",
    category: "language",
    level: 3,
  },
  {
    icon: Layers,
    name: "TestNG · JUnit",
    desc: "Assertions, grouping, parallel execution & structured reporting.",
    color: "#ef4444",
    category: "framework",
    level: 4,
  },
  {
    icon: Lock,
    name: "Security QA Signals",
    desc: "Auth checks, role validation, API misuse & risk spotting.",
    color: "#818cf8",
    category: "methods",
    level: 3,
  },
  {
    icon: Activity,
    name: "Release Observability",
    desc: "Turn failures, logs, traces & bug patterns into action signals.",
    color: "#06b6d4",
    category: "methods",
    level: 4,
  },
];

const MINDSET = [
  {
    icon: MessageSquare,
    name: "QA Communication",
    desc: "Clear bug reports, reproduction steps, and developer handoff.",
    color: "#60a5fa",
    category: "collab",
    level: 5,
  },
  {
    icon: Lightbulb,
    name: "AI Prompt Thinking",
    desc: "Break requirements into precise prompts, checks & validation rules.",
    color: "#fbbf24",
    category: "collab",
    level: 5,
  },
  {
    icon: Users,
    name: "Agile Collaboration",
    desc: "Work with developers, product owners & release teams seamlessly.",
    color: "#34d399",
    category: "collab",
    level: 5,
  },
  {
    icon: Brain,
    name: "Risk Analysis",
    desc: "Prioritize flows based on impact, user paths & defect history.",
    color: "#a78bfa",
    category: "collab",
    level: 4,
  },
  {
    icon: Heart,
    name: "Quality Mindset",
    desc: "Think like a user, test like an engineer, improve every cycle.",
    color: "#fb7185",
    category: "collab",
    level: 5,
  },
  {
    icon: Bot,
    name: "Automation Ownership",
    desc: "Maintain frameworks, reduce flakiness & keep suites trustworthy.",
    color: "#67e8f9",
    category: "collab",
    level: 4,
  },
];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI Tools", color: "#67e8f9" },
  { id: "framework", label: "Frameworks", color: "#22c55e" },
  { id: "cicd", label: "CI / CD", color: "#f97316" },
  { id: "language", label: "Languages", color: "#facc15" },
  { id: "methods", label: "Methods", color: "#818cf8" },
];

const CAT_META = {
  framework: { label: "FRAMEWORK", color: "#22c55e" },
  ai: { label: "AI TOOL", color: "#67e8f9" },
  cicd: { label: "CI/CD", color: "#f97316" },
  language: { label: "LANGUAGE", color: "#facc15" },
  methods: { label: "METHOD", color: "#818cf8" },
  collab: { label: "QA SKILL", color: "#60a5fa" },
};

const FRAMEWORKS = ["Selenium", "Playwright", "Cypress", "Postman", "Newman", "REST Assured", "Jenkins", "GitHub Actions"];

/* ── Sub-components ──────────────────────────────────── */

function CircuitBg() {
  return (
    <svg
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.09,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="asCircuit" width="80" height="80" patternUnits="userSpaceOnUse">
          <path
            d="M40 0 L40 28 L68 28 M0 40 L28 40 L28 68 M28 40 L40 28"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="0.7"
          />
          <circle cx="40" cy="28" r="2.2" fill="#06b6d4" />
          <circle cx="28" cy="40" r="2.2" fill="#06b6d4" />
          <circle cx="68" cy="28" r="1.4" fill="#a78bfa" />
          <circle cx="28" cy="68" r="1.4" fill="#a78bfa" />
        </pattern>
        <radialGradient id="asCircuitFade" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="asCircuitMask">
          <rect width="100%" height="100%" fill="url(#asCircuitFade)" />
        </mask>
      </defs>
      <rect width="100%" height="100%" fill="url(#asCircuit)" mask="url(#asCircuitMask)" />
    </svg>
  );
}

function LevelDots({ level, color }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={i}
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: i < level ? color : "rgba(255,255,255,0.08)",
            boxShadow: i < level ? `0 0 6px ${color}99` : "none",
            transition: "all 0.3s",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

function SkillModule({ skill, index }) {
  const [hov, setHov] = useState(false);
  const Icon = skill.icon;
  const cat = CAT_META[skill.category];

  return (
    <div
      className="as-module"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ "--mc": skill.color, animationDelay: `${index * 0.045}s` }}
    >
      {/* left accent */}
      <div className="as-module-bar" />

      {/* top row */}
      <div className="as-module-top">
        <div className="as-status-dot" />
        <span
          className="as-cat-badge"
          style={{
            color: cat.color,
            borderColor: `${cat.color}30`,
            background: `${cat.color}12`,
          }}
        >
          {cat.label}
        </span>
      </div>

      {/* icon */}
      <div className="as-icon-box">
        <Icon size={19} />
      </div>

      {/* name */}
      <h3 className="as-skill-name">{skill.name}</h3>

      {/* desc */}
      <p className="as-skill-desc">{skill.desc}</p>

      {/* bottom */}
      <div className="as-module-foot">
        <span className="as-prof-label">PROFICIENCY</span>
        <LevelDots level={skill.level} color={skill.color} />
      </div>

      {/* hover scan line */}
      <div className={`as-scan-line${hov ? " scanning" : ""}`} />
    </div>
  );
}

function MindsetCard({ skill, index }) {
  const Icon = skill.icon;
  return (
    <div
      className="as-mindset-card"
      style={{ "--mc": skill.color, animationDelay: `${index * 0.07}s` }}
    >
      <div className="as-mindset-icon">
        <Icon size={22} />
      </div>
      <div className="as-mindset-body">
        <h3 className="as-mindset-name">{skill.name}</h3>
        <p className="as-mindset-desc">{skill.desc}</p>
        <LevelDots level={skill.level} color={skill.color} />
      </div>
      <CheckCircle2 size={16} className="as-mindset-check" />
    </div>
  );
}

/* ── Terminal header counter ─────────────────────────── */
function useCountUp(target, duration = 900) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 50));
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setVal(start);
      if (start >= target) clearInterval(id);
    }, 50);
    return () => clearInterval(id);
  }, [target, duration]);
  return val;
}

/* ── Main component ──────────────────────────────────── */
export default function AutomationSkills() {
  const [view, setView] = useState("tools");
  const [cat, setCat] = useState("all");
  const [catChanging, setCatChanging] = useState(false);
  const moduleCount = useCountUp(TOOLS.length, 900);

  const filtered =
    view === "tools"
      ? cat === "all"
        ? TOOLS
        : TOOLS.filter((s) => s.category === cat)
      : MINDSET;

  const switchCat = (id) => {
    if (id === cat) return;
    setCatChanging(true);
    setTimeout(() => {
      setCat(id);
      setCatChanging(false);
    }, 180);
  };

  const switchView = (v) => {
    if (v === view) return;
    setCatChanging(true);
    setTimeout(() => {
      setView(v);
      setCat("all");
      setCatChanging(false);
    }, 180);
  };

  return (
    <section className="as-section" id="automation-skills">
      {/* ── Global CSS ────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* ── section wrapper ── */
        .as-section {
          position: relative;
          overflow: hidden;
          padding: 72px 20px 80px;
          background:
            radial-gradient(ellipse 60% 40% at 8% 14%, rgba(6,182,212,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 50% 35% at 88% 82%, rgba(124,58,237,0.13) 0%, transparent 55%),
            radial-gradient(ellipse 40% 30% at 52% 50%, rgba(34,197,94,0.05) 0%, transparent 55%),
            linear-gradient(170deg, #020617 0%, #060d1f 50%, #020615 100%);
          color: #f8fafc;
          font-family: 'Inter', system-ui, sans-serif;
          scroll-margin-top: 74px;
        }

        /* ── ambient orbs ── */
        .as-section::before,
        .as-section::after {
          content: "";
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: asOrbFloat 10s ease-in-out infinite alternate;
        }
        .as-section::before {
          width: 420px; height: 420px;
          top: -120px; left: -100px;
          background: radial-gradient(circle, rgba(6,182,212,0.12), transparent 65%);
        }
        .as-section::after {
          width: 360px; height: 360px;
          bottom: -80px; right: -80px;
          background: radial-gradient(circle, rgba(124,58,237,0.12), transparent 65%);
          animation-duration: 13s;
          animation-direction: alternate-reverse;
        }

        @keyframes asOrbFloat {
          to { transform: translate(30px, 24px) scale(1.06); }
        }

        /* ── inner wrapper ── */
        .as-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── terminal header panel ── */
        .as-terminal-panel {
          border: 1px solid rgba(6,182,212,0.2);
          border-radius: 16px;
          background: rgba(6,182,212,0.04);
          backdrop-filter: blur(12px);
          padding: 24px 28px 22px;
          margin-bottom: 36px;
          position: relative;
          overflow: hidden;
        }
        .as-terminal-panel::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(6,182,212,0.6), transparent);
        }

        /* window dots */
        .as-win-dots {
          display: flex;
          gap: 6px;
          margin-bottom: 14px;
        }
        .as-win-dot {
          width: 10px; height: 10px;
          border-radius: 50%;
        }

        /* terminal text */
        .as-term-line {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.78rem;
          color: #475569;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .as-term-line .prompt  { color: #22c55e; }
        .as-term-line .cmd     { color: #67e8f9; }
        .as-term-line .ok      { color: #22c55e; }
        .as-term-line .cursor  {
          display: inline-block;
          width: 8px; height: 14px;
          background: #67e8f9;
          animation: asCursorBlink 1.1s steps(1) infinite;
          vertical-align: middle;
        }

        @keyframes asCursorBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }

        /* big heading */
        .as-heading {
          margin: 16px 0 0;
          font-size: clamp(1.8rem, 4.5vw, 2.6rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }
        .as-heading-grad {
          background: linear-gradient(135deg, #67e8f9 0%, #818cf8 50%, #f0abfc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* stat pills row */
        .as-stats-row {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }
        .as-stat-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 13px;
          border-radius: 999px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.73rem;
          font-weight: 700;
          border: 1px solid;
          white-space: nowrap;
        }
        .as-stat-pill-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          animation: asStatusPulse 1.8s ease-in-out infinite;
        }

        @keyframes asStatusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.5; transform: scale(0.75); }
        }

        /* ── view toggle ── */
        .as-view-toggle {
          display: flex;
          gap: 10px;
          justify-content: center;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .as-view-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: #94a3b8;
          font-weight: 700;
          font-size: 0.84rem;
          cursor: pointer;
          transition: all 0.28s cubic-bezier(0.34,1.56,0.64,1);
          position: relative;
          overflow: hidden;
          letter-spacing: 0.03em;
        }
        .as-view-btn:hover {
          color: #e2e8f0;
          border-color: rgba(6,182,212,0.35);
          transform: translateY(-2px);
        }
        .as-view-btn.active {
          background: linear-gradient(135deg, #0891b2, #7c3aed);
          border-color: transparent;
          color: #fff;
          box-shadow: 0 8px 28px rgba(6,182,212,0.3), 0 2px 8px rgba(124,58,237,0.2);
          transform: translateY(-2px);
        }

        /* ── category filter ── */
        .as-cat-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 28px;
        }
        .as-cat-btn {
          padding: 6px 16px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.09);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          font-size: 0.77rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.22s ease;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .as-cat-btn:hover {
          color: #cbd5e1;
          border-color: rgba(255,255,255,0.18);
        }
        .as-cat-btn.active {
          color: #fff;
          border-color: rgba(6,182,212,0.5);
          background: rgba(6,182,212,0.12);
          box-shadow: 0 0 12px rgba(6,182,212,0.15);
        }

        /* ── grid of modules ── */
        .as-module-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 14px;
        }

        /* ── skill module card ── */
        .as-module {
          position: relative;
          padding: 16px 16px 16px 20px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: linear-gradient(145deg, rgba(15,23,42,0.85), rgba(2,6,23,0.8));
          backdrop-filter: blur(10px);
          overflow: hidden;
          animation: asModuleIn 0.42s ease forwards;
          opacity: 0;
          transition: transform 0.26s ease, border-color 0.26s ease, box-shadow 0.26s ease;
          cursor: default;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .as-module::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: 14px;
          background: radial-gradient(circle at 20% 0%, var(--mc), transparent 38%);
          opacity: 0.1;
          pointer-events: none;
          transition: opacity 0.28s;
        }
        .as-module:hover {
          transform: translateY(-6px);
          border-color: color-mix(in srgb, var(--mc) 45%, transparent);
          box-shadow:
            0 18px 36px color-mix(in srgb, var(--mc) 14%, transparent),
            0 0 0 1px color-mix(in srgb, var(--mc) 20%, transparent);
        }
        .as-module:hover::before { opacity: 0.2; }

        /* left accent bar */
        .as-module-bar {
          position: absolute;
          left: 0; top: 14px; bottom: 14px;
          width: 3px;
          border-radius: 0 3px 3px 0;
          background: var(--mc);
          box-shadow: 0 0 10px var(--mc);
        }

        /* top row */
        .as-module-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        /* status dot */
        .as-status-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px #22c55e;
          animation: asStatusPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }

        /* category badge */
        .as-cat-badge {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.62rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 2px 8px;
          border-radius: 4px;
          border: 1px solid;
        }

        /* icon box */
        .as-icon-box {
          width: 40px; height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mc);
          background: color-mix(in srgb, var(--mc) 13%, transparent);
          border: 1px solid color-mix(in srgb, var(--mc) 22%, transparent);
          margin-bottom: 11px;
          position: relative;
          z-index: 1;
          flex-shrink: 0;
          transition: box-shadow 0.28s;
        }
        .as-module:hover .as-icon-box {
          box-shadow: 0 0 16px color-mix(in srgb, var(--mc) 40%, transparent);
        }

        /* name */
        .as-skill-name {
          margin: 0 0 7px;
          font-size: 0.92rem;
          font-weight: 800;
          color: #f1f5f9;
          line-height: 1.2;
          position: relative;
          z-index: 1;
          letter-spacing: -0.01em;
        }

        /* desc */
        .as-skill-desc {
          margin: 0 0 14px;
          font-size: 0.74rem;
          color: #64748b;
          line-height: 1.5;
          position: relative;
          z-index: 1;
          flex: 1;
        }
        .as-module:hover .as-skill-desc { color: #94a3b8; }

        /* bottom foot */
        .as-module-foot {
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
          z-index: 1;
          margin-top: auto;
        }
        .as-prof-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #334155;
          text-transform: uppercase;
        }

        /* scan line */
        .as-scan-line {
          position: absolute;
          left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--mc), transparent);
          top: -2px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s;
        }
        .as-scan-line.scanning {
          opacity: 0.7;
          animation: asScanMove 1.2s linear infinite;
        }
        @keyframes asScanMove {
          from { top: 0; }
          to   { top: 100%; }
        }

        @keyframes asModuleIn {
          from { opacity: 0; transform: translateY(18px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }

        /* ── mindset cards ── */
        .as-mindset-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 14px;
        }
        .as-mindset-card {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 18px;
          border-radius: 14px;
          border: 1px solid rgba(255,255,255,0.07);
          background: linear-gradient(135deg, rgba(15,23,42,0.85), rgba(2,6,23,0.8));
          backdrop-filter: blur(8px);
          animation: asModuleIn 0.42s ease forwards;
          opacity: 0;
          transition: all 0.26s ease;
          position: relative;
          overflow: hidden;
        }
        .as-mindset-card::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--mc), transparent);
          opacity: 0.4;
        }
        .as-mindset-card:hover {
          transform: translateY(-4px);
          border-color: color-mix(in srgb, var(--mc) 35%, transparent);
          box-shadow: 0 12px 28px color-mix(in srgb, var(--mc) 12%, transparent);
        }
        .as-mindset-icon {
          width: 46px; height: 46px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--mc);
          background: color-mix(in srgb, var(--mc) 13%, transparent);
          border: 1px solid color-mix(in srgb, var(--mc) 22%, transparent);
          flex-shrink: 0;
        }
        .as-mindset-body { flex: 1; min-width: 0; }
        .as-mindset-name {
          margin: 0 0 5px;
          font-size: 0.95rem;
          font-weight: 800;
          color: #f1f5f9;
          line-height: 1.2;
        }
        .as-mindset-desc {
          margin: 0 0 10px;
          font-size: 0.77rem;
          color: #64748b;
          line-height: 1.5;
        }
        .as-mindset-check {
          color: #22c55e;
          flex-shrink: 0;
          margin-top: 2px;
          opacity: 0.7;
        }

        /* ── framework rail ── */
        .as-fw-rail {
          margin-top: 32px;
          padding: 16px 20px;
          border-radius: 14px;
          border: 1px solid rgba(6,182,212,0.15);
          background: rgba(6,182,212,0.04);
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          overflow: hidden;
          position: relative;
        }
        .as-fw-rail::before {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(6,182,212,0.5), transparent);
        }
        .as-fw-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          color: #06b6d4;
          text-transform: uppercase;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .as-fw-divider {
          width: 1px;
          height: 18px;
          background: rgba(6,182,212,0.25);
          flex-shrink: 0;
        }
        .as-fw-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          flex: 1;
        }
        .as-fw-pill {
          padding: 5px 13px;
          border-radius: 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.74rem;
          font-weight: 700;
          color: #cbd5e1;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          transition: all 0.22s ease;
          white-space: nowrap;
        }
        .as-fw-pill:hover {
          color: #67e8f9;
          border-color: rgba(103,232,249,0.3);
          background: rgba(103,232,249,0.08);
        }

        /* ── grid fade ── */
        .as-grid-wrap {
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .as-grid-wrap.changing {
          opacity: 0;
          transform: translateY(8px);
        }

        /* ── responsive ── */
        @media (max-width: 900px) {
          .as-module-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
          .as-mindset-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (max-width: 620px) {
          .as-section { padding: 48px 14px 56px; }
          .as-terminal-panel { padding: 18px 16px; }
          .as-module-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
          .as-mindset-grid { grid-template-columns: 1fr; }
          .as-fw-rail { gap: 8px; }
        }
        @media (max-width: 380px) {
          .as-module-grid { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .as-section::before,
          .as-section::after,
          .as-status-dot,
          .as-scan-line { animation: none !important; }
          .as-module,
          .as-mindset-card { animation: none !important; opacity: 1 !important; }
        }
      `}</style>

      <CircuitBg />

      <div className="as-inner">

        {/* ── Terminal header panel ──────────────────── */}
        <div className="as-terminal-panel">
          <div className="as-win-dots">
            <div className="as-win-dot" style={{ background: "#ef4444" }} />
            <div className="as-win-dot" style={{ background: "#fbbf24" }} />
            <div className="as-win-dot" style={{ background: "#22c55e" }} />
          </div>

          <div className="as-term-line">
            <span className="prompt">❯</span>
            <span className="cmd">automation_skills.scan()</span>
          </div>
          <div className="as-term-line">
            <span className="ok">✔</span>
            <span style={{ color: "#94a3b8" }}>
              Loaded{" "}
              <span style={{ color: "#67e8f9", fontWeight: 700 }}>{moduleCount}</span>
              {" "}modules · AI-enhanced QA stack ready
            </span>
            <span className="cursor" />
          </div>

          <h2 className="as-heading">
            Automation{" "}
            <span className="as-heading-grad">Skills Stack</span>
          </h2>

          <div className="as-stats-row">
            {[
              { label: "AI Tools", count: 6, color: "#67e8f9" },
              { label: "Frameworks", count: 5, color: "#22c55e" },
              { label: "CI / CD", count: 2, color: "#f97316" },
              { label: "Languages", count: 1, color: "#facc15" },
              { label: "Methods", count: 2, color: "#a78bfa" },
            ].map((s) => (
              <div
                key={s.label}
                className="as-stat-pill"
                style={{
                  color: s.color,
                  borderColor: `${s.color}28`,
                  background: `${s.color}0e`,
                }}
              >
                <div className="as-stat-pill-dot" style={{ background: s.color }} />
                {s.count} {s.label}
              </div>
            ))}
          </div>
        </div>

        {/* ── View toggle ────────────────────────────── */}
        <div className="as-view-toggle">
          <button
            className={`as-view-btn${view === "tools" ? " active" : ""}`}
            onClick={() => switchView("tools")}
            type="button"
          >
            <Bot size={16} />
            Automation Tools
          </button>
          <button
            className={`as-view-btn${view === "mindset" ? " active" : ""}`}
            onClick={() => switchView("mindset")}
            type="button"
          >
            <Brain size={16} />
            QA Mindset
          </button>
        </div>

        {/* ── Category filter (tools only) ───────────── */}
        {view === "tools" && (
          <div className="as-cat-strip">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                className={`as-cat-btn${cat === c.id ? " active" : ""}`}
                onClick={() => switchCat(c.id)}
                type="button"
                style={
                  cat === c.id && c.color
                    ? {
                        color: c.color,
                        borderColor: `${c.color}45`,
                        background: `${c.color}10`,
                        boxShadow: `0 0 12px ${c.color}20`,
                      }
                    : {}
                }
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* ── Cards ──────────────────────────────────── */}
        <div className={`as-grid-wrap${catChanging ? " changing" : ""}`}>
          {view === "tools" ? (
            <div className="as-module-grid">
              {filtered.map((skill, i) => (
                <SkillModule key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          ) : (
            <div className="as-mindset-grid">
              {MINDSET.map((skill, i) => (
                <MindsetCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* ── Framework rail ─────────────────────────── */}
        <div className="as-fw-rail">
          <span className="as-fw-label">
            <Zap size={12} style={{ display: "inline", verticalAlign: "middle", marginRight: 5 }} />
            Active Frameworks
          </span>
          <div className="as-fw-divider" />
          <div className="as-fw-pills">
            {FRAMEWORKS.map((f) => (
              <span key={f} className="as-fw-pill">{f}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
