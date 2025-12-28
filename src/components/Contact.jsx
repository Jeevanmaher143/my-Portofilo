import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowSuccess(false), 4000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "jeevanmaherji@gmail.com",
      link: "mailto:jeevanmaherji@gmail.com",
      color: "#fbbf24"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7620267695",
      link: "tel:+917620267695",
      color: "#3b82f6"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sambhajinagar, Maharashtra 431135",
      link: "#",
      color: "#10b981"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      name: "GitHub",
      url: "https://github.com/Jeevanmaher143", 
      color: "#ffffff" 
    },
    { 
      icon: Linkedin, 
      name: "LinkedIn",
      url: "https://linkedin.com/in/jeevanmaher0102", 
      color: "#0A66C2" 
    },
    { 
      icon: Code, 
      name: "LeetCode",
      url: "https://leetcode.com/u/JeevanMaher0102/", 
      color: "#FFA116" 
    },
    { 
      icon: Code, 
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/jeevanmaher5408", 
      color: "#00EA64" 
    },
  ];

  return (
    <div className="contact-section" id="contact">
      {/* Animated Background Elements */}
      <div className="contact-bg-orb orb-1"></div>
      <div className="contact-bg-orb orb-2"></div>
      <div className="contact-bg-orb orb-3"></div>
      
      {/* Animated Grid Pattern */}
      <div className="grid-pattern"></div>
      
      {/* Floating Shapes */}
      <div className="contact-shape shape-1"></div>
      <div className="contact-shape shape-2"></div>
      <div className="contact-shape shape-3"></div>
      <div className="contact-shape shape-4"></div>

      <div className="contact-container">
        {/* Section Header */}
        <div className="contact-header">
          <div className="contact-overline">GET IN TOUCH</div>
          <h2 className="contact-title">Contact Me</h2>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content-wrapper">
          {/* Left Side - Contact Info */}
          <div className="contact-left-section">
            <h3 className="contact-section-title">Let's Connect</h3>
            <p className="contact-section-description">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact Info Cards */}
            <div className="contact-cards-container">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} index={index} />
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <p className="social-label">Connect with me on:</p>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <SocialButton key={index} social={social} index={index} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-right-section">
            <form className="contact-form-card" onSubmit={handleSubmit}>
              <div className="form-input-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-input-group">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-input-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="form-textarea"
                  placeholder="Your message here..."
                />
              </div>

              <button type="submit" className="form-submit-button">
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="success-message">
            <div className="success-icon">✓</div>
            Message sent successfully! I'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
}

function ContactCard({ info, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = info.icon;

  return (
    <a
      href={info.link}
      className={`contact-card contact-card-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--card-color': info.color,
      }}
    >
      <div className="contact-card-icon">
        <Icon size={24} />
      </div>
      <div className="contact-card-content">
        <div className="contact-card-title">{info.title}</div>
        <div className="contact-card-value">{info.value}</div>
      </div>
      <div className="contact-card-glow"></div>
    </a>
  );
}

function SocialButton({ social, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-button social-button-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        '--social-color': social.color,
      }}
    >
      <Icon size={20} />
      <span className="social-button-text">{social.name}</span>
    </a>
  );
}

export default Contact;