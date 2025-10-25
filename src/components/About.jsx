// src/components/About.jsx
import React from "react";
import { Box, Container, Typography, Grid, Paper, Avatar, Chip } from "@mui/material";
import { GraduationCap, Award, BookOpen, Trophy, Code, Target, Lightbulb, Users } from "lucide-react";

const educationData = [
  {
    degree: "10th Grade (SSC)",
    institute: "Jogeshwari Highschool Palshi",
    year: "Secured 3rd Rank in School",
    icon: <Trophy size={40} />,
    color: "#10B981",
  },
  {
    degree: "Diploma in Information Technology",
    institute: "Government Polytechnic, Jalgaon",
    year: "Completed with First-Class Distinction",
    icon: <Award size={40} />,
    color: "#fbbf24",
  },
  {
    degree: "B.Tech in Computer Engineering",
    institute: "Deogiri Institute of Engineering and Management Studies",
    year: "Currently Pursuing",
    icon: <GraduationCap size={40} />,
    color: "#667eea",
  },
];

const highlights = [
  {
    icon: <Code size={32} />,
    title: "Clean Code",
    description: "Writing maintainable and efficient code",
    color: "#667eea",
  },
  {
    icon: <Target size={32} />,
    title: "Goal-Oriented",
    description: "Focused on delivering results",
    color: "#10B981",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Creative Solutions",
    description: "Innovative approach to problems",
    color: "#fbbf24",
  },
  {
    icon: <Users size={32} />,
    title: "Team Player",
    description: "Collaborative and communicative",
    color: "#EC4899",
  },
];

function About() {
  return (
    <Box 
      id="about"
      sx={{ 
        py: { xs: 6, md: 10 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
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
            GET TO KNOW ME
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
            About Me
          </Typography>
        </Box>

        {/* Top Section - Image and Intro */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -15,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    opacity: 0.2,
                    animation: "pulse 2s ease-in-out infinite",
                  },
                  "@keyframes pulse": {
                    "0%, 100%": { transform: "scale(1)", opacity: 0.2 },
                    "50%": { transform: "scale(1.05)", opacity: 0.3 },
                  },
                }}
              >
                <Avatar
                  alt="Jeevan Maher"
                  src="/assets/jeevan.jpg"
                  sx={{
                    width: { xs: 200, sm: 240, md: 280 },
                    height: { xs: 200, sm: 240, md: 280 },
                    border: "6px solid white",
                    boxShadow: "0 20px 60px rgba(102, 126, 234, 0.3)",
                    position: "relative",
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography 
              variant="h4" 
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
            >
              Hi, I'm <span style={{ 
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>Jeevan Maher</span> 👋
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 2,
              }}
            >
              I'm a passionate <b>frontend developer</b> with a love for crafting
              visually engaging and user-friendly web applications. My journey in
              technology started from a curiosity about how things work online,
              which evolved into a full-fledged passion for building modern,
              responsive, and interactive web interfaces.
            </Typography>
            
            <Typography 
              variant="body1" 
              color="text.secondary" 
              paragraph
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.8,
                mb: 3,
              }}
            >
              Along my journey, I've worked on several projects like <b>MerchantVella</b> 
              — a multivendor e-commerce platform — and <b>AquaSafe</b>, 
              which supports access to clean drinking water under SDG 6. 
              I aim to blend creativity with clean code to build impactful web experiences.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              <Chip 
                label="React Enthusiast" 
                sx={{ 
                  backgroundColor: "#667eea20", 
                  color: "#667eea",
                  fontWeight: 600,
                  border: "1px solid #667eea40",
                }} 
              />
              <Chip 
                label="UI/UX Focused" 
                sx={{ 
                  backgroundColor: "#fbbf2420", 
                  color: "#f59e0b",
                  fontWeight: 600,
                  border: "1px solid #fbbf2440",
                }} 
              />
              <Chip 
                label="Problem Solver" 
                sx={{ 
                  backgroundColor: "#10B98120", 
                  color: "#10B981",
                  fontWeight: 600,
                  border: "1px solid #10B98140",
                }} 
              />
            </Box>
          </Grid>
        </Grid>

        {/* Highlights Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h5" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 4,
              color: "#212529",
            }}
          >
            What Drives Me
          </Typography>
          <Grid container spacing={3}>
            {highlights.map((highlight, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: "center",
                    borderRadius: "15px",
                    border: "2px solid #e9ecef",
                    height: "100%",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: highlight.color,
                      transform: "translateY(-8px)",
                      boxShadow: `0 12px 24px ${highlight.color}30`,
                      "& .highlight-icon": {
                        color: highlight.color,
                        transform: "scale(1.1)",
                      }
                    }
                  }}
                >
                  <Box
                    className="highlight-icon"
                    sx={{
                      color: "#6c757d",
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography 
                    variant="h6" 
                    gutterBottom
                    sx={{ fontWeight: 700, fontSize: "1.1rem" }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: "0.9rem" }}
                  >
                    {highlight.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Education Section */}
        <Box>
          <Typography 
            variant="h5" 
            align="center" 
            gutterBottom
            sx={{
              fontWeight: 700,
              mb: 4,
              color: "#212529",
            }}
          >
            Education Journey
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {educationData.map((edu, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 4,
                    textAlign: "center",
                    borderRadius: "20px",
                    height: "100%",
                    border: "2px solid #e9ecef",
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.4s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "6px",
                      background: `linear-gradient(90deg, ${edu.color}, ${edu.color}CC)`,
                    },
                    "&:hover": {
                      borderColor: edu.color,
                      transform: "translateY(-8px)",
                      boxShadow: `0 20px 40px ${edu.color}30`,
                      "& .edu-icon": {
                        color: edu.color,
                        transform: "scale(1.1) rotate(5deg)",
                      }
                    }
                  }}
                >
                  <Box
                    className="edu-icon"
                    sx={{
                      color: "#6c757d",
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                      transition: "all 0.4s ease",
                    }}
                  >
                    {edu.icon}
                  </Box>
                  <Typography 
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      mb: 1,
                      fontSize: { xs: "1.1rem", md: "1.25rem" },
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    color="text.secondary"
                    sx={{
                      fontWeight: 600,
                      mb: 1.5,
                      color: edu.color,
                    }}
                  >
                    {edu.institute}
                  </Typography>
                  <Chip
                    label={edu.year}
                    size="small"
                    sx={{
                      backgroundColor: `${edu.color}20`,
                      color: edu.color,
                      fontWeight: 600,
                      border: `1px solid ${edu.color}40`,
                    }}
                  />
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default About;