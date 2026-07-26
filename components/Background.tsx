import React from 'react';
import { useEffect, useState } from 'react';

interface BackgroundProps {
  intensity: number;
  isDarkMode: boolean;
}

const Background: React.FC<BackgroundProps> = ({ intensity, isDarkMode }) => {
  const intensityValue = intensity;

  const gridColor = isDarkMode ? '#fff' : '#000';
  const [gradient1, setGradient1] = useState('#6366f1');
  const [gradient2, setGradient2] = useState('#a855f7');

  useEffect(() => {
    const colors = isDarkMode
      ? ['#6366f1', '#a855f7', '#3b82f6', '#8b5cf6']
      : ['#6366f1', '#a855f7', '#3b82f6', '#8b5cf6'];

    setGradient1(colors[0]);
    setGradient2(colors[1]);
  }, [isDarkMode]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-dark transition-colors duration-500">
      {/* Multiple Gradient Layers for Depth */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-gradient1 via-gradient2 to-transparent rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"
        style={{
          opacity: intensityValue * 0.3,
          filter: 'blur(40px)'
        }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-gradient2 via-gradient1 to-transparent rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"
        style={{
          opacity: intensityValue * 0.25,
          filter: 'blur(60px)'
        }}
      ></div>
      <div
        className="absolute -bottom-10 left-1/3 w-[400px] h-[400px] bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-full mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"
        style={{
          opacity: intensityValue * 0.2,
          filter: 'blur(50px)',
          animation: 'float-slow 12s ease-in-out infinite'
        }}
      ></div>

      {/* Enhanced Grid Pattern with Motion */}
      <div
        className="absolute inset-0 opacity-[0.03] transition-colors duration-500"
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px), 
          linear-gradient(45deg, transparent 1px, ${gradient1} 1px, transparent 1px), 
          linear-gradient(135deg, transparent 1px, ${gradient2} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          animation: 'gradient-shift 50s ease-in-out infinite'
        }}
      ></div>

      {/* Animated Gradient Orbs with Enhanced Motion */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full animate-blob-drift animation-delay-0 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
        style={{
          opacity: intensityValue * 0.35,
          animationDelay: '0s'
        }}
      ></div>
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full animate-blob-drift animation-delay-1500 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
        style={{
          opacity: intensityValue * 0.3,
          animationDelay: '1.5s'
        }}
      ></div>
      <div
        className="absolute -bottom-10 left-1/3 w-96 h-96 bg-blue-500/15 rounded-full animate-blob-drift animation-delay-3000 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-500"
        style={{
          opacity: intensityValue * 0.25,
          animationDelay: '3s'
        }}
      ></div>

      {/* Subtle Motion Background */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-dark opacity-5 animate-gradient-shift" />
    </div>
  );
};

export default Background;