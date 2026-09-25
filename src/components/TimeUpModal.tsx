import React from 'react';
import { Hourglass, RotateCcw, PlusCircle, Grid } from 'lucide-react';

interface TimeUpModalProps {
  levelNumber: number;
  onRestart: () => void;
  onAddExtraTime: () => void;
  onLevelSelect: () => void;
}

export const TimeUpModal: React.FC<TimeUpModalProps> = ({
  levelNumber,
  onRestart,
  onAddExtraTime,
  onLevelSelect
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs animate-pop-in">
      <div className="bg-gradient-to-b from-[#FFFDF8] via-[#FFF5F5] to-[#FFE8E8] rounded-3xl p-6 sm:p-7 max-w-sm w-full border-4 border-rose-300 shadow-2xl text-center relative overflow-hidden">
        {/* Radiance background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle,rgba(244,63,94,1)_0%,transparent_70%)]" />

        <div className="relative z-10">
          {/* Animated Clock / Hourglass Badge */}
          <div className="w-16 h-16 mx-auto mb-3 rounded-3xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-rose-600 shadow-md animate-bounce">
            <Hourglass className="w-9 h-9" />
          </div>

          <h2 className="text-2xl font-black text-rose-950 uppercase tracking-wide mb-1">
            Süre Doldu! ⏰
          </h2>

          <p className="text-xs sm:text-sm font-bold text-amber-950/80 mb-5 leading-relaxed">
            Seviye {levelNumber} süresi bitti. Üzülme! Tekrar deneyebilir ya da +15 saniye ekleyip devam edebilirsin.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5">
            {/* +15 Saniye Ekle */}
            <button
              type="button"
              onClick={onAddExtraTime}
              className="w-full py-3 px-5 rounded-2xl text-white font-black text-base btn-game-green flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-95 shadow-md"
            >
              <PlusCircle className="w-5 h-5" />
              <span>+15 Saniye Ekle & Devam Et</span>
            </button>

            {/* Yeniden Başla */}
            <button
              type="button"
              onClick={onRestart}
              className="w-full py-3 px-5 rounded-2xl bg-amber-100 hover:bg-amber-200 border border-amber-300 text-amber-950 font-black text-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-4 h-4 text-amber-800" />
              <span>Yeniden Başla</span>
            </button>

            {/* Bölüm Seçimi */}
            <button
              type="button"
              onClick={onLevelSelect}
              className="w-full py-2.5 px-4 rounded-2xl bg-white/80 hover:bg-white border border-amber-200 text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <Grid className="w-4 h-4 text-amber-700" />
              <span>Bölüm Seçimine Dön</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
