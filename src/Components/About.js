import React from 'react';
import '../styles/About.scss';

const About = React.forwardRef((props, ref) => {
  return (
    <div className='about' ref={ref}>
      
        <strong>At the age of twelve I wanted to be the clerk at a video store...</strong>
        <p>
        I wasn't born an overachiever, but I'm making up for lost time. I'm constantly seeking new ways to learn and improve, devouring three books weekly and refining my productivity daily, both personally and professionally. My days are filled with challenging projects until evening, followed by personal pursuits that push my limits until I unwind like everyone else.. by eating spaghetti in bed with my cat around 8:30 pm.
        <br/><br/>
        Starting each day with a rigorous workout, I seize every opportunity for physical activity—whether during lunch breaks or while pondering complex problems post-work. By embracing more walking, biking, and reflection time, I've even given up my car. Leaving the US to learn Spanish reflects my passion for learning and connecting globally.
        <br/><br/>
        I've shed anything that doesn't align with my goals or values, driven by an unwavering commitment to achieving continuous improvement. Some may view my dedication as extreme, but I embrace this intensity in my relentless pursuit of success.

      </p>
      <i>Boy am I glad Blockbuster went under...</i>

    </div>
  );
});

export default About;
