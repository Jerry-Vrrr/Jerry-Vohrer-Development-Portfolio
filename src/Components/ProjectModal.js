import React from 'react';
import '../styles/ProjectModal.scss'; 

const ProjectModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
};

export default ProjectModal;