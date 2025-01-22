import React, { useState, useRef } from 'react';
import { motion, useInView  } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal.js';
import '../styles/Projects.css';

const projects = [
  {
    title: 'MediCal',
    description: 'MediCal is a comprehensive healthcare management system designed to streamline patient, doctor, and administrative workflows.',
    githubLink: 'https://github.com/lsomorai/medical-frontend',
    image: '/assets/medical.png', 
  },
  {
    title: 'AcmePlex',
    description: 'AcmePlex is a movie theatre ticket reservation application allowing users to search for movies, select showtimes, choose seats, and make payments for tickets.',
    githubLink: 'https://github.com/lsomorai/AcmePlex-Movie-Theater-Ticket-Reservation-App',
    image: '/assets/acmeplex.png',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false }); 

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <motion.h1 
        variants={fadeInUp} 
        initial="hidden" 
        animate={isInView ? 'visible' : 'hidden'} 
      >
        Projects
      </motion.h1>
      <motion.div 
        className="project-cards" 
        variants={staggerContainer} 
        initial="hidden" 
        animate={isInView ? 'visible' : 'hidden'} 
      >
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp} 
            initial="hidden" 
            animate={isInView ? 'visible' : 'hidden'} 
          >
            <ProjectCard
              project={project}
              onClick={() => openModal(project)}
            />
          </motion.div>
        ))}
      </motion.div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;