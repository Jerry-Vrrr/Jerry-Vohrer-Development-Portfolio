import React, { useState, useEffect } from 'react';
import '../styles/About.scss';

const About = React.forwardRef((props, ref) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Check the screen size and determine if it's mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='about' ref={ref}>
      <strong>At age twelve, I dreamt of being a video store clerk</strong>
      <p>
        I wasn't born an overachiever, but I'm making up for lost time. I constantly seek new ways to learn and improve, devouring a few books weekly and refining my personal & professional productivity.
        {isMobile && !isExpanded && (
          <>
            <button className="view-more" onClick={toggleContent}>View More</button>
          </>
        )}
      </p>
      {(!isMobile || isExpanded) && (
        <p>
          My work day as the company's sole full stack developer is filled with demanding projects aimed at automation, removing redundancy, improving efficiency and productivity companywide so we can provide more value to our clients and stay in the black financially. I then load my evenings with personal pursuits that similarly challenge me, whether that's refining my Spanish language skills or working on portfolio projects until I unwind like everyone else... by eating spaghetti in bed with my cat.
          <br/>      <i>Boy am I glad Blockbuster went under...</i>

        </p>
        
      )}
      {isMobile && isExpanded && (
        <button className="view-more" onClick={toggleContent}>View Less</button>
      )}
    </div>
  );
});

export default About;
