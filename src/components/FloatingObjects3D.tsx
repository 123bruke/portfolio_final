import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

interface FloatingObject {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  rx: number;
  ry: number;
  rz: number;
  vrx: number;
  vry: number;
  vrz: number;
  size: number;
  type: 'cube' | 'prism' | 'ring' | 'sphere' | 'diamond';
  opacity: number;
  pulseSpeed: number;
  pulseOffset: number;
}

export default function FloatingObjects3D() {
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
    let width = window.innerWidth;
    let height = window.innerHeight;

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

    // Generate transparent animative 3D floating objects
    const objects: FloatingObject[] = [
      {
        x: width * 0.15,
        y: height * 0.22,
        z: 320,
        vx: 0.15,
        vy: -0.12,
        rx: 0.2,
        ry: 0.4,
        rz: 0.1,
        vrx: 0.008,
        vry: 0.012,
        vrz: 0.006,
        size: 55,
        type: 'cube',
        opacity: 0.65,
        pulseSpeed: 0.02,
        pulseOffset: 0,
      },
      {
        x: width * 0.88,
        y: height * 0.35,
        z: 280,
        vx: -0.18,
        vy: 0.14,
        rx: 0.5,
        ry: 0.1,
        rz: 0.3,
        vrx: 0.01,
        vry: 0.009,
        vrz: 0.014,
        size: 70,
        type: 'ring',
        opacity: 0.75,
        pulseSpeed: 0.025,
        pulseOffset: 1.2,
      },
      {
        x: width * 0.82,
        y: height * 0.78,
        z: 360,
        vx: -0.12,
        vy: -0.15,
        rx: 0.8,
        ry: 0.6,
        rz: 0.2,
        vrx: 0.009,
        vry: 0.011,
        vrz: 0.007,
        size: 60,
        type: 'diamond',
        opacity: 0.7,
        pulseSpeed: 0.018,
        pulseOffset: 2.5,
      },
      {
        x: width * 0.1,
        y: height * 0.75,
        z: 300,
        vx: 0.14,
        vy: 0.16,
        rx: 0.3,
        ry: 0.7,
        rz: 0.5,
        vrx: 0.012,
        vry: 0.008,
        vrz: 0.01,
        size: 65,
        type: 'prism',
        opacity: 0.68,
        pulseSpeed: 0.022,
        pulseOffset: 3.8,
      },
      {
        x: width * 0.52,
        y: height * 0.12,
        z: 420,
        vx: 0.1,
        vy: -0.1,
        rx: 0.1,
        ry: 0.2,
        rz: 0.3,
        vrx: 0.007,
        vry: 0.014,
        vrz: 0.008,
        size: 45,
        type: 'sphere',
        opacity: 0.6,
        pulseSpeed: 0.03,
        pulseOffset: 4.1,
      },
      {
        x: width * 0.48,
        y: height * 0.88,
        z: 340,
        vx: -0.16,
        vy: 0.11,
        rx: 0.4,
        ry: 0.5,
        rz: 0.1,
        vrx: 0.011,
        vry: 0.01,
        vrz: 0.013,
        size: 50,
        type: 'ring',
        opacity: 0.7,
        pulseSpeed: 0.024,
        pulseOffset: 5.2,
      },
      {
        x: width * 0.93,
        y: height * 0.15,
        z: 460,
        vx: -0.08,
        vy: 0.12,
        rx: 0.3,
        ry: 0.3,
        rz: 0.3,
        vrx: 0.015,
        vry: 0.006,
        vrz: 0.009,
        size: 40,
        type: 'diamond',
        opacity: 0.55,
        pulseSpeed: 0.035,
        pulseOffset: 0.8,
      },
      {
        x: width * 0.06,
        y: height * 0.48,
        z: 380,
        vx: 0.12,
        vy: -0.14,
        rx: 0.6,
        ry: 0.2,
        rz: 0.4,
        vrx: 0.008,
        vry: 0.013,
        vrz: 0.011,
        size: 48,
        type: 'sphere',
        opacity: 0.62,
        pulseSpeed: 0.028,
        pulseOffset: 2.1,
      },
    ];

    let t = 0;

    // 3D Math Helpers
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    const rotateX = (p: Point3D, angle: number): Point3D => ({
      x: p.x,
      y: p.y * Math.cos(angle) - p.z * Math.sin(angle),
      z: p.y * Math.sin(angle) + p.z * Math.cos(angle),
    });

    const rotateY = (p: Point3D, angle: number): Point3D => ({
      x: p.x * Math.cos(angle) + p.z * Math.sin(angle),
      y: p.y,
      z: -p.x * Math.sin(angle) + p.z * Math.cos(angle),
    });

    const rotateZ = (p: Point3D, angle: number): Point3D => ({
      x: p.x * Math.cos(angle) - p.y * Math.sin(angle),
      y: p.x * Math.sin(angle) + p.y * Math.cos(angle),
      z: p.z,
    });

    const project = (p: Point3D, cx: number, cy: number, fov = 450) => {
      const factor = fov / (fov + p.z);
      return {
        x: cx + p.x * factor,
        y: cy + p.y * factor,
        scale: factor,
      };
    };

    // 3D Geometry Definitions
    // Transparent Cube
    const cubeVertices: Point3D[] = [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 },
    ];
    const cubeFaces = [
      [0, 1, 2, 3], // Front
      [5, 4, 7, 6], // Back
      [4, 0, 3, 7], // Left
      [1, 5, 6, 2], // Right
      [4, 5, 1, 0], // Top
      [3, 2, 6, 7], // Bottom
    ];

    // Transparent Octahedron (Diamond)
    const diamondVertices: Point3D[] = [
      { x: 0, y: -1.4, z: 0 },
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 0, z: 1 },
      { x: -1, y: 0, z: 0 },
      { x: 0, y: 0, z: -1 },
      { x: 0, y: 1.4, z: 0 },
    ];
    const diamondFaces = [
      [0, 1, 2],
      [0, 2, 3],
      [0, 3, 4],
      [0, 4, 1],
      [5, 2, 1],
      [5, 3, 2],
      [5, 4, 3],
      [5, 1, 4],
    ];

    // Triangular Prism
    const prismVertices: Point3D[] = [
      { x: 0, y: -1.2, z: -1 },
      { x: 1, y: 0.8, z: -1 },
      { x: -1, y: 0.8, z: -1 },
      { x: 0, y: -1.2, z: 1 },
      { x: 1, y: 0.8, z: 1 },
      { x: -1, y: 0.8, z: 1 },
    ];
    const prismFaces = [
      [0, 1, 2],
      [3, 5, 4],
      [0, 3, 4, 1],
      [1, 4, 5, 2],
      [2, 5, 3, 0],
    ];

    const render = () => {
      t += 0.02;

      // Mouse Parallax Follow
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      const mouseParallaxX = (mouseX / width - 0.5) * 35;
      const mouseParallaxY = (mouseY / height - 0.5) * 35;

      const isDark = themeRef.current === 'dark';

      ctx.clearRect(0, 0, width, height);

      // Render all 3D floating transparent objects
      objects.forEach((obj) => {
        // Continuous organic drifting animation
        obj.x += obj.vx;
        obj.y += obj.vy;
        obj.rx += obj.vrx;
        obj.ry += obj.vry;
        obj.rz += obj.vrz;

        // Bounce gently within screen bounds + margins
        if (obj.x < -80) obj.x = width + 80;
        if (obj.x > width + 80) obj.x = -80;
        if (obj.y < -80) obj.y = height + 80;
        if (obj.y > height + 80) obj.y = -80;

        // Sine pulse for transparent glowing breathing effect
        const pulse = Math.sin(t * obj.pulseSpeed * 60 + obj.pulseOffset);
        const curScale = obj.size * (1 + pulse * 0.08);

        const cx = obj.x + mouseParallaxX;
        const cy = obj.y + mouseParallaxY;

        ctx.save();

        if (obj.type === 'cube' || obj.type === 'diamond' || obj.type === 'prism') {
          const rawVertices =
            obj.type === 'cube'
              ? cubeVertices
              : obj.type === 'diamond'
              ? diamondVertices
              : prismVertices;

          const faces =
            obj.type === 'cube'
              ? cubeFaces
              : obj.type === 'diamond'
              ? diamondFaces
              : prismFaces;

          // Rotate and scale vertices in 3D
          const transformed = rawVertices.map((v) => {
            let p: Point3D = {
              x: v.x * curScale,
              y: v.y * curScale,
              z: v.z * curScale,
            };
            p = rotateX(p, obj.rx);
            p = rotateY(p, obj.ry);
            p = rotateZ(p, obj.rz);
            p.z += obj.z;
            return {
              p3d: p,
              p2d: project(p, cx, cy, 450),
            };
          });

          // Draw transparent frosted glass faces with gradient sheen
          faces.forEach((faceIndices) => {
            const facePoints = faceIndices.map((idx) => transformed[idx]);

            // Calculate face normal Z for backface culling / lighting
            const p0 = facePoints[0].p3d;
            const p1 = facePoints[1].p3d;
            const p2 = facePoints[2].p3d;

            const v1 = { x: p1.x - p0.x, y: p1.y - p0.y, z: p1.z - p0.z };
            const v2 = { x: p2.x - p0.x, y: p2.y - p0.y, z: p2.z - p0.z };
            const normalZ = v1.x * v2.y - v1.y * v2.x;

            // Translucent glass shading
            const baseAlpha = isDark ? 0.12 : 0.08;
            const lightReflection = Math.max(0.04, Math.abs(normalZ) / 12000);
            const alpha = Math.min(0.35, baseAlpha + lightReflection * 0.2);

            ctx.beginPath();
            ctx.moveTo(facePoints[0].p2d.x, facePoints[0].p2d.y);
            for (let i = 1; i < facePoints.length; i++) {
              ctx.lineTo(facePoints[i].p2d.x, facePoints[i].p2d.y);
            }
            ctx.closePath();

            // Gradient glass reflection
            const grad = ctx.createLinearGradient(
              facePoints[0].p2d.x,
              facePoints[0].p2d.y,
              facePoints[1].p2d.x,
              facePoints[1].p2d.y
            );

            if (isDark) {
              grad.addColorStop(0, `rgba(52, 211, 153, ${alpha * 1.5})`);
              grad.addColorStop(0.5, `rgba(45, 212, 191, ${alpha})`);
              grad.addColorStop(1, `rgba(255, 255, 255, ${alpha * 1.8})`);
            } else {
              grad.addColorStop(0, `rgba(16, 185, 129, ${alpha * 1.4})`);
              grad.addColorStop(0.5, `rgba(5, 150, 105, ${alpha})`);
              grad.addColorStop(1, `rgba(255, 255, 255, ${alpha * 2})`);
            }

            ctx.fillStyle = grad;
            ctx.fill();

            // Glowing transparent edge line
            ctx.strokeStyle = isDark
              ? `rgba(52, 211, 153, ${0.4 + pulse * 0.2})`
              : `rgba(16, 185, 129, ${0.35 + pulse * 0.15})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          });

          // Draw vertex highlight sparkles
          transformed.forEach((v) => {
            ctx.fillStyle = isDark ? '#ffffff' : '#10b981';
            ctx.beginPath();
            ctx.arc(v.p2d.x, v.p2d.y, 1.8 * v.p2d.scale, 0, Math.PI * 2);
            ctx.fill();
          });

        } else if (obj.type === 'ring') {
          // Transparent 3D Torus / Ring with continuous animated gradient refraction
          const ringRadius = curScale * 0.85;
          const tubeRadius = ringRadius * 0.28;
          const segments = 16;

          for (let s = 0; s < segments; s++) {
            const angle = (s / segments) * Math.PI * 2 + t * 0.5;
            const nextAngle = ((s + 1) / segments) * Math.PI * 2 + t * 0.5;

            const rx1 = Math.cos(angle) * ringRadius;
            const rz1 = Math.sin(angle) * ringRadius;
            const rx2 = Math.cos(nextAngle) * ringRadius;
            const rz2 = Math.sin(nextAngle) * ringRadius;

            let p1: Point3D = { x: rx1, y: Math.sin(angle * 2) * tubeRadius, z: rz1 };
            let p2: Point3D = { x: rx2, y: Math.sin(nextAngle * 2) * tubeRadius, z: rz2 };

            p1 = rotateX(p1, obj.rx);
            p1 = rotateY(p1, obj.ry);
            p1 = rotateZ(p1, obj.rz);
            p1.z += obj.z;

            p2 = rotateX(p2, obj.rx);
            p2 = rotateY(p2, obj.ry);
            p2 = rotateZ(p2, obj.rz);
            p2.z += obj.z;

            const proj1 = project(p1, cx, cy, 450);
            const proj2 = project(p2, cx, cy, 450);

            ctx.beginPath();
            ctx.moveTo(proj1.x, proj1.y);
            ctx.lineTo(proj2.x, proj2.y);

            const hueProgress = (s / segments + t * 0.1) % 1;
            ctx.strokeStyle = isDark
              ? `rgba(${hueProgress > 0.5 ? '52, 211, 153' : '255, 255, 255'}, ${0.45 + pulse * 0.2})`
              : `rgba(${hueProgress > 0.5 ? '16, 185, 129' : '5, 150, 105'}, ${0.4 + pulse * 0.15})`;
            ctx.lineWidth = 2.4 * proj1.scale;
            ctx.stroke();
          }

        } else if (obj.type === 'sphere') {
          // Transparent Glass Sphere / Bubble with iridescent refraction rings
          const rad = curScale * 0.65;
          const sphereGrad = ctx.createRadialGradient(
            cx - rad * 0.35,
            cy - rad * 0.35,
            rad * 0.1,
            cx,
            cy,
            rad
          );

          if (isDark) {
            sphereGrad.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
            sphereGrad.addColorStop(0.3, 'rgba(52, 211, 153, 0.2)');
            sphereGrad.addColorStop(0.7, 'rgba(45, 212, 191, 0.08)');
            sphereGrad.addColorStop(1, 'rgba(16, 185, 129, 0.3)');
          } else {
            sphereGrad.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
            sphereGrad.addColorStop(0.3, 'rgba(16, 185, 129, 0.15)');
            sphereGrad.addColorStop(0.7, 'rgba(5, 150, 105, 0.05)');
            sphereGrad.addColorStop(1, 'rgba(16, 185, 129, 0.25)');
          }

          ctx.fillStyle = sphereGrad;
          ctx.beginPath();
          ctx.arc(cx, cy, rad, 0, Math.PI * 2);
          ctx.fill();

          // Outer glowing glass rim
          ctx.strokeStyle = isDark
            ? `rgba(52, 211, 153, ${0.5 + pulse * 0.25})`
            : `rgba(16, 185, 129, ${0.45 + pulse * 0.2})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Internal specular crescent reflection
          ctx.beginPath();
          ctx.ellipse(
            cx - rad * 0.3,
            cy - rad * 0.3,
            rad * 0.35,
            rad * 0.15,
            -Math.PI / 4,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
          ctx.fill();
        }

        ctx.restore();
      });

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
      className="fixed inset-0 pointer-events-none z-[1] overflow-hidden"
      aria-hidden="true"
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
      />
    </div>
  );
}
