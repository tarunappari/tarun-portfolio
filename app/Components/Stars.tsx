import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

const Stars: React.FC = (props) => {
  const ref = useRef<THREE.Points>(null!);

  // Initialize sphere positions
  const [sphere] = useState(() => {
    const positions = new Float32Array(5000);
    inSphere(positions, { radius: 1.2 });

    // Debugging: Check if there are NaN values
    for (let i = 0; i < positions.length; i++) {
      if (isNaN(positions[i])) {
        console.error('NaN value found in positions array at index', i);
      }
    }

    return positions;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f5bee3"
          size={0.0009}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
