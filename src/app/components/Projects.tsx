'use client';

import React, { useState, useEffect } from 'react';
import { ProjectItem } from '@/app/data/projects';
import Image from 'next/image';

interface ProjectsProps {
  projects: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeTab, setActiveTab] = useState<'list' | 'gallery'>('list');
  const [selectedAlbum, setSelectedAlbum] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);
  const [viewMode, setViewMode] = useState<'mobile' | 'browser'>('mobile');
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [previewVisible, setPreviewVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    return () => setIsVisible(false);
  }, []);

  const techTypes = Array.from(new Set(projects.map(project => project.techType)));
  const filteredProjects = selectedAlbum === 'all' 
    ? projects 
    : projects.filter(project => project.techType === selectedAlbum);

  // Filter projects untuk AppSheet (akan ditampilkan khusus)
  const appsheetProjects = projects.filter(project => project.techType === 'appsheet');
  const otherProjects = filteredProjects.filter(project => project.techType !== 'appsheet');

  // Fungsi untuk menangani hover gambar
  const handleImageHover = (image: string) => {
    setHoveredImage(image);
    setPreviewVisible(true);
  };

  // Fungsi untuk menangani mouse leave
  const handleImageLeave = () => {
    setPreviewVisible(false);
    // Tidak langsung menghapus hoveredImage untuk mencegah kedipan
    setTimeout(() => {
      if (!previewVisible) {
        setHoveredImage(null);
      }
    }, 200);
  };

  return (
    <section id="projects" className={`projects-section ${isVisible ? 'visible' : ''}`}>
      {/* Modal untuk preview gambar */}
      {hoveredImage && (
        <div className={`image-preview ${previewVisible ? 'visible' : ''}`}>
          <img src={hoveredImage} alt="Project preview" />
        </div>
      )}

      {/* Animated Background Elements */}
      <div className="bg-animation">
        <div className="bg-ball-1"></div>
        <div className="bg-ball-2"></div>
        <div className="bg-ball-3"></div>
        <div className="bg-ball-4"></div>
      </div>
      
      {/* Floating Particles */}
      <div className="particles-container">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="particle" style={{
            '--delay': `${i * 0.5}s`,
            '--size': `${Math.random() * 6 + 3}px`,
            '--left': `${Math.random() * 100}%`,
            '--duration': `${Math.random() * 12 + 8}s`,
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
            <div className="gallery-controls">
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
              
              {/* Hanya tampilkan toggle view mode untuk album All Projects */}
              {(selectedAlbum === 'all' || selectedAlbum !== 'appsheet') && (
                <div className="view-mode-toggle">
                  <button 
                    className={`view-mode-btn ${viewMode === 'mobile' ? 'active' : ''}`}
                    onClick={() => setViewMode('mobile')}
                  >
                    <i className="fas fa-mobile-alt"></i> Mobile
                  </button>
                  <button 
                    className={`view-mode-btn ${viewMode === 'browser' ? 'active' : ''}`}
                    onClick={() => setViewMode('browser')}
                  >
                    <i className="fas fa-desktop"></i> Browser
                  </button>
                </div>
              )}
            </div>
            
            {/* Tampilan khusus untuk AppSheet */}
            {(selectedAlbum === 'all' || selectedAlbum === 'appsheet') && (
              <div className="appsheet-special-layout">
                <h3 className="appsheet-title">AppSheet Projects</h3>
                
                {/* Mobile View untuk AppSheet */}
                <div className="appsheet-mobile-section">
                  <h4>Mobile View</h4>
                  <div className="appsheet-mobile-grid">
                    {appsheetProjects.flatMap(project => 
                      project.images?.mobile?.map((image, idx) => (
                        <div 
                          key={`mobile-${project.id}-${idx}`} 
                          className="appsheet-image-item mobile-frame"
                          onMouseEnter={() => handleImageHover(image)}
                          onMouseLeave={handleImageLeave}
                        >
                          <img src={image} alt={`${project.title} mobile view ${idx + 1}`} />
                          <div className="frame-overlay">
                            <i className="fas fa-mobile-alt"></i>
                          </div>
                          <div className="project-info-overlay">
                            <span>{project.title}</span>
                            <div className="project-tech-tags">
                              {project.technologies.slice(0, 2).map((tech, i) => (
                                <span key={i} className="tech-tag-small">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )) || []
                    )}
                  </div>
                </div>
                
                {/* Browser View untuk AppSheet - Diubah agar sama dengan Laravel */}
                <div className="appsheet-browser-section">
                  <h4>Browser View</h4>
                  <div className="appsheet-browser-grid">
                    {appsheetProjects.flatMap(project => 
                      project.images?.browser?.map((image, idx) => (
                        <div 
                          key={`browser-${project.id}-${idx}`} 
                          className="appsheet-image-item browser-frame"
                          onMouseEnter={() => handleImageHover(image)}
                          onMouseLeave={handleImageLeave}
                        >
                          {/* Browser frame decoration (seperti Laravel) */}
                          <div className="browser-frame-header">
                            <div className="browser-dots">
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <div className="browser-url-bar">https://appsheet.com/{project.title.toLowerCase().replace(/\s+/g, '-')}</div>
                          </div>
                          <img src={image} alt={`${project.title} browser view ${idx + 1}`} />
                          <div className="frame-overlay">
                            <i className="fas fa-desktop"></i>
                          </div>
                          <div className="project-info-overlay">
                            <span>{project.title}</span>
                            <div className="project-tech-tags">
                              {project.technologies.slice(0, 2).map((tech, i) => (
                                <span key={i} className="tech-tag-small">{tech}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )) || []
                    )}
                  </div>
                </div>
              </div>
            )}
            
            {/* Tampilan normal untuk proyek lainnya - Diperbaiki untuk menampilkan semua gambar */}
            <div className="gallery-grid">
              {otherProjects.map((project, index) => {
                // Pastikan semua jenis gambar bisa ditampilkan
                const images = project.images?.[viewMode] || 
                              project.images?.browser || 
                              project.images?.mobile || 
                              [];
                
                // Jika tidak ada gambar, tampilkan placeholder
                if (images.length === 0) {
                  return (
                    <div 
                      key={project.id} 
                      className="gallery-item"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="gallery-item-inner">
                        <div className="gallery-image-container">
                          <div className="no-image-placeholder">
                            <i className="fas fa-image"></i>
                            <p>No image available</p>
                          </div>
                        </div>
                        <div className="gallery-item-overlay">
                          <h4>{project.title}</h4>
                          <p className="tech-type">{project.techType}</p>
                        </div>
                      </div>
                    </div>
                  );
                }
                
                // Tampilkan gambar pertama yang tersedia
                return (
                  <div 
                    key={project.id} 
                    className="gallery-item"
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onMouseEnter={() => handleImageHover(images[0])}
                    onMouseLeave={handleImageLeave}
                  >
                    <div className="gallery-item-inner">
                      <div className="gallery-image-container">
                        <img
                          src={images[0]}
                          alt={project.title}
                          className="gallery-image"
                          onError={(e) => {
                            e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100'%3E%3Crect width='100' height='100' fill='%23f1f5f9'/%3E%3Cpath d='M30,40 L50,20 L70,40 M40,50 L60,50 M50,30 L50,70' stroke='%233b82f6' stroke-width='2' fill='none'/%3E%3C/svg%3E";
                          }}
                        />
                        <div className="view-mode-badge">
                          {viewMode === 'mobile' ? (
                            <i className="fas fa-mobile-alt"></i>
                          ) : (
                            <i className="fas fa-desktop"></i>
                          )}
                        </div>
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
                );
              })}
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
          padding: 3rem 1.5rem;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          color: #334155;
          font-family: 'Montserrat', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          max-width: 1000px;
          margin: 0 auto;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .projects-section.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Preview gambar saat hover */
        .image-preview {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0.9);
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          border-radius: 16px;
          padding: 15px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(255, 255, 255, 0.9);
          max-width: 90%;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          pointer-events: none;
        }
        
        .image-preview.visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
          pointer-events: auto;
        }
        
        .image-preview img {
          max-width: 100%;
          max-height: 80vh;
          object-fit: contain;
          border-radius: 10px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
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
          opacity: 0.1;
          animation: float 15s infinite ease-in-out;
        }
        
        .bg-ball-1 {
          width: 200px;
          height: 200px;
          background: rgba(59, 130, 246, 0.4);
          top: 10%;
          left: 5%;
          animation-delay: 0s;
          animation-duration: 20s;
        }
        
        .bg-ball-2 {
          width: 250px;
          height: 250px;
          background: rgba(100, 116, 139, 0.3);
          bottom: 15%;
          right: 5%;
          animation-delay: -5s;
          animation-duration: 18s;
        }
        
        .bg-ball-3 {
          width: 180px;
          height: 180px;
          background: rgba(59, 130, 246, 0.3);
          top: 50%;
          left: 20%;
          animation-delay: -10s;
          animation-duration: 22s;
        }
        
        .bg-ball-4 {
          width: 220px;
          height: 220px;
          background: rgba(100, 116, 139, 0.2);
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
          background: linear-gradient(135deg, #3b82f6, #94a3b8);
          border-radius: 50%;
          opacity: 0.2;
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
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
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
          margin-bottom: 2.5rem;
        }
        
        .projects-title {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #1e40af, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: 'Montserrat', sans-serif;
          letter-spacing: -0.5px;
          position: relative;
          display: inline-block;
        }
        
        .title-accent {
          color: #1e40af;
          -webkit-text-fill-color: #1e40af;
        }
        
        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #94a3b8);
          margin: 0.5rem auto 1rem;
          border-radius: 2px;
        }
        
        .projects-subtitle {
          font-size: 1rem;
          margin-bottom: 2rem;
          color: #64748b;
          font-weight: 400;
          max-width: 500px;
          line-height: 1.6;
          margin: 0 auto;
        }
        
        .projects-tabs {
          display: inline-flex;
          gap: 0.5rem;
          margin-bottom: 2.5rem;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 12px;
          padding: 0.4rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        }
        
        .tab-button {
          background: transparent;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 8px;
          color: #64748b;
          font-family: inherit;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
        }
        
        .tab-button:hover {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }
        
        .tab-button.active {
          color: #ffffff;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .projects-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }
        
        .project-card {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 14px;
          padding: 1.2rem;
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: all 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          position: relative;
          overflow: hidden;
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(45deg, #3b82f6, #93c5fd, #dbeafe);
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        .project-card:hover {
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 25px rgba(59, 130, 246, 0.15);
        }
        
        .project-card:hover .card-glow {
          opacity: 0.05;
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.8rem;
        }
        
        .project-title-wrapper h3 {
          font-size: 1.2rem;
          font-weight: 700;
          margin: 0 0 0.2rem 0;
          color: #1e40af;
        }
        
        .project-role {
          color: #64748b;
          font-size: 0.85rem;
          margin: 0;
          font-weight: 500;
        }
        
        .project-links {
          display: flex;
          gap: 0.6rem;
        }
        
        .project-link {
          color: #94a3b8;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.1);
        }
        
        .project-link:hover {
          color: #3b82f6;
          transform: translateY(-2px);
          background: rgba(59, 130, 246, 0.1);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
        }
        
        .project-description p {
          color: #475569;
          line-height: 1.6;
          margin-bottom: 0.6rem;
          font-size: 0.9rem;
          text-align: justify;
        }
        
        .project-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 1rem;
        }
        
        .tech-tag {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(100, 116, 139, 0.1));
          color: #475569;
          padding: 0.3rem 0.7rem;
          border-radius: 18px;
          font-size: 0.75rem;
          font-weight: 500;
          border: 1px solid rgba(59, 130, 246, 0.1);
          backdrop-filter: blur(5px);
        }
        
        .gallery-view {
          margin-top: 1.2rem;
        }
        
        .gallery-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1.8rem;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        
        .gallery-albums {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }
        
        .album-filter {
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(59, 130, 246, 0.1);
          color: #64748b;
          padding: 0.4rem 1rem;
          border-radius: 18px;
          font-family: inherit;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          font-weight: 500;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }
        
        .album-filter:hover {
          color: #3b82f6;
          border-color: rgba(59, 130, 246, 0.3);
          transform: translateY(-2px);
        }
        
        .album-filter.active {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          color: #ffffff;
          border-color: rgba(59, 130, 246, 0.4);
          box-shadow: 0 6px 12px rgba(59, 130, 246, 0.2);
        }
        
        .view-mode-toggle {
          display: flex;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 10px;
          padding: 0.3rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
        }
        
        .view-mode-btn {
          background: transparent;
          border: none;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          color: #64748b;
          font-family: inherit;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 500;
        }
        
        .view-mode-btn:hover {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }
        
        .view-mode-btn.active {
          color: #ffffff;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        /* Layout khusus untuk AppSheet */
        .appsheet-special-layout {
          margin-bottom: 2.5rem;
        }
        
        .appsheet-title {
          font-size: 1.4rem;
          color: #1e40af;
          margin-bottom: 1.2rem;
          text-align: center;
          font-weight: 700;
        }
        
        .appsheet-mobile-section,
        .appsheet-browser-section {
          margin-bottom: 2rem;
        }
        
        .appsheet-mobile-section h4,
        .appsheet-browser-section h4 {
          font-size: 1.1rem;
          color: #475569;
          margin-bottom: 0.8rem;
          font-weight: 600;
          padding-left: 0.5rem;
          border-left: 3px solid #3b82f6;
        }
        
        .appsheet-mobile-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 1.5rem;
        }
        
        .appsheet-browser-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 1.5rem;
        }
        
        .appsheet-image-item {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.06);
          position: relative;
        }
        
        /* Bingkai mobile untuk AppSheet */
        .mobile-frame {
          height: 280px;
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          background: white;
          padding: 10px;
        }
        
        .mobile-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
        }
        
        /* Bingkai browser untuk AppSheet */
        .browser-frame {
          height: 200px;
          position: relative;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          background: white;
        }
        
        .browser-frame img {
          width: 100%;
          height: calc(100% - 36px);
          object-fit: cover;
          margin-top: 36px;
        }
        
        .appsheet-image-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(59, 130, 246, 0.15);
        }
        
        .frame-overlay {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          font-size: 0.8rem;
        }
        
        /* Style untuk browser frame header (seperti Laravel) */
        .browser-frame-header {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 36px;
          background: #e5e7eb;
          border-radius: 8px 8px 0 0;
          display: flex;
          align-items: center;
          padding: 0 10px;
          z-index: 2;
          gap: 8px;
        }
        
        .browser-dots {
          display: flex;
          gap: 6px;
        }
        
        .browser-dots span {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          display: block;
        }
        
        .browser-dots span:nth-child(1) {
          background: #f87171;
        }
        
        .browser-dots span:nth-child(2) {
          background: #fbbf24;
        }
        
        .browser-dots span:nth-child(3) {
          background: #10b981;
        }
        
        .browser-url-bar {
          flex: 1;
          background: white;
          height: 24px;
          border-radius: 4px;
          padding: 0 8px;
          font-size: 0.7rem;
          display: flex;
          align-items: center;
          color: #64748b;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        
        /* Style untuk info overlay pada gambar AppSheet */
        .project-info-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: white;
          padding: 10px;
          font-size: 0.8rem;
          text-align: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        
        .project-tech-tags {
          display: flex;
          gap: 4px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .tech-tag-small {
          background: rgba(59, 130, 246, 0.2);
          color: white;
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 0.6rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .appsheet-image-item:hover .project-info-overlay {
          opacity: 1;
        }
        
        /* Gallery grid untuk proyek lainnya */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 1.2rem;
        }
        
        .gallery-item {
          background: rgba(255, 255, 255, 0.9);
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          border: 1px solid rgba(255, 255, 255, 0.8);
          height: 180px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          cursor: pointer;
        }
        
        .gallery-item:hover {
          transform: translateY(-4px);
          border-color: rgba(59, 130, 246, 0.2);
          box-shadow: 0 12px 25px rgba(59, 130, 246, 0.15);
        }
        
        .gallery-item-inner {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        
        .gallery-image-container {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f5f9;
        }
        
        .gallery-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .gallery-item:hover .gallery-image {
          transform: scale(1.05);
        }
        
        .view-mode-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          background: rgba(255, 255, 255, 0.9);
          border-radius: 50%;
          width: 26px;
          height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
          font-size: 0.8rem;
        }
        
        .gallery-item:hover .gallery-item-overlay {
          opacity: 1;
          transform: translateY(0);
        }
        
        .gallery-item-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(transparent, rgba(255, 255, 255, 0.95));
          padding: 1rem;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s ease;
          backdrop-filter: blur(5px);
        }
        
        .gallery-item-overlay h4 {
          margin: 0 0 0.4rem 0;
          color: #1e40af;
          font-size: 1rem;
          font-weight: 700;
        }
        
        .tech-type {
          color: #64748b;
          font-size: 0.8rem;
          margin: 0 0 0.8rem 0;
          font-weight: 500;
        }
        
        .gallery-links {
          display: flex;
          gap: 0.8rem;
        }
        
        .gallery-links a {
          color: #3b82f6;
          text-decoration: none;
          font-size: 0.8rem;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          transition: all 0.3s ease;
          font-weight: 500;
          padding: 0.3rem 0.7rem;
          border-radius: 18px;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.1);
        }
        
        .gallery-links a:hover {
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
        }
        
        /* Style untuk placeholder ketika tidak ada gambar */
        .no-image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #94a3b8;
        }
        
        .no-image-placeholder i {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        
        .no-image-placeholder p {
          font-size: 0.8rem;
          margin: 0;
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
            max-width: 95%;
          }
          
          .projects-title {
            font-size: 2rem;
          }
          
          .gallery-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .gallery-albums {
            justify-content: center;
          }
          
          .view-mode-toggle {
            align-self: center;
          }
          
          .appsheet-browser-grid {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 1rem;
          }
          
          .appsheet-mobile-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 1rem;
          }
          
          .appsheet-image-item.browser-frame {
            height: 180px;
          }
          
          .browser-frame-header {
            height: 32px;
          }
          
          .browser-url-bar {
            font-size: 0.6rem;
            height: 20px;
          }
          
          .appsheet-image-item.browser-frame img {
            height: calc(100% - 32px);
            margin-top: 32px;
          }
          
          .mobile-frame {
            height: 220px;
          }
          
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 1rem;
          }
          
          .gallery-item {
            height: 150px;
          }
          
          .project-header {
            flex-direction: column;
            gap: 0.6rem;
          }
          
          .projects-tabs {
            width: 100%;
            justify-content: center;
          }
          
          .bg-ball-1, .bg-ball-2, .bg-ball-3, .bg-ball-4 {
            display: none;
          }
          
          .image-preview {
            max-width: 95%;
            padding: 10px;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;