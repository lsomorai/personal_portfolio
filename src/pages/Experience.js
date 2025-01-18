import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../styles/Experience.css";
import ExperienceModal from "../components/ExperienceModal";

function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

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

  return (
    <section id="experience" className="experience">
      <h1>Experience</h1>
      <VerticalTimeline lineColor="#1d3557">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={exp.date}
            iconStyle={{ background: "#1d3557", color: "#fff" }}
            onTimelineElementClick={() => openModal(exp)}
          >
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
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