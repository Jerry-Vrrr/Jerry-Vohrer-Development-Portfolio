import '../styles/NavBar.scss';
import jvlogo from '../jvlogo1.png';
import HamburgerMenu from './HamburgerMenu';
import React, { useState, useEffect } from 'react';

const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const onScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []); 

  return scrollPos;
};

const NavBar = () => {

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [hidden, setHidden] = useState(false);
  const scrollPos = useScrollPosition();

  useEffect(() => {
    if (scrollPos > lastScrollTop) {
      setHidden(true);
    } else if (scrollPos < lastScrollTop) {
      setHidden(false);
    }
    setLastScrollTop(scrollPos);
  }, [scrollPos, lastScrollTop]);

  return (
    <nav className={`nav-bar ${hidden ? 'hidden' : ''}`}>
                <a href="/">
            <img src={jvlogo} className="jv-logo" alt="logo" />
        </a> 
            <a className='nav-btn' href="/about">About</a>
            <a className='nav-btn' href="/projects">Projects</a>
            <a className='nav-btn' href="/contact">Contact</a>
    <HamburgerMenu />
    </nav>
  );
};

export default NavBar;
