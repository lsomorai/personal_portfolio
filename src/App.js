import React, { useState }  from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => setDarkMode(!darkMode);
  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header onToggleTheme={toggleTheme} />
      <Home />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};
export default App;