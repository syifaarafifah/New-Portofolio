import React from 'react';

const Skills: React.FC = () => {
  // Hard skills organized by category
  const skills = {
    technical: [
      { name: "HTML", icon: "🟧" },
      { name: "CSS", icon: "🟦" },
      { name: "JavaScript", icon: "🟨" },
      { name: "Laravel", icon: "🔴" },
      { name: "Next.js", icon: "⚫" },
      { name: "React Native", icon: "🔵" },
      { name: "PHP", icon: "🟣" },
      { name: "MySQL", icon: "🔶" },
      { name: "Figma", icon: "🟢" },
      { name: "Git", icon: "🔺" },
      { name: "AppSheet", icon: "🟩" },
      { name: "TypeScript", icon: "🔷" },
      { name: "Tailwind CSS", icon: "🦋" },
    ],
    soft: [
      { name: "Team Collaboration", icon: "👥" },
      { name: "Problem Solving", icon: "💡" },
      { name: "Project Management", icon: "📊" },
      { name: "Adaptability", icon: "🔄" },
      { name: "Attention to Detail", icon: "🔍" },
      { name: "Communication", icon: "💬" },
      { name: "Time Management", icon: "⏰" },
    ],
  };

  return (
    <div style={{
      padding: "2rem",
      maxWidth: "1200px",
      margin: "0 auto"
    }}>
      <h2 style={{
        textAlign: "center",
        marginBottom: "2rem",
        color: "#1E40AF",
        fontSize: "2.5rem",
        fontWeight: "bold"
      }}>
        SKILLS
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "2rem",
        marginBottom: "2rem"
      }}>
        <div style={{
          background: "white",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease"
        }}>
          <h3 style={{
            color: "#1E40AF",
            fontSize: "1.5rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "center"
          }}>
            💻 TECHNICAL SKILLS
          </h3>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
            justifyContent: "center"
          }}>
            {skills.technical.map((skill, index) => (
              <span
                key={`tech-${index}`}
                style={{
                  background: "#DBEAFE",
                  color: "#1E40AF",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div style={{
          background: "white",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s ease"
        }}>
          <h3 style={{
            color: "#1E40AF",
            fontSize: "1.5rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "center"
          }}>
            👥 SOFT SKILLS
          </h3>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.8rem",
            justifyContent: "center"
          }}>
            {skills.soft.map((skill, index) => (
              <span
                key={`soft-${index}`}
                style={{
                  background: "#DBEAFE",
                  color: "#1E40AF",
                  padding: "0.5rem 1rem",
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease"
                }}
              >
                {skill.icon} {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;