import React from 'react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img 
          src={project.imageUrl || '/placeholder-project.jpg'} 
          alt={project.title} 
        />
        <div className="project-overlay">
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="project-content">
        <span className="project-category">{project.category}</span>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>

        <div className="project-tech">
          {project.technologies?.slice(0, 3).map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>

        {project.metrics && (
          <div className="project-metrics">
            {project.metrics.accuracy && (
              <div className="metric">
                <span className="metric-value">{project.metrics.accuracy}</span>
                <span className="metric-label">Accuracy</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;