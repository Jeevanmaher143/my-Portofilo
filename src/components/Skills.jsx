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
  // Core Testing
    { icon: FileCode, name: "Automation Testing", color: "#f59e0b" },

  { icon: FileCode, name: "Manual Testing", color: "#f59e0b" },
  { icon: FileCode, name: "Functional Testing", color: "#3b82f6" },
  { icon: FileCode, name: "Regression Testing", color: "#8b5cf6" },
  { icon: FileCode, name: "Smoke Testing", color: "#10b981" },
  { icon: FileCode, name: "Sanity Testing", color: "#ef4444" },
  { icon: FileCode, name: "Black Box Testing", color: "#fbbf24" },
  { icon: FileCode, name: "White Box Testing", color: "#6366f1" },

  // Process Knowledge
  { icon: Layers, name: "SDLC", color: "#0ea5e9" },
  { icon: Layers, name: "STLC", color: "#14b8a6" },
  { icon: FileCode, name: "Test Case Writing", color: "#f97316" },
  { icon: FileCode, name: "Bug Reporting", color: "#dc2626" },

  // Tools
  { icon: Briefcase, name: "JIRA", color: "#0052CC" },
  { icon: Briefcase, name: "ClikUp", color: "#0052CC" },
  { icon: Layers, name: "Postman (API Testing)", color: "#FF6C37" },
  { icon: Database, name: "SQL (Database Testing)", color: "#4479A1" },
  { icon: GitBranch, name: "Git & GitHub", color: "#f05032" },

  // Supporting Technical Skills
  { icon: Code, name: "HTML & CSS", color: "#E34F26" },
  { icon: Code, name: "MERN STACK", color: "#83f30b" },
  { icon: Code, name: "JavaScript", color: "#F7DF1E" },
  { icon: FileCode, name: "Java (Basic)", color: "#007396" },
  { icon: Server, name: "Operating Systems", color: "#0078D6" },
];

const softSkills = [
  { icon: MessageSquare, name: "Communication", color: "#667eea" },
  { icon: Lightbulb, name: "Problem Solving", color: "#fbbf24" },
  { icon: Users, name: "Team Work", color: "#10b981" },
  { icon: Brain, name: "Critical Thinking", color: "#8b5cf6" },
  { icon: Clock, name: "Time Management", color: "#f59e0b" },
  { icon: Heart, name: "Positive Attitude", color: "#ef4444" },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div className="skills-container">
      <div className="skills-inner">
        {/* Section Header */}
        <div className="skills-header">
          <div className="skills-overline">MY EXPERTISE</div>
          <h2 className="skills-title">Skills & Abilities</h2>
          <p className="skills-subtitle">
            A comprehensive blend of technical proficiency and interpersonal excellence
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="skills-tabs">
          <button
            onClick={() => setActiveTab("technical")}
            className={`tab-button ${activeTab === "technical" ? "active" : ""}`}
          >
            <Code size={18} />
            <span>Technical Skills</span>
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            className={`tab-button ${activeTab === "soft" ? "active" : ""}`}
          >
            <Users size={18} />
            <span>Soft Skills</span>
          </button>
        </div>

        {/* Technical Skills */}
        {activeTab === "technical" && (
          <div className="skills-section">
            <div className="skills-grid">
              {technicalSkills.map((skill, index) => (
                <TechnicalSkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div className="skills-section">
            <div className="soft-skills-grid">
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .skills-container {
          padding: 60px 16px;
          background: linear-gradient(to bottom, #0f172a, #1e293b);
          min-height: 100vh;
        }

        .skills-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Header Styles */
        .skills-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .skills-overline {
          color: #fbbf24;
          font-weight: 700;
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        .skills-title {
          font-weight: 800;
          font-size: 2rem;
          margin-bottom: 12px;
          color: #ffffff;
          line-height: 1.2;
        }

        .skills-subtitle {
          color: #cbd5e1;
          max-width: 600px;
          margin: 0 auto;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* Tab Styles */
        .skills-tabs {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 40px;
          flex-wrap: wrap;
        }

        .tab-button {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 12px 24px;
          cursor: pointer;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
          color: #cbd5e1;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          outline: none;
        }

        .tab-button:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .tab-button.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
        }

        /* Grid Layouts */
        .skills-section {
          margin-bottom: 40px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          gap: 12px;
        }

        .soft-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 16px;
        }

        /* Technical Skill Card */
        .tech-card {
          padding: 20px 12px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 110px;
        }

        .tech-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--skill-color);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .tech-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 10px;
          margin-bottom: 10px;
          background: var(--skill-color-light);
        }

        .tech-card:hover .tech-icon-container {
          background: var(--skill-color-medium);
        }

        .tech-skill-name {
          font-weight: 700;
          font-size: 0.8rem;
          line-height: 1.3;
          margin: 0;
          color: #ffffff;
        }

        /* Soft Skill Card */
        .soft-card {
          padding: 24px 16px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 120px;
        }

        .soft-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--skill-color);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .soft-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          border-radius: 12px;
          margin-bottom: 12px;
          background: var(--skill-color-light);
        }

        .soft-card:hover .soft-icon-container {
          background: var(--skill-color-medium);
        }

        .soft-skill-name {
          font-weight: 700;
          font-size: 0.9rem;
          line-height: 1.3;
          margin: 0;
          color: #ffffff;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .skills-container {
            padding: 40px 12px;
          }

          .skills-title {
            font-size: 1.75rem;
          }

          .skills-subtitle {
            font-size: 0.875rem;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            gap: 10px;
          }

          .soft-skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
            gap: 12px;
          }

          .tech-card {
            padding: 16px 8px;
            min-height: 90px;
          }

          .soft-card {
            padding: 20px 12px;
            min-height: 100px;
          }

          .tech-icon-container {
            width: 40px;
            height: 40px;
          }

          .soft-icon-container {
            width: 44px;
            height: 44px;
          }

          .tech-skill-name {
            font-size: 0.7rem;
          }

          .soft-skill-name {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .skills-title {
            font-size: 1.5rem;
          }

          .skills-overline {
            font-size: 0.7rem;
          }

          .tab-button {
            padding: 10px 16px;
            font-size: 0.8rem;
          }

          .skills-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 8px;
          }

          .soft-skills-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .tech-card {
            padding: 12px 6px;
            min-height: 80px;
          }

          .tech-icon-container {
            width: 36px;
            height: 36px;
          }

          .tech-skill-name {
            font-size: 0.65rem;
          }
        }
      `}</style>
    </div>
  );
}

function TechnicalSkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="tech-card"
      style={{
        '--skill-color': skill.color,
        '--skill-color-light': `${skill.color}15`,
        '--skill-color-medium': `${skill.color}25`,
      }}
    >
      <div className="tech-icon-container">
        <Icon size={24} color={skill.color} />
      </div>
      <h3 className="tech-skill-name">{skill.name}</h3>
    </div>
  );
}

function SoftSkillCard({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="soft-card"
      style={{
        '--skill-color': skill.color,
        '--skill-color-light': `${skill.color}15`,
        '--skill-color-medium': `${skill.color}25`,
      }}
    >
      <div className="soft-icon-container">
        <Icon size={26} color={skill.color} />
      </div>
      <h3 className="soft-skill-name">{skill.name}</h3>
    </div>
  );
}

export default Skills;