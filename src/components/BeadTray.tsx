import React from 'react';
import { BeadDefinition } from '../types/game';
import { Bead } from './Bead';
import { Volume2, Lightbulb, Package } from 'lucide-react';

interface BoxInventory {
  bead: BeadDefinition;
  count: number;
}

interface BeadTrayProps {
  boxes: BoxInventory[];
  onTakeBeadFromBox: (boxIndex: number) => void;
  hintBead?: BeadDefinition | null;
  onShowHint?: () => void;
  onPronounceHint?: () => void;
  isCompleted?: boolean;
}

export const BeadTray: React.FC<BeadTrayProps> = ({
  boxes,
  onTakeBeadFromBox,
  hintBead,
  onShowHint,
  onPronounceHint,
  isCompleted = false
}) => {
  return (
    <div className="w-full max-w-md mx-auto mt-2 select-none">
      {/* 3D Master Organizer Wooden Box containing 4 distinct compartments */}
      <div className="table-bead-box-3d rounded-3xl p-3 sm:p-3.5 border-3 border-[#C99850] relative">
        {/* Tray Header */}
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-amber-800" />
              <span>4 Boncuk Kutusu</span>
            </span>
            <span className="text-[11px] font-extrabold text-amber-900 bg-amber-200/90 px-2 py-0.5 rounded-full border border-amber-300">
              Kutulardan Tek Tek Al
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {onPronounceHint && (
              <button
                type="button"
                onClick={onPronounceHint}
                className="p-1.5 rounded-xl text-amber-950 bg-amber-200/80 hover:bg-amber-300 transition-all active:scale-95 cursor-pointer shadow-xs border border-amber-300"
                title="Sıradaki Boncuğu Dinle"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}

            {onShowHint && !isCompleted && (
              <button
                type="button"
                onClick={onShowHint}
                className="flex items-center gap-1 text-xs font-black text-amber-950 bg-gradient-to-r from-amber-300 to-yellow-400 hover:from-amber-400 hover:to-yellow-500 px-3 py-1 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer border border-amber-400"
              >
                <Lightbulb className="w-3.5 h-3.5 text-amber-950 fill-amber-300" />
                <span>İpucu</span>
              </button>
            )}
          </div>
        </div>

        {/* 4 Wooden Compartment Boxes Grid (2x2 Grid with 10 beads in each box) */}
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5">
          {boxes.map((box, boxIdx) => {
            const isTargetHint =
              hintBead &&
              hintBead.shape === box.bead.shape &&
              hintBead.color === box.bead.color;

            const isAvailable = box.count > 0;

            return (
              <button
                key={`box-${boxIdx}-${box.bead.shape}-${box.bead.color}`}
                type="button"
                disabled={!isAvailable || isCompleted}
                onClick={() => isAvailable && !isCompleted && onTakeBeadFromBox(boxIdx)}
                className={`relative flex flex-col items-center justify-between p-2 rounded-2xl transition-all duration-200 cursor-pointer border-2 ${
                  isTargetHint
                    ? 'border-amber-500 ring-3 ring-amber-400/80 bg-gradient-to-b from-amber-100 to-amber-200/90 shadow-md scale-105'
                    : 'border-[#BD8A48] bg-gradient-to-b from-[#FFF5E6] to-[#F1D7B4] hover:bg-[#FFF9EE] shadow-sm hover:scale-[1.03] active:scale-95'
                } ${!isAvailable ? 'opacity-40 cursor-not-allowed' : ''}`}
                style={{
                  boxShadow: 'inset 0 3px 6px rgba(120,53,15,0.18), 0 4px 0 #A87030, 0 6px 8px rgba(0,0,0,0.15)'
                }}
              >
                {/* Box Number Tag */}
                <div className="w-full flex items-center justify-between mb-0.5">
                  <span className="text-[10px] font-black text-amber-900/60 bg-amber-200/50 px-1.5 py-0.2 rounded-md">
                    Kutu {boxIdx + 1}
                  </span>
                  {/* Bead Count Badge (Shows remaining beads out of 10) */}
                  <span className={`text-[10px] font-black px-1.5 py-0.2 rounded-full shadow-xs ${
                    box.count > 0
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-400 text-white'
                  }`}>
                    {box.count}
                  </span>
                </div>

                {/* 3D Box Interior with Layered Pile of Beads */}
                <div className="relative w-full h-[62px] flex items-center justify-center my-0.5">
                  {/* Recessed wooden bowl effect */}
                  <div className="absolute inset-1 rounded-xl bg-gradient-to-b from-[#DEB887]/60 to-[#C69A5E]/80 shadow-inner" />

                  {/* Stacked background ghost beads showing depth of 10 beads in box */}
                  {box.count >= 3 && (
                    <div className="absolute -top-1 left-2 opacity-50 pointer-events-none scale-75">
                      <Bead shape={box.bead.shape} color={box.bead.color} size={36} disabled showHole={false} />
                    </div>
                  )}
                  {box.count >= 2 && (
                    <div className="absolute top-1 right-2 opacity-60 pointer-events-none scale-75">
                      <Bead shape={box.bead.shape} color={box.bead.color} size={36} disabled showHole={false} />
                    </div>
                  )}

                  {/* Main Top Pickable Bead */}
                  {box.count > 0 ? (
                    <div className="relative z-10 animate-pop-in">
                      <Bead
                        shape={box.bead.shape}
                        color={box.bead.color}
                        size={52}
                        isHinted={Boolean(isTargetHint)}
                        disabled
                      />
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold text-amber-900/40 z-10">
                      Bitti
                    </span>
                  )}
                </div>

                {/* Touch hint */}
                <span className="text-[9px] font-black text-amber-950 mt-0.5 truncate max-w-full">
                  1 Tane Al
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
