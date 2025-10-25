// src/components/Skills.jsx
import React from "react";
import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { Code, Database, Layers, Palette, Terminal, GitBranch, FileCode, Briefcase } from "lucide-react";

const skillsData = [
  { 
    icon: <Code size={40} />, 
    name: "React.js",
    color: "#61DAFB",
    category: "Frontend"
  },
  { 
    icon: <Layers size={40} />, 
    name: "MERN Stack",
    color: "#00D084",
    category: "Full Stack"
  },
  { 
    icon: <FileCode size={40} />, 
    name: "Java",
    color: "#007396",
    category: "Programming"
  },
  { 
    icon: <Database size={40} />, 
    name: "SQL & MongoDB",
    color: "#4DB33D",
    category: "Database"
  },
  { 
    icon: <Terminal size={40} />, 
    name: "DSA",
    color: "#FF6B6B",
    category: "Algorithms"
  },
  { 
    icon: <Code size={40} />, 
    name: "Operating Systems",
    color: "#0078D6",
    category: "Core CS"
  },
  { 
    icon: <Palette size={40} />, 
    name: "UI/UX Design",
    color: "#FF6F61",
    category: "Design"
  },
  { 
    icon: <Briefcase size={40} />, 
    name: "MS-Office",
    color: "#D83B01",
    category: "Productivity"
  },
  { 
    icon: <GitBranch size={40} />, 
    name: "Git/GitHub",
    color: "#F05032",
    category: "Version Control"
  },
];

function Skills() {
  return (
    <Box 
      id="skills"
      sx={{ 
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #fbbf24 100%)",
        }
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
            WHAT I KNOW
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
            My Skills & Expertise
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
            A comprehensive set of technical skills and tools I use to build amazing digital experiences
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Grid container spacing={3} justifyContent="center">
          {skillsData.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Paper
                elevation={0}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 4,
                  textAlign: "center",
                  height: "200px",
                  borderRadius: "20px",
                  background: "white",
                  border: "2px solid transparent",
                  transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${skill.color}15 0%, ${skill.color}05 100%)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                  },
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 40px ${skill.color}30`,
                    borderColor: skill.color,
                    "&::before": {
                      opacity: 1,
                    },
                    "& .skill-icon": {
                      transform: "scale(1.1) rotate(5deg)",
                      color: skill.color,
                    },
                  },
                }}
              >
                {/* Category Badge */}
                <Chip
                  label={skill.category}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    backgroundColor: `${skill.color}20`,
                    color: skill.color,
                    border: "none",
                  }}
                />

                {/* Icon */}
                <Box
                  className="skill-icon"
                  sx={{
                    color: "#495057",
                    mb: 2,
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {skill.icon}
                </Box>

                {/* Skill Name */}
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    color: "#212529",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {skill.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Bottom Decorative Element */}
        <Box
          sx={{
            mt: 8,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: "#6c757d",
              fontStyle: "italic",
            }}
          >
            Always learning and expanding my skill set 🚀
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Skills;