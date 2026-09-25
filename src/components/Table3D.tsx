import React from 'react';

interface Table3DProps {
  children: React.ReactNode;
  is3DView: boolean;
}

export const Table3D: React.FC<Table3DProps> = ({
  children,
  is3DView
}) => {
  return (
    <div className="w-full relative scene-3d-wrapper py-2 my-auto">
      {/* Main Extended 3D Wooden Table Container (+30% Expanded Height & Width) */}
      <div
        className={`table-surface-3d ${
          is3DView ? 'view-3d' : 'view-flat'
        } wooden-tabletop p-4 sm:p-7 md:p-8 border-4 border-[#F3D19E] relative transition-all duration-500 shadow-2xl min-h-[780px] sm:min-h-[860px] lg:min-h-[920px] flex flex-col justify-between`}
      >
        {/* Table Natural Wood Plank Grooves */}
        <div className="absolute inset-0 rounded-[44px] overflow-hidden pointer-events-none opacity-40">
          <div className="w-full h-full bg-[linear-gradient(to_bottom,transparent_0%,rgba(140,80,20,0.08)_49%,rgba(140,80,20,0.22)_50%,transparent_51%)] bg-[length:100%_120px]" />
        </div>

        {/* Realistic Desk Brass Inlay Corner Studs */}
        <div className="absolute top-4 left-4 w-6 h-6 rounded-full border-2 border-amber-500/50 bg-amber-300/80 shadow-md pointer-events-none flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-800" />
        </div>
        <div className="absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-amber-500/50 bg-amber-300/80 shadow-md pointer-events-none flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-800" />
        </div>
        <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full border-2 border-amber-500/50 bg-amber-300/80 shadow-md pointer-events-none flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-800" />
        </div>
        <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full border-2 border-amber-500/50 bg-amber-300/80 shadow-md pointer-events-none flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-amber-800" />
        </div>

        {/* Decorative Wooden Ruler Scale on Left Edge */}
        <div className="absolute left-2 top-14 bottom-14 w-3 flex flex-col justify-between opacity-35 pointer-events-none hidden sm:flex">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className={`h-[1.5px] bg-amber-950 ${i % 4 === 0 ? 'w-4' : 'w-2'}`}
            />
          ))}
        </div>

        {/* Children Gameplay Content on Tabletop (+30% Larger spacing & spreading) */}
        <div className="relative z-10 w-full flex flex-col justify-between flex-1 gap-3 sm:gap-4.5">
          {children}
        </div>

        {/* Table Wooden Front Bevel Thickness */}
        {is3DView && (
          <div className="absolute -bottom-6 left-6 right-6 h-6 rounded-b-3xl table-edge-front pointer-events-none" />
        )}
      </div>

      {/* 3D Table Legs and Floor Shadow Visuals */}
      {is3DView && (
        <div className="relative w-full h-9 pointer-events-none -mt-1 px-10">
          {/* Left Table Leg Top */}
          <div className="absolute left-12 -top-1 w-14 h-12 rounded-b-2xl bg-gradient-to-b from-[#A06C32] to-[#784A1A] shadow-xl border-t border-amber-900/40" />
          {/* Right Table Leg Top */}
          <div className="absolute right-12 -top-1 w-14 h-12 rounded-b-2xl bg-gradient-to-b from-[#A06C32] to-[#784A1A] shadow-xl border-t border-amber-900/40" />
          {/* Floor Ambient Occlusion Shadow */}
          <div className="w-full h-8 rounded-full bg-amber-950/25 blur-xl mx-auto translate-y-3" />
        </div>
      )}
    </div>
  );
};
