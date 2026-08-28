"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  density: number;
  color: string;
}

interface TextParticleAnimationProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  particleSize?: number;
  particleColor?: string;
  particleDensity?: number;
  backgroundColor?: string;
  className?: string;
}

export function TextParticle({
  text,
  fontSize,
  fontFamily = "Arial, sans-serif",
  particleSize = 2,
  particleColor = "#000000",
  particleDensity = 8,
  backgroundColor = "transparent",
  className = "",
}: TextParticleAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({
    x: null,
    y: null,
  });
  const animationRef = useRef<number | null>(null);

  const [customfontSize, setCustomFontSize] = useState(fontSize);

  useEffect(() => {
    const updateFontSize = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setCustomFontSize(120); // Large desktop
      } else if (width >= 1024) {
        setCustomFontSize(90); // Regular desktop
      } else if (width >= 768) {
        setCustomFontSize(74); // Tablet
      } else {
        setCustomFontSize(60); // Mobile
      }
    };
    updateFontSize();
    window.addEventListener("resize", updateFontSize);
    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const initText = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${customfontSize}px ${fontFamily}`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const x = canvas.width / 2;
      const y = canvas.height / 2;

      ctx.fillText(text, x, y);

      const textCoordinates = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      );
      const newParticles: Particle[] = [];

      for (let py = 0; py < textCoordinates.height; py += particleDensity) {
        for (let px = 0; px < textCoordinates.width; px += particleDensity) {
          const index = (py * textCoordinates.width + px) * 4;
          const alpha = textCoordinates.data[index + 3];

          if (alpha > 128) {
            newParticles.push({
              x: px,
              y: py,
              size: particleSize,
              baseX: px,
              baseY: py,
              density: Math.random() * 30 + 1,
              color: particleColor,
            });
          }
        }
      }

      particlesRef.current = newParticles;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    const handleResize = () => {
      initText();
    };

    window.addEventListener("resize", handleResize);
    initText();

    // Start 60/120fps requestAnimationFrame loop without React re-render cycle
    let isRunning = true;
    const animate = () => {
      if (!isRunning) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (backgroundColor !== "transparent") {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      const mouse = mouseRef.current;
      const currentParticles = particlesRef.current;

      for (let i = 0; i < currentParticles.length; i++) {
        const particle = currentParticles[i];
        let forceDirectionX = 0;
        let forceDirectionY = 0;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100 && distance > 0) {
            forceDirectionX = (dx / distance) * 3;
            forceDirectionY = (dy / distance) * 3;
          }
        }

        const moveX = forceDirectionX + (particle.baseX - particle.x) * 0.05;
        const moveY = forceDirectionY + (particle.baseY - particle.y) * 0.05;

        particle.x += moveX;
        particle.y += moveY;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      isRunning = false;
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    text,
    fontSize,
    customfontSize,
    fontFamily,
    particleSize,
    particleColor,
    particleDensity,
    backgroundColor,
  ]);

  // Mouse interaction without causing React re-renders
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: null, y: null };
  };

  return (
    <canvas
      ref={canvasRef}
      className={`w-full ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    />
  );
}
