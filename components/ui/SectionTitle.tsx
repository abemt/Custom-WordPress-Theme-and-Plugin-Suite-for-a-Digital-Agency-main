
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center mb-12">
      {children}
    </h2>
  );
};

export default SectionTitle;
