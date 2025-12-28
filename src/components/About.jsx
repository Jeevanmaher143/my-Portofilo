import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { GraduationCap, Award, Trophy, Code, Target, Lightbulb, Users } from "lucide-react";
import "./About.css";

const educationData = [
  {
    degree: "10th Grade (SSC)",
    institute: "Jogeshwari Highschool Palshi",
    year: "Secured 3rd Rank",
    icon: <Trophy size={28} />,
    color: "#10B981",
  },
  {
    degree: "Diploma in IT",
    institute: "Government Polytechnic, Jalgaon",
    year: "First-Class Distinction",
    icon: <Award size={28} />,
    color: "#fbbf24",
  },
  {
    degree: "B.Tech in CE",
    institute: "Deogiri Institute of Engineering",
    year: "Currently Pursuing",
    icon: <GraduationCap size={28} />,
    color: "#667eea",
  },
];

const highlights = [
  {
    icon: <Code size={20} />,
    title: "Clean Code",
    description: "Maintainable code",
    color: "#667eea",
  },
  {
    icon: <Target size={20} />,
    title: "Goal-Oriented",
    description: "Delivering results",
    color: "#10B981",
  },
  {
    icon: <Lightbulb size={20} />,
    title: "Creative",
    description: "Innovative ideas",
    color: "#fbbf24",
  },
  {
    icon: <Users size={20} />,
    title: "Team Player",
    description: "Collaborative work",
    color: "#EC4899",
  },
  {
    icon: <Target size={22} />,
    title: "Loyalty",
    description: "Dedicated focus",
    color: "#3B82F6",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Honesty",
    description: "True integrity",
    color: "#8B5CF6",
  },
];

