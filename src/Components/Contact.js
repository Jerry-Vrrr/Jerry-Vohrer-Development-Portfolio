import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa'; // Import necessary icons
import '../styles/Contact.scss';
import Jerry from '../JERRY.png';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2><img className='abba' src={Jerry} alt="Jerry logo" /></h2>
      <ul className="contact-list">
        <li>
          <a href="mailto:Jerryvohrer@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jerry-vohrer/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/software_dev_seo_specialists/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icon" />
          </a>
        </li>
        <li>
          <a href="https://x.com/jerry_vohr16961" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="icon" />
          </a>
        </li>
        <li>
          <a href="https://github.com/Jerry-Vrrr" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </li>
      </ul>
    </div> 
  );
};

export default Contact;
