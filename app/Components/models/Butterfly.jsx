import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Butterfly(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF('/journey_-_character_clothing_concept.glb')

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.01; // Adjust the speed as needed
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <group rotation={[0, Math.PI / 2, 0]} position={[0, 0, 0]} scale={[0.015, 0.015, 0.015]}>
        <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface1_lambert4_0.geometry}
            material={materials.lambert4}
            position={[9.871, 145.702, -37.437]}
            rotation={[0.642, -0.478, 0.756]}
            scale={11.004}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface2_lambert4_0.geometry}
            material={materials.lambert4}
            position={[9.871, 145.701, -37.437]}
            rotation={[0.641, -0.527, -0.152]}
            scale={11.004}
          />
        </group>
        <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
          <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pasted__polySurface1_lambert6_0.geometry}
              material={materials.lambert6}
              position={[6.708, 145.702, -37.437]}
              rotation={[0.642, -0.478, 0.756]}
              scale={14.827}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pasted__polySurface2_lambert6_0.geometry}
              material={materials.lambert6}
              position={[6.708, 145.701, -37.437]}
              rotation={[0.641, -0.527, -0.152]}
              scale={14.827}
            />
          </group>
        </group>
        <group position={[-194.069, 200.537, 122.202]} rotation={[0.299, 0.833, -1.966]}>
          <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
            <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__pasted__polySurface1_lambert7_0.geometry}
                material={materials.lambert7}
                position={[17.434, 114.041, -15.405]}
                rotation={[0.702, -0.504, -0.09]}
                scale={12.87}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.pasted__pasted__polySurface2_lambert7_0.geometry}
                material={materials.lambert7}
                position={[17.434, 114.04, -15.405]}
                rotation={[0.641, -0.527, 1.593]}
                scale={12.87}
              />
            </group>
          </group>
        </group>
        <group position={[55.562, 19.773, 63.677]} rotation={[0, -1.396, 0]}>
          <group position={[-194.069, 200.537, 122.202]} rotation={[0.299, 0.833, -1.966]}>
            <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
              <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pasted__pasted__polySurface1_lambert3_0.geometry}
                  material={materials.lambert3}
                  position={[6.708, 145.702, -37.437]}
                  rotation={[0.642, -0.478, 0.756]}
                  scale={12.87}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pasted__pasted__polySurface2_lambert3_0.geometry}
                  material={materials.lambert3}
                  position={[6.708, 145.701, -37.437]}
                  rotation={[0.641, -0.527, -0.152]}
                  scale={12.87}
                />
              </group>
            </group>
          </group>
        </group>
        <group position={[-29.146, 0, 104.876]} rotation={[-Math.PI, 0.873, -Math.PI]}>
          <group position={[-194.069, 200.537, 122.202]} rotation={[0.299, 0.833, -1.966]}>
            <group position={[63.752, 195, 44.357]} rotation={[0.659, 0.553, 1.583]} scale={0.604}>
              <group position={[0, 0, 94.99]} scale={[0.901, 1, 1]}>
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pasted__pasted__polySurface1_lambert5_0.geometry}
                  material={materials.lambert5}
                  position={[17.434, 114.041, -15.405]}
                  rotation={[0.711, -0.417, 0.612]}
                  scale={12.87}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes.pasted__pasted__pasted__polySurface2_lambert5_0.geometry}
                  material={materials.lambert5}
                  position={[17.434, 114.04, -15.405]}
                  rotation={[0.734, -0.493, 0.417]}
                  scale={12.87}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_and_Cloth_v5Group25600_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_and_Cloth_v5Group7207_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_and_Cloth_v5Group19069_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_and_Cloth_v5Group48776_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_and_Cloth_v5Group36839_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_and_Cloth_v5Group29646_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cloth_and_Cloth_v5Group6155_lambert1_0.geometry}
          material={materials.lambert1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.polySurface4_lambert1_0.geometry}
          material={materials.lambert1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/journey_-_character_clothing_concept.glb')