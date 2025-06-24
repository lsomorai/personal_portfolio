import React from "react";
import PropTypes from "prop-types";
import "../styles/ExperienceModal.css";

function ExperienceModal({ experience, onClose }) {
  return (
    <div className="experience-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{experience.title}</h2>
        <h4>{experience.company}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}

ExperienceModal.propTypes = {
  experience: PropTypes.shape({
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ExperienceModal;