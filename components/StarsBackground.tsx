import React, { useRef, useEffect } from 'react';

interface StarsBackgroundProps {
    theme: 'light' | 'dark';
}

const StarsBackground: React.FC<StarsBackgroundProps> = ({ theme }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        
        const lightColors = ['rgba(109, 40, 217, 0.5)', 'rgba(244, 114, 182, 0.5)'];
        const darkColors = ['rgba(139, 92, 246, 0.7)', 'rgba(244, 114, 182, 0.6)'];

        const stars = Array.from({ length: 400 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.5 + 0.1,
            color: theme === 'dark' 
                ? darkColors[Math.floor(Math.random() * darkColors.length)]
                : lightColors[Math.floor(Math.random() * lightColors.length)]
        }));

        const render = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(star => {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
                
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = star.alpha;
                ctx.fill();
            });
            
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return (
        <canvas 
            ref={canvasRef} 
            className="fixed top-0 left-0 w-full h-full -z-10"
        />
    );
};

export default StarsBackground;