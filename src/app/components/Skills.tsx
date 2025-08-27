import React from 'react';
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiLaravel, 
  SiNextdotjs, 
  SiReact, 
  SiPhp, 
  SiMysql, 
  SiFigma, 
  SiGit, 
  SiTypescript, 
  SiTailwindcss,
  SiCanva,
  SiGooglesheets
} from 'react-icons/si';
import { RiTelegram2Fill } from "react-icons/ri";
import { MdOutlineLaptopChromebook } from "react-icons/md";

const Skills: React.FC = () => {
  // Hard skills organized by category with React Icons
  const skills = {
    technical: [
      { name: "HTML", icon: <SiHtml5 style={{ color: '#E34F26' }} /> },
      { name: "CSS", icon: <SiCss3 style={{ color: '#1572B6' }} /> },
      { name: "JavaScript", icon: <SiJavascript style={{ color: '#F7DF1E' }} /> },
      { name: "Laravel", icon: <SiLaravel style={{ color: '#FF2D20' }} /> },
      { name: "Next.js", icon: <SiNextdotjs style={{ color: '#000000' }} /> },
      { name: "React Native", icon: <SiReact style={{ color: '#61DAFB' }} /> },
      { name: "PHP", icon: <SiPhp style={{ color: '#777BB4' }} /> },
      { name: "MySQL", icon: <SiMysql style={{ color: '#4479A1' }} /> },
      { name: "Figma", icon: <SiFigma style={{ color: '#F24E1E' }} /> },
      { name: "Git", icon: <SiGit style={{ color: '#F05032' }} /> },
      { name: "AppSheet", icon: <RiTelegram2Fill style={{ color: '#3857e1ff' }} /> },
      { name: "TypeScript", icon: <SiTypescript style={{ color: '#3178C6' }} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: '#06B6D4' }} /> },
      { name: "Canva", icon: <SiCanva style={{ color: '#00C4CC' }} /> },
      { name: "Google Sheets", icon: <SiGooglesheets style={{ color: '#34A853' }} /> },
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
    <div id="skills" style={{ // TAMBAHKAN ID DI SINI
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
        {/* Technical Skills */}
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
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            justifyContent: "center"
          }}>
            <MdOutlineLaptopChromebook /> TECHNICAL SKILLS
          </h3>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(70px, 1fr))",
            gap: "1rem",
            justifyContent: "center"
          }}>
            {skills.technical.map((skill, index) => (
              <div
                key={`tech-${index}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.6rem",
                  borderRadius: "10px",
                  background: "#f8fafc",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.4rem",
                  borderRadius: "8px",
                  background: "white",
                  padding: "0.2rem",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
                  fontSize: "1.8rem"
                }}>
                  {skill.icon}
                </div>
                <span style={{
                  fontSize: "0.7rem",
                  fontWeight: "500",
                  color: "#1E40AF",
                  textAlign: "center"
                }}>
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
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
                  padding: "0.5rem 0.8rem",
                  borderRadius: "17px",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem"
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