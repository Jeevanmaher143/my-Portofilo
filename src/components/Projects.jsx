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
import { Github, ExternalLink, Cloud, Users, Heart } from "lucide-react";

const projects = [
  {
    title: "Weather App",
    description:
      "Developed an interactive and responsive weather application that shows real-time weather updates for any city using the OpenWeather API. The app features a modern and clean design built with React and Material UI, including smooth animations and a two-column layout — the city input on the left and live weather data on the right. It displays key weather details such as temperature, humidity, wind speed, and visibility.",
    icon: <Cloud size={48} />,
    color: "#3B82F6",
    tags: ["React", "Material UI", "API", "Responsive"],
    githubUrl: "https://github.com/Jeevanmaher143/weather-app",
    liveUrl: "#",
  },
  {
    title: "Unity Share - Community Resource Sharing Platform",
    description:
      "Developed a web-based platform that allows users to share, borrow, or donate resources within their community. The system helps people connect and make better use of available resources through an easy-to-use interface. Users can post available items, search for needed ones, and manage their listings through a personal dashboard.",
    icon: <Users size={48} />,
    color: "#10B981",
    tags: ["MERN Stack", "MongoDB", "Community", "Dashboard"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "ResQHome – Pet Adoption Platform",
    description:
      "Created a comprehensive pet adoption platform connecting animal shelters with potential adopters. Features include pet profiles with detailed information, advanced search filters, adoption application system, and user authentication. Built with focus on user experience and responsive design to help pets find their forever homes.",
    icon: <Heart size={48} />,
    color: "#EC4899",
    tags: ["React", "Node.js", "Express", "Authentication"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

function Projects() {
  return (
    <Box 
      id="projects" 
      sx={{ 
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="overline"
            sx={{
              color: "#667eea",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.15em",
              mb: 1,
              display: "block",
            }}
          >
            PORTFOLIO
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#6c757d",
              maxWidth: "600px",
              mx: "auto",
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Here are some of my recent projects that showcase my skills and creativity
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} md={6} lg={4}>
              <Card
                elevation={0}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  border: "2px solid #e9ecef",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "6px",
                    background: `linear-gradient(90deg, ${project.color}, ${project.color}CC)`,
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px ${project.color}30`,
                    borderColor: project.color,
                    "& .project-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                      color: project.color,
                    },
                  },
                }}
              >
                {/* Icon Section */}
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${project.color}15, ${project.color}05)`,
                    p: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "180px",
                  }}
                >
                  <Box
                    className="project-icon"
                    sx={{
                      color: project.color,
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
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
                      color: "#212529",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: "#6c757d",
                      lineHeight: 1.7,
                      mb: 2,
                      fontSize: "0.95rem",
                    }}
                  >
                    {project.description}
                  </Typography>

                  {/* Tags */}
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
                    {project.tags.map((tag, idx) => (
                      <Chip
                        key={idx}
                        label={tag}
                        size="small"
                        sx={{
                          backgroundColor: `${project.color}15`,
                          color: project.color,
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          border: `1px solid ${project.color}30`,
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>

                <CardActions sx={{ p: 3, pt: 0, gap: 1 }}>
                  <Button
                    size="medium"
                    href={project.githubUrl}
                    target="_blank"
                    startIcon={<Github size={18} />}
                    sx={{
                      color: "#212529",
                      fontWeight: 600,
                      textTransform: "none",
                      borderRadius: "10px",
                      px: 2,
                      border: "2px solid #e9ecef",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: project.color,
                        color: project.color,
                        backgroundColor: `${project.color}10`,
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