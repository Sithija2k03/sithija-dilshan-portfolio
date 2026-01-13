import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="bg-decoration bg-decoration-1"></div>
      <div className="bg-decoration bg-decoration-2"></div>
      
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate about transforming data into actionable insights
        </p>

        <div className="about-main">
          <div className="about-intro">
            <div className="intro-card">
              <div className="intro-header">
                <div className="profile-badge">
                  <span className="badge-icon">👨‍💻</span>
                  <div className="badge-text">
                    <h3>Sithija Dilshan</h3>
                    <p>Data Science & Software Engineering Student</p>
                  </div>
                </div>
              </div>
              
              <div className="intro-content">
                <p>
                  I'm a motivated Data Science and Software Engineering undergraduate at 
                  <strong> Sri Lanka Institute of Information Technology (SLIIT)</strong>, 
                  specializing in Data Science. With a strong foundation in analytics, 
                  statistical modeling, and machine learning, I transform raw data into 
                  actionable insights that drive business decisions.
                </p>
                <p>
                  My expertise spans across <strong>data analytics, AI/ML engineering, 
                  and full-stack development</strong>. I'm proficient in Python, R, SQL, 
                  and modern data tools like Power BI, Tableau, and Jupyter Notebook.
                </p>
                <p>
                  Currently seeking <strong>internship opportunities and freelance 
                  projects</strong> where I can apply my analytical thinking and technical 
                  expertise to solve real-world data challenges.
                </p>
              </div>
            </div>
          </div>

          <div className="about-grid">
            {/* Education Card */}
            <div className="info-card education-card">
              <div className="card-header">
                <span className="card-icon">🎓</span>
                <h3>Education</h3>
              </div>
              <div className="card-body">
                <div className="edu-item">
                  <div className="edu-degree">BSc (Hons) in Information Technology</div>
                  <div className="edu-spec">Specializing in Data Science</div>
                  <div className="edu-institution">
                    <span className="institution-icon">🏛️</span>
                    Sri Lanka Institute of Information Technology
                  </div>
                  <div className="edu-year">
                    <span className="year-badge">2023 - Present</span>
                  </div>
                </div>
                <div className="edu-item secondary">
                  <div className="edu-degree">Advanced Level - Mathematics</div>
                  <div className="edu-spec">English Medium</div>
                  <div className="edu-institution">
                    <span className="institution-icon">🏫</span>
                    Ananda College, Colombo 10
                  </div>
                  <div className="edu-year">
                    <span className="year-badge">2022</span>
                  </div>
                </div>
              </div>
            </div>

            {/* What I Do Card */}
            <div className="info-card specialties-card">
              <div className="card-header">
                <span className="card-icon">🎯</span>
                <h3>What I Do</h3>
              </div>
              <div className="card-body">
                <ul className="specialties-list">
                  <li>
                    <span className="specialty-icon">📊</span>
                    <div className="specialty-content">
                      <strong>Data Analytics & Visualization</strong>
                      <p>Excel, Power BI, Tableau, Dashboards</p>
                    </div>
                  </li>
                  <li>
                    <span className="specialty-icon">🤖</span>
                    <div className="specialty-content">
                      <strong>Machine Learning & AI</strong>
                      <p>Predictive Models, Multi-Agent Systems</p>
                    </div>
                  </li>
                  <li>
                    <span className="specialty-icon">💻</span>
                    <div className="specialty-content">
                      <strong>Full-Stack Development</strong>
                      <p>MERN Stack, REST APIs, Java MVC</p>
                    </div>
                  </li>
                  {/* <li>
                    <span className="specialty-icon">☁️</span>
                    <div className="specialty-content">
                      <strong>Cloud Solutions</strong>
                      <p>AWS, Azure, Cloud Deployment</p>
                    </div>
                  </li> */}
                  {/* <li>
                    <span className="specialty-icon">📈</span>
                    <div className="specialty-content">
                      <strong>Statistical Modeling</strong>
                      <p>Python, R, Scikit-learn, XGBoost</p>
                    </div>
                  </li> */}
                  {/* <li>
                    <span className="specialty-icon">🔍</span>
                    <div className="specialty-content">
                      <strong>Data Engineering</strong>
                      <p>SQL, MongoDB, Data Pipelines</p>
                    </div>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-icon">📚</div>
              <h3>15+</h3>
              <p>Academic & client Projects</p>
              <span className="stat-detail">Data Science & Software Engineering</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">⚡</div>
              <h3>20+</h3>
              <p>Technologies</p>
              <span className="stat-detail">Programming Languages & Tools</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🎯</div>
              <h3>100%</h3>
              <p>Dedication</p>
              <span className="stat-detail">Quality & Commitment</span>
            </div>
            <div className="stat-card">
              <div className="stat-icon">🚀</div>
              <h3>2023</h3>
              <p>Started Journey</p>
              <span className="stat-detail">Continuous Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;