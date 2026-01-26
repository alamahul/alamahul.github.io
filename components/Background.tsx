import React from 'react';

interface BackgroundProps {
  intensity: number;
  isDarkMode: boolean;
}

const Background: React.FC<BackgroundProps> = ({ intensity, isDarkMode }) => {
  const gridColor = isDarkMode ? '#fff' : '#000';

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-dark transition-colors duration-500">
      {/* Animated Gradient Orbs */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full animate-blob-drift mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"
        style={{ opacity: intensity }}
      ></div>
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full animate-blob-drift animation-delay-2000 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"
        style={{ opacity: intensity }}
      ></div>
      <div 
        className="absolute -bottom-8 left-1/3 w-96 h-96 bg-blue-500/20 rounded-full animate-blob-drift animation-delay-4000 mix-blend-multiply dark:mix-blend-screen transition-opacity duration-300"
        style={{ opacity: intensity }}
      ></div>
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] transition-colors duration-500" 
        style={{
          backgroundImage: `linear-gradient(${gridColor} 1px, transparent 1px), linear-gradient(90deg, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
    </div>
  );
};

export default Background;