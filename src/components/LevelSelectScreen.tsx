import React, { useState } from 'react';
import { ArrowLeft, Star, Lock, Sparkles, Gamepad2 } from 'lucide-react';
import { LEVEL_DATA } from '../data/levels';
import { PlayerStats } from '../types/game';

interface LevelSelectScreenProps {
  stats: PlayerStats;
  initialTab?: 'MAIN' | 'MEMORY';
  onSelectLevel: (levelId: number, isMemoryMode: boolean) => void;
  onBackToMenu: () => void;
}

export const LevelSelectScreen: React.FC<LevelSelectScreenProps> = ({
  stats,
  initialTab = 'MAIN',
  onSelectLevel,
  onBackToMenu
}) => {
  const [activeTab, setActiveTab] = useState<'MAIN' | 'MEMORY'>(initialTab);

  const isMemory = activeTab === 'MEMORY';
  const highestUnlocked = isMemory
    ? stats.highestUnlockedMemoryLevel || 1
    : stats.highestUnlockedLevel || 1;
  const completedMap = isMemory
    ? stats.completedMemoryLevels || {}
    : stats.completedLevels || {};

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col justify-between h-[100dvh] max-h-[100dvh] p-2.5 sm:p-4 text-[#2D3748] overflow-hidden">
      {/* Top Header */}
      <div className="w-full flex items-center justify-between mb-2">
        <button
          type="button"
          onClick={onBackToMenu}
          className="flex items-center gap-1.5 bg-white/95 hover:bg-amber-50 text-amber-950 font-bold px-3 py-1.5 rounded-2xl transition-colors active:scale-95 shadow-xs cursor-pointer border border-amber-300 backdrop-blur-xs text-xs sm:text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Ana Menü</span>
        </button>

        <div className="flex items-center gap-1 bg-white/95 px-3 py-1.5 rounded-2xl shadow-xs border border-amber-300 backdrop-blur-xs">
          <Star className="w-4 h-4 text-amber-500 fill-amber-400" />
          <span className="text-xs sm:text-sm font-black text-amber-950">
            {stats.totalStars} Yıldız
          </span>
        </div>
      </div>

      {/* Screen Title */}
      <div className="text-center mb-2">
        <h1 className="text-xl sm:text-2xl font-black text-amber-950 tracking-tight flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
          <span>{isMemory ? 'Hafıza Oyunu Bölümleri' : 'Ana Oyun Bölümleri'}</span>
          <Sparkles className="w-5 h-5 text-amber-500 fill-amber-400" />
        </h1>
      </div>

      {/* Mode Selector Tabs (Ana Oyun vs Hafıza Oyunu) */}
      <div className="grid grid-cols-2 gap-2 mb-3 bg-amber-200/60 p-1.5 rounded-2xl border border-amber-300/80 shadow-xs">
        <button
          type="button"
          onClick={() => setActiveTab('MAIN')}
          className={`py-2 px-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            !isMemory
              ? 'bg-white text-amber-950 shadow-md border border-amber-300 scale-102'
              : 'text-amber-900 hover:bg-white/50'
          }`}
        >
          <Gamepad2 className="w-4 h-4 text-amber-600" />
          <span>Ana Oyun (1 - 50)</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('MEMORY')}
          className={`py-2 px-3 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
            isMemory
              ? 'bg-purple-600 text-white shadow-md border border-purple-400 scale-102'
              : 'text-purple-900 hover:bg-white/50'
          }`}
        >
          <span>Hafıza Oyunu</span>
        </button>
      </div>

      {/* Single-Screen 50 Compact Square Buttons Grid */}
      <div className="flex-1 bg-white/80 backdrop-blur-xs rounded-3xl p-2.5 sm:p-3.5 border-2 border-amber-300 shadow-md flex flex-col justify-center">
        <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2">
          {LEVEL_DATA.map((lvl) => {
            const progress = completedMap[lvl.id];
            const isUnlocked = lvl.id <= highestUnlocked;
            const isCurrent = lvl.id === highestUnlocked;
            const starsEarned = progress?.stars || 0;
            const isCompleted = progress?.completed || false;

            return (
              <button
                key={lvl.id}
                type="button"
                disabled={!isUnlocked}
                onClick={() => isUnlocked && onSelectLevel(lvl.id, isMemory)}
                className={`aspect-square rounded-xl sm:rounded-2xl flex flex-col items-center justify-center relative transition-all duration-150 cursor-pointer select-none ${
                  !isUnlocked
                    ? 'bg-amber-100/40 border border-amber-200/50 opacity-50 cursor-not-allowed text-amber-400'
                    : isCompleted
                    ? isMemory
                      ? 'bg-gradient-to-b from-purple-100 to-purple-200 border-2 border-purple-400 text-purple-950 shadow-xs hover:scale-105 active:scale-95'
                      : 'bg-gradient-to-b from-emerald-100 to-emerald-200 border-2 border-emerald-400 text-emerald-950 shadow-xs hover:scale-105 active:scale-95'
                    : isCurrent
                    ? isMemory
                      ? 'bg-gradient-to-b from-purple-200 to-indigo-300 border-2 border-purple-600 text-purple-950 shadow-md ring-2 ring-purple-400/80 animate-gentle-bounce'
                      : 'bg-gradient-to-b from-amber-200 to-yellow-300 border-2 border-amber-500 text-amber-950 shadow-md ring-2 ring-amber-400/80 animate-gentle-bounce'
                    : 'bg-gradient-to-b from-white to-amber-50 border-2 border-amber-300 text-amber-950 shadow-xs hover:scale-105 active:scale-95'
                }`}
                title={`Seviye ${lvl.id}: ${lvl.title}`}
              >
                {/* Level Number */}
                <span className="text-xs sm:text-sm font-black leading-none">
                  {lvl.id}
                </span>

                {/* Status Indicator: Stars or Lock */}
                {!isUnlocked ? (
                  <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-700/60 mt-0.5" />
                ) : isCompleted ? (
                  <div className="flex items-center gap-0.2 mt-0.5">
                    {Array.from({ length: Math.min(3, starsEarned || 3) }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-2 h-2 ${isMemory ? 'text-purple-600 fill-purple-400' : 'text-amber-600 fill-amber-500'}`}
                      />
                    ))}
                  </div>
                ) : (
                  <span className="text-[7px] font-black text-amber-800 leading-none mt-0.5">
                    Yeni
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Hint */}
      <div className="text-center mt-2">
        <span className="text-[11px] font-bold text-amber-900 bg-white/80 px-3 py-1 rounded-full border border-amber-200 shadow-xs">
          Oynamak istediğin seviye karesine dokun!
        </span>
      </div>
    </div>
  );
};
