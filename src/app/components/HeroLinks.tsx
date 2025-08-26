'use client';

import React from 'react';

const HeroLinks = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-links">
      <button 
        onClick={() => scrollToSection('projects')}
        className="nav-link group flex items-center text-black font-medium text-lg"
      >
        → see my projects
        <span className="arrow-hover">→</span>
      </button>
      <button 
        onClick={() => scrollToSection('about')}
        className="nav-link group flex items-center text-black font-medium text-lg"
      >
        → more about me
        <span className="arrow-hover">→</span>
      </button>
    </div>
  );
};

export default HeroLinks;