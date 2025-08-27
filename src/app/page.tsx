"use client";

import { useEffect, useState } from "react";
import Header from "./components/Header";
import Experience from "./components/Experience";
import HeroLinks from "./components/HeroLinks";
import BubbleBackground from "./components/BubbleBackground";
import { experiences } from "./data/experience";
import { projects } from "./data/projects";
import LockScreen from "./components/LockScreen";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHome,
  FaBriefcase,
  FaChartBar,
  FaBolt,
  FaCode,
  FaLaptopCode,
  FaTools,
  FaUsers,
  FaLightbulb,
  FaProjectDiagram,
  FaGraduationCap,
  FaLock,
  FaLockOpen,
} from "react-icons/fa";
import {
  SiGmail,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiLaravel,
  SiMysql,
  SiFigma,
  SiGit,
  SiTypescript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiPhp,
  SiAppstore,
} from "react-icons/si";
import { IoMdSchool, IoMdCloudDownload } from "react-icons/io";

// Define interface untuk Balloon
interface BalloonProps {
  key: number;
  style: React.CSSProperties;
  children?: React.ReactNode;
}

// Define skills data dengan semua skills yang diminta
const skills = {
  technical: [
    { name: "HTML", icon: <SiHtml5 className="text-blue-400" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-blue-600" /> },
    { name: "Laravel", icon: <SiLaravel className="text-blue-700" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-blue-800" /> },
    { name: "React Native", icon: <SiReact className="text-blue-900" /> },
    { name: "PHP", icon: <SiPhp className="text-blue-400" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "Figma", icon: <SiFigma className="text-blue-600" /> },
    { name: "Git", icon: <SiGit className="text-blue-700" /> },
    { name: "AppSheet", icon: <SiAppstore className="text-blue-800" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-900" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
  ],
  soft: [
    {
      name: "Team Collaboration",
      icon: <FaUsers className="text-blue-500" />,
    },
    {
      name: "Problem Solving",
      icon: <FaLightbulb className="text-blue-600" />,
    },
    {
      name: "Project Management",
      icon: <FaProjectDiagram className="text-blue-700" />,
    },
    {
      name: "Adaptability",
      icon: <IoMdCloudDownload className="text-blue-400" />,
    },
    {
      name: "Attention to Detail",
      icon: <FaTools className="text-blue-500" />,
    },
    { name: "Communication", icon: <FaEnvelope className="text-blue-600" /> },
    {
      name: "Time Management",
      icon: <FaChartBar className="text-blue-700" />,
    },
  ],
};

// Komponen Projects yang dipindahkan ke sini
const Projects = () => {
  return (
    <div id="projects" className="content-section">
      <div className="section-divider"></div>
      <h2 className="section-header flex items-center justify-center gap-2" style={{ color: '#1E40AF' }}>
        <FaProjectDiagram style={{ color: '#1E40AF' }} />
        PROJECTS
      </h2>

      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={`proj-${project.id}-${index}`}
            className="project-item"
          >
            <div className="project-header">
              <div>
                <h3 className="project-title flex items-center gap-2" style={{ color: '#1E40AF' }}>
                  <FaLaptopCode style={{ color: '#1E40AF' }} />
                  {project.title}
                </h3>
                <p className="project-role">{project.role}</p>
              </div>
              <span className="project-period">{project.period}</span>
            </div>

            <div className="project-description">
              <p>{project.description}</p>
            </div>

            {/* Project Gallery */}
            <div className="project-gallery">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="gallery-item">
                  Project Image {i + 1}
                </div>
              ))}
            </div>

            <div className="tech-tags">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={`tech-${index}-${techIndex}`}
                  className="tech-tag"
                  style={{ background: '#DBEAFE', color: '#1E40AF' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Komponen Skills yang dipindahkan ke sini
const Skills = () => {
  return (
    <div id="skills" className="content-section">
      <div className="section-divider"></div>
      <h2 className="section-header flex items-center justify-center gap-2" style={{ color: '#1E40AF' }}>
        <FaBolt style={{ color: '#1E40AF' }} />
        SKILLS
      </h2>

      <div className="skills-grid">
        <div className="skill-category">
          <h3 className="flex items-center justify-center gap-2" style={{ color: '#1E40AF' }}>
            <FaCode style={{ color: '#1E40AF' }} />
            TECHNICAL SKILLS
          </h3>
          <div className="skills-list">
            {skills.technical.map((skill, index) => (
              <span
                key={`tech-${index}`}
                className="skill-item flex items-center gap-2"
                style={{ background: '#DBEAFE', color: '#1E40AF' }}
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        <div className="skill-category">
          <h3 className="flex items-center justify-center gap-2" style={{ color: '#1E40AF' }}>
            <FaUsers style={{ color: '#1E40AF' }} />
            SOFT SKILLS
          </h3>
          <div className="skills-list">
            {skills.soft.map((skill, index) => (
              <span
                key={`soft-${index}`}
                className="skill-item flex items-center gap-2"
                style={{ background: '#DBEAFE', color: '#1E40AF' }}
              >
                {skill.icon}
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Education yang dipindahkan ke sini
const Education = () => {
  return (
    <div id="education" className="content-section">
      <div className="section-divider"></div>
      <h2 className="section-header flex items-center justify-center gap-2" style={{ color: '#1E40AF' }}>
        <FaGraduationCap style={{ color: '#082891ff' }} />
        EDUCATION
      </h2>

      <div className="experience-item">
        <div className="experience-period">2023 — PRESENT</div>
        <h3 className="experience-title flex items-center gap-2" style={{ color: '#1E40AF' }}>
          <IoMdSchool style={{ color: '#1E40AF' }} />
          Diploma IV - Software Engineering Technology
        </h3>
        <p className="experience-company">Politeknik Negeri Batam</p>
        <p className="experience-description">
          Currently a fifth-semester student specializing in web and
          mobile development.
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const [balloons, setBalloons] = useState<React.ReactElement<BalloonProps>[]>(
    []
  );
  const [grassBlades, setGrassBlades] = useState<React.ReactElement[]>([]);
  const [activeSection, setActiveSection] = useState("home");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Create floating balloons animation
    const createBalloons = () => {
      const newBalloons: React.ReactElement<BalloonProps>[] = [];
      const colors = [
        "#3B82F6", // Blue 500
        "#2563EB", // Blue 600
        "#1D4ED8", // Blue 700
        "#1E40AF", // Blue 800
        "#1E3A8A", // Blue 900
        "#60A5FA", // Blue 400
      ];

      for (let i = 0; i < 15; i++) {
        const size = Math.random() * 30 + 20;
        const left = Math.random() * 100;
        const animationDuration = Math.random() * 15 + 10;
        const animationDelay = Math.random() * 5;
        const color = colors[Math.floor(Math.random() * colors.length)];

        newBalloons.push(
          <div
            key={i}
            className="balloon"
            style={{
              position: "absolute",
              width: `${size}px`,
              height: `${size * 1.2}px`,
              left: `${left}%`,
              bottom: "-50px",
              borderRadius: "50%",
              background: color,
              animation: `floatBalloon ${animationDuration}s ease-in-out ${animationDelay}s infinite`,
              boxShadow: "inset -5px -5px 10px rgba(0, 0, 0, 0.1)",
              zIndex: 1,
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "2px",
                height: "30px",
                background: "linear-gradient(to bottom, #ccc, #fff)",
              }}
            />
          </div>
        );
      }

      setBalloons(newBalloons);
    };

    // Create grass blades
    const createGrass = () => {
      const blades = [];
      for (let i = 0; i < 30; i++) {
        const height = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 3;

        blades.push(
          <div
            key={i}
            className="grass-blade"
            style={{
              height: `${height}px`,
              left: `${left}%`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      }
      setGrassBlades(blades);
    };

    createBalloons();
    createGrass();
  }, []);

  const unlockPhone = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      setShowContent(true);
    }, 800);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="split-container">
      <BubbleBackground />

      {/* Floating Balloons */}
      <div
        className="balloon-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 2,
          overflow: "hidden",
        }}
      >
        {balloons}
      </div>

      {/* Natural Bird Animation - Flying Around Clouds */}
      <div className="birds-natural-container">
        <div className="natural-bird natural-bird-1">🐦</div>
        <div className="natural-bird natural-bird-2">🐦</div>
        <div className="natural-bird natural-bird-3">🐦</div>
        <div className="natural-bird natural-bird-4">🐦</div>
      </div>

      {/* Sidebar dengan desain smartphone yang lebih lengkap */}
      <div className={`sidebar ${isUnlocked ? "unlocked" : "centered"}`}>
        {/* Lock Screen Overlay - Dipindahkan ke dalam sidebar */}
        {!isUnlocked && (
          <LockScreen onUnlock={unlockPhone} isUnlocked={isUnlocked} />
        )}
        
        {/* Status Bar */}
        <div className="phone-status-bar">
          <div className="status-time">14:25</div>
          <div className="status-icons">
            <span className="status-icon">📶</span>
            <span className="status-icon">📡</span>
            <span className="status-icon">🔋</span>
          </div>
        </div>
        
        {/* Dynamic Island floating di atas status bar */}
        <div className="dynamic-island">
          <div className="dynamic-dot"></div>
          <div className="dynamic-dot"></div>
        </div>

        <div className="phone-content">
          {/* Profile Section - Diperbarui dengan desain minimalis dan modern */}
          <div className="profile-section">
            {/* Avatar dengan efek teknologi */}
            <div className="tech-avatar-container">
              <div className="tech-avatar">
                <div className="profile-image-tech">Hi !</div>
                <div className="tech-glow"></div>
                <div className="tech-grid-overlay"></div>
              </div>
              <div className="binary-ring">
                {Array.from({ length: 24 }).map((_, i) => (
                  <span key={i} className="binary-digit">
                    {Math.round(Math.random())}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Informasi Profil dengan warna biru modern */}
            <div className="profile-info-tech">
              <h1
                className="profile-name-tech"
                style={{
                  color: '#1E40AF',
                  background: 'linear-gradient(135deg, #3B82F6, #1E3A8A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                SYIFA RAFIFAH
              </h1>              
              <div className="profile-title-tech">
                <span className="title-glow" style={{ color: '#3B82F6' }}>Front-End Developer</span>
              </div>
              <div className="profile-tags">
                <span className="tech-tag" style={{ background: '#DBEAFE', color: '#1E40AF' }}>
                  <SiReact className="tag-icon" style={{ color: '#1E40AF' }} />
                  React & Next.js
                </span>
                <span className="tech-tag" style={{ background: '#DBEAFE', color: '#1E40AF' }}>
                  <SiFigma className="tag-icon" style={{ color: '#1E40AF' }} />
                  UI/UX Enthusiast
                </span>
              </div>
            </div>
            
            {/* Tech Elements */}
            <div className="tech-elements">
              <div className="circuit-line" style={{ background: '#3B82F6' }}></div>
              <div className="data-points">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className="data-point" style={{ animationDelay: `${i * 0.2}s`, background: '#3B82F6' }}></div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-divider"></div>

          {/* Menu Applications - Semua aplikasi disatukan */}
          <div className="menu-apps">
            <div className="menu-title" style={{ color: '#1E40AF' }}>APPLICATIONS</div>
            <div className="apps-grid">
              {/* Aplikasi utama */}
              <div
                className="app-item"
                onClick={() => scrollToSection("projects")}
              >
                <div className="app-icon projects-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #c9b18aff, #e69123ff)' }}>
                  <FaProjectDiagram className="text-white text-2xl" />
                </div>
                <div className="app-name">Projects</div>
              </div>
              <div
                className="app-item"
                onClick={() => scrollToSection("experience")}
              >
                <div className="app-icon experience-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1392a3ff, #1E40AF)' }}>
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <div className="app-name">Experience</div>
              </div>
              <div
                className="app-item"
                onClick={() => scrollToSection("skills")}
              >
                <div className="app-icon skills-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #14a16dff, #1E40AF)' }}>
                  <FaBolt className="text-white text-2xl" />
                </div>
                <div className="app-name">Skills</div>
              </div>

              {/* Sosial media */}
              <a
                href="https://github.com/syifaarafifah"
                target="_blank"
                rel="noopener noreferrer"
                className="app-item"
              >
                <div className="app-icon github-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #010916ff, #525357ff)' }}>
                  <FaGithub className="text-white text-2xl" />
                </div>
                <div className="app-name">GitHub</div>
              </a>
              <a
                href="https://id.linkedin.com/in/syifa-rafifah-584061340"
                target="_blank"
                rel="noopener noreferrer"
                className="app-item"
              >
                <div className="app-icon linkedin-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #062458ff, #061e70ff)' }}>
                  <FaLinkedin className="text-white text-2xl" />
                </div>
                <div className="app-name">LinkedIn</div>
              </a>
              <a 
                href="mailto:syifarafifah527@gmail.com" 
                className="app-item"
              >
                <div className="app-icon email-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #870303ff, #c48080ff)' }}>
                  <SiGmail className="text-white text-2xl" />
                </div>
                <div className="app-name">Email</div>
              </a>
            </div>
          </div>

          <div className="section-divider"></div>

          <div className="section-group">
            <h3 className="section-title" style={{ color: '#1E40AF' }}>CONTACT</h3>
            <div className="contact-info">
              <p className="flex items-center gap-2">📱 +62 895-4031-53291</p>
              <p className="flex items-center gap-2">
                ✉️ syifarafifah527@gmail.com
              </p>
              <p className="flex items-center gap-2">📍 Batam, Indonesia</p>
            </div>
          </div>
        </div>

        {/* Navigation Bar - Dihapus Projects, Experience, dan Skills */}
        <div className="phone-nav">
          <div
            className={`nav-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => scrollToSection("home")}
          >
            <div className="nav-icon">
              <FaHome />
            </div>
            <span>Home</span>
          </div>
          <div
            className={`nav-item ${
              activeSection === "education" ? "active" : ""
            }`}
            onClick={() => scrollToSection("education")}
          >
            <div className="nav-icon">
              <FaGraduationCap />
            </div>
            <span>Education</span>
          </div>
        </div>

        {/* Grass Animation */}
        <div className="grass-container">{grassBlades}</div>

        {/* Animasi anak ayam berjalan */}
        <div className="chicken-animation">
          <div className="chicken">🐥</div>
          <div className="chicken chicken-2">🐥</div>
        </div>
      </div>

      {/* Main Content Area */}
      {showContent && (
        <div className="main-content">

          {/* Matahari yang lebih besar */}
          <div className="sun-large">☀️</div>

          <div className="content-wrapper">
            {/* Hero Section dengan animasi */}
            <div id="home" className="hero-section">
              <div className="floating-clouds">
                <div className="cloud cloud-1">☁️</div>
                <div className="cloud cloud-2">☁️</div>
                <div className="cloud cloud-3">☁️</div>
                <div className="cloud cloud-4">☁️</div>
              </div>
              <h1 className="hero-heading" style={{ color: '#1E40AF' }}>
                {"I'm a Software Engineering Student & Front-End Developer"}
              </h1>
            </div>

          {/* About Section dengan foto yang diperbesar */}
          <div id="about" className="content-section">
            <div className="section-divider"></div>
            <h2 className="section-header" style={{ color: '#1E40AF', fontFamily: 'Calibri, "Gill Sans", "Gill Sans MT", sans-serif' }}>ABOUT</h2>

            <div className="about-container">
              <div className="profile-image-container">
                <div className="profile-frame">
                  <img 
                    src="/images/profile/Profile.jpeg" 
                    alt="Syifa Rafifah"
                    className="profile-photo"
                    onError={(e) => {
                      // Fallback jika gambar tidak ditemukan
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Tampilkan fallback
                      const fallback = document.getElementById('profile-fallback');
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  {/* Fallback jika gambar tidak ada */}
                  <div id="profile-fallback" className="profile-fallback" style={{display: 'none'}}>
                    SR
                  </div>
                </div>
              </div>

              <div className="about-text" style={{ fontFamily: 'Calibri, "Gill Sans", "Gill Sans MT", sans-serif' }}>
                <p>
                  I am a fifth-semester Software Engineering Technology
                  student at Batam State Polytechnic with a background in web
                  and mobile development, database management, and creative
                  UI/UX design. I enjoy building applications using
                  technologies such as HTML, CSS, JavaScript, Laravel,
                  Next.js, React Native, AppSheet, and MySQL, while also
                  exploring design tools like Figma and Canva. Beyond
                  technical skills, I am experienced in data and document
                  management, proficient with Microsoft Office, and adaptable
                  in collaborative environments. I am passionate about
                  technology, problem-solving, and developing creative UI/UX
                  that brings better user experiences.
                </p>
              </div>
            </div>
          </div> 

            {/* Memanggil komponen Projects langsung */}
            <Projects />

            {/* Experience Section */}
            <div id="experience" className="content-section">
              <div className="section-divider"></div>
              <h2 className="section-header flex items-center justify-center gap-2" style={{ color: '#1E40AF' }}>
                <FaBriefcase style={{ color: '#1E40AF' }} />
                EXPERIENCE
              </h2>

              <div className="experiences-list">
                {experiences.map((exp, index) => (
                  <Experience key={`exp-${exp.id}-${index}`} experience={exp} />
                ))}
              </div>
            </div>

            {/* Memanggil komponen Skills langsung */}
            <Skills />

            {/* Memanggil komponen Education langsung */}
            <Education />
          </div>
        </div>
      )}

      <style jsx>{`
        /* Styles untuk aplikasi */
        .menu-apps,
        .social-apps,
        .bottom-apps {
          margin-bottom: 1.5rem;
        }

        .menu-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: #6b7280;
          margin-bottom: 0.75rem;
          text-align: center;
        }

        .apps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }

        .app-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.2s;
        }

        .app-item:hover {
          transform: translateY(-3px);
        }

        .app-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-name {
          font-size: 0.75rem;
          color: #4b5563;
          text-align: center;
        }


        /* Animasi */
        @keyframes floatBalloon {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-100vh) rotate(10deg);
          }
          100% {
            transform: translateY(-200vh) rotate(0deg);
            opacity: 0;
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Animasi burung mengitari awan */
        @keyframes flyAroundCloud1 {
          0% {
            transform: translate(0, 0) rotate(0deg) scaleX(1);
          }
          20% {
            transform: translate(-100px, -80px) rotate(5deg) scaleX(1);
          }
          40% {
            transform: translate(-200px, 0px) rotate(0deg) scaleX(1);
          }
          60% {
            transform: translate(-150px, 120px) rotate(-5deg) scaleX(-1);
          }
          80% {
            transform: translate(50px, 80px) rotate(0deg) scaleX(-1);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scaleX(1);
          }
        }

        @keyframes flyZigZag {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(-120px, -100px) rotate(10deg);
          }
          50% {
            transform: translate(-80px, 120px) rotate(-5deg) scaleX(-1);
          }
          75% {
            transform: translate(100px, -80px) rotate(8deg) scaleX(-1);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scaleX(1);
          }
        }

        @keyframes flyCircle {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(100px, -100px) rotate(90deg);
          }
          50% {
            transform: translate(0, -200px) rotate(180deg) scaleX(-1);
          }
          75% {
            transform: translate(-100px, -100px) rotate(270deg) scaleX(-1);
          }
          100% {
            transform: translate(0, 0) rotate(360deg) scaleX(1);
          }
        }

        @keyframes flyFigure8 {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(150px, -80px) rotate(45deg);
          }
          50% {
            transform: translate(0, 0) rotate(0deg) scaleX(-1);
          }
          75% {
            transform: translate(-150px, 80px) rotate(-45deg) scaleX(-1);
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scaleX(1);
          }
        }

        @keyframes flapWings {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-4px) rotate(3deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}