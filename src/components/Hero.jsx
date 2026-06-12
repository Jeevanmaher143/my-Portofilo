import React from "react";
import { Download, Code } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* bg orbs — decorative, aria hidden */}
      <div className="hero-orb hero-orb-1" aria-hidden="true" />
      <div className="hero-orb hero-orb-2" aria-hidden="true" />

      {/* floating geometry */}
      <div className="hero-geo hero-geo-1" aria-hidden="true" />
      <div className="hero-geo hero-geo-2" aria-hidden="true" />
      <div className="hero-geo hero-geo-3" aria-hidden="true" />

      <div className="hero-container">

        {/* ── LEFT: content ── */}
        <div className="hero-content">
          <span className="hero-tag">Welcome to my portfolio</span>

          <h1 className="hero-title">
            Hi, I'm{" "}
            <span className="hero-name">Jeevan Maher</span>
          </h1>

          <h2 className="hero-sub">
            <span className="hero-sub-line" aria-hidden="true" />
            I am a Software Tester
          </h2>

          <p className="hero-desc">
            Detail-oriented Software Tester with strong knowledge of manual testing,
            functional testing, regression testing, and bug reporting.
            Passionate about ensuring software quality and delivering reliable,
            high-performance applications.
          </p>

          <div className="hero-actions">
            <a href="/jeevan-resume.pdf" download className="btn-primary">
              <Download size={18} aria-hidden="true" />
              Download Resume
            </a>
            <a href="#projects" className="btn-outline">
              <Code size={18} aria-hidden="true" />
              View Projects
            </a>
          </div>
        </div>

        {/* ── RIGHT: image ── */}
        <div className="hero-img-col" aria-hidden="true">
          <div className="hi-wrap">
            {/* orbit rings */}
            <div className="hi-ring hi-r1" />
            <div className="hi-ring hi-r2" />
            <div className="hi-ring hi-r3" />

            {/* glow */}
            <div className="hi-glow" />

            {/* circular photo */}
            <div className="hi-photo">
              <img
                src="/assets/jeevan.jpg"
                alt="Jeevan Maher"
                width="290"
                height="290"
                fetchpriority="high"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* particles */}
            <span className="hi-dot hi-dot-1" />
            <span className="hi-dot hi-dot-2" />
            <span className="hi-dot hi-dot-3" />
            <span className="hi-dot hi-dot-4" />
          </div>
        </div>

      </div>
    </section>
  );
}
