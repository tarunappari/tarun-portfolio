import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Computer({ scale = [1, 1, 1], ...props }) {
  const { nodes, materials } = useGLTF('/sci_-_fi_computer_game_ready.glb')
  return (
    <group {...props} dispose={null} rotation={[0, -180 * Math.PI / 180, 0]} scale={scale}>
      <group scale={0.0045}>
        <group position={[0, 28.869, 312.193]} rotation={[-1.469, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane002_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group position={[0, 381.812, -82.657]} rotation={[-0.229, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_displays_0.geometry}
            material={materials.digital_displays}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane001_digital_display_sides_0.geometry}
            material={materials.digital_display_sides}
          />
        </group>
        <group position={[0, 0, -94.762]} rotation={[0, Math.PI / 2, 0]} scale={124}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_2_0.geometry}
            material={materials.metal_2}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle_metal_1_0.geometry}
            material={materials.metal_1}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/sci_-_fi_computer_game_ready.glb')
