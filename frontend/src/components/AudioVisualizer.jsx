import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const AudioVisualizer = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const bars = 64;
    let dataArray = new Array(bars).fill(0);

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const animate = () => {
      if (!isActive) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const barWidth = canvas.width / bars;
      const centerY = canvas.height / 2;

      // Simulate audio data with smooth random values
      dataArray = dataArray.map((val, i) => {
        const target = Math.sin(Date.now() / 500 + i / 2) * 0.5 + 0.5;
        const noise = Math.random() * 0.3;
        return val + (target + noise - val) * 0.1;
      });

      dataArray.forEach((value, i) => {
        const height = value * canvas.height * 0.8;
        const x = i * barWidth;

        // Create gradient
        const gradient = ctx.createLinearGradient(0, centerY - height / 2, 0, centerY + height / 2);
        gradient.addColorStop(0, '#ff6b35');
        gradient.addColorStop(0.5, '#4ecdc4');
        gradient.addColorStop(1, '#ff6b35');

        ctx.fillStyle = gradient;
        ctx.fillRect(x, centerY - height / 2, barWidth - 2, height);

        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#ff6b35';
      });

      ctx.shadowBlur = 0;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isActive]);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-black border-t border-gray-800 z-40">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ opacity: isActive ? 1 : 0.3 }}
      />
      
      <button
        onClick={() => setIsActive(!isActive)}
        className="absolute top-4 right-4 w-10 h-10 bg-gray-900 border border-gray-700 flex items-center justify-center hover:border-[#ff6b35] transition-colors"
        aria-label={isActive ? 'Pause visualizer' : 'Play visualizer'}
      >
        {isActive ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </button>

      <div className="absolute top-4 left-4 text-xs text-gray-500 uppercase tracking-widest">
        Audio Visualizer
      </div>
    </div>
  );
};

export default AudioVisualizer;
