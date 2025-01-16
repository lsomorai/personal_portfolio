import React, { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Lucien</div>
        <div className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
}

export default Navbar;