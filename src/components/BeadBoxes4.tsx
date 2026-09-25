import React, { useState, useEffect, useRef } from 'react';
import { BeadDefinition } from '../types/game';
import { Bead } from './Bead';
import { Lightbulb, Sparkles } from 'lucide-react';

interface BeadBoxes4Props {
  availableBeads: BeadDefinition[];
  targetSequence?: BeadDefinition[];
  placedBeads?: BeadDefinition[];
  onSelectBead: (bead: BeadDefinition, targetSlotIndex?: number, sourceRect?: DOMRect) => void;
  hintBead?: BeadDefinition | null;
  onShowHint?: () => void;
  isCompleted?: boolean;
}

/**
 * Generates a shuffled list of bead boxes that is guaranteed NOT to be in the exact
 * solution order of the target sequence, ensuring player engagement.
 */
function generateShuffledBoxes(
  targetSequence: BeadDefinition[],
  availableBeads: BeadDefinition[]
): BeadDefinition[] {
  const baseBoxes: BeadDefinition[] = [];

  // Collect unique beads from target sequence
  targetSequence.forEach(b => {
    if (!baseBoxes.some(x => x.shape === b.shape && x.color === b.color)) {
      baseBoxes.push({ ...b });
    }
  });

  // Collect unique beads from availableBeads
  availableBeads.forEach(b => {
    if (!baseBoxes.some(x => x.shape === b.shape && x.color === b.color)) {
      baseBoxes.push({ ...b });
    }
  });

  // Fallbacks if fewer than 4 total boxes
  const fallbackBeads: BeadDefinition[] = [
    { shape: 'round', color: 'red' },
    { shape: 'round', color: 'yellow' },
    { shape: 'round', color: 'blue' },
    { shape: 'round', color: 'green' },
    { shape: 'round', color: 'purple' },
    { shape: 'round', color: 'orange' }
  ];

  fallbackBeads.forEach(fb => {
    if (baseBoxes.length < 4 && !baseBoxes.some(x => x.shape === fb.shape && x.color === fb.color)) {
      baseBoxes.push({ ...fb });
    }
  });

  if (baseBoxes.length <= 1) {
    return baseBoxes;
  }

  // Create signature of target sequence order (first unique occurrence of each bead)
  const targetOrderSig = targetSequence
    .filter((b, idx, self) => self.findIndex(x => x.shape === b.shape && x.color === b.color) === idx)
    .map(b => `${b.shape}-${b.color}`)
    .join('|');

  // Check if box arrangement matches target sequence order
  const matchesTargetOrder = (arr: BeadDefinition[]) => {
    const arrSig = arr.slice(0, Math.min(arr.length, targetSequence.length))
      .map(b => `${b.shape}-${b.color}`)
      .join('|');
    return arrSig === targetOrderSig;
  };

  // Shuffle Fisher-Yates
  let shuffled = [...baseBoxes];
  let attempts = 0;

  do {
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    attempts++;
  } while (matchesTargetOrder(shuffled) && attempts < 30);

  // If after 30 attempts it still matches target sequence order, force swap the first two items
  if (matchesTargetOrder(shuffled) && shuffled.length > 1) {
    [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
  }

  return shuffled;
}

export const BeadBoxes4: React.FC<BeadBoxes4Props> = ({
  availableBeads,
  targetSequence = [],
  placedBeads = [],
  onSelectBead,
  hintBead,
  onShowHint,
  isCompleted = false
}) => {
  // State for randomly ordered boxes, re-shuffled whenever level starts / restarts
  const [boxes, setBoxes] = useState<BeadDefinition[]>(() =>
    generateShuffledBoxes(targetSequence, availableBeads)
  );

  const targetKey = targetSequence.map(b => `${b.shape}-${b.color}`).join(',');
  const availableKey = availableBeads.map(b => `${b.shape}-${b.color}`).join(',');
  const isAtStart = placedBeads.length === 0;

  useEffect(() => {
    if (isAtStart) {
      setBoxes(generateShuffledBoxes(targetSequence, availableBeads));
    }
  }, [targetKey, availableKey, isAtStart]);

  // Ref for debouncing rapid clicks on boxes
  const lastClickRef = useRef<number>(0);

  const boxCount = boxes.length;
  // Responsive sizing for generous bowl room
  const dishSize = boxCount > 4 ? 70 : 82;
  const beadSize = boxCount > 4 ? 38 : 46;

  return (
    <div className="w-full max-w-xl sm:max-w-2xl mx-auto mt-1 select-none">
      {/* 3D Wooden Section Container */}
      <div className="bg-gradient-to-b from-[#FFFDF7] via-[#FFF5E5] to-[#F8DEC0] rounded-3xl p-3 sm:p-4 border-3 border-[#D9A55B] shadow-xl relative">
        {/* Header with Title "Boncuklar" and Hint / Speech buttons */}
        <div className="flex items-center justify-between mb-2 px-1">
          <div className="flex items-center gap-1.5">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 flex items-center gap-1">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Boncuklar</span>
            </span>
          </div>

          <div className="flex items-center gap-1.5">
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

        {/* 3D Wooden Compartment Boxes: Always 4 items per row, wrapping if > 4 */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3">
          {boxes.map((bead, boxIdx) => {
            const isTargetHint =
              hintBead &&
              hintBead.shape === bead.shape &&
              hintBead.color === bead.color;

            // Calculate starting stock (at least 3 beads per box)
            const targetOccurrences = targetSequence.filter(
              x => x.shape === bead.shape && x.color === bead.color
            ).length;
            const initialStock = Math.max(3, targetOccurrences + 1);

            // Calculate used count on the string
            const placedOccurrences = placedBeads.filter(
              x => x.shape === bead.shape && x.color === bead.color
            ).length;

            const remainingCount = Math.max(0, initialStock - placedOccurrences);
            const isDepleted = remainingCount === 0;

            return (
              <div
                key={`box-${boxIdx}-${bead.shape}-${bead.color}`}
                className={`wooden-box-unit-3d rounded-2xl p-1.5 sm:p-2.5 flex flex-col items-center justify-center relative select-none transition-all ${
                  isTargetHint ? 'ring-4 ring-amber-400 ring-offset-2 scale-105 shadow-xl animate-pulse-glow' : ''
                } ${isDepleted ? 'opacity-40' : ''}`}
              >
                {/* Deep 3D Wooden Dish with Physical Stack of 3 Distinct Visible Beads */}
                <div
                  style={{ width: dishSize, height: dishSize }}
                  className={`table-bowl-deep-3d rounded-full flex items-center justify-center relative my-0.5 shadow-inner transition-all ${
                    isDepleted || isCompleted
                      ? 'cursor-not-allowed'
                      : 'cursor-pointer hover:scale-105 active:scale-95'
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    const now = Date.now();
                    if (now - lastClickRef.current < 450) {
                      return;
                    }
                    lastClickRef.current = now;

                    if (!isCompleted && !isDepleted) {
                      const rect = e.currentTarget.getBoundingClientRect();
                      onSelectBead(bead, undefined, rect);
                    }
                  }}
                >
                  {/* CASE A: 3+ BEADS REMAINING (Cluster of 3 distinct visible physical beads) */}
                  {remainingCount >= 3 && (
                    <div className="relative w-full h-full flex items-center justify-center pointer-events-none">
                      {/* Bead 1 (Bottom Left) */}
                      <div className="absolute left-1 bottom-1 transform -rotate-12 drop-shadow-sm">
                        <Bead shape={bead.shape} color={bead.color} size={beadSize * 0.88} disabled />
                      </div>
                      {/* Bead 2 (Bottom Right) */}
                      <div className="absolute right-1 bottom-1 transform rotate-12 drop-shadow-sm">
                        <Bead shape={bead.shape} color={bead.color} size={beadSize * 0.88} disabled />
                      </div>
                      {/* Bead 3 (Top Center Main) */}
                      <div className="absolute top-1 z-10 drop-shadow-md">
                        <Bead
                          shape={bead.shape}
                          color={bead.color}
                          size={beadSize * 0.95}
                          isHinted={Boolean(isTargetHint)}
                          disabled
                        />
                      </div>
                    </div>
                  )}

                  {/* CASE B: EXACTLY 2 BEADS REMAINING (Pair of 2 distinct visible physical beads) */}
                  {remainingCount === 2 && (
                    <div className="relative w-full h-full flex items-center justify-center gap-1 pointer-events-none">
                      {/* Bead 1 (Left) */}
                      <div className="transform -rotate-8 drop-shadow-sm">
                        <Bead shape={bead.shape} color={bead.color} size={beadSize * 0.95} disabled />
                      </div>
                      {/* Bead 2 (Right) */}
                      <div className="transform rotate-8 drop-shadow-md">
                        <Bead
                          shape={bead.shape}
                          color={bead.color}
                          size={beadSize * 0.95}
                          isHinted={Boolean(isTargetHint)}
                          disabled
                        />
                      </div>
                    </div>
                  )}

                  {/* CASE C: EXACTLY 1 BEAD REMAINING (Single centered bead) */}
                  {remainingCount === 1 && (
                    <div className="relative z-10 drop-shadow-md pointer-events-none">
                      <Bead
                        shape={bead.shape}
                        color={bead.color}
                        size={beadSize * 1.1}
                        isHinted={Boolean(isTargetHint)}
                        disabled
                      />
                    </div>
                  )}

                  {/* CASE D: 0 BEADS (Empty wooden bowl cavity) */}
                  {remainingCount === 0 && (
                    <div className="w-8 h-8 rounded-full bg-amber-950/10 shadow-inner border border-amber-900/10 pointer-events-none" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
