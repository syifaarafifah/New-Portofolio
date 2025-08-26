'use client';

import React from 'react';
import { ExperienceItem } from '../data/experience'; // sesuaikan path

interface ExperienceProps {
  experience: ExperienceItem;
}

const Experience: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <div className="experience-item p-4 border rounded-lg shadow-sm mb-4">
      <div className="experience-period text-sm text-gray-500 mb-1">
        {experience.period}
      </div>

      <h3 className="experience-title text-lg font-semibold">
        {experience.title} -{' '}
        {experience.link ? (
          <a
            href={experience.link}
            target="_blank"
            rel="noopener noreferrer"
            className="experience-company text-blue-600 hover:underline"
          >
            {experience.company}
          </a>
        ) : (
          <span className="experience-company text-blue-600">{experience.company}</span>
        )}
      </h3>

      <p className="experience-description text-gray-700 mt-2">
        {experience.description}
      </p>

      <div className="tech-tags flex flex-wrap gap-2 mt-2">
        {experience.technologies.map((tech: string, index: number) => (
          <span
            key={index}
            className="tech-tag bg-gray-200 px-2 py-1 rounded text-sm text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Experience;
