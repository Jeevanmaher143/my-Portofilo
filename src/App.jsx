import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import Skill from "./components/Skill";
import "./App.css";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Divider,
  Grid,
} from "@mui/material";
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  Heart,
  ArrowUp,
} from "lucide-react";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: <Github size={22} />,
      url: "https://github.com/Jeevanmaher143",
      label: "GitHub",
    },
    { 
      icon: <Linkedin size={22} />, 
      url: "https://linkedin.com/in/jeevanmaher0102", 
      label: "LinkedIn" 
    },
    {
      icon: <Instagram size={22} />,
      url: "https://www.instagram.com/jeevanmaher_143?igsh=MWdpem4xYjF2cW5jcw==",
      label: "Instagram",
    },
    {
      icon: <Mail size={22} />,
      url: "mailto:jeevanmaherji@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <Box>
      <Header />

      {/* Main content */}
      <main>
        <Hero />
        <Skill />
        <Projects />
        <About />
        <Contact />
      </main>

      {/* Modern Animated Footer */}
      <Box
        component="footer"
        className="footer-section"
        sx={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Animated Background Elements */}
        <div className="footer-bg-orb orb-1"></div>
        <div className="footer-bg-orb orb-2"></div>
        <div className="footer-grid-pattern"></div>
        
        {/* Top Gradient Line */}
        <div className="footer-top-line"></div>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          {/* Main Footer Content */}
          <Box sx={{ py: 6 }}>
            <Grid container spacing={4}>
              {/* About Section */}
              <Grid item xs={12} md={4} className="footer-col footer-col-1">
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h5"
                    className="footer-brand"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      background: "linear-gradient(to right, #fbbf24, #f59e0b)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% auto",
                    }}
                  >
                    Jeevan Maher
                  </Typography>
                  <Typography
                    variant="body2"
                    className="footer-description"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                      mb: 2,
                    }}
                  >
                    Full Stack Developer & QA Tester passionate about creating beautiful,
                    responsive web applications with modern technologies and ensuring quality through rigorous testing.
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1, mt: 2 }} className="footer-social-container">
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className={`footer-social-btn footer-social-${index}`}
                        sx={{
                          color: "rgba(255,255,255,0.7)",
                          backgroundColor: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            color: "#fbbf24",
                            backgroundColor: "rgba(251,191,36,0.1)",
                            borderColor: "#fbbf24",
                            transform: "translateY(-4px) rotate(5deg)",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Quick Links */}
              <Grid item xs={12} sm={6} md={4} className="footer-col footer-col-2">
                <Typography
                  variant="h6"
                  className="footer-col-title"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "#fbbf24",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Quick Links
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                  className="footer-links-container"
                >
                  {quickLinks.map((link, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={link.href}
                      className={`footer-link footer-link-${index}`}
                      sx={{
                        color: "rgba(255,255,255,0.7)",
                        textDecoration: "none",
                        fontSize: "0.95rem",
                        transition: "all 0.3s ease",
                        display: "inline-block",
                        width: "fit-content",
                        "&:hover": {
                          color: "#fbbf24",
                          transform: "translateX(8px)",
                        },
                        "&::before": {
                          content: '"→"',
                          marginRight: "8px",
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        },
                        "&:hover::before": {
                          opacity: 1,
                        },
                      }}
                    >
                      {link.name}
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Get in Touch */}
              <Grid item xs={12} sm={6} md={4} className="footer-col footer-col-3">
                <Typography
                  variant="h6"
                  className="footer-col-title"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: "#fbbf24",
                    position: "relative",
                    display: "inline-block",
                  }}
                >
                  Get in Touch
                </Typography>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}
                  className="footer-contact-container"
                >
                  <Typography
                    variant="body2"
                    className="footer-contact-item footer-contact-0"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span className="footer-contact-icon">📧</span>
                    <span>jeevanmaherji@gmail.com</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    className="footer-contact-item footer-contact-1"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span className="footer-contact-icon">📍</span>
                    <span>Sillod, Maharashtra, India</span>
                  </Typography>
                  <Typography
                    variant="body2"
                    className="footer-contact-item footer-contact-2"
                    sx={{
                      color: "rgba(255,255,255,0.7)",
                      lineHeight: 1.7,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <span className="footer-contact-icon">💼</span>
                    <span>Available for freelance projects</span>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider 
            className="footer-divider"
            sx={{ borderColor: "rgba(255,255,255,0.1)" }} 
          />

          {/* Bottom Footer */}
          <Box
            className="footer-bottom"
            sx={{
              py: 3,
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography
              variant="body2"
              className="footer-copyright"
              sx={{
                color: "rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                gap: 1,
                fontSize: "0.9rem",
              }}
            >
              © {new Date().getFullYear()} Jeevan Maher. Made with{" "}
              <Heart size={16} color="#ff6b6b" fill="#ff6b6b" className="footer-heart" /> in India
            </Typography>

            {/* Scroll to Top Button */}
            <IconButton
              onClick={scrollToTop}
              className="footer-scroll-top"
              aria-label="Scroll to top"
              sx={{
                backgroundColor: "rgba(251,191,36,0.1)",
                color: "#fbbf24",
                border: "2px solid rgba(251,191,36,0.3)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#fbbf24",
                  color: "#0f172a",
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 16px rgba(251,191,36,0.3)",
                },
              }}
            >
              <ArrowUp size={20} />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default App;