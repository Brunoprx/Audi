import React from 'react';

type SectionDividerProps = {
  theme?: 'dark' | 'light';
};

export default function SectionDivider({ theme = 'dark' }: SectionDividerProps) {
  const gradientColor = theme === 'dark' 
    ? 'via-white/20' 
    : 'via-black/10';

  return (
    <div className="w-full max-w-7xl mx-auto mb-20 md:mb-32 px-6">
      <div className={`w-full h-[1px] bg-gradient-to-r from-transparent ${gradientColor} to-transparent opacity-50`} />
    </div>
  );
}