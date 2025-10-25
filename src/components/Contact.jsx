import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  TextField, 
  Button, 
  Grid,
  Paper,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "jeevanmaherji@example.com",
      link: "mailto:jeevanmaher@example.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 762026XXXX",
      link: "tel:+91XXXXXXXXXX"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Chhatrapati Sambhajinagar, Maharashtra, Palshi 431135",
      link: "#"
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, url: "https://github.com/Jeevanmaher143", color: "#333" },
    { icon: <Linkedin size={24} />, url: "linkedin.com/in/jeevanmaher0102", color: "#0A66C2" },
    //{ icon: <Twitter size={24} />, url: "#", color: "#1DA1F2" },
    //{ icon: <Instagram size={22} />, url: "https://www.instagram.com/jeevanmaher_143?igsh=MWdpem4xYjF2cW5jcw==", label: "Instagram" },
  ];

  return (
    <Box 
      id="contact"
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
            GET IN TOUCH
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
            Contact Me
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
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Left Side - Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ height: "100%" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: "#212529",
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  color: "#6c757d",
                  mb: 4,
                  lineHeight: 1.7,
                }}
              >
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </Typography>

              {/* Contact Info Cards */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 4 }}>
                {contactInfo.map((info, index) => (
                  <Paper
                    key={index}
                    elevation={0}
                    component="a"
                    href={info.link}
                    sx={{
                      p: 2.5,
                      borderRadius: "15px",
                      border: "2px solid #e9ecef",
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      textDecoration: "none",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "#667eea",
                        transform: "translateX(8px)",
                        boxShadow: "0 8px 24px rgba(102, 126, 234, 0.15)",
                        "& .contact-icon": {
                          color: "#667eea",
                          transform: "scale(1.1)",
                        }
                      }
                    }}
                  >
                    <Box
                      className="contact-icon"
                      sx={{
                        color: "#6c757d",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: "#6c757d",
                          fontWeight: 600,
                          display: "block",
                          mb: 0.5,
                        }}
                      >
                        {info.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#212529",
                          fontWeight: 600,
                        }}
                      >
                        {info.value}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>

              {/* Social Links */}
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    color: "#6c757d",
                    mb: 2,
                    fontWeight: 600,
                  }}
                >
                  Follow me on:
                </Typography>
                <Box sx={{ display: "flex", gap: 2 }}>
                  {socialLinks.map((social, index) => (
                    <IconButton
                      key={index}
                      href={social.url}
                      target="_blank"
                      sx={{
                        backgroundColor: "#fff",
                        border: "2px solid #e9ecef",
                        color: "#6c757d",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          borderColor: social.color,
                          color: social.color,
                          transform: "translateY(-4px)",
                          boxShadow: `0 8px 16px ${social.color}30`,
                        }
                      }}
                    >
                      {social.icon}
                    </IconButton>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} md={7}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                borderRadius: "20px",
                background: "white",
                border: "2px solid #e9ecef",
              }}
            >
              <Box 
                component="form" 
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,
                }}
              >
                <TextField
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="outlined"
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#667eea',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#667eea',
                    },
                  }}
                />
                <TextField
                  label="Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#667eea',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#667eea',
                    },
                  }}
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  variant="outlined"
                  multiline
                  rows={6}
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      '&:hover fieldset': {
                        borderColor: '#667eea',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#667eea',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#667eea',
                    },
                  }}
                />
                <Button 
                  type="submit" 
                  variant="contained" 
                  size="large"
                  endIcon={<Send size={20} />}
                  sx={{ 
                    alignSelf: 'flex-start',
                    px: 4,
                    py: 1.5,
                    borderRadius: '50px',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    fontWeight: 700,
                    textTransform: 'none',
                    fontSize: '1rem',
                    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 32px rgba(102, 126, 234, 0.4)',
                    }
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Success Snackbar */}
      <Snackbar 
        open={openSnackbar} 
        autoHideDuration={4000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success" 
          sx={{ 
            width: '100%',
            borderRadius: '12px',
            fontWeight: 600,
          }}
        >
          Message sent successfully! I'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default Contact;