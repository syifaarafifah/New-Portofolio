'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ExperienceItem } from '../data/experience';

interface ExperienceProps {
  experience: ExperienceItem;
  index: number;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={experienceRef}
      className={`experience-item relative p-6 mb-8 rounded-xl overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
        transition: 'transform 0.5s ease, opacity 0.7s ease, transform 0.7s ease',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(circle at ${isHovered ? '70% 20%' : '30% 40%'}, #ff5e7d 0%, #6a67ce 30%, #3a3a5c 60%)`,
          transition: 'all 1s ease',
          filter: 'blur(20px)',
        }}
      />
      
      {/* Floating particles */}
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            background: `hsl(${Math.random() * 60 + 200}, 70%, 70%)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: isHovered ? 0.7 : 0.3,
            transform: `scale(${isHovered ? 1.5 : 1})`,
            transition: 'all 1s ease',
            animation: `float${i % 3 + 1} ${10 + i * 2}s infinite ease-in-out`,
          }}
        />
      ))}

      {/* Animated border */}
      <div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          boxShadow: isHovered 
            ? '0 0 25px rgba(160, 100, 255, 0.6), 0 0 50px rgba(100, 150, 255, 0.4)' 
            : '0 0 10px rgba(160, 100, 255, 0.3), 0 0 20px rgba(100, 150, 255, 0.2)',
          transition: 'box-shadow 0.7s ease',
        }}
      />

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300"
              style={{fontFamily: "'Poetsen One', sans-serif"}}>
            {experience.title}
          </h3>
          <span className="text-sm md:text-md text-purple-200 mt-1 md:mt-0"
                style={{fontFamily: "'Outfit', sans-serif"}}>
            {experience.period}
          </span>
        </div>

        <div className="flex items-center mb-4">
          {experience.link ? (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-cyan-200 font-semibold hover:text-cyan-300 transition-colors duration-300"
              style={{fontFamily: "'Outfit', sans-serif"}}
            >
              {experience.company}
            </a>
          ) : (
            <span className="text-lg text-cyan-200 font-semibold"
                  style={{fontFamily: "'Outfit', sans-serif"}}>
              {experience.company}
            </span>
          )}
        </div>

        <p className="text-gray-200 mb-4 leading-relaxed"
           style={{fontFamily: "'Outfit', sans-serif"}}>
          {experience.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-2">
          {experience.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 hover:scale-105"
              style={{
                animationDelay: `${techIndex * 0.1}s`,
                animation: isVisible ? `fadeIn 0.5s ${techIndex * 0.1}s forwards` : 'none',
                opacity: 0,
                background: 'rgba(136, 85, 255, 0.15)',
                color: '#a88ceaff',
                fontFamily: "'Outfit', sans-serif",
                padding: '6px 12px',
                margin: '4px'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poetsen+One&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-20px) translateX(10px) rotate(120deg); }
          66% { transform: translateY(10px) translateX(-15px) rotate(240deg); }
        }
        
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(15px) translateX(-20px) rotate(120deg); }
          66% { transform: translateY(-10px) translateX(15px) rotate(240deg); }
        }
        
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(-15px) rotate(120deg); }
          66% { transform: translateY(20px) translateX(10px) rotate(240deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .experience-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          transition: left 0.7s ease;
        }
        
        .experience-item:hover::before {
          left: 100%;
        }
      `}</style>
    </div>
  );
};

export default Experience;