import React, { useState, useEffect, useRef } from 'react';
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
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Canvas animation for 3D effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Floating particles for 3D effect
    interface Particle {
      x: number;
      y: number;
      radius: number;
      speed: number;
      angle: number;
      color: string;
    }
    
    const particles: Particle[] = [];
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        speed: Math.random() * 2 + 0.5,
        angle: Math.random() * Math.PI * 2,
        color: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 150}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.2})`
      });
    }
    
    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.1)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += Math.cos(particle.angle) * particle.speed;
        particle.y += Math.sin(particle.angle) * particle.speed;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Hard skills organized by category with React Icons
  const skills = {
    technical: [
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Laravel", icon: <SiLaravel /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "React Native", icon: <SiReact /> },
      { name: "PHP", icon: <SiPhp /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "Git", icon: <SiGit /> },
      { name: "AppSheet", icon: <RiTelegram2Fill /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Google Sheets", icon: <SiGooglesheets /> },
    ]
  };

  return (
    <div 
      id="skills" 
      ref={sectionRef}
      style={{
        padding: "2rem 1rem",
        maxWidth: "1000px",
        margin: "0 auto",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.4), inset 0 0 0 1px rgba(255, 255, 255, 0.05)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
      }}
    >
      {/* Canvas for 3D animation */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0
        }}
      />
      
      {/* Animated background elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 30%, rgba(37, 99, 235, 0.1) 0%, transparent 50%)",
        zIndex: 1
      }}></div>
      
      {/* 3D Cube Animation */}
      <div style={{
        position: "absolute",
        top: "20%",
        right: "10%",
        width: "60px",
        height: "60px",
        transformStyle: "preserve-3d",
        transform: "rotateX(60deg) rotateZ(45deg)",
        animation: "rotate3D 15s infinite linear",
        zIndex: 1
      }}>
        {['front', 'back', 'top', 'bottom', 'left', 'right'].map((face, i) => (
          <div key={face} style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            background: `rgba(${96 + i * 10}, ${165 - i * 5}, ${250 - i * 15}, 0.2)`,
            border: "1px solid rgba(96, 165, 250, 0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            transform: `${face === 'front' ? 'translateZ(30px)' : 
                      face === 'back' ? 'translateZ(-30px)' : 
                      face === 'top' ? 'rotateX(90deg) translateZ(30px)' : 
                      face === 'bottom' ? 'rotateX(-90deg) translateZ(30px)' : 
                      face === 'left' ? 'rotateY(-90deg) translateZ(30px)' : 
                      'rotateY(90deg) translateZ(30px)'}`
          }}></div>
        ))}
      </div>
      
      {/* Floating Pyramid */}
      <div style={{
        position: "absolute",
        bottom: "15%",
        left: "10%",
        width: "0",
        height: "0",
        borderLeft: "30px solid transparent",
        borderRight: "30px solid transparent",
        borderBottom: "52px solid rgba(139, 92, 246, 0.2)",
        animation: "floatPyramid 8s infinite ease-in-out",
        zIndex: 1
      }}></div>
      
      <div style={{
        position: "absolute",
        bottom: "15%",
        left: "10%",
        width: "0",
        height: "0",
        borderLeft: "25px solid transparent",
        borderRight: "25px solid transparent",
        borderBottom: "43px solid rgba(139, 92, 246, 0.3)",
        animation: "floatPyramid 7s infinite ease-in-out reverse",
        zIndex: 1,
        transform: "translateY(10px) translateX(5px)"
      }}></div>

      <h2 style={{
        textAlign: "center",
        marginBottom: "2rem",
        color: "transparent",
        background: "linear-gradient(90deg, #60a5fa, #3b82f6)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        fontSize: "2.2rem",
        fontWeight: "bold",
        letterSpacing: "1px",
        position: "relative",
        zIndex: 2,
        textShadow: "0 2px 8px rgba(96, 165, 250, 0.4)",
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(15px)",
        transition: "opacity 0.6s ease, transform 0.6s ease"
      }}>
        SKILLS
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "1.5rem",
        marginBottom: "1.5rem",
        position: "relative",
        zIndex: 2
      }}>
        {/* Technical Skills */}
        <div style={{
          background: "rgba(30, 41, 59, 0.6)",
          borderRadius: "12px",
          padding: "1.5rem",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(96, 165, 250, 0.1)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 255, 255, 0.05)",
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          opacity: isVisible ? 1 : 0,
          transition: "transform 0.6s ease 0.2s, opacity 0.6s ease 0.2s",
          gridColumn: "1 / -1"
        }}>
          <h3 style={{
            color: "#60a5fa",
            fontSize: "1.4rem",
            marginBottom: "1.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            justifyContent: "center"
          }}>
            <MdOutlineLaptopChromebook style={{ fontSize: "1.6rem" }} /> TECHNICAL SKILLS
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
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0.8rem 0.5rem",
                  borderRadius: "10px",
                  background: "rgba(15, 23, 42, 0.4)",
                  boxShadow: hoveredSkill === skill.name 
                    ? "0 0 15px rgba(96, 165, 250, 0.6), 0 0 0 1px rgba(96, 165, 250, 0.3)" 
                    : "3px 3px 8px rgba(0, 0, 0, 0.2), -1px -1px 5px rgba(96, 165, 250, 0.05)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                  transform: hoveredSkill === skill.name ? "scale(1.1) translateY(-5px)" : "scale(1)",
                  zIndex: hoveredSkill === skill.name ? 10 : 1
                }}
              >
                <div style={{
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "0.6rem",
                  borderRadius: "8px",
                  background: "rgba(15, 23, 42, 0.6)",
                  padding: "0.3rem",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  fontSize: "1.4rem",
                  color: hoveredSkill === skill.name ? "#60a5fa" : "#cbd5e1",
                  transition: "all 0.3s ease",
                  animation: hoveredSkill === skill.name ? "pulseIcon 1.5s infinite" : "none"
                }}>
                  {skill.icon}
                </div>
                <span style={{
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  color: "#e2e8f0",
                  textAlign: "center",
                }}>
                  {skill.name}
                </span>
                
                {/* Animated wave effect on hover */}
                {hoveredSkill === skill.name && (
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, transparent, #60a5fa, transparent)",
                    animation: "wave 1.5s linear infinite"
                  }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Game-inspired console footer */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1.5rem",
        padding: "0.8rem",
        background: "rgba(15, 23, 42, 0.5)",
        borderRadius: "8px",
        border: "1px solid rgba(96, 165, 250, 0.2)",
        position: "relative",
        zIndex: 2,
        animation: "glowBorder 3s infinite alternate"
      }}>
        <div style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center"
        }}>
          <div style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #ef4444, #b91c1c)",
            boxShadow: "0 0 8px #ef4444",
            animation: "pulse 2s infinite alternate"
          }}></div>
          <div style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #f59e0b, #d97706)",
            boxShadow: "0 0 8px #f59e0b",
            animation: "pulse 2s infinite alternate-reverse"
          }}></div>
          <div style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "linear-gradient(145deg, #10b981, #059669)",
            boxShadow: "0 0 8px #10b981",
            animation: "pulse 2s infinite alternate 0.5s"
          }}></div>
        </div>
        
        <div style={{
          margin: "0 1.5rem",
          fontSize: "0.7rem",
          color: "#93c5fd",
          fontWeight: "500",
          letterSpacing: "1px",
          animation: "textGlow 2s infinite alternate"
        }}>
        HOVER FOR INTERACTION
        </div>
        
        <div style={{
          display: "flex",
          gap: "0.5rem"
        }}>
          {["A", "B", "X", "Y"].map((btn, i) => (
            <div key={btn} style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: "rgba(30, 41, 59, 0.8)",
              border: "1px solid rgba(96, 165, 250, 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#93c5fd",
              fontSize: "0.6rem",
              fontWeight: "bold",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
              animation: `bounce 2s infinite ${i * 0.2}s`
            }}>
              {btn}
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes rotate3D {
            0% {
              transform: rotateX(60deg) rotateZ(0deg);
            }
            100% {
              transform: rotateX(60deg) rotateZ(360deg);
            }
          }
          
          @keyframes floatPyramid {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
            }
            50% {
              transform: translateY(-15px) rotate(5deg);
            }
          }
          
          @keyframes wave {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
          
          @keyframes glowBorder {
            0% {
              box-shadow: 0 0 5px rgba(96, 165, 250, 0.3);
            }
            100% {
              box-shadow: 0 0 15px rgba(96, 165, 250, 0.6);
            }
          }
          
          @keyframes textGlow {
            0% {
              text-shadow: 0 0 5px rgba(147, 197, 253, 0.5);
            }
            100% {
              text-shadow: 0 0 10px rgba(147, 197, 253, 0.8);
            }
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0);
            }
            40% {
              transform: translateY(-5px);
            }
            60% {
              transform: translateY(-3px);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.8;
            }
            100% {
              transform: scale(1.1);
              opacity: 1;
            }
          }
          
          @keyframes pulseIcon {
            0% {
              filter: drop-shadow(0 0 2px rgba(96, 165, 250, 0.5));
            }
            100% {
              filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.9));
            }
          }

          @media (max-width: 768px) {
            #skills > div:first-of-type {
              grid-template-columns: 1fr !important;
            }
          }

          @media (max-width: 480px) {
            #skills {
              padding: 1.5rem 0.8rem !important;
            }
            
            #skills > div:first-of-type > div {
              grid-template-columns: repeat(3, 1fr) !important;
            }
            
            .console-footer {
              flex-direction: column;
              gap: 0.8rem;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Skills;