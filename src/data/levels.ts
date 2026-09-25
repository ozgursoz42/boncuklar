import { LevelConfig } from '../types/game';

export const LEVEL_DATA: LevelConfig[] = [
  // =========================================================================
  // BÖLÜM 1: DÜZ İP - İLK ADIMLAR (Seviye 1 - 4: En az 4 Boncuk)
  // =========================================================================
  {
    id: 1,
    title: "İlk Renkler",
    chapterName: "Bölüm 1: Düz İp İlk Adımlar",
    jewelryType: 'straight',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'blue' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'green' }
    ],
    tip: "Kırmızı ve mavi boncukları sırayla ipe diz!",
    patternType: 'repeat-ab',
    difficultyStars: 1
  },
  {
    id: 2,
    title: "Güneş ve Gökyüzü",
    chapterName: "Bölüm 1: Düz İp İlk Adımlar",
    jewelryType: 'straight',
    targetSequence: [
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'blue' }
    ],
    availableBeads: [
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'green' }
    ],
    tip: "Sarı ve mavi sırasını takip et!",
    patternType: 'repeat-ab',
    difficultyStars: 1
  },
  {
    id: 3,
    title: "Üçlü Renk Dansı",
    chapterName: "Bölüm 1: Düz İp İlk Adımlar",
    jewelryType: 'straight',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'green' }
    ],
    tip: "Kırmızı, sarı, mavi ve sarı!",
    patternType: 'color-only',
    difficultyStars: 1
  },
  {
    id: 4,
    title: "Dört Renkli İp",
    chapterName: "Bölüm 1: Düz İp İlk Adımlar",
    jewelryType: 'straight',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'orange' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'orange' }
    ],
    tip: "Dört farklı rengi doğru sırayla yerleştir!",
    patternType: 'color-only',
    difficultyStars: 1
  },

  // =========================================================================
  // BÖLÜM 2: HALKA BİLEKLİK DÜNYASI (Seviye 5 - 9: 5 Boncuklu Bileklik)
  // =========================================================================
  {
    id: 5,
    title: "İlk Halka Bileklik",
    chapterName: "Bölüm 2: Halka Bileklik Dünyası",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'pink' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'pink' },
      { shape: 'round', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'pink' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'green' }
    ],
    tip: "Halka bilekliği sarı ve pembe boncuklarla tamamla!",
    patternType: 'repeat-ab',
    difficultyStars: 2
  },
  {
    id: 6,
    title: "Yeşil Yaprak Bilekliği",
    chapterName: "Bölüm 2: Halka Bileklik Dünyası",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'red' }
    ],
    tip: "Yeşil, sarı ve turkuaz bileklik dizilimi!",
    patternType: 'repeat-abc',
    difficultyStars: 2
  },
  {
    id: 7,
    title: "Küp ve Daire Bilekliği",
    chapterName: "Bölüm 2: Halka Bileklik Dünyası",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'cube', color: 'red' },
      { shape: 'round', color: 'blue' },
      { shape: 'cube', color: 'red' },
      { shape: 'round', color: 'blue' },
      { shape: 'cube', color: 'red' }
    ],
    availableBeads: [
      { shape: 'cube', color: 'red' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cube', color: 'green' }
    ],
    tip: "Kırmızı küp ve mavi daire sırası!",
    patternType: 'repeat-ab',
    difficultyStars: 2
  },
  {
    id: 8,
    title: "Yıldızlı Bileklik",
    chapterName: "Bölüm 2: Halka Bileklik Dünyası",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'pink' },
      { shape: 'round', color: 'cyan' }
    ],
    tip: "Sarı yıldızlar ve mor boncuklar!",
    patternType: 'repeat-ab',
    difficultyStars: 2
  },
  {
    id: 9,
    title: "Çiçekli Pembe Bileklik",
    chapterName: "Bölüm 2: Halka Bileklik Dünyası",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'flower', color: 'pink' },
      { shape: 'round', color: 'green' },
      { shape: 'flower', color: 'pink' },
      { shape: 'round', color: 'green' },
      { shape: 'flower', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'flower', color: 'pink' },
      { shape: 'round', color: 'green' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'round', color: 'purple' }
    ],
    tip: "Pembe çiçek ve taze yeşil yapraklar!",
    patternType: 'repeat-ab',
    difficultyStars: 2
  },

  // =========================================================================
  // BÖLÜM 3: GELİŞMİŞ HALKA BİLEKLİKLER (Seviye 10 - 19: Her Seviyede +1 Boncuk Artışı)
  // =========================================================================
  {
    id: 10,
    title: "6'lı Kalp Bilekliği",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'heart', color: 'red' },
      { shape: 'round', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'round', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'round', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'heart', color: 'red' },
      { shape: 'round', color: 'pink' },
      { shape: 'heart', color: 'pink' },
      { shape: 'round', color: 'purple' }
    ],
    tip: "10. seviye: 6 boncuklu halka bileklik!",
    patternType: 'repeat-ab',
    difficultyStars: 3
  },
  {
    id: 11,
    title: "6'lı Yıldız ve Elmas",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'blue' },
      { shape: 'diamond', color: 'purple' }
    ],
    tip: "Parlayan yıldızlar ve turkuaz elmaslar!",
    patternType: 'repeat-ab',
    difficultyStars: 3
  },
  {
    id: 12,
    title: "7'li Üçgen Ritim",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'cube', color: 'orange' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cube', color: 'orange' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cube', color: 'orange' }
    ],
    availableBeads: [
      { shape: 'cube', color: 'orange' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cylinder', color: 'green' }
    ],
    tip: "7 boncuk: Turuncu küp, mavi silindir ve sarı boncuk!",
    patternType: 'repeat-abc',
    difficultyStars: 3
  },
  {
    id: 13,
    title: "7'li Gökkuşağı Halka",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'orange' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'purple' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'orange' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'purple' }
    ],
    tip: "7 renkli gökkuşağı bileklik dizilimi!",
    patternType: 'rainbow',
    difficultyStars: 3
  },
  {
    id: 14,
    title: "8'li Çift Renk Bileklik",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'pink' },
      { shape: 'round', color: 'purple' },
      { shape: 'round', color: 'purple' },
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'pink' },
      { shape: 'round', color: 'purple' },
      { shape: 'round', color: 'purple' }
    ],
    availableBeads: [
      { shape: 'flower', color: 'pink' },
      { shape: 'round', color: 'purple' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'round', color: 'blue' }
    ],
    tip: "8 boncuk: İki pembe çiçek, iki mor boncuk!",
    patternType: 'repeat-aab',
    difficultyStars: 3
  },
  {
    id: 15,
    title: "8'li Simetrik Elmaslar",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' },
      { shape: 'heart', color: 'red' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' }
    ],
    availableBeads: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'round', color: 'purple' }
    ],
    tip: "8 boncuklu göz alıcı simetrik bileklik!",
    patternType: 'symmetry',
    difficultyStars: 4
  },
  {
    id: 16,
    title: "9'lu Üçlü Melodi",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'cylinder', color: 'green' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cube', color: 'red' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cube', color: 'red' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cube', color: 'red' }
    ],
    availableBeads: [
      { shape: 'cylinder', color: 'green' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cube', color: 'red' },
      { shape: 'cube', color: 'blue' }
    ],
    tip: "9 boncuk: Yeşil silindir, sarı boncuk, kırmızı küp!",
    patternType: 'repeat-abc',
    difficultyStars: 4
  },
  {
    id: 17,
    title: "9'lu Saray Bileziği",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'purple' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'purple' },
      { shape: 'star', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'purple' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' }
    ],
    tip: "9 boncuklu muhteşem saray bileziği!",
    patternType: 'symmetry',
    difficultyStars: 4
  },
  {
    id: 18,
    title: "10'lu Gökkuşağı Halka",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'orange' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'purple' },
      { shape: 'round', color: 'pink' },
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'orange' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'orange' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'purple' },
      { shape: 'round', color: 'pink' }
    ],
    tip: "10 boncuklu tam renk çemberi!",
    patternType: 'rainbow',
    difficultyStars: 4
  },
  {
    id: 19,
    title: "10'lu Yıldızlar Çemberi",
    chapterName: "Bölüm 3: Gelişmiş Bileklikler (+1 Artış)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'blue' },
      { shape: 'heart', color: 'red' }
    ],
    tip: "10 boncuklu muhteşem yıldız-kalp bilekliği!",
    patternType: 'repeat-ab',
    difficultyStars: 4
  },

  // =========================================================================
  // BÖLÜM 4: KOLYE MODELİNE GEÇİŞ (Seviye 20 - 24: Kolye Tasarımları)
  // =========================================================================
  {
    id: 20,
    title: "İlk Kolye Tasarımı",
    chapterName: "Bölüm 4: Kolye Sanatına Geçiş",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' }
    ],
    availableBeads: [
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'pink' },
      { shape: 'star', color: 'cyan' }
    ],
    tip: "20. Seviye: Kolye modelleri başladı! Mor ve yıldız kolye.",
    patternType: 'repeat-ab',
    difficultyStars: 3
  },
  {
    id: 21,
    title: "Kalpli Kolye Gerdanlığı",
    chapterName: "Bölüm 4: Kolye Sanatına Geçiş",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'heart', color: 'pink' }
    ],
    tip: "Çiçek ve kırmızı kalp kolye!",
    patternType: 'repeat-ab',
    difficultyStars: 3
  },
  {
    id: 22,
    title: "Zümrüt Kolye",
    chapterName: "Bölüm 4: Kolye Sanatına Geçiş",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'round', color: 'green' }
    ],
    availableBeads: [
      { shape: 'round', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'blue' }
    ],
    tip: "Ortasında parlak sarı yıldız olan simetrik kolye!",
    patternType: 'symmetry',
    difficultyStars: 3
  },
  {
    id: 23,
    title: "6'lı Şeker Kolyesi",
    chapterName: "Bölüm 4: Kolye Sanatına Geçiş",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'cube', color: 'orange' },
      { shape: 'cylinder', color: 'cyan' },
      { shape: 'cube', color: 'orange' },
      { shape: 'cylinder', color: 'cyan' },
      { shape: 'cube', color: 'orange' },
      { shape: 'cylinder', color: 'cyan' }
    ],
    availableBeads: [
      { shape: 'cube', color: 'orange' },
      { shape: 'cylinder', color: 'cyan' },
      { shape: 'cube', color: 'red' },
      { shape: 'cylinder', color: 'blue' }
    ],
    tip: "6 parçalı turuncu küp ve turkuaz silindir kolye!",
    patternType: 'repeat-ab',
    difficultyStars: 3
  },
  {
    id: 24,
    title: "6'lı Kristal Kolye",
    chapterName: "Bölüm 4: Kolye Sanatına Geçiş",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'diamond', color: 'purple' },
      { shape: 'round', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'round', color: 'pink' },
      { shape: 'diamond', color: 'purple' }
    ],
    availableBeads: [
      { shape: 'diamond', color: 'purple' },
      { shape: 'round', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'round', color: 'yellow' }
    ],
    tip: "6 parçalı simetrik elmas kolye!",
    patternType: 'symmetry',
    difficultyStars: 4
  },

  // =========================================================================
  // BÖLÜM 5: UZAYAN VE ZORLAŞAN KOLYE SANATI (Seviye 25 - 39: Her Seviyede +1 Boncuk Artışı)
  // =========================================================================
  {
    id: 25,
    title: "6'lı Yakut Kolye",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' }
    ],
    availableBeads: [
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' }
    ],
    tip: "25. Seviye: Kolyeler her adımda +1 uzuyor ve zorlaşıyor!",
    patternType: 'symmetry',
    difficultyStars: 4
  },
  {
    id: 26,
    title: "7'li Safir Kolye",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'blue' },
      { shape: 'cylinder', color: 'cyan' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'cylinder', color: 'cyan' },
      { shape: 'round', color: 'blue' }
    ],
    availableBeads: [
      { shape: 'round', color: 'blue' },
      { shape: 'cylinder', color: 'cyan' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' }
    ],
    tip: "7 boncuklu aşağı uzayan safir kolye!",
    patternType: 'symmetry',
    difficultyStars: 4
  },
  {
    id: 27,
    title: "7'li Üç Renk Kolyeliği",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'cube', color: 'red' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'cube', color: 'red' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'cube', color: 'red' }
    ],
    availableBeads: [
      { shape: 'cube', color: 'red' },
      { shape: 'round', color: 'yellow' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'round', color: 'blue' }
    ],
    tip: "7 boncuklu ritmik kolye dizilimi!",
    patternType: 'repeat-abc',
    difficultyStars: 4
  },
  {
    id: 28,
    title: "8'li Prenses Gerdanlığı",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' }
    ],
    availableBeads: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' }
    ],
    tip: "8 parçalı muhteşem prenses kolyeliği!",
    patternType: 'symmetry',
    difficultyStars: 4
  },
  {
    id: 29,
    title: "8'li Çift Yıldız Kolyeliği",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'purple' },
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'star', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' }
    ],
    tip: "8 boncuk: İkişerli ritmik kolye!",
    patternType: 'repeat-aab',
    difficultyStars: 4
  },
  {
    id: 30,
    title: "9'lu Zümrüt Gerdanlık",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'green' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'round', color: 'green' }
    ],
    availableBeads: [
      { shape: 'round', color: 'green' },
      { shape: 'cylinder', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' }
    ],
    tip: "9 boncuk: Ortasında kalp olan uzayan zümrüt kolye!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 31,
    title: "9'lu Dört Renk Gerdanlığı",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'cube', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'star', color: 'yellow' },
      { shape: 'cube', color: 'red' }
    ],
    availableBeads: [
      { shape: 'cube', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' }
    ],
    tip: "9 boncuklu harika simetrik kolye!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 32,
    title: "10'lu Kristal Gerdanlık",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'round', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' }
    ],
    availableBeads: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'round', color: 'purple' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' }
    ],
    tip: "10 parçalı aşağı sarkan kristal kolye!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 33,
    title: "10'lu Gökkuşağı Gerdanlığı",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'orange' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'purple' },
      { shape: 'round', color: 'pink' },
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'round', color: 'orange' },
      { shape: 'round', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'round', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'round', color: 'purple' },
      { shape: 'round', color: 'pink' }
    ],
    tip: "10 renkli uzayan gökkuşağı kolyesi!",
    patternType: 'rainbow',
    difficultyStars: 5
  },
  {
    id: 34,
    title: "11'li Yıldızlı Taç Kolyesi",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'blue' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'round', color: 'blue' }
    ],
    availableBeads: [
      { shape: 'round', color: 'blue' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'cube', color: 'green' }
    ],
    tip: "11 boncuklu uzun ve gösterişli taç kolyesi!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 35,
    title: "11'li Çiçek Bahçesi Kolyesi",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'round', color: 'green' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'flower', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'round', color: 'green' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'cyan' }
    ],
    tip: "11 parçalı bahar çiçekleri kolyesi!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 36,
    title: "12'li Büyük Kraliçe Kolyesi",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'cube', color: 'purple' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'purple' }
    ],
    availableBeads: [
      { shape: 'cube', color: 'purple' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' }
    ],
    tip: "12 boncuklu muazzam kraliçe kolyesi!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 37,
    title: "12'li Saray Kristali",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'cylinder', color: 'blue' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'star', color: 'yellow' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'green' },
      { shape: 'cube', color: 'green' }
    ],
    availableBeads: [
      { shape: 'cylinder', color: 'blue' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'green' }
    ],
    tip: "12 boncuklu çift ritimli saray kristali!",
    patternType: 'repeat-aab',
    difficultyStars: 5
  },
  {
    id: 38,
    title: "12'li Gökkuşağı Gerdanlığı",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'star', color: 'orange' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'cube', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'heart', color: 'purple' },
      { shape: 'flower', color: 'pink' },
      { shape: 'star', color: 'red' },
      { shape: 'round', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'purple' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'star', color: 'orange' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'cube', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'heart', color: 'purple' },
      { shape: 'flower', color: 'pink' }
    ],
    tip: "12 parçalı rengarenk dev kolye!",
    patternType: 'rainbow',
    difficultyStars: 5
  },
  {
    id: 39,
    title: "12'li Kraliyet Gerdanlığı",
    chapterName: "Bölüm 5: Uzayan Kolyeler (+1 Artış)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'purple' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'cube', color: 'purple' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'purple' },
      { shape: 'cylinder', color: 'blue' }
    ],
    tip: "12 boncuklu görkemli kraliyet gerdanlığı!",
    patternType: 'symmetry',
    difficultyStars: 5
  },

  // =========================================================================
  // BÖLÜM 6: USTA MEYDAN OKUMASI (Seviye 40 - 50: Çok Zor Karışık Modeller)
  // =========================================================================
  {
    id: 40,
    title: "Usta Çember Bilekliği",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'green' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'round', color: 'orange' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'green' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'round', color: 'orange' },
      { shape: 'diamond', color: 'blue' }
    ],
    tip: "40. Seviye: 10 boncuklu usta bilekliği meydan okuması!",
    patternType: 'color-shape',
    difficultyStars: 5
  },
  {
    id: 41,
    title: "10'lu Usta Halka Bilekliği",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'blue' },
      { shape: 'cube', color: 'blue' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'blue' },
      { shape: 'cylinder', color: 'purple' }
    ],
    tip: "10 boncuklu simetrik usta bilekliği!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 42,
    title: "Zümrüt Kraliçe Kolyesi",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'diamond', color: 'green' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'green' }
    ],
    availableBeads: [
      { shape: 'diamond', color: 'green' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'cube', color: 'orange' }
    ],
    tip: "12 parçalı zümrüt kraliçe kolyesi!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 43,
    title: "Büyülü Yıldız Bilekliği",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'cyan' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'orange' },
      { shape: 'heart', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'cyan' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'orange' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'star', color: 'cyan' },
      { shape: 'heart', color: 'pink' },
      { shape: 'star', color: 'orange' },
      { shape: 'heart', color: 'purple' }
    ],
    tip: "11 boncuklu yıldız ve kalp bileklik deseni!",
    patternType: 'color-shape',
    difficultyStars: 5
  },
  {
    id: 44,
    title: "11'li Gökkuşağı Saray Kolyesi",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'round', color: 'red' },
      { shape: 'star', color: 'orange' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'cube', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'green' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'star', color: 'orange' },
      { shape: 'round', color: 'red' }
    ],
    availableBeads: [
      { shape: 'round', color: 'red' },
      { shape: 'star', color: 'orange' },
      { shape: 'flower', color: 'yellow' },
      { shape: 'cube', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'pink' }
    ],
    tip: "11 parçalı tek parça ipe dizilmiş gökkuşağı kolyesi!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 45,
    title: "Galaksi Yıldızları Kolyesi",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'star', color: 'orange' },
      { shape: 'heart', color: 'purple' },
      { shape: 'flower', color: 'pink' },
      { shape: 'flower', color: 'pink' },
      { shape: 'heart', color: 'purple' },
      { shape: 'star', color: 'orange' },
      { shape: 'round', color: 'blue' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'round', color: 'blue' },
      { shape: 'star', color: 'orange' },
      { shape: 'heart', color: 'purple' },
      { shape: 'flower', color: 'pink' }
    ],
    tip: "12 boncuklu göz alıcı galaksi kolyesi!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 46,
    title: "12'li Elmas Şöleni Kolyesi",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'star', color: 'orange' },
      { shape: 'diamond', color: 'purple' },
      { shape: 'star', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'star', color: 'orange' },
      { shape: 'diamond', color: 'purple' },
      { shape: 'star', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'blue' },
      { shape: 'star', color: 'orange' },
      { shape: 'diamond', color: 'purple' },
      { shape: 'star', color: 'pink' }
    ],
    tip: "12 boncuklu uzun ve görkemli elmas şöleni kolyesi!",
    patternType: 'repeat-ab',
    difficultyStars: 5
  },
  {
    id: 47,
    title: "11'li Efsanevi Usta Bilekliği",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'cube', color: 'red' },
      { shape: 'cylinder', color: 'orange' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'blue' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'flower', color: 'green' },
      { shape: 'star', color: 'yellow' },
      { shape: 'cylinder', color: 'orange' },
      { shape: 'cube', color: 'red' }
    ],
    availableBeads: [
      { shape: 'cube', color: 'red' },
      { shape: 'cylinder', color: 'orange' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'green' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'blue' }
    ],
    tip: "11 boncuklu tam simetrik usta bilekliği!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 48,
    title: "Saray Gerdanlığı Zirvesi",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'purple' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'heart', color: 'red' },
      { shape: 'heart', color: 'red' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'purple' },
      { shape: 'flower', color: 'pink' }
    ],
    availableBeads: [
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'purple' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'cylinder', color: 'blue' },
      { shape: 'heart', color: 'red' }
    ],
    tip: "12 boncuklu harika saray gerdanlığı!",
    patternType: 'symmetry',
    difficultyStars: 5
  },
  {
    id: 49,
    title: "12'li Usta Sanatçı Bilekliği",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'bracelet',
    targetSequence: [
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'green' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'green' },
      { shape: 'cylinder', color: 'purple' }
    ],
    availableBeads: [
      { shape: 'star', color: 'yellow' },
      { shape: 'heart', color: 'red' },
      { shape: 'flower', color: 'pink' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'cube', color: 'green' },
      { shape: 'cylinder', color: 'purple' }
    ],
    tip: "12 boncuklu usta döngüsü bileklik!",
    patternType: 'repeat-abc',
    difficultyStars: 5
  },
  {
    id: 50,
    title: "Büyük Şampiyonluk Kolyesi",
    chapterName: "Bölüm 6: Usta Meydan Okuması (Çok Zor Karışık)",
    jewelryType: 'necklace',
    targetSequence: [
      { shape: 'heart', color: 'red' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'green' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'cylinder', color: 'purple' },
      { shape: 'cube', color: 'green' },
      { shape: 'flower', color: 'pink' },
      { shape: 'star', color: 'yellow' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'heart', color: 'red' }
    ],
    availableBeads: [
      { shape: 'heart', color: 'red' },
      { shape: 'diamond', color: 'cyan' },
      { shape: 'star', color: 'yellow' },
      { shape: 'flower', color: 'pink' },
      { shape: 'cube', color: 'green' },
      { shape: 'cylinder', color: 'purple' }
    ],
    tip: "🎉 50. Seviye Şampiyonluk Kolyesi! Tebrikler Usta Boncuk Sanatçısı!",
    patternType: 'symmetry',
    difficultyStars: 5
  }
];
