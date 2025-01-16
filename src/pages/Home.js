import React from "react";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Email from "@mui/icons-material/Email";
import GitHub from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <div className="text">
          <h1>Hi, I'm Lucien</h1>
          <p>Software developer passionate about creating impactful solutions.</p>
          <div className="icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedIn /></a>
            <a href="mailto:lucien@example.com"><Email /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><GitHub /></a>
          </div>
        </div>
        <div className="photo">
          <img src="/assets/myphoto.jpg" alt="Lucien" />
        </div>
      </div>
    </section>
  );
}

export default Home;