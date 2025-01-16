import React from "react";
import "../styles/Modal.css";

function ExperienceModal({ experience, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <h2>{experience.title}</h2>
        <h4>{experience.company}</h4>
        <p>{experience.description}</p>
      </div>
    </div>
  );
}

export default ExperienceModal;