import React from "react";
import {
  Bot,
  Building2,
  CalendarDays,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import "./AutomationExperience.css";

const experiences = [
  {
    company: "Devant Tech",
    role: "Software Tester",
    period: "Feb 2026 - Present",
    status: "Current",
    icon: "DT",
    color: "#67e8f9",
    summary:
      "Working on quality checks, regression testing, bug tracking, and automation support for stable product releases.",
    highlights: [
      "Identifying, reporting, and tracking defects across web and mobile platforms",
      "Assigning bugs to developers and re-testing fixes after deployment",
      "Performing regression checks to keep releases stable",
      "Supporting automation testing tasks with repeatable QA workflows",
    ],
    tags: ["Manual Testing", "Regression", "Bug Tracking", "Automation Testing", "ClickUp", "Excel"],
  },
  {
    company: "Farmseasy Tech Solutions Pvt. Ltd.",
    role: "QA Tester",
    period: "Oct 2025 - Feb 2026",
    status: "Past",
    icon: "FT",
    color: "#34d399",
    summary:
      "Handled test cases, Jira bug lifecycle, end-to-end checks, and production readiness validation.",
    highlights: [
      "Executed test cases and identified critical product defects",
      "Managed bug lifecycle using Jira from logging to closure",
      "Performed end-to-end manual testing across functional modules",
      "Validated application quality before production deployment",
    ],
    tags: ["Jira", "Manual Testing", "Test Cases", "Deployment QA", "Excel"],
  },
];

function AutomationExperience() {
  return (
    <section className="auto-exp-section" id="automation-experience">
      <div className="auto-exp-grid-bg" />

      <div className="auto-exp-container">
        <div className="auto-exp-header">
          <div className="auto-exp-kicker">
            <Sparkles size={15} />
            Experience
          </div>
          <h2>
            Company <span>QA Journey</span>
          </h2>
        </div>

        <div className="auto-exp-list">
          {experiences.map((experience, index) => (
            <article
              className="auto-exp-card"
              key={experience.company}
              style={{
                "--auto-exp-color": experience.color,
                animationDelay: `${index * 0.12}s`,
              }}
            >
              <div className="auto-exp-top-line" />

              <div className="auto-exp-card-head">
                <div className="auto-exp-avatar">{experience.icon}</div>
                <div className="auto-exp-title-block">
                  <div className="auto-exp-company-row">
                    <h3>{experience.company}</h3>
                    <span className={`auto-exp-status ${experience.status.toLowerCase()}`}>
                      {experience.status === "Current" && <span />}
                      {experience.status}
                    </span>
                  </div>

                  <div className="auto-exp-meta-row">
                    <span>
                      <Building2 size={15} />
                      {experience.role}
                    </span>
                    <span>
                      <CalendarDays size={15} />
                      {experience.period}
                    </span>
                  </div>
                </div>
              </div>

              <p className="auto-exp-summary">{experience.summary}</p>

              <ul className="auto-exp-highlights">
                {experience.highlights.map((item) => (
                  <li key={item}>
                    <CheckCircle2 size={15} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="auto-exp-tags">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="auto-exp-note">
          <Bot size={17} />
          <span>Experience aligned with automation QA, release confidence, and practical testing workflows.</span>
        </div>
      </div>
    </section>
  );
}

export default AutomationExperience;
