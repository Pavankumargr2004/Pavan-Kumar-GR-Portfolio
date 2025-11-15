import React, { useRef, useEffect } from 'react';
import SectionHeader from './SectionHeader';
import Animated from './Animated';

const About: React.FC = () => {
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
    <Animated as="section" animationType="fade-in-up">
        <SectionHeader id="about" title="About Me" />
        <div ref={cardRef} className="card-spotlight mt-8 bg-light-bg dark:bg-dark-bg rounded-lg p-6 sm:p-8 border border-gray-200 dark:border-brand-purple/30 transition-all duration-300 hover:border-gray-300 dark:hover:border-brand-purple/50 hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-brand-purple/20">
            <div className="card-spotlight-effect" />
            <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 flex justify-center p-4">
                    <img 
                        src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif"
                        alt="Developer coding animation"
                        loading="lazy"
                        className="w-48 h-48 rounded-lg object-cover"
                    />
                </div>
                <div className="md:col-span-2 space-y-4 text-gray-700 dark:text-white/80 text-base md:text-lg">
                    <p>
                        I'm a dedicated Computer Science student with an insatiable curiosity for technology and its potential to shape our world. My journey into tech began with a simple fascination for how things work, which has since evolved into a passion for building robust, scalable, and impactful software solutions.
                    </p>
                    <p>
                        My core interests lie in the realms of Artificial Intelligence, data engineering, and full-stack web development. I thrive on the challenge of transforming complex problems into elegant, user-centric applications. Whether I'm orchestrating data pipelines, training a machine learning model, or designing an interactive UI, I'm driven by a desire to create things that are both functional and delightful to use.
                    </p>
                    <p>
                        I believe in the power of continuous learning and collaboration. I'm always exploring new technologies, contributing to open-source projects, and seeking opportunities to grow alongside fellow developers. I'm currently looking for exciting roles where I can apply my skills to solve real-world challenges and contribute to a forward-thinking team.
                    </p>
                </div>
            </div>
        </div>
    </Animated>
  );
};

export default About;