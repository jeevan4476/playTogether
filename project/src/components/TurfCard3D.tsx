import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, RoundedBox, Text, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { MapPin, Star, DollarSign, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Turf } from '../types';
import * as THREE from 'three';

interface TurfCard3DProps {
  turf: Turf;
  index: number;
}

const Card3D: React.FC<{ isHovered: boolean; theme: string }> = ({ isHovered, theme }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.3}>
      <RoundedBox
        ref={meshRef}
        args={[2, 2.5, 0.1]}
        radius={0.1}
        smoothness={4}
        scale={isHovered ? 1.05 : 1}
      >
        <meshStandardMaterial
          color={
            theme === 'light' 
              ? (isHovered ? "#FF6B6B" : "#4ECDC4")
              : (isHovered ? "#10b981" : "#3b82f6")
          }
          transparent
          opacity={0.1}
          roughness={0.1}
          metalness={0.8}
        />
      </RoundedBox>
    </Float>
  );
};

const TurfCard3D: React.FC<TurfCard3DProps> = ({ turf, index }) => {
  const { theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 15 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        rotateX: -5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative overflow-hidden border group ${
        theme === 'light'
          ? 'bg-white/95 backdrop-blur-xl rounded-2xl shadow-light-medium hover:shadow-light-strong border-light-border'
          : 'bg-gray-800/10 backdrop-blur-xl rounded-2xl shadow-2xl border-gray-700/30'
      }`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 opacity-30">
        <Canvas camera={{ position: [0, 0, 3] }}>
          <ambientLight intensity={0.5} />
          <pointLight 
            position={[2, 2, 2]} 
            intensity={0.8} 
            color={theme === 'light' ? "#FF6B6B" : "#10b981"} 
          />
          <Card3D isHovered={isHovered} theme={theme} />
        </Canvas>
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <div className="relative overflow-hidden">
          <motion.img
            src={turf.image}
            alt={turf.name}
            className="w-full h-48 object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          
          <div className="absolute top-4 left-4">
            <motion.span 
              className={`px-3 py-1 backdrop-blur-sm text-white text-sm font-medium rounded-full ${
                theme === 'light' 
                  ? 'bg-light-primary/90' 
                  : 'bg-emerald-500/90'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {turf.sportCategory}
            </motion.span>
          </div>
          
          <div className="absolute top-4 right-4">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`flex items-center space-x-1 backdrop-blur-sm px-2 py-1 rounded-full ${
                theme === 'light'
                  ? 'bg-white/95'
                  : 'bg-gray-800/90'
              }`}
            >
              <Star className="h-4 w-4 text-yellow-500 fill-current" />
              <span className={`text-sm font-medium ${
                theme === 'light' ? 'text-light-text-primary' : 'text-gray-200'
              }`}>
                {turf.rating}
              </span>
            </motion.div>
          </div>
        </div>
        
        <div className={`p-6 ${
          theme === 'light' 
            ? 'bg-white/90 backdrop-blur-sm' 
            : 'bg-gray-800/80 backdrop-blur-sm'
        }`}>
          <motion.h3 
            className={`text-xl font-bold mb-2 font-display ${
              theme === 'light' ? 'text-light-text-primary' : 'text-white'
            }`}
            whileHover={{ scale: 1.02 }}
          >
            {turf.name}
          </motion.h3>
          
          <div className={`flex items-center mb-3 ${
            theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
          }`}>
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{turf.address}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div 
                className={`flex items-center ${
                  theme === 'light' ? 'text-light-primary' : 'text-emerald-400'
                }`}
                whileHover={{ scale: 1.05 }}
              >
                <DollarSign className="h-4 w-4 mr-1" />
                <span className="font-semibold">₹{turf.price}</span>
                <span className={`text-sm ml-1 ${
                  theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
                }`}>/hour</span>
              </motion.div>
              
              <div className={`flex items-center ${
                theme === 'light' ? 'text-light-text-muted' : 'text-gray-400'
              }`}>
                <Clock className="h-4 w-4 mr-1" />
                <span className="text-sm">Available</span>
              </div>
            </div>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: theme === 'light' 
                  ? "0 10px 25px -5px rgba(255, 107, 107, 0.4)"
                  : "0 10px 25px -5px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 text-white rounded-lg transition-all duration-300 font-medium shadow-lg ${
                theme === 'light'
                  ? 'bg-coral-gradient hover:shadow-coral-glow'
                  : 'bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-600 hover:to-blue-600'
              }`}
            >
              Book Now
            </motion.button>
          </div>
          
          {turf.description && (
            <motion.p 
              className={`text-sm mt-3 line-clamp-2 ${
                theme === 'light' ? 'text-light-text-secondary' : 'text-gray-400'
              }`}
              initial={{ opacity: 0.7 }}
              whileHover={{ opacity: 1 }}
            >
              {turf.description}
            </motion.p>
          )}
        </div>
      </div>

      {/* 3D Hover Effect Overlay */}
      <motion.div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
          theme === 'light'
            ? 'bg-gradient-to-br from-light-primary/10 to-light-secondary/10'
            : 'bg-gradient-to-br from-emerald-500/10 to-blue-500/10'
        }`}
      />
    </motion.div>
  );
};

export default TurfCard3D;