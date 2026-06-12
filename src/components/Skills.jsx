import React, { useState } from "react";
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
} from "lucide-react";

const technicalSkills = [
  {
    icon: FileCode,
    name: "Manual Testing",
    color: "#f59e0b",
    glow: "#f59e0b40",
  },

  {
    icon: FileCode,
    name: "Functional Testing",
    color: "#3b82f6",
    glow: "#3b82f640",
  },

  {
    icon: FileCode,
    name: "Regression Testing",
    color: "#8b5cf6",
    glow: "#8b5cf640",
  },

  {
    icon: FileCode,
    name: "Smoke Testing",
    color: "#10b981",
    glow: "#10b98140",
  },

  {
    icon: FileCode,
    name: "Sanity Testing",
    color: "#ef4444",
    glow: "#ef444440",
  },

  {
    icon: FileCode,
    name: "Black Box Testing",
    color: "#fbbf24",
    glow: "#fbbf2440",
  },

  {
    icon: FileCode,
    name: "White Box Testing",
    color: "#6366f1",
    glow: "#6366f140",
  },

  {
    icon: Layers,
    name: "SDLC",
    color: "#0ea5e9",
    glow: "#0ea5e940",
  },

  {
    icon: Layers,
    name: "STLC",
    color: "#14b8a6",
    glow: "#14b8a640",
  },

  {
    icon: FileCode,
    name: "Test Case Writing",
    color: "#f97316",
    glow: "#f9731640",
  },

  {
    icon: FileCode,
    name: "Bug Reporting",
    color: "#dc2626",
    glow: "#dc262640",
  },

  {
    icon: Briefcase,
    name: "JIRA",
    color: "#0052CC",
    glow: "#0052CC40",
  },

  {
    icon: Briefcase,
    name: "ClickUp",
    color: "#7B68EE",
    glow: "#7B68EE40",
  },

  {
    icon: Layers,
    name: "Postman",
    color: "#FF6C37",
    glow: "#FF6C3740",
  },

  {
    icon: Database,
    name: "SQL Testing",
    color: "#4479A1",
    glow: "#4479A140",
  },

  {
    icon: GitBranch,
    name: "Git & GitHub",
    color: "#f05032",
    glow: "#f0503240",
  },

  {
    icon: Code,
    name: "HTML & CSS",
    color: "#E34F26",
    glow: "#E34F2640",
  },

  {
    icon: Code,
    name: "JavaScript",
    color: "#F7DF1E",
    glow: "#F7DF1E40",
  },

  {
    icon: FileCode,
    name: "Test Execution",
    color: "#22c55e",
    glow: "#22c55e40",
  },

  {
    icon: FileCode,
    name: "Defect Tracking",
    color: "#ec4899",
    glow: "#ec489940",
  },

  {
    icon: Server,
    name: "Operating Systems",
    color: "#0078D6",
    glow: "#0078D640",
  },

  {
    icon: Brain,
    name: "Critical QA Analysis",
    color: "#8b5cf6",
    glow: "#8b5cf640",
  },

  {
    icon: Users,
    name: "Agile Methodology",
    color: "#06b6d4",
    glow: "#06b6d440",
  },

  {
    icon: Lightbulb,
    name: "Quality Assurance",
    color: "#f43f5e",
    glow: "#f43f5e40",
  },
];
const softSkills = [
  {
    icon: MessageSquare,
    name: "Communication",
    color: "#667eea",
    glow: "#667eea40",
    desc: "Clear & Effective",
  },
  {
    icon: Lightbulb,
    name: "Problem Solving",
    color: "#fbbf24",
    glow: "#fbbf2440",
    desc: "Analytical Mind",
  },
  {
    icon: Users,
    name: "Team Work",
    color: "#10b981",
    glow: "#10b98140",
    desc: "Collaborative Spirit",
  },
  {
    icon: Brain,
    name: "Critical Thinking",
    color: "#8b5cf6",
    glow: "#8b5cf640",
    desc: "Deep Analysis",
  },
  {
    icon: Clock,
    name: "Time Management",
    color: "#f59e0b",
    glow: "#f59e0b40",
    desc: "Always On Time",
  },
  {
    icon: Heart,
    name: "Positive Attitude",
    color: "#ef4444",
    glow: "#ef444440",
    desc: "Growth Mindset",
  },
  {
    icon: Brain,
    name: "Work Ethic",
    color: "#14efd6",
    glow: "#ef444440",
    desc: "Work Honestly",
  },
  {
    icon: Lightbulb,
    name: "Creativity/Innovation",
    color: "#1d63ee",
    glow: "#ef444440",
    desc: "Growth Mindset",
  },
];

