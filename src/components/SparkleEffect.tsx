import React from 'react';

interface SparkleEffectProps {
  x?: number;
  y?: number;
  size?: number;
}

export const SparkleEffect: React.FC<SparkleEffectProps> = ({ size = 60 }) => {
  return (
    <div 
      className="absolute inset-0 pointer-events-none flex items-center justify-center z-30"
      style={{ width: size, height: size }}
    >
      {/* Expanding Glow Ring */}
      <div className="absolute w-full h-full rounded-full border-3 border-amber-300 animate-ring-glow pointer-events-none" />

      {/* Sparkling Starburst Center */}
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible animate-sparkle-burst">
        {/* Main 4-point Diamond Star */}
        <path
          d="M 50 10 Q 50 50 10 50 Q 50 50 50 90 Q 50 50 90 50 Q 50 50 50 10 Z"
          fill="url(#sparkle-gold-grad)"
          filter="drop-shadow(0 0 4px #FBBF24)"
        />
        {/* Secondary Diagonal Mini Sparkles */}
        <circle cx="22" cy="22" r="4" fill="#FEF08A" />
        <circle cx="78" cy="22" r="5" fill="#FDE047" />
        <circle cx="22" cy="78" r="4.5" fill="#FDE047" />
        <circle cx="78" cy="78" r="3.5" fill="#FEF08A" />

        <defs>
          <radialGradient id="sparkle-gold-grad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FEF08A" />
            <stop offset="80%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#D97706" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};
