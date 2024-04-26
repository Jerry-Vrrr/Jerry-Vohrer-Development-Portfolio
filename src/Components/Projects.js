import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import '../styles/Projects.scss';
import js from '../icons8-js-50.png';
import react from '../icons8-react-native-48.png';
import rails from '../icons8-ruby-on-rails-32.png';
import ruby from '../icons8-ruby-programming-language-50.png';
import sass from '../icons8-sass-50.png';
import plantthumb from '../plant-thumb.png';
import recthumb from '../rec-thumb.png';
import aquaticthumb from '../aquatic-thumb.png';
import wakeythumb from '../wakey-thumb.png';
import foliothumb from '../folio-thumb.png'
import banana from '../bananastand-GOB-tmb.jpg'
import AquaModal from './AquaModal';

const Projects = React.forwardRef((props, ref) => {
  // Initialize a state object where each key represents a container's hover state
  const [hoverStates, setHoverStates] = useState({});

  // Handles the mouse enter event by setting the hover state to true for the container with id `id`
  const handleMouseEnter = (id) => {
    setHoverStates(prevState => ({ ...prevState, [id]: true }));
  };

  // Handles the mouse leave event by setting the hover state to false for the container with id `id`
  const handleMouseLeave = (id) => {
    setHoverStates(prevState => ({ ...prevState, [id]: false }));
  };

  // A helper function to check if a container with id `id` is hovered
  const isContainerHovered = (id) => {
    return hoverStates[id] || false;
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='projects' ref={ref}>
            <ProjectModal isOpen={isModalOpen} onClose={closeModal} aquaModal={AquaModal}>
      </ProjectModal>
      <h2>Some Thingama-hoodads On Which I Have Worked Quite Laboriously!</h2>
      <div className="container" >
      <div className="container-item" onClick={openModal}>
          <h3>Eelvis's Tank & Tetra<img src={ruby}></img><img src={rails}></img></h3>
          <p><strong>Bespoke P.O.S, inventory</strong><br/>  and appointment scheduling app, tailored for an aquarium suply & maintenance business. Hail to the kingfish, baby!</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('aquatic')}
            onMouseLeave={() => handleMouseLeave('aquatic')}
          >
            {isContainerHovered('aquatic') ? (
              <iframe
                src="https://www.youtube.com/embed/zQ8caaUxIvY?autoplay=1&mute=1&controls=0&showinfo=0&rel=0"
                title="Aquatic Video"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={aquaticthumb}
                alt="Aquatic Dreams Thumbnail"
              />
            )}
          </div>
          <div className='project-links'>
        <a href="">Deployed</a>
         <a href="">Presentation</a>
         <a href="">GitHub</a>
       </div>
        </div>
        <div className="container-item">
          <h3>Rec.Me<img src={react}></img><img src={js}></img><img src={sass}></img></h3>
          <p><strong>Music Recommendation App</strong> Gamified to test music knowledge and decision making. Can <i>you</i> get from Beyonce to Black Sabbath in 6 moves or less?</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('recMe')}
            onMouseLeave={() => handleMouseLeave('recMe')}
          >
            {isContainerHovered('recMe') ? (
              <iframe
                src="https://www.youtube.com/embed/LJAvswcowI8?autoplay=1&mute=1&controls=0&showinfo=0"
                title="Rec Me Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={recthumb}
                alt="Rec Me Thumbnail"
              />
            )}
          </div>
          <div className='project-links'>
        <a href="">Deployed</a>
         <a href="">Presentation</a>
         <a href="">GitHub</a>
       </div>
        </div>
        <div className="container-item">
          <h3>Plant Swapper<img src={react}></img><img src={ruby}></img><img src={rails}></img></h3>
          <p><strong>Plant Propagation Marketplace</strong> Chat via mobile with other plant heads and swap plants, seeds, and clippings from anywhere in the universe that FedEx delivers!</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('plantSwapper')}
            onMouseLeave={() => handleMouseLeave('plantSwapper')}
          >
            {isContainerHovered('plantSwapper') ? (
              <iframe
                src="https://www.youtube.com/embed/A6RAWMUp-7g?autoplay=1&mute=1&controls=0&showinfo=0"
                title="Plant Swapper Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={plantthumb}
                alt="Plant Swapper Thumbnail"
              />
            )}
          </div>
          <div className='project-links'>
         <a href="">Deployed</a>
         <a href="">Presentation</a>
        <a href="">GitHub</a>
      </div>
        </div>
      </div>
      <div className="container">
      <div className="container-item" onClick={openModal}>
      <h3>Wakey Wakey App<img src={ruby}></img><img src={rails}></img></h3>
          <p><strong>Scrape, Filter & Email</strong><br/>One day app, scrapes a gym website for daily workout, suggests equipment, pulls local weather and emails you bright an early.</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('wakey')}
            onMouseLeave={() => handleMouseLeave('wakey')}
          >
            {isContainerHovered('wakey') ? (
              <iframe
                src="https://www.youtube.com/embed/zeF_KB8g9WE?autoplay=1&mute=1&controls=0&showinfo=0&rel=0"
                title="Wakey Video"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={wakeythumb}
                alt="Wakey Thumbnail"
              />
            )}
          </div>
          <div className='project-links'>
        <a href="">Deployed</a>
         <a href="">Presentation</a>
         <a href="">GitHub</a>
       </div>
        </div>
        <div className="container-item">
          <h3>Killer Portfolio!<img src={react}></img><img src={js}></img><img src={sass}></img></h3>
          <p><strong>Check it out!</strong> <br/>100% custom JS, SASS and Animations. No Filler. Just Fun! Have you found all of the Easter Eggs yet?</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('folio')}
            onMouseLeave={() => handleMouseLeave('folio')}
          >
            {isContainerHovered('folio') ? (
              <iframe
                src="https://www.youtube.com/embed/pWnbUWdleWs?autoplay=1&mute=1&controls=0&showinfo=0"
                title="Folio Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={foliothumb}
                alt="Portfolio Thumbnail"
              />
            )}
          </div>
          <div className='project-links'>
        <a href="">Deployed</a>
         <a href="">Presentation</a>
         <a href="">GitHub</a>
       </div>
        </div>
        <div className="container-item">
          <h3>Banana Stand<img src={react}></img><img src={ruby}></img><img src={rails}></img></h3>
          <p><strong>Beachside Banana Stand</strong> <br/>Sell Bananas while you try to complete a 6th project worthy of filling this space. No open flames...</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('banana')}
            onMouseLeave={() => handleMouseLeave('banana')}
          >
            {isContainerHovered('banana') ? (
              <iframe
                src="https://www.youtube.com/embed/iBLJFigZm9o?autoplay=1&mute=1&controls=0&showinfo=0"
                title="banana Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={banana}
                alt="banana Thumbnail"
              />
            )}
          </div>
          <div className='project-links'>
         <a href="">Deployed</a>
         <a href="">Presentation</a>
        <a href="">GitHub</a>
      </div>
        </div>
      </div>
    </div>
);
});

export default Projects;
