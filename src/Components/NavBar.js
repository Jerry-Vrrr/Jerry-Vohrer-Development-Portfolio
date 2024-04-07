import React from 'react';
import '../styles/NavBar.scss';
import jvlogo from '../jv-logo.png';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <ul className='nav-buttons'>
        <a href="#home">
            <img src={jvlogo} className="jv-logo" alt="logo" />
        </a> 
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        <li>
            <a href="#contact">Contact</a>
        </li>
    </ul>
    </nav>
  );
};

export default NavBar;
