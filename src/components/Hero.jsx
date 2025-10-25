import React from "react";
import { Download, Code } from "lucide-react"; // Palette is no longer needed
import { Avatar, Box } from "@mui/material"; // <-- Import Avatar and Box

function Hero() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #5398a4ff 0%, #4b599fff 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "2rem 1rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: "80px",
        height: "80px",
        borderRadius: "20px",
        background: "rgba(251, 191, 36, 0.2)",
        transform: "rotate(45deg)",
      }} />

      <div style={{
        position: "absolute",
        bottom: "15%",
        left: "10%",
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.1)",
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        position: "relative",
        zIndex: 1,
      }}>
        <div style={{
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          alignItems: "center",
          gap: "3rem",
        }}>
          {/* Left Content */}
          <div style={{ flex: 1, color: "white" }}>
            <div style={{
              color: "#000000ff",
              fontWeight: 700,
              marginBottom: "0.5rem",
              fontSize: window.innerWidth < 640 ? "0.9rem" : "1.1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              Welcome to my portfolio
            </div>

            <h1 style={{
              fontWeight: 600,
              margin: "0 0 1rem 0",
              fontSize: window.innerWidth < 640 ? "2.5rem" : window.innerWidth < 1024 ? "3.5rem" : "5rem",
              lineHeight: 1.1,
              background: "linear-gradient(to right, #ffffff, #e0e7ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Hi, I'm Jeevan Maher
            </h1>

            <h2 style={{
              color: "#fbbf24",
              fontWeight: 600,
              margin: "0 0 1.5rem 0",
              fontSize: window.innerWidth < 640 ? "1.5rem" : "2.5rem",
            }}>
              Frontend Developer
            </h2>

            <p style={{
              fontSize: window.innerWidth < 640 ? "1rem" : "1.15rem",
              lineHeight: 1.8,
              marginBottom: "2rem",
              color: "rgba(255,255,255,0.95)",
              maxWidth: "600px",
            }}>
              A passionate frontend developer specializing in React and building
              responsive, user-friendly web applications. I love transforming ideas
              into clean, interactive interfaces with a focus on UI/UX design that
              ensures seamless user experiences.
            </p>

            <div style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
            }}>
              <a
                href="/jeevan-resume.pdf"
                download="jeevan-resume.pdf" // Added this based on our last conversation
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#fbbf24",
                  color: "#1f2937",
                  fontWeight: 700,
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 10px 30px rgba(251, 191, 36, 0.3)",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f59e0b";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 15px 40px rgba(251, 191, 36, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fbbf24";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(251, 191, 36, 0.3)";
                }}
              >
                <Download size={20} />
                Download Resume
              </a>

              <a
                href="#projects"
                style={{
                  color: "white",
                  border: "2px solid white",
                  fontWeight: 600,
                  padding: "1rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Code size={20} />
                View Projects
              </a>
            </div>
          </div>

          {/* Right Visual Element - Now with your photo */}
          <div style={{
            flex: window.innerWidth < 768 ? "0 0 auto" : 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: window.innerWidth < 768 ? "100%" : "auto",
            marginTop: window.innerWidth < 768 ? "2rem" : 0,
          }}>
            <Box // Changed from div to Box for better MUI integration with sx prop
              sx={{
                width: { xs: "250px", sm: "300px", lg: "400px" }, // Using MUI breakpoints
                height: { xs: "250px", sm: "300px", lg: "400px" }, // Using MUI breakpoints
                borderRadius: "50%",
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                animation: "float 3s ease-in-out infinite",
                // The @keyframes are global, so they don't need to be here
                "&::before": {
                  content: '""',
                  position: "absolute",
                  inset: "-20px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(251,191,36,0.2) 0%, rgba(245,158,11,0.2) 100%)",
                  animation: "pulse 2s ease-in-out infinite",
                }
              }}
            >
              {/* <Palette size={100} color="#1f2937" strokeWidth={1.5} /> */} {/* REMOVED THIS LINE */}
              <Avatar // <-- ADDED THIS
                alt="Jeevan Maher"
                src="/assets/jeevan.jpg" // <-- Your photo path (must be in public/assets)
                sx={{
                  width: '90%', // Adjust to fit perfectly within the circle
                  height: '90%',
                  objectFit: 'cover', // Ensures the image covers the area without distortion
                  border: '5px solid white', // Optional: adds a white border
                  boxShadow: '0 0 15px rgba(0,0,0,0.2)', // Optional: subtle shadow for the avatar itself
                }}
              />
            </Box>
          </div>
        </div>
      </div>
      {/* Global @keyframes can be moved to src/index.css or a global style file */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>
    </div>
  );
}

export default Hero;