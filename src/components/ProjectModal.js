import React from 'react';
import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa'; 
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="project-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link"> 
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
  );
};

ProjectModal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ProjectModal;