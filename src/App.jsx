import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skill from "./components/Skill";
import About from "./components/About";
import { Box, Typography, Container, IconButton, Divider, Grid } from '@mui/material';
import { Github, Linkedin, Instagram, Mail, Heart, ArrowUp } from 'lucide-react';

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github size={22} />, url: "https://github.com/Jeevanmaher143", label: "GitHub" },
    { icon: <Linkedin size={22} />, url: "#", label: "LinkedIn" },
    { icon: <Instagram size={22} />, url: "https://www.instagram.com/jeevanmaher_143?igsh=MWdpem4xYjF2cW5jcw==", label: "Instagram" },
    { icon: <Mail size={22} />, url: "mailto:jeevanmaherji@gmail.com", label: "Email" },
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

      {/* Modern Footer */}
      <Box 
        component="footer" 
        sx={{ 
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 50%, #fbbf24 100%)',
          }
        }}
      >
        <Container maxWidth="lg">
          {/* Main Footer Content */}
          <Box sx={{ py: 6 }}>
            <Grid container spacing={4}>
              {/* About Section */}
              <Grid item xs={12} md={4}>
                <Box sx={{ mb: 2 }}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 800,
                      mb: 2,
                      background: 'linear-gradient(to right, #ffffff, #fbbf24)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    Jeevan Maher
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.7,
                      mb: 2,
                    }}
                  >
                    Frontend Developer passionate about creating beautiful, responsive web applications with modern technologies.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                    {socialLinks.map((social, index) => (
                      <IconButton
                        key={index}
                        href={social.url}
                        target="_blank"
                        aria-label={social.label}
                        sx={{
                          color: 'rgba(255,255,255,0.7)',
                          backgroundColor: 'rgba(255,255,255,0.05)',
                          border: '1px solid rgba(255,255,255,0.1)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            color: '#fbbf24',
                            backgroundColor: 'rgba(251,191,36,0.1)',
                            borderColor: '#fbbf24',
                            transform: 'translateY(-4px)',
                          }
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    ))}
                  </Box>
                </Box>
              </Grid>

              {/* Quick Links */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#fbbf24',
                  }}
                >
                  Quick Links
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  {quickLinks.map((link, index) => (
                    <Box
                      key={index}
                      component="a"
                      href={link.href}
                      sx={{
                        color: 'rgba(255,255,255,0.7)',
                        textDecoration: 'none',
                        fontSize: '0.95rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        width: 'fit-content',
                        '&:hover': {
                          color: '#fbbf24',
                          transform: 'translateX(8px)',
                        },
                        '&::before': {
                          content: '"→"',
                          marginRight: '8px',
                          opacity: 0,
                          transition: 'opacity 0.3s ease',
                        },
                        '&:hover::before': {
                          opacity: 1,
                        }
                      }}
                    >
                      {link.name}
                    </Box>
                  ))}
                </Box>
              </Grid>

              {/* Get in Touch */}
              <Grid item xs={12} sm={6} md={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: '#fbbf24',
                  }}
                >
                  Get in Touch
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.7,
                    }}
                  >
                    📧 jeevanmaher@example.com
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.7,
                    }}
                  >
                    📍 Sillod , Maharashtra, India
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255,255,255,0.7)',
                      lineHeight: 1.7,
                    }}
                  >
                    💼 Available for freelance projects
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)' }} />

          {/* Bottom Footer */}
          <Box 
            sx={{ 
              py: 3,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography 
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.6)',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: '0.9rem',
              }}
            >
              © {new Date().getFullYear()} Jeevan Maher. Made with <Heart size={16} color="#ff6b6b" fill="#ff6b6b" /> in India
            </Typography>
            
            {/* Scroll to Top Button */}
            <IconButton
              onClick={scrollToTop}
              sx={{
                backgroundColor: 'rgba(251,191,36,0.1)',
                color: '#fbbf24',
                border: '2px solid rgba(251,191,36,0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#fbbf24',
                  color: '#1a1a2e',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(251,191,36,0.3)',
                }
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