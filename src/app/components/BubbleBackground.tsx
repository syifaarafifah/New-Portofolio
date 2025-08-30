'use client';

import React, { useEffect, useState } from 'react';

interface BubbleStyle {
  width: string;
  height: string;
  top: string;
  left: string;
  animationDelay: string;
  animationDuration: string;
  background: string;
}

const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState<BubbleStyle[]>([]);

  useEffect(() => {
    // Generate bubbles
    const newBubbles = Array.from({ length: 15 }, (_, i) => {
      const size = Math.random() * 60 + 20;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const animationDelay = Math.random() * 8;
      const duration = Math.random() * 10 + 10;
      
      const colors = [
        'rgba(163, 224, 221, 0.15)',  // Warna biru muda yang sesuai dengan tema
        'rgba(79, 70, 229, 0.15)',    // Warna ungu yang sesuai dengan tema
        'rgba(255, 255, 255, 0.1)'    // Warna putih transparan
      ];
      const color = colors[Math.floor(Math.random() * colors.length)];

      return {
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${animationDelay}s`,
        animationDuration: `${duration}s`,
        background: color,
      };
    });

    setBubbles(newBubbles);
  }, []);

  return (
    <div className="bubble-container">
      {bubbles.map((bubble, i) => (
        <div
          key={i}
          className="bubble"
          style={bubble}
        />
      ))}
    </div>
  );
};

export default BubbleBackground;