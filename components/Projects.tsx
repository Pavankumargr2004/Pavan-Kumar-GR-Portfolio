import React, { useRef, useEffect } from 'react';
import { PROJECTS_DATA, GITHUB_LINK_ICON } from '../constants';
import SectionHeader from './SectionHeader';
import type { Project } from '../types';
import Animated from './Animated';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
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
                        <div className="flex justify-between items-start">
                            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">{project.title}</h3>
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                aria-label={`View source code for ${project.title} on GitHub`}
                                className="text-gray-600 dark:text-white/70 hover:text-brand-pink transition-colors"
                            >
                                {GITHUB_LINK_ICON}
                            </a>
                        </div>
                        <p className="text-sm font-medium text-brand-purple mt-1">{project.subtitle}</p>
                        <p className="mt-4 text-gray-700 dark:text-white/70">{project.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Projects: React.FC = () => {
  return (
    <Animated as="section" animationType="fade-in-up">
      <SectionHeader id="projects" title="Projects" />
      <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {PROJECTS_DATA.map((project, index) => (
          <Animated key={index} animationType="zoom-in" delay={index * 150}>
            <ProjectCard project={project} />
          </Animated>
        ))}
      </div>
    </Animated>
  );
};

export default Projects;