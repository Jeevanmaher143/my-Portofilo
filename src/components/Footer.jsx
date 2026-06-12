import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ArrowRight,
  ArrowUp,
  Bot,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  Github,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const footerThemes = {
  manual: {
    className: "footer-manual",
    accent: "#fbbf24",
    accentSoft: "#f59e0b",
    accentAlt: "#3b82f6",
    background:
      "linear-gradient(135deg, #020617 0%, #0f172a 54%, #111827 100%)",
    kicker: "Manual QA Theme",
    title: "Jeevan Maher",
    highlight: "Quality-focused tester",
    description:
      "Manual Testing Engineer passionate about software quality, bug tracking, UI testing, and test case management.",
    statusLabel: "Testing focus",
    statusValue: "Clear bugs. Clean releases.",
    statusText: "Friendly footer UI with fast links and direct contact.",
    highlights: [
      {
        icon: ShieldCheck,
        label: "Quality Review",
        value: "UI, regression, and release checks",
      },
      {
        icon: Brain,
        label: "Test Thinking",
        value: "Scenarios, edge cases, and bug clarity",
      },
      {
        icon: BriefcaseBusiness,
        label: "Availability",
        value: "Open for freelance QA work",
      },
    ],
  },
  automation: {
    className: "footer-automation",
    accent: "#67e8f9",
    accentSoft: "#818cf8",
    accentAlt: "#34d399",
    background:
      "linear-gradient(135deg, #020617 0%, #07111f 48%, #08111f 100%)",
    kicker: "Automation AI Theme",
    title: "Automation AI QA",
    highlight: "Smart testing systems",
    description:
      "Automation Testing Engineer focused on AI-assisted test design, Selenium, Playwright, Cypress, API checks, and CI/CD quality gates.",
    statusLabel: "AI automation mode",
    statusValue: "Self-healing checks online",
    statusText: "Simple UI, clear links, and automation-friendly contact flow.",
    highlights: [
      {
        icon: Bot,
        label: "AI Workflow",
        value: "Test cases, scripts, and bug signals",
      },
      {
        icon: Workflow,
        label: "CI/CD Flow",
        value: "PR triggers and release decisions",
      },
      {
        icon: ShieldCheck,
        label: "Quality Gate",
        value: "API, UI, and visual confidence",
      },
    ],
  },
};

const quickLinkSets = {
  manual: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
  automation: [
    { name: "AI Skills", href: "#automation-skills" },
    { name: "Frameworks", href: "#frameworks" },
    { name: "Experience", href: "#automation-experience" },
    { name: "AI Projects", href: "#automation-projects" },
    { name: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  {
    icon: Github,
    url: "https://github.com/Jeevanmaher143",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    url: "https://linkedin.com/in/jeevanmaher0102",
    label: "LinkedIn",
  },
  {
    icon: Instagram,
    url: "https://www.instagram.com/jeevanmaher_143",
    label: "Instagram",
  },
  {
    icon: Mail,
    url: "mailto:jeevanmaherji@gmail.com",
    label: "Email",
  },
];

const contactItems = [
  {
    icon: Mail,
    label: "Email",
    value: "jeevanmaherji@gmail.com",
    href: "mailto:jeevanmaherji@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Maharashtra, India",
    href: "#contact",
  },
  {
    icon: BriefcaseBusiness,
    label: "Work",
    value: "Available for freelance work",
    href: "#contact",
  },
];

function Footer({ activeTab }) {
  const footerMode = activeTab === "automation" ? "automation" : "manual";
  const footerTheme = footerThemes[footerMode];
  const quickLinks = quickLinkSets[footerMode];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      component="footer"
      className={`footer-section ${footerTheme.className}`}
      sx={{
        "--footer-accent": footerTheme.accent,
        "--footer-accent-soft": footerTheme.accentSoft,
        "--footer-accent-alt": footerTheme.accentAlt,
        background: footerTheme.background,
      }}
    >
      <div className="footer-grid-pattern"></div>
      <div className="footer-top-line"></div>

      <Container maxWidth="lg" className="footer-shell">
        <Box className="footer-theme-band">
          <Box className="footer-theme-copy-block">
            <div className="footer-theme-pill">
              <Sparkles size={15} />
              {footerTheme.kicker}
            </div>

            <Typography component="h2" className="footer-theme-title">
              {footerTheme.title}
              <span>{footerTheme.highlight}</span>
            </Typography>

            <Typography className="footer-theme-copy">
              {footerTheme.description}
            </Typography>
          </Box>

          <Box className="footer-status-card">
            <span>{footerTheme.statusLabel}</span>
            <strong>{footerTheme.statusValue}</strong>
            <div>
              <CheckCircle2 size={16} />
              {footerTheme.statusText}
            </div>
          </Box>
        </Box>

        <Box className="footer-highlight-grid">
          {footerTheme.highlights.map((item) => {
            const HighlightIcon = item.icon;

            return (
              <article className="footer-highlight-card" key={item.label}>
                <div className="footer-highlight-icon">
                  <HighlightIcon size={20} />
                </div>
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              </article>
            );
          })}
        </Box>

        <Box className="footer-main">
          <Grid container spacing={3.5}>
            <Grid item xs={12} md={4}>
              <Typography component="h3" className="footer-brand">
                Jeevan Maher
              </Typography>

              <Typography className="footer-description">
                {footerMode === "automation"
                  ? "Building practical automation systems that make QA faster, smarter, and easier to trust."
                  : "Helping teams ship cleaner software through careful testing, strong bug reports, and user-focused quality checks."}
              </Typography>

              <Box className="footer-social-container">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;

                  return (
                    <Tooltip title={social.label} key={social.label}>
                      <IconButton
                        className="footer-social-btn"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                      >
                        <SocialIcon size={20} />
                      </IconButton>
                    </Tooltip>
                  );
                })}
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography component="h3" className="footer-col-title">
                Quick Links
              </Typography>

              <nav className="footer-links-container" aria-label="Footer links">
                {quickLinks.map((link) => (
                  <a className="footer-link" href={link.href} key={link.name}>
                    <ArrowRight size={14} />
                    <span>{link.name}</span>
                  </a>
                ))}
              </nav>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Typography component="h3" className="footer-col-title">
                Get In Touch
              </Typography>

              <Box className="footer-contact-container">
                {contactItems.map((item) => {
                  const ContactIcon = item.icon;

                  return (
                    <a className="footer-contact-item" href={item.href} key={item.label}>
                      <ContactIcon size={18} />
                      <span>
                        <strong>{item.label}</strong>
                        {item.value}
                      </span>
                    </a>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Divider className="footer-divider" />

        <Box className="footer-bottom">
          <Typography className="footer-copyright">
            Copyright {new Date().getFullYear()} Jeevan Maher. Built with
            <Heart size={16} fill="#ff6b6b" color="#ff6b6b" />
            for quality engineering.
          </Typography>

          <IconButton
            className="footer-scroll-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
