import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Tarun(props) {
  const { nodes, materials } = useGLTF('/whiteShirt_0727110258.glb')
  return (
    <group {...props} dispose={null} scale={2}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0.geometry}
        material={nodes.mesh_0.material}
      />
    </group>
  )
}

useGLTF.preload('/whiteShirt_0727110258.glb')