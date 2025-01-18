import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal.js';
import '../styles/Projects.css';

const projects = [
  {
    title: 'MediCal',
    description: 'MediCal is a comprehensive healthcare management system designed to streamline patient, doctor, and administrative workflows.',
    githubLink: 'https://github.com/lsomorai/medical-frontend',
    image: '/assets/medical.png', // Path to project image
  },
  {
    title: 'AcmePlex',
    description: 'AcmePlex is a movie theatre ticket reservation application allowing users to search for movies, select showtimes, choose seats, and make payments for tickets.',
    githubLink: 'https://github.com/lsomorai/AcmePlex-Movie-Theater-Ticket-Reservation-App',
    image: '/assets/acmeplex.png', // Path to project image
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onClick={() => openModal(project)}
          />
        ))}
      </div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;