
// export default ProjectModal;
import React, { useState } from 'react';
import '../styles/ProjectModal.scss'; 
// import AquaModal from './AquaModal';

const ProjectModal = ({ isOpen, onClose,  AquaModalComponent,  images }) => {
  const [featuredImage, setFeaturedImage] = useState(images && images[0]);
  if (!isOpen) return null;

  const handleThumbnailClick = (image) => {
    setFeaturedImage(image);
  };
  console.log(images)
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        <div className="image-gallery">
          <div className="featured-image">
            <img src={featuredImage} alt="Featured" />
          </div>
          <div className="thumbnail-container">
            {images.map((image, index) => (
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
        {isOpen && AquaModalComponent && <AquaModalComponent />} 
      </div>
    </div>
  );
};

export default ProjectModal;
