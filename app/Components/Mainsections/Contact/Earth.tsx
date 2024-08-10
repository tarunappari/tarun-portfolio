import React, { Suspense, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../../Loader';
import * as THREE from 'three';

// Type for the GLTF model data
interface GLTFResult {
  scene: THREE.Group;
}

// Earth component to load and render the GLTF model
const Earth: React.FC = () => {
  const { scene } = useGLTF('./planet/scene.gltf') as GLTFResult;

  useFrame((state, delta) => {
    state.camera.position.z = Math.max(state.camera.position.z, 0.5);
  });

  return (
    <primitive object={scene} scale={2} position-y={0} rotation-y={0} />
  );
};

// Error boundary to catch errors in the 3D components
class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error in 3D rendering:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong while rendering 3D content.</div>;
    }

    return this.props.children;
  }
}

// EarthCanvas component to set up the 3D canvas and controls
const EarthCanvas: React.FC = () => {
  useEffect(() => {
    console.log('EarthCanvas mounted');
    return () => console.log('EarthCanvas unmounted');
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand" // Reduce the update frequency to save resources
      dpr={[1, 1.5]} // Adjust for lower resolution on mobile
      gl={{ preserveDrawingBuffer: false, antialias: true }} // Avoid preserving the drawing buffer
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <ErrorBoundary>
          <OrbitControls
            autoRotate
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </ErrorBoundary>
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
