// client/src/pages/ProjectDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../services/api';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const response = await getProjectById(id);
      setProject(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching project:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="loading">Loading project...</div>;
  }

  if (!project) {
    return <div className="loading">Project not found</div>;
  }

  const mediaItems = project.media && project.media.length > 0 
    ? project.media 
    : project.imageUrl 
    ? [{ type: 'image', url: project.imageUrl }] 
    : [];

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
  };

  const currentMedia = mediaItems[currentMediaIndex];

  return (
    <div className="project-detail">
      <div className="project-detail-container">
        {/* Back Button */}
        <Link to="/#projects" className="back-btn">
          <FaArrowLeft /> Back to Projects
        </Link>

        {/* Header */}
        <div className="project-detail-header">
          <div className="project-detail-title-section">
            <span className="project-detail-category">{project.category}</span>
            <h1 className="project-detail-title">{project.title}</h1>
            <p className="project-detail-description">{project.description}</p>
            
            <div className="project-detail-actions">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="detail-btn detail-btn-primary">
                  <FaGithub /> View Code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="detail-btn detail-btn-secondary">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Media Gallery */}
        {mediaItems.length > 0 && (
          <div className="project-detail-media">
            <div className="media-main">
              {currentMedia?.type === 'video' ? (
                <video
                  src={currentMedia.url}
                  controls
                  poster={currentMedia.thumbnail}
                  className="media-video"
                />
              ) : (
                <img 
                  src={currentMedia?.url} 
                  alt={currentMedia?.caption || project.title}
                  className="media-image"
                />
              )}
              
              {mediaItems.length > 1 && (
                <>
                  <button className="media-nav-detail media-nav-prev" onClick={prevMedia}>
                    <FaChevronLeft />
                  </button>
                  <button className="media-nav-detail media-nav-next" onClick={nextMedia}>
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {mediaItems.length > 1 && (
              <div className="media-thumbnails">
                {mediaItems.map((media, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${index === currentMediaIndex ? 'active' : ''}`}
                    onClick={() => setCurrentMediaIndex(index)}
                  >
                    {media.type === 'video' ? (
                      <img src={media.thumbnail || media.url} alt={`Thumbnail ${index + 1}`} />
                    ) : (
                      <img src={media.url} alt={`Thumbnail ${index + 1}`} />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content Grid */}
        <div className="project-detail-content">
          {/* Left Column */}
          <div className="content-main">
            {/* Long Description */}
            {project.longDescription && (
              <section className="detail-section">
                <h2>About This Project</h2>
                <p>{project.longDescription}</p>
              </section>
            )}

            {/* Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="detail-section">
                <h2>Key Features</h2>
                <ul className="highlights-list">
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </section>
            )}

            {/* Results */}
            {project.results && project.results.length > 0 && (
              <section className="detail-section">
                <h2>Results & Outcomes</h2>
                <ul className="results-list">
                  {project.results.map((result, index) => (
                    <li key={index}>{result}</li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Right Column - Sidebar */}
          <div className="content-sidebar">
            {/* Metrics */}
            {project.metrics && Object.keys(project.metrics).some(key => project.metrics[key]) && (
              <div className="sidebar-card">
                <h3>Project Metrics</h3>
                <div className="metrics-list">
                  {project.metrics.accuracy && (
                    <div className="metric-item">
                      <span className="metric-label">Accuracy</span>
                      <span className="metric-value">{project.metrics.accuracy}</span>
                    </div>
                  )}
                  {project.metrics.improvement && (
                    <div className="metric-item">
                      <span className="metric-label">Improvement</span>
                      <span className="metric-value">{project.metrics.improvement}</span>
                    </div>
                  )}
                  {project.metrics.dataSize && (
                    <div className="metric-item">
                      <span className="metric-label">Data Size</span>
                      <span className="metric-value">{project.metrics.dataSize}</span>
                    </div>
                  )}
                  {project.metrics.processingTime && (
                    <div className="metric-item">
                      <span className="metric-label">Processing Time</span>
                      <span className="metric-value">{project.metrics.processingTime}</span>
                    </div>
                  )}
                  {project.metrics.modelType && (
                    <div className="metric-item">
                      <span className="metric-label">Model Type</span>
                      <span className="metric-value">{project.metrics.modelType}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="sidebar-card">
                <h3>Technologies</h3>
                <div className="tech-list">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* Tools */}
            {project.toolsUsed && project.toolsUsed.length > 0 && (
              <div className="sidebar-card">
                <h3>Tools Used</h3>
                <div className="tech-list">
                  {project.toolsUsed.map((tool, index) => (
                    <span key={index} className="tech-badge">{tool}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;