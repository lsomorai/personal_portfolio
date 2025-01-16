import React from "react";
import "../styles/Modal.css";

function ProjectModal({ project, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} />
        <p>{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
      </div>
    </div>
  );
}

export default ProjectModal;