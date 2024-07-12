import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './styles/App.css';
import NavBar from './Components/NavBar';
import AtfBanner from './Components/AtfBanner';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';
import About from './Components/About';

function App() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const location = useLocation();


  // General function to scroll to a specific ref
  const scrollToRef = (ref) => {
    if (ref.current) {
      const offset = 7; // Height of the fixed navbar or any other offset you need
      const y = ref.current.getBoundingClientRect().top + window.scrollY - offset;
  
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  
  

  useEffect(() => {
    // Scroll based on the pathname
    switch(location.pathname) {
      case '/about':
        scrollToRef(aboutRef);
        break;
      case '/projects':
        scrollToRef(projectsRef);
        break;
      default:
        // Optionally handle other paths or do nothing
        break;
    }
  }, [location]);

  return (
      <div className="App">
        <NavBar scrollToRef={scrollToRef} aboutRef={aboutRef} projectsRef={projectsRef} />
        <AtfBanner />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Testimonials />
      </div>
  );
}

export default App;
