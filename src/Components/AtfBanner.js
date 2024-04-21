import React, {useState} from 'react';
import '../styles/AtfBanner.scss';
import frankenstein from '../sexyfrankenstein_transparent.png';

const AtfBanner = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMonsterClick = () => {
    setIsClicked(previousState => !previousState)
  }
  const getFrankieClass = () => {
    return isClicked ? "frankie-clicked" : "frankie";
  };

  return (
    <div className="atf-banner" onClick={handleMonsterClick}>
      <div className="image-container" >
        <img className={getFrankieClass()} src={frankenstein} onClick={handleMonsterClick} alt="Sexy Frankenstein Image" />
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
