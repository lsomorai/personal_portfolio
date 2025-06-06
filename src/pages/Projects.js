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
  {
    title: 'StockEd',
    description: 'StockEd is a fun, competitive stock market simulation with real-time data, leaderboards, and challenges. Learn, trade, and compete with friends in a risk-free environment.',
    githubLink: 'https://github.com/lsomorai/stock-simulation',
    image: '/assets/stocked.png',
  },
  {
    title: 'Bike Sharing',
    description: 'Bike Sharing utilizes machine learning models to predict hourly bike rental demand, highlighting key factors like temperature, time, and season.',
    githubLink: 'https://github.com/lsomorai/Bike-Sharing-Demand',
    image: '/assets/bike.jpeg',
  },
  {
    title: 'New York Taxi',
    description: 'New York Taxi is a fare prediction project for New York City that uses Spark and machine learning models, identifying trip distance and time-related features as key determinants.',
    githubLink: 'https://github.com/lsomorai/New-York-Taxi',
    image: '/assets/taxi.jpg',
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
        <div className="project-row">
          {projects.slice(0, 3).map((project, index) => (
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
        </div>
        <div className="project-row">
          {projects.slice(3).map((project, index) => (
            <motion.div 
              key={index + 3}
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
        </div>
      </motion.div>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </section>
  );
};

export default Projects;