import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Code } from 'lucide-react';

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
      link: "mailto:jeevanmaherji@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7620267695",
      link: "tel:+917620267695"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Sambhajinagar, Maharashtra 431135",
      link: "#"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      name: "GitHub",
      url: "https://github.com/Jeevanmaher143", 
      color: "#333" 
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
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        {/* Section Header */}
        <div style={styles.header}>
          <div style={styles.overline}>GET IN TOUCH</div>
          <h2 style={styles.title}>Contact Me</h2>
          <p style={styles.subtitle}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div style={styles.contentWrapper}>
          {/* Left Side - Contact Info */}
          <div style={styles.leftSection}>
            <h3 style={styles.sectionTitle}>Let's Connect</h3>
            <p style={styles.sectionDescription}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            {/* Contact Info Cards */}
            <div style={styles.contactCardsContainer}>
              {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} />
              ))}
            </div>

            {/* Social Links */}
            <div style={styles.socialSection}>
              <p style={styles.socialLabel}>Connect with me on:</p>
              <div style={styles.socialGrid}>
                {socialLinks.map((social, index) => (
                  <SocialButton key={index} social={social} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div style={styles.rightSection}>
            <div style={styles.formCard}>
              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your name"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={styles.input}
                  placeholder="Enter your email"
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  style={styles.textarea}
                  placeholder="Your message here..."
                />
              </div>

              <button 
                onClick={handleSubmit}
                style={styles.submitButton}
              >
                <span>Send Message</span>
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div style={styles.successMessage}>
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}
      </div>
    </div>
  );
}

function ContactCard({ info }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = info.icon;

  return (
    <a
      href={info.link}
      style={{
        ...styles.contactCard,
        ...(isHovered ? styles.contactCardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        ...styles.contactIcon,
        color: isHovered ? '#667eea' : '#6c757d',
      }}>
        <Icon size={24} />
      </div>
      <div>
        <div style={styles.contactTitle}>{info.title}</div>
        <div style={styles.contactValue}>{info.value}</div>
      </div>
    </a>
  );
}

function SocialButton({ social }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        ...styles.socialButton,
        ...(isHovered ? {
          borderColor: social.color,
          color: social.color,
          transform: 'translateY(-4px)',
          boxShadow: `0 8px 16px ${social.color}30`,
        } : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon size={20} />
      <span style={styles.socialButtonText}>{social.name}</span>
    </a>
  );
}

const styles = {
  container: {
    padding: '80px 20px',
    background: 'linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%)',
    minHeight: '100vh',
    position: 'relative',
  },
  innerContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    marginBottom: '64px',
  },
  overline: {
    color: '#667eea',
    fontWeight: 700,
    fontSize: '0.9rem',
    letterSpacing: '0.15em',
    marginBottom: '8px',
  },
  title: {
    fontWeight: 800,
    fontSize: 'clamp(1.75rem, 5vw, 2.75rem)',
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1.2,
  },
  subtitle: {
    color: '#6c757d',
    maxWidth: '650px',
    margin: '0 auto',
    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
    lineHeight: 1.7,
    padding: '0 16px',
  },
  contentWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
    gap: '32px',
    marginBottom: '32px',
  },
  leftSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontWeight: 700,
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    color: '#212529',
    marginBottom: '16px',
  },
  sectionDescription: {
    color: '#6c757d',
    lineHeight: 1.7,
    marginBottom: '24px',
    fontSize: 'clamp(0.9rem, 2vw, 1rem)',
  },
  contactCardsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '32px',
  },
  contactCard: {
    padding: '20px',
    borderRadius: '12px',
    border: '2px solid #e9ecef',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  contactCardHover: {
    borderColor: '#667eea',
    transform: 'translateX(8px)',
    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.15)',
  },
  contactIcon: {
    transition: 'all 0.3s ease',
    flexShrink: 0,
  },
  contactTitle: {
    fontSize: '0.75rem',
    color: '#6c757d',
    fontWeight: 600,
    marginBottom: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  },
  contactValue: {
    fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
    color: '#212529',
    fontWeight: 600,
    wordBreak: 'break-word',
  },
  socialSection: {
    marginTop: 'auto',
  },
  socialLabel: {
    fontSize: '0.9rem',
    color: '#6c757d',
    fontWeight: 600,
    marginBottom: '16px',
  },
  socialGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))',
    gap: '12px',
  },
  socialButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '12px 16px',
    borderRadius: '10px',
    border: '2px solid #e9ecef',
    backgroundColor: 'white',
    color: '#6c757d',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '0.85rem',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  socialButtonText: {
    fontSize: '0.85rem',
  },
  rightSection: {
    display: 'flex',
    flexDirection: 'column',
  },
  formCard: {
    padding: 'clamp(24px, 5vw, 32px)',
    borderRadius: '20px',
    backgroundColor: 'white',
    border: '2px solid #e9ecef',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: 600,
    color: '#495057',
  },
  input: {
    padding: '14px 16px',
    borderRadius: '12px',
    border: '2px solid #e9ecef',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease',
    backgroundColor: 'white',
  },
  textarea: {
    padding: '14px 16px',
    borderRadius: '12px',
    border: '2px solid #e9ecef',
    fontSize: '1rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'all 0.3s ease',
    resize: 'vertical',
    backgroundColor: 'white',
  },
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '16px 32px',
    borderRadius: '50px',
    border: 'none',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    fontWeight: 700,
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)',
    transition: 'all 0.3s ease',
    alignSelf: 'flex-start',
  },
  successMessage: {
    position: 'fixed',
    bottom: '32px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '16px 32px',
    borderRadius: '12px',
    backgroundColor: '#10b981',
    color: 'white',
    fontWeight: 600,
    fontSize: '0.95rem',
    boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
    zIndex: 1000,
    maxWidth: '90%',
    textAlign: 'center',
  },
};

// Add interactive styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    input:focus, textarea:focus {
      border-color: #667eea !important;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(102, 126, 234, 0.4) !important;
    }
    
    button:active {
      transform: translateY(0);
    }
    
    @media (max-width: 768px) {
      input, textarea {
        font-size: 16px !important;
      }
    }
  `;
  if (!document.head.querySelector('style[data-contact-styles]')) {
    styleSheet.setAttribute('data-contact-styles', 'true');
    document.head.appendChild(styleSheet);
  }
}

export default Contact;