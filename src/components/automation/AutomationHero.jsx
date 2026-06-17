import React from "react";
import {
  ArrowRight,
  Bot,
  Cpu,
  Sparkles,
  Terminal,
  Workflow,
  Activity,
  CheckCircle2,
  Download,
} from "lucide-react";
import "./AutomationHero.css";

const heroStats = [
  { value: "AI", label: "Test Design", color: "#67e8f9" },
  { value: "24/7", label: "CI Runs",   color: "#c084fc" },
  { value: "0.8s", label: "Bug Signals", color: "#34d399" },
];

const techBadges = [
  "Self-Healing Tests",
  "AI Test Cases",
  "Visual Regression",
  "API Automation",
  "Quality Gates",
  "Bug Intelligence",
];

export default function AutomationHero() {
  return (
    <section className="automation-hero" id="automation-home">
      {/* ambient glows */}
      <div className="automation-hero-glow glow-one" />
      <div className="automation-hero-glow glow-two" />

      <div className="automation-container">

        {/* ── LEFT: content ───────────────────────── */}
        <div className="automation-content">
          <div className="automation-badge">
            <Sparkles size={16} />
            AI Powered Automation Testing
          </div>

          <h1 className="automation-title">
            AI Driven <span>Test Automation</span>
            <br />
            Built For Real Quality
          </h1>

          <h2 className="automation-subtitle">
            Selenium | Playwright | Cypress | API QA | CI/CD | Visual AI
          </h2>

          <p className="automation-desc">
            I design intelligent automation systems that turn test cases,
            browser flows, API checks, visual regression, and CI/CD quality
            gates into one smart QA workflow. The focus is faster releases,
            cleaner bug signals, and automation that can adapt when UI changes.
          </p>

          <div className="automation-buttons">
            <a href="#automation-projects" className="auto-btn-primary">
              <Bot size={20} />
              View AI Projects
              <ArrowRight size={18} />
            </a>
            <a href="/jeevan-resume.pdf" download className="auto-btn-outline">
              <Download size={18} />
              Resume
            </a>
            <a href="#automation-skills" className="auto-btn-ghost">
              <Cpu size={18} />
              AI Skills
            </a>
          </div>

          <div className="hero-stats" aria-label="Automation highlights">
            {heroStats.map((s) => (
              <div className="hero-stat" key={s.label} style={{ "--sc": s.color }}>
                <strong style={{ color: s.color }}>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <div className="tech-badges">
            {techBadges.map((t) => (
              <div key={t} className="tech-badge">{t}</div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: photo with automation HUD ────── */}
        <div className="ah-image-side">
          <div className="ah-image-wrap">

            {/* orbit rings — cyan / purple themed */}
            <div className="ah-ring ah-ring-1" />
            <div className="ah-ring ah-ring-2" />
            <div className="ah-ring ah-ring-3" />

            {/* pulsing glow behind photo */}
            <div className="ah-glow-pulse" />

            {/* circular photo */}
            <div className="ah-photo-ring">
              <img src="/assets/jeevan.jpg" alt="Jeevan Maher — Automation QA Engineer" />
              {/* scan line over photo */}
              <div className="ah-photo-scan" />
            </div>

            {/* ── HUD chips ── */}

            {/* top-right: terminal prompt */}
            <div className="ah-hud-chip ah-chip-tr">
              <Terminal size={12} />
              <span>scan_active()</span>
            </div>

            {/* top-left: online status */}
            <div className="ah-hud-chip ah-chip-tl">
              <span className="ah-status-dot" />
              <span>ONLINE</span>
            </div>

            {/* right: coverage badge */}
            <div className="ah-hud-badge ah-badge-right">
              <Activity size={13} />
              <span>99.8%</span>
              <small>Coverage</small>
            </div>

            {/* left: module count */}
            <div className="ah-hud-badge ah-badge-left">
              <CheckCircle2 size={13} />
              <span>16</span>
              <small>Modules</small>
            </div>

            {/* bottom: core panel */}
            <div className="ah-core-panel">
              <div className="ah-core-icon">
                <Bot size={18} />
              </div>
              <div className="ah-core-text">
                <span>AI QA CORE</span>
                <strong>Monitoring release health</strong>
              </div>
              <div className="ah-core-pulse" />
            </div>

            {/* floating particles */}
            <div className="ah-particle ah-p1" />
            <div className="ah-particle ah-p2" />
            <div className="ah-particle ah-p3" />
            <div className="ah-particle ah-p4" />
            <div className="ah-particle ah-p5" />
            <div className="ah-particle ah-p6" />

            {/* data stream dots on ring-1 */}
            <div className="ah-data-dot ah-dd1" />
            <div className="ah-data-dot ah-dd2" />
          </div>
        </div>

      </div>
    </section>
  );
}
