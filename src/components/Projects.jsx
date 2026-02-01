import React from "react";
import {
  Container,
  Typography,
  Grid,
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
      "Developed a full-stack Gram Panchayat Management Website to digitize village administration. The platform provides online access to notices, government schemes, village services, development projects, and a photo gallery. It includes an admin dashboard to manage content securely and improves communication between the Panchayat and villagers. Built using the MERN stack with a responsive and user-friendly design.",
    icon: <Building2 size={48} />,
    color: "#8B5CF6",
    tags: ["MERN Stack", "Admin Dashboard", "Render& Vercel ", "Domain.in","CLoudnary"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: "https://www.gproshankheda.in/",
  },
  {
    title: "Weather App",
    description:
      "Developed an interactive and responsive weather application that shows real-time weather updates for any city using the OpenWeather API. The app features a modern and clean design built with React and Material UI, including smooth animations and a two-column layout — the city input on the left and live weather data on the right. It displays key weather details such as temperature, humidity, wind speed, and visibility.",
    icon: <Cloud size={48} />,
    color: "#3B82F6",
    tags: ["React", "Material UI", "API", "Responsive"],
    githubUrl: "https://github.com/Jeevanmaher143/weather-app",
    liveUrl: null,
  },
  {
    title: "Unity Share - Community Resource Sharing Platform",
    description:
      "Developed a web-based platform that allows users to share, borrow, or donate resources within their community. The system helps people connect and make better use of available resources through an easy-to-use interface. Users can post available items, search for needed ones, and manage their listings through a personal dashboard.",
    icon: <Users size={48} />,
    color: "#10B981",
    tags: ["MERN Stack", "MongoDB", "Dashboard", "Basic Needs"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
  },
  {
    title: "ResQHome – Pet Adoption Platform",
    description:
      "Created a comprehensive pet adoption platform connecting animal shelters with potential adopters. Features include pet profiles with detailed information, advanced search filters, adoption application system, and user authentication. Built with focus on user experience and responsive design to help pets find their forever homes.",
    icon: <Heart size={48} />,
    color: "#EC4899",
    tags: ["React.js", "Node.js", "Express", "Admin", "Authentication"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
  },
];

function Projects() {
  return (
    <Box
      id="projects"
      className="projects-section"
      sx={{
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <div className="project-bg-orb orb-1"></div>
      <div className="project-bg-orb orb-2"></div>
      <div className="project-bg-shape shape-1"></div>
      <div className="project-bg-shape shape-2"></div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }} className="projects-header">
          <Typography
            variant="overline"
            className="projects-tag"
            sx={{
              color: "#fbbf24",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.15em",
              mb: 1,
              display: "block",
              textTransform: "uppercase",
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            variant="h3"
            className="projects-title"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", md: "3rem" },
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="body1"
            className="projects-subtitle"
            sx={{
              color: "#cbd5e1",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
              lineHeight: 1.7,
            }}
          >
            Here are some of my recent projects that showcase my skills and
            creativity
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} className="project-grid-item">
              <Card
                elevation={0}
                className="project-card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "24px",
                  border: "2px solid rgba(251, 191, 36, 0.2)",
                  background: "rgba(30, 41, 59, 0.6)",
                  backdropFilter: "blur(20px)",
                  transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  overflow: "hidden",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
                    opacity: 0.8,
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(90deg, transparent, ${project.color}15, transparent)`,
                    transition: "left 0.6s",
                  },
                  "&:hover": {
                    transform: "translateY(-12px)",
                    boxShadow: `0 25px 50px ${project.color}40, 0 0 80px ${project.color}20`,
                    borderColor: project.color,
                    background: "rgba(30, 41, 59, 0.8)",
                    "&::after": {
                      left: "100%",
                    },
                    "& .project-icon-wrapper": {
                      transform: "scale(1.15) rotate(-5deg)",
                      background: `linear-gradient(135deg, ${project.color}30, ${project.color}15)`,
                    },
                    "& .project-icon": {
                      transform: "rotate(15deg) scale(1.1)",
                      filter: `drop-shadow(0 0 20px ${project.color})`,
                    },
                    "& .project-particle": {
                      opacity: 1,
                      transform: "scale(1.2)",
                    },
                  },
                }}
              >
                {/* Decorative Particles */}
                <Box
                  className="project-particle particle-1"
                  sx={{
                    position: "absolute",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: project.color,
                    top: "20%",
                    right: "10%",
                    opacity: 0,
                    transition: "all 0.5s",
                  }}
                />
                <Box
                  className="project-particle particle-2"
                  sx={{
                    position: "absolute",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: project.color,
                    bottom: "30%",
                    left: "15%",
                    opacity: 0,
                    transition: "all 0.5s 0.1s",
                  }}
                />

                {/* Icon Section */}
                <Box
                  className="project-icon-wrapper"
                  sx={{
                    background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                    p: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "180px",
                    position: "relative",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: "20px",
                      borderRadius: "50%",
                      border: `2px dashed ${project.color}40`,
                      animation: "rotate 20s linear infinite",
                    },
                  }}
                >
                  <Box
                    className="project-icon"
                    sx={{
                      color: project.color,
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      filter: `drop-shadow(0 0 10px ${project.color}80)`,
                      zIndex: 1,
                    }}
                  >
                    {project.icon}
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#f1f5f9",
                      fontSize: { xs: "1.25rem", md: "1.4rem" },
                      transition: "color 0.3s",
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#cbd5e1",
                      lineHeight: 1.7,
                      mb: 2,
                      fontSize: "0.95rem",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tags */}
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1,
                      mt: "auto",
                      pt: 2,
                    }}
                  >
                    {project.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        size="small"
                        className="project-tag"
                        sx={{
                          backgroundColor: `${project.color}20`,
                          color: project.color,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          border: `1px solid ${project.color}40`,
                          transition: "all 0.3s",
                          "&:hover": {
                            backgroundColor: `${project.color}30`,
                            transform: "translateY(-2px)",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                  {project.liveUrl && (
                    <Button
                      size="medium"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<ExternalLink size={18} />}
                      className="project-btn"
                      sx={{
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}CC)`,
                        color: "#fff",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "12px",
                        px: 2.5,
                        py: 1,
                        border: "none",
                        transition: "all 0.3s ease",
                        boxShadow: `0 4px 15px ${project.color}40`,
                        "&:hover": {
                          transform: "translateY(-3px)",
                          boxShadow: `0 8px 25px ${project.color}60`,
                          background: `linear-gradient(135deg, ${project.color}DD, ${project.color})`,
                        },
                      }}
                    >
                      Live Demo
                    </Button>
                  )}
                  <Button
                    size="medium"
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<Github size={18} />}
                    className="project-btn-outline"
                    sx={{
                      color: "#f1f5f9",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "12px",
                      px: 2.5,
                      py: 1,
                      border: `2px solid ${project.color}50`,
                      transition: "all 0.3s ease",
                      background: "rgba(30, 41, 59, 0.5)",
                      "&:hover": {
                        borderColor: project.color,
                        color: project.color,
                        background: `${project.color}15`,
                        transform: "translateY(-3px)",
                      },
                    }}
                  >
                    GitHub
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;