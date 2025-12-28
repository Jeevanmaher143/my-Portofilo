import React, { useState } from "react";
import {
  Code,
  Database,
  Layers,
  Palette,
  Terminal,
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
  { icon: Code, name: "HTML & CSS", color: "#E34F26" },
  { icon: Code, name: "JavaScript", color: "#F7DF1E" },
  { icon: Code, name: "MongoDB", color: "#47A248" },
  { icon: Code, name: "Express.js", color: "#000000" },
  { icon: Code, name: "React.js", color: "#61DAFB" },
  { icon: Code, name: "Node.js", color: "#339933" },
  { icon: Code, name: "QA", color: "#E34F26" },
  { icon: Code, name: "Manual Testing", color: "#E34F26" },
  { icon: Database, name: "SQL", color: "#4479A1" },
  { icon: Code, name: "JIRA", color: "#E34F26" },
  { icon: Briefcase, name: "MS-Office", color: "#D83B01" },
  { icon: Briefcase, name: "Excel", color: "#D83B01" },
  { icon: Layers, name: "Postman API", color: "#61DAFB" },
  { icon: FileCode, name: "Java", color: "#007396" },
  { icon: Terminal, name: "DSA", color: "#FF6B6B" },
  { icon: Palette, name: "UI/UX Design", color: "#FF6F61" },
  { icon: Server, name: "Operating Systems", color: "#0078D6" },
  { icon: GitBranch, name: "Git", color: "#F05032" },
  { icon: GitBranch, name: "GitHub", color: "#181717" },
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
    <div style={styles.container}>
      {/* Animated Background Grid Pattern */}
      <div style={styles.bgPattern} />
      
      {/* Floating Tech Icons */}
      <div style={styles.floatingIcon1}>
        <Code size={window.innerWidth < 640 ? 30 : 40} color="rgba(102, 126, 234, 0.15)" />
      </div>
      <div style={styles.floatingIcon2}>
        <Database size={window.innerWidth < 640 ? 25 : 35} color="rgba(59, 130, 246, 0.15)" />
      </div>
      <div style={styles.floatingIcon3}>
        <Terminal size={window.innerWidth < 640 ? 20 : 30} color="rgba(168, 85, 247, 0.15)" />
      </div>
      <div style={styles.floatingIcon4}>
        <GitBranch size={window.innerWidth < 640 ? 25 : 35} color="rgba(251, 191, 36, 0.15)" />
      </div>

      {/* Animated gradient orbs */}
      <div style={styles.gradientOrb1} />
      <div style={styles.gradientOrb2} />
      <div style={styles.gradientOrb3} />

      <div style={styles.innerContainer}>
        {/* Section Header */}
        <div style={styles.header}>
          <div style={styles.overline}>MY EXPERTISE</div>
          <h2 style={styles.title}>Skills & Abilities</h2>
          <p style={styles.subtitle}>
            A comprehensive blend of technical proficiency and interpersonal excellence
          </p>
        </div>

        {/* Tab Buttons */}
        <div style={styles.tabContainer}>
          <button
            onClick={() => setActiveTab("technical")}
            style={{
              ...styles.tabButton,
              ...(activeTab === "technical" ? styles.tabButtonActive : {}),
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "technical") {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "technical") {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            <Code size={20} />
            <span>Technical Skills</span>
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            style={{
              ...styles.tabButton,
              ...(activeTab === "soft" ? styles.tabButtonActive : {}),
            }}
            onMouseEnter={(e) => {
              if (activeTab !== "soft") {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.2)";
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== "soft") {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }
            }}
          >
            <Users size={20} />
            <span>Soft Skills</span>
          </button>
        </div>

        {/* Technical Skills */}
        {activeTab === "technical" && (
          <div style={{...styles.skillsSection, animation: "fadeInUp 0.6s ease-out"}}>
            <div style={styles.grid}>
              {technicalSkills.map((skill, index) => (
                <TechnicalSkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div style={{...styles.skillsSection, animation: "fadeInUp 0.6s ease-out"}}>
            <div style={styles.softSkillsGrid}>
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={index} skill={skill} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float-tech-icon {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(5deg); }
          50% { transform: translate(0, -40px) rotate(0deg); }
          75% { transform: translate(-20px, -20px) rotate(-5deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-25px, 25px); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @media (max-width: 640px) {
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.7) translateY(10px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          
          @keyframes slideInFromLeft {
            from { opacity: 0; transform: translateX(-30px) scale(0.9); }
            to { opacity: 1; transform: translateX(0) scale(1); }
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}

function TechnicalSkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      style={{
        ...styles.card,
        animation: `scaleIn 0.5s ease-out ${index * 0.05}s backwards`,
        ...(isHovered
          ? {
              transform: window.innerWidth < 640 
                ? "translateY(-6px) scale(1.02)" 
                : "translateY(-12px) scale(1.05)",
              boxShadow: `0 20px 40px ${skill.color}50, 0 0 60px ${skill.color}30`,
              borderColor: skill.color,
              background: `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, ${skill.color}15 100%)`,
            }
          : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: '16px',
          background: `linear-gradient(135deg, ${skill.color}20, transparent)`,
          animation: 'pulse-glow 2s ease-in-out infinite',
          zIndex: -1,
        }} />
      )}

      <div
        style={{
          ...styles.iconContainer,
          backgroundColor: `${skill.color}15`,
          transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Icon
          size={window.innerWidth < 640 ? 18 : 28}
          color={isHovered ? skill.color : "#cbd5e1"}
          style={{ 
            transition: "color 0.3s ease",
            filter: isHovered ? `drop-shadow(0 0 8px ${skill.color}80)` : 'none',
          }}
        />
      </div>

      <h3 style={{
        ...styles.skillName,
        color: isHovered ? skill.color : "#ffffff",
      }}>{skill.name}</h3>

      {isHovered && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '3px',
          background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)`,
          borderRadius: '2px',
          animation: 'pulse-glow 1.5s ease-in-out infinite',
        }} />
      )}
    </div>
  );
}

function SoftSkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div
      style={{
        ...styles.softCard,
        animation: `slideInFromLeft 0.6s ease-out ${index * 0.1}s backwards`,
        ...(isHovered
          ? {
              transform: window.innerWidth < 640 
                ? "translateY(-5px) scale(1.02)" 
                : "translateY(-10px) scale(1.03)",
              boxShadow: `0 20px 50px ${skill.color}40`,
              borderColor: skill.color,
              backgroundColor: `${skill.color}15`,
            }
          : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <>
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '40px',
            height: '40px',
            background: `linear-gradient(135deg, ${skill.color}30, transparent)`,
            borderTopRightRadius: '14px',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }} />
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '40px',
            height: '40px',
            background: `linear-gradient(-45deg, ${skill.color}30, transparent)`,
            borderBottomLeftRadius: '14px',
            animation: 'pulse-glow 2s ease-in-out infinite 1s',
          }} />
        </>
      )}

      <div
        style={{
          ...styles.softIconContainer,
          backgroundColor: `${skill.color}20`,
          transform: isHovered ? 'scale(1.15) rotate(-5deg)' : 'scale(1) rotate(0deg)',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: isHovered ? `0 8px 20px ${skill.color}40` : 'none',
        }}
      >
        <Icon
          size={window.innerWidth < 640 ? 20 : 28}
          color={skill.color}
          style={{ 
            transition: "all 0.3s ease",
            filter: isHovered ? `drop-shadow(0 0 10px ${skill.color}80)` : 'none',
          }}
        />
      </div>
      <h3
        style={{
          ...styles.softSkillName,
          color: isHovered ? skill.color : "#ffffff",
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      >
        {skill.name}
      </h3>
    </div>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  },
  bgPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px),
      linear-gradient(0deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: "50px 50px",
    pointerEvents: "none",
  },
  floatingIcon1: {
    position: "absolute",
    top: "10%",
    right: "8%",
    animation: "float-tech-icon 15s ease-in-out infinite",
    pointerEvents: "none",
    zIndex: 0,
  },
  floatingIcon2: {
    position: "absolute",
    top: "60%",
    left: "5%",
    animation: "float-tech-icon 18s ease-in-out infinite 2s",
    pointerEvents: "none",
    zIndex: 0,
  },
  floatingIcon3: {
    position: "absolute",
    bottom: "15%",
    right: "12%",
    animation: "float-tech-icon 12s ease-in-out infinite 4s",
    pointerEvents: "none",
    zIndex: 0,
  },
  floatingIcon4: {
    position: "absolute",
    top: "35%",
    right: "20%",
    animation: "float-tech-icon 20s ease-in-out infinite 6s",
    pointerEvents: "none",
    zIndex: 0,
  },
  gradientOrb1: {
    position: "absolute",
    top: "-10%",
    right: "-5%",
    width: window.innerWidth < 640 ? "300px" : "500px",
    height: window.innerWidth < 640 ? "300px" : "500px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%)",
    animation: "float-slow 20s ease-in-out infinite",
    pointerEvents: "none",
  },
  gradientOrb2: {
    position: "absolute",
    bottom: "-10%",
    left: "-5%",
    width: window.innerWidth < 640 ? "250px" : "450px",
    height: window.innerWidth < 640 ? "250px" : "450px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    animation: "float-reverse 18s ease-in-out infinite",
    pointerEvents: "none",
  },
  gradientOrb3: {
    position: "absolute",
    top: "40%",
    left: "30%",
    width: window.innerWidth < 640 ? "200px" : "350px",
    height: window.innerWidth < 640 ? "200px" : "350px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%)",
    animation: "float-slow 16s ease-in-out infinite 3s",
    pointerEvents: "none",
  },
  innerContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  header: {
    textAlign: "center",
    marginBottom: "48px",
    animation: "fadeInUp 0.8s ease-out",
  },
  overline: {
    color: "#fbbf24",
    fontWeight: 700,
    fontSize: window.innerWidth < 640 ? "0.8rem" : "0.9rem",
    letterSpacing: "0.2em",
    marginBottom: "12px",
    textTransform: "uppercase",
    textShadow: "0 0 20px rgba(251, 191, 36, 0.5)",
    animation: "pulse-glow 2s ease-in-out infinite",
  },
  title: {
    fontWeight: 800,
    fontSize: window.innerWidth < 480 ? "2rem" : window.innerWidth < 768 ? "2.5rem" : "3rem",
    marginBottom: "16px",
    background: "linear-gradient(135deg, #ffffff 0%, #fbbf24 50%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    lineHeight: 1.2,
    backgroundSize: "200% auto",
    animation: "gradient-shift 3s ease infinite",
  },
  subtitle: {
    color: "#cbd5e1",
    maxWidth: "650px",
    margin: "0 auto",
    fontSize: window.innerWidth < 640 ? "0.95rem" : "1.05rem",
    lineHeight: 1.7,
  },
  tabContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
    marginBottom: "48px",
    flexWrap: "wrap",
    animation: "fadeInUp 0.8s ease-out 0.2s backwards",
  },
  tabButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: window.innerWidth < 640 ? "0.85rem" : "0.95rem",
    fontWeight: 600,
    padding: window.innerWidth < 640 ? "12px 20px" : "14px 28px",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    color: "#cbd5e1",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    outline: "none",
  },
  tabButtonActive: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "2px solid transparent",
    transform: "translateY(-2px)",
    boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4), 0 0 60px rgba(102, 126, 234, 0.2)",
  },
  skillsSection: {
    marginBottom: "64px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: window.innerWidth < 640 ? "repeat(3, 1fr)" : window.innerWidth < 768 ? "repeat(4, 1fr)" : "repeat(auto-fit, minmax(140px, 1fr))",
    gap: window.innerWidth < 640 ? "8px" : "16px",
  },
  softSkillsGrid: {
    display: "grid",
    gridTemplateColumns: window.innerWidth < 640 ? "repeat(2, 1fr)" : window.innerWidth < 1024 ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
    gap: window.innerWidth < 640 ? "10px" : "20px",
  },
  card: {
    padding: window.innerWidth < 640 ? "10px 6px" : "24px 16px",
    borderRadius: window.innerWidth < 640 ? "12px" : "16px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: window.innerWidth < 640 ? "75px" : "130px",
    position: "relative",
    overflow: "hidden",
  },
  softCard: {
    padding: window.innerWidth < 640 ? "12px 8px" : "28px 20px",
    borderRadius: window.innerWidth < 640 ? "12px" : "16px",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(10px)",
    border: "2px solid rgba(255, 255, 255, 0.1)",
    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    minHeight: window.innerWidth < 640 ? "90px" : "140px",
    position: "relative",
    overflow: "hidden",
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: window.innerWidth < 640 ? "32px" : "52px",
    height: window.innerWidth < 640 ? "32px" : "52px",
    borderRadius: window.innerWidth < 640 ? "8px" : "12px",
    marginBottom: window.innerWidth < 640 ? "6px" : "12px",
  },
  softIconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: window.innerWidth < 640 ? "36px" : "56px",
    height: window.innerWidth < 640 ? "36px" : "56px",
    borderRadius: window.innerWidth < 640 ? "10px" : "14px",
    marginBottom: window.innerWidth < 640 ? "8px" : "14px",
  },
  skillName: {
    fontWeight: 700,
    fontSize: window.innerWidth < 640 ? "0.7rem" : "0.95rem",
    lineHeight: 1.2,
    margin: 0,
    color: "#ffffff",
    transition: "all 0.3s ease",
  },
  softSkillName: {
    fontWeight: 700,
    fontSize: window.innerWidth < 640 ? "0.75rem" : "1rem",
    lineHeight: 1.2,
    transition: "all 0.3s ease",
    margin: 0,
    color: "#ffffff",
  },
};

export default Skills;