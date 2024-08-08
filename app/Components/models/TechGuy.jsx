import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function TechGuy({ scale = [1, 1, 1], ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Techguy.glb')
  const { actions } = useAnimations(animations, group);

  useEffect(()=>{
    actions['Computer Typing'].reset().fadeIn(0.5).play();
  })

  return (
    <group ref={group} {...props} dispose={null} scale={scale} >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.977}>
          <group name="SKM_TechGuyfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_9.skeleton}
                  />
                  <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_10.skeleton}
                  />
                  <skinnedMesh
                    name="Object_12"
                    geometry={nodes.Object_12.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_12.skeleton}
                  />
                  <skinnedMesh
                    name="Object_13"
                    geometry={nodes.Object_13.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_13.skeleton}
                  />
                  <skinnedMesh
                    name="Object_15"
                    geometry={nodes.Object_15.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_15.skeleton}
                  />
                  <skinnedMesh
                    name="Object_17"
                    geometry={nodes.Object_17.geometry}
                    material={materials['Scene_-_Root']}
                    skeleton={nodes.Object_17.skeleton}
                  />
                  <group name="Object_6" />
                  <group name="Object_11" />
                  <group name="Object_14" />
                  <group name="Object_16" />
                  <group name="Body" />
                  <group name="Eyes" />
                  <group name="Eyelashes" />
                  <group name="Eyewear" />
                  <group name="Tops" />
                  <group name="Hats" />
                  <group name="Shoes" />
                  <group name="Bottoms" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Techguy.glb')