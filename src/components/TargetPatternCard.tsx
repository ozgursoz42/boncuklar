import React from 'react';
import { BeadDefinition, JewelryType } from '../types/game';
import { Bead } from './Bead';
import { Eye, EyeOff, Sparkles } from 'lucide-react';

interface TargetPatternCardProps {
  targetSequence: BeadDefinition[];
  currentPlacementIndex: number;
  levelNumber?: number;
  chapterTitle?: string;
  jewelryType?: JewelryType;
  isSideBySide?: boolean;
  isMemoryMode?: boolean;
  isMemoryHidden?: boolean;
  onTogglePeek?: () => void;
  countdownSeconds?: number;
}

export const TargetPatternCard: React.FC<TargetPatternCardProps> = ({
  targetSequence,
  currentPlacementIndex,
  levelNumber = 1,
  chapterTitle,
  jewelryType = 'straight',
  isSideBySide = false,
  isMemoryMode = false,
  isMemoryHidden = false,
  onTogglePeek,
  countdownSeconds = 0
}) => {
  const isBracelet = jewelryType === 'bracelet';
  const isNecklace = jewelryType === 'necklace';
  const total = targetSequence.length;

  // Generous downward extension for all necklace levels so beads are never cramped
  const necklaceHeight = total >= 11 ? 430 : total >= 9 ? 390 : total >= 7 ? 350 : 310;
  const necklaceBottomY = necklaceHeight - 26;

  return (
    <div
      className={`w-full ${
        isSideBySide ? 'max-w-none' : 'max-w-xl'
      } mx-auto easel-stand-card rounded-3xl p-3 sm:p-4.5 border-3 border-[#E5B56E] relative overflow-hidden transition-all flex flex-col justify-between`}
    >
      {/* Top Banner Tag: "Seviye X" */}
      <div className="flex items-center justify-between mb-1.5 px-0.5">
        <div className="flex items-center gap-1.5">
          <span className="inline-flex items-center justify-center bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-amber-950 font-black text-sm sm:text-base px-4 py-1 rounded-full shadow-xs uppercase tracking-wide border border-amber-300">
            Seviye {levelNumber}
          </span>
          {chapterTitle && !isSideBySide && (
            <span className="text-xs font-bold text-amber-900/80 truncate max-w-[200px]">
              {chapterTitle}
            </span>
          )}
        </div>

        {isMemoryMode && (
          <button
            type="button"
            onClick={onTogglePeek}
            className="flex items-center gap-1 text-xs font-bold text-amber-900 bg-amber-200/90 hover:bg-amber-300 px-3.5 py-1 rounded-xl transition-colors active:scale-95 cursor-pointer shadow-xs border border-amber-300"
          >
            {isMemoryHidden ? (
              <>
                <Eye className="w-4 h-4 text-amber-700" />
                <span>Bak</span>
              </>
            ) : (
              <>
                <EyeOff className="w-4 h-4 text-amber-700" />
                <span>Gizle</span>
              </>
            )}
          </button>
        )}
      </div>

      {/* Target Pattern Display Area on Easel Card */}
      <div
        className={`relative py-3.5 px-3 bg-[#FFFBF0] rounded-2xl border-2 border-amber-200/80 ${
          isSideBySide
            ? total >= 9
              ? 'min-h-[410px] sm:min-h-[450px]'
              : 'min-h-[330px] sm:min-h-[370px]'
            : 'min-h-[140px] sm:min-h-[160px]'
        } flex items-center justify-center shadow-inner overflow-hidden`}
      >
        {/* Memory mode hidden shield */}
        {isMemoryMode && isMemoryHidden ? (
          <div className="relative z-10 flex flex-col items-center justify-center py-6 animate-pop-in">
            <div className="w-14 h-14 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center mb-2 shadow-sm animate-gentle-bounce">
              <Sparkles className="w-8 h-8 text-amber-700" />
            </div>
            <p className="text-sm sm:text-base font-extrabold text-amber-900">
              Deseni Hatırla!
            </p>
          </div>
        ) : (
          <>
            {/* 1. STRAIGHT CORD LAYOUT (Levels 1-4) */}
            {!isBracelet && !isNecklace && (
              <div className="w-full relative flex items-center justify-center py-4">
                {/* Main Single Continuous 3D Braided Golden Rope Line */}
                <div className="absolute left-3 right-3 top-1/2 -translate-y-1/2 h-6 braided-cord-3d rounded-full z-0 pointer-events-none">
                  {/* Left Stopper Knot */}
                  <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-[#B45309] via-[#78350F] to-[#451A03] border-2 border-[#FCD34D] shadow-md flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#EA580C] shadow-inner" />
                  </div>
                  {/* Right Stopper Knot */}
                  <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-[#B45309] via-[#78350F] to-[#451A03] border-2 border-[#FCD34D] shadow-md flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#EA580C] shadow-inner" />
                  </div>
                </div>

                {/* Beads centered on cord */}
                <div className="relative z-10 flex items-center justify-center gap-3.5 sm:gap-6">
                  {targetSequence.map((bead, idx) => {
                    const isMatched = idx < currentPlacementIndex;
                    const size = 80;

                    return (
                      <div
                        key={idx}
                        className={`transition-all duration-300 flex items-center justify-center ${
                          isMatched
                            ? 'opacity-85 scale-95'
                            : 'scale-100 drop-shadow-md'
                        }`}
                      >
                        <Bead
                          shape={bead.shape}
                          color={bead.color}
                          size={size}
                          disabled
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* 2. CIRCULAR BRACELET LAYOUT (Levels 5-19 & Mixed) - 300px Canvas */}
            {isBracelet && (
              <div className="relative w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] flex items-center justify-center select-none">
                {(() => {
                  const radius = total >= 10 ? 116 : total >= 8 ? 106 : 94;
                  const beadSize = total >= 11 ? 44 : total >= 9 ? 50 : total >= 7 ? 56 : 64;

                  return (
                    <>
                      {/* SVG Single Piece Continuous Circular Cord at exact center (150, 150) on 300x300 */}
                      <svg
                        viewBox="0 0 300 300"
                        className="absolute inset-0 w-full h-full pointer-events-none"
                      >
                        {/* Shadow underlying rope */}
                        <circle
                          cx="150"
                          cy="150"
                          r={radius}
                          fill="none"
                          stroke="#78350F"
                          strokeWidth="7"
                          opacity="0.35"
                        />
                        {/* Main Braided Golden Rope */}
                        <circle
                          cx="150"
                          cy="150"
                          r={radius}
                          fill="none"
                          stroke="#D97706"
                          strokeWidth="5.5"
                        />
                        {/* Inner Highlight Strand */}
                        <circle
                          cx="150"
                          cy="150"
                          r={radius}
                          fill="none"
                          stroke="#FEF08A"
                          strokeWidth="2"
                        />
                        {/* Golden Clasp at top connecting the loop into a single piece */}
                        <circle
                          cx="150"
                          cy={150 - radius}
                          r="7.5"
                          fill="#B45309"
                          stroke="#FCD34D"
                          strokeWidth="2"
                        />
                      </svg>

                      {targetSequence.map((bead, idx) => {
                        const angle =
                          -Math.PI / 2 + ((idx + 0.5) * 2 * Math.PI) / total;
                        const x = 150 + radius * Math.cos(angle);
                        const y = 150 + radius * Math.sin(angle);
                        const isMatched = idx < currentPlacementIndex;

                        return (
                          <div
                            key={idx}
                            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                            style={{
                              left: `${(x / 300) * 100}%`,
                              top: `${(y / 300) * 100}%`
                            }}
                          >
                            <div
                              className={
                                isMatched
                                  ? 'opacity-85 scale-95'
                                  : 'scale-100 drop-shadow-sm'
                              }
                            >
                              <Bead
                                shape={bead.shape}
                                color={bead.color}
                                size={beadSize}
                                disabled
                              />
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })()}
              </div>
            )}

            {/* 3. DEEPLY EXTENDED U-SHAPED NECKLACE LAYOUT (All necklace levels) */}
            {isNecklace && (
              <div
                className="relative w-[270px] sm:w-[310px] flex items-center justify-center select-none"
                style={{ height: necklaceHeight }}
              >
                {(() => {
                  const beadSize =
                    total >= 11
                      ? 44
                      : total >= 9
                      ? 50
                      : total >= 7
                      ? 56
                      : 64;
                  const p0x = 30,
                    p0y = 26;
                  const p1x = 150,
                    p1y = necklaceBottomY;
                  const p2x = 270,
                    p2y = 26;

                  return (
                    <>
                      {/* SVG Single Continuous Extended Quadratic Bezier Cord */}
                      <svg
                        viewBox={`0 0 300 ${necklaceHeight}`}
                        className="absolute inset-0 w-full h-full pointer-events-none"
                      >
                        {/* Shadow underlying rope */}
                        <path
                          d={`M ${p0x} ${p0y} Q ${p1x} ${p1y} ${p2x} ${p2y}`}
                          fill="none"
                          stroke="#78350F"
                          strokeWidth="7"
                          strokeLinecap="round"
                          opacity="0.35"
                        />
                        {/* Main Braided Golden Rope */}
                        <path
                          d={`M ${p0x} ${p0y} Q ${p1x} ${p1y} ${p2x} ${p2y}`}
                          fill="none"
                          stroke="#D97706"
                          strokeWidth="5.5"
                          strokeLinecap="round"
                        />
                        {/* Inner Highlight Strand */}
                        <path
                          d={`M ${p0x} ${p0y} Q ${p1x} ${p1y} ${p2x} ${p2y}`}
                          fill="none"
                          stroke="#FEF08A"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        {/* Top Left & Right Golden Clasps */}
                        <circle
                          cx={p0x}
                          cy={p0y}
                          r="7.5"
                          fill="#B45309"
                          stroke="#FCD34D"
                          strokeWidth="2"
                        />
                        <circle
                          cx={p2x}
                          cy={p2y}
                          r="7.5"
                          fill="#B45309"
                          stroke="#FCD34D"
                          strokeWidth="2"
                        />
                      </svg>

                      {targetSequence.map((bead, idx) => {
                        const t =
                          total === 1
                            ? 0.5
                            : 0.07 + (idx / (total - 1)) * 0.86;
                        const x =
                          (1 - t) * (1 - t) * p0x +
                          2 * (1 - t) * t * p1x +
                          t * t * p2x;
                        const y =
                          (1 - t) * (1 - t) * p0y +
                          2 * (1 - t) * t * p1y +
                          t * t * p2y;
                        const isMatched = idx < currentPlacementIndex;

                        return (
                          <div
                            key={idx}
                            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                            style={{
                              left: `${(x / 300) * 100}%`,
                              top: `${(y / necklaceHeight) * 100}%`
                            }}
                          >
                            <div
                              className={
                                isMatched
                                  ? 'opacity-85 scale-95'
                                  : 'scale-100 drop-shadow-sm'
                              }
                            >
                              <Bead
                                shape={bead.shape}
                                color={bead.color}
                                size={beadSize}
                                disabled
                              />
                            </div>
                          </div>
                        );
                      })}
                    </>
                  );
                })()}
              </div>
            )}
          </>
        )}

        {/* Memory countdown badge */}
        {isMemoryMode && !isMemoryHidden && countdownSeconds > 0 && (
          <div className="absolute top-2 right-2 bg-amber-500 text-white text-xs font-black px-2.5 py-0.5 rounded-full shadow-xs animate-pulse">
            {countdownSeconds}s
          </div>
        )}
      </div>
    </div>
  );
};
