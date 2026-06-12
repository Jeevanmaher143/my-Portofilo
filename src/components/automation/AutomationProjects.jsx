import React from "react";
import {
  Bot,
  Brain,
  Database,
  ExternalLink,
  Github,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import "./Automationproject.css";

const projects = [
  {
    title: "AI Test Intelligence Suite",
    eyebrow: "AI Test Design",
    description:
      "An AI assisted QA workflow that converts requirements into test scenarios, negative paths, bug risk notes, and reusable automation steps for web and API modules.",
    image: "/assets/automation/ai-test-intelligence.png",
    icon: Brain,
    color: "#67e8f9",
    tags: ["AI Test Cases", "Risk Scoring", "Bug Triage", "Test Data"],
    metrics: ["Smart scenarios", "Risk heatmap", "Bug signals"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
  },
  {
    title: "Visual Regression AI Lab",
    eyebrow: "Computer Vision QA",
    description:
      "A Playwright style visual testing setup for screenshot comparison, responsive layout drift, UI anomaly checks, and accessibility-focused review signals.",
    image: "/assets/automation/visual-regression-ai.png",
    icon: ShieldCheck,
    color: "#34d399",
    tags: ["Playwright", "Visual AI", "A11y Checks", "Screenshots"],
    metrics: ["Pixel drift", "UI anomalies", "Responsive checks"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
  },
  {
    title: "Self-Healing Automation Framework",
    eyebrow: "Smart Web Automation",
    description:
      "A resilient Selenium and Playwright framework concept with locator fallback, retry strategy, flaky test tracking, page objects, and clear run reports.",
    image: "/assets/automation/self-healing-framework.png",
    icon: Bot,
    color: "#c084fc",
    tags: ["Selenium", "Playwright", "Locator Healing", "Reports"],
    metrics: ["Less flakiness", "Auto recovery", "Stable flows"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
  },
  {
    title: "Smart API Quality Gate",
    eyebrow: "CI/CD Automation",
    description:
      "A release gate that runs API regression, contract checks, auth validation, smoke tests, and quality scoring before a build moves forward.",
    image: "/assets/automation/quality-gate-ai.png",
    icon: Workflow,
    color: "#fbbf24",
    tags: ["Postman", "REST Assured", "GitHub Actions", "CI/CD"],
    metrics: ["API checks", "Build gate", "Release signal"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
  },
];

const projectStats = [
  { value: "4", label: "AI Project Areas" },
  { value: "360", label: "Quality View" },
  { value: "CI", label: "Ready Pipelines" },
];

function AutomationProjectCard({ project, index }) {
  const Icon = project.icon;

  return (
    <article
      className="automation-project-card"
      style={{
        "--project-color": project.color,
        animationDelay: `${index * 0.12}s`,
      }}
    >
      <div className="automation-project-image">
        <img src={project.image} alt={`${project.title} AI automation visual`} />
        <div className="project-image-overlay" />
        <div className="project-eye-chip">
          <Icon size={17} />
          {project.eyebrow}
        </div>
      </div>

      <div className="automation-project-body">
        <div className="automation-project-title-row">
          <div className="automation-project-icon">
            <Icon size={22} />
          </div>
          <div>
            <span className="automation-project-number">
              {(index + 1).toString().padStart(2, "0")}
            </span>
            <h3>{project.title}</h3>
          </div>
        </div>

        <p>{project.description}</p>

        <div className="automation-project-tags">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="automation-project-metrics">
          {project.metrics.map((metric) => (
            <div key={metric}>{metric}</div>
          ))}
        </div>

        <div className="automation-project-actions">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} />
              Live Demo
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
            <Github size={15} />
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

function AutomationProjects() {
  return (
    <section className="automation-projects-section" id="automation-projects">
      <div className="automation-projects-bg" />
      <div className="automation-projects-container">
        <div className="automation-projects-header">
          <div className="automation-projects-badge">
            <Database size={15} />
            AI Automation Projects
          </div>

          <h2>
            Practical <span>AI QA Systems</span>
          </h2>
          <p>
            Project ideas and portfolio-ready case studies that show how AI can
            improve automation testing, test design, defect intelligence, and
            release confidence.
          </p>

          <div className="automation-project-stats">
            {projectStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="automation-project-grid">
          {projects.map((project, index) => (
            <AutomationProjectCard
              project={project}
              index={index}
              key={project.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AutomationProjects;
