// src/components/Background.tsx
import React, { useEffect, useRef } from "react";

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particlesArray: {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      x: number;
      y: number;
    }[] = [];

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    // Create particles in a circular spiral formation
    function createParticles() {
      const numParticles = 200; // Adjust the number of particles here
      for (let i = 0; i < numParticles; i++) {
        const angle = (i / numParticles) * Math.PI * 2; // Spread particles evenly around the circle
        const radius = i * 0.5; // Particles will spread outward like a spiral
        particlesArray.push({
          angle, // Initial angle
          radius, // Initial radius from the center
          speed: 0.02 + Math.random() * 0.02, // Speed of rotation
          size: Math.random() * 3 + 1, // Particle size
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
        });
      }
    }

    createParticles();

    // Animate the particles in a spiral motion
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((particle) => {
        // Update the particle's angle to rotate it
        particle.angle += particle.speed;
        particle.radius += 0.1; // Increase radius to make it spiral outward

        // Calculate new x and y positions based on updated angle and radius
        particle.x = centerX + Math.cos(particle.angle) * particle.radius;
        particle.y = centerY + Math.sin(particle.angle) * particle.radius;

        // Draw the particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, 0.8)`; // White particles with slight opacity
        ctx.fill();
      });

      // Loop the animation
      requestAnimationFrame(animateParticles);
    }

    animateParticles();

    // Handle resizing of the canvas
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default Background;
