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
      "Developed and tested a full-stack Gram Panchayat Management Website to digitize village administration. The platform provides online access to notices, government schemes, village services, development projects, and a photo gallery. Includes an admin dashboard with secure content management. Conducted comprehensive testing with 18 test scenarios covering 100+ test cases including functional testing, UI/UX validation, security testing, API testing, and cross-browser compatibility. Built using the MERN stack with responsive design and deployed on Render & Vercel with Cloudinary integration.",
    icon: <Building2 size={48} />,
    color: "#8B5CF6",
    tags: ["MERN Stack", "Testing (100+ Cases)", "Render & Vercel", "Domain.in", "Cloudinary"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: "https://www.gproshankheda.in/",
  },
  {
    title: "Weather App",
    description:
      "Developed an interactive and responsive weather application that shows real-time weather updates for any city using the OpenWeather API. The app features a modern and clean design built with React and Material UI, including smooth transitions and a two-column layout — the city input on the left and live weather data on the right. It displays key weather details such as temperature, humidity, wind speed, and visibility with error handling and loading states.",
    icon: <Cloud size={48} />,
    color: "#3B82F6",
    tags: ["React", "Material UI", "API", "Responsive"],
    githubUrl: "https://github.com/Jeevanmaher143/weather-app",
    liveUrl: null,
  },
  {
    title: "Unity Share - Community Resource Sharing Platform",
    description:
      "Developed a web-based platform that allows users to share, borrow, or donate resources within their community. The system helps people connect and make better use of available resources through an easy-to-use interface. Users can post available items, search for needed ones, and manage their listings through a personal dashboard with real-time updates.",
    icon: <Users size={48} />,
    color: "#10B981",
    tags: ["MERN Stack", "MongoDB", "Dashboard", "Community"],
    githubUrl: "https://github.com/Jeevanmaher143",
    liveUrl: null,
  },
  {
    title: "ResQHome – Pet Adoption Platform",
    description:
      "Created a comprehensive pet adoption platform connecting animal shelters with potential adopters. Features include pet profiles with detailed information, advanced search filters, adoption application system, and user authentication. Built with focus on user experience and responsive design to help pets find their forever homes.",
    icon: <Heart size={48} />,
    color: "#EC4899",
    tags: ["React.js", "Node.js", "Express", "Authentication"],
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
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }} className="projects-header">
          <Typography
            variant="overline"
            className="projects-tag"
            sx={{
              color: "#fbbf24",
              fontWeight: 700,
              fontSize: { xs: "0.8rem", md: "0.9rem" },
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
              fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
              color: "#ffffff",
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
              fontSize: { xs: "0.9rem", md: "1rem" },
              lineHeight: 1.7,
              px: { xs: 2, sm: 0 },
            }}
          >
            Here are some of my recent projects that showcase my skills and creativity
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} className="project-grid-item">
              <Card
                elevation={0}
                className="project-card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: { xs: "16px", md: "20px" },
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(30, 41, 59, 0.5)",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: project.color,
                    opacity: 0.7,
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 12px 24px rgba(0, 0, 0, 0.3)`,
                    borderColor: `${project.color}40`,
                    background: "rgba(30, 41, 59, 0.7)",
                    "& .project-icon-wrapper": {
                      background: `linear-gradient(135deg, ${project.color}25, ${project.color}10)`,
                    },
                    "& .project-icon": {
                      transform: "scale(1.1)",
                    },
                  },
                }}
              >
                {/* Icon Section */}
                <Box
                  className="project-icon-wrapper"
                  sx={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}08)`,
                    p: { xs: 3, md: 4 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: { xs: "140px", md: "160px" },
                    position: "relative",
                    transition: "all 0.3s ease",
                  }}
                >
                  <Box
                    className="project-icon"
                    sx={{
                      color: project.color,
                      transition: "transform 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "& svg": {
                        width: { xs: "40px", md: "48px" },
                        height: { xs: "40px", md: "48px" },
                      },
                    }}
                  >
                    {project.icon}
                  </Box>
                </Box>

                <CardContent sx={{ flexGrow: 1, p: { xs: 2.5, md: 3 } }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: "#f1f5f9",
                      fontSize: { xs: "1.1rem", md: "1.3rem" },
                      lineHeight: 1.3,
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
                      fontSize: { xs: "0.85rem", md: "0.9rem" },
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
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                          fontWeight: 600,
                          fontSize: { xs: "0.7rem", md: "0.75rem" },
                          border: `1px solid ${project.color}30`,
                          transition: "all 0.3s",
                          height: { xs: "24px", md: "26px" },
                          "&:hover": {
                            backgroundColor: `${project.color}25`,
                          },
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: { xs: 2.5, md: 3 }, pt: 0, gap: 1, flexWrap: "wrap" }}>
                  {project.liveUrl && (
                    <Button
                      size="medium"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      startIcon={<ExternalLink size={16} />}
                      className="project-btn"
                      sx={{
                        background: `linear-gradient(135deg, ${project.color}, ${project.color}DD)`,
                        color: "#fff",
                        fontWeight: 600,
                        textTransform: "none",
                        borderRadius: "8px",
                        px: { xs: 2, md: 2.5 },
                        py: { xs: 0.75, md: 1 },
                        fontSize: { xs: "0.8rem", md: "0.875rem" },
                        border: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-2px)",
                          boxShadow: `0 4px 12px ${project.color}50`,
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
                    startIcon={<Github size={16} />}
                    className="project-btn-outline"
                    sx={{
                      color: "#f1f5f9",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "8px",
                      px: { xs: 2, md: 2.5 },
                      py: { xs: 0.75, md: 1 },
                      fontSize: { xs: "0.8rem", md: "0.875rem" },
                      border: `1px solid ${project.color}40`,
                      transition: "all 0.3s ease",
                      background: "rgba(30, 41, 59, 0.5)",
                      "&:hover": {
                        borderColor: project.color,
                        color: project.color,
                        background: `${project.color}10`,
                        transform: "translateY(-2px)",
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