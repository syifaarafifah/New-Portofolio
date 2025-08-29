"use client";

import { useEffect, useState, useRef } from "react";
import Experience from "./components/Experience";
import BubbleBackground from "./components/BubbleBackground";
import { experiences } from "./data/experience";
import { projects } from "./data/projects";
import LockScreen from "./components/LockScreen";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { FaMap } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import {
  FaGithub,
  FaLinkedin,
  FaHome,
  FaBriefcase,
  FaBolt,
  FaProjectDiagram,
  FaGraduationCap,
} from "react-icons/fa";
import {
  SiGmail,
  SiReact,
  SiFigma,
} from "react-icons/si";
import { IoMdSchool } from "react-icons/io";

// Komponen Education
const Education = () => {
  return (
    <div className="content-section">
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
  const [grassBlades, setGrassBlades] = useState<React.ReactElement[]>([]);
  const [activeSection, setActiveSection] = useState("home");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [animateContent, setAnimateContent] = useState(false);
  const mainContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    createGrass();
  }, []);

  const unlockPhone = () => {
    setIsUnlocked(true);
    setTimeout(() => {
      setShowContent(true);
      setAnimateContent(true);
    }, 800);
  };

  const navigateToSection = (sectionId: string) => {
    setAnimateContent(false);
    setTimeout(() => {
      setActiveSection(sectionId);
      setTimeout(() => {
        setAnimateContent(true);
        // Scroll to top when changing section
        if (mainContentRef.current) {
          mainContentRef.current.scrollTop = 0;
        }
      }, 50);
    }, 300);
  };

  // Fungsi untuk merender konten berdasarkan section aktif
  const renderContent = () => {
    switch(activeSection) {
      case "home":
        return (
          <div className="content-wrapper">
            <div className="hero-section">
              <h1 className="hero-heading" style={{ color: '#1E40AF' }}>
                {"I'm a Software Engineering Student & Front-End Developer"}
              </h1>
            </div>
            
            {/* About content now appears in home section */}
            <div className="content-section">
              <div className="section-divider"></div>
              <h2 className="section-header" style={{ color: '#1E40AF' }}>ABOUT</h2>

              <div className="about-container">
                <div className="profile-image-container">
                  <div className="profile-frame">
                    <img 
                      src="/images/profile/Profile.jpeg" 
                      alt="Syifa Rafifah"
                      className="profile-photo"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = document.getElementById('profile-fallback');
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                    <div id="profile-fallback" className="profile-fallback" style={{display: 'none'}}>
                      SR
                    </div>
                  </div>
                </div>
                <div className="about-text">
                <p>
                  The intersection of technology and creativity has always inspired me. Since
                  my early days exploring Microsoft Office and simple design tools, {"I've"} been
                  fascinated by how digital products can shape the way people interact with
                  information.
                </p>

                <p>
                  Fast forward to today, as a Software Engineering Technology student at Batam
                  State Polytechnic, {"I've"} immersed myself in web and mobile development,
                  exploring technologies such as HTML, CSS, JavaScript, Laravel, Next.js,
                  React Native, MySQL, and AppSheet. Alongside these, tools like Figma and
                  Canva have allowed me to bring ideas to life visually and strengthen my
                  passion for crafting user-centered designs.
                </p>

                <p>
                  What excites me most about frontend development and UI/UX design is the
                  opportunity to blend functionality with experience — to create applications
                  that are not only efficient but also engaging and intuitive. For me, it goes
                  beyond writing code or arranging layouts; {"it's"} about designing digital
                  experiences that solve problems, improve usability, and make technology more
                  approachable for everyone.
                </p>
                </div>
              </div>
            </div>
          </div>
        );
      case "projects":
        return <Projects projects={projects} />;
      case "experience":
        return (
          <div className="content-wrapper">
            <div className="content-section">
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
          </div>
        );
      case "skills":
        return <Skills />;
      case "education":
        return (
          <div className="content-wrapper">
            <Education />
          </div>
        );
      default:
        return <div className="content-wrapper">Content not found</div>;
    }
  };

  // Tema untuk setiap section
  const getThemeClass = () => {
    switch(activeSection) {
      case "home": return "theme-home";
      case "projects": return "theme-projects";
      case "experience": return "theme-experience";
      case "skills": return "theme-skills";
      case "education": return "theme-education";
      default: return "theme-default";
    }
  };

  return (
    <div className="split-container">
      <BubbleBackground />

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
                className={`app-item ${activeSection === "projects" ? "active" : ""}`}
                onClick={() => navigateToSection("projects")}
              >
                <div className="app-icon projects-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ffcc7aff, #f4a33aff)' }}>
                  <GrProjects className="text-white text-2xl" />
                </div>
                <div className="app-name">Projects</div>
              </div>
              <div
                className={`app-item ${activeSection === "experience" ? "active" : ""}`}
                onClick={() => navigateToSection("experience")}
              >
                <div className="app-icon experience-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #b6ea56ff, #4bc52cff)' }}>
                  <FaBriefcase className="text-white text-2xl" />
                </div>
                <div className="app-name">Experience</div>
              </div>
              <div
                className={`app-item ${activeSection === "skills" ? "active" : ""}`}
                onClick={() => navigateToSection("skills")}
              >
                <div className="app-icon skills-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #32aaeaff, #2581d7ff)' }}>
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
              {/* Menu Resume Baru */}
              <a
                href="/CV - Syifa Rafifah (6).pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="app-item"
              >
                <div className="app-icon resume-icon flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #ca901dff, #be9057ff)' }}>
                  <FaMap className="text-white text-2xl" />
                </div>
                <div className="app-name">Resume</div>
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

        {/* Navigation Bar */}
        <div className="phone-nav">
          <div
            className={`nav-item ${activeSection === "home" ? "active" : ""}`}
            onClick={() => navigateToSection("home")}
          >
            <div className="nav-icon">
              <FaHome />
            </div>
            <span>Home</span>
          </div>
          <div
            className={`nav-item ${activeSection === "education" ? "active" : ""}`}
            onClick={() => navigateToSection("education")}
          >
            <div className="nav-icon">
              <FaGraduationCap />
            </div>
            <span>Education</span>
          </div>
        </div>

        {/* Grass Animation */}
        <div className="grass-container">{grassBlades}</div>
      </div>

      {/* Main Content Area */}
      {showContent && (
        <div 
          ref={mainContentRef}
          className={`main-content ${getThemeClass()} ${animateContent ? "animate-in" : "animate-out"}`}
        >
          {renderContent()}
        </div>
      )}

      <style jsx>{`
        /* Import font */
        @import url('https://fonts.googleapis.com/css2?family=Poetsen+One&family=Outfit:wght@300;400;500;600;700&display=swap');
        
        /* Styles untuk aplikasi */
        .split-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
          font-family: 'Outfit', sans-serif;
        }
        
        .main-content {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
          position: relative;
          transition: all 0.5s ease;
        }
        
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

        .app-item.active .app-icon {
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
        }

        .app-icon {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .app-name {
          font-size: 0.75rem;
          color: #4b5563;
          text-align: center;
        }

        /* Animasi untuk konten utama */
        .main-content {
          transition: transform 0.3s ease, opacity 0.3s ease;
          opacity: 1;
          transform: translateX(0);
          position: relative;
          overflow-y: auto;
        }

        .main-content.animate-in {
          animation: slideInFromRight 0.5s ease forwards;
        }

        .main-content.animate-out {
          animation: slideOutToLeft 0.3s ease forwards;
        }

        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideOutToLeft {
          0% {
            opacity: 1;
            transform: translateX(0);
          }
          100% {
            opacity: 0;
            transform: translateX(-50px);
          }
        }

        /* Tema untuk setiap section */
        .theme-home {
          background: linear-gradient(135deg, #c3d9ef 0%, #bed8f2ff 100%);
          color: #1e293b;
          position: relative;
          overflow: 
        }
        
        .theme-home::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("https://i.pinimg.com/1200x/b8/f9/65/b8f965c0c59031b6936119730cf9c04f.jpg");
          background-size: cover;
          background-position: center;
          animation: waveAnimation 20s linear infinite;
        }
        .theme-home .content-section {
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease forwards;
        }

        .theme-projects {
          background: linear-gradient(135deg, #afc8deff 0%, #0a2d65ff 100%);
          color: #0e3b77ff;
        }
        .theme-projects::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f59e0b' fill-opacity='0.1' d='M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
          animation: waveAnimation 20s linear infinite;
        }
        
        .theme-projects .content-section {
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease forwards;
        }

        .theme-experience {
          background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
          color: #1e293b;
          position: relative;
          overflow:;
        }
        
        .theme-experience::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f59e0b' fill-opacity='0.1' d='M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
          animation: waveAnimation 20s linear infinite;
        }
        
        .theme-experience .content-section {
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease forwards;
        }

        .theme-skills {
          background: linear-gradient(135deg, #09476eff 0%, #003b65ff 100%);
          color: #e2e8f0;
          perspective: 1000px;
        }
        
        .theme-skills::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23f59e0b' fill-opacity='0.1' d='M0,128L48,117.3C96,107,192,85,288,112C384,139,480,213,576,218.7C672,224,768,160,864,138.7C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E");
          background-size: cover;
          background-position: center;
          animation: waveAnimation 20s linear infinite;
        }
        
        .theme-skills .content-section {
          position: relative;
          z-index: 1;
          animation: fadeInUp 0.8s ease forwards;
        }

        .theme-education {
          background: linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%);
          color: #1e293b;
          position: relative;
        }
        
        .theme-education::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url("https://i.pinimg.com/originals/e3/9e/94/e39e946cbfa7837b8098d41dad288e54.gif");
          background-size: cover;
          background-position: center;
          opacity: 0.1;
        }
        
        .theme-education::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.2) 0%, transparent 30%),
            radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.2) 0%, transparent 30%);
          animation: pulse 10s ease-in-out infinite;
        }
                  }        
        .content-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .about-container {
          display: flex;
          flex-direction: column;
          gap: 30px;
          margin-top: 20px;
        }
        
        .profile-image-container {
          display: flex;
          justify-content: center;
        }
        
        .profile-frame {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #e5e7eb;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        
        .profile-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .about-text p {
          margin-bottom: 20px;
          line-height: 1.6;
          color: inherit;
          opacity: 0.9;
        }
        
        .hero-heading {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 30px;
          text-align: center;
          line-height: 1.2;
          font-family: 'Poetsen One', cursive;
        }
        
        .section-header {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 30px;
          text-align: center;
          font-family: 'Poetsen One', cursive;
        }
        
        /* Animasi untuk efek scroll */
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes waveAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes threeDFlipIn {
          0% {
            opacity: 0;
            transform: rotateX(90deg) translateZ(100px);
          }
          100% {
            opacity: 1;
            transform: rotateX(0) translateZ(0);
          }
        }
        
        /* Efek untuk elemen yang muncul saat scroll */
        .content-section,
        .hero-section,
        .experience-item {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }
        
        .content-section.visible,
        .hero-section.visible,
        .experience-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Menghapus animasi yang tidak perlu */
        .balloon-container,
        .birds-natural-container,
        .chicken-animation,
        .floating-clouds,
        .sun-large,
        .floating-hearts,
        .floating-tools,
        .floating-briefcases,
        .floating-stars,
        .floating-books {
          display: none;
        }
      `}</style>
    </div>
  );
}