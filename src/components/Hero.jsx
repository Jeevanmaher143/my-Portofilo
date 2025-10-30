import React from "react";
import { Download, Code } from "lucide-react";

function Hero() {
  return (
    <div style={{
      background: "linear-gradient(135deg, #e0f2f7 0%, #f0e6ff 100%)",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      padding: "1rem",
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
        background: "radial-gradient(circle at 20% 50%, rgba(83,152,164,0.1) 0%, transparent 50%)",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute",
        top: "10%",
        right: "5%",
        width: window.innerWidth < 640 ? "40px" : "80px",
        height: window.innerWidth < 640 ? "40px" : "80px",
        borderRadius: "20px",
        background: "rgba(251, 191, 36, 0.15)",
        transform: "rotate(45deg)",
      }} />

      <div style={{
        position: "absolute",
        bottom: "15%",
        left: "10%",
        width: window.innerWidth < 640 ? "30px" : "60px",
        height: window.innerWidth < 640 ? "30px" : "60px",
        borderRadius: "50%",
        background: "rgba(83, 152, 164, 0.15)",
      }} />

      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        width: "100%",
        position: "relative",
        zIndex: 1,
        padding: window.innerWidth < 640 ? "0 0.5rem" : "0 1rem",
      }}>
        <div style={{
          display: "flex",
          flexDirection: window.innerWidth < 768 ? "column" : "row",
          alignItems: "center",
          gap: window.innerWidth < 640 ? "2rem" : "3rem",
        }}>
          {/* Left Content */}
          <div style={{ 
            flex: 1, 
            color: "#1f2937",
            textAlign: window.innerWidth < 640 ? "center" : "left",
            width: "100%",
          }}>
            <div style={{
              color: "#5398a4",
              fontWeight: 700,
              marginBottom: "0.5rem",
              fontSize: window.innerWidth < 640 ? "0.75rem" : "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}>
              Welcome to my portfolio
            </div>

            <h1 style={{
              fontWeight: 700,
              margin: "0 0 0.75rem 0",
              fontSize: window.innerWidth < 480 ? "2rem" : window.innerWidth < 768 ? "2.5rem" : window.innerWidth < 1024 ? "3.5rem" : "4.5rem",
              lineHeight: 1.2,
              color: "#1f2937",
            }}>
              Hi, I'm Jeevan Maher
            </h1>

            <h2 style={{
              color: "#f59e0b",
              fontWeight: 600,
              margin: "0 0 1rem 0",
              fontSize: window.innerWidth < 480 ? "1.25rem" : window.innerWidth < 768 ? "1.5rem" : "2rem",
            }}>
              Frontend Developer
            </h2>

            <p style={{
              fontSize: window.innerWidth < 480 ? "0.9rem" : window.innerWidth < 768 ? "1rem" : "1.1rem",
              lineHeight: 1.7,
              marginBottom: window.innerWidth < 640 ? "1.5rem" : "2rem",
              color: "#4b5563",
              maxWidth: window.innerWidth < 768 ? "100%" : "600px",
              margin: window.innerWidth < 640 ? "0 auto 1.5rem" : "0 0 2rem 0",
            }}>
              A passionate frontend developer specializing in React and building
              responsive, user-friendly web applications. I love transforming ideas
              into clean, interactive interfaces with a focus on UI/UX design that
              ensures seamless user experiences.
            </p>

            <div style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: window.innerWidth < 640 ? "center" : "flex-start",
            }}>
              <a
                href="/jeevan-resume.pdf"
                download="jeevan-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: "#fbbf24",
                  color: "#1f2937",
                  fontWeight: 700,
                  padding: window.innerWidth < 640 ? "0.75rem 1.5rem" : "1rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 4px 15px rgba(251, 191, 36, 0.3)",
                  transition: "all 0.3s ease",
                  border: "none",
                  cursor: "pointer",
                  fontSize: window.innerWidth < 640 ? "0.9rem" : "1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f59e0b";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 6px 20px rgba(251, 191, 36, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fbbf24";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 15px rgba(251, 191, 36, 0.3)";
                }}
              >
                <Download size={window.innerWidth < 640 ? 16 : 20} />
                Download Resume
              </a>

              <a
                href="#projects"
                style={{
                  color: "#5398a4",
                  border: "2px solid #5398a4",
                  fontWeight: 600,
                  padding: window.innerWidth < 640 ? "0.75rem 1.5rem" : "1rem 2rem",
                  borderRadius: "50px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "all 0.3s ease",
                  backgroundColor: "transparent",
                  cursor: "pointer",
                  fontSize: window.innerWidth < 640 ? "0.9rem" : "1rem",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(83, 152, 164, 0.1)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Code size={window.innerWidth < 640 ? 16 : 20} />
                View Projects
              </a>
            </div>
          </div>

          {/* Right Visual Element - Avatar */}
          <div style={{
            flex: window.innerWidth < 768 ? "0 0 auto" : 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: window.innerWidth < 768 ? "100%" : "auto",
            marginTop: window.innerWidth < 768 ? "1rem" : 0,
          }}>
            <div style={{
              width: window.innerWidth < 480 ? "200px" : window.innerWidth < 768 ? "250px" : window.innerWidth < 1024 ? "300px" : "350px",
              height: window.innerWidth < 480 ? "200px" : window.innerWidth < 768 ? "250px" : window.innerWidth < 1024 ? "300px" : "350px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
              animation: "float 3s ease-in-out infinite",
            }}>
              <div style={{
                content: '""',
                position: "absolute",
                inset: window.innerWidth < 640 ? "-10px" : "-15px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(251,191,36,0.15) 0%, rgba(245,158,11,0.15) 100%)",
                animation: "pulse 2s ease-in-out infinite",
              }} />
              
              <img
                alt="Jeevan Maher"
                src="/assets/jeevan.jpg"
                style={{
                  width: '90%',
                  height: '90%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: window.innerWidth < 640 ? '3px solid white' : '5px solid white',
                  boxShadow: '0 0 15px rgba(0,0,0,0.2)',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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