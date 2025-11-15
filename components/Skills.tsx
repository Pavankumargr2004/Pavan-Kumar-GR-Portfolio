import React, { useRef, useEffect } from 'react';
import { SKILLS_DATA } from '../constants';
import SectionHeader from './SectionHeader';
import type { SkillCategory } from '../types';
import Animated from './Animated';

const SkillCard: React.FC<{ category: SkillCategory }> = ({ category }) => {
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
        <div 
            ref={cardRef}
            className="card-spotlight group h-full flex flex-col bg-light-bg dark:bg-dark-bg rounded-lg border border-gray-200 dark:border-brand-purple/30 transition-all duration-300 hover:border-gray-300 dark:hover:border-brand-purple/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-brand-purple/20 hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
        >
            <div className="card-spotlight-effect" />
            <div className="relative z-10 h-full flex flex-col">
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, skillIndex) => (
                            <span 
                                key={skillIndex} 
                                className="bg-brand-purple/10 text-brand-purple text-sm font-medium px-3 py-1 rounded-full border border-brand-purple/30 dark:text-shadow-glow dark:shadow-brand-pink/50"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Skills: React.FC = () => {
  return (
    <Animated as="section" animationType="fade-in-up">
      <SectionHeader id="skills" title="Skills Summary" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS_DATA.map((category, index) => (
          <Animated key={index} animationType="zoom-in" delay={index * 100}>
            <SkillCard category={category} />
          </Animated>
        ))}
      </div>
    </Animated>
  );
};

export default Skills;