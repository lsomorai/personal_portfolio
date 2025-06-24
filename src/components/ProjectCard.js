import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectCard.css';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div
        className="project-image"
        style={{ backgroundImage: `url(${project.image})` }}
      ></div>
      <div className="project-text">
        <h3>{project.title}</h3>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
