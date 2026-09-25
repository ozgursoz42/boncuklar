import React from 'react';
import { BeadDefinition, JewelryType } from '../types/game';
import { Bead } from './Bead';
import { SparkleEffect } from './SparkleEffect';
import { RotateCcw, Trash2, CheckCircle2, AlertCircle } from 'lucide-react';

interface BeadStringProps {
  totalSlots: number;
  placedBeads: BeadDefinition[];
  onRemoveBead: (index: number) => void;
  onClearAll: () => void;
  isCompleted?: boolean;
  isSuccessGlow?: boolean;
  isErrorGlow?: boolean;
  jewelryType?: JewelryType;
  isSideBySide?: boolean;
  lastPlacedIndex?: number | null;
  registerSlotRef?: (index: number, el: HTMLDivElement | null) => void;
}

export const BeadString: React.FC<BeadStringProps> = ({
  totalSlots,
  placedBeads,
  onRemoveBead,
  onClearAll,
  isCompleted = false,
  isSuccessGlow = false,
  isErrorGlow = false,
  jewelryType = 'straight',
  isSideBySide = false,
  lastPlacedIndex = null,
  registerSlotRef
}) => {
  const slots = Array.from({ length: totalSlots });

  const isBracelet = jewelryType === 'bracelet';
  const isNecklace = jewelryType === 'necklace';
  const total = totalSlots;

  // Generous downward extension matching TargetPatternCard
  const necklaceHeight = total >= 11 ? 430 : total >= 9 ? 390 : total >= 7 ? 350 : 310;
  const necklaceBottomY = necklaceHeight - 26;

  const showGreenGlow = isSuccessGlow || isCompleted;
  const showRedGlow = !showGreenGlow && isErrorGlow;

  return (
    <div
      className={`w-full ${
        isSideBySide ? 'max-w-none' : 'max-w-xl'
      } mx-auto select-none flex flex-col justify-between`}
    >
      {/* 3D Recessed Wooden Inlay Runner Board on Table */}
      <div
        className={`rounded-3xl p-3 sm:p-4.5 relative ${
          isSideBySide
            ? total >= 9
              ? 'min-h-[440px] sm:min-h-[480px]'
              : 'min-h-[360px] sm:min-h-[400px]'
            : 'min-h-[170px]'
        } flex flex-col justify-between transition-all duration-300 ${
          showGreenGlow
            ? 'border-3 border-emerald-400 ring-4 ring-emerald-400/80 shadow-[0_0_35px_rgba(52,211,153,0.85)] bg-gradient-to-b from-[#E8FDF0] to-[#D1FAE5]'
            : showRedGlow
            ? 'border-3 border-rose-400 ring-4 ring-rose-400/80 shadow-[0_0_35px_rgba(244,63,94,0.85)] bg-gradient-to-b from-[#FFF1F2] to-[#FFE4E6]'
            : 'table-recessed-runner border-2 border-[#D5BA93] shadow-lg'
        }`}
      >
        {/* Header with Title "Senin:" and Quick Actions */}
        <div className="flex items-center justify-between mb-1.5 px-1">
          <div className="flex items-center gap-1.5">
            <span
              className={`text-sm sm:text-base font-black uppercase tracking-wider flex items-center gap-1 transition-colors ${
                showGreenGlow
                  ? 'text-emerald-950 font-extrabold'
                  : showRedGlow
                  ? 'text-rose-950 font-extrabold'
                  : 'text-amber-950'
              }`}
            >
              <span>Senin:</span>
              {showGreenGlow && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100 animate-gentle-bounce" />
              )}
              {showRedGlow && (
                <AlertCircle className="w-5 h-5 text-rose-600 fill-rose-100 animate-gentle-bounce" />
              )}
            </span>
            <span
              className={`text-xs font-black px-3.5 py-0.5 rounded-full shadow-inner border transition-colors ${
                showGreenGlow
                  ? 'text-emerald-950 bg-emerald-200 border-emerald-400 ring-1 ring-emerald-300'
                  : showRedGlow
                  ? 'text-rose-950 bg-rose-200 border-rose-400 ring-1 ring-rose-300'
                  : 'text-amber-900 bg-amber-200/95 border-amber-300'
              }`}
            >
              {placedBeads.length} / {totalSlots}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {placedBeads.length > 0 && !isCompleted && !isSuccessGlow && (
              <>
                <button
                  type="button"
                  onClick={onClearAll}
                  aria-label="Tümünü Temizle"
                  className="p-1.5 rounded-xl text-amber-900 hover:text-red-600 hover:bg-red-50 transition-colors active:scale-95 cursor-pointer"
                  title="Boşalt"
                >
                  <Trash2 className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => onRemoveBead(placedBeads.length - 1)}
                  aria-label="Son Boncuğu Geri Al"
                  className={`flex items-center gap-1 text-xs font-black px-3 py-1 rounded-xl transition-all active:scale-95 shadow-xs cursor-pointer border ${
                    showRedGlow
                      ? 'text-rose-950 bg-rose-200 hover:bg-rose-300 border-rose-400'
                      : 'text-amber-950 bg-amber-200 hover:bg-amber-300 border-amber-400/60'
                  }`}
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Geri Al</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* 3D String / Cord Area */}
        <div
          className={`relative py-3.5 px-2 ${
            isSideBySide
              ? total >= 9
                ? 'min-h-[410px] sm:min-h-[450px]'
                : 'min-h-[330px] sm:min-h-[370px]'
              : 'min-h-[140px] sm:min-h-[160px]'
          } flex items-center justify-center rounded-2xl border-2 transition-all shadow-inner overflow-hidden ${
            showGreenGlow
              ? 'bg-[#F0FDF4] border-emerald-300 ring-2 ring-emerald-300/60'
              : showRedGlow
              ? 'bg-[#FFF5F5] border-rose-300 ring-2 ring-rose-300/60'
              : 'bg-[#FFFDF7] border-amber-200'
          }`}
        >
          {/* 1. STRAIGHT CORD (Levels 1-4) */}
          {!isBracelet && !isNecklace && (
            <div className="w-full relative flex items-center justify-center py-4">
              {/* Main Single Continuous 3D Braided Golden Rope Line */}
              <div
                className={`absolute left-3 right-3 top-1/2 -translate-y-1/2 h-6 rounded-full z-0 pointer-events-none transition-all ${
                  showGreenGlow
                    ? 'bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.85)]'
                    : showRedGlow
                    ? 'bg-gradient-to-r from-rose-400 via-rose-300 to-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.85)]'
                    : 'braided-cord-3d'
                }`}
              >
                {/* Left Stopper Sphere */}
                <div className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gradient-to-br from-[#B45309] via-[#78350F] to-[#451A03] border-2 border-[#FCD34D] shadow-md flex items-center justify-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#EA580C] shadow-inner" />
                </div>

                {/* Right Needle Tip */}
                <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-14 h-10 flex items-center justify-end pointer-events-none drop-shadow-md">
                  <svg viewBox="0 0 44 26" className="w-full h-full">
                    <defs>
                      <linearGradient
                        id="needle-shine-6"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="45%" stopColor="#CBD5E1" />
                        <stop offset="75%" stopColor="#94A3B8" />
                        <stop offset="100%" stopColor="#475569" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 2 13 L 34 3 L 42 13 L 34 23 Z"
                      fill="url(#needle-shine-6)"
                      stroke="#475569"
                      strokeWidth="1.5"
                    />
                    <ellipse cx="11" cy="13" rx="4" ry="2" fill="#1E293B" />
                  </svg>
                </div>
              </div>

              {/* Straight Slots */}
              <div className="relative z-10 flex items-center justify-center gap-3.5 sm:gap-6">
                {slots.map((_, idx) => {
                  const placedBead = placedBeads[idx];
                  const isNextActiveSlot =
                    idx === placedBeads.length && !isCompleted;
                  const isRecentlyPlaced = lastPlacedIndex === idx;
                  const beadSize = 80;

                  if (placedBead) {
                    return (
                      <div
                        key={`placed-${idx}`}
                        ref={(el) => registerSlotRef?.(idx, el)}
                        data-slot-index={idx}
                        className="relative group transition-transform duration-200 animate-pop-in cursor-pointer flex items-center justify-center"
                        onClick={() =>
                          !isCompleted && !isSuccessGlow && onRemoveBead(idx)
                        }
                      >
                        <Bead
                          shape={placedBead.shape}
                          color={placedBead.color}
                          size={beadSize}
                          isPlaced
                        />
                        {isRecentlyPlaced && (
                          <SparkleEffect size={beadSize + 24} />
                        )}

                        {!isCompleted && !isSuccessGlow && (
                          <div className="absolute -top-1.5 -right-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center shadow-md">
                            ×
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <div
                      key={`empty-${idx}`}
                      ref={(el) => registerSlotRef?.(idx, el)}
                      data-slot-index={idx}
                      style={{ width: beadSize, height: beadSize }}
                      className={`rounded-full border-3 border-dashed flex flex-col items-center justify-center transition-all duration-200 shadow-inner ${
                        isNextActiveSlot
                          ? 'border-amber-500 bg-amber-200/30 shadow-sm animate-pulse scale-105'
                          : 'border-amber-400/70 bg-amber-100/20'
                      }`}
                    >
                      {isNextActiveSlot && (
                        <span className="text-[11px] font-black text-amber-800 leading-none bg-white/80 px-2 py-0.5 rounded-full shadow-xs">
                          Buraya
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* 2. CIRCULAR BRACELET SLOTS (Levels 5-19 & Mixed) - 300px Canvas */}
          {isBracelet && (
            <div className="relative w-[270px] h-[270px] sm:w-[310px] sm:h-[310px] flex items-center justify-center select-none">
              {(() => {
                const radius = total >= 10 ? 116 : total >= 8 ? 106 : 94;
                const beadSize = total >= 11 ? 44 : total >= 9 ? 50 : total >= 7 ? 56 : 64;

                return (
                  <>
                    {/* SVG Exact Single Piece Continuous Circular Cord */}
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
                      {/* Main Braided Rope */}
                      <circle
                        cx="150"
                        cy="150"
                        r={radius}
                        fill="none"
                        stroke={
                          showGreenGlow
                            ? '#10B981'
                            : showRedGlow
                            ? '#F43F5E'
                            : '#D97706'
                        }
                        strokeWidth="5.5"
                      />
                      {/* Inner Highlight Strand */}
                      <circle
                        cx="150"
                        cy="150"
                        r={radius}
                        fill="none"
                        stroke={
                          showGreenGlow
                            ? '#A7F3D0'
                            : showRedGlow
                            ? '#FECDD3'
                            : '#FEF08A'
                        }
                        strokeWidth="2"
                      />
                      {/* Golden Clasp at top connecting the loop */}
                      <circle
                        cx="150"
                        cy={150 - radius}
                        r="7.5"
                        fill="#B45309"
                        stroke="#FCD34D"
                        strokeWidth="2"
                      />
                    </svg>

                    {slots.map((_, idx) => {
                      const angle =
                        -Math.PI / 2 + ((idx + 0.5) * 2 * Math.PI) / total;
                      const x = 150 + radius * Math.cos(angle);
                      const y = 150 + radius * Math.sin(angle);
                      const placedBead = placedBeads[idx];
                      const isNextActiveSlot =
                        idx === placedBeads.length && !isCompleted;
                      const isRecentlyPlaced = lastPlacedIndex === idx;

                      if (placedBead) {
                        return (
                          <div
                            key={`placed-${idx}`}
                            ref={(el) => registerSlotRef?.(idx, el)}
                            data-slot-index={idx}
                            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group"
                            style={{
                              left: `${(x / 300) * 100}%`,
                              top: `${(y / 300) * 100}%`
                            }}
                            onClick={() =>
                              !isCompleted && !isSuccessGlow && onRemoveBead(idx)
                            }
                          >
                            <Bead
                              shape={placedBead.shape}
                              color={placedBead.color}
                              size={beadSize}
                              isPlaced
                            />
                            {isRecentlyPlaced && (
                              <SparkleEffect size={beadSize + 18} />
                            )}
                          </div>
                        );
                      }

                      return (
                        <div
                          key={`empty-${idx}`}
                          ref={(el) => registerSlotRef?.(idx, el)}
                          data-slot-index={idx}
                          style={{
                            left: `${(x / 300) * 100}%`,
                            top: `${(y / 300) * 100}%`,
                            width: beadSize,
                            height: beadSize
                          }}
                          className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed flex flex-col items-center justify-center transition-all shadow-inner ${
                            isNextActiveSlot
                              ? 'border-amber-500 bg-amber-200/30 shadow-xs animate-pulse scale-105'
                              : 'border-amber-400/80 bg-amber-50/20'
                          }`}
                        />
                      );
                    })}
                  </>
                );
              })()}
            </div>
          )}

          {/* 3. DEEPLY EXTENDED U-SHAPED NECKLACE SLOTS */}
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
                    {/* SVG Exact Single Continuous Extended Quadratic Bezier Cord */}
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
                      {/* Main Braided Cord */}
                      <path
                        d={`M ${p0x} ${p0y} Q ${p1x} ${p1y} ${p2x} ${p2y}`}
                        fill="none"
                        stroke={
                          showGreenGlow
                            ? '#10B981'
                            : showRedGlow
                            ? '#F43F5E'
                            : '#D97706'
                        }
                        strokeWidth="5.5"
                        strokeLinecap="round"
                      />
                      {/* Inner Highlight Strand */}
                      <path
                        d={`M ${p0x} ${p0y} Q ${p1x} ${p1y} ${p2x} ${p2y}`}
                        fill="none"
                        stroke={
                          showGreenGlow
                            ? '#A7F3D0'
                            : showRedGlow
                            ? '#FECDD3'
                            : '#FEF08A'
                        }
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

                    {slots.map((_, idx) => {
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

                      const placedBead = placedBeads[idx];
                      const isNextActiveSlot =
                        idx === placedBeads.length && !isCompleted;
                      const isRecentlyPlaced = lastPlacedIndex === idx;

                      if (placedBead) {
                        return (
                          <div
                            key={`placed-${idx}`}
                            ref={(el) => registerSlotRef?.(idx, el)}
                            data-slot-index={idx}
                            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer group"
                            style={{
                              left: `${(x / 300) * 100}%`,
                              top: `${(y / necklaceHeight) * 100}%`
                            }}
                            onClick={() =>
                              !isCompleted && !isSuccessGlow && onRemoveBead(idx)
                            }
                          >
                            <Bead
                              shape={placedBead.shape}
                              color={placedBead.color}
                              size={beadSize}
                              isPlaced
                            />
                            {isRecentlyPlaced && (
                              <SparkleEffect size={beadSize + 18} />
                            )}
                          </div>
                        );
                      }

                      return (
                        <div
                          key={`empty-${idx}`}
                          ref={(el) => registerSlotRef?.(idx, el)}
                          data-slot-index={idx}
                          style={{
                            left: `${(x / 300) * 100}%`,
                            top: `${(y / necklaceHeight) * 100}%`,
                            width: beadSize,
                            height: beadSize
                          }}
                          className={`absolute z-10 transform -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed flex flex-col items-center justify-center transition-all shadow-inner ${
                            isNextActiveSlot
                              ? 'border-amber-500 bg-amber-200/30 shadow-xs animate-pulse scale-105'
                              : 'border-amber-400/80 bg-amber-50/20'
                          }`}
                        />
                      );
                    })}
                  </>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
