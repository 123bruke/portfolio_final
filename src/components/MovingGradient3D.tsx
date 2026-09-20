import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function MovingGradient3D() {
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

    let animId: number;
    let width = 0;
    let height = 0;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3D Moving Gradient Plasma Blooms
    const blobs = [
      {
        x: width * 0.25,
        y: height * 0.3,
        z: 0,
        baseRadius: 420,
        angle: 0,
        speed: 0.007,
        colorDark: 'rgba(16, 185, 129, 0.20)', // Emerald Green
        colorLight: 'rgba(16, 185, 129, 0.14)',
      },
      {
        x: width * 0.75,
        y: height * 0.45,
        z: 50,
        baseRadius: 480,
        angle: Math.PI / 2,
        speed: 0.005,
        colorDark: 'rgba(5, 150, 105, 0.22)', // Jade Green
        colorLight: 'rgba(5, 150, 105, 0.12)',
      },
      {
        x: width * 0.5,
        y: height * 0.75,
        z: -30,
        baseRadius: 440,
        angle: Math.PI,
        speed: 0.008,
        colorDark: 'rgba(52, 211, 153, 0.16)', // Mint Green
        colorLight: 'rgba(52, 211, 153, 0.10)',
      },
      {
        x: width * 0.35,
        y: height * 0.85,
        z: 20,
        baseRadius: 360,
        angle: Math.PI * 1.5,
        speed: 0.006,
        colorDark: 'rgba(255, 255, 255, 0.07)', // Glowing crisp white bloom
        colorLight: 'rgba(0, 0, 0, 0.05)',
      },
    ];

    // 3D Floating Particle Starfield with Depth (Z-axis)
    const particleCount = 65;
    const particles = Array.from({ length: particleCount }, () => ({
      x: (Math.random() - 0.5) * 1600,
      y: (Math.random() - 0.5) * 1200,
      z: Math.random() * 1000 + 100,
      size: Math.random() * 2.5 + 1.2,
      vz: Math.random() * 0.8 + 0.3,
      pulse: Math.random() * Math.PI * 2,
    }));

    // 3D Rotating Geometric Wireframe Polyhedra / Rings
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    // Octahedron 3D vertices
    const octaVertices: Point3D[] = [
      { x: 0, y: -90, z: 0 },
      { x: 90, y: 0, z: 0 },
      { x: 0, y: 0, z: 90 },
      { x: -90, y: 0, z: 0 },
      { x: 0, y: 0, z: -90 },
      { x: 0, y: 90, z: 0 },
    ];

    const octaEdges = [
      [0, 1], [0, 2], [0, 3], [0, 4],
      [5, 1], [5, 2], [5, 3], [5, 4],
      [1, 2], [2, 3], [3, 4], [4, 1],
    ];

    let rotX = 0;
    let rotY = 0;
    let rotZ = 0;
    let t = 0;

    const project3D = (p: Point3D, cx: number, cy: number, fov = 450) => {
      // Perspective projection
      const factor = fov / (fov + p.z);
      return {
        x: cx + p.x * factor,
        y: cy + p.y * factor,
        scale: factor,
      };
    };

    const rotatePoint = (p: Point3D, rx: number, ry: number, rz: number): Point3D => {
      // Rotate around X
      let y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
      let z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);

      // Rotate around Y
      let x2 = p.x * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -p.x * Math.sin(ry) + z1 * Math.cos(ry);

      // Rotate around Z
      let x3 = x2 * Math.cos(rz) - y1 * Math.sin(rz);
      let y3 = x2 * Math.sin(rz) + y1 * Math.cos(rz);

      return { x: x3, y: y3, z: z2 };
    };

    const render = () => {
      t += 0.015;
      rotX += 0.006;
      rotY += 0.009;
      rotZ += 0.004;

      // Smooth mouse follow with 3D parallax tilt
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      const mouseNormX = (mouseX / width - 0.5) * 2; // -1 to 1
      const mouseNormY = (mouseY / height - 0.5) * 2; // -1 to 1

      const isDark = themeRef.current === 'dark';

      // Clear base
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = isDark ? '#000000' : '#ffffff';
      ctx.fillRect(0, 0, width, height);

      // 1. Render 3D Dynamic Moving Gradient Blobs
      blobs.forEach((b, i) => {
        b.angle += b.speed;
        const offsetX = Math.cos(b.angle) * 140 + mouseNormX * 60 * (i + 1);
        const offsetY = Math.sin(b.angle * 1.3) * 110 + mouseNormY * 50 * (i + 1);

        const curX = b.x + offsetX;
        const curY = b.y + offsetY;
        const curR = b.baseRadius + Math.sin(t + i * 2) * 50;

        const radGrad = ctx.createRadialGradient(
          curX,
          curY,
          curR * 0.08,
          curX,
          curY,
          curR
        );

        const color = isDark ? b.colorDark : b.colorLight;
        radGrad.addColorStop(0, color);
        radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.arc(curX, curY, curR, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Render 3D Perspective Ground Grid (Tron/Cyberspace 3D Grid Plane)
      ctx.save();
      const horizonY = height * 0.65 + mouseNormY * 40;
      const vanishingX = width * 0.5 + mouseNormX * 70;
      const gridColor = isDark ? 'rgba(16, 185, 129, 0.12)' : 'rgba(0, 0, 0, 0.07)';
      ctx.strokeStyle = gridColor;
      ctx.lineWidth = 1;

      // Radial perspective lines receding to 3D vanishing point
      const rays = 28;
      for (let i = 0; i <= rays; i++) {
        const bottomX = (width / rays) * i;
        ctx.beginPath();
        ctx.moveTo(vanishingX, horizonY);
        ctx.lineTo(bottomX, height);
        ctx.stroke();
      }

      // Horizontal lines with exponential 3D perspective spacing
      const planes = 14;
      for (let i = 1; i <= planes; i++) {
        const factor = Math.pow(i / planes, 2.4);
        const py = horizonY + (height - horizonY) * factor;
        ctx.beginPath();
        ctx.moveTo(0, py);
        ctx.lineTo(width, py);
        ctx.stroke();
      }
      ctx.restore();

      // 3. Render 3D Floating Particle Constellation
      ctx.save();
      const fov = 400;
      const centerX = width / 2 + mouseNormX * 40;
      const centerY = height / 2 + mouseNormY * 30;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.z -= p.vz;
        if (p.z < 10) p.z = 1000;

        const scale = fov / (fov + p.z);
        const screenX = centerX + p.x * scale;
        const screenY = centerY + p.y * scale;

        if (screenX >= 0 && screenX <= width && screenY >= 0 && screenY <= height) {
          const alpha = (1 - p.z / 1000) * (isDark ? 0.75 : 0.45);
          const size = p.size * scale * (1 + Math.sin(t * 2 + p.pulse) * 0.25);

          ctx.fillStyle = isDark
            ? (i % 3 === 0 ? `rgba(255, 255, 255, ${alpha})` : `rgba(52, 211, 153, ${alpha})`)
            : `rgba(16, 185, 129, ${alpha})`;

          ctx.beginPath();
          ctx.arc(screenX, screenY, Math.max(0.8, size), 0, Math.PI * 2);
          ctx.fill();

          // Connect close particles in 3D
          for (let j = i + 1; j < Math.min(i + 4, particles.length); j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y, p.z - p2.z);
            if (dist < 180) {
              const lineAlpha = (1 - dist / 180) * (isDark ? 0.12 : 0.06);
              ctx.strokeStyle = isDark ? `rgba(16, 185, 129, ${lineAlpha})` : `rgba(0, 0, 0, ${lineAlpha})`;
              const scale2 = fov / (fov + p2.z);
              ctx.beginPath();
              ctx.moveTo(screenX, screenY);
              ctx.lineTo(centerX + p2.x * scale2, centerY + p2.y * scale2);
              ctx.stroke();
            }
          }
        }
      }
      ctx.restore();

      // 4. Render Floating 3D Octahedron Wireframes in Space
      ctx.save();
      const shapes = [
        { cx: width * 0.88, cy: height * 0.28, baseScale: 1.1, rx: rotX, ry: rotY, rz: rotZ },
        { cx: width * 0.12, cy: height * 0.72, baseScale: 0.85, rx: -rotX * 0.8, ry: -rotY * 0.9, rz: rotZ * 1.2 },
      ];

      shapes.forEach((s) => {
        const transformedVertices = octaVertices.map((v) => {
          const scaled: Point3D = {
            x: v.x * s.baseScale,
            y: v.y * s.baseScale,
            z: v.z * s.baseScale + 120,
          };
          const rotated = rotatePoint(scaled, s.rx + mouseNormY * 0.3, s.ry + mouseNormX * 0.4, s.rz);
          return project3D(rotated, s.cx + mouseNormX * 25, s.cy + mouseNormY * 20, 500);
        });

        // Draw edges
        ctx.strokeStyle = isDark ? 'rgba(52, 211, 153, 0.45)' : 'rgba(16, 185, 129, 0.4)';
        ctx.lineWidth = 1.4;
        octaEdges.forEach(([i1, i2]) => {
          const v1 = transformedVertices[i1];
          const v2 = transformedVertices[i2];
          ctx.beginPath();
          ctx.moveTo(v1.x, v1.y);
          ctx.lineTo(v2.x, v2.y);
          ctx.stroke();
        });

        // Draw glowing vertices
        transformedVertices.forEach((v) => {
          ctx.fillStyle = isDark ? '#ffffff' : '#10b981';
          ctx.beginPath();
          ctx.arc(v.x, v.y, 2.5 * v.scale, 0, Math.PI * 2);
          ctx.fill();
        });
      });
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block transition-opacity duration-700"
      />
      {/* 3D Vignette Depth Mask */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 dark:to-black/80 pointer-events-none" 
      />
    </div>
  );
}
