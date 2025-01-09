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
    const count = 300;

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 30 + Math.random() * 500;
      angles.push(angle);
      radii.push(radius);
      speeds.push(0.00005 + Math.random() * 0.001);
      const x = Math.cos(angle) * radius, y = Math.sin(angle) * radius;
      positions.push(x, y, 0);

      const c = new THREE.Color(`hsl(210, 50%, ${0.01 + Math.random() * 20}%)`);
      colors.push(c.r, c.g, c.b);

      sizes.push(Math.random() * 2 + 3);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(new Float32Array(positions), 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(colors), 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(new Float32Array(sizes), 1));

    const pointsMaterial = new THREE.PointsMaterial({ size: 4, vertexColors: true });
    const points = new THREE.Points(geometry, pointsMaterial);
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
        background: 'linear-gradient(to bottom, #070c16, #000000)'
      }}
    />
  );
};

export default Background;
