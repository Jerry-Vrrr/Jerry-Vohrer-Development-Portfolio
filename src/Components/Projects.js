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
import pitthumb from '../pit-thumb.png';
import foliothumb from '../folio-thumb.png'
import banana from '../bananastand-GOB-tmb.jpg'
import AquaModal from './AquaModal';

const Projects = React.forwardRef((props, ref) => {

 const aquaImages = [
    "https://agentestudio.com/uploads/ckeditor/pictures/1938/pos_design_8.png",
    "https://cdn.dribbble.com/users/2338294/screenshots/6846027/inventory_artwork_dribble_4x.jpg",
    "https://img.freepik.com/premium-vector/user-interface-entering-personal-information-login-into-website-account-concept-secure-login-password-protection_110633-1392.jpg"
  ]
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
            <ProjectModal isOpen={isModalOpen} onClose={closeModal}   AquaModalComponent={AquaModal} images={aquaImages}>
      </ProjectModal>
      <h2>My Work: Transforming Ideas into Solutions</h2>
      <h4 className='description'>Streamlining procedures and crafting innovative solutions to help businesses save time and money.</h4>
      <div className="container" >
      <div className="container-item" onClick={openModal}>
          <h3>Aquatic Dreams<img src={ruby}></img><img src={rails}></img></h3>
          <p><strong>P.O.S.  Reporting</strong>, invoicing, inventory and data charting app, tailored for an aquarium supply & maintenance business to transition them from their O.G. paper model.</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('aquatic')}
            onMouseLeave={() => handleMouseLeave('aquatic')}
          >
            {isContainerHovered('aquatic') ? (
              <iframe
              src="https://www.youtube.com/embed/YKAAsrR1nFY?autoplay=1&mute=1&controls=0&showinfo=0&start=4"
              title="Aquatic Video"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={aquaticthumb}
                alt="Aquatic Dreams Thumbnail"
                style={{ transform: 'scale(1.16)' }}
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

      </div>
      <div className="container">
      <div className="container-item" onClick={openModal}>
      <h3>The Pit<img src={ruby}></img><img src={rails}></img></h3>
          <p><strong>Streamline Apricot SEO's Ops in this Hub or 'Pit' </strong><br/>Integrate CallRail, Google Analytics, and more into a unified dashboard. Automate forms and daily tasks to allow employees to focus on client success and revenue generation.</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('pit')}
            onMouseLeave={() => handleMouseLeave('pit')}
          >
            {isContainerHovered('pit') ? (
              <iframe
                src="https://www.youtube.com/embed/zeF_KB8g9WE?autoplay=1&mute=1&controls=0&showinfo=0&rel=0"
                title="pit Video"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={pitthumb}
                alt="pit Thumbnail"
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
          <p><strong>Plant Propagation Marketplace</strong> Chat via mobile with other plant heads, swap plants, seeds, & clippings from anywhere in the universe that FedEx delivers!</p>
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
    </div>
);
});

export default Projects;
