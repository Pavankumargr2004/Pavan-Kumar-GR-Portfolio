import React, { useEffect, useRef, ReactNode } from 'react';

interface AnimatedProps {
  children: ReactNode;
  animationType: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'zoom-in';
  delay?: number;
  className?: string;
  threshold?: number;
  as?: React.ElementType;
  id?: string;
  alwaysVisible?: boolean;
}

const Animated: React.FC<AnimatedProps> = ({
  children,
  animationType,
  delay = 0,
  className = '',
  threshold = 0.1,
  as: Tag = 'div',
  id,
  alwaysVisible = false,
}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (alwaysVisible) {
      // Use a small timeout to ensure the transition is applied correctly
      const timer = setTimeout(() => {
        element.classList.add('is-visible');
      }, 50);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('is-visible');
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, alwaysVisible]);

  return (
    <Tag
      ref={ref}
      id={id}
      data-animate={animationType}
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
};

export default Animated;