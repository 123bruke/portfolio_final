import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme();
  const themeRef = useRef(theme);

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;

    // 3D Particle Interface
    interface Particle3D {
      x: number; // 3D world coords
      y: number;
      z: number;
      baseX: number;
      baseY: number;
      baseZ: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
      color: { r: number; g: number; b: number };
      pulseSpeed: number;
      pulseOffset: number;
      projX: number; // 2D projected coords
      projY: number;
      projScale: number;
    }

    interface Shockwave3D {
      x: number;
      y: number;
      z: number;
      radius: number;
      maxRadius: number;
      alpha: number;
      speed: number;
    }

    interface Spark3D {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      alpha: number;
      radius: number;
      color: string;
    }

    const particleCount = 70;
    let particles: Particle3D[] = [];
    let shockwaves: Shockwave3D[] = [];
    let sparks: Spark3D[] = [];

    const focalLength = 450; // 3D camera focal distance

    // 3D Camera Angles with Parallax
    let targetAngleX = 0;
    let targetAngleY = 0;
    let angleX = 0;
    let angleY = 0;

    // Cursor tracking in normalized screen space
    let mouseX = -2000;
    let mouseY = -2000;
    let isCursorActive = false;

    // Branding color palette: Emerald Green, Pure White, and Deep Black
    const darkPalette = [
      { r: 16, g: 185, b: 129 },  // Emerald 500
      { r: 52, g: 211, b: 153 },  // Mint Green
      { r: 5, g: 150, b: 105 },   // Deep Emerald
      { r: 255, g: 255, b: 255 }, // Crisp White
      { r: 110, g: 231, b: 183 }  // Radiant Mint
    ];

    const lightPalette = [
      { r: 5, g: 150, b: 105 },   // Deep Emerald Green
      { r: 4, g: 120, b: 87 },    // Forest Green
      { r: 16, g: 185, b: 129 },  // Emerald
      { r: 0, g: 0, b: 0 },       // Pure Black
      { r: 15, g: 23, b: 42 }     // Midnight Black
    ];

    const initParticles = () => {
      particles = [];
      const palette = themeRef.current === 'dark' ? darkPalette : lightPalette;

      for (let i = 0; i < particleCount; i++) {
        // Distribute in a 3D volume around center
        const x = (Math.random() - 0.5) * (width * 1.3);
        const y = (Math.random() - 0.5) * (height * 1.3);
        const z = Math.random() * 600 - 150; // -150 to +450 depth

        const color = palette[Math.floor(Math.random() * palette.length)];

        particles.push({
          x,
          y,
          z,
          baseX: x,
          baseY: y,
          baseZ: z,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2.2 + 1.2,
          color,
          pulseSpeed: Math.random() * 0.03 + 0.015,
          pulseOffset: Math.random() * Math.PI * 2,
          projX: 0,
          projY: 0,
          projScale: 1
        });
      }
    };

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: w, height: h } = entry.contentRect;
        if (w === 0 || h === 0) continue;
        width = w;
        height = h;
        canvas.width = w * window.devicePixelRatio;
        canvas.height = h * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        initParticles();
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;

      mouseX = clientX;
      mouseY = clientY;
      isCursorActive = true;

      // Calculate 3D Parallax tilt from screen center
      const normX = (clientX - width / 2) / (width / 2);
      const normY = (clientY - height / 2) / (height / 2);

      // Max 3D tilt angles (radians)
      targetAngleY = normX * 0.28;
      targetAngleX = -normY * 0.22;

      // Spawn kinetic 3D sparks on movement
      if (Math.random() < 0.25 && sparks.length < 25) {
        sparks.push({
          x: clientX - width / 2,
          y: clientY - height / 2,
          z: Math.random() * 80 - 40,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          vz: (Math.random() - 0.5) * 2,
          alpha: 0.8,
          radius: Math.random() * 2 + 1,
          color: themeRef.current === 'dark' ? '#38bdf8' : '#0284c7'
        });
      }
    };

    const handlePointerLeave = () => {
      isCursorActive = false;
      targetAngleX = 0;
      targetAngleY = 0;
      mouseX = -2000;
      mouseY = -2000;
    };

    const handlePointerDown = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = (e.clientX - rect.left) - width / 2;
      const clickY = (e.clientY - rect.top) - height / 2;

      // Trigger 3D Shockwave sphere
      shockwaves.push({
        x: clickX,
        y: clickY,
        z: 0,
        radius: 10,
        maxRadius: 420,
        alpha: 0.7,
        speed: 12
      });

      // Spawn radiating 3D sparks
      for (let i = 0; i < 18; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        const speed = Math.random() * 5 + 3;
        sparks.push({
          x: clickX,
          y: clickY,
          z: 0,
          vx: Math.sin(phi) * Math.cos(theta) * speed,
          vy: Math.sin(phi) * Math.sin(theta) * speed,
          vz: Math.cos(phi) * speed,
          alpha: 0.9,
          radius: Math.random() * 2.5 + 1.2,
          color: themeRef.current === 'dark' ? '#06b6d4' : '#0284c7'
        });
      }
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('mouseleave', handlePointerLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const isDark = themeRef.current === 'dark';
      const centerX = width / 2;
      const centerY = height / 2;

      // Smooth 3D camera parallax rotation
      angleX += (targetAngleX - angleX) * 0.06;
      angleY += (targetAngleY - angleY) * 0.06;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Cursor in 3D center-relative space
      const cursorRelX = mouseX - centerX;
      const cursorRelY = mouseY - centerY;

      // --- 1. RENDER 3D AMBIENT VOLUMETRIC GLOW ---
      if (isDark) {
        // Deep pure black foundation with subtle branding light pools
        const ambientGlow = ctx.createRadialGradient(
          centerX, centerY, 50,
          centerX, centerY, Math.max(width, height) * 0.75
        );
        ambientGlow.addColorStop(0, 'rgba(6, 182, 212, 0.04)');
        ambientGlow.addColorStop(0.5, 'rgba(99, 102, 241, 0.025)');
        ambientGlow.addColorStop(1, 'transparent');

        ctx.fillStyle = ambientGlow;
        ctx.fillRect(0, 0, width, height);
      }

      // --- 2. UPDATE & PROJECT 3D PARTICLES ---
      for (const p of particles) {
        // Natural gentle 3D drift
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Restore toward anchor volume
        p.vx += (p.baseX - p.x) * 0.0004;
        p.vy += (p.baseY - p.y) * 0.0004;
        p.vz += (p.baseZ - p.z) * 0.0004;

        // Cursor 3D Interactive Force (Gravitational Vortex & Repulsion)
        if (isCursorActive) {
          const dx = p.x - cursorRelX;
          const dy = p.y - cursorRelY;
          const dz = p.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < 240 && dist3D > 1) {
            const factor = (1 - dist3D / 240);
            if (dist3D < 60) {
              // Elastic repulsion near core
              const repel = (60 - dist3D) * 0.04;
              p.vx += (dx / dist3D) * repel;
              p.vy += (dy / dist3D) * repel;
            } else {
              // 3D Orbital Swirl
              p.vx -= (dy / dist3D) * factor * 0.4;
              p.vy += (dx / dist3D) * factor * 0.4;
              p.vz += (Math.random() - 0.5) * factor * 0.5;
            }
          }
        }

        // Apply friction
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.vz *= 0.98;

        // 3D Matrix Rotation (Yaw Y, then Pitch X)
        // Rotate around Y
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        // Rotate around X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // 3D Perspective Projection
        const scale = focalLength / Math.max(focalLength + z2, 50);
        p.projX = centerX + x1 * scale;
        p.projY = centerY + y2 * scale;
        p.projScale = scale;
      }

      // Sort particles by projected depth (z2 back-to-front)
      particles.sort((a, b) => b.projScale - a.projScale);

      // --- 3. RENDER 3D SPHERICAL SHOCKWAVES ---
      for (let sIdx = shockwaves.length - 1; sIdx >= 0; sIdx--) {
        const sw = shockwaves[sIdx];
        sw.radius += sw.speed;
        sw.alpha = Math.max(0, 0.7 * (1 - sw.radius / sw.maxRadius));

        if (sw.radius >= sw.maxRadius || sw.alpha <= 0.01) {
          shockwaves.splice(sIdx, 1);
          continue;
        }

        // Project shockwave center with 3D rotation
        const sx1 = sw.x * cosY + sw.z * sinY;
        const sz1 = -sw.x * sinY + sw.z * cosY;
        const sy2 = sw.y * cosX - sz1 * sinX;
        const sz2 = sw.y * sinX + sz1 * cosX;
        const sScale = focalLength / Math.max(focalLength + sz2, 50);

        const projCenterX = centerX + sx1 * sScale;
        const projCenterY = centerY + sy2 * sScale;
        const projRadius = sw.radius * sScale;

        ctx.beginPath();
        ctx.arc(projCenterX, projCenterY, projRadius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark
          ? `rgba(56, 189, 248, ${sw.alpha * 0.7})`
          : `rgba(2, 132, 199, ${sw.alpha * 0.5})`;
        ctx.lineWidth = Math.max(1, 3.5 * sScale * (1 - sw.radius / sw.maxRadius));
        ctx.stroke();

        // Displace 3D particles hit by shockwave sphere
        for (const p of particles) {
          const dx = p.x - sw.x;
          const dy = p.y - sw.y;
          const dz = p.z - sw.z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
          if (Math.abs(dist - sw.radius) < 30 && dist > 1) {
            const push = (1 - Math.abs(dist - sw.radius) / 30) * 4.5;
            p.vx += (dx / dist) * push;
            p.vy += (dy / dist) * push;
            p.vz += (dz / dist) * push;
          }
        }
      }

      // --- 4. RENDER 3D CONSTELLATION FILAMENTS ---
      const maxConnectDist = 140;
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          // 3D Euclidean distance
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dz = p1.z - p2.z;
          const dist3D = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist3D < maxConnectDist) {
            const lineAlpha = (1 - dist3D / maxConnectDist) * 0.3 * Math.min(p1.projScale, p2.projScale);
            ctx.beginPath();
            ctx.moveTo(p1.projX, p1.projY);
            ctx.lineTo(p2.projX, p2.projY);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${lineAlpha})`
              : `rgba(2, 132, 199, ${lineAlpha * 0.8})`;
            ctx.lineWidth = Math.max(0.5, 1.2 * Math.min(p1.projScale, p2.projScale));
            ctx.stroke();
          }
        }
      }

      // --- 5. RENDER CURSOR 3D SPOTLIGHT & LASER FILAMENTS ---
      if (isCursorActive && mouseX > 0 && mouseY > 0) {
        // Cursor 3D Spotlight Aura
        const cursorGlow = ctx.createRadialGradient(
          mouseX, mouseY, 0,
          mouseX, mouseY, 220
        );
        cursorGlow.addColorStop(0, isDark ? 'rgba(16, 185, 129, 0.25)' : 'rgba(5, 150, 105, 0.20)');
        cursorGlow.addColorStop(0.5, isDark ? 'rgba(52, 211, 153, 0.10)' : 'rgba(16, 185, 129, 0.08)');
        cursorGlow.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(mouseX, mouseY, 220, 0, Math.PI * 2);
        ctx.fillStyle = cursorGlow;
        ctx.fill();

        // Connect 8 closest 3D particles to cursor
        const sortedByProjDist = [...particles]
          .map(p => {
            const d = Math.sqrt((p.projX - mouseX) ** 2 + (p.projY - mouseY) ** 2);
            return { p, d };
          })
          .sort((a, b) => a.d - b.d)
          .slice(0, 8);

        for (const { p, d } of sortedByProjDist) {
          if (d < 220) {
            const alpha = (1 - d / 220) * 0.75 * p.projScale;
            const grad = ctx.createLinearGradient(mouseX, mouseY, p.projX, p.projY);
            grad.addColorStop(0, isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha * 0.8})`);
            grad.addColorStop(0.4, isDark ? `rgba(52, 211, 153, ${alpha * 0.9})` : `rgba(16, 185, 129, ${alpha})`);
            grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${alpha * 0.4})`);

            ctx.beginPath();
            ctx.moveTo(mouseX, mouseY);
            ctx.lineTo(p.projX, p.projY);
            ctx.strokeStyle = grad;
            ctx.lineWidth = Math.max(1, 2.2 * p.projScale * (1 - d / 220));
            ctx.stroke();

            // Light packet pulse
            const progress = (Date.now() * 0.003) % 1;
            const px = mouseX + (p.projX - mouseX) * progress;
            const py = mouseY + (p.projY - mouseY) * progress;

            ctx.beginPath();
            ctx.arc(px, py, 2.5 * p.projScale, 0, Math.PI * 2);
            ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${alpha})` : `rgba(5, 150, 105, ${alpha})`;
            ctx.fill();
          }
        }
      }

      // --- 6. RENDER 3D PARTICLES ---
      const now = Date.now() * 0.002;
      for (const p of particles) {
        const pulse = Math.sin(now * p.pulseSpeed * 10 + p.pulseOffset) * 0.3 + 0.7;
        const currentRadius = p.radius * p.projScale * pulse;

        // Depth-scaled Halo
        const haloRadius = currentRadius * 3.5;
        const halo = ctx.createRadialGradient(
          p.projX, p.projY, 0,
          p.projX, p.projY, haloRadius
        );
        halo.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${0.8 * p.projScale})`);
        halo.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(p.projX, p.projY, haloRadius, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // 3D Particle Core
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, Math.max(0.8, currentRadius), 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(255, 255, 255, ${0.95 * p.projScale})` : `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.95)`;
        ctx.fill();
      }

      // --- 7. RENDER 3D KINETIC SPARKS ---
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx;
        sp.y += sp.vy;
        sp.z += sp.vz;
        sp.vx *= 0.95;
        sp.vy *= 0.95;
        sp.vz *= 0.95;
        sp.alpha -= 0.025;

        if (sp.alpha <= 0.01) {
          sparks.splice(i, 1);
          continue;
        }

        const spScale = focalLength / Math.max(focalLength + sp.z, 50);
        const spProjX = centerX + sp.x * spScale;
        const spProjY = centerY + sp.y * spScale;

        ctx.beginPath();
        ctx.arc(spProjX, spProjY, Math.max(1, sp.radius * spScale), 0, Math.PI * 2);
        ctx.fillStyle = isDark ? `rgba(56, 189, 248, ${sp.alpha})` : `rgba(2, 132, 199, ${sp.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('mouseleave', handlePointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="ambient-cursor-canvas"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-95 transition-opacity duration-700"
      aria-hidden="true"
    />
  );
}
