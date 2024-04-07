import React from 'react';
import frankenstein from '../sexyfrankenstein_transparent.png';

const AtfBanner = () => {
  return (
    <div className="atf-banner">
      <div className="image-container">
        <img src={frankenstein} alt="Banner Image" />
      </div>
      <div className="text-container">
        <h1>Sexy Frankenstein Likes to Code</h1>
      </div>
    </div>
  );
};

export default AtfBanner;
