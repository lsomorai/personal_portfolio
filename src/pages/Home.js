import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; 
import BackgroundAnimation from '../components/BackgroundAnimation';
import '../styles/Home.css';

const Home = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  return (
    <section id="home" className="home">
      <BackgroundAnimation />
      <motion.div 
        className="home-content" 
        variants={staggerContainer} 
        initial="hidden" 
        animate="visible"
      >
        <motion.img 
          src="/assets/profilepic.jpg" 
          alt="Lucien Somorai" 
          className="profile-picture"
          variants={fadeInUp} 
          animate={{
            scale: [1, 1.1, 1], 
          }}
          transition={{
            duration: 6, 
            repeat: Infinity, 
            ease: "linear", 
          }}
        />
        <motion.h1 variants={fadeInUp}>Lucien Somorai</motion.h1>
        <motion.div className="paragraph-text" variants={fadeInUp}>
          <p>
            👋 Hi there, I’m Lucien!  
            I’m currently a master’s student in software engineering at the University of Calgary, graduating this April.
          </p>
          <p>
            I’m passionate about building efficient, user-friendly systems, whether it’s crafting intuitive frontends, 
            developing robust backends, or tackling full-stack challenges. I’m especially drawn to machine learning and AI, 
            exploring how they can solve complex problems and create smarter solutions. Topics like natural language processing, computer vision, 
            reinforcement learning, and AI-driven decision-making fascinate me. (Still learning, but that’s the fun part, right?)
          </p>
          <p>
            When I’m not coding, you’ll probably find me hitting shuttles on the badminton court, stepping to the rhythm on Pump It Up, 
            or exploring creative ways to grow both personally and professionally. I’m also a Toastmasters member working on sharpening my 
            communication skills—because connecting with people is just as important as writing clean code!
          </p>
          <p>
            Feel free to reach out to collaborate, share ideas, or just have a friendly chat.
          </p>
        </motion.div>
        <motion.div className="social-links" variants={fadeInUp}>
          <a href="https://github.com/lsomorai" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" /> GitHub
          </a>
          <a href="mailto:lucien.somorai@ucalgary.ca">
            <FaEnvelope className="icon" /> Email
          </a>
          <a href="https://linkedin.com/in/lucien-somorai/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;