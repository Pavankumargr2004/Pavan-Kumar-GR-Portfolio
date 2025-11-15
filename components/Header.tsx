import React, { useState, useEffect } from 'react';
import { MENU_ICON, CLOSE_ICON, SUN_ICON, MOON_ICON } from '../constants';
import { smoothScrollTo } from '../utils/navigation';

interface HeaderProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = ['About', 'Education', 'Projects', 'Achievements', 'Certifications', 'Activities', 'Skills', 'Contact'];

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        setIsMenuOpen(false);
        smoothScrollTo(e);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
                <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
                    <div className="flex justify-between items-center h-20">
                        <a href="#" onClick={handleNavClick} className="text-xl font-bold text-brand-purple hover:text-brand-purple/90 transition-colors">
                            Pavan Kumar G R
                        </a>
                        <div className="flex items-center gap-4">
                             <nav className="hidden md:flex space-x-8">
                                {navLinks.map(link => (
                                    <a 
                                        key={link} 
                                        href={`#${link.toLowerCase()}`} 
                                        onClick={handleNavClick}
                                        className="text-light-text dark:text-dark-text hover:text-brand-pink transition-colors font-medium"
                                    >
                                        {link}
                                    </a>
                                ))}
                            </nav>
                            <button onClick={toggleTheme} aria-label="Toggle theme" className="text-light-text dark:text-dark-text">
                                {theme === 'light' ? MOON_ICON : SUN_ICON}
                            </button>
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu" aria-expanded={isMenuOpen} className="text-light-text dark:text-dark-text">
                                    {isMenuOpen ? CLOSE_ICON : MENU_ICON}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 z-40 bg-light-bg dark:bg-dark-bg bg-opacity-95 dark:bg-opacity-95 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <nav className="flex flex-col items-center justify-center h-full space-y-8 pt-20">
                    {navLinks.map(link => (
                        <a 
                            key={link} 
                            href={`#${link.toLowerCase()}`} 
                            onClick={handleNavClick}
                            className="text-3xl text-light-text dark:text-dark-text hover:text-brand-pink transition-colors font-medium"
                        >
                            {link}
                        </a>
                    ))}
                </nav>
            </div>
        </>
    );
};

export default Header;