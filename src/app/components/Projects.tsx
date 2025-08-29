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

  const techTypes = Array.from(new Set(projects.map(project => project.techType)));
  const filteredProjects = selectedAlbum === 'all' 
    ? projects 
    : projects.filter(project => project.techType === selectedAlbum);

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
      {/* Animated Background Elements */}
      <div className="bg-animation">
        <div className="bg-ball-1"></div>
        <div className="bg-ball-2"></div>
        <div className="bg-ball-3"></div>
        <div className="bg-ball-4"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${i * 0.5}s`,
            '--size': `${Math.random() * 8 + 4}px`,
            '--left': `${Math.random() * 100}%`,
            '--duration': `${Math.random() * 15 + 10}s`,
          } as React.CSSProperties}></div>
        ))}
      </div>
      
      <div className="projects-container">
        <div className="section-header">
          <h2 className="projects-title">
            <span className="title-accent">My</span> Projects
          </h2>
          <div className="title-underline"></div>
          <p className="projects-subtitle">A showcase of my recent work and creations</p>
        </div>
        
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
                <div className="card-glow"></div>
                <div className="project-content">
                  <div className="project-header">
                    <div className="project-title-wrapper">
                      <h3>{project.title}</h3>
                      <p className="project-role">{project.role}</p>
                    </div>
                    <div className="project-links">
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
                  <div className="gallery-item-inner">
                    <div className="gallery-image-placeholder">
                      <i className="fas fa-project-diagram" aria-hidden="true"></i>
                    </div>
                    <div className="gallery-item-overlay">
                      <h4>{project.title}</h4>
                      <p className="tech-type">{project.techType}</p>
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
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');
        
        .projects-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          padding: 4rem 1.5rem;
          background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%);
          color: #e2e8f0;
          font-family: 'Montserrat', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .projects-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Animated Background */
        .bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }
        
        .bg-ball-1, .bg-ball-2, .bg-ball-3, .bg-ball-4 {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.15;
          animation: float 15s infinite ease-in-out;
        }
        
        .bg-ball-1 {
          width: 250px;
          height: 250px;
          background: rgba(30, 64, 175, 0.6);
          top: 10%;
          left: 5%;
          animation-delay: 0s;
          animation-duration: 20s;
        }
        
        .bg-ball-2 {
          width: 300px;
          height: 300px;
          background: rgba(100, 116, 139, 0.6);
          bottom: 15%;
          right: 5%;
          animation-delay: -5s;
          animation-duration: 18s;
        }
        
        .bg-ball-3 {
          width: 200px;
          height: 200px;
          background: rgba(30, 64, 175, 0.5);
          top: 50%;
          left: 20%;
          animation-delay: -10s;
          animation-duration: 22s;
        }
        
        .bg-ball-4 {
          width: 270px;
          height: 270px;
          background: rgba(100, 116, 139, 0.5);
          bottom: 5%;
          left: 30%;
          animation-delay: -7s;
          animation-duration: 25s;
        }
        
        /* Particles */
        .particles-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }
        
        .particle {
          position: absolute;
          background: linear-gradient(135deg, #1e40af, #4b5563);
          border-radius: 50%;
          opacity: 0.4;
          animation: floatParticle var(--duration) infinite ease-in-out;
          animation-delay: var(--delay);
          width: var(--size);
          height: var(--size);
          left: var(--left);
          top: -20px;
        }
        
        @keyframes floatParticle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.4;
          }
          50% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.05);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.95);
          }
        }
        
        .projects-container {
          max-width: 900px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        
        .projects-title {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #b0d4ffff, #4aa4e3ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: -0.5px;
          position: relative;
          display: inline-block;
        }
        
        .title-accent {
          color: #f8fafc;
          -webkit-text-fill-color: #f8fafc;
        }
        
        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #1e40af, #6b7280);
          margin: 0.5rem auto 1rem;
          border-radius: 2px;
        }
        
        .projects-subtitle {
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
          color: #cbd5e1;
          font-weight: 400;
          max-width: 500px;
          line-height: 1.6;
          margin: 0 auto;
        }
        
        .projects-tabs {
          display: inline-flex;
          gap: 0.5rem;
          margin-bottom: 3rem;
          background: rgba(45, 55, 72, 0.7);
          border-radius: 12px;
          padding: 0.4rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        
        .tab-button {
          background: transparent;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 8px;
          color: #ecf8feff;
          font-family: inherit;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        
        .tab-button:hover {
          color: #7cb2e9ff;
          background: rgba(5, 112, 194, 0.1);
        }
        
        .tab-button.active {
          color: #ffffff;
          background: linear-gradient(135deg, #1e40af, #6b7280);
          box-shadow: 0 4px 15px rgba(30, 64, 175, 0.4);
        }
        
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        
        .project-card {
          background: rgba(45, 55, 72, 0.7);
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #1e40af, #6b7280, #374151);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .project-card:hover {
          border-color: rgba(30, 64, 175, 0.3);
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(30, 64, 175, 0.2);
        }
        
        .project-card:hover .card-glow {
          opacity: 0.1;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .project-title-wrapper h3 {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 0.25rem 0;
          color: #f8fafc;
          background: linear-gradient(135deg, #1e40af, #9ca3af);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .project-role {
          color: #e2e8f0;
          font-size: 0.9rem;
          margin: 0;
          font-weight: 500;
        }
        
        .project-links {
          display: flex;
          gap: 0.75rem;
        }
        
        .project-link {
          color: #94a3b8;
          font-size: 1rem;
          transition: all 0.3s ease;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(45, 55, 72, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .project-link:hover {
          color: #1e40af;
          transform: translateY(-2px);
          background: rgba(30, 64, 175, 0.1);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.2);
        }
        
        .project-description p {
          color: #e2e8f0;
          line-height: 1.6;
          margin-bottom: 0.75rem;
          font-size: 0.95rem;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.25rem;
        }
        
        .tech-tag {
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.2), rgba(107, 114, 128, 0.2));
          color: #e2e8f0;
          padding: 0.35rem 0.8rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(5px);
        }
        
        .gallery-view {
          margin-top: 1.5rem;
        }
        
        .gallery-albums {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 2rem;
          justify-content: center;
        }
        
        .album-filter {
          background: rgba(45, 55, 72, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #cbd5e1;
          padding: 0.5rem 1.25rem;
          border-radius: 20px;
          font-family: inherit;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          font-weight: 500;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        .album-filter:hover {
          color: #f1f5f9;
          border-color: rgba(30, 64, 175, 0.3);
          transform: translateY(-2px);
        }
        
        .album-filter.active {
          background: linear-gradient(135deg, #1e40af, #6b7280);
          color: #ffffff;
          border-color: rgba(30, 64, 175, 0.4);
          box-shadow: 0 6px 15px rgba(30, 64, 175, 0.3);
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .gallery-item {
          background: rgba(45, 55, 72, 0.7);
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.1);
          height: 200px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .gallery-item:hover {
          transform: translateY(-5px);
          border-color: rgba(30, 64, 175, 0.3);
          box-shadow: 0 15px 30px rgba(30, 64, 175, 0.2);
        }
        
        .gallery-item-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .gallery-image-placeholder {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.5rem;
          color: rgba(30, 64, 175, 0.3);
          background: rgba(45, 55, 72, 0.5);
          transition: all 0.3s ease;
        }
        
        .gallery-item:hover .gallery-image-placeholder {
          transform: scale(1.05);
          color: rgba(30, 64, 175, 0.5);
        }
        
        .gallery-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(45, 55, 72, 0.95));
          padding: 1.5rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        
        .gallery-item-overlay h4 {
          margin: 0 0 0.5rem 0;
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 700;
        }
        
        .tech-type {
          color: #e2e8f0;
          font-size: 0.85rem;
          margin: 0 0 1rem 0;
          font-weight: 500;
        }
        
        .gallery-links {
          display: flex;
          gap: 1rem;
        }
        
        .gallery-links a {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          transition: all 0.3s ease;
          font-weight: 500;
          padding: 0.4rem 0.8rem;
          border-radius: 20px;
          background: rgba(30, 64, 175, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .gallery-links a:hover {
          background: linear-gradient(135deg, #1e40af, #6b7280);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(30, 64, 175, 0.3);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (max-width: 768px) {
          .projects-section {
            padding: 3rem 1rem;
            max-width: 95%;
          }
          
          .projects-title {
            font-size: 2.2rem;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
          }
          
          .project-header {
            flex-direction: column;
            gap: 0.75rem;
          }
          
          .projects-tabs {
            width: 100%;
            justify-content: center;
          }
          
          .bg-ball-1, .bg-ball-2, .bg-ball-3, .bg-ball-4 {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;