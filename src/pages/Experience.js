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
      title: "Software Developer Intern",
      company: "Tech Corp",
      date: "May 2023 - Aug 2023",
      description: "Worked on developing scalable APIs and optimized performance.",
    },
    {
      title: "Teaching Assistant",
      company: "University of Calgary",
      date: "Sept 2024 - Dec 2024",
      description: "Assisted students in understanding software engineering concepts.",
    },
  ];

  const openModal = (experience) => setSelectedExperience(experience);
  const closeModal = () => setSelectedExperience(null);

  return (
    <section id="experience" className="experience">
      <h1>Experience</h1>
      <VerticalTimeline lineColor="#ffcc80">
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            date={exp.date}
            iconStyle={{ background: "#ffcc80", color: "#fff" }}
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