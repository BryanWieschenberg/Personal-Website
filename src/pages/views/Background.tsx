import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Background: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const angles: number[] = [];
    const radii: number[] = [];
    const speeds: number[] = [];
    const sizes: number[] = [];
    const count = 500;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 30 + Math.random() * 500;
      angles.push(angle);
      radii.push(radius);

      // Generate size with rare larger values
      const size =
        Math.random() < 0.99
          ? 0.5 + Math.random() * 5 // Normal range
          : 5 + Math.random() * 15; // Rare larger values
      sizes.push(size);

      // Speed as a function of size
      speeds.push((size * .1) * (0.0001 + Math.random() * 0.0005));

      positions.push(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);

      // Generate a random brighter blue color
      const c = new THREE.Color(`hsl(210, 80%, ${5 + Math.random() * 60}%)`);
      colors.push(c.r, c.g, c.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(colors), 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(new Float32Array(sizes), 1));

    const material = new THREE.ShaderMaterial({
      vertexColors: true,
      transparent: true,
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          vec2 uv = gl_PointCoord - 0.5;
          if (length(uv) > 0.5) discard;
          gl_FragColor = vec4(vColor, 1.0);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      requestAnimationFrame(animate);
      const pos = geometry.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < count; i++) {
        angles[i] += speeds[i];
        const x = Math.cos(angles[i]) * radii[i];
        const y = Math.sin(angles[i]) * radii[i];
        pos.setXYZ(i, x, y, 0);
      }
      pos.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #09142a, #03060d 40%, #000000 100%)',
      }}
    />
  );
};

export default Background;
