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
      className={`clean-frame-container relative rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 my-8 sm:my-10 transition-colors duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
