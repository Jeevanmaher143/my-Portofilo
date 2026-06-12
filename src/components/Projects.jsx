import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
} from "@mui/material";
import { Github, ExternalLink, Cloud, Users, Heart, Building2 } from "lucide-react";
import "./project.css";

const projects = [
  {
    title: "Gram Panchayat Website",
    description:
      "Developed and tested a full-stack Gram Panchayat Management Website to digitize village administration. The platform provides online access to notices, government schemes, village services, development projects, and a photo gallery. Includes an admin dashboard with secure content management. Conducted comprehensive testing with 18 test scenarios covering 100+ test cases including functional, UI/UX, security, API testing, and cross-browser compatibility. Built using the MERN stack, deployed on Render & Vercel with Cloudinary integration.",
    icon: <Building2 size={48} />,
    color: "#8B5CF6",
    tags: ["MERN Stack", "Testing (100+ Cases)", "Render & Vercel", "Domain.in", "Cloudinary"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: "https://www.gproshankheda.in/",
    num: "01",
  },
  {
    title: "Weather App",
    description:
      "Developed an interactive and responsive weather application that shows real-time weather updates for any city using the OpenWeather API. Features a modern design built with React and Material UI, including smooth transitions and a two-column layout. Displays temperature, humidity, wind speed, and visibility with error handling and loading states.",
    icon: <Cloud size={48} />,
    color: "#3B82F6",
    tags: ["React", "Material UI", "OpenWeather API", "Responsive"],
    githubUrl: "https://github.com/Jeevanmaher143/weather-app",
    liveUrl: null,
    num: "02",
  },
  {
    title: "Unity Share",
    description:
      "Developed a web-based community resource sharing platform that allows users to share, borrow, or donate resources. Helps people connect and make better use of available resources through an easy-to-use interface. Users can post available items, search for needed ones, and manage listings through a personal dashboard with real-time updates.",
    icon: <Users size={48} />,
    color: "#10B981",
    tags: ["MERN Stack", "MongoDB", "Dashboard", "Community"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
    num: "03",
  },
  {
    title: "ResQHome – Pet Adoption",
    description:
      "Created a comprehensive pet adoption platform connecting animal shelters with potential adopters. Features include pet profiles with detailed information, advanced search filters, adoption application system, and user authentication. Built with focus on user experience and responsive design to help pets find their forever homes.",
    icon: <Heart size={48} />,
    color: "#EC4899",
    tags: ["React.js", "Node.js", "Express", "Authentication"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
    num: "04",
  },
];

/* Particle component */
function Particles() {
  return (
    <>
      {Array.from({ length: 18 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const colors = ["rgba(139,92,246,0.6)", "rgba(59,130,246,0.5)", "rgba(16,185,129,0.5)", "rgba(236,72,153,0.4)", "rgba(251,191,36,0.5)"];
        const color = colors[i % colors.length];
        const left = `${Math.random() * 100}%`;
        const delay = `${Math.random() * 12}s`;
        const duration = `${10 + Math.random() * 18}s`;
        const drift = `${(Math.random() - 0.5) * 80}px`;
        return (
          <span
            key={i}
            className="particle"
            style={{
              width: size,
              height: size,
              background: color,
              left,
              bottom: `-${size}px`,
              animationDuration: duration,
              animationDelay: delay,
              "--drift-x": drift,
              boxShadow: `0 0 ${size * 3}px ${color}`,
            }}
          />
        );
      })}
    </>
  );
}

/* Circuit SVG decoration */
function CircuitLines() {
  return (
    <div className="circuit-lines" aria-hidden="true">
      <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        {/* Horizontal traces */}
        <g stroke="rgba(139,92,246,0.08)" fill="none" strokeWidth="1">
          <path d="M0 200 H300 V140 H480 V200 H700" />
          <path d="M800 200 H1000 V260 H1200" />
          <path d="M0 580 H200 V620 H450 V580 H680" />
          <path d="M720 580 H900 V520 H1200" />
          <path d="M100 400 H350 V360 H500" />
          <path d="M700 400 H950 V440 H1100" />
        </g>
        {/* Dots at joints */}
        {[
          [300,200],[480,140],[480,200],[700,200],
          [1000,200],[1000,260],
          [200,580],[450,620],[450,580],[680,580],
          [900,580],[900,520],
          [350,400],[350,360],[500,360],
          [950,400],[950,440],
        ].map(([cx,cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="2.5" fill="rgba(139,92,246,0.18)" />
        ))}
        {/* Animated pulse dot */}
        <circle r="4" fill="rgba(139,92,246,0.6)">
          <animateMotion dur="8s" repeatCount="indefinite" path="M0 200 H300 V140 H480 V200 H700" />
        </circle>
        <circle r="3" fill="rgba(59,130,246,0.6)">
          <animateMotion dur="11s" repeatCount="indefinite" path="M0 580 H200 V620 H450 V580 H680" />
        </circle>
        <circle r="3" fill="rgba(16,185,129,0.6)">
          <animateMotion dur="9s" repeatCount="indefinite" begin="3s" path="M700 400 H950 V440 H1100" />
        </circle>
      </svg>
    </div>
  );
}

function Projects() {
  return (
    <Box
      id="projects"
      className="projects-section"
      sx={{
        py: { xs: 7, md: 11 },
        background: "linear-gradient(180deg, #060b18 0%, #0a1220 40%, #0f172a 70%, #1a2235 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background layers */}
      <span className="bg-orb bg-orb-1" />
      <span className="bg-orb bg-orb-2" />
      <span className="bg-orb bg-orb-3" />
      <span className="bg-orb bg-orb-4" />
      <Particles />
      <CircuitLines />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* ─── Header ─── */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }} className="projects-header">
          {/* Badge */}
          

          {/* Title */}
          <Typography
            variant="h2"
            className="projects-title"
            sx={{
              fontWeight: 800,
              mb: 2,
              mt: 1,
              fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
              fontFamily: "var(--font-display) !important",
            }}
          >
            My{" "}
            <span className="projects-title-highlight">Projects</span>
          </Typography>

          {/* Divider */}
          <div className="section-divider" />
          {/* Stats bar */}
          
        </Box>

        {/* ─── 2×2 Grid ─── */}
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-grid-item"
              style={{ animationDelay: `${0.15 + index * 0.12}s` }}
            >
              <Card
                elevation={0}
                className="project-card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "22px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  background:
                    "linear-gradient(145deg, rgba(15,23,42,0.75) 0%, rgba(10,18,36,0.85) 100%)",
                  backdropFilter: "blur(20px)",
                  overflow: "hidden",
                  position: "relative",
                  transition:
                    "transform 0.45s cubic-bezier(0.175,0.885,0.32,1.275), box-shadow 0.45s ease, border-color 0.45s ease",
                  "--card-color": project.color,
                  /* Top accent bar */
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0, left: 0, right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, transparent 0%, ${project.color} 40%, ${project.color}aa 70%, transparent 100%)`,
                    opacity: 0.8,
                  },
                  "&:hover": {
                    transform: "translateY(-12px) scale(1.018)",
                    boxShadow: `
                      0 28px 60px rgba(0,0,0,0.55),
                      0 0 0 1px ${project.color}40,
                      0 0 60px ${project.color}14,
                      inset 0 1px 0 rgba(255,255,255,0.06)
                    `,
                    borderColor: `${project.color}50`,
                    "& .proj-icon-wrap": {
                      background: `linear-gradient(135deg, ${project.color}28, ${project.color}08)`,
                    },
                    "& .proj-icon": { transform: "scale(1.2) rotate(8deg)" },
                    "& .proj-glow": { opacity: 0.6, transform: "scale(1.6)" },
                    "& .proj-title": { color: project.color },
                  },
                }}
              >
                {/* Corner decoration */}
                <div className="card-corner" />
                {/* Card number */}
                <span className="card-number">{project.num}</span>

                {/* ── Icon area ── */}
                <Box
                  className="proj-icon-wrap"
                  sx={{
                    background: `linear-gradient(135deg, ${project.color}12, ${project.color}04)`,
                    minHeight: { xs: 130, md: 155 },
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    transition: "background 0.4s ease",
                  }}
                >
                  {/* Bottom fade into card body */}
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: 0, left: 0, right: 0,
                      height: "40px",
                      background:
                        "linear-gradient(to bottom, transparent, rgba(10,18,36,0.6))",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Glow blob */}
                  <Box
                    className="proj-glow"
                    sx={{
                      position: "absolute",
                      width: 90, height: 90,
                      borderRadius: "50%",
                      background: project.color,
                      filter: "blur(32px)",
                      opacity: 0.22,
                      transition: "all 0.45s ease",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Icon */}
                  <Box
                    className="proj-icon"
                    sx={{
                      color: project.color,
                      position: "relative", zIndex: 1,
                      transition:
                        "transform 0.45s cubic-bezier(0.175,0.885,0.32,1.275)",
                      "& svg": {
                        width: { xs: 40, md: 48 },
                        height: { xs: 40, md: 48 },
                        filter: `drop-shadow(0 0 14px ${project.color}90)`,
                      },
                    }}
                  >
                    {project.icon}
                  </Box>
                </Box>

                {/* ── Content ── */}
                <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, md: 3 } }}>
                  <Typography
                    variant="h6"
                    component="h3"
                    className="proj-title"
                    sx={{
                      fontWeight: 800,
                      mb: 1.25,
                      color: "#f1f5f9",
                      fontSize: { xs: "1rem", md: "1.1rem" },
                      lineHeight: 1.3,
                      transition: "color 0.3s ease",
                      fontFamily: "var(--font-display) !important",
                    }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      lineHeight: 1.78,
                      fontSize: "0.83rem",
                      mb: 2,
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.7 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: `${project.color}10`,
                          color: project.color,
                          fontWeight: 600,
                          fontSize: "0.66rem",
                          border: `1px solid ${project.color}28`,
                          height: 22,
                          transition: "all 0.25s ease",
                          fontFamily: "var(--font-body)",
                          "&:hover": {
                            backgroundColor: `${project.color}22`,
                            transform: "translateY(-2px)",
                            boxShadow: `0 4px 10px ${project.color}30`,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                {/* ── Actions ── */}
                <CardActions sx={{ p: { xs: 2, md: 3 }, pt: 0.5, gap: 1 }}>
                  {project.liveUrl && (
                    <Button
                      size="small"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<ExternalLink size={13} />}
                      sx={{
                        background: `linear-gradient(135deg, ${project.color}dd, ${project.color})`,
                        color: "#fff",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "10px",
                        px: 2,
                        fontSize: "0.78rem",
                        boxShadow: `0 4px 16px ${project.color}40`,
                        fontFamily: "var(--font-body)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: `0 8px 24px ${project.color}55`,
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="small"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Github size={13} />}
                    sx={{
                      color: "#94a3b8",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "10px",
                      px: 2,
                      fontSize: "0.78rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                      background: "rgba(255,255,255,0.03)",
                      fontFamily: "var(--font-body)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: project.color,
                        color: project.color,
                        background: `${project.color}10`,
                        transform: "translateY(-3px)",
                        boxShadow: `0 6px 18px ${project.color}25`,
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>

        {/* ─── Bottom scroll indicator ─── */}
        <Box sx={{ textAlign: "center" }}>
          <div className="scroll-indicator" aria-hidden="true">
            <div className="scroll-indicator-line" />
          </div>
        </Box>
      </Container>

      {/* Bottom gradient separator */}
      <div className="projects-bottom-decoration" />
    </Box>
  );
}

export default Projects;
