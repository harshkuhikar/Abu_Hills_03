import { useEffect, useRef } from 'react';

interface SmokeParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  size: number;
  life: number;
  maxLife: number;
}

export const useCursorSmoke = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<SmokeParticle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      
      // Create new particles
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push({
          x: e.clientX + (Math.random() - 0.5) * 10,
          y: e.clientY + (Math.random() - 0.5) * 10,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2 - 1,
          alpha: 0.9,
          size: Math.random() * 15 + 5,
          life: 0,
          maxLife: 60 + Math.random() * 40,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesRef.current = particlesRef.current.filter(particle => {
        particle.life++;
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.02; // gravity
        particle.vx *= 0.99; // friction
        particle.alpha = 1 - (particle.life / particle.maxLife);
        particle.size *= 1.02; // expand

        if (particle.alpha > 0) {
          // Create gradient for smoke effect with dark golden color
          const smokeColor = '212, 175, 55'; // Luxury golden RGB (#d4af37)
          
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size
          );
          gradient.addColorStop(0, `rgba(${smokeColor}, ${particle.alpha * 0.4})`);
          gradient.addColorStop(0.5, `rgba(${smokeColor}, ${particle.alpha * 0.2})`);
          gradient.addColorStop(1, `rgba(${smokeColor}, 0)`);

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();

          return true;
        }
        return false;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return canvasRef;
};