import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Header.css';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, onToggleTheme }) => (
  <header className="header">
     <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
      <button
        onClick={onToggleTheme}
        className="theme-toggle"
        aria-label="Toggle theme"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </nav>
  </header>
);

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
};

export default Header;