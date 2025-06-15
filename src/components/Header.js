import React from 'react';
import '../styles/Header.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, onToggleTheme }) => (
  <header className="header">
     <nav className="navbar">
      <button onClick={onToggleTheme} className="theme-toggle" aria-label="Toggle theme">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;