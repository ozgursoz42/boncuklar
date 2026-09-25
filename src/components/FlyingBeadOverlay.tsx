import React, { useEffect, useState, useRef } from 'react';
import { BeadDefinition } from '../types/game';
import { Bead } from './Bead';

export interface FlyingBeadInfo {
  bead: BeadDefinition;
  startX: number;
  startY: number;
  targetX: number;
  targetY: number;
}

interface FlyingBeadOverlayProps {
  flyingBead: FlyingBeadInfo | null;
  onAnimationComplete: () => void;
}

export const FlyingBeadOverlay: React.FC<FlyingBeadOverlayProps> = ({
  flyingBead,
  onAnimationComplete
}) => {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onAnimationComplete);
  const completedRef = useRef(false);

  useEffect(() => {
    onCompleteRef.current = onAnimationComplete;
  }, [onAnimationComplete]);

  useEffect(() => {
    if (!flyingBead) {
      setProgress(0);
      completedRef.current = false;
      return;
    }

    completedRef.current = false;
    let startTime: number | null = null;
    const duration = 400; // ms

    let animId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const p = Math.min(1, elapsed / duration);
      setProgress(p);

      if (p < 1) {
        animId = requestAnimationFrame(step);
      } else {
        if (!completedRef.current) {
          completedRef.current = true;
          onCompleteRef.current();
        }
      }
    };

    animId = requestAnimationFrame(step);
    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [flyingBead]);

  if (!flyingBead) return null;

  // Parabolic flight curve
  const easeOutQuad = (t: number) => t * (2 - t);
  const eased = easeOutQuad(progress);

  const currentX = flyingBead.startX + (flyingBead.targetX - flyingBead.startX) * eased;
  // Arc height peak in middle of flight
  const arcHeight = Math.sin(progress * Math.PI) * 90;
  const currentY = flyingBead.startY + (flyingBead.targetY - flyingBead.startY) * progress - arcHeight;
  const currentScale = 1 + Math.sin(progress * Math.PI) * 0.35;
  const rotation = progress * 360;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Flying Bead with Golden Particle Trail */}
      <div
        className="absolute transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl"
        style={{
          left: `${currentX}px`,
          top: `${currentY}px`,
          transform: `translate(-50%, -50%) scale(${currentScale}) rotate(${rotation * 0.5}deg)`
        }}
      >
        <Bead shape={flyingBead.bead.shape} color={flyingBead.bead.color} size={62} disabled />

        {/* Golden Magic Dust Trail Particles */}
        <div className="absolute -inset-2 pointer-events-none flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-yellow-300/80 blur-xs animate-ping" />
        </div>
      </div>
    </div>
  );
};
