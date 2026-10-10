import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop/pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.closest('a') || target.closest('button') || target.closest('input') || target.closest('textarea') || target.closest('[data-hover="true"]'))) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible || cursorPos.x < 0) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#163A70]/70 flex items-center justify-center backdrop-blur-[1px] shadow-[0_0_12px_rgba(22,58,112,0.25)]"
      animate={{
        x: cursorPos.x - (isHovered ? 24 : 5),
        y: cursorPos.y - (isHovered ? 24 : 5),
        width: isHovered ? 48 : 10,
        height: isHovered ? 48 : 10,
        borderColor: isHovered ? '#2563EB' : 'rgba(22, 58, 112, 0.7)',
        backgroundColor: isHovered ? 'rgba(37, 99, 235, 0.12)' : 'rgba(22, 58, 112, 0.92)',
      }}
      transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
    />
  );
};
