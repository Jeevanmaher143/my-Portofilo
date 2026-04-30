import React, { useEffect, useRef } from "react";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    company: "Devant Tech",
    role: "Software Tester",
    period: "Feb 2026 - Present",
    status: "current",
    icon: "DT",
    color: "blue",
    highlights: [
      "Identifying, reporting, and tracking defects across web and mobile platforms",
      "Assigning bugs to developers and rigorously re-testing fixes post-deployment",
      "Performing regression testing to ensure product stability across releases",
      "Collaborating cross-functionally with developers for stable, quality-assured releases",
    ],
    tags: ["Manual Testing", "Regression", "Bug Tracking", "Automation Testing","ClickUp","Excel"],
  },
  {
    id: 2,
    company: "Farmseasy Tech Solutions Pvt. Ltd.",
    role: "QA Tester",
    period: "Oct 2025 – Feb 2026",
    status: "past",
    icon: "FT",
    color: "teal",
    highlights: [
      "Executed comprehensive test cases and systematically identified critical defects",
      "Managed bug lifecycle using Jira — from logging to verification and closure",
      "Performed end-to-end manual testing across functional modules",
      "Ensured application quality and readiness before each production deployment",
      
    ],
    tags: ["Jira", "Manual Testing", "Test Cases", "Deployment QA","Excel"],
  },
];

function Experience() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="exp-section" id="experience" ref={sectionRef}>
      
      {/* Background */}
      <div className="exp-bg-grid" />
      <div className="exp-bg-orb orb-1" />
      <div className="exp-bg-orb orb-2" />

      <div className="exp-container">

        {/* Header */}
        <div className="exp-header animate-on-scroll">
          <span className="exp-eyebrow">Career Journey</span>
          <h2 className="exp-title">Work Experience</h2>
          <p className="exp-subtitle">
            Building quality-driven software through testing, defect tracking,
            and strong collaboration with development teams.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="exp-timeline">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`exp-card animate-on-scroll exp-card--${exp.color}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >

              <div className="exp-card-bar" />

              {exp.status === "current" && (
                <span className="exp-badge-live">
                  <span className="exp-badge-dot" />
                  Currently Working
                </span>
              )}

              <div className="exp-card-header">
                <div className="exp-avatar">{exp.icon}</div>
                <div className="exp-meta">
                  <h3 className="exp-company">{exp.company}</h3>
                  <div className="exp-role-row">
                    <span className="exp-role">{exp.role}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                </div>
              </div>

              <div className="exp-divider" />

              <ul className="exp-highlights">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="exp-highlight-item">
                    <span className="exp-bullet" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="exp-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="exp-tag">{tag}</span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;