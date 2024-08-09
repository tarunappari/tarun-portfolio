import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import { inSphere } from 'maath/random';
import * as THREE from 'three';

interface StarsProps {
  [key: string]: any;
}

const Stars: React.FC<StarsProps> = (props) => {
  const ref = useRef<THREE.Points>(null!);

  // Create sphere positions as Float32Array
  const [sphere] = useState<Float32Array>(() => {
    const positions = new Float32Array(5000);
    inSphere(positions, { radius: 0.6 });
    return positions;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta / 20; // Rotate around Y axis
      ref.current.rotation.z -= delta / 25; // Rotate around Z axis
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f8a1db'
          size={0.0007}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
  return (
    <div className='w-full p h-auto absolute inset-0 z-[-1]'>
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
