import React from 'react';
import { BeadColor, BeadShape } from '../types/game';

interface BeadProps {
  shape: BeadShape;
  color: BeadColor;
  size?: number; // size in px, default 64
  isPlaced?: boolean;
  isSelected?: boolean;
  isHinted?: boolean;
  isShaking?: boolean;
  onClick?: () => void;
  className?: string;
  showHole?: boolean;
  showSparkle?: boolean;
  disabled?: boolean;
}

// Color theme definitions with rich gradient stops for 3D glossy appearance
const COLOR_CONFIGS: Record<BeadColor, {
  nameTr: string;
  base: string;
  light: string;
  highlight: string;
  dark: string;
  border: string;
  glow: string;
}> = {
  red: {
    nameTr: 'Kırmızı',
    base: '#F43F5E',
    light: '#FB7185',
    highlight: '#FFE4E6',
    dark: '#BE123C',
    border: '#9F1239',
    glow: 'rgba(244, 63, 94, 0.6)'
  },
  blue: {
    nameTr: 'Mavi',
    base: '#3B82F6',
    light: '#60A5FA',
    highlight: '#DBEAFE',
    dark: '#1D4ED8',
    border: '#1E40AF',
    glow: 'rgba(59, 130, 246, 0.6)'
  },
  yellow: {
    nameTr: 'Sarı',
    base: '#FBBF24',
    light: '#FDE68A',
    highlight: '#FEF9C3',
    dark: '#D97706',
    border: '#B45309',
    glow: 'rgba(251, 191, 36, 0.6)'
  },
  green: {
    nameTr: 'Yeşil',
    base: '#10B981',
    light: '#34D399',
    highlight: '#D1FAE5',
    dark: '#047857',
    border: '#065F46',
    glow: 'rgba(16, 185, 129, 0.6)'
  },
  orange: {
    nameTr: 'Turuncu',
    base: '#FB923C',
    light: '#FDBA74',
    highlight: '#FFEDD5',
    dark: '#C2410C',
    border: '#9A3412',
    glow: 'rgba(251, 146, 60, 0.6)'
  },
  purple: {
    nameTr: 'Mor',
    base: '#8B5CF6',
    light: '#A78BFA',
    highlight: '#EDE9FE',
    dark: '#6D28D9',
    border: '#5B21B6',
    glow: 'rgba(139, 92, 246, 0.6)'
  },
  pink: {
    nameTr: 'Pembe',
    base: '#F472B6',
    light: '#FBCFE8',
    highlight: '#FDF2F8',
    dark: '#DB2777',
    border: '#BE185D',
    glow: 'rgba(244, 114, 182, 0.6)'
  },
  cyan: {
    nameTr: 'Turkuaz',
    base: '#06B6D4',
    light: '#67E8F9',
    highlight: '#CFFAFE',
    dark: '#0E7490',
    border: '#155E75',
    glow: 'rgba(6, 182, 212, 0.6)'
  }
};

