import React from 'react';
import '../styles/ProjectModal.scss'; 
import AquaModal from './AquaModal';

const ProjectModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close-btn" onClick={onClose}>&times;</button>

        {children}
        {/* If you want to render AquaModal conditionally based on a prop, use isOpen or any other appropriate prop */}
        {isOpen && <AquaModal />} 
      </div>
    </div>
  );
};

export default ProjectModal;