'use client';

import React, { useState } from 'react';

interface ProjectItem {
  id: number;
  title: string;
  period: string;
  role: string;
  description: string[];
  technologies: string[];
}

interface ProjectsProps {
  project: ProjectItem;
}

const Projects: React.FC<ProjectsProps> = ({ project }) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="experience-item">
      <div className="experience-period">{project.period}</div>
      <h3 className="experience-title">{project.title}</h3>
      <p className="experience-company">{project.role}</p>
      
      <ul className="experience-description">
        {project.description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      <div className="tech-tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Upload Photo Section */}
      <div className="upload-container">
        <label className="upload-label">
          <div className="upload-icon">📷</div>
          <div className="upload-text">Upload project screenshot</div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="upload-input"
          />
          <span className="text-xs text-gray-500">Click to upload an image</span>
        </label>
        
        {image && (
          <div className="image-preview">
            <img src={image} alt="Uploaded project" />
            <button onClick={removeImage} className="remove-image">
              Remove Image
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;