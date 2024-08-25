import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import necessary icons
import '../styles/Footer.scss'; // Make sure you have the appropriate styling in Footer.scss

const Footer = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul className="footer-list">
        <li><a href="#home" className="footer-link">Home</a></li>
          <li><a href="#contact" className="footer-link">Contact</a></li>
          <li>
            <a href="mailto:Jerryvohrer@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="footer-icon" aria-label="Email" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jerry-vohrer/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="footer-icon" aria-label="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/software_dev_seo_specialists/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="footer-icon" aria-label="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://x.com/jerry_vohr16961" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="footer-icon" aria-label="Twitter" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Jerry-Vrrr" target="_blank" rel="noopener noreferrer">
              <FaGithub className="footer-icon" aria-label="GitHub" />
            </a>
          </li>  
        </ul>
        
      </nav>
      <br/> * Poke Frankie At Own Risk *
    </footer>
  );
};

export default Footer;
