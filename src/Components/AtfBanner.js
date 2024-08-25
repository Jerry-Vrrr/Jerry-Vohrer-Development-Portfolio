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
  HI, FRIENDS! I’M JERRY. <br />
  FULL STACK DEVELOPER. <br />
  I AM VERY SERIOUS! <br />
  ESPECIALLY ABOUT <br />
  VERY SILLY THINGS. <br />
  SUCH AS, WELL... <br />SEXY FRANKENSTEIN.
</h1>      </div>
    </div>
  );
};

export default AtfBanner;
