import React, { useState } from 'react';
import '../styles/Projects.scss';
import js from '../icons8-js-50.png';
import react from '../icons8-react-native-48.png';
import rails from '../icons8-ruby-on-rails-32.png';
import ruby from '../icons8-ruby-programming-language-50.png';
import sass from '../icons8-sass-50.png';

const Projects = () => {
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

  return (
    <div className='projects'>
      <h2>Some Things I've Worked Really Hard On!</h2>
      <div className="container">
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src="https://i9.ytimg.com/vi_webp/LJAvswcowI8/mqdefault.webp?v=627a86e7&sqp=CNzi-7AG&rs=AOn4CLCEdtRzqhk0x7k0jhJveEQfuknoYA"
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
          <p><strong>Plant Propagation Mobile Marketplace</strong> Chat with other plant heads and swap plants, seeds, and clippings from anywhere in the universe that FedEx delivers!</p>
          <div
            className="video-container"
            onMouseEnter={() => handleMouseEnter('plantSwapper')}
            onMouseLeave={() => handleMouseLeave('plantSwapper')}
          >
            {isContainerHovered('plantSwapper') ? (
              <iframe
                src="https://www.youtube.com/embed/A6RAWMUp-7g?autoplay=1&mute=1&controls=0&showinfo=0"
                title="Plant Swapper Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src="https://i9.ytimg.com/vi_webp/A6RAWMUp-7g/mqdefault.webp?v=661edf19&sqp=CMi_-7AG&rs=AOn4CLByS4Wrx5PFwWiyjyoDDkE18dHkeA"
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
        {/* ...additional container items */}
      </div>
    </div>
  );
};

export default Projects;
