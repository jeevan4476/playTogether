import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField: React.FC = () => {
  const ref = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    const colors = new Float32Array(2000 * 3);
    
    for (let i = 0; i < 2000; i++) {
      // Create a more organic distribution
      const radius = Math.random() * 20 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      
      // Gradient colors from emerald to blue
      const t = Math.random();
      colors[i * 3] = 0.1 + t * 0.3; // R
      colors[i * 3 + 1] = 0.8 - t * 0.2; // G
      colors[i * 3 + 2] = 0.4 + t * 0.4; // B
    }
    
    return [positions, colors];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.08) * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={positions} colors={colors}>
      <PointMaterial
        transparent
        size={0.05}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const FloatingOrbs: React.FC = () => {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[0.8, 32, 32]} position={[-8, 4, -5]}>
          <meshStandardMaterial
            color="#10b981"
            transparent
            opacity={0.3}
            roughness={0}
            metalness={0.8}
          />
        </Sphere>
      </Float>
      
      <Float speed={2} rotationIntensity={0.3} floatIntensity={1.2}>
        <Sphere args={[0.6, 32, 32]} position={[6, -3, -8]}>
          <meshStandardMaterial
            color="#3b82f6"
            transparent
            opacity={0.25}
            roughness={0}
            metalness={0.9}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.6}>
        <Sphere args={[0.4, 32, 32]} position={[4, 6, -3]}>
          <meshStandardMaterial
            color="#8b5cf6"
            transparent
            opacity={0.4}
            roughness={0}
            metalness={0.7}
          />
        </Sphere>
      </Float>
    </>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.6} color="#3b82f6" />
        
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;