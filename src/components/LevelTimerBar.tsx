import React from 'react';
import { Clock, Hourglass } from 'lucide-react';

interface LevelTimerBarProps {
  timeLeft: number;
  totalTime: number;
  isWarning: boolean;
}

export const LevelTimerBar: React.FC<LevelTimerBarProps> = ({
  timeLeft,
  totalTime,
  isWarning
}) => {
  const percentage = Math.max(0, Math.min(100, (timeLeft / totalTime) * 100));

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime =
    minutes > 0
      ? `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
      : `${seconds}s`;

  return (
    <div
      className={`w-full px-3.5 py-1.5 rounded-2xl border shadow-sm transition-all duration-300 backdrop-blur-xs select-none ${
        isWarning
          ? 'bg-rose-50/95 border-rose-400 text-rose-800 animate-pulse shadow-rose-200'
          : timeLeft <= 20
          ? 'bg-amber-50/95 border-amber-300 text-amber-950'
          : 'bg-white/95 border-amber-300/80 text-amber-950'
      }`}
      title="Bölüm Süresi"
    >
      <div className="flex items-center justify-between gap-2 mb-1">
        <div className="flex items-center gap-1.5">
          {isWarning ? (
            <Hourglass className="w-4 h-4 text-rose-600 animate-spin" />
          ) : (
            <Clock className="w-4 h-4 text-amber-700" />
          )}
          <span className="text-xs font-black tracking-wide uppercase">
            Kalan Süre
          </span>
        </div>

        <span className="text-xs font-black font-mono tracking-wider bg-amber-100/90 text-amber-950 px-2.5 py-0.5 rounded-full border border-amber-200">
          {formattedTime}
        </span>
      </div>

      {/* Full-width Masa Boyu İlerleme Çubuğu */}
      <div className="w-full bg-amber-200/60 h-2.5 rounded-full overflow-hidden p-0.5 border border-amber-300/40">
        <div
          className={`h-full transition-all duration-500 rounded-full ${
            isWarning
              ? 'bg-gradient-to-r from-rose-500 via-red-500 to-rose-600 shadow-sm animate-pulse'
              : timeLeft <= 20
              ? 'bg-gradient-to-r from-amber-400 to-amber-500 shadow-sm'
              : 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 shadow-sm'
          }`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
