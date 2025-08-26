import React from 'react';
import SidebarNav from './SidebarNav';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {/* Header Section - Lebih Compact */}
        <div className="mb-4"> {/* Kurangi margin bottom */}
          <h1 className="sidebar-heading">SYIFA RAFIFAH</h1>
          <h2 className="sidebar-subheading">Front-End Developer</h2>
          <p className="sidebar-text">
            Building Scalable Interfaces with React & Next.js
          </p>
        </div>
        
        <div className="section-divider"></div>
        
        {/* Contact Section - Lebih Compact */}
        <div className="section-group mb-4"> {/* Kurangi margin bottom */}
          <h3 className="section-title">CONTACT</h3>
          <div className="contact-info">
            <p>+62 895-4031-53291</p>
            <p>syifarafifah527@gmail.com</p>
            <p>Batam, Indonesia</p>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        {/* Navigation Section - Lebih Compact */}
        <div className="section-group mb-4"> {/* Kurangi margin bottom */}
          <h3 className="section-title">NAVIGATION</h3>
          <SidebarNav />
        </div>
        
        <div className="section-divider"></div>
        
        {/* Links Section - Dipindah ke bawah */}
        <div className="sidebar-links">
          <h3 className="section-title">LINKS</h3>
          <div className="contact-info">
            <p>
              <a 
                href="https://tinyurl.com/syifarafifah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sidebar-link"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a 
                href="https://github.com/syifaarafifah" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sidebar-link"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;