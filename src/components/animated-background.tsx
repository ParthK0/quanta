"use client";

import { useEffect, useRef } from "react";

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasSize();

    // The characters to drop like the Matrix
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=[]{}|;:,.<>?".split("");
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100; // random start offset to avoid solid wall
    }

    const draw = () => {
      // Create trailing translucent black effect
      ctx.fillStyle = "rgba(11, 17, 32, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00E5FF"; // Neon cyan accent
      ctx.font = fontSize + "px monospace";

      for (let i = 0; i < drops.length; i++) {
        // Drop is above screen
        if (drops[i] < 0) {
            drops[i]++;
            continue;
        }

        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly after it falls off screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    let animationFrameId: number;
    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    const loop = (time: number) => {
        animationFrameId = requestAnimationFrame(loop);
        const deltaTime = time - lastTime;
        if (deltaTime > interval) {
            draw();
            lastTime = time - (deltaTime % interval);
        }
    };

    animationFrameId = requestAnimationFrame(loop);
    window.addEventListener("resize", setCanvasSize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-[#0B1120]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-25 mix-blend-screen"
      />
      {/* Dynamic vignette gradient to ensure hero text stays fully readable */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0B1120_100%)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1120]/40 via-transparent to-[#0B1120]/80 pointer-events-none" />
    </div>
  );
}
