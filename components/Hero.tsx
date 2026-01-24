import React from 'react';
import Animated from './Animated';

const Hero: React.FC = () => {
  const handleScrollLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <section className="relative min-h-[60vh] flex flex-col justify-center items-center text-center">
      <div className="relative z-10">
          <Animated animationType="fade-in-up" alwaysVisible>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-light-text dark:text-dark-text tracking-tight transition-colors duration-300 hover:text-brand-purple">
              Pavan Kumar G R
            </h1>
          </Animated>
          <Animated animationType="fade-in-up" delay={150} alwaysVisible>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-brand-purple">
              Software Developer & AI Enthusiast
            </h2>
          </Animated>
          <Animated animationType="fade-in-up" delay={300} alwaysVisible>
            <p className="mt-6 max-w-2xl text-lg text-gray-700 dark:text-white/70">
              Computer Science student with a passion for building innovative solutions, from end-to-end data pipelines to immersive web experiences and machine learning models. Eager to tackle new challenges and contribute to impactful projects.
            </p>
          </Animated>
          <Animated animationType="fade-in-up" delay={450} alwaysVisible>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="#projects"
                onClick={handleScrollLink}
                aria-label="View my work"
                className="inline-block bg-brand-purple border-2 border-brand-purple text-white font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg shadow-brand-purple/30 hover:bg-brand-pink hover:border-brand-pink hover:shadow-xl hover:shadow-brand-pink/40 transform hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="https://drive.google.com/file/d/1l3Ee3snhGo7hyW1WsdW67kEz2if3fApW/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View my CV"
                className="inline-block bg-transparent border-2 border-brand-purple text-brand-purple font-semibold px-8 py-3 rounded-md transition-all duration-300 shadow-lg shadow-brand-purple/30 hover:bg-brand-pink hover:border-brand-pink hover:text-white dark:hover:text-dark-bg hover:shadow-xl hover:shadow-brand-pink/40 transform hover:-translate-y-1"
              >
                View My CV
              </a>
            </div>
          </Animated>
      </div>
    </section>
  );
};

export default Hero;