function About() {
  return (
    <Box
      id="about"
      className="about-section"
      sx={{
        py: { xs: 6, sm: 8, md: 10 },
        px: { xs: 2, sm: 3, md: 5 },
        background: "linear-gradient(180deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Animated Background Elements */}
      <div className="about-bg-orb orb-1"></div>
      <div className="about-bg-orb orb-2"></div>
      <div className="about-bg-shape shape-1"></div>
      <div className="about-bg-shape shape-2"></div>
      <div className="about-bg-shape shape-3"></div>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 4, sm: 5, md: 6 } }} className="about-header">
          <Typography
            className="about-tag"
            sx={{
              color: "#fbbf24",
              fontWeight: 700,
              fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
              letterSpacing: "0.15em",
              mb: 1,
              textTransform: "uppercase",
              display: "inline-block",
            }}
          >
            GET TO KNOW ME
          </Typography>
          <Typography
            className="about-title"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundSize: "200% auto",
            }}
          >
            About Me
          </Typography>
        </Box>

        {/* Highlights Section */}
        <Box sx={{ mb: { xs: 5, sm: 6, md: 8 } }}>
          <Typography
            align="center"
            className="section-subtitle"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.8rem" },
              color: "#f1f5f9",
            }}
          >
            What Drives Me
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {highlights.map((highlight, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={2}
                key={index}
                display="flex"
                justifyContent="center"
                className="highlight-grid-item"
                sx={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <Paper
                  elevation={0}
                  className="highlight-card"
                  sx={{
                    p: { xs: 2.5, sm: 3 },
                    textAlign: "center",
                    borderRadius: "16px",
                    border: "2px solid rgba(251, 191, 36, 0.2)",
                    width: "100%",
                    maxWidth: { xs: 280, sm: 240 },
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    overflow: "hidden",
                    background: "rgba(30, 41, 59, 0.6)",
                    backdropFilter: "blur(20px)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: "-100%",
                      width: "100%",
                      height: "100%",
                      background: `linear-gradient(90deg, transparent, ${highlight.color}15, transparent)`,
                      transition: "left 0.6s",
                    },
                    "&:hover": {
                      borderColor: highlight.color,
                      transform: "translateY(-8px) scale(1.02)",
                      boxShadow: `0 12px 24px ${highlight.color}40`,
                      background: "rgba(30, 41, 59, 0.8)",
                      "&::before": {
                        left: "100%",
                      },
                      "& .highlight-icon": {
                        color: highlight.color,
                        transform: "scale(1.2) rotate(10deg)",
                      },
                      "& .highlight-dot": {
                        opacity: 1,
                        transform: "scale(1.5)",
                      },
                    },
                  }}
                >
                  {/* Decorative Dot */}
                  <Box
                    className="highlight-dot"
                    sx={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: highlight.color,
                      opacity: 0,
                      transition: "all 0.4s",
                    }}
                  />

                  <Box
                    className="highlight-icon"
                    sx={{
                      color: "#cbd5e1",
                      mb: 1.5,
                      display: "flex",
                      justifyContent: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1rem", sm: "1.05rem" },
                      color: "#f1f5f9",
                      mb: 0.5,
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "0.85rem" },
                      color: "#cbd5e1",
                    }}
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
            align="center"
            className="section-subtitle"
            sx={{
              fontWeight: 700,
              mb: { xs: 3, sm: 4 },
              fontSize: { xs: "1.3rem", sm: "1.6rem", md: "1.8rem" },
              color: "#f1f5f9",
            }}
          >
            Education Journey
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="stretch"
          >
            {educationData.map((edu, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                display="flex"
                justifyContent="center"
                className="education-grid-item"
                sx={{
                  animationDelay: `${index * 0.15}s`,
                }}
              >
                <Paper
                  elevation={0}
                  className="education-card"
                  sx={{
                    p: { xs: 3, sm: 3.5 },
                    textAlign: "center",
                    borderRadius: "20px",
                    border: "2px solid rgba(251, 191, 36, 0.2)",
                    width: "100%",
                    maxWidth: 300,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    background: "rgba(30, 41, 59, 0.6)",
                    backdropFilter: "blur(20px)",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "5px",
                      background: `linear-gradient(90deg, ${edu.color}, ${edu.color}CC)`,
                    },
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `radial-gradient(circle at 50% 0%, ${edu.color}15, transparent 70%)`,
                      opacity: 0,
                      transition: "opacity 0.5s",
                    },
                    "&:hover": {
                      borderColor: edu.color,
                      transform: "translateY(-10px) scale(1.03)",
                      boxShadow: `0 15px 30px ${edu.color}40`,
                      background: "rgba(30, 41, 59, 0.8)",
                      "&::after": {
                        opacity: 1,
                      },
                      "& .edu-icon": {
                        color: edu.color,
                        transform: "scale(1.15) rotate(-5deg)",
                      },
                      "& .edu-pulse": {
                        opacity: 1,
                        transform: "scale(1.5)",
                      },
                    },
                  }}
                >
                  {/* Pulsing Circle Effect */}
                  <Box
                    className="edu-pulse"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      border: `2px solid ${edu.color}`,
                      transform: "translate(-50%, -50%) scale(0.8)",
                      opacity: 0,
                      transition: "all 0.5s",
                    }}
                  />

                  <Box
                    className="edu-icon"
                    sx={{
                      color: edu.color,
                      mb: 2,
                      display: "flex",
                      justifyContent: "center",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                      filter: `drop-shadow(0 4px 8px ${edu.color}40)`,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {edu.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "1.05rem", sm: "1.15rem" },
                      color: "#f1f5f9",
                      mb: 1,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      color: "#cbd5e1",
                      fontSize: { xs: "0.85rem", sm: "0.9rem" },
                      mb: 2,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {edu.institute}
                  </Typography>
                  <Chip
                    label={edu.year}
                    sx={{
                      backgroundColor: `${edu.color}20`,
                      color: edu.color,
                      fontWeight: 700,
                      border: `2px solid ${edu.color}`,
                      fontSize: { xs: "0.75rem", sm: "0.8rem" },
                      height: { xs: "26px", sm: "28px" },
                      transition: "all 0.3s",
                      position: "relative",
                      zIndex: 1,
                      "&:hover": {
                        backgroundColor: edu.color,
                        color: "#fff",
                        transform: "scale(1.05)",
                      },
                      "& .MuiChip-label": {
                        px: { xs: 1.5, sm: 2 },
                      },
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