import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { smoothScrollTo } from '../utils/navigation';

const Footer: React.FC = () => {
  const quickLinks = ['About', 'Education', 'Projects', 'Achievements', 'Certifications', 'Activities', 'Skills', 'Contact'];
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    smoothScrollTo(e);
  };


  return (
    <footer className="bg-transparent border-t border-gray-200 dark:border-brand-purple/30">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Column 1: Branding */}
          <div>
            <a href="#" onClick={handleNavClick} className="text-xl font-bold text-brand-purple hover:text-brand-purple/90 transition-colors">
                Pavan Kumar G R
            </a>
            <p className="mt-2 text-gray-700 dark:text-white/70">
              Software Developer & AI Enthusiast
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} onClick={handleNavClick} className="text-gray-700 dark:text-white/70 hover:text-brand-pink transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-light-text dark:text-dark-text">Get in Touch</h4>
            <div className="mt-4 flex justify-center md:justify-start gap-4">
               {SOCIAL_LINKS.map(link => (
                <a 
                  key={link.name} 
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={link.name}
                  className="text-gray-700 dark:text-white/70 hover:text-brand-pink transition-transform duration-200 transform hover:scale-125"
                >
                  <span className="w-6 h-6">{link.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-brand-purple/30">
          <p className="text-center text-sm text-gray-600 dark:text-white/70">
            &copy; Pavan Kumar G R. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;