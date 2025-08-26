import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  // Hard skills organized by category
  const hardSkills = [
    { category: "Web Development", skills: ["HTML", "CSS", "JavaScript", "Laravel", "Next.js"] },
    { category: "Mobile Development", skills: ["React Native", "AppSheet"] },
    { category: "Database", skills: ["MySQL", "PhpMyAdmin", "PHP"] },
    { category: "UI/UX Design", skills: ["Figma", "Canva"] },
    { category: "Office Tools", skills: ["Microsoft Word", "Microsoft Excel"] },
    { category: "Tools", skills: ["Git", "GitHub"] },
    { category: "Testing", skills: ["Functional Testing", "UI/UX Testing", "Security Testing"] }
  ];

  // Soft skills
  const softSkills = [
    "Team Collaboration",
    "Data & Document Management",
    "Public Speaking",
    "Problem Solving",
    "Project Coordination",
    "Adaptability",
    "Detail-Oriented"
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-main-title">
          Skills
          <div className="rabbit-animation">
            <div className="rabbit">
              <div className="rabbit-ear rabbit-ear-left"></div>
              <div className="rabbit-ear rabbit-ear-right"></div>
              <div className="rabbit-face">
                <div className="rabbit-eye rabbit-eye-left"></div>
                <div className="rabbit-eye rabbit-eye-right"></div>
                <div className="rabbit-nose"></div>
              </div>
            </div>
          </div>
        </h2>
        
        <div className="skills-grid">
          {/* Hard Skills Card */}
          <div className="skill-card">
            <div className="card-header">
              <div className="icon-container hard-skill-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <h3 className="card-title">Hard Skills</h3>
            </div>
            
            <div className="skills-category-container">
              {hardSkills.map((category, index) => (
                <div key={index} className="skill-category-group">
                  <h4 className="skill-category-title">{category.category}</h4>
                  <ul className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="skill-item hard-skill-item">
                        <span className="skill-bullet">✦</span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          
          {/* Soft Skills Card */}
          <div className="skill-card">
            <div className="card-header">
              <div className="icon-container soft-skill-icon">
                <i className="fas fa-people-group"></i>
              </div>
              <h3 className="card-title">Soft Skills</h3>
            </div>
            
            <ul className="soft-skills-list">
              {softSkills.map((skill, index) => (
                <li key={index} className="skill-item soft-skill-item">
                  <span className="skill-bullet">❀</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;