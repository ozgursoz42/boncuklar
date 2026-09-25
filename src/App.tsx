import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Play, Settings, Grid, Sparkles, Brain, RotateCcw, ArrowLeft, Box } from 'lucide-react';
import { ScreenMode, PlayerStats, BeadDefinition } from './types/game';
import { LEVEL_DATA } from './data/levels';
import { Bead } from './components/Bead';
import { TargetPatternCard } from './components/TargetPatternCard';
import { BeadString } from './components/BeadString';
import { BeadBoxes4 } from './components/BeadBoxes4';
import { Table3D } from './components/Table3D';
import { PlayroomBackground } from './components/PlayroomBackground';
import { FlyingBeadOverlay, FlyingBeadInfo } from './components/FlyingBeadOverlay';
import { VictoryModal } from './components/VictoryModal';
import { SettingsModal } from './components/SettingsModal';
import { LevelSelectScreen } from './components/LevelSelectScreen';
import { LevelTimerBar } from './components/LevelTimerBar';
import { TimeUpModal } from './components/TimeUpModal';
import { soundManager } from './utils/audio';
import { getLevelTimeLimit, calculateEarnedStars } from './utils/timer';

const STORAGE_KEY = 'renkli_boncuk_macerasi_save_v1';

const DEFAULT_STATS: PlayerStats = {
  completedLevels: {},
  highestUnlockedLevel: 1,
  completedMemoryLevels: {},
  highestUnlockedMemoryLevel: 1,
  totalStars: 0,
  creativeNecklaces: [],
  soundEnabled: true,
  musicEnabled: true,
  toddlerHints: true,
  timerEnabled: true,
  mode3DEnabled: true
};

export default function App() {
  // Application State
  const [stats, setStats] = useState<PlayerStats>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return { ...DEFAULT_STATS, ...JSON.parse(saved) };
      }
    } catch {
      // Fallback
    }
    return DEFAULT_STATS;
  });

  const [screen, setScreen] = useState<ScreenMode>('MAIN_MENU');
  const [currentLevelId, setCurrentLevelId] = useState<number>(1);
  const [placedBeads, setPlacedBeads] = useState<BeadDefinition[]>([]);
  const [isVictory, setIsVictory] = useState<boolean>(false);
  const [isSuccessGlow, setIsSuccessGlow] = useState<boolean>(false);
  const [isErrorGlow, setIsErrorGlow] = useState<boolean>(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);
  const [hintActive, setHintActive] = useState<boolean>(false);
  const [hintBead, setHintBead] = useState<BeadDefinition | null>(null);
  const [is3DView, setIs3DView] = useState<boolean>(true);
  const [lastPlacedIndex, setLastPlacedIndex] = useState<number | null>(null);
  const [flyingBead, setFlyingBead] = useState<FlyingBeadInfo | null>(null);

  // Level timer states
  const [timeLeft, setTimeLeft] = useState<number>(80);
  const [totalTimeLimit, setTotalTimeLimit] = useState<number>(80);
  const [isTimeUpModalOpen, setIsTimeUpModalOpen] = useState<boolean>(false);
  const [timeTakenSeconds, setTimeTakenSeconds] = useState<number>(0);
  const [earnedStars, setEarnedStars] = useState<number>(3);

  // References to string slot elements for accurate flying bead coordinates
  const slotElementsRef = useRef<Map<number, HTMLDivElement>>(new Map());

  // Memory mode states
  const [isMemoryMode, setIsMemoryMode] = useState<boolean>(false);
  const [isMemoryHidden, setIsMemoryHidden] = useState<boolean>(false);
  const [countdownSeconds, setCountdownSeconds] = useState<number>(0);

  // Victory check timer ref
  const victoryTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Save stats to localStorage on update
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch {
      // storage error
    }
  }, [stats]);

  // Sync audio manager & 3D view with saved settings
  useEffect(() => {
    soundManager.setSoundEnabled(stats.soundEnabled);
    soundManager.setMusicEnabled(stats.musicEnabled);
    setIs3DView(stats.mode3DEnabled !== false);
  }, [stats.soundEnabled, stats.musicEnabled, stats.mode3DEnabled]);

  // Current Level Config
  const currentLevel = LEVEL_DATA.find((l) => l.id === currentLevelId) || LEVEL_DATA[0];

  // Level completion logic
  const handleLevelComplete = useCallback(() => {
    setIsVictory(true);
    setIsSuccessGlow(true);
    setIsErrorGlow(false);

    const timeSpent = Math.max(1, totalTimeLimit - timeLeft);
    setTimeTakenSeconds(timeSpent);
    const computedStars = stats.timerEnabled !== false
      ? calculateEarnedStars(timeSpent, totalTimeLimit)
      : 3;
    setEarnedStars(computedStars);

    setStats((prev) => {
      if (isMemoryMode) {
        // Separate memory game level progress
        const existingMemory = prev.completedMemoryLevels?.[currentLevelId];
        const prevMemoryStars = existingMemory?.stars || 0;
        const starDiff = Math.max(0, computedStars - prevMemoryStars);

        const nextMemoryUnlocked = Math.max(
          prev.highestUnlockedMemoryLevel || 1,
          Math.min(50, currentLevelId + 1)
        );

        return {
          ...prev,
          highestUnlockedMemoryLevel: nextMemoryUnlocked,
          totalStars: prev.totalStars + starDiff,
          completedMemoryLevels: {
            ...(prev.completedMemoryLevels || {}),
            [currentLevelId]: {
              stars: Math.max(prevMemoryStars, computedStars),
              completed: true,
              bestTimeSeconds: existingMemory?.bestTimeSeconds
                ? Math.min(existingMemory.bestTimeSeconds, timeSpent)
                : timeSpent,
              attempts: (existingMemory?.attempts || 0) + 1
            }
          }
        };
      } else {
        // Main game level progress
        const existing = prev.completedLevels[currentLevelId];
        const prevStars = existing?.stars || 0;
        const starDiff = Math.max(0, computedStars - prevStars);

        const nextUnlocked = Math.max(
          prev.highestUnlockedLevel,
          Math.min(50, currentLevelId + 1)
        );

        return {
          ...prev,
          highestUnlockedLevel: nextUnlocked,
          totalStars: prev.totalStars + starDiff,
          completedLevels: {
            ...prev.completedLevels,
            [currentLevelId]: {
              stars: Math.max(prevStars, computedStars),
              completed: true,
              bestTimeSeconds: existing?.bestTimeSeconds
                ? Math.min(existing.bestTimeSeconds, timeSpent)
                : timeSpent,
              attempts: (existing?.attempts || 0) + 1
            }
          }
        };
      }
    });
  }, [currentLevelId, totalTimeLimit, timeLeft, stats.timerEnabled, isMemoryMode]);

  // Placement Lock & Debounce Refs to prevent unintended double bead placement
  const isPlacementInProgressRef = useRef<boolean>(false);
  const lastPlacementTimeRef = useRef<number>(0);

  // Reset play state when level changes
  const startLevel = useCallback((levelId: number, memoryMode: boolean = false) => {
    if (victoryTimerRef.current) {
      clearTimeout(victoryTimerRef.current);
      victoryTimerRef.current = null;
    }

    const targetLvl = LEVEL_DATA.find((l) => l.id === levelId) || LEVEL_DATA[0];
    const initialLimit = getLevelTimeLimit(targetLvl);
    setTotalTimeLimit(initialLimit);
    setTimeLeft(initialLimit);
    setIsTimeUpModalOpen(false);
    setTimeTakenSeconds(0);
    setEarnedStars(3);

    isPlacementInProgressRef.current = false;
    setCurrentLevelId(levelId);
    setPlacedBeads([]);
    setIsVictory(false);
    setIsSuccessGlow(false);
    setIsErrorGlow(false);
    setHintActive(false);
    setHintBead(null);
    setLastPlacedIndex(null);
    setFlyingBead(null);
    slotElementsRef.current.clear();
    setIsMemoryMode(memoryMode);

    if (memoryMode) {
      setIsMemoryHidden(false);
      setCountdownSeconds(4);
    } else {
      setIsMemoryHidden(false);
      setCountdownSeconds(0);
    }

    setScreen('PLAYING');
  }, []);

  // Level timer countdown effect
  useEffect(() => {
    if (
      screen !== 'PLAYING' ||
      stats.timerEnabled === false ||
      isVictory ||
      isSuccessGlow ||
      isTimeUpModalOpen ||
      isSettingsOpen
    ) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          soundManager.playTimeUp();
          setIsTimeUpModalOpen(true);
          return 0;
        }
        if (prev <= 6 && prev > 1) {
          soundManager.playTimerTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [screen, stats.timerEnabled, isVictory, isSuccessGlow, isTimeUpModalOpen, isSettingsOpen]);

  // Memory countdown timer
  useEffect(() => {
    if (isMemoryMode && countdownSeconds > 0) {
      const timer = setTimeout(() => {
        setCountdownSeconds((prev) => {
          if (prev <= 1) {
            setIsMemoryHidden(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isMemoryMode, countdownSeconds]);

  // Auto toddler hint after 6 seconds of inactivity
  useEffect(() => {
    if (!stats.toddlerHints || screen !== 'PLAYING' || isVictory) return;
    const targetIdx = placedBeads.length;
    if (targetIdx >= currentLevel.targetSequence.length) return;

    const timer = setTimeout(() => {
      const needed = currentLevel.targetSequence[targetIdx];
      setHintBead(needed);
    }, 6000);

    return () => clearTimeout(timer);
  }, [stats.toddlerHints, screen, isVictory, placedBeads.length, currentLevel]);

  // Check sequence validity whenever placedBeads changes (1s delay + green light if correct, red light if wrong)
  useEffect(() => {
    if (victoryTimerRef.current) {
      clearTimeout(victoryTimerRef.current);
      victoryTimerRef.current = null;
    }

    // Only validate when the entire string is filled
    if (placedBeads.length === currentLevel.targetSequence.length && placedBeads.length > 0) {
      const isAllCorrect = placedBeads.every(
        (b, i) =>
          b.shape === currentLevel.targetSequence[i].shape &&
          b.color === currentLevel.targetSequence[i].color
      );

      if (isAllCorrect) {
        // Correct sequence: turn on green glowing frame immediately, pause timer, wait 350ms for smooth transition
        setIsSuccessGlow(true);
        setIsErrorGlow(false);
        victoryTimerRef.current = setTimeout(() => {
          handleLevelComplete();
        }, 350);
      } else {
        // Incorrect sequence: show RED glowing frame as requested
        setIsSuccessGlow(false);
        setIsErrorGlow(true);
      }
    } else {
      setIsSuccessGlow(false);
      setIsErrorGlow(false);
    }
  }, [placedBeads, currentLevel, handleLevelComplete]);

  // Commit bead placement with crisp tactile "şık-tık" snap sound
  const commitBeadPlacement = useCallback((bead: BeadDefinition, targetIdx: number) => {
    soundManager.playBeadSnap(targetIdx);

    setPlacedBeads((prev) => {
      if (prev.length >= currentLevel.targetSequence.length) return prev;
      return [...prev, bead];
    });

    setHintBead(null);
    setLastPlacedIndex(targetIdx);

    setTimeout(() => {
      setLastPlacedIndex(null);
      isPlacementInProgressRef.current = false;
    }, 400);
  }, [currentLevel]);

  // Handle Bead Selection / Placement / Flying Animation
  const handleSelectBead = useCallback((
    selectedBead: BeadDefinition,
    targetSlotIndex?: number,
    sourceRect?: DOMRect
  ) => {
    if (isVictory || flyingBead || isSuccessGlow || isPlacementInProgressRef.current) return;

    // Strict double-click & rapid-tap debouncing lock (450ms window)
    const now = Date.now();
    if (now - lastPlacementTimeRef.current < 450) {
      return;
    }
    lastPlacementTimeRef.current = now;
    isPlacementInProgressRef.current = true;

    if (placedBeads.length >= currentLevel.targetSequence.length) {
      isPlacementInProgressRef.current = false;
      return;
    }

    const targetIdx = targetSlotIndex !== undefined && targetSlotIndex === placedBeads.length
      ? targetSlotIndex
      : placedBeads.length;

    const slotEl = slotElementsRef.current.get(targetIdx);

    // If clicked from box and slot position is available, animate flying bead
    if (sourceRect && slotEl) {
      soundManager.playBeadSelect();
      const slotRect = slotEl.getBoundingClientRect();
      const startX = sourceRect.left + sourceRect.width / 2;
      const startY = sourceRect.top + sourceRect.height / 2;
      const targetX = slotRect.left + slotRect.width / 2;
      const targetY = slotRect.top + slotRect.height / 2;

      setFlyingBead({
        bead: selectedBead,
        startX,
        startY,
        targetX,
        targetY
      });
    } else {
      // Direct placement
      commitBeadPlacement(selectedBead, targetIdx);
    }
  }, [isVictory, flyingBead, isSuccessGlow, placedBeads.length, currentLevel, commitBeadPlacement]);

  // Flying bead animation completion callback
  const handleFlyingBeadComplete = useCallback(() => {
    if (flyingBead) {
      const beadToPlace = flyingBead.bead;
      setFlyingBead(null);
      commitBeadPlacement(beadToPlace, placedBeads.length);
    } else {
      isPlacementInProgressRef.current = false;
    }
  }, [flyingBead, placedBeads.length, commitBeadPlacement]);

  // Remove a bead
  const handleRemoveBead = (index: number) => {
    if (victoryTimerRef.current) {
      clearTimeout(victoryTimerRef.current);
      victoryTimerRef.current = null;
    }
    setIsSuccessGlow(false);
    setIsErrorGlow(false);
    soundManager.playRemoveBead();
    const updated = placedBeads.filter((_, i) => i !== index);
    setPlacedBeads(updated);
    setHintBead(null);
  };

  // Clear entire string
  const handleClearAll = () => {
    if (victoryTimerRef.current) {
      clearTimeout(victoryTimerRef.current);
      victoryTimerRef.current = null;
    }
    setIsSuccessGlow(false);
    setIsErrorGlow(false);
    soundManager.playRemoveBead();
    setPlacedBeads([]);
    setHintBead(null);
  };

  // Next level handler
  const handleNextLevel = () => {
    if (currentLevelId < 50) {
      startLevel(currentLevelId + 1, isMemoryMode);
    } else {
      setScreen('LEVEL_SELECT');
    }
  };

  // Manual hint button
  const handleShowHint = () => {
    const targetIdx = placedBeads.length;
    if (targetIdx < currentLevel.targetSequence.length) {
      const needed = currentLevel.targetSequence[targetIdx];
      setHintBead(needed);
    }
  };

  // Update Settings
  const handleUpdateStats = (newPartial: Partial<PlayerStats>) => {
    setStats((prev) => ({ ...prev, ...newPartial }));
  };

  // Reset Progress
  const handleResetProgress = () => {
    setStats({
      ...DEFAULT_STATS,
      soundEnabled: stats.soundEnabled,
      musicEnabled: stats.musicEnabled
    });
    setCurrentLevelId(1);
    setIsSettingsOpen(false);
  };

  // Determine if side-by-side layout should be used (Level 5+ or bracelet/necklace)
  const isSideBySide = currentLevel.id >= 5 || currentLevel.jewelryType === 'bracelet' || currentLevel.jewelryType === 'necklace';

  // RENDER ROUTING
  if (screen === 'LEVEL_SELECT') {
    return (
      <div className="relative min-h-screen">
        <PlayroomBackground />
        <LevelSelectScreen
          stats={stats}
          onSelectLevel={(id, memoryMode) => startLevel(id, memoryMode)}
          onBackToMenu={() => setScreen('MAIN_MENU')}
        />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between p-2.5 sm:p-4 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto text-[#2D3748] relative">
      {/* 1. Fullscreen 3D Pixar High-Res Playroom Background */}
      <PlayroomBackground />

      {/* 2. Flying Bead Overlay Animation */}
      <FlyingBeadOverlay
        flyingBead={flyingBead}
        onAnimationComplete={handleFlyingBeadComplete}
      />

      {/* ========================================================================= */}
      {/* MAIN MENU SCREEN */}
      {/* ========================================================================= */}
      {screen === 'MAIN_MENU' && (
        <div className="w-full flex-1 flex flex-col items-center justify-between py-2 text-center z-10">
          {/* 3D Table Preview Header in Main Menu */}
          <div className="my-auto py-2 flex flex-col items-center w-full">
            {/* 3D Wooden Mini Table Stage for Intro */}
            <div className="w-full max-w-md scene-3d-wrapper mb-3">
              <div className={`table-surface-3d ${is3DView ? 'view-3d' : 'view-flat'} wooden-tabletop p-4 border-3 border-[#F3D19E] flex items-center justify-center gap-2 relative transition-all duration-300`}>
                <Bead shape="star" color="yellow" size={44} isPlaced />
                <Bead shape="heart" color="red" size={44} isPlaced />
                <Bead shape="flower" color="pink" size={44} isPlaced />
                <Bead shape="round" color="cyan" size={44} isPlaced />
                <Bead shape="diamond" color="purple" size={44} isPlaced />
              </div>
            </div>

            {/* Game Main Title - Handwritten 3D Pixar Gradient with Pure White Shadow */}
            <div className="w-full text-center px-4 py-1 my-1 flex flex-col items-center justify-center select-none">
              <h1 className="text-5xl sm:text-6xl md:text-7xl text-center title-pixar-handwritten-3d tracking-normal leading-tight">
                Boncuklar
              </h1>
              {/* Subtitle & Level Progress Side-by-Side */}
              <div className="flex items-center justify-center gap-2 mt-1 flex-wrap">
                <span className="text-xs sm:text-sm font-black text-amber-950 bg-white/90 backdrop-blur-xs px-4 py-1.5 rounded-full border border-amber-300 shadow-xs inline-flex items-center justify-center">
                  Boncukları Diz
                </span>
                <span className="text-xs sm:text-sm font-black text-amber-950 bg-amber-100/95 backdrop-blur-xs px-4 py-1.5 rounded-full border border-amber-300 shadow-xs inline-flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-500 fill-amber-400 inline" />
                  <span>Seviye {stats.highestUnlockedLevel} / 50</span>
                </span>
              </div>
            </div>

            {/* Unified Vertical Stack of All 4 Main Buttons - Same Dimensions */}
            <div className="mt-2.5 w-full px-5 max-w-sm flex flex-col gap-2.5">
              {/* 1. OYNA */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  startLevel(stats.highestUnlockedLevel, false);
                }}
                className="w-full h-14 sm:h-16 rounded-3xl text-white font-black text-xl sm:text-2xl btn-game-green tracking-wider uppercase cursor-pointer flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl"
              >
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-white stroke-none" />
                <span>OYNA</span>
              </button>

              {/* 2. HAFIZA OYUNU */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  startLevel(stats.highestUnlockedMemoryLevel || 1, true);
                }}
                className="w-full h-14 sm:h-16 rounded-3xl text-white font-black text-xl sm:text-2xl btn-game-purple tracking-wider uppercase cursor-pointer flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl"
              >
                <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.5]" />
                <span>HAFIZA OYUNU</span>
              </button>

              {/* 3. BÖLÜMLER */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setScreen('LEVEL_SELECT');
                }}
                className="w-full h-14 sm:h-16 rounded-3xl text-white font-black text-xl sm:text-2xl btn-game-yellow tracking-wider uppercase cursor-pointer flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl"
              >
                <Grid className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.5]" />
                <span>BÖLÜMLER</span>
              </button>

              {/* 4. AYARLAR */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsSettingsOpen(true);
                }}
                className="w-full h-14 sm:h-16 rounded-3xl text-white font-black text-xl sm:text-2xl btn-game-blue tracking-wider uppercase cursor-pointer flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-xl"
              >
                <Settings className="w-7 h-7 sm:w-8 sm:h-8 text-white stroke-[2.5]" />
                <span>AYARLAR</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. ACTIVE 3D TABLE GAMEPLAY SCREEN */}
      {/* ========================================================================= */}
      {screen === 'PLAYING' && (
        <div className="w-full flex-1 flex flex-col justify-between z-10">
          {/* Top In-Game Bar with Icon-only 3D View Toggle next to Settings */}
          <div className="w-full flex items-center justify-between mb-1">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setScreen('MAIN_MENU');
              }}
              className="p-2 rounded-2xl bg-white/95 border border-amber-300 text-amber-950 flex items-center gap-1 text-xs font-black shadow-xs active:scale-95 cursor-pointer backdrop-blur-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Menü</span>
            </button>

            {/* Level Badge */}
            <div className={`flex flex-col items-center backdrop-blur-xs px-3.5 py-0.5 rounded-2xl border shadow-xs ${
              isMemoryMode
                ? 'bg-purple-100/95 border-purple-400 text-purple-950'
                : 'bg-white/90 border-amber-300 text-amber-950'
            }`}>
              <span className="text-sm font-black flex items-center gap-1">
                <span>{isMemoryMode ? 'Hafıza' : ''} Seviye {currentLevel.id}</span>
              </span>
              <span className={`text-[10px] font-bold ${isMemoryMode ? 'text-purple-800' : 'text-amber-800'}`}>
                {currentLevel.title}
              </span>
            </div>

            {/* Action Buttons: Restart, 3D Table Angle Icon, Settings */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  handleClearAll();
                }}
                className="p-2 rounded-2xl bg-white/95 border border-amber-300 text-amber-900 shadow-xs hover:bg-amber-50 active:scale-95 cursor-pointer backdrop-blur-xs"
                title="Yeniden Başla"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              {/* 3D Masa Açısı Icon Only Button */}
              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setStats((prev) => ({
                    ...prev,
                    mode3DEnabled: prev.mode3DEnabled === false ? true : false
                  }));
                }}
                className={`p-2 rounded-2xl border shadow-xs active:scale-95 cursor-pointer backdrop-blur-xs transition-colors ${
                  is3DView
                    ? 'bg-amber-200 border-amber-400 text-amber-950'
                    : 'bg-white/95 border-amber-300 text-amber-800'
                }`}
                title="3D Masa Görünümü (Açık/Kapalı)"
              >
                <Box className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  setIsSettingsOpen(true);
                }}
                className="p-2 rounded-2xl bg-white/95 border border-amber-300 text-amber-900 shadow-xs hover:bg-amber-50 active:scale-95 cursor-pointer backdrop-blur-xs"
                title="Ayarlar"
              >
                <Settings className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Child Tip / Instruction */}
          {currentLevel.tip && (
            <div className="text-center my-0.5 px-2">
              <span className="text-[11px] font-bold text-amber-950 bg-amber-200/90 border border-amber-300 px-3.5 py-0.5 rounded-full inline-block shadow-xs">
                💡 {currentLevel.tip}
              </span>
            </div>
          )}

          {/* Full-width Level Timer Bar directly under the instruction tip */}
          {stats.timerEnabled !== false && (
            <div className="w-full my-1">
              <LevelTimerBar
                timeLeft={timeLeft}
                totalTime={totalTimeLimit}
                isWarning={timeLeft <= 10}
              />
            </div>
          )}

          {/* 3D Wooden Table Play Arena */}
          <Table3D is3DView={is3DView}>
            {/* Side-by-side or stacked layout based on level (from Level 5+: Side by Side) */}
            {isSideBySide ? (
              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                {/* Left: Target Pattern Card with dynamic "Seviye X" title */}
                <TargetPatternCard
                  targetSequence={currentLevel.targetSequence}
                  currentPlacementIndex={placedBeads.length}
                  levelNumber={currentLevel.id}
                  chapterTitle={currentLevel.chapterName}
                  jewelryType={currentLevel.jewelryType}
                  isSideBySide={true}
                  isMemoryMode={isMemoryMode}
                  isMemoryHidden={isMemoryHidden}
                  countdownSeconds={countdownSeconds}
                  onTogglePeek={() => {
                    soundManager.playClick();
                    setIsMemoryHidden(!isMemoryHidden);
                  }}
                />

                {/* Right: Player's String with "Senin:" title & Green Glow (Success) / Red Glow (Error) */}
                <BeadString
                  totalSlots={currentLevel.targetSequence.length}
                  placedBeads={placedBeads}
                  onRemoveBead={handleRemoveBead}
                  onClearAll={handleClearAll}
                  isCompleted={isVictory}
                  isSuccessGlow={isSuccessGlow}
                  isErrorGlow={isErrorGlow}
                  jewelryType={currentLevel.jewelryType}
                  isSideBySide={true}
                  lastPlacedIndex={lastPlacedIndex}
                  registerSlotRef={(idx, el) => {
                    if (el) slotElementsRef.current.set(idx, el);
                    else slotElementsRef.current.delete(idx);
                  }}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-2.5 w-full">
                {/* 1. Target Pattern Card */}
                <TargetPatternCard
                  targetSequence={currentLevel.targetSequence}
                  currentPlacementIndex={placedBeads.length}
                  levelNumber={currentLevel.id}
                  chapterTitle={currentLevel.chapterName}
                  jewelryType={currentLevel.jewelryType}
                  isSideBySide={false}
                  isMemoryMode={isMemoryMode}
                  isMemoryHidden={isMemoryHidden}
                  countdownSeconds={countdownSeconds}
                  onTogglePeek={() => {
                    soundManager.playClick();
                    setIsMemoryHidden(!isMemoryHidden);
                  }}
                />

                {/* 2. Player's String with Green Glow (Success) / Red Glow (Error) */}
                <BeadString
                  totalSlots={currentLevel.targetSequence.length}
                  placedBeads={placedBeads}
                  onRemoveBead={handleRemoveBead}
                  onClearAll={handleClearAll}
                  isCompleted={isVictory}
                  isSuccessGlow={isSuccessGlow}
                  isErrorGlow={isErrorGlow}
                  jewelryType={currentLevel.jewelryType}
                  isSideBySide={false}
                  lastPlacedIndex={lastPlacedIndex}
                  registerSlotRef={(idx, el) => {
                    if (el) slotElementsRef.current.set(idx, el);
                    else slotElementsRef.current.delete(idx);
                  }}
                />
              </div>
            )}

            {/* 3. Wooden Bead Boxes (Always 4 per row, wrapping if > 4, title "Boncuklar", dynamically decreasing stack) */}
            <BeadBoxes4
              availableBeads={currentLevel.availableBeads}
              targetSequence={currentLevel.targetSequence}
              placedBeads={placedBeads}
              onSelectBead={handleSelectBead}
              hintBead={hintBead}
              onShowHint={handleShowHint}
              isCompleted={isVictory}
            />
          </Table3D>
        </div>
      )}

      {/* Victory Celebration Modal */}
      {isVictory && (
        <VictoryModal
          levelNumber={currentLevelId}
          stars={earnedStars}
          completionTimeSeconds={timeTakenSeconds}
          onNextLevel={handleNextLevel}
          onReplayLevel={() => startLevel(currentLevelId, isMemoryMode)}
          onLevelSelect={() => setScreen('LEVEL_SELECT')}
          hasNextLevel={currentLevelId < 50}
        />
      )}

      {/* Time Up Modal */}
      {isTimeUpModalOpen && (
        <TimeUpModal
          levelNumber={currentLevelId}
          onRestart={() => startLevel(currentLevelId, isMemoryMode)}
          onAddExtraTime={() => {
            soundManager.playClick();
            setTimeLeft(15);
            setTotalTimeLimit((prev) => prev + 15);
            setIsTimeUpModalOpen(false);
          }}
          onLevelSelect={() => setScreen('LEVEL_SELECT')}
        />
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <SettingsModal
          stats={stats}
          onUpdateStats={handleUpdateStats}
          onResetProgress={handleResetProgress}
          onClose={() => setIsSettingsOpen(false)}
        />
      )}
    </div>
  );
}
