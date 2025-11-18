import React, { useState } from 'react';
import { Code, Database, Layers, Palette, Terminal, GitBranch, FileCode, Briefcase, Server, MessageSquare, Lightbulb, Users, Brain, Clock, Heart } from 'lucide-react';

const technicalSkills = [
   { icon: Code, name: "QA", color: "#E34F26" },
    { icon: Code, name: "Manual Testing", color: "#E34F26" },
        { icon: Database, name: "SQL", color: "#4479A1" },
  { icon: Database, name: "MongoDB", color: "#47A248" },
  { icon: Code, name: "JIRA", color: "#E34F26" },
  { icon: Briefcase, name: "MS-Office", color: "#D83B01" },
    { icon: Briefcase, name: "Excel", color: "#D83B01" },
  { icon: Layers, name: "Postman API ", color: "#61DAFB" },
  { icon: FileCode, name: "Java", color: "#007396" },
  { icon: Code, name: "HTML & CSS", color: "#E34F26" },
  { icon: Code, name: "JavaScript", color: "#F7DF1E" },
  { icon: Layers, name: "React.js", color: "#61DAFB" },

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
  { icon: Heart, name: "Positive Attitude & Work Ethic", color: "#ef4444" },
];

function Skills() {
  const [activeTab, setActiveTab] = useState("technical");

  return (
    <div style={styles.container}>
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
          >
            <Code size={20} />
            <span style={styles.tabText}>Technical Skills</span>
          </button>
          <button
            onClick={() => setActiveTab("soft")}
            style={{
              ...styles.tabButton,
              ...(activeTab === "soft" ? styles.tabButtonActive : {}),
            }}
          >
            <Users size={20} />
            <span style={styles.tabText}>Soft Skills</span>
          </button>
        </div>

        {/* Technical Skills */}
        {activeTab === "technical" && (
          <div style={styles.skillsSection}>
            <div style={styles.grid}>
              {technicalSkills.map((skill, index) => (
                <TechnicalSkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {activeTab === "soft" && (
          <div style={styles.skillsSection}>
            <div style={styles.softSkillsGrid}>
              {softSkills.map((skill, index) => (
                <SoftSkillCard key={index} skill={skill} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function TechnicalSkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div 
      style={{
        ...styles.card,
        ...(isHovered ? {
          transform: 'translateY(-8px)',
          boxShadow: `0 12px 24px ${skill.color}40`,
          borderColor: skill.color,
        } : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div 
        style={{
          ...styles.iconContainer,
          backgroundColor: `${skill.color}15`,
        }}
      >
        <Icon 
          size={24} 
          color={isHovered ? skill.color : '#495057'}
          style={{ transition: 'color 0.3s ease' }}
        />
      </div>

      {/* Skill Name */}
      <h3 style={styles.skillName}>{skill.name}</h3>
    </div>
  );
}

function SoftSkillCard({ skill }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;

  return (
    <div 
      style={{
        ...styles.softCard,
        ...(isHovered ? {
          transform: 'translateY(-6px)',
          boxShadow: `0 10px 20px ${skill.color}30`,
          borderColor: skill.color,
          backgroundColor: `${skill.color}05`,
        } : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        style={{
          ...styles.softIconContainer,
          backgroundColor: `${skill.color}15`,
        }}
      >
        <Icon 
          size={24} 
          color={skill.color}
          style={{ transition: 'all 0.3s ease' }}
        />
      </div>
      <h3 style={{...styles.softSkillName, color: isHovered ? skill.color : '#212529'}}>
        {skill.name}
      </h3>
    </div>
  );
}

const styles = {
  container: {
    padding: '80px 20px',
    background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
    minHeight: '100vh',
  },
  innerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '48px',
  },
  overline: {
    color: '#667eea',
    fontWeight: 700,
    fontSize: '0.9rem',
    letterSpacing: '0.15em',
    marginBottom: '8px',
  },
  title: {
    fontWeight: 800,
    fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.2,
  },
  subtitle: {
    color: '#6c757d',
    maxWidth: '650px',
    margin: '0 auto',
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
    lineHeight: 1.7,
  },
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '48px',
    flexWrap: 'wrap',
  },
  tabButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.95rem',
    fontWeight: 600,
    padding: '14px 28px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
    color: '#495057',
    border: '2px solid #e9ecef',
    borderRadius: '12px',
    outline: 'none',
  },
  tabButtonActive: {
    backgroundColor: '#667eea',
    color: 'white',
    border: '2px solid #667eea',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.3)',
  },
  tabText: {
    fontSize: '0.95rem',
  },
  skillsSection: {
    marginBottom: '64px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
    gap: '16px',
  },
  softSkillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '16px',
  },
  card: {
    padding: '20px 16px',
    borderRadius: '12px',
    background: 'white',
    border: '2px solid #f1f3f5',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '120px',
  },
  softCard: {
    padding: '20px 16px',
    borderRadius: '12px',
    background: 'white',
    border: '2px solid #f1f3f5',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    minHeight: '120px',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    transition: 'all 0.3s ease',
    marginBottom: '12px',
  },
  softIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    marginBottom: '12px',
  },
  skillName: {
    fontWeight: 700,
    color: '#212529',
    fontSize: '0.95rem',
    lineHeight: 1.3,
    margin: 0,
  },
  softSkillName: {
    fontWeight: 700,
    fontSize: '0.9rem',
    lineHeight: 1.3,
    transition: 'color 0.3s ease',
    margin: 0,
  },
};

export default Skills;