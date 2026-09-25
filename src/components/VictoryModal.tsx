import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Star, RotateCcw, ArrowRight, Grid, Sparkles, Clock } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface VictoryModalProps {
  levelNumber: number;
  stars: number;
  completionTimeSeconds?: number;
  onNextLevel: () => void;
  onReplayLevel: () => void;
  onLevelSelect: () => void;
  hasNextLevel: boolean;
}

export const VictoryModal: React.FC<VictoryModalProps> = ({
  levelNumber,
  stars,
  completionTimeSeconds,
  onNextLevel,
  onReplayLevel,
  onLevelSelect,
  hasNextLevel
}) => {
  useEffect(() => {
    soundManager.playSuccess();

    try {
      confetti({
        particleCount: 90,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F43F5E', '#3B82F6', '#FBBF24', '#10B981', '#F472B6', '#8B5CF6']
      });

      const timer = setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#FBBF24', '#34D399', '#60A5FA', '#F472B6']
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#FBBF24', '#34D399', '#60A5FA', '#F472B6']
        });
      }, 300);

      return () => clearTimeout(timer);
    } catch {
      // Ignore
    }
  }, []);

  const titles = ['HARİKA!', 'MUHTEŞEM!', 'AFERİN SANA!', 'SÜPER DİZDİN!'];
  const celebrationTitle = titles[(levelNumber - 1) % titles.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-pop-in">
      <div className="bg-gradient-to-b from-[#FFFDF8] via-[#FFF8EB] to-[#FEE8B7] rounded-3xl p-6 sm:p-7 max-w-sm w-full border-4 border-[#FBBF24] shadow-2xl text-center relative overflow-hidden">
        {/* Radiance background */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(circle,rgba(245,158,11,1)_0%,transparent_70%)]" />

        {/* Celebration Title */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-amber-950 font-black text-2xl sm:text-3xl px-6 py-2 rounded-2xl shadow-md uppercase tracking-wider mb-2 animate-gentle-bounce">
            <Sparkles className="w-6 h-6 text-amber-900 fill-amber-300" />
            <span>{celebrationTitle}</span>
            <Sparkles className="w-6 h-6 text-amber-900 fill-amber-300" />
          </div>

          <p className="text-sm font-extrabold text-amber-950 mb-4">
            Seviye {levelNumber} Başarıyla Tamamlandı!
          </p>

          {/* 3 Large Animated Solid Glowing Stars */}
          <div className="flex items-center justify-center gap-3 mb-3">
            {[1, 2, 3].map((starIndex) => {
              const isEarned = starIndex <= stars;
              const delay = starIndex * 140;
              return isEarned ? (
                <div
                  key={starIndex}
                  className="transform transition-all duration-300 scale-110 drop-shadow-[0_0_12px_rgba(245,158,11,0.85)] animate-pop-in relative"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id={`starGoldGrad_${starIndex}`} x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#FFF066" />
                        <stop offset="40%" stopColor="#FBBF24" />
                        <stop offset="100%" stopColor="#F59E0B" />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                      fill={`url(#starGoldGrad_${starIndex})`}
                      stroke="#D97706"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    {/* Sparkle Highlight */}
                    <circle cx="10" cy="7" r="1.5" fill="#FFFFFF" opacity="0.95" />
                  </svg>
                </div>
              ) : (
                <div
                  key={starIndex}
                  className="transform transition-all duration-300 scale-90 opacity-60"
                  style={{ animationDelay: `${delay}ms` }}
                >
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="#FEF3C7" stroke="#FDE68A" strokeWidth="1.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                </div>
              );
            })}
          </div>

          {/* Time Badge */}
          {completionTimeSeconds !== undefined && completionTimeSeconds > 0 && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/90 border border-amber-300 rounded-full text-amber-900 font-bold text-xs mb-5 shadow-xs">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>Çözüm Süresi: {completionTimeSeconds} saniye</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5">
            {hasNextLevel ? (
              <button
                type="button"
                onClick={onNextLevel}
                className="w-full py-3.5 px-6 rounded-2xl text-white font-black text-lg btn-game-green flex items-center justify-center gap-2 tracking-wide cursor-pointer transition-transform active:scale-95"
              >
                <span>SONRAKİ SEVİYE</span>
                <ArrowRight className="w-5 h-5 stroke-[3.5]" />
              </button>
            ) : (
              <div className="p-3 bg-amber-100 rounded-2xl text-amber-900 font-bold text-sm">
                🎉 Tüm 50 Seviyeyi Bitirdin! Sen Bir Boncuk Ustasısın!
              </div>
            )}

            <div className="flex items-center gap-2 pt-1">
              <button
                type="button"
                onClick={onReplayLevel}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-amber-100/90 hover:bg-amber-200 text-amber-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-amber-300 shadow-xs"
              >
                <RotateCcw className="w-4 h-4 text-amber-800" />
                <span>Tekrar</span>
              </button>

              <button
                type="button"
                onClick={onLevelSelect}
                className="flex-1 py-2.5 px-3 rounded-2xl bg-amber-100/90 hover:bg-amber-200 text-amber-950 font-black text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-amber-300 shadow-xs"
              >
                <Grid className="w-4 h-4 text-amber-800" />
                <span>Bölümler</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
