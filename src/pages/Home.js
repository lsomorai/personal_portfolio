import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import CursorAnimation from '../components/CursorAnimation';
import '../styles/Home.css';

const Home = () => {
  return (
    <section id="home" className="home">
      <CursorAnimation />
      <div className="home-content">
        <img src="/assets/profilepic.jpg" alt="Lucien Somorai" className="profile-picture" />
        <h1>Lucien Somorai</h1>
        <p>Software Engineer | Aspiring Leader | Lifelong Learner</p>
        <div className="social-links">
          <a href="https://github.com/lsomorai" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="mailto:lucien.somorai@ucalgary.ca">
            <FaEnvelope className="icon" /> Email
          </a>
          <a href="https://linkedin.com/in/lucien-somorai/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;