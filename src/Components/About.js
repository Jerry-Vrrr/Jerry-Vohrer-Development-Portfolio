import React, { useState } from 'react';
import '../styles/About.scss';

const About = React.forwardRef((props, ref) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='about' ref={ref}>
      <strong>At age twelve, I dreamt of being a video store clerk</strong>
      <p>
        I wasn't born an overachiever, but I'm making up for lost time. I constantly seek new ways to learn and improve, devouring a few books weekly and refining my personal & professional productivity.
        {!isExpanded && (
          <span>...</span>
        )}
        {isExpanded && (
          <span>
            {' '}
            My work day as the company's sole full stack developer is filled with demanding projects aimed at automation, removing redundancy, improving efficiency and productivity companywide so we can provide more value to our clients and stay in the black financially. I then load my evenings with personal pursuits that similarly challenge me, whether that's refining my Spanish language skills or working on portfolio projects until I unwind like everyone else... by eating spaghetti in bed with my cat.
            <br/> <i>Boy am I glad Blockbuster went under...</i>
          </span>
          
        )}
      </p>
      <button className="view-more" onClick={toggleContent}>
        {isExpanded ? 'View Less' : 'View More'}
      </button>
    </div>
  );
});

export default About;
