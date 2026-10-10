import React, { useEffect, useRef } from 'react';

export const AmbientAtmosphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Interactive mouse coordinates with smooth inertia
    let targetMouseX = width / 2;
    let targetMouseY = height / 3;
    let currentMouseX = targetMouseX;
    let currentMouseY = targetMouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Generate floating cinematic particles
    const particleCount = Math.min(Math.floor(width / 22), 65);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speedX: (Math.random() - 0.5) * 0.25,
      speedY: (Math.random() - 0.5) * 0.25,
      alpha: Math.random() * 0.4 + 0.1,
      baseAlpha: Math.random() * 0.4 + 0.1,
      depth: Math.random() * 0.8 + 0.2, // 3D depth multiplier
    }));

    const render = () => {
      // Smooth mouse follow
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Highlight Beige & Soft Blue Ambient Glow spotlight
      const gradient = ctx.createRadialGradient(
        currentMouseX,
        currentMouseY,
        0,
        currentMouseX,
        currentMouseY,
        Math.max(width * 0.45, 480)
      );
      gradient.addColorStop(0, 'rgba(255, 249, 239, 0.45)'); // #FFF9EF highlight beige
      gradient.addColorStop(0.5, 'rgba(107, 147, 201, 0.05)'); // #6B93C9 soft blue
      gradient.addColorStop(1, 'rgba(243, 235, 221, 0)'); // #F3EBDD main beige

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Render 3D Floating Particles (Delicate Deep Blue Atoms with Soft Blue Halo)
      particles.forEach((p) => {
        p.x += p.speedX + (currentMouseX - width / 2) * 0.00015 * p.depth;
        p.y += p.speedY + (currentMouseY - height / 2) * 0.00015 * p.depth;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.depth, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(22, 58, 112, ${p.alpha * p.depth * 0.45})`; // #163A70 deep blue
        ctx.shadowColor = 'rgba(107, 147, 201, 0.4)'; // #6B93C9 soft blue
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
};
