// VisualEffects.tsx

import React from 'react';

const VisualEffects: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      {/* Linhas */}
      <div className="absolute h-[1px] bg-[#1F2326] opacity-50 w-1/4 top-1/4 left-0 transform rotate-45" />
      <div className="absolute h-[1px] bg-[#1F2326] opacity-50 w-1/3 top-1/2 left-1/3 transform -rotate-30" />
      <div className="absolute h-[1px] bg-[#1F2326] opacity-50 w-1/2 bottom-10 right-16 transform rotate-60" />
      <div className="absolute h-[4px] bg-[#1F2326] opacity-50 w-20 top-10 left-1/2 transform rotate-60" />
      <div className="absolute h-[4px] bg-[#1F2326] opacity-50 w-12 bottom-32 left-56 transform rotate-60" />
      <img
        src="logo.svg"
        alt="Valorant Logo"
        className="absolute bottom-20 left-56 object-cover"
        style={{ filter: 'invert(1)', opacity: 0.34 }}
      />
    </div>
  );
};

export default VisualEffects;
