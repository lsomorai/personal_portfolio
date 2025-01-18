import React from 'react';
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

export default ProjectCard;