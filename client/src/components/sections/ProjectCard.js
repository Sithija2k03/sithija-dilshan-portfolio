// client/src/components/sections/ProjectCard.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Use media array if available, otherwise fall back to single imageUrl
  const mediaItems = project.media && project.media.length > 0 
    ? project.media 
    : project.imageUrl 
    ? [{ type: 'image', url: project.imageUrl }] 
    : [];

  const nextMedia = (e) => {
    e.preventDefault();
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = (e) => {
    e.preventDefault();
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const currentMedia = mediaItems[currentMediaIndex];

  return (
    <div 
      className="project-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/project/${project._id}`} className="project-card-link">
        {/* Media Carousel */}
        <div className="project-media-container">
          {currentMedia?.type === 'video' ? (
            <div className="project-video-wrapper">
              <video
                src={currentMedia.url}
                poster={currentMedia.thumbnail}
                loop
                muted
                autoPlay={isHovered}
                className="project-video"
              />
              <div className="video-overlay">
                <FaPlay />
              </div>
            </div>
          ) : (
            <img 
              src={currentMedia?.url || '/placeholder-project.jpg'} 
              alt={project.title}
              className="project-image"
            />
          )}
          
          {/* Category Badge */}
          <div className="project-category-badge">
            {project.category}
          </div>

          {/* Media Navigation */}
          {mediaItems.length > 1 && (
            <>
              <button 
                className="media-nav media-nav-prev" 
                onClick={prevMedia}
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              <button 
                className="media-nav media-nav-next" 
                onClick={nextMedia}
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
              
              {/* Indicators */}
              <div className="media-indicators">
                {mediaItems.map((_, index) => (
                  <span
                    key={index}
                    className={`indicator ${index === currentMediaIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentMediaIndex(index);
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Info */}
        <div className="project-info">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <div className="project-technologies">
              {project.technologies.slice(0, 4).map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
              {project.technologies.length > 4 && (
                <span className="tech-tag">+{project.technologies.length - 4}</span>
              )}
            </div>
          )}

          {/* Metrics (for data science projects) */}
          {project.metrics && Object.keys(project.metrics).some(key => project.metrics[key]) && (
            <div className="project-metrics">
              {project.metrics.accuracy && (
                <div className="metric">
                  <span className="metric-label">Accuracy:</span>
                  <span className="metric-value">{project.metrics.accuracy}</span>
                </div>
              )}
              {project.metrics.improvement && (
                <div className="metric">
                  <span className="metric-label">Improvement:</span>
                  <span className="metric-value">{project.metrics.improvement}</span>
                </div>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="project-actions">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub /> Code
              </a>
            )}
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;