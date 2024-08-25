import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './styles/App.css';
import NavBar from './Components/NavBar';
import AtfBanner from './Components/AtfBanner';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';  // Import the Footer component

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

      {location.pathname !== '/contact' && (
        <>
          <AtfBanner />
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
        </>
      )}
      
      {/* Routes for different paths */}
      <Routes>
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer will appear at the bottom of every page */}
      <Footer />
    </div>
  );
}

export default App;
