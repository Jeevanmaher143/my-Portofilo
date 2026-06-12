import React from "react";
import { Download, Code } from "lucide-react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/* Animated Background Orbs */}
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      {/* Floating Geometric Shapes */}
      <div className="float-shape shape-1"></div>
      <div className="float-shape shape-2"></div>
      <div className="float-shape shape-3"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">
          <span className="hero-tag">Welcome to my portfolio</span>

          <h1 className="hero-title">
            Hi, I'm <span>Jeevan Maher</span>
          </h1>

          <h2 className="hero-subtitle">
            I am a Software Tester
          </h2>

          <p className="hero-desc">
            Detail-oriented Software Tester with strong knowledge of manual testing,
            functional testing, regression testing, and bug reporting. 
            I am passionate about ensuring software quality and delivering reliable, 
            high-performance applications.
          </p>

          <div className="hero-buttons">
            <a href="/jeevan-resume.pdf" download className="btn-primary">
              <Download size={18} /> Download Resume
            </a>

            <a href="#projects" className="btn-outline">
              <Code size={18} /> View Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE WITH ADVANCED ANIMATIONS */}
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>
            
            <div className="glow-pulse"></div>

            <div className="image-ring">
              <img src="/assets/jeevan.jpg" alt="Jeevan Maher" />
            </div>

            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
            <div className="particle particle-3"></div>
            <div className="particle particle-4"></div>
            <div className="particle particle-5"></div>
            <div className="particle particle-6"></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;