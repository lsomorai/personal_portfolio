import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import ExperienceModal from "../components/ExperienceModal";

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: true });

  const experiences = [
    {
      title: "Founding AI Engineer",
      company: "Maple AI Systems Inc.",
      date: "May 2025 - Present",
      description:
        "Leading development of generative and agentic AI features. Integrated LLM-backed tooling that reduced manual input by 35% while architecting scalable systems with vector databases and robust APIs.",
    },
    {
      title: "Full Stack Developer",
      company: "Vibes Meet LLC",
      date: "Feb 2025 - Present",
      description: "Re-engineered the React/Tailwind UI for 30% better responsiveness and optimised Django APIs with PostgreSQL queries to cut response times by 40% and enable bi-weekly releases.",
    },
    {
      title: "Master of Software Engineering",
      company: "University of Calgary",
      date: "Sep 2024 - Apr 2025",
      description: "Graduate studies focused on machine learning, advanced software architecture and large-scale data analytics.",
    },
    {
      title: "Bachelor of Computer Engineering",
      company: "Simon Fraser University",
      date: "Sep 2019 - Apr 2024",
      description: "Completed extensive coursework in data structures, algorithms, database systems, operating systems, software engineering and AI.",
    },
  ];

  const openModal = (experience) => setSelectedExperience(experience);
  const closeModal = () => setSelectedExperience(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <motion.h1
        variants={fadeInUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Experience
      </motion.h1>
      <VerticalTimeline lineColor="#1d3557">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={exp.date}
            iconStyle={{ background: "#1d3557", color: "#fff" }}
            onTimelineElementClick={() => openModal(exp)}
          >
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <h3>{exp.title}</h3>
              <h4>{exp.company}</h4>
            </motion.div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {selectedExperience && (
        <ExperienceModal experience={selectedExperience} onClose={closeModal} />
      )}
    </section>
  );
}

export default Experience;