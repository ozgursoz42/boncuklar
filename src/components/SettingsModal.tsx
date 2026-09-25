import React from 'react';
import { Volume2, VolumeX, Music, Lightbulb, RotateCcw, X, Clock, Box } from 'lucide-react';
import { PlayerStats } from '../types/game';

interface SettingsModalProps {
  stats: PlayerStats;
  onUpdateStats: (newStats: Partial<PlayerStats>) => void;
  onResetProgress: () => void;
  onClose: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  stats,
  onUpdateStats,
  onResetProgress,
  onClose
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-gradient-to-b from-[#FFFDF8] to-[#FFF3DC] rounded-3xl p-5 sm:p-6 max-w-sm w-full border-3 border-[#FBBF24] shadow-2xl relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 border-b border-amber-200 pb-3">
          <h2 className="text-xl font-bold text-amber-950">Ayarlar</h2>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Options List */}
        <div className="space-y-3 mb-5">
          {/* 3D Mode Toggle */}
          <div className="flex items-center justify-between p-3 bg-white/70 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <Box className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-900">3D Masa Görünümü</div>
                <div className="text-[10px] text-amber-700/80">
                  {stats.mode3DEnabled !== false ? '3D Açılı Ahşap Masa' : 'Düz 2D Masa Görünümü'}
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onUpdateStats({ mode3DEnabled: stats.mode3DEnabled === false ? true : false })}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                stats.mode3DEnabled !== false ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  stats.mode3DEnabled !== false ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Sound Effects */}
          <div className="flex items-center justify-between p-3 bg-white/70 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                {stats.soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </div>
              <span className="text-sm font-bold text-amber-900">Ses Efektleri</span>
            </div>
            <button
              type="button"
              onClick={() => onUpdateStats({ soundEnabled: !stats.soundEnabled })}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                stats.soundEnabled ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  stats.soundEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Music */}
          <div className="flex items-center justify-between p-3 bg-white/70 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <span className="text-sm font-bold text-amber-900">Neşeli Melodi</span>
            </div>
            <button
              type="button"
              onClick={() => onUpdateStats({ musicEnabled: !stats.musicEnabled })}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                stats.musicEnabled ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  stats.musicEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Toddler Hint Assist */}
          <div className="flex items-center justify-between p-3 bg-white/70 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-yellow-100 text-yellow-800 flex items-center justify-center">
                <Lightbulb className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-900">Otomatik İpucu Yardımı</div>
                <div className="text-[10px] text-amber-700/80">Bekleyince doğru boncuğu gösterir</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onUpdateStats({ toddlerHints: !stats.toddlerHints })}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                stats.toddlerHints ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  stats.toddlerHints ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Timed Mode Toggle */}
          <div className="flex items-center justify-between p-3 bg-white/70 rounded-2xl border border-amber-200">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <div className="text-sm font-bold text-amber-900">Süreli Oyun Modu</div>
                <div className="text-[10px] text-amber-700/80">Bölümlere geri sayım süresi ekler</div>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onUpdateStats({ timerEnabled: !stats.timerEnabled })}
              className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer ${
                stats.timerEnabled ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <div
                className={`w-5 h-5 rounded-full bg-white transition-transform ${
                  stats.timerEnabled ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Reset Button */}
        <div className="pt-2 border-t border-amber-200">
          <button
            type="button"
            onClick={() => {
              if (window.confirm('Tüm seviye ilerlemeni sıfırlamak istediğine emin misin?')) {
                onResetProgress();
              }
            }}
            className="w-full py-2.5 px-3 rounded-2xl bg-red-50 hover:bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>İlerlemeyi Sıfırla</span>
          </button>
        </div>
      </div>
    </div>
  );
};
