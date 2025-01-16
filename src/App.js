import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;