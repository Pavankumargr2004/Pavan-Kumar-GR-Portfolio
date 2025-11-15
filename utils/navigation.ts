import React from 'react';

export const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');

    if (!targetId) return;

    if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }
};
