import React from 'react';
import './Hero.css';
import { SOCIAL_LINKS } from '../../utils/constants';

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">SITHIJA WICKRAMASINGHE</span>
          </h1>
          <h2 className="hero-subtitle">Data Science Student & Aspiring Analyst</h2>
          <p className="hero-description">
            I transform data into actionable insights through analytics, visualization, 
            and machine learning. Available for internships and freelance projects.
          </p>
          
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn btn-primary">
              Hire Me
            </button>
            <a href="/My_CV_Version(3).pdf" download="Sithija_Dilshan_CV.pdf" className="btn btn-secondary">
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href={SOCIAL_LINKS.kaggle} target="_blank" rel="noopener noreferrer">
              Kaggle
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-placeholder">
            {/* Replace with your photo */}
            <img src="/profile.png" alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;