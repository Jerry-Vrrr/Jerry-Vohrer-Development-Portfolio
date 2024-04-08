import React from 'react';
import '../styles/AtfBanner.scss';
import frankenstein from '../sexyfrankenstein_transparent.png';

const AtfBanner = () => {
  return (
    <div className="atf-banner">
      <div className="image-container">
        <img className="frankie" src={frankenstein} alt="Banner Image" />
      </div>
      <div className="text-container">
      <h1>
  Hi, friends! I’m Jerry. <br />
  A full stack web developer. <br />
  I am VERY serious! <br />
  Especially about very, <br />
  very silly things. <br />
  Like Sexy Frankenstein.
</h1>      </div>
    </div>
  );
};

export default AtfBanner;
