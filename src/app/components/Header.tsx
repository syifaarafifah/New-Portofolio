'use client';

import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-8 sticky top-0 z-10">
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold text-gray-900">WELCOME</div>
        <nav className="flex space-x-6">
          <button 
            onClick={() => scrollToSection('experience')}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors px-3 py-1 rounded hover:bg-gray-100"
          >
            Experience
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors px-3 py-1 rounded hover:bg-gray-100"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('education')}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors px-3 py-1 rounded hover:bg-gray-100"
          >
            Education
          </button>
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-600 hover:text-blue-600 text-sm font-medium transition-colors px-3 py-1 rounded hover:bg-gray-100"
          >
            Skills
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;