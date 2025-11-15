import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StarsBackground from './components/StarsBackground';
import Loader from './components/Loader';
import Achievements from './components/Achievements';
import Activities from './components/Activities';

type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<Theme>('dark');
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorPos = useRef({ x: -100, y: -100 });
  const animationFrameId = useRef<number | null>(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    // Theme initialization
    const savedTheme = localStorage.getItem('theme') as Theme;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (systemPrefersDark) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Custom cursor logic
    const cursor = cursorRef.current;
    if (cursor) {
        const initialX = window.innerWidth / 2;
        const initialY = window.innerHeight / 2;
        mousePos.current = { x: initialX, y: initialY };
        cursorPos.current = { x: initialX, y: initialY };
        
        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };

            const target = e.target as HTMLElement;
            if (target.closest('a, button, input, textarea, [role="button"]')) {
                cursor.classList.add('hovered');
            } else {
                cursor.classList.remove('hovered');
            }
        };

        const updateCursorPosition = () => {
            const easingFactor = 0.15;
            const dx = mousePos.current.x - cursorPos.current.x;
            const dy = mousePos.current.y - cursorPos.current.y;
            
            // Only update if there's a significant distance to travel to save resources
            if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
                cursorPos.current.x += dx * easingFactor;
                cursorPos.current.y += dy * easingFactor;
                cursor.style.left = `${cursorPos.current.x}px`;
                cursor.style.top = `${cursorPos.current.y}px`;
            }
            
            animationFrameId.current = requestAnimationFrame(updateCursorPosition);
        };
        
        updateCursorPosition();

        const handleMouseDown = () => {
            cursor.classList.add('clicked');
        };

        const handleMouseUp = () => {
            cursor.classList.remove('clicked');
        };

        const handleMouseLeave = () => { cursor.style.opacity = '0'; };
        const handleMouseEnter = () => { cursor.style.opacity = '1'; };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.body.addEventListener('mouseleave', handleMouseLeave);
        document.body.addEventListener('mouseenter', handleMouseEnter);
        
        // Cleanup function
        return () => {
            clearTimeout(timer);
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.body.removeEventListener('mouseleave', handleMouseLeave);
            document.body.removeEventListener('mouseenter', handleMouseEnter);
        };
    }


    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
      if (theme === 'dark') {
          document.documentElement.classList.add('dark');
      } else {
          document.documentElement.classList.remove('dark');
      }
      localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
      setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text font-sans relative z-0 transition-colors duration-300">
        <div ref={cursorRef} className="cursor">
            <div className="cursor-ring"></div>
            <div className="cursor-dot"></div>
        </div>
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Loader />
        </div>
        
        <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
            <StarsBackground theme={theme} />
            <Header theme={theme} toggleTheme={toggleTheme} />
            <main className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-24">
                <Hero />
                <div className="space-y-24 md:space-y-32 mt-24">
                    <About />
                    <Education />
                    <Projects />
                    <Achievements />
                    <Certifications />
                    <Activities />
                    <Skills />
                    <Contact />
                </div>
            </main>
            <Footer />
        </div>
    </div>
  );
};

export default App;
