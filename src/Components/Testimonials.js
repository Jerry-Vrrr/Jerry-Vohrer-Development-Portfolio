import React from 'react';
import '../styles/Testimonials.scss';
import EG from '../EG.avif'
import mom from '../mom.png'
import bilo from '../bilo.png'
import potato from '../potato.png'



const Testimonials = () => {
  return (
   <div className='carousel'>
   <div className='review'>
      <h4>When you need a bit of ridiculousness taken very seriously, call Jerry...</h4>
      <label><img className='profile' src={potato}></img> Someone, someday ⭐️⭐️⭐️⭐️⭐️</label>
    </div>
    <div className='review'>
    <h4>Great With the cuddles, cheap with the snacks</h4>
    <label><img className='profile' src={bilo}></img> My cat, Bilo ⭐️⭐️⭐️  </label>
    </div>
    <div className='review'>
    <h4>So talented and extremely handsome. An all around catch.</h4>
    <label><img className='profile' src={mom}></img> My mom ⭐️⭐️⭐️⭐️⭐️</label>
    </div>
    <div className='review'>
    <h4>That looks great! Where'd you get the Frankenstein image?</h4>
    <label><img className='profile' src={EG}></img> Eric Gordon ⭐️⭐️⭐️⭐️⭐️</label>
    </div>
    <div className='review'>
      <h4>When you need a bit of ridiculousness taken very seriously, call Jerry...</h4>
      <label><img className='profile' src={potato}></img> Someone, someday ⭐️⭐️⭐️⭐️⭐️</label>
    </div>
    <div className='review'>
    <h4>Great With the cuddles, cheap with the snacks</h4>
    <label><img className='profile' src={bilo}></img> My cat, Bilo ⭐️⭐️⭐️  </label>
    </div>
    <div className='review'>
    <h4>So talented and extremely handsome. An all around catch.</h4>
    <label><img className='profile' src={mom}></img> My mom</label>
    </div>
    <div className='review'>
    <h4>That looks great! Where'd you get the Frankenstein image?</h4>
    <label><img className='profile' src={EG}></img> Eric Gordon ⭐️⭐️⭐️⭐️⭐️</label>
    </div>
   </div> 
  );
};

export default Testimonials;