'use client';

import React from 'react';

const SidebarNav = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ul className="nav-list">
      <li 
        className="nav-item cursor-pointer hover:text-white transition-colors" 
        onClick={() => scrollToSection('experience')}
      >
        EXPERIENCE
      </li>
      <li 
        className="nav-item-inactive cursor-pointer hover:text-gray-300 transition-colors" 
        onClick={() => scrollToSection('projects')}
      >
        PROJECTS
      </li>
      <li 
        className="nav-item-inactive cursor-pointer hover:text-gray-300 transition-colors" 
        onClick={() => scrollToSection('education')}
      >
        EDUCATION
      </li>
      <li 
        className="nav-item-inactive cursor-pointer hover:text-gray-300 transition-colors" 
        onClick={() => scrollToSection('skills')}
      >
        SKILLS
      </li>
    </ul>
  );
};

export default SidebarNav;