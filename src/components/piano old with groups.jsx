import React, { useRef, useState } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import useSound from 'use-sound';
import wood from './wood.jpg';
import cissound from './key01.mp3';

const Piano = (props) => {
    const { nodes } = useGLTF('/piano.gltf');
    const woodTexture = useLoader(TextureLoader, wood);
    const [cis1, setCis1] = useState(false);
    const [playSound] = useSound(cissound);
    return (
        <group {...props} dispose={null}>
            <group scale={0.01}>
                <group name="Body" position={[-9.56, 40.33, -8.3]}>
                    <mesh name="Body_1" castShadow geometry={nodes.Body_1.geometry} position={[-20.13, -40.33, 49.99]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                    <mesh name="Body_side_left" castShadow geometry={nodes.Body_side_left.geometry} position={[-0.86, -40.03, 49.88]} rotation={[-Math.PI, 0, 0]} >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                    <mesh name="Body_side_right" castShadow geometry={nodes.Body_side_right.geometry} position={[-0.86, -40.03, -48.38]} rotation={[-Math.PI, 0, 0]}  >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                    <mesh name="Body_leg_1" castShadow geometry={nodes.Body_leg_1.geometry} position={[-20.13, -40.33, 49.99]} rotation={[-Math.PI / 2, 0, 0]}  >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                    <mesh name="Body_leg_2" castShadow geometry={nodes.Body_leg_2.geometry} position={[-20.13, -40.33, 49.99]} rotation={[-Math.PI / 2, 0, 0]}  >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                </group>
                <group name="Stool" position={[27.08, 12.9, -7.85]}>
                    <mesh name="stool_seat" castShadow geometry={nodes.stool_seat.geometry} position={[-56.78, -12.9, 49.55]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'#3e3e3e'} />
                    </mesh>
                    <mesh name="stool_leg_1" castShadow geometry={nodes.stool_leg_1.geometry} position={[-56.78, -12.9, 49.55]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                    <mesh name="stool_leg_2" castShadow geometry={nodes.stool_leg_2.geometry} position={[-56.78, -12.9, 49.55]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                    <mesh name="stool_leg_3" castShadow geometry={nodes.stool_leg_3.geometry} position={[-56.78, -12.9, 49.55]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                    <mesh name="stool_leg_4" castShadow geometry={nodes.stool_leg_4.geometry} position={[-56.78, -12.9, 49.55]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'#410f0f'} />
                    </mesh>
                </group>
                <group name="Black" position={[-9.51, 46.72, -2.26]} rotation={[0, 0, 0]}>
                    <mesh name="cis_1" geometry={nodes.cis_1.geometry} position={cis1 ? [-20.18, -47.5, 43.95] : [-20.18, -46.72, 43.95]} rotation={[-Math.PI / 2, 0, 0]} onClick={(e) => {
                        setCis1(true);
                        playSound();
                        setTimeout(() => {
                            setCis1(false);
                        }, 100);
                    }}>
                        <meshStandardMaterial color={'black'} />
                    </mesh>
                    <mesh name="dis_2" geometry={nodes.dis_2.geometry} position={[-20.18, -46.72, 43.95]} rotation={[-Math.PI / 2, 0, 0]}>
                        <meshStandardMaterial color={'black'} />
                    </mesh>
                    <mesh name="fis_3" geometry={nodes.fis_3.geometry} position={[-20.18, -46.72, 43.95]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'black'} />
                    </mesh>
                    <mesh name="gis_4" geometry={nodes.gis_4.geometry} position={[-20.18, -46.72, 43.95]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'black'} />
                    </mesh>
                    <mesh name="ais_5" geometry={nodes.ais_5.geometry} position={[-20.18, -46.72, 43.95]} rotation={[-Math.PI / 2, 0, 0]}>
                        <meshStandardMaterial color={'black'} />
                    </mesh>
                </group>
                <group name="White" position={[-11.13, 45.57, -8.31]} rotation={[0, 0, -0.01]}>
                    <mesh name="c_1" geometry={nodes.c_1.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                    <mesh name="d_2" geometry={nodes.d_2.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]}  >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                    <mesh name="e_3" geometry={nodes.e_3.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]}  >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                    <mesh name="f_4" geometry={nodes.f_4.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                    <mesh name="g_5" geometry={nodes.g_5.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]}  >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                    <mesh name="a_6" geometry={nodes.a_6.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]}  >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                    <mesh name="h_7" geometry={nodes.h_7.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]} >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                    <mesh name="c_8" geometry={nodes.c_8.geometry} position={[-18.57, -45.57, 50]} rotation={[-Math.PI / 2, 0, 0]}  >
                        <meshStandardMaterial color={'whitesmoke'} />
                    </mesh>
                </group>
                <PerspectiveCamera makeDefault={true} far={100000} near={5} fov={45} position={[267.04, 136.25, 180.34]} rotation={[-0.52, 0.9, 0.42]} />
                <mesh name="Floor" receiveShadow geometry={nodes.Floor.geometry} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} >
                    <meshStandardMaterial map={woodTexture} />
                </mesh>
            </group>
        </group>
    )
}

export default Piano
useGLTF.preload('/piano.gltf')