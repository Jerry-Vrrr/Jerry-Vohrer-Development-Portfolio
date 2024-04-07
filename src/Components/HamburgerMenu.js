import React, { useState } from 'react';
import '../styles/HamburgerMenu.scss';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the visibility of the navigation menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger menu */}
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation menu */}
      <nav className={`nav ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