export const Bead: React.FC<BeadProps> = ({
  shape,
  color,
  size = 64,
  isPlaced = false,
  isSelected = false,
  isHinted = false,
  isShaking = false,
  onClick,
  className = '',
  showSparkle = false,
  disabled = false
}) => {
  const c = COLOR_CONFIGS[color] || COLOR_CONFIGS.red;
  const gradientId = `bg-grad-${shape}-${color}`;
  const highlightId = `bg-hl-${shape}-${color}`;

  const renderShape = () => {
    switch (shape) {
      case 'round':
        return (
          <g>
            {/* Outer Drop Shadow */}
            <ellipse cx="50" cy="56" rx="42" ry="40" fill="rgba(70,30,0,0.18)" />
            {/* Main Sphere */}
            <circle
              cx="50"
              cy="50"
              r="42"
              fill={`url(#${gradientId})`}
              stroke={c.border}
              strokeWidth="2.5"
            />
            {/* Bottom ambient occlusion / bounce light */}
            <path
              d="M 18 64 C 28 84, 72 84, 82 64 C 70 78, 30 78, 18 64 Z"
              fill="#FFFFFF"
              opacity="0.22"
            />
            {/* Glossy Top Highlight */}
            <ellipse
              cx="36"
              cy="32"
              rx="18"
              ry="10"
              transform="rotate(-30 36 32)"
              fill={`url(#${highlightId})`}
              opacity="0.9"
            />
            <circle cx="30" cy="26" r="3.5" fill="#FFFFFF" opacity="0.95" />
          </g>
        );

      case 'cube':
        return (
          <g>
            {/* Shadow */}
            <rect x="12" y="18" width="76" height="74" rx="18" fill="rgba(70,30,0,0.18)" />
            {/* Main Rounded Cube Body */}
            <rect
              x="12"
              y="12"
              width="76"
              height="74"
              rx="18"
              fill={`url(#${gradientId})`}
              stroke={c.border}
              strokeWidth="2.5"
            />
            {/* Top Glossy Bevel */}
            <path
              d="M 18 28 C 18 18, 26 14, 38 14 L 62 14 C 74 14, 82 18, 82 28 C 82 19, 74 17, 62 17 L 38 17 C 26 17, 18 19, 18 28 Z"
              fill="#FFFFFF"
              opacity="0.55"
            />
            {/* Corner Highlight */}
            <rect x="20" y="20" width="22" height="22" rx="7" fill="#FFFFFF" opacity="0.3" />
            <circle cx="27" cy="27" r="3.5" fill="#FFFFFF" opacity="0.9" />
          </g>
        );

      case 'oval':
        return (
          <g>
            {/* Shadow */}
            <ellipse cx="50" cy="56" rx="44" ry="32" fill="rgba(70,30,0,0.18)" />
            {/* Oval body */}
            <ellipse
              cx="50"
              cy="50"
              rx="44"
              ry="32"
              fill={`url(#${gradientId})`}
              stroke={c.border}
              strokeWidth="2.5"
            />
            {/* Top Gloss */}
            <ellipse
              cx="40"
              cy="34"
              rx="22"
              ry="9"
              transform="rotate(-15 40 34)"
              fill={`url(#${highlightId})`}
              opacity="0.85"
            />
            <circle cx="28" cy="30" r="3" fill="#FFFFFF" opacity="0.95" />
          </g>
        );

      case 'cylinder':
        return (
          <g>
            {/* Shadow */}
            <path
              d="M 22 30 L 22 74 C 22 84, 78 84, 78 74 L 78 30 Z"
              fill="rgba(70,30,0,0.18)"
            />
            {/* Cylinder Body */}
            <path
              d="M 22 26 L 22 70 C 22 80, 78 80, 78 70 L 78 26 Z"
              fill={`url(#${gradientId})`}
              stroke={c.border}
              strokeWidth="2.5"
            />
            {/* Cylinder Top Rim */}
            <ellipse
              cx="50"
              cy="26"
              rx="28"
              ry="14"
              fill={c.light}
              stroke={c.border}
              strokeWidth="2.5"
            />
            {/* Top highlight */}
            <ellipse cx="44" cy="23" rx="16" ry="6" fill="#FFFFFF" opacity="0.6" />
            {/* Vertical sheen on body */}
            <rect x="30" y="32" width="12" height="38" fill="#FFFFFF" opacity="0.22" rx="4" />
          </g>
        );

      case 'flower':
        return (
          <g>
            {/* Drop shadow */}
            <g transform="translate(0, 5)" opacity="0.18">
              {[0, 72, 144, 216, 288].map((angle, i) => (
                <circle
                  key={i}
                  cx={50 + 26 * Math.cos((angle * Math.PI) / 180)}
                  cy={50 + 26 * Math.sin((angle * Math.PI) / 180)}
                  r="19"
                  fill="#461E00"
                />
              ))}
              <circle cx="50" cy="50" r="22" fill="#461E00" />
            </g>

            {/* 5 Petals */}
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <circle
                key={i}
                cx={50 + 25 * Math.cos((angle * Math.PI) / 180)}
                cy={50 + 25 * Math.sin((angle * Math.PI) / 180)}
                r="18.5"
                fill={`url(#${gradientId})`}
                stroke={c.border}
                strokeWidth="2"
              />
            ))}

            {/* Petal Highlights */}
            <circle cx="34" cy="30" r="6" fill="#FFFFFF" opacity="0.45" />
            <circle cx="66" cy="30" r="5" fill="#FFFFFF" opacity="0.35" />

            {/* Center Pistil Core (clean yellow core with specular highlight) */}
            <circle cx="50" cy="50" r="16" fill="#FDE047" stroke="#D97706" strokeWidth="2.5" />
            <circle cx="46" cy="45" r="4.5" fill="#FFFFFF" opacity="0.85" />
          </g>
        );

      case 'star':
        return (
          <g>
            {/* Drop Shadow */}
            <path
              d="M 50 14 L 61 36 L 86 38 L 66 55 L 72 80 L 50 67 L 28 80 L 34 55 L 14 38 L 39 36 Z"
              fill="rgba(70,30,0,0.18)"
              transform="translate(0, 5)"
            />
            {/* Rounded Star Path */}
            <path
              d="M 50 11 L 61 34 L 86 36 L 66 53 L 72 78 L 50 65 L 28 78 L 34 53 L 14 36 L 39 34 Z"
              fill={`url(#${gradientId})`}
              stroke={c.border}
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Star Top Highlights */}
            <path
              d="M 50 16 L 57 34 L 74 36 L 60 48 L 50 40 Z"
              fill="#FFFFFF"
              opacity="0.4"
            />
            <circle cx="44" cy="30" r="3.5" fill="#FFFFFF" opacity="0.9" />
          </g>
        );

      case 'heart':
        return (
          <g>
            {/* Shadow */}
            <path
              d="M 50 82 C 22 62, 10 44, 10 28 C 10 16, 20 8, 32 8 C 40 8, 46 13, 50 20 C 54 13, 60 8, 68 8 C 80 8, 90 16, 90 28 C 90 44, 78 62, 50 82 Z"
              fill="rgba(70,30,0,0.18)"
              transform="translate(0, 5)"
            />
            {/* Heart Body */}
            <path
              d="M 50 78 C 22 58, 10 40, 10 24 C 10 12, 20 4, 32 4 C 40 4, 46 9, 50 16 C 54 9, 60 4, 68 4 C 80 4, 90 12, 90 24 C 90 40, 78 58, 50 78 Z"
              fill={`url(#${gradientId})`}
              stroke={c.border}
              strokeWidth="2.5"
            />
            {/* Glossy Left Lobe Highlight */}
            <ellipse
              cx="30"
              cy="18"
              rx="12"
              ry="7"
              transform="rotate(-30 30 18)"
              fill={`url(#${highlightId})`}
              opacity="0.85"
            />
            <circle cx="24" cy="15" r="3" fill="#FFFFFF" opacity="0.95" />
          </g>
        );

      case 'diamond':
        return (
          <g>
            {/* Shadow */}
            <polygon
              points="50,8 88,50 50,92 12,50"
              fill="rgba(70,30,0,0.18)"
              transform="translate(0, 5)"
            />
            {/* Diamond Base */}
            <polygon
              points="50,8 88,50 50,92 12,50"
              fill={`url(#${gradientId})`}
              stroke={c.border}
              strokeWidth="2.5"
            />
            {/* Facet Highlights */}
            <polygon points="50,8 50,50 12,50" fill="#FFFFFF" opacity="0.3" />
            <polygon points="50,8 88,50 50,50" fill="#FFFFFF" opacity="0.12" />
            <polygon points="12,50 50,50 50,92" fill="#000000" opacity="0.1" />
            <polygon points="50,50 88,50 50,92" fill="#000000" opacity="0.2" />

            <circle cx="34" cy="30" r="3.5" fill="#FFFFFF" opacity="0.9" />
          </g>
        );

      default:
        return null;
    }
  };

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={`${c.nameTr} ${shape}`}
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center p-0 m-0 bg-transparent border-none cursor-pointer outline-none transition-transform duration-150 active:scale-90 touch-manipulation focus-visible:ring-4 focus-visible:ring-amber-400 focus-visible:ring-offset-2 rounded-full select-none ${
        isHinted ? 'animate-pulse-glow scale-110' : ''
      } ${isShaking ? 'animate-wiggle' : ''} ${
        isSelected ? 'scale-110 drop-shadow-lg' : ''
      } ${disabled ? 'cursor-default' : 'hover:scale-105'} ${className}`}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full overflow-visible pointer-events-none drop-shadow-sm"
      >
        <defs>
          <radialGradient id={gradientId} cx="36%" cy="30%" r="70%">
            <stop offset="0%" stopColor={c.light} />
            <stop offset="60%" stopColor={c.base} />
            <stop offset="100%" stopColor={c.dark} />
          </radialGradient>
          <linearGradient id={highlightId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor={c.highlight} stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {renderShape()}

        {showSparkle && (
          <g className="animate-gentle-bounce">
            <path
              d="M 80 18 L 82 24 L 88 26 L 82 28 L 80 34 L 78 28 L 72 26 L 78 24 Z"
              fill="#FEF08A"
            />
          </g>
        )}
      </svg>
    </button>
  );
};
