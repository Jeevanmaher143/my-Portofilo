import React, { useState, useMemo } from "react";
import {
  Code,
  Database,
  Layers,
  GitBranch,
  FileCode,
  Briefcase,
  Server,
  MessageSquare,
  Lightbulb,
  Users,
  Brain,
  Clock,
  Heart,
  CheckCircle,
} from "lucide-react";

/* ── Category meta ─────────────────────────────────────── */
const CATEGORIES = ["All", "Testing", "Methodology", "Process", "Tools", "Programming"];

const CAT_META = {
  Testing:     { color: "#f59e0b", bg: "#f59e0b14", border: "#f59e0b35" },
  Methodology: { color: "#0ea5e9", bg: "#0ea5e914", border: "#0ea5e935" },
  Process:     { color: "#10b981", bg: "#10b98114", border: "#10b98135" },
  Tools:       { color: "#a855f7", bg: "#a855f714", border: "#a855f735" },
  Programming: { color: "#f43f5e", bg: "#f43f5e14", border: "#f43f5e35" },
};

const LEVEL_LABELS = ["Beginner", "Basic", "Intermediate", "Advanced", "Expert"];

/* ── Data ───────────────────────────────────────────────── */
const technicalSkills = [
  { icon: FileCode,  name: "Manual Testing",       color: "#f59e0b", glow: "#f59e0b40", category: "Testing",     desc: "Exploratory & scripted test execution",      level: 5 },
  { icon: FileCode,  name: "Functional Testing",   color: "#3b82f6", glow: "#3b82f640", category: "Testing",     desc: "Validating features against requirements",   level: 5 },
  { icon: FileCode,  name: "Regression Testing",   color: "#8b5cf6", glow: "#8b5cf640", category: "Testing",     desc: "Ensuring stability after code changes",      level: 5 },
  { icon: FileCode,  name: "Smoke Testing",        color: "#10b981", glow: "#10b98140", category: "Testing",     desc: "Core functionality sanity checks",           level: 4 },
  { icon: FileCode,  name: "Sanity Testing",       color: "#ef4444", glow: "#ef444440", category: "Testing",     desc: "Targeted narrow regression checks",          level: 4 },
  { icon: FileCode,  name: "Black Box Testing",    color: "#fbbf24", glow: "#fbbf2440", category: "Testing",     desc: "Testing without internal code knowledge",    level: 5 },
  { icon: FileCode,  name: "White Box Testing",    color: "#6366f1", glow: "#6366f140", category: "Testing",     desc: "Code-path aware testing approach",           level: 3 },
  { icon: Layers,    name: "SDLC",                 color: "#0ea5e9", glow: "#0ea5e940", category: "Methodology", desc: "Software Development Life Cycle mastery",    level: 5 },
  { icon: Layers,    name: "STLC",                 color: "#14b8a6", glow: "#14b8a640", category: "Methodology", desc: "Software Test Life Cycle expertise",         level: 5 },
  { icon: Users,     name: "Agile Methodology",    color: "#06b6d4", glow: "#06b6d440", category: "Methodology", desc: "Scrum & sprint-based delivery model",        level: 4 },
  { icon: Lightbulb, name: "Quality Assurance",    color: "#f43f5e", glow: "#f43f5e40", category: "Methodology", desc: "End-to-end quality lifecycle ownership",     level: 5 },
  { icon: FileCode,  name: "Test Case Writing",    color: "#f97316", glow: "#f9731640", category: "Process",     desc: "Comprehensive test case documentation",      level: 5 },
  { icon: FileCode,  name: "Bug Reporting",        color: "#dc2626", glow: "#dc262640", category: "Process",     desc: "Clear, actionable defect documentation",     level: 5 },
  { icon: FileCode,  name: "Test Execution",       color: "#22c55e", glow: "#22c55e40", category: "Process",     desc: "Systematic test run & result tracking",      level: 5 },
  { icon: FileCode,  name: "Defect Tracking",      color: "#ec4899", glow: "#ec489940", category: "Process",     desc: "Full lifecycle management of bugs",          level: 5 },
  { icon: Brain,     name: "Critical QA Analysis", color: "#8b5cf6", glow: "#8b5cf640", category: "Process",     desc: "Root cause & impact analysis",               level: 4 },
  { icon: Briefcase, name: "JIRA",                 color: "#0052CC", glow: "#0052CC40", category: "Tools",       desc: "Issue tracking & project management",        level: 4 },
  { icon: Briefcase, name: "ClickUp",              color: "#7B68EE", glow: "#7B68EE40", category: "Tools",       desc: "Team task & workflow management",            level: 4 },
  { icon: Layers,    name: "Postman",              color: "#FF6C37", glow: "#FF6C3740", category: "Tools",       desc: "REST API testing & collection runner",       level: 4 },
  { icon: Database,  name: "SQL Testing",          color: "#4479A1", glow: "#4479A140", category: "Tools",       desc: "Database query validation & testing",        level: 3 },
  { icon: GitBranch, name: "Git & GitHub",         color: "#f05032", glow: "#f0503240", category: "Tools",       desc: "Version control & team collaboration",       level: 4 },
  { icon: Code,      name: "HTML & CSS",           color: "#E34F26", glow: "#E34F2640", category: "Programming", desc: "Semantic markup & modern styling",           level: 4 },
  { icon: Code,      name: "JavaScript",           color: "#F7DF1E", glow: "#F7DF1E40", category: "Programming", desc: "Scripting & test automation basics",         level: 3 },
  { icon: Server,    name: "Operating Systems",    color: "#0078D6", glow: "#0078D640", category: "Programming", desc: "Windows & Linux test environments",          level: 4 },
];

