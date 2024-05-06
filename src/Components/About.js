import React from 'react';
import '../styles/About.scss';

const About = React.forwardRef((props, ref) => {
  return (
    <div className='about' ref={ref}>
      
        <strong>At the age of twelve I wanted to be the clerk at a video store...</strong>
        <p>
        &emsp; I wasn't born an overachiever, but I'm making up for lost time. I find new ways to learn every day. I read 3 books per week and find ways to improve productivity 
        day over day in both my personal and professional life. My days generally transition from challenging work projects until clockout and then challenging personal projects until it's time to eat spaghetti in bed with my cat. Usually around 8:30pm...
        <br/>
        &emsp;I start every day with a challenging workout. I squeeze in another at lunch or while mulling over a complex problem after work.  
        I got rid of my car to increase my walking, biking, and reflection time. I left the US to learn Spanish, driven by a love of learning and to connect with more people. I don't drink and have been plant based for a few years now. I have given up anything that wasn't serving me, my goals or the world around me. 
        Some people see my habits as extreme, and that's ok. Maybe they are, but I would rather be extreme in my pursuit of being even one percent better than to be complacent.
      </p>
      <i>Boy am I glad Blockbuster went under...</i>

    </div>
  );
});

export default About;
