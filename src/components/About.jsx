import { Box, Container, Typography, Grid, Paper, Chip } from "@mui/material";
import { GraduationCap, Award, Trophy, Code, Target, Lightbulb, Users } from "lucide-react";

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
    color: "#EC4899",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Honesty",
    description: "True integrity",
    color: "#EC4899",
  },
];

function About() {
  return (
    <Box
      id="about"
      sx={{
        py: { xs: 3, sm: 5, md: 8 },
        px: { xs: 2, sm: 3, md: 5 },
        background: "linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: { xs: 3, sm: 4, md: 6 } }}>
          <Typography
            sx={{
              color: "#667eea",
              fontWeight: 700,
              fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
              letterSpacing: "0.1em",
              mb: 0.5,
              textTransform: "uppercase",
            }}
          >
            GET TO KNOW ME
          </Typography>
          <Typography
            sx={{
              fontWeight: 800,
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Me
          </Typography>
        </Box>

        {/* Highlights Section */}
        <Box sx={{ mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            align="center"
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
              color: "#212529",
            }}
          >
            What Drives Me
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="center"
          >
            {highlights.map((highlight, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2, sm: 2.5, md: 3 },
                    textAlign: "center",
                    borderRadius: "12px",
                    border: "1.5px solid #e9ecef",
                    width: "100%",
                    maxWidth: 230,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      borderColor: highlight.color,
                      transform: "translateY(-4px)",
                      boxShadow: `0 8px 16px ${highlight.color}25`,
                      "& .highlight-icon": {
                        color: highlight.color,
                        transform: "scale(1.15)",
                      },
                    },
                  }}
                >
                  <Box
                    className="highlight-icon"
                    sx={{
                      color: "#6c757d",
                      mb: 1,
                      display: "flex",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {highlight.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.9rem", sm: "1rem" },
                      color: "#212529",
                      mb: 0.3,
                    }}
                  >
                    {highlight.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "0.75rem", sm: "0.85rem" },
                      color: "#6c757d",
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
            sx={{
              fontWeight: 700,
              mb: { xs: 2, sm: 3 },
              fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.7rem" },
              color: "#212529",
            }}
          >
            Education Journey
          </Typography>

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            justifyContent="center"
            alignItems="center"
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
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3, md: 3.5 },
                    textAlign: "center",
                    borderRadius: "16px",
                    border: "1.5px solid #e9ecef",
                    width: "100%",
                    maxWidth: 280,
                    position: "relative",
                    overflow: "hidden",
                    transition: "all 0.3s ease",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: "4px",
                      background: `linear-gradient(90deg, ${edu.color}, ${edu.color}CC)`,
                    },
                    "&:hover": {
                      borderColor: edu.color,
                      transform: "translateY(-4px)",
                      boxShadow: `0 10px 20px ${edu.color}25`,
                      "& .edu-icon": {
                        color: edu.color,
                        transform: "scale(1.1)",
                      },
                    },
                  }}
                >
                  <Box
                    className="edu-icon"
                    sx={{
                      color: "#0f1113ff",
                      mb: 1,
                      display: "flex",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {edu.icon}
                  </Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: "0.95rem", sm: "1.05rem" },
                      color: "#212529",
                      mb: 0.5,
                    }}
                  >
                    {edu.degree}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 900,
                      color: edu.color,
                      fontSize: { xs: "0.75rem", sm: "0.85rem" },
                      mb: 1,
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
                      border: `1px solid ${edu.color}40`,
                      fontSize: { xs: "0.7rem", sm: "0.75rem" },
                      height: { xs: "22px", sm: "24px" },
                      "& .MuiChip-label": {
                        px: { xs: 1, sm: 1.25 },
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
