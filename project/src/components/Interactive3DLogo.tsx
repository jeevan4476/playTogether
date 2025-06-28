import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';

const LogoGeometry: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  const groupRef = useRef<THREE.Group>(null);
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      sphereRef.current.rotation.z = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        {/* Central Sphere */}
        <Sphere ref={sphereRef} args={[0.3, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial
            color={isHovered ? "#10b981" : "#3b82f6"}
            roughness={0.1}
            metalness={0.8}
            emissive={isHovered ? "#10b981" : "#3b82f6"}
            emissiveIntensity={0.2}
          />
        </Sphere>
        
        {/* Orbiting Elements */}
        {[0, 1, 2].map((i) => (
          <Float key={i} speed={1.5 + i * 0.3} rotationIntensity={0.3} floatIntensity={0.5}>
            <Box
              args={[0.1, 0.1, 0.1]}
              position={[
                Math.cos((i * Math.PI * 2) / 3) * 0.8,
                Math.sin((i * Math.PI * 2) / 3) * 0.8,
                0
              ]}
            >
              <meshStandardMaterial
                color={isHovered ? "#8b5cf6" : "#10b981"}
                transparent
                opacity={0.8}
              />
            </Box>
          </Float>
        ))}
      </Float>
    </group>
  );
};

interface Interactive3DLogoProps {
  isHovered: boolean;
  size?: number;
}

const Interactive3DLogo: React.FC<Interactive3DLogoProps> = ({ isHovered, size = 60 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[2, 2, 2]} intensity={0.8} color="#ffffff" />
        <pointLight position={[-2, -2, -2]} intensity={0.4} color="#10b981" />
        
        <LogoGeometry isHovered={isHovered} />
      </Canvas>
    </div>
  );
};

export default Interactive3DLogo;