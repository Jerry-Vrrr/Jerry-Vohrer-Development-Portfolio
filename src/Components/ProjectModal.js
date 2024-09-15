import React, { useState, useEffect } from 'react';
import '../styles/ProjectModal.scss'; 
import github from '../github.png';
import play from '../play.png';
import linked from '../linked.png';

const ProjectModal = ({ isOpen, onClose, projectData }) => {
  const { title, description, images, links } = projectData || {};
  const [featuredImage, setFeaturedImage] = useState(images && images[0]);

    // Reset the featured image when projectData changes or modal is closed
    useEffect(() => {
      if (images && images.length > 0) {
        setFeaturedImage(images[0]); // Reset to the first image
      }
    }, [images]);

  if (!isOpen) return null;

  const handleThumbnailClick = (image) => {
    setFeaturedImage(image);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <div className="image-gallery">
          <div className="featured-image">
            <img src={featuredImage} alt="Featured" />
          </div>
          <div className="thumbnail-container">
            {images && images.map((image, index) => (
              <img 
                key={index} 
                src={image} 
                alt={`Thumbnail ${index}`} 
                onClick={() => handleThumbnailClick(image)}
                className={`thumbnail ${image === featuredImage ? 'selected' : ''}`}
              />
            ))}
          </div>
        </div>
        <div className='modal-content'>
          <h1 className='modal-title'>{title}</h1>
          <p>{description}</p>
        </div>
        <div className='modal-links'>
          {links && links[0] && (
            <a href={links[0]} target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          )}
          {links && links[1] && (
            <a href={links[1]} target="_blank" rel="noopener noreferrer">
              <img src={play} alt="Presentation" />
            </a>
          )}
          {links && links[2] && (
            <a href={links[2]} target="_blank" rel="noopener noreferrer">
              <img src={linked} alt="LinkedIn" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
