import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin, Github, Code, Bot } from 'lucide-react';
import './Contact.css';

function Contact({ variant = 'manual' }) {
  const isAutomation = variant === 'automation';
  const recipientEmail = 'jeevanmaherji@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const subject = formData.name.trim() || 'Portfolio Contact';

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: subject,
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table',
        }),
      });

      if (!response.ok) {
        throw new Error('Message could not be sent.');
      }

      setShowSuccess(true);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setShowSuccess(false);
        setSubmitStatus('');
      }, 5000);
    } catch (error) {
      console.error(error);
      setShowSuccess(true);
      setSubmitStatus('error');
      setTimeout(() => {
        setShowSuccess(false);
        setSubmitStatus('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = isAutomation
    ? [
        {
          icon: Mail,
          title: "Email",
          value: recipientEmail,
          link: `mailto:${recipientEmail}`,
          color: "#67e8f9"
        },
        {
          icon: Phone,
          title: "Phone",
          value: "+91 7620267695",
          link: "tel:+917620267695",
          color: "#818cf8"
        },
        {
          icon: MapPin,
          title: "Location",
          value: "Sambhajinagar, Maharashtra 431135",
          link: "#",
          color: "#34d399"
        }
      ]
    : [
        {
          icon: Mail,
          title: "Email",
          value: recipientEmail,
          link: `mailto:${recipientEmail}`,
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
    <div
      className={`contact-section${isAutomation ? ' automation-contact-section' : ''}`}
      id="contact"
    >
      <div className="contact-bg-orb orb-1"></div>
      <div className="contact-bg-orb orb-2"></div>
      <div className="contact-bg-orb orb-3"></div>

      <div className="grid-pattern"></div>

      <div className="contact-shape shape-1"></div>
      <div className="contact-shape shape-2"></div>
      <div className="contact-shape shape-3"></div>
      <div className="contact-shape shape-4"></div>

      <div className="contact-container">
        <div className="contact-header">
          <div className="contact-overline">
            {isAutomation ? 'AUTOMATION CONNECT' : 'GET IN TOUCH'}
          </div>
          <h2 className="contact-title">
            {isAutomation ? 'Build Automation Together' : 'Contact Me'}
          </h2>
          <p className="contact-subtitle">
            {isAutomation
              ? 'For AI testing, Selenium, Playwright, Cypress, API automation, or CI/CD quality work, reach out and let us make testing faster.'
              : 'Have a project in mind or want to collaborate? Feel free to reach out!'}
          </p>
        </div>

        <div className="contact-content-wrapper">
          <div className="contact-left-section">
            <h3 className="contact-section-title">
              {isAutomation ? "Let's Automate" : "Let's Connect"}
            </h3>
            <p className="contact-section-description">
              {isAutomation
                ? 'Share your automation goals, flaky test issues, or QA workflow plans. I will help turn them into a clear testing system.'
                : "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
            </p>

            {isAutomation && (
              <div className="automation-contact-status">
                <span className="automation-status-dot"></span>
                <Bot size={17} />
                <span>Available for automation QA projects</span>
              </div>
            )}

            <div className="contact-cards-container">
              {contactInfo.map((info, index) => (
                <ContactCard key={index} info={info} index={index} />
              ))}
            </div>

            <div className="social-section">
              <p className="social-label">
                {isAutomation ? 'Automation profiles:' : 'Connect with me on:'}
              </p>
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <SocialButton key={index} social={social} index={index} />
                ))}
              </div>
            </div>
          </div>

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
                  placeholder={isAutomation ? 'Your name' : 'Enter your name'}
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
                  placeholder={isAutomation ? 'Your work email' : 'Enter your email'}
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
                  placeholder={
                    isAutomation
                      ? 'Tell me about your automation testing need...'
                      : 'Your message here...'
                  }
                />
              </div>

              <button type="submit" className="form-submit-button" disabled={isSubmitting}>
                <span>
                  {isSubmitting
                    ? 'Sending...'
                    : isAutomation
                      ? 'Send QA Request'
                      : 'Send Message'}
                </span>
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        {showSuccess && (
          <div className={`success-message ${submitStatus === 'error' ? 'error' : ''}`}>
            <div className="success-icon">{submitStatus === 'error' ? '!' : 'OK'}</div>
            {submitStatus === 'error'
              ? 'Message was not sent. Please try again or email me directly.'
              : 'Message sent. If this is the first submission, please confirm FormSubmit in your inbox once.'}
          </div>
        )}
      </div>
    </div>
  );
}

function ContactCard({ info, index }) {
  const Icon = info.icon;

  return (
    <a
      href={info.link}
      className={`contact-card contact-card-${index}`}
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
  const Icon = social.icon;

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-button social-button-${index}`}
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
