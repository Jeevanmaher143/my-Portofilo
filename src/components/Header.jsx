import React, { useState, useEffect } from "react";
import BugReportIcon from "@mui/icons-material/BugReport";
import { Bot } from "lucide-react";

const THEME = {
  manual: {
    accent:     "#fbbf24",
    gradStart:  "#fbbf24",
    gradEnd:    "#f59e0b",
    logoBg:     "linear-gradient(135deg,#fbbf24,#f59e0b)",
    logoGlow:   "rgba(251,191,36,0.42)",
    subLabel:   "Manual QA Engineer",
    border:     "rgba(251,191,36,0.18)",
    pillGlow:   "rgba(251,191,36,0.3)",
  },
  automation: {
    accent:     "#67e8f9",
    gradStart:  "#06b6d4",
    gradEnd:    "#2563eb",
    logoBg:     "linear-gradient(135deg,#06b6d4,#2563eb)",
    logoGlow:   "rgba(103,232,249,0.42)",
    subLabel:   "Automation AI QA",
    border:     "rgba(103,232,249,0.18)",
    pillGlow:   "rgba(103,232,249,0.3)",
  },
};

export default function Header({ activeTab, setActiveTab }) {
  const [scrolled, setScrolled] = useState(false);

  const t      = THEME[activeTab] || THEME.manual;
  const isAuto = activeTab === "automation";

  /* scroll: darken bg */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Exo+2:wght@600;700;800;900&family=Rajdhani:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        @keyframes hdrIn {
          from { opacity:0; transform:translateY(-100%); }
          to   { opacity:1; transform:translateY(0);     }
        }
        @keyframes logoPulse {
          0%,100% { box-shadow:0 0 14px var(--logo-glow); }
          50%     { box-shadow:0 0 26px var(--logo-glow), 0 0 6px var(--logo-glow); }
        }

        /* ── desktop nav links ── */
        .hdr-link {
          position: relative;
          background: none; border: none; cursor: pointer;
          padding: 6px 10px; border-radius: 7px;
          font-family: 'Exo 2', sans-serif;
          font-weight: 600; font-size: 0.78rem;
          letter-spacing: 0.01em;
          color: rgba(148,163,184,0.76);
          transition: color 0.22s, background 0.22s;
          white-space: nowrap;
        }
        .hdr-link:hover {
          color: #e2e8f0;
          background: rgba(255,255,255,0.05);
        }
        .hdr-link.lk-active { color: var(--hdr-accent); }

        .hdr-link .lk-bar {
          position: absolute; bottom: 1px; left: 50%;
          transform: translateX(-50%);
          height: 2px; width: 0; border-radius: 2px;
          background: var(--hdr-accent);
          transition: width 0.28s cubic-bezier(0.4,0,0.2,1);
        }
        .hdr-link.lk-active .lk-bar,
        .hdr-link:hover .lk-bar { width: 52%; }

        /* ── toggle pill buttons ── */
        .tgl-btn {
          position: relative; z-index: 1;
          flex: 1 1 0;
          min-width: 96px;
          text-align: center;
          background: none; border: none; cursor: pointer;
          padding: 6px 13px; border-radius: 7px;
          font-family: 'Exo 2', sans-serif;
          font-weight: 700; font-size: 0.73rem;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        @media (max-width: 480px) {
          .tgl-btn { min-width: 56px; padding: 6px 8px; }
        }

        /* ── hamburger button ── */
        .hbg {
          display: none;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 9px;
          width: 36px; height: 36px;
          align-items: center; justify-content: center;
          cursor: pointer; flex-shrink: 0;
          transition: background 0.22s, border-color 0.22s, color 0.22s;
        }
        .hbg:hover { background: rgba(255,255,255,0.1); }

        /* ── desktop nav wrapper ── */
        .hdr-nav { display: flex; }

        /* ── breakpoints ── */
        @media (max-width: 900px) {
          .hdr-nav { display: none !important; }
          .hbg     { display: flex !important; }
        }
        /* ultra-compact toggle on tiny screens */
        .lbl-f { display: inline; }
        .lbl-s { display: none;   }
        @media (max-width: 480px) {
          .lbl-f { display: none;   }
          .lbl-s { display: inline; }
        }

        /* ── mobile menu items ── */
        .mob-link {
          width: 100%;
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 14px 18px;
          cursor: pointer;
          font-family: 'Exo 2', sans-serif;
          font-weight: 700; font-size: 0.95rem;
          color: rgba(203,213,225,0.8);
          letter-spacing: 0.02em; text-align: left;
          display: flex; align-items: center; gap: 13px;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .mob-link:hover:not(.ml-active) {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.12);
          color: #e2e8f0;
        }
        .mob-link.ml-active {
          background: rgba(255,255,255,0.05);
          border-color: var(--hdr-accent-30);
          color: var(--hdr-accent);
        }
        .mob-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: rgba(255,255,255,0.12); flex-shrink: 0;
          transition: background 0.2s, box-shadow 0.2s;
        }
        .mob-link.ml-active .mob-dot {
          background: var(--hdr-accent);
          box-shadow: 0 0 8px var(--hdr-accent);
        }
        .mob-mode {
          flex: 1; padding: 13px 10px; border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(255,255,255,0.025);
          cursor: pointer;
          font-family: 'Exo 2', sans-serif;
          font-weight: 700; font-size: 0.82rem;
          letter-spacing: 0.03em;
          transition: background 0.22s, border-color 0.22s, color 0.22s;
        }
        .mob-label {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700; font-size: 0.62rem;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(100,116,139,0.75);
          padding-left: 4px; margin-bottom: 8px;
        }
      `}</style>

      {/* ══════════ NAVBAR ══════════ */}
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: "#020617",
          backdropFilter: "none",
          WebkitBackdropFilter: "none",
          borderBottom: `1px solid ${scrolled ? t.border : "transparent"}`,
          boxShadow: scrolled
            ? `0 4px 32px rgba(0,0,0,0.5), 0 1px 0 ${t.accent}15`
            : "none",
          transition: "background 0.38s ease, border-color 0.38s ease, box-shadow 0.38s ease",
          animation: "hdrIn 0.5s ease both",
          "--hdr-accent":    t.accent,
          "--hdr-accent-30": t.accent + "48",
          "--logo-glow":     t.logoGlow,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: "0 20px",
            height: 64,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          {/* ── Brand ── */}
          <button
            onClick={() => scrollTo("home")}
            style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "none", border: "none",
              cursor: "pointer", flexShrink: 0, padding: 0,
            }}
          >
            <div
              style={{
                width: 38, height: 38, borderRadius: 11,
                background: t.logoBg, flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.15)",
                animation: "logoPulse 3.5s ease-in-out infinite",
              }}
            >
              {isAuto
                ? <Bot size={19} color="#020617" strokeWidth={2.5}/>
                : <BugReportIcon style={{ color: "#020617", fontSize: 19 }}/>
              }
            </div>

            <div>
              <div style={{
                fontFamily: "'Exo 2',sans-serif",
                fontWeight: 800, fontSize: "0.88rem",
                color: t.accent, lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}>
                Jeevan Maher
              </div>
              <div style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 600, fontSize: "0.58rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "rgba(148,163,184,0.58)", lineHeight: 1, marginTop: 2,
              }}>
                {t.subLabel}
              </div>
            </div>
          </button>

          {/* ── Right side ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>

            {/* sliding mode toggle */}
            <div
              style={{
                position: "relative", display: "flex",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 10, padding: 3,
              }}
            >
              {/* animated pill */}
              <div
                style={{
                  position: "absolute",
                  top: 3, bottom: 3,
                  left: isAuto ? "calc(50% + 1.5px)" : "3px",
                  width: "calc(50% - 4.5px)",
                  background: `linear-gradient(135deg,${t.gradStart},${t.gradEnd})`,
                  borderRadius: 7,
                  transition: "left 0.32s cubic-bezier(0.4,0,0.2,1), background 0.32s ease",
                  boxShadow: `0 2px 12px ${t.pillGlow}`,
                  pointerEvents: "none",
                }}
              />
              <button
                onClick={() => setActiveTab("manual")}
                className="tgl-btn"
                style={{ color: !isAuto ? "#020617" : "rgba(148,163,184,0.58)" }}
              >
                <span className="lbl-f">Manual</span>
                <span className="lbl-s">M</span>
              </button>
              <button
                onClick={() => setActiveTab("automation")}
                className="tgl-btn"
                style={{ color: isAuto ? "#020617" : "rgba(148,163,184,0.58)" }}
              >
                <span className="lbl-f">Automation</span>
                <span className="lbl-s">Auto</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
