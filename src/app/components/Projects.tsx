'use client';

import React, { useState, useEffect } from 'react';
import { ProjectItem } from '@/app/data/projects';

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState<'list' | 'gallery'>('list');
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  // Since the ProjectItem doesn't have categories, we'll use techType for filtering
  const techTypes = Array.from(new Set(projects.map(project => project.techType)));

  // Filter projects based on selected album
  const filteredProjects = selectedAlbum === 'all' 
    ? projects 
    : projects.filter(project => project.techType === selectedAlbum);

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-subtitle">A showcase of my recent work and creations</p>
        
        <div className="projects-tabs">
          <button 
            className={`tab-button ${activeTab === 'list' ? 'active' : ''}`}
            onClick={() => setActiveTab('list')}
            aria-pressed={activeTab === 'list'}
          >
            <i className="fas fa-list" aria-hidden="true"></i> List View
          </button>
          <button 
            className={`tab-button ${activeTab === 'gallery' ? 'active' : ''}`}
            onClick={() => setActiveTab('gallery')}
            aria-pressed={activeTab === 'gallery'}
          >
            <i className="fas fa-images" aria-hidden="true"></i> Gallery
          </button>
        </div>

        {activeTab === 'list' ? (
          <div className="projects-list">
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Placeholder for image - you might want to add imageUrl to your ProjectItem */}
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <i className="fas fa-project-diagram" aria-hidden="true"></i>
                  </div>
                  <div className="project-overlay">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View live project: ${project.title}`}>
                        <i className="fas fa-external-link-alt" aria-hidden="true"></i>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link" aria-label={`View GitHub repository: ${project.title}`}>
                        <i className="fab fa-github" aria-hidden="true"></i>
                      </a>
                    )}
                  </div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p className="project-period">{project.period}</p>
                  <p className="project-role">{project.role}</p>
                  <div className="project-description">
                    {project.description.map((desc, i) => (
                      <p key={i}>{desc}</p>
                    ))}
                  </div>
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="gallery-view">
            <div className="gallery-albums">
              <button 
                className={`album-filter ${selectedAlbum === 'all' ? 'active' : ''}`}
                onClick={() => setSelectedAlbum('all')}
                aria-pressed={selectedAlbum === 'all'}
              >
                All Projects
              </button>
              {techTypes.map(techType => (
                <button 
                  key={techType}
                  className={`album-filter ${selectedAlbum === techType ? 'active' : ''}`}
                  onClick={() => setSelectedAlbum(techType)}
                  aria-pressed={selectedAlbum === techType}
                >
                  {techType.charAt(0).toUpperCase() + techType.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="gallery-grid">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id} 
                  className="gallery-item"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {/* Placeholder for image */}
                  <div className="gallery-image-placeholder">
                    <i className="fas fa-project-diagram" aria-hidden="true"></i>
                  </div>
                  <div className="gallery-item-overlay">
                    <h4>{project.title}</h4>
                    <p>{project.techType}</p>
                    <div className="gallery-links">
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`View live project: ${project.title}`}>
                          View Project
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`View GitHub repository: ${project.title}`}>
                          <i className="fab fa-github" aria-hidden="true"></i> Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Tambahkan style inline jika diperlukan, atau pastikan class sudah ada di globals.css */}
      <style jsx>{`
        .projects-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .projects-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .project-card, .gallery-item {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .projects-section {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;