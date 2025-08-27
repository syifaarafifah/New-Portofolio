"use client";

import { useState, useEffect, useRef } from "react";
import { FaBatteryFull, FaWifi, FaLock, FaUnlock, FaCaretLeft } from "react-icons/fa";
import { IoCellular } from "react-icons/io5";

interface LockScreenProps {
  onUnlock: () => void;
  isUnlocked: boolean;
}

export default function LockScreen({ onUnlock, isUnlocked }: LockScreenProps) {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [pin, setPin] = useState("");
  const [showPinPad, setShowPinPad] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    // Update time and date
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
      setCurrentDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleNumberClick = (number: string) => {
    if (pin.length < 4) {
      const newPin = pin + number;
      setPin(newPin);
      
      if (newPin.length === 4) {
        if (newPin === "1234") {
          // PIN benar
          setTimeout(() => {
            onUnlock();
          }, 500);
        } else {
          // PIN salah
          setError("PIN salah");
          setAttempts(attempts + 1);
          setTimeout(() => {
            setPin("");
            setError("");
          }, 1000);
        }
      }
    }
  };

  const handleDelete = () => {
    if (pin.length > 0) {
      setPin(pin.slice(0, -1));
    }
  };

  const handleOpenPinPad = () => {
    setShowPinPad(true);
  };

  const handleClosePinPad = () => {
    setShowPinPad(false);
    setPin("");
    setError("");
  };

  // Tampilkan pesan jika terlalu banyak percobaan
  if (attempts >= 3) {
    return (
      <div className="lock-screen-overlay">
        {/* Dynamic Island */}
        <div className="dynamic-island">
          <div className="dynamic-dot"></div>
          <div className="dynamic-dot"></div>
        </div>

        <div className="too-many-attempts">
          <FaLock className="lock-icon-large" />
          <h2>Terlalu Banyak Percobaan</h2>
          <p>Tunggu 30 detik sebelum mencoba lagi</p>
        </div>

        <style jsx>{`
          .lock-screen-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
            color: white;
            display: flex;
            flex-direction: column;
            z-index: 1000;
            border-radius: 20px;
            overflow: hidden;
          }
                  
          
          .too-many-attempts {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
            text-align: center;
            padding: 20px;
          }
          
          .lock-icon-large {
            font-size: 50px;
            margin-bottom: 20px;
            color: #ff3b30;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="lock-screen-overlay">
      {/* Dynamic Island */}
      <div className="dynamic-island">
        <div className="dynamic-dot"></div>
        <div className="dynamic-dot"></div>
      </div>

      {/* Full Screen Octopus Background */}
      <div className="octopus-background">
        <img 
          src="https://cdn.dribbble.com/userupload/23395409/file/original-470638bc3554712d2761d256f2f3f414.gif" 
          alt="Octopus animation background"
        />
        <div className="background-overlay"></div>
      </div>

      {/* Lock Screen Content */}
      {!showPinPad ? (
        <div className="lock-content">
          <div className="lock-time">{currentTime}</div>
          <div className="lock-date">{currentDate}</div>
          
          {/* Unlock Button */}
          <div className="unlock-button-container">
            <button className="unlock-button" onClick={handleOpenPinPad}>
              <FaLock className="lock-icon" />
              <span>Tekan untuk membuka</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="pin-pad-container">
          <div className="pin-pad-header">
            <button className="back-button" onClick={handleClosePinPad}>
              <FaCaretLeft />
            </button>
            <h3>WELCOME</h3>
            <div className="placeholder"></div>
          </div>
          
          {/* PIN Dots */}
          <div className="pin-dots">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`pin-dot ${pin.length > index ? "filled" : ""}`}
              ></div>
            ))}
          </div>
          
          {/* Error Message */}
          {error && <div className="error-message">{error}</div>}
          
          {/* Number Pad */}
          <div className="number-pad">
            <div className="number-row">
              <button className="number-button" onClick={() => handleNumberClick("1")}>1</button>
              <button className="number-button" onClick={() => handleNumberClick("2")}>2</button>
              <button className="number-button" onClick={() => handleNumberClick("3")}>3</button>
            </div>
            <div className="number-row">
              <button className="number-button" onClick={() => handleNumberClick("4")}>4</button>
              <button className="number-button" onClick={() => handleNumberClick("5")}>5</button>
              <button className="number-button" onClick={() => handleNumberClick("6")}>6</button>
            </div>
            <div className="number-row">
              <button className="number-button" onClick={() => handleNumberClick("7")}>7</button>
              <button className="number-button" onClick={() => handleNumberClick("8")}>8</button>
              <button className="number-button" onClick={() => handleNumberClick("9")}>9</button>
            </div>
            <div className="number-row">
              <button className="empty-button"></button>
              <button className="number-button" onClick={() => handleNumberClick("0")}>0</button>
              <button className="delete-button" onClick={handleDelete}>
                ⌫
              </button>
            </div>
          </div>
          
          <div className="pin-hint">PIN: 1234</div>
        </div>
      )}

      <style jsx>{`
        .lock-screen-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          color: white;
          display: flex;
          flex-direction: column;
          z-index: 1000;
          border-radius: 20px;
          overflow: hidden;
        }
                
        
        .octopus-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }
        
        .octopus-background img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .background-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
          z-index: 2;
        }
        
        .lock-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
          padding: 60px 20px 30px;
          position: relative;
          z-index: 5;
        }
        
        .lock-time {
          font-size: 60px;
          font-weight: 700;
          margin-bottom: 10px;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7);
          letter-spacing: 1px;
        }
        
        .lock-date {
          font-size: 18px;
          font-weight: 500;
          opacity: 0.9;
          margin-bottom: 40px;
          text-shadow: 0 1px 5px rgba(0, 0, 0, 0.7);
        }
        
        .unlock-button-container {
          margin-top: auto;
          margin-bottom: 40px;
        }
        
        .unlock-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(255, 255, 255, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: 50px;
          padding: 15px 30px;
          color: white;
          backdrop-filter: blur(10px);
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .unlock-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
        }
        
        .lock-icon {
          font-size: 20px;
          margin-bottom: 8px;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        }
        
        .pin-pad-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          padding: 80px 20px 40px;
          position: relative;
          z-index: 5;
        }
        
        .pin-pad-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          margin-bottom: 40px;
        }
        
        .back-button {
          background: none;
          border: none;
          color: white;
          font-size: 24px;
          cursor: pointer;
          padding: 10px;
          opacity: 0.8;
          transition: opacity 0.2s ease;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .back-button:hover {
          opacity: 1;
        }
        
        .pin-pad-header h3 {
          margin: 0;
          font-weight: 600;
          font-size: 18px;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        
        .placeholder {
          width: 34px;
        }
        
        .pin-dots {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        
        .pin-dot {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.7);
          transition: all 0.2s ease;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .pin-dot.filled {
          background-color: white;
          border-color: white;
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .error-message {
          color: #ff6b6b;
          margin-bottom: 20px;
          font-size: 14px;
          height: 20px;
          font-weight: 500;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .number-pad {
          width: 100%;
          max-width: 300px;
        }
        
        .number-row {
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        
        .number-button {
          width: 70px;
          height: 70px;
          border-radius: 35px;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          font-size: 24px;
          font-weight: 500;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          margin: 3px;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .number-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        
        .empty-button {
          width: 70px;
          height: 70px;
          visibility: hidden;
        }
        
        .delete-button {
          width: 70px;
          height: 70px;
          border-radius: 35px;
          border: none;
          background: rgba(255, 255, 255, 0.15);
          color: white;
          font-size: 24px;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .delete-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }
        
        .pin-hint {
          margin-top: 20px;
          font-size: 12px;
          opacity: 0.8;
          background: rgba(0, 0, 0, 0.4);
          padding: 6px 12px;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        @keyframes float {
          0% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
          100% { transform: translateY(0) rotate(0deg); }
        }
        
        @media (max-width: 480px) {
          .lock-time {
            font-size: 50px;
          }
          
          .lock-date {
            font-size: 16px;
          }
          
          .number-button, .empty-button, .delete-button {
            width: 60px;
            height: 60px;
            border-radius: 30px;
            font-size: 22px;
          }
          
          .pin-pad-header h3 {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
}