import React from 'react';

interface SectionBorderFrameProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SectionBorderFrame({
  children,
  className = '',
  id,
}: SectionBorderFrameProps) {
  return (
    <div
      id={id}
      className={`continuous-gradient-border relative rounded-3xl p-[2px] overflow-hidden my-10 shadow-2xl transition-all duration-300 ${className}`}
    >
      {/* Continuous Rotating Gradient Border Beam */}
      <div
        className="continuous-gradient-spin-layer absolute -inset-[120%] pointer-events-none z-0"
        aria-hidden="true"
      />

      {/* Inner Transparent Glass Canvas */}
      <div className="relative z-10 rounded-[calc(1.5rem-2px)] bg-white/90 dark:bg-black/85 backdrop-blur-2xl transition-colors duration-300 w-full h-full p-6 sm:p-10 lg:p-12 border border-black/5 dark:border-white/5">
        {children}
      </div>
    </div>
  );
}
