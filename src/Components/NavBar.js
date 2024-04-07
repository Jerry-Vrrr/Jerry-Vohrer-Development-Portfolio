import React from 'react';
import '../styles/NavBar.scss';
import jvlogo from '../jvlogo1.png';
import HamburgerMenu from './HamburgerMenu';

const NavBar = () => {
  return (
    <nav className='nav-bar'>
                <a href="#home">
            <img src={jvlogo} className="jv-logo" alt="logo" />
        </a> 
      {/* <ul className='nav-buttons'>

        <li> */}
            <a className='nav-btn' href="#about">About</a>
        {/* </li>
        <li> */}
            <a className='nav-btn' href="#projects">Projects</a>
        {/* </li>
        <li> */}
            <a className='nav-btn' href="#contact">Contact</a>
        {/* </li>
    </ul> */}
    <HamburgerMenu />
    </nav>
  );
};

export default NavBar;
