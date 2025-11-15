import React, { useRef, useEffect } from 'react';
import { CERTIFICATIONS_DATA, CERTIFICATE_ICON } from '../constants';
import SectionHeader from './SectionHeader';
import type { Certification } from '../types';
import Animated from './Animated';

const CertificationCard: React.FC<{ cert: Certification }> = ({ cert }) => {
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
                        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                            <div>
                                <p className="text-sm font-semibold text-brand-purple">{cert.organization}</p>
                                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text mt-1">{cert.title}</h3>
                            </div>
                        </div>
                        <p className="mt-4 text-gray-700 dark:text-white/70">{cert.description}</p>
                    </div>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" aria-label={`View certificate for ${cert.title}`} className="inline-flex items-center gap-2 mt-4 text-brand-purple hover:text-brand-pink font-medium transition-colors">
                        {CERTIFICATE_ICON}
                        <span>{cert.linkText}</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

const Certifications: React.FC = () => {
  return (
    <Animated as="section" animationType="fade-in-up">
      <SectionHeader id="certifications" title="Certifications" />
      <div className="mt-8 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
        {CERTIFICATIONS_DATA.map((cert, index) => (
          <Animated key={index} animationType="zoom-in" delay={index * 150}>
            <CertificationCard cert={cert} />
          </Animated>
        ))}
      </div>
    </Animated>
  );
};

export default Certifications;