const softSkills = [
  { icon: MessageSquare, name: "Communication",    color: "#667eea", glow: "#667eea40", desc: "Clear & Effective",    level: 5 },
  { icon: Lightbulb,     name: "Problem Solving",  color: "#fbbf24", glow: "#fbbf2440", desc: "Analytical Mind",      level: 5 },
  { icon: Users,         name: "Team Work",        color: "#10b981", glow: "#10b98140", desc: "Collaborative Spirit", level: 5 },
  { icon: Brain,         name: "Critical Thinking",color: "#8b5cf6", glow: "#8b5cf640", desc: "Deep Analysis",        level: 5 },
  { icon: Clock,         name: "Time Management",  color: "#f59e0b", glow: "#f59e0b40", desc: "Always On Time",       level: 4 },
  { icon: Heart,         name: "Positive Attitude",color: "#ef4444", glow: "#ef444440", desc: "Growth Mindset",       level: 5 },
  { icon: Brain,         name: "Work Ethic",       color: "#14efd6", glow: "#14efd640", desc: "Work Honestly",        level: 5 },
  { icon: Lightbulb,     name: "Creativity",       color: "#1d63ee", glow: "#1d63ee40", desc: "Innovative Thinking",  level: 4 },
];

/* ── Floating Orbs ──────────────────────────────────────── */
function FloatingOrbs() {
  const orbs = [
    { size: 320, x: -80,   y: -80,   color: "#667eea", delay: 0,   dur: 8  },
    { size: 280, x: "70%", y: "60%", color: "#764ba2", delay: 2,   dur: 10 },
    { size: 200, x: "40%", y: "20%", color: "#0ea5e9", delay: 1,   dur: 12 },
    { size: 160, x: "85%", y: "10%", color: "#10b981", delay: 3,   dur: 9  },
    { size: 240, x: "10%", y: "75%", color: "#f59e0b", delay: 1.5, dur: 11 },
  ];
  return (
    <>
      {orbs.map((o, i) => (
        <div key={i} style={{
          position: "absolute",
          width: o.size, height: o.size,
          left: o.x, top: o.y,
          borderRadius: "50%",
          background: o.color,
          opacity: 0.055,
          filter: "blur(70px)",
          animation: `orbFloat ${o.dur}s ease-in-out infinite alternate`,
          animationDelay: `${o.delay}s`,
          pointerEvents: "none",
        }}/>
      ))}
    </>
  );
}

