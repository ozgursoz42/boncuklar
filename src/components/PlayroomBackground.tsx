import React from 'react';

export const PlayroomBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden select-none">
      {/* 1. Base Room Gradient with Pixar Lighting */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#90D5FF] via-[#FFF1D6] to-[#E8CDB2]"
        style={{
          background: 'radial-gradient(ellipse at 50% 25%, #FFF8E7 0%, #FFE7BD 45%, #F0CEAB 75%, #D4B18F 100%)'
        }}
      />

      {/* 2. Soft Pixar God-Rays from Window */}
      <div 
        className="absolute -top-10 left-1/4 w-[600px] h-[700px] opacity-25"
        style={{
          background: 'conic-gradient(from 120deg at 20% 0%, rgba(255,255,255,0.8) 0deg, transparent 35deg, rgba(255,255,255,0.6) 70deg, transparent 95deg, rgba(255,255,255,0.7) 140deg, transparent 180deg)',
          filter: 'blur(16px)'
        }}
      />

      {/* 3. Playroom Wall Wallpaper with Cute Subtle Star/Polka Pattern */}
      <div 
        className="absolute top-0 left-0 right-0 h-[65%] opacity-15"
        style={{
          backgroundImage: `
            radial-gradient(#F59E0B 1.5px, transparent 1.5px),
            radial-gradient(#EC4899 1.5px, transparent 1.5px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px'
        }}
      />

      {/* 4. Arched Sunny Window in Room Center Background */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 w-48 sm:w-64 h-36 rounded-t-full border-4 border-white/80 bg-gradient-to-b from-[#81D4FA] to-[#B3E5FC] shadow-xl overflow-hidden opacity-60">
        {/* Sun in window */}
        <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-yellow-300 blur-xs shadow-lg animate-pulse" />
        {/* Fluffy Clouds */}
        <div className="absolute bottom-2 left-3 w-16 h-8 bg-white/90 rounded-full blur-[1px]" />
        <div className="absolute bottom-4 left-9 w-20 h-10 bg-white/90 rounded-full blur-[1px]" />
        <div className="absolute bottom-2 right-4 w-14 h-7 bg-white/85 rounded-full blur-[1px]" />
        {/* Window Cross Frames */}
        <div className="absolute left-1/2 top-0 bottom-0 w-2 -translate-x-1/2 bg-white/80" />
        <div className="absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 bg-white/80" />
      </div>

      {/* 5. Colorful Toy Bunting Pennants Banner across Top Wall */}
      <div className="absolute top-0 left-0 right-0 h-12 flex justify-around items-start opacity-75">
        <svg className="w-full h-10 overflow-visible" preserveAspectRatio="none" viewBox="0 0 400 30">
          <path d="M 0 0 Q 200 20 400 0" fill="none" stroke="#D97706" strokeWidth="1.5" strokeDasharray="3,3" />
          {/* Triangular Flags */}
          <polygon points="20,2 40,2 30,22" fill="#EF4444" />
          <polygon points="60,4 80,4 70,24" fill="#3B82F6" />
          <polygon points="100,6 120,6 110,26" fill="#F59E0B" />
          <polygon points="140,8 160,8 150,28" fill="#10B981" />
          <polygon points="180,9 200,9 190,29" fill="#EC4899" />
          <polygon points="220,9 240,9 230,29" fill="#8B5CF6" />
          <polygon points="260,8 280,8 270,28" fill="#06B6D4" />
          <polygon points="300,6 320,6 310,26" fill="#F97316" />
          <polygon points="340,4 360,4 350,24" fill="#EAB308" />
          <polygon points="375,2 395,2 385,22" fill="#14B8A6" />
        </svg>
      </div>

      {/* 6. Wooden Wall Shelves with 3D Pixar Style Toys */}
      {/* Left Wall Shelf with ABC Blocks & Rocket */}
      <div className="absolute top-16 -left-4 sm:left-4 w-32 sm:w-40 opacity-70 hidden xs:block">
        {/* Toys on Shelf */}
        <div className="flex items-end justify-around pb-0.5 px-2">
          {/* Cute Toy Rocket */}
          <div className="w-6 h-10 flex flex-col items-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-red-500" />
            <div className="w-4 h-6 bg-white border border-slate-300 rounded-sm flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-blue-400" />
            </div>
            <div className="w-5 h-2 bg-red-400 rounded-xs" />
          </div>

          {/* Wooden Toy Block 'A' */}
          <div className="w-6 h-6 bg-gradient-to-br from-amber-300 to-amber-500 rounded-md border border-amber-600 shadow-sm flex items-center justify-center text-amber-950 font-black text-xs">
            A
          </div>
          {/* Wooden Toy Block 'B' */}
          <div className="w-6 h-6 bg-gradient-to-br from-blue-300 to-blue-500 rounded-md border border-blue-600 shadow-sm flex items-center justify-center text-white font-black text-xs">
            B
          </div>
        </div>
        {/* Wooden Shelf Plank */}
        <div className="h-3 bg-gradient-to-r from-[#A16207] to-[#CA8A04] rounded-sm shadow-md border-t border-amber-300" />
        <div className="w-4 h-4 bg-amber-800 ml-4 rounded-b-md shadow-xs" />
      </div>

      {/* Right Wall Shelf with Mini Plant & Rubber Ducky */}
      <div className="absolute top-16 -right-4 sm:right-4 w-32 sm:w-40 opacity-70 hidden xs:block">
        {/* Toys on Shelf */}
        <div className="flex items-end justify-around pb-0.5 px-2">
          {/* Cute Rubber Ducky */}
          <div className="w-7 h-7 relative flex items-center justify-center">
            <div className="w-6 h-5 rounded-full bg-yellow-400 border border-yellow-500 shadow-xs relative">
              <div className="absolute -top-2 left-2 w-3.5 h-3.5 rounded-full bg-yellow-400 border border-yellow-500">
                <div className="absolute top-1 right-0.5 w-1 h-1 rounded-full bg-black" />
                <div className="absolute top-1.5 -right-1 w-2 h-1 bg-orange-500 rounded-xs" />
              </div>
            </div>
          </div>

          {/* Mini Potted Plant */}
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 flex items-center justify-center text-emerald-600 font-bold text-base -mb-1">
              🌱
            </div>
            <div className="w-5 h-4 bg-amber-700 rounded-b-md border border-amber-800 shadow-xs" />
          </div>
        </div>
        {/* Wooden Shelf Plank */}
        <div className="h-3 bg-gradient-to-r from-[#CA8A04] to-[#A16207] rounded-sm shadow-md border-t border-amber-300" />
        <div className="w-4 h-4 bg-amber-800 ml-auto mr-4 rounded-b-md shadow-xs" />
      </div>

      {/* 7. Warm Wooden Floor Perspective at Room Bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-44 opacity-40 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #D4A373 30%, #BC8A5F 100%)',
          maskImage: 'linear-gradient(to top, black 60%, transparent 100%)'
        }}
      >
        {/* Floor Planks */}
        <div className="w-full h-full opacity-20 bg-[repeating-linear-gradient(90deg,#5E300B_0px,#5E300B_2px,transparent_2px,transparent_60px)]" />
      </div>

      {/* 8. Floating Golden Bokeh Dust Motes */}
      <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-yellow-300/40 blur-[1px] animate-gentle-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-amber-200/50 blur-[1px] animate-gentle-bounce" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/5 w-2.5 h-2.5 rounded-full bg-yellow-200/40 blur-[1px] animate-gentle-bounce" style={{ animationDuration: '6s', animationDelay: '2s' }} />
    </div>
  );
};
