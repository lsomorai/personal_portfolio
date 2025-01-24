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
      title: "Master of Software Engineering",
      company: "University of Calgary",
      date: "Sep 2024 - Apr 2025",
      description: "",
    },
    {
      title: "Bachelor of Computer Engineering",
      company: "Simon Fraser University",
      date: "Sep 2019 - Apr 2024",
      description: "",
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