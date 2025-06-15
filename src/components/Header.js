import React from 'react';
import '../styles/Header.css';

const Header = ({ onToggleTheme }) => (
  <header className="header">
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
      </ul>
      <button onClick={onToggleTheme} className="theme-toggle">
        Toggle Theme
      </button>
    </nav>
  </header>
);

export default Header;