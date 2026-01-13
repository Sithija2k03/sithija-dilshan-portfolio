import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Admin from './components/Admin';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Portfolio Route */}
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Services />
            <Contact />
            <Footer />
          </div>
        } />
        
        {/* Admin Panel Route */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;