/* ── Grid Lines ─────────────────────────────────────────── */
function GridLines() {
  return (
    <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.032, pointerEvents: "none" }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="sg" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#fff" strokeWidth="1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#sg)"/>
    </svg>
  );
}

/* ── Proficiency Dots ───────────────────────────────────── */
function ProfDots({ level, color, hovered }) {
  return (
    <div style={{ display: "flex", gap: 4 }}>
      {[1, 2, 3, 4, 5].map(d => (
        <div key={d} style={{
          width: 6, height: 6,
          borderRadius: "50%",
          background: d <= level ? color : "rgba(255,255,255,0.1)",
          boxShadow: d <= level && hovered ? `0 0 6px ${color}` : "none",
          transition: "all 0.3s ease",
          transitionDelay: `${(d - 1) * 0.04}s`,
        }}/>
      ))}
    </div>
  );
}

/* ── Tech Card ──────────────────────────────────────────── */
function TechCard({ skill, index }) {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);
  const cat = CAT_META[skill.category] || {};

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 14,
        background: hovered
          ? `linear-gradient(135deg, ${skill.color}0c, rgba(255,255,255,0.035))`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? skill.color + "55" : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 40px ${skill.color}22, 0 0 0 1px ${skill.color}20`
          : "0 2px 10px rgba(0,0,0,0.18)",
        animation: "cardEntrance 0.5s ease-out forwards",
        animationDelay: `${index * 0.035}s`,
        opacity: 0,
        backdropFilter: "blur(10px)",
      }}
    >
      {/* left accent bar */}
      <div style={{
        position: "absolute",
        left: 0, top: 0, bottom: 0,
        width: 3,
        borderRadius: "14px 0 0 14px",
        background: `linear-gradient(180deg, ${skill.color}, ${skill.color}25)`,
        opacity: hovered ? 1 : 0.4,
        transition: "opacity 0.3s ease",
      }}/>

      <div style={{ padding: "18px 18px 16px 22px" }}>
        {/* row 1: icon + name + category pill */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
          <div style={{
            width: 40, height: 40,
            borderRadius: 10,
            background: hovered ? skill.color + "22" : skill.color + "14",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.3s ease",
            boxShadow: hovered ? `0 0 14px ${skill.color}45` : "none",
          }}>
            <Icon size={17} color={skill.color}/>
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: "'Exo 2', sans-serif",
              fontWeight: 700,
              fontSize: "0.88rem",
              color: hovered ? "#fff" : "#e2e8f0",
              letterSpacing: "0.01em",
              lineHeight: 1.3,
              marginBottom: 5,
              transition: "color 0.3s",
            }}>
              {skill.name}
            </div>
            <span style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "0.63rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: cat.color,
              background: cat.bg,
              border: `1px solid ${cat.border}`,
              padding: "2px 8px",
              borderRadius: 20,
              whiteSpace: "nowrap",
              display: "inline-block",
            }}>
              {skill.category}
            </span>
          </div>
        </div>

        {/* description */}
        <p style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "0.77rem",
          color: hovered ? "#94a3b8" : "#475569",
          lineHeight: 1.55,
          margin: "0 0 13px",
          transition: "color 0.3s",
          letterSpacing: "0.01em",
        }}>
          {skill.desc}
        </p>

        {/* proficiency row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <ProfDots level={skill.level} color={skill.color} hovered={hovered}/>
          <span style={{
            fontFamily: "'Rajdhani', sans-serif",
            fontSize: "0.62rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: hovered ? skill.color : "#334155",
            transition: "color 0.3s",
          }}>
            {LEVEL_LABELS[skill.level - 1]}
          </span>
        </div>
      </div>

      {/* bottom shimmer line */}
      <div style={{
        position: "absolute",
        bottom: 0, left: "50%",
        transform: "translateX(-50%)",
        height: 1,
        width: hovered ? "80%" : "0%",
        background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        transition: "width 0.4s ease",
      }}/>
    </div>
  );
}

/* ── Soft Card ──────────────────────────────────────────── */
function SoftCard({ skill, index }) {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: 14,
        background: hovered
          ? `linear-gradient(135deg, ${skill.color}0c, rgba(255,255,255,0.035))`
          : "rgba(255,255,255,0.03)",
        border: `1px solid ${hovered ? skill.color + "55" : "rgba(255,255,255,0.07)"}`,
        transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
        overflow: "hidden",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? `0 20px 40px ${skill.color}22`
          : "0 2px 10px rgba(0,0,0,0.18)",
        animation: "cardEntrance 0.5s ease-out forwards",
        animationDelay: `${index * 0.07}s`,
        opacity: 0,
        backdropFilter: "blur(10px)",
        display: "flex",
        padding: "20px",
        gap: 16,
        alignItems: "center",
      }}
    >
      {/* top gradient accent line */}
      <div style={{
        position: "absolute",
        top: 0, left: 0, right: 0,
        height: 2,
        background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}/>

      {/* icon */}
      <div style={{
        width: 52, height: 52,
        borderRadius: 14,
        background: hovered ? skill.color + "22" : skill.color + "14",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
        transition: "all 0.3s ease",
        boxShadow: hovered ? `0 0 20px ${skill.color}45` : "none",
      }}>
        <Icon size={22} color={skill.color}/>
      </div>

      {/* content */}
      <div style={{ flex: 1 }}>
        <div style={{
          fontFamily: "'Exo 2', sans-serif",
          fontWeight: 700,
          fontSize: "0.95rem",
          color: hovered ? "#fff" : "#e2e8f0",
          marginBottom: 3,
          transition: "color 0.3s",
        }}>
          {skill.name}
        </div>
        <div style={{
          fontFamily: "'Rajdhani', sans-serif",
          fontSize: "0.72rem",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: hovered ? skill.color : "#475569",
          transition: "color 0.3s",
          marginBottom: 10,
        }}>
          {skill.desc}
        </div>
        <ProfDots level={skill.level} color={skill.color} hovered={hovered}/>
      </div>

      {/* check */}
      <CheckCircle
        size={18}
        color={hovered ? skill.color : "#1e293b"}
        style={{ flexShrink: 0, transition: "color 0.3s" }}
      />
    </div>
  );
}

/* ── Main ───────────────────────────────────────────────── */
export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical");
  const [activeCategory, setActiveCategory] = useState("All");
  const [tabChanging, setTabChanging] = useState(false);

  const switchTab = (tab) => {
    if (tab === activeTab) return;
    setTabChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setActiveCategory("All");
      setTabChanging(false);
    }, 220);
  };

  const filteredSkills = useMemo(() => {
    if (activeCategory === "All") return technicalSkills;
    return technicalSkills.filter(s => s.category === activeCategory);
  }, [activeCategory]);

  const catCounts = useMemo(() => {
    const c = { All: technicalSkills.length };
    CATEGORIES.slice(1).forEach(cat => {
      c[cat] = technicalSkills.filter(s => s.category === cat).length;
    });
    return c;
  }, []);

  return (
    <div style={{
      position: "relative",
      padding: "70px 20px 80px",
      background: "linear-gradient(180deg,#020617 0%,#0d1b2e 50%,#020617 100%)",
      minHeight: "100vh",
      overflow: "hidden",
      fontFamily: "'Exo 2','Rajdhani',sans-serif",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800;900&family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet"/>

      <style>{`
        @keyframes orbFloat     { to { transform:translate(20px,30px) scale(1.08); } }
        @keyframes cardEntrance {
          0%   { opacity:0; transform:translateY(22px) scale(0.93); }
          100% { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes titleGlow {
          0%,100% { text-shadow:0 0 30px rgba(102,126,234,.4),0 0 60px rgba(102,126,234,.15); }
          50%     { text-shadow:0 0 50px rgba(102,126,234,.7),0 0 100px rgba(102,126,234,.3); }
        }
        @keyframes lineExpand { to { width:80px; } }
        @keyframes badgePulse {
          0%,100%{ box-shadow:0 0 0 0 rgba(102,126,234,.4); }
          50%    { box-shadow:0 0 0 8px rgba(102,126,234,0); }
        }
        @keyframes countUp {
          0%  { opacity:0; transform:scale(.5); }
          60% { transform:scale(1.15); }
          100%{ opacity:1; transform:scale(1); }
        }
        @keyframes filterIn {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }

        /* ── Tabs ── */
        .sk-tab {
          display:flex; align-items:center; gap:8px;
          font-family:'Exo 2',sans-serif; font-size:.85rem; font-weight:700;
          padding:12px 26px; cursor:pointer;
          transition:all 0.3s ease;
          background:rgba(255,255,255,.04); color:#64748b;
          border:1px solid rgba(255,255,255,.08); border-radius:10px;
          letter-spacing:.04em; text-transform:uppercase;
        }
        .sk-tab:hover { color:#e2e8f0; border-color:rgba(255,255,255,.18); }
        .sk-tab.active {
          background:linear-gradient(135deg,#667eea,#764ba2);
          color:#fff; border-color:transparent;
          box-shadow:0 8px 24px rgba(102,126,234,.38);
        }

        /* ── Category filter ── */
        .cat-btn {
          display:flex; align-items:center; gap:6px;
          font-family:'Rajdhani',sans-serif; font-size:.74rem; font-weight:700;
          padding:7px 15px; cursor:pointer;
          transition:all 0.25s ease;
          background:rgba(255,255,255,.03); color:#475569;
          border:1px solid rgba(255,255,255,.06); border-radius:8px;
          letter-spacing:.1em; text-transform:uppercase; white-space:nowrap;
        }
        .cat-btn:hover { color:#94a3b8; border-color:rgba(255,255,255,.13); }
        .cat-btn.active {
          color:#fff;
          background:rgba(255,255,255,.07);
          border-color:rgba(255,255,255,.18);
        }
        .cat-count {
          font-size:.64rem; padding:1px 6px; border-radius:10px;
          background:rgba(255,255,255,.07); color:#64748b;
          font-family:'Rajdhani',sans-serif; font-weight:700;
        }
        .cat-btn.active .cat-count { background:rgba(255,255,255,.14); color:#cbd5e1; }

        /* ── Grids ── */
        .grid-tech {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(280px,1fr));
          gap:16px;
          animation:filterIn 0.28s ease;
        }
        .grid-soft {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(320px,1fr));
          gap:14px;
        }

        @media(max-width:900px){
          .grid-tech { grid-template-columns:repeat(2,1fr); gap:12px; }
          .grid-soft { grid-template-columns:1fr; gap:10px; }
        }
        @media(max-width:560px){
          .grid-tech { grid-template-columns:repeat(2,1fr); gap:10px; }
          .sk-tab { padding:10px 16px; font-size:.78rem; }
          .cat-btn { padding:6px 11px; font-size:.7rem; }
        }
      `}</style>

      <FloatingOrbs/>
      <GridLines/>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          {/* top badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(102,126,234,.1)",
            border: "1px solid rgba(102,126,234,.28)",
            borderRadius: 30, padding: "6px 18px", marginBottom: 20,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#667eea", animation: "badgePulse 1.8s ease-in-out infinite" }}/>
            <span style={{ fontFamily: "'Rajdhani',sans-serif", fontWeight: 700, fontSize: ".72rem", letterSpacing: ".2em", color: "#a78bfa", textTransform: "uppercase" }}>
              My Expertise
            </span>
          </div>

          <h2 style={{
            fontFamily: "'Exo 2',sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem,5vw,3.2rem)",
            color: "#fff",
            margin: "0 0 12px",
            lineHeight: 1.1,
            letterSpacing: "-.02em",
            animation: "titleGlow 3s ease-in-out infinite",
          }}>
            Skills &{" "}
            <span style={{
              background: "linear-gradient(135deg,#667eea,#a855f7,#ec4899)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Abilities
            </span>
          </h2>

          {/* divider */}
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div style={{ height: 1, background: "linear-gradient(90deg,transparent,#667eea)", animation: "lineExpand 1s ease-out forwards", width: 0 }}/>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#667eea", flexShrink: 0 }}/>
            <div style={{ height: 1, background: "linear-gradient(90deg,#667eea,transparent)", animation: "lineExpand 1s ease-out forwards", width: 0 }}/>
          </div>

          <p style={{
            fontFamily: "'Rajdhani',sans-serif",
            color: "#64748b",
            fontSize: "1.02rem",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.7,
            letterSpacing: ".02em",
          }}>
            A comprehensive blend of technical proficiency and interpersonal excellence
          </p>

          {/* stat counters */}
          <div style={{ display: "flex", justifyContent: "center", gap: 40, marginTop: 30, flexWrap: "wrap" }}>
            {[
              { num: "24+", label: "Tech Skills" },
              { num: "8",   label: "Soft Skills" },
              { num: "100%",label: "Dedication"  },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: "center", animation: "countUp 0.6s ease-out forwards", animationDelay: `${i * 0.15}s`, opacity: 0 }}>
                <div style={{
                  fontFamily: "'Exo 2',sans-serif", fontWeight: 900, fontSize: "1.6rem",
                  background: "linear-gradient(135deg,#667eea,#a855f7)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                  lineHeight: 1,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: "'Rajdhani',sans-serif", fontSize: ".7rem",
                  color: "#334155", letterSpacing: ".14em", textTransform: "uppercase", marginTop: 4,
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Main / Soft Tabs ── */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, marginBottom: 36, flexWrap: "wrap" }}>
          {[
            { id: "technical", label: "Technical Skills", icon: <Code size={15}/> },
            { id: "soft",      label: "Soft Skills",      icon: <Users size={15}/> },
          ].map(tab => (
            <button key={tab.id} onClick={() => switchTab(tab.id)} className={`sk-tab ${activeTab === tab.id ? "active" : ""}`}>
              {tab.icon} {tab.label}
            </button>
          ))}
        </div>

        {/* ── Content area ── */}
        <div style={{
          opacity: tabChanging ? 0 : 1,
          transform: tabChanging ? "translateY(8px)" : "translateY(0)",
          transition: "opacity .22s ease, transform .22s ease",
        }}>
          {activeTab === "technical" ? (
            <>
              {/* ── Category filter ── */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28, justifyContent: "center" }}>
                {CATEGORIES.map(cat => {
                  const isActive = cat === activeCategory;
                  const accent = cat === "All" ? "#667eea" : (CAT_META[cat]?.color || "#667eea");
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`cat-btn ${isActive ? "active" : ""}`}
                      style={isActive ? { borderColor: accent + "55", color: accent } : {}}
                    >
                      {cat}
                      <span className="cat-count">{catCounts[cat]}</span>
                    </button>
                  );
                })}
              </div>

              <div className="grid-tech">
                {filteredSkills.map((s, i) => (
                  <TechCard key={s.name} skill={s} index={i}/>
                ))}
              </div>
            </>
          ) : (
            <div className="grid-soft">
              {softSkills.map((s, i) => (
                <SoftCard key={s.name} skill={s} index={i}/>
              ))}
            </div>
          )}
        </div>

        {/* ── Footer badge ── */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,255,255,.025)",
            border: "1px solid rgba(255,255,255,.06)",
            borderRadius: 14,
            padding: "16px 32px",
            backdropFilter: "blur(10px)",
          }}>
            <span style={{
              fontFamily: "'Rajdhani',sans-serif",
              color: "#334155",
              fontSize: ".8rem",
              letterSpacing: ".12em",
              textTransform: "uppercase",
            }}>
              ⚡ Always learning · Always growing ⚡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
