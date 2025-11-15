import React, { useRef, useEffect } from 'react';
import { EDUCATION_DATA } from '../constants';
import SectionHeader from './SectionHeader';
import type { EducationItem } from '../types';
import Animated from './Animated';

const EducationCard: React.FC<{ item: EducationItem }> = ({ item }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        };

        card.addEventListener('mousemove', handleMouseMove);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={cardRef} className="card-spotlight group h-full flex flex-col bg-light-bg dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-brand-purple/30 transition-all duration-300 hover:border-gray-300 dark:hover:border-brand-purple/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-brand-purple/20 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
            <div className="card-spotlight-effect" />
            <div className="relative z-10 h-full flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                     <div className="flex-grow">
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-2">
                            <div>
                                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">{item.institution}</h3>
                                <p className="text-md text-brand-purple mt-1">{item.degree}</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-white/70 text-left sm:text-right whitespace-nowrap pt-1">{item.duration}</p>
                        </div>
                        <p className="mt-4 text-light-text dark:text-dark-text">GPA: {item.gpa}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Education: React.FC = () => {
  return (
    <Animated as="section" animationType="fade-in-up">
      <SectionHeader id="education" title="Education" />
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {EDUCATION_DATA.map((item, index) => (
          <Animated key={index} animationType="zoom-in" delay={index * 150}>
            <EducationCard item={item} />
          </Animated>
        ))}
      </div>
    </Animated>
  );
};

export default Education;