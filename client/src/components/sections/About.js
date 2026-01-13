import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate Data Science student specializing in turning raw data 
              into actionable insights. With a strong foundation in statistics, 
              programming, and machine learning, I thrive on solving complex problems 
              through data-driven approaches.
            </p>
            <p>
              My expertise spans across data analysis, visualization, and predictive 
              modeling. I'm proficient in Python, R, SQL, and various data science 
              tools like Tableau, Power BI, and Jupyter Notebooks.
            </p>
            <p>
              Currently seeking internship opportunities and open to freelance projects 
              where I can apply my skills to deliver real business value.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>10+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Technologies</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Commitment</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img src="/about-illustration.svg" alt="Data Science" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;