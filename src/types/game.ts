export type BeadShape =
  | 'round'
  | 'oval'
  | 'cylinder'
  | 'cube'
  | 'flower'
  | 'star'
  | 'heart'
  | 'diamond';

export type BeadColor =
  | 'red'
  | 'blue'
  | 'yellow'
  | 'green'
  | 'orange'
  | 'purple'
  | 'pink'
  | 'cyan';

export type JewelryType = 'straight' | 'bracelet' | 'necklace';

export interface BeadDefinition {
  shape: BeadShape;
  color: BeadColor;
  id?: string;
}

export interface LevelConfig {
  id: number;
  title: string;
  chapterName: string;
  jewelryType?: JewelryType;
  targetSequence: BeadDefinition[];
  availableBeads: BeadDefinition[];
  tip?: string;
  patternType?:
    | 'color-only'
    | 'shape-only'
    | 'color-shape'
    | 'repeat-ab'
    | 'repeat-aab'
    | 'repeat-abc'
    | 'symmetry'
    | 'rainbow';
  difficultyStars: number;
  timeLimitSeconds?: number;
}

export interface LevelProgress {
  stars: number;
  completed: boolean;
  bestTimeSeconds?: number;
  attempts?: number;
}

export interface PlayerStats {
  completedLevels: Record<number, LevelProgress>;
  highestUnlockedLevel: number;
  completedMemoryLevels: Record<number, LevelProgress>;
  highestUnlockedMemoryLevel: number;
  totalStars: number;
  creativeNecklaces: Array<{
    id: string;
    date: string;
    beads: BeadDefinition[];
    model: string;
  }>;
  soundEnabled: boolean;
  musicEnabled: boolean;
  toddlerHints: boolean;
  timerEnabled: boolean;
  mode3DEnabled?: boolean;
}

export type ScreenMode =
  | 'MAIN_MENU'
  | 'LEVEL_SELECT'
  | 'PLAYING'
  | 'MEMORY_MODE'
  | 'SETTINGS';
