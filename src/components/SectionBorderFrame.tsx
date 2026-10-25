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
      className={`relative py-4 sm:py-6 ${className}`}
    >
      {children}
    </div>
  );
}
