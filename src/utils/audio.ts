import { BeadColor, BeadShape } from '../types/game';

// Web Audio API Synthesizer for high-performance child-friendly game sounds
class SoundManager {
  private ctx: AudioContext | null = null;
  private soundEnabled: boolean = true;
  private musicEnabled: boolean = true;
  private musicInterval: number | null = null;
  private isMusicPlaying: boolean = false;

  constructor() {
    // AudioContext will be initialized on first user interaction
  }

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setSoundEnabled(val: boolean) {
    this.soundEnabled = val;
  }

  public setMusicEnabled(val: boolean) {
    this.musicEnabled = val;
    if (!val) {
      this.stopMusic();
    } else {
      this.startMusic();
    }
  }

  public isSoundOn() { return this.soundEnabled; }
  public isMusicOn() { return this.musicEnabled; }

  // Pure musical scale note sound when placing or selecting a bead (no extra click/snap noise)
  public playBeadSnap(index: number = 0) {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const scale = [523.25, 587.33, 659.25, 783.99, 880.0, 987.77, 1046.50, 1174.66, 1318.51];
    const pitch = scale[Math.min(index, scale.length - 1)] || 659.25;
    const now = ctx.currentTime;

    // Pure, warm musical chime note
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(pitch, now);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.32);
  }

  // Pure musical note sound on bead select (no noise/click sound)
  public playBeadSelect() {
    this.playBeadSnap(0);
  }

  // Gentle removal sound
  public playRemoveBead() {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, now);
    osc.frequency.exponentialRampToValueAtTime(320, now + 0.1);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.14);
  }

  // Friendly soft error sound (never harsh)
  public playError() {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(240, now);
    osc.frequency.setValueAtTime(200, now + 0.08);

    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // UI button click
  public playClick() {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(700, now);
    osc.frequency.exponentialRampToValueAtTime(1050, now + 0.04);

    gain.gain.setValueAtTime(0.14, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.06);
  }

  // Gentle, subtle victory chime
  public playSuccess() {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const chimeNotes = [523.25, 659.25, 783.99, 1046.50];

    chimeNotes.forEach((freq, idx) => {
      const noteTime = now + idx * 0.12;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, noteTime);

      gain.gain.setValueAtTime(0, noteTime);
      gain.gain.linearRampToValueAtTime(0.12, noteTime + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, noteTime + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(noteTime);
      osc.stop(noteTime + 0.48);
    });
  }

  // Soft warning tick sound when timer is under 5 seconds
  public playTimerTick() {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(880, now); // A5 woodblock click
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.09);
  }

  // Time's up sound effect (gentle child-friendly descending chime)
  public playTimeUp() {
    if (!this.soundEnabled) return;
    const ctx = this.getContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const notes = [
      { freq: 587.33, time: 0 },
      { freq: 493.88, time: 0.15 },
      { freq: 392.00, time: 0.3 }
    ];

    notes.forEach((n) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(n.freq, now + n.time);

      gain.gain.setValueAtTime(0.2, now + n.time);
      gain.gain.exponentialRampToValueAtTime(0.001, now + n.time + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now + n.time);
      osc.stop(now + n.time + 0.28);
    });
  }

  // Ultra-soft, warm & soothing acoustic background lullaby harmony
  public startMusic() {
    if (!this.musicEnabled || this.isMusicPlaying) return;
    this.isMusicPlaying = true;

    // Gentle low-mid chord progression (Cmaj7 -> Am7 -> Fmaj7 -> G6)
    // All notes kept below 400Hz for maximum ear comfort with zero high-frequency harshness
    const sequence = [
      // Bar 1: Cmaj7
      { root: 130.81, melody: [261.63, 329.63, 392.00, 329.63] },
      // Bar 2: Am7
      { root: 110.00, melody: [220.00, 261.63, 329.63, 261.63] },
      // Bar 3: Fmaj7
      { root: 87.31,  melody: [174.61, 220.00, 261.63, 220.00] },
      // Bar 4: G6
      { root: 98.00,  melody: [196.00, 246.94, 293.66, 246.94] },
    ];

    let step = 0;
    const tempoMs = 600; // Soothing, relaxed slow pace

    this.musicInterval = window.setInterval(() => {
      if (!this.musicEnabled) {
        this.stopMusic();
        return;
      }
      const ctx = this.getContext();
      if (!ctx) return;

      const chordIndex = Math.floor(step / 4) % sequence.length;
      const noteIndex = step % 4;
      const chord = sequence[chordIndex];
      const noteFreq = chord.melody[noteIndex];
      const now = ctx.currentTime;

      // Master lowpass filter to completely eliminate high frequencies / harshness
      const lowpass = ctx.createBiquadFilter();
      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(650, now);
      lowpass.connect(ctx.destination);

      // 1. Warm Soft Arpeggio Note
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(noteFreq, now);

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.03, now + 0.12); // Ultra smooth attack
      gain.gain.exponentialRampToValueAtTime(0.0005, now + 1.1); // Long soft tail

      osc.connect(gain);
      gain.connect(lowpass);

      osc.start(now);
      osc.stop(now + 1.15);

      // 2. Deep Warm Bass Note on Beat 1 of Each Bar
      if (noteIndex === 0) {
        const bassOsc = ctx.createOscillator();
        const bassGain = ctx.createGain();

        bassOsc.type = 'triangle';
        bassOsc.frequency.setValueAtTime(chord.root, now);

        bassGain.gain.setValueAtTime(0, now);
        bassGain.gain.linearRampToValueAtTime(0.035, now + 0.15);
        bassGain.gain.exponentialRampToValueAtTime(0.0005, now + 2.2);

        bassOsc.connect(bassGain);
        bassGain.connect(lowpass);

        bassOsc.start(now);
        bassOsc.stop(now + 2.25);
      }

      step++;
    }, tempoMs);
  }

  public stopMusic() {
    this.isMusicPlaying = false;
    if (this.musicInterval !== null) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }
}

export const soundManager = new SoundManager();
