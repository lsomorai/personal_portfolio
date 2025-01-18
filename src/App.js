import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Home />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;