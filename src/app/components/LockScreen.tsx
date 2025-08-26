// components/LockScreen.tsx
"use client";

import { useState, useEffect } from "react";
import { FaLock, FaLockOpen } from "react-icons/fa";

interface LockScreenProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

const LockScreen: React.FC<LockScreenProps> = ({ onUnlock, isUnlocked }) => {
  const [currentTime, setCurrentTime] = useState("14:25");
  const [currentDate, setCurrentDate] = useState("Senin, 1 Januari");
  const [isUnlocking, setIsUnlocking] = useState(false);

  useEffect(() => {
    // Update waktu dan tanggal aktual
    const updateDateTime = () => {
      const now = new Date();
      const timeFormatter = new Intl.DateTimeFormat("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      const dateFormatter = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      
      setCurrentTime(timeFormatter.format(now));
      setCurrentDate(dateFormatter.format(now));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000); // Update setiap menit

    return () => clearInterval(interval);
  }, []);

  const handleUnlock = () => {
    if (isUnlocking) return;
    
    setIsUnlocking(true);
    setTimeout(() => {
      onUnlock();
      setIsUnlocking(false);
    }, 800); // Sesuaikan dengan durasi animasi
  };

  if (isUnlocked) return null;

  return (
    <div className="lock-screen-overlay">
      <div className={`lock-screen-content ${isUnlocking ? "unlocking" : ""}`}>
        <div className="current-time">{currentTime}</div>
        <div className="current-date">{currentDate}</div>
        <div 
          className={`unlock-button ${isUnlocking ? "unlocking" : ""}`} 
          onClick={handleUnlock}
        >
          {isUnlocking ? (
            <FaLockOpen className="lock-icon unlocking" />
          ) : (
            <FaLock className="lock-icon" />
          )}
          <span>{isUnlocking ? "Membuka..." : "Ketuk untuk membuka"}</span>
        </div>
      </div>

      <style jsx>{`
        .lock-screen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 9999;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        .lock-screen-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: transform 0.8s ease, opacity 0.8s ease;
        }
        
        .lock-screen-content.unlocking {
          transform: translateY(-100vh);
          opacity: 0;
        }
        
        .current-time {
          font-size: 5rem;
          font-weight: 200;
          margin-bottom: 0.5rem;
        }
        
        .current-date {
          font-size: 1.2rem;
          font-weight: 400;
          margin-bottom: 3rem;
          opacity: 0.9;
        }
        
        .unlock-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          padding: 1rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .unlock-button:hover {
          transform: scale(1.05);
        }
        
        .unlock-button.unlocking {
          transform: scale(1.2);
        }
        
        .lock-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          transition: all 0.5s ease;
        }
        
        .lock-icon.unlocking {
          transform: rotate(15deg) scale(1.2);
          color: #BFDBFE;
        }
        
        .unlock-button span {
          font-size: 0.9rem;
          opacity: 0.9;
        }
        
        @media (max-width: 768px) {
          .current-time {
            font-size: 4rem;
          }
          
          .current-date {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default LockScreen;