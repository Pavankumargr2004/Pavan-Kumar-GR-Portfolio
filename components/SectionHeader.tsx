import React from 'react';

interface SectionHeaderProps {
  id: string;
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ id, title }) => {
  return (
    <div id={id} className="flex items-center gap-4 scroll-mt-24">
      <h2 className="text-3xl font-bold text-light-text dark:text-dark-text">{title}</h2>
      <div className="flex-grow h-px bg-gray-200 dark:bg-brand-purple/30"></div>
    </div>
  );
};

export default SectionHeader;