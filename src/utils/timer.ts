import { LevelConfig } from '../types/game';

/**
 * Calculates time limits according to requested difficulty tiering:
 * - Seviye 1 - 4: 30 Saniye
 * - Bölüm 2 (Seviye 5 - 10): 35 Saniye
 * - Orta Seviyeler (Seviye 11 - 30): 45 - 55 Saniye
 * - İleri / Usta Seviyeleri (Seviye 31 - 50): Boncuk sayısı ve dizilime göre 65 - 80 Saniye
 */
export function getLevelTimeLimit(level: LevelConfig): number {
  if (level.timeLimitSeconds && level.timeLimitSeconds > 0) {
    return level.timeLimitSeconds;
  }

  const beadCount = level.targetSequence.length;

  // Seviye 1 - 4: 30 Saniye
  if (level.id <= 4) {
    return 30;
  }

  // Bölüm 2 (Seviye 5 - 10): 35 Saniye
  if (level.id <= 10) {
    return 35;
  }

  // Orta Seviyeler (Seviye 11 - 30): 45 - 55 Saniye
  if (level.id <= 20) {
    return 45;
  }
  if (level.id <= 30) {
    return 55;
  }

  // İleri / Usta Seviyeleri (Seviye 31 - 50): 65 - 80 Saniye
  if (level.id <= 40) {
    return Math.min(70, Math.max(65, Math.round(beadCount * 6.5)));
  }
  return Math.min(80, Math.max(70, Math.round(beadCount * 6.2)));
}

/**
 * Calculates earned stars (1-3) based on time taken vs total level time limit.
 */
export function calculateEarnedStars(timeTakenSeconds: number, totalTimeLimit: number): number {
  const ratio = timeTakenSeconds / totalTimeLimit;
  if (ratio <= 0.6) {
    return 3; // Solved in under 60% of time -> 3 stars ⭐⭐⭐
  }
  if (ratio <= 0.88) {
    return 2; // Solved in under 88% of time -> 2 stars ⭐⭐
  }
  return 1; // Solved right at the wire or extended time -> 1 star ⭐
}
