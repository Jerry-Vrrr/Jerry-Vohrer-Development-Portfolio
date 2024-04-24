import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import NavBar from './Components/NavBar';
import AtfBanner from './Components/AtfBanner';
import Projects from './Components/Projects';
import Testimonials from './Components/Testimonials';

function App() {
  const projectsRef = useRef(null);

  // Function to scroll to projects section
  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToProjects(); // Scroll to projects when component mounts
  }, []); // Empty dependency array ensures it runs only once after initial render

  return (
    <Router>
      <div className="App">
        <NavBar />
        <AtfBanner />
        {/* Scroll to scroll to this projects component here below */}
        <Projects ref={projectsRef} />
        <Routes></Routes>
        <Testimonials />
      </div>
    </Router>
  );
}

export default App;