/* ── Floating Orbs ── */
function FloatingOrbs() {
  const orbs = [
    { size: 320, x: -80, y: -80, color: "#667eea", delay: 0, dur: 8 },
    { size: 280, x: "70%", y: "60%", color: "#764ba2", delay: 2, dur: 10 },
    { size: 200, x: "40%", y: "20%", color: "#0ea5e9", delay: 1, dur: 12 },
    { size: 160, x: "85%", y: "10%", color: "#10b981", delay: 3, dur: 9 },
    { size: 240, x: "10%", y: "75%", color: "#f59e0b", delay: 1.5, dur: 11 },
  ];
  return (
    <>
      {orbs.map((o, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            width: o.size,
            height: o.size,
            left: o.x,
            top: o.y,
            borderRadius: "50%",
            background: o.color,
            opacity: 0.07,
            filter: "blur(60px)",
            animation: `orbFloat ${o.dur}s ease-in-out infinite alternate`,
            animationDelay: `${o.delay}s`,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}

/* ── Particles ── */
function ParticleField() {
  const pts = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    dur: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    color: ["#667eea", "#10b981", "#f59e0b", "#ef4444", "#0ea5e9"][
      Math.floor(Math.random() * 5)
    ],
  }));
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {pts.map((p) => (
        <div
          key={p.id}
          style={{
            position: "absolute",
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: p.color,
            opacity: 0.5,
            animation: `particleDrift ${p.dur}s ease-in-out infinite alternate`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── Grid Lines ── */
function GridLines() {
  return (
    <svg
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        opacity: 0.04,
        pointerEvents: "none",
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="#fff"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════
   TECH CARD  — shimmer · square blob · bottom glow bar
   ══════════════════════════════════════════════════════ */
function TechCard({ skill, index }) {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        padding: "24px 16px",
        borderRadius: 16,
        background: hovered
          ? `linear-gradient(135deg,${skill.glow},rgba(255,255,255,0.04))`
          : "rgba(255,255,255,0.04)",
        border: `1px solid ${
          hovered ? skill.color + "80" : "rgba(255,255,255,0.08)"
        }`,
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: 155,
        transform: hovered
          ? "translateY(-8px) scale(1.04)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 20px 40px ${skill.glow},0 0 0 1px ${skill.color}30`
          : "0 2px 8px rgba(0,0,0,0.2)",
        animation: "cardEntrance 0.5s ease-out forwards",
        animationDelay: `${index * 0.04}s`,
        opacity: 0,
        backdropFilter: "blur(8px)",
        overflow: "hidden",
      }}
    >
      {/* shimmer sweep */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(
              105deg,
              transparent 40%,
              ${skill.color}20 50%,
              transparent 60%
            )`,
            animation: "shimmer 0.7s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      )}

      {/* icon area */}
      <div
        style={{
          position: "relative",
          width: 72,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
        }}
      >
        {/* inner ring */}
        <div
          style={{
            position: "absolute",
            inset: -8,
            borderRadius: "50%",
            border: `1.5px solid ${skill.color}45`,
            background: `radial-gradient(circle at 50% 1px, ${skill.color} 0px, ${skill.color} 3.5px, transparent 4px)`,
            boxShadow: `0 0 8px 2px ${skill.color}60`,
            animation: hovered ? "ringCW 1.6s linear infinite" : "none",
            pointerEvents: "none",
          }}
        />

        {/* outer ring */}
        <div
          style={{
            position: "absolute",
            inset: -18,
            borderRadius: "50%",
            border: `1px dashed ${skill.color}28`,
            animation: hovered ? "ringCCW 3s linear infinite" : "none",
            pointerEvents: "none",
          }}
        />

        {/* square icon blob */}
        <div
          style={{
            width: hovered ? 54 : 48,
            height: hovered ? 54 : 48,
            borderRadius: 14,
            background: hovered ? skill.color + "30" : skill.color + "18",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: hovered
              ? `0 0 18px ${skill.glow},0 0 36px ${skill.glow}`
              : "none",
            animation: hovered ? "iconPulse 1.2s ease-in-out infinite" : "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Icon size={hovered ? 28 : 24} color={skill.color} />
        </div>
      </div>

      {/* skill name */}
      <span
        style={{
          fontFamily: "'Exo 2',sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          lineHeight: 1.3,
          color: hovered ? "#ffffff" : "#cbd5e1",
          letterSpacing: "0.01em",
          transition: "color 0.3s",
        }}
      >
        {skill.name}
      </span>

      {/* bottom glow bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: 2,
          width: hovered ? "80%" : "0%",
          background: `linear-gradient(
            90deg,
            transparent,
            ${skill.color},
            transparent
          )`,
          transition: "width 0.4s ease",
          borderRadius: "2px 2px 0 0",
        }}
      />
    </div>
  );
}
/* ══════════════════════════════════════════════════════
   SOFT CARD  — EXACT same CSS as TechCard
               + rotating glowing ring around the icon
   ══════════════════════════════════════════════════════ */
function SoftCard({ skill, index }) {
  const Icon = skill.icon;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        /* ── outer card: pixel-perfect copy of TechCard ── */
        position: "relative",
        padding: "24px 16px",
        borderRadius: 16,
        background: hovered
          ? `linear-gradient(135deg,${skill.glow},rgba(255,255,255,0.04))`
          : "rgba(255,255,255,0.04)",
        border: `1px solid ${hovered ? skill.color + "80" : "rgba(255,255,255,0.08)"}`,
        transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: 155,
        transform: hovered
          ? "translateY(-8px) scale(1.04)"
          : "translateY(0) scale(1)",
        boxShadow: hovered
          ? `0 20px 40px ${skill.glow},0 0 0 1px ${skill.color}30`
          : "0 2px 8px rgba(0,0,0,0.2)",
        animation: "cardEntrance 0.5s ease-out forwards",
        animationDelay: `${index * 0.08}s`,
        opacity: 0,
        backdropFilter: "blur(8px)",
        overflow: "hidden",
      }}
    >
      {/* ── shimmer sweep — identical to TechCard ── */}
      {hovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(105deg,transparent 40%,${skill.color}20 50%,transparent 60%)`,
            animation: "shimmer 0.7s ease-out forwards",
            pointerEvents: "none",
          }}
        />
      )}

      {/* ── icon area: ring layers + square blob ── */}
      <div
        style={{
          position: "relative",
          width: 72,
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 14,
        }}
      >
        {/* inner ring — fast clockwise, glowing bead dot at top */}
        <div
          style={{
            position: "absolute",
            inset: -8 /* ring sits 8px outside blob     */,
            borderRadius: "50%",
            border: `1.5px solid ${skill.color}45`,
            /* bright bead that spins with the ring */
            background: `radial-gradient(circle at 50% 1px, ${skill.color} 0px, ${skill.color} 3.5px, transparent 4px)`,
            boxShadow: `0 0 8px 2px ${skill.color}60`,
            animation: hovered ? "ringCW 1.6s linear infinite" : "none",
            pointerEvents: "none",
          }}
        />

        {/* outer ring — slower, counter-clockwise, dashed */}
        <div
          style={{
            position: "absolute",
            inset: -18,
            borderRadius: "50%",
            border: `1px dashed ${skill.color}28`,
            animation: hovered ? "ringCCW 3s linear infinite" : "none",
            pointerEvents: "none",
          }}
        />

        {/* square icon blob — identical style to TechCard */}
        <div
          style={{
            width: hovered ? 54 : 48,
            height: hovered ? 54 : 48,
            borderRadius: 14,
            background: hovered ? skill.color + "30" : skill.color + "18",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)",
            boxShadow: hovered
              ? `0 0 18px ${skill.glow},0 0 36px ${skill.glow}`
              : "none",
            animation: hovered ? "iconPulse 1.2s ease-in-out infinite" : "none",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Icon size={hovered ? 28 : 24} color={skill.color} />
        </div>
      </div>

      {/* skill name — same font/weight as TechCard */}
      <span
        style={{
          fontFamily: "'Exo 2',sans-serif",
          fontWeight: 700,
          fontSize: "0.85rem",
          lineHeight: 1.3,
          color: hovered ? "#ffffff" : "#cbd5e1",
          letterSpacing: "0.01em",
          transition: "color 0.3s",
          marginBottom: 5,
        }}
      >
        {skill.name}
      </span>

      {/* desc subtitle — unique to SoftCard, lights up on hover */}
      <span
        style={{
          fontFamily: "'Rajdhani',sans-serif",
          fontWeight: 700,
          fontSize: "0.68rem",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: hovered ? skill.color : "#475569",
          transition: "color 0.35s",
        }}
      >
        {skill.desc}
      </span>

      {/* bottom glow bar — identical to TechCard */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: 2,
          width: hovered ? "80%" : "0%",
          background: `linear-gradient(90deg,transparent,${skill.color},transparent)`,
          transition: "width 0.4s ease",
          borderRadius: "2px 2px 0 0",
        }}
      />
    </div>
  );
}

/* ── Main Component ── */
export default function Skills() {
  const [activeTab, setActiveTab] = useState("technical");
  const [tabChanging, setTabChanging] = useState(false);

  const switchTab = (tab) => {
    if (tab === activeTab) return;
    setTabChanging(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTabChanging(false);
    }, 220);
  };

  return (
    <div
      style={{
        position: "relative",
        padding: "70px 20px 80px",
        background:
          "linear-gradient(160deg,#050b18 0%,#0d1b2e 40%,#0f1a35 70%,#080f1c 100%)",
        minHeight: "100vh",
        overflow: "hidden",
        fontFamily: "'Exo 2','Rajdhani',sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;600;700;800;900&family=Rajdhani:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes orbFloat      { to { transform:translate(20px,30px) scale(1.08); } }
        @keyframes particleDrift { to { transform:translate(15px,-20px); opacity:.8; } }
        @keyframes cardEntrance  {
          0%   { opacity:0; transform:translateY(24px) scale(.92); }
          100% { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes shimmer       { 0%{transform:translateX(-100%)} 100%{transform:translateX(200%)} }
        @keyframes iconPulse     { 0%,100%{transform:scale(1)} 50%{transform:scale(1.09)} }

        /* ring animations used by SoftCard */
        @keyframes ringCW  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes ringCCW { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }

        @keyframes titleGlow {
          0%,100% { text-shadow:0 0 30px rgba(102,126,234,.4),0 0 60px rgba(102,126,234,.15); }
          50%     { text-shadow:0 0 50px rgba(102,126,234,.7),0 0 100px rgba(102,126,234,.3); }
        }
        @keyframes lineExpand  { to{width:80px} }
        @keyframes badgePulse  {
          0%,100%{ box-shadow:0 0 0 0 rgba(102,126,234,.4); }
          50%    { box-shadow:0 0 0 8px rgba(102,126,234,0); }
        }
        @keyframes scanLine    {
          0%{top:0;opacity:0} 10%{opacity:1} 90%{opacity:1} 100%{top:100%;opacity:0}
        }
        @keyframes countUp     {
          0%{opacity:0;transform:scale(.5)} 60%{transform:scale(1.15)} 100%{opacity:1;transform:scale(1)}
        }

        .tab-btn {
          display:flex; align-items:center; gap:9px;
          font-family:'Exo 2',sans-serif; font-size:.88rem; font-weight:700;
          padding:13px 28px; cursor:pointer;
          transition:all 0.35s cubic-bezier(0.34,1.56,0.64,1);
          background:rgba(255,255,255,.04); color:#94a3b8;
          border:1px solid rgba(255,255,255,.08); border-radius:12px;
          letter-spacing:.05em; text-transform:uppercase;
          position:relative; overflow:hidden;
        }
        .tab-btn::before {
          content:''; position:absolute; inset:0;
          background:linear-gradient(135deg,rgba(102,126,234,.15),rgba(118,75,162,.15));
          opacity:0; transition:opacity .3s;
        }
        .tab-btn:hover            { color:#e2e8f0; border-color:rgba(255,255,255,.2); transform:translateY(-2px); }
        .tab-btn:hover::before    { opacity:1; }
        .tab-btn.active           {
          background:linear-gradient(135deg,#667eea,#764ba2);
          color:#fff; border-color:transparent;
          box-shadow:0 8px 24px rgba(102,126,234,.45);
          transform:translateY(-2px);
          animation:badgePulse 2.5s ease-in-out infinite;
        }
        .tab-btn.active::before   { opacity:0; }

        .grid-tech {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(130px,1fr));
          gap:14px;
        }
        .grid-soft {
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
          gap:18px;
        }

        @media(max-width:768px){
          .grid-tech { grid-template-columns:repeat(3,1fr); gap:10px; }
          .grid-soft { grid-template-columns:repeat(2,1fr); gap:12px; }
        }
        @media(max-width:480px){
          .grid-tech { grid-template-columns:repeat(3,1fr); gap:8px; }
          .grid-soft { grid-template-columns:repeat(2,1fr); gap:10px; }
          .tab-btn   { padding:11px 18px; font-size:.78rem; }
        }
      `}</style>

      <FloatingOrbs />
      <GridLines />
      <ParticleField />

      {/* scan line */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 1,
          background:
            "linear-gradient(90deg,transparent,rgba(102,126,234,.4),transparent)",
          animation: "scanLine 8s linear infinite",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* ── header ── */}
        <div style={{ textAlign: "center", marginBottom: 50 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(102,126,234,.12)",
              border: "1px solid rgba(102,126,234,.3)",
              borderRadius: 30,
              padding: "6px 18px",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#667eea",
                animation: "badgePulse 1.8s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: ".75rem",
                letterSpacing: ".2em",
                color: "#a78bfa",
                textTransform: "uppercase",
              }}
            >
              My Expertise
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Exo 2',sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem,5vw,3.2rem)",
              color: "#fff",
              margin: "0 0 12px",
              lineHeight: 1.1,
              letterSpacing: "-.02em",
              animation: "titleGlow 3s ease-in-out infinite",
            }}
          >
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#667eea,#a855f7,#ec4899)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Abilities
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
            }}
          >
            <div
              style={{
                height: 1,
                background: "linear-gradient(90deg,transparent,#667eea)",
                animation: "lineExpand 1s ease-out forwards",
                width: 0,
              }}
            />
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "#667eea",
                flexShrink: 0,
              }}
            />
            <div
              style={{
                height: 1,
                background: "linear-gradient(90deg,#667eea,transparent)",
                animation: "lineExpand 1s ease-out forwards",
                width: 0,
              }}
            />
          </div>

          <p
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              color: "#94a3b8",
              fontSize: "1.05rem",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.7,
              letterSpacing: ".02em",
            }}
          >
            A comprehensive blend of technical proficiency and interpersonal
            excellence
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 32,
              marginTop: 28,
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "22+", label: "Tech Skills" },
              { num: "7", label: "Soft Skills" },
              { num: "100%", label: "Dedication" },
            ].map((s, i) => (
              <div
                key={i}
                style={{
                  textAlign: "center",
                  animation: "countUp 0.6s ease-out forwards",
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "'Exo 2',sans-serif",
                    fontWeight: 900,
                    fontSize: "1.6rem",
                    background: "linear-gradient(135deg,#667eea,#a855f7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontFamily: "'Rajdhani',sans-serif",
                    fontSize: ".72rem",
                    color: "#64748b",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── tabs ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 14,
            marginBottom: 44,
            flexWrap: "wrap",
          }}
        >
          {[
            {
              id: "technical",
              label: "Technical Skills",
              icon: <Code size={16} />,
            },
            { id: "soft", label: "Soft Skills", icon: <Users size={16} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── grids ── */}
        <div
          style={{
            opacity: tabChanging ? 0 : 1,
            transform: tabChanging ? "translateY(10px)" : "translateY(0)",
            transition: "opacity .22s ease,transform .22s ease",
          }}
        >
          {activeTab === "technical" ? (
            <div className="grid-tech">
              {technicalSkills.map((s, i) => (
                <TechCard key={i} skill={s} index={i} />
              ))}
            </div>
          ) : (
            <div className="grid-soft">
              {softSkills.map((s, i) => (
                <SoftCard key={i} skill={s} index={i} />
              ))}
            </div>
          )}
        </div>

        {/* ── footer badge ── */}
        <div style={{ textAlign: "center", marginTop: 60 }}>
          <div
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,.03)",
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: 14,
              padding: "16px 32px",
              backdropFilter: "blur(10px)",
            }}
          >
            <span
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                color: "#475569",
                fontSize: ".82rem",
                letterSpacing: ".1em",
                textTransform: "uppercase",
              }}
            >
              ⚡ Always learning · Always growing ⚡
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
