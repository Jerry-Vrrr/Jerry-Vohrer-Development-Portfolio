import React from 'react';
import '../styles/About.scss';

const About = React.forwardRef((props, ref) => {
  return (
    <div className='about' ref={ref}>
      
        <strong>At age twelve, I dreamt of being a video store clerk</strong>
        <p>I wasn't born an overachiever, but I'm making up for lost time. I constantly seek new ways to learn and improve, devouring a few books weekly and refining my personal & professional productivity. </p>
       <p> My work day as the company's sole full stack developer is filled with demanding projects aimed at automation, removing redundancy, improving efficiency and productivity companywide so we can provide more value to our clients and stay in the black financially. I then load my evenings with personal pursuits that similarly challenge me, whether that's refining my spanish laguage skills or working on portfolio projects until I unwind like everyone else... by eating spaghetti in bed with my cat.</p>
      <i>Boy am I glad Blockbuster went under...</i>
    </div>
  );
});

export default About;
