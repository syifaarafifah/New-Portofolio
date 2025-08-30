"use client";

import { useState, useEffect } from "react";
import { FaLock, FaUnlock } from "react-icons/fa";

interface LockScreenProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export default function LockScreen({ onUnlock, isUnlocked }: LockScreenProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [isUnlocking, setIsUnlocking] = useState(false);
  const [isLockHovered, setIsLockHovered] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = [
    "FRONTEND DEVELOPER",
    "WEB DEVELOPER", 
    "MOBILE DEVELOPER",
    "UI/UX DESIGNER"
  ];

  useEffect(() => {
    // Update time and date
    const updateDateTime = () => {
      const now = new Date();
      const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setCurrentTime(time);
      setCurrentDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Typing animation effect
    const currentRole = roles[currentRoleIndex];
    
    const handleTyping = () => {
      if (isDeleting) {
        // Deleting text
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        // Typing text
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }

      // Check if we've finished typing or deleting
      if (!isDeleting && displayText === currentRole) {
        // Pause at the end of typing
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && displayText === "") {
        // Move to next role after deleting
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const handleUnlock = () => {
    setIsUnlocking(true);
    setTimeout(() => {
      onUnlock();
    }, 800);
  };

  return (
    <div className={`lock-screen-overlay ${isUnlocking ? "unlocking" : ""}`}>
      {/* Elegant Background */}
      <div className="elegant-background">
        <div className="texture-overlay"></div>
        <div className="gradient-overlay"></div>
      </div>
      
      {/* Status Bar */}
      <div className="phone-status-bar">
        <div className="status-time">{currentTime}</div>
        <div className="status-icons">
          <span className="status-icon">📶</span>
          <span className="status-icon">📡</span>
          <span className="status-icon">🔋 80%</span>
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="dynamic-island">
        <div className="dynamic-dot"></div>
        <div className="dynamic-dot"></div>
      </div>

      {/* Lock Screen Content */}
      <div className="lock-content">
        <div className="welcome-container">
          <div className="welcome-text">WELCOME</div>
          <div className="role-text">
            {"I'M"} <span className="typing-text">{displayText}</span><span className="cursor">|</span>
          </div>
        </div>
        
        <div className="time-date-container">
          <div className="lock-time">{currentTime}</div>
          <div className="lock-date">{currentDate}</div>
        </div>
        
        {/* Spacer untuk push unlock button ke bawah */}
        <div className="spacer"></div>
        
        {/* Unlock Button */}
        <div className="unlock-button-container">
          <button 
            className="unlock-button" 
            onClick={handleUnlock}
            onMouseEnter={() => setIsLockHovered(true)}
            onMouseLeave={() => setIsLockHovered(false)}
          >
            <div className="lock-icon-wrapper">
              <div className={`lock-icon-circle ${isLockHovered ? 'unlocking' : ''}`}>
                {isLockHovered ? (
                  <FaUnlock className="icon unlock-icon" />
                ) : (
                  <FaLock className="icon lock-icon" />
                )}
              </div>
            </div>
            <span className="unlock-label">Tap to unlock</span>
          </button>
        </div>
      </div>

      {/* Unlock Animation */}
      {isUnlocking && (
        <div className="unlock-animation">
          <div className="animation-circle circle-1"></div>
          <div className="animation-circle circle-2"></div>
          <div className="animation-circle circle-3"></div>
        </div>
      )}

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        
        .lock-screen-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: #2c2c2c;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          border-radius: 40px;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
          transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2), 
                      0 0 0 4px #2c2c2c,
                      0 0 0 8px #e8e2d6,
                      0 0 0 12px #2c2c2c;
        }
        
        .lock-screen-overlay.unlocking {
          transform: translateY(-100%);
          opacity: 0;
        }
                
        .elegant-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #f8f5f0 0%, #e8e2d6 100%);
          z-index: 1;
          overflow: hidden;
        }
        
        .texture-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23f8f5f0'/%3E%3Cpath d='M0 0h50v50H0z' fill='%23e8e2d6' fill-opacity='0.2'/%3E%3C/svg%3E");
          background-size: 300px 300px;
          opacity: 0.4;
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.4) 0%, transparent 60%),
                    radial-gradient(circle at 70% 60%, rgba(235, 225, 215, 0.3) 0%, transparent 50%);
        }
        
        /* Status Bar */
        .phone-status-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 12px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 15;
        }
        
        .status-time {
          font-size: 14px;
          font-weight: 600;
          color: #2c2c2c;
        }
        
        .status-icons {
          display: flex;
          gap: 8px;
        }
        
        .status-icon {
          font-size: 12px;
          color: #2c2c2c;
        }
        
        .dynamic-island {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 35px;
          background: #2c2c2c;
          border-radius: 20px;
          z-index: 10;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
        }
        
        .dynamic-dot {
          width: 8px;
          height: 8px;
          background: #5a5a5a;
          border-radius: 50%;
        }
        
        .lock-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          padding: 100px 20px 80px;
          position: relative;
          z-index: 5;
        }
        
        .welcome-container {
          text-align: center;
          margin-top: 30px;
        }
        
        .welcome-text {
          font-size: 32px;
          font-weight: 400;
          letter-spacing: 4px;
          color: #2c2c2c;
          font-family: 'Playfair Display', serif;
          margin-bottom: 10px;
          text-transform: uppercase;
        }
        
        .role-text {
          font-size: 16px;
          font-weight: 400;
          opacity: 0.7;
          color: #5a5a5a;
          letter-spacing: 1px;
          min-height: 24px;
        }
        
        .typing-text {
          font-weight: 500;
          color: #3a3a3a;
        }
        
        .cursor {
          animation: blink 1s infinite;
          color: #3a3a3a;
          font-weight: 500;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .time-date-container {
          text-align: center;
          margin-top: 20px;
        }
        
        .lock-time {
          font-size: 72px;
          font-weight: 300;
          margin-bottom: 8px;
          letter-spacing: -1px;
          color: #2c2c2c;
          font-family: 'Playfair Display', serif;
        }
        
        .lock-date {
          font-size: 18px;
          font-weight: 400;
          opacity: 0.7;
          color: #5a5a5a;
          letter-spacing: 1px;
        }
        
        .spacer {
          flex: 1;
        }
        
        .unlock-button-container {
          margin-bottom: 40px;
          margin-top: 20px;
        }
        
        .unlock-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.9);
          border-radius: 50px;
          padding: 20px 40px;
          color: #2c2c2c;
          backdrop-filter: blur(20px);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          box-shadow: 
            0 4px 20px rgba(0, 0, 0, 0.05),
            0 1px 3px rgba(0, 0, 0, 0.05),
            inset 0 0 0 1px rgba(255, 255, 255, 0.8);
        }
        
        .unlock-button:hover {
          transform: translateY(-2px);
          box-shadow: 
            0 6px 25px rgba(0, 0, 0, 0.08),
            0 2px 5px rgba(0, 0, 0, 0.05),
            inset 0 0 0 1px rgba(255, 255, 255, 0.9);
        }
        
        .lock-icon-wrapper {
          margin-bottom: 12px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .lock-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: rgba(44, 44, 44, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.3s ease;
        }
        
        .unlock-button:hover .lock-icon-circle {
          background: rgba(44, 44, 44, 0.15);
          transform: scale(1.05);
        }
        
        .lock-icon-circle.unlocking {
          background: rgba(44, 44, 44, 0.15);
          transform: scale(1.05);
        }
        
        .icon {
          font-size: 24px;
          color: #2c2c2c;
          transition: all 0.3s ease;
        }
        
        .unlock-label {
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.5px;
        }
        
        /* Unlock Animation */
        .unlock-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 20;
          pointer-events: none;
        }
        
        .animation-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
          animation: expand 0.8s ease-out forwards;
        }
        
        .circle-1 {
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }
        
        .circle-2 {
          width: 120px;
          height: 120px;
          animation-delay: 0.1s;
        }
        
        .circle-3 {
          width: 160px;
          height: 160px;
          animation-delay: 0.2s;
        }
        
        @keyframes expand {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @media (max-width: 480px) {
          .lock-time {
            font-size: 60px;
          }
          
          .lock-date {
            font-size: 16px;
          }
          
          .welcome-text {
            font-size: 28px;
          }
          
          .role-text {
            font-size: 14px;
          }
          
          .unlock-button {
            padding: 18px 36px;
          }
          
          .lock-icon-circle {
            width: 50px;
            height: 50px;
          }
          
          .icon {
            font-size: 20px;
          }
          
          .phone-status-bar {
            padding: 10px 15px;
          }
        }
      `}</style>
    </div>
  );
}