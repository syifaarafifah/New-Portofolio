'use client';

import React, { useState, useEffect } from 'react';
import { ExperienceItem } from '../data/experience';

interface ExperienceProps {
  experience: ExperienceItem;
  index: number;
}

const Experience: React.FC<ExperienceProps> = ({ experience, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animasi masuk berurutan berdasarkan index
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`experience-item relative overflow-hidden rounded-2xl p-8 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: isHovered 
          ? 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(248,249,250,0.95) 100%), url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%239C92AC\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")'
          : 'linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,249,250,0.98) 100%), url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%239C92AC\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
        boxShadow: isHovered 
          ? '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.9)' 
          : '0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.03)',
        transform: isHovered ? 'translateY(-5px) scale(1.01)' : 'translateY(0) scale(1)',
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Animated abstract shapes */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-40 h-40 -mt-20 -mr-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 -mb-20 -ml-20 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Floating elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M20,20 Q50,0 80,20 Q100,50 80,80 Q50,100 20,80 Q0,50 20,20 Z" 
                stroke="currentColor" strokeWidth="2" fill="none" 
                className="text-purple-400 animate-spin-slow" />
        </svg>
      </div>
      
      <div className="absolute -bottom-6 -left-6 w-20 h-20 opacity-20">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path d="M30,10 L90,30 L70,90 L10,70 Z" stroke="currentColor" strokeWidth="3" fill="none" 
                className="text-amber-400 animate-pulse-slow" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="experience-period text-sm text-gray-600 font-medium bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full border border-gray-100 shadow-sm">
            {experience.period}
          </div>
          
          <div className={`transition-all duration-700 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}>
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-amber-500 shadow-md"></div>
          </div>
        </div>

        <h3 className="experience-title text-2xl font-semibold mb-3 text-gray-800">
          {experience.title}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-amber-500 mx-2">•</span>
          {experience.link ? (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-company text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600 hover:from-purple-700 hover:to-amber-700 transition-all duration-500 relative group"
            >
              {experience.company}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-amber-500 transition-all duration-500 group-hover:w-full"></span>
            </a>
          ) : (
            <span className="experience-company text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-amber-600">{experience.company}</span>
          )}
        </h3>

        <p className="experience-description text-gray-600 mt-5 leading-relaxed transition-all duration-500 pl-0">
          {experience.description}
        </p>

        <div className="tech-tags flex flex-wrap gap-3 mt-7">
          {experience.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="tech-tag bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-100 transition-all duration-500 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-amber-500/10 hover:border-transparent hover:shadow-md hover:-translate-y-0.5"
              style={{
                transitionDelay: `${techIndex * 50}ms`,
                transform: isHovered ? 'translateY(0)' : 'translateY(3px)',
                opacity: isHovered ? 1 : 0.9
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Subtle shine effect on hover */}
      <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform transition-all duration-1000 ${isHovered ? 'translate-x-full opacity-100' : '-translate-x-full opacity-0'}`}></div>
    </div>
  );
};

export default Experience;