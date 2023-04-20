import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import useSound from 'use-sound';
import wood from './wood.jpg';
import csound from './sound/keyc.mp3';
import cissound from './sound/keycis.mp3';
import dsound from './sound/keyd.mp3';
import dissound from './sound/keydis.mp3';
import esound from './sound/keye.mp3';
import fsound from './sound/keyf.mp3';
import fissound from './sound/keyfis.mp3';
import gsound from './sound/keyg.mp3';
import gissound from './sound/keygis.mp3';
import asound from './sound/keya.mp3';
import aissound from './sound/keyais.mp3';
import hsound from './sound/keyh.mp3';
import c2sound from './sound/keyc2.mp3';
import * as THREE from 'three';

const Piano = (props) => {
  const { nodes } = useGLTF('/piano.gltf');
  const woodTexture = useLoader(TextureLoader, wood);
  const [c, setC] = useState(false);
  const [cis, setCis] = useState(false);
  const [d, setD] = useState(false);
  const [dis, setDis] = useState(false);
  const [e, setE] = useState(false);
  const [f, setF] = useState(false);
  const [fis, setFis] = useState(false);
  const [g, setG] = useState(false);
  const [gis, setGis] = useState(false);
  const [a, setA] = useState(false);
  const [ais, setAis] = useState(false);
  const [h, setH] = useState(false);
  const [c2, setC2] = useState(false);
  // sound playing import 
  const [playC] = useSound(csound);
  const [playCis] = useSound(cissound);
  const [playD] = useSound(dsound);
  const [playDis] = useSound(dissound);
  const [playE] = useSound(esound);
  const [playF] = useSound(fsound);
  const [playFis] = useSound(fissound);
  const [playG] = useSound(gsound);
  const [playGis] = useSound(gissound);
  const [playA] = useSound(asound);
  const [playAis] = useSound(aissound);
  const [playH] = useSound(hsound);
  const [playC2] = useSound(c2sound);

  function play(a, b) {
    a(true);
    b();
    setTimeout(() => {
      a(false);
    }, 100);
  };

  function setupKeyControls() {
    document.onkeydown = function (e) {
      if (e.key === 'A' || e.key === 'a') {
        play(setC, playC)
      } else if (e.key === 'W' || e.key === 'w') {
        play(setCis, playCis)
      } else if (e.key === 'S' || e.key === 's') {
        play(setD, playD)
      } else if (e.key === 'E' || e.key === 'e') {
        play(setDis, playDis)
      } else if (e.key === 'D' || e.key === 'd') {
        play(setE, playE)
      } else if (e.key === 'F' || e.key === 'f') {
        play(setF, playF)
      } else if (e.key === 'T' || e.key === 't') {
        play(setFis, playFis)
      } else if (e.key === 'G' || e.key === 'g') {
        play(setG, playG)
      } else if (e.key === 'Z' || e.key === 'z' || e.key === 'Y' || e.key === 'y') {
        play(setGis, playGis)
      } else if (e.key === 'H' || e.key === 'h') {
        play(setA, playA)
      } else if (e.key === 'U' || e.key === 'u') {
        play(setAis, playAis)
      } else if (e.key === 'J' || e.key === 'j') {
        play(setH, playH)
      } else if (e.key === 'K' || e.key === 'k') {
        play(setC2, playC2)
      }
    }
  }

  setupKeyControls()
  const cameraRef = useRef();
  const buttonRef = useRef();
  const vec = new THREE.Vector3();

  useFrame(state => {
    if (!props.start) {
      state.camera.lookAt(buttonRef.current.position);
      state.camera.position.lerp(vec.set(1, 1, 1), .01);
      state.camera.rotateX(0)
      state.camera.rotateY(0)
      state.camera.updateProjectionMatrix();
    } else {
      state.camera.lookAt(buttonRef.current.position);
      state.camera.position.lerp(vec.set(0.25, 0.8, -0.03), .01);
      state.camera.rotateX(0.5)
      state.camera.updateProjectionMatrix();
    }
  })

  return (
    <group {...props} dispose={null} ref={cameraRef}>
      <group position={[0, 0, -0.03]} ref={buttonRef}></group>
      <group scale={0.01}>
        <mesh name="Body" geometry={nodes.Body.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]}  >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="Body_side_left" geometry={nodes.Body_side_left.geometry} castShadow receiveShadow position={[-10.43, 0.3, 41.58]} rotation={[-Math.PI, 0, 0]}  >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="Body_side_right" geometry={nodes.Body_side_right.geometry} castShadow receiveShadow position={[-10.43, 0.3, -56.68]} rotation={[-Math.PI, 0, 0]}  >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="Body_leg_1" geometry={nodes.Body_leg_1.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]} >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="Body_leg_2" geometry={nodes.Body_leg_2.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]}  >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="stool_seat" geometry={nodes.stool_seat.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]}  >
          <meshStandardMaterial color={'#3e3e3e'} />
        </mesh>
        <mesh name="stool_leg_1" geometry={nodes.stool_leg_1.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]} >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="stool_leg_2" geometry={nodes.stool_leg_2.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]} >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="stool_leg_3" geometry={nodes.stool_leg_3.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]} >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="stool_leg_4" geometry={nodes.stool_leg_4.geometry} castShadow receiveShadow position={[-29.7, 0, 41.69]} rotation={[-Math.PI / 2, 0, 0]}  >
          <meshStandardMaterial color={'#410f0f'} />
        </mesh>
        <mesh name="cis_1" geometry={nodes.cis_1.geometry} position={cis ? [-28.69, -1.91, 41.69] : [-28.69, -1.11, 41.69]} rotation={[-Math.PI / 2, -0.02, 0]} onClick={() => play(setCis, playCis)}>
          <meshStandardMaterial color={'black'} />
        </mesh>
        <mesh name="dis_2" geometry={nodes.dis_2.geometry} position={dis ? [-28.69, -1.91, 41.69] : [-28.69, -1.11, 41.69]} rotation={[-Math.PI / 2, -0.02, 0]} onClick={() => play(setDis, playDis)}>
          <meshStandardMaterial color={'black'} />
        </mesh>
        <mesh name="fis_3" geometry={nodes.fis_3.geometry} position={fis ? [-28.69, -1.91, 41.69] : [-28.69, -1.11, 41.69]} rotation={[-Math.PI / 2, -0.02, 0]} onClick={() => play(setFis, playFis)}>
          <meshStandardMaterial color={'black'} />
        </mesh>
        <mesh name="gis_4" geometry={nodes.gis_4.geometry} position={gis ? [-28.69, -1.91, 41.69] : [-28.69, -1.11, 41.69]} rotation={[-Math.PI / 2, -0.02, 0]} onClick={() => play(setGis, playGis)}>
          <meshStandardMaterial color={'black'} />
        </mesh>
        <mesh name="ais_5" geometry={nodes.ais_5.geometry} position={ais ? [-28.69, -1.91, 41.69] : [-28.69, -1.11, 41.69]} rotation={[-Math.PI / 2, -0.02, 0]} onClick={() => play(setAis, playAis)}>
          <meshStandardMaterial color={'black'} />
        </mesh>
        <mesh name="c1" geometry={nodes.c1.geometry} position={c ? [8.59, 44.39, 39.74] : [8.59, 45.19, 39.74]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setC, playC)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="d2" geometry={nodes.d2.geometry} position={d ? [8.59, 44.39, 27.58] : [8.59, 45.19, 27.58]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setD, playD)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="e3" geometry={nodes.e3.geometry} position={e ? [8.58, 44.39, 3.82] : [8.58, 45.19, 3.82]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setE, playE)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="f4" geometry={nodes.f4.geometry} position={f ? [8.59, 44.39, 3.4] : [8.59, 45.19, 3.4]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setF, playF)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="g5" geometry={nodes.g5.geometry} position={g ? [8.59, 44.39, -8.7] : [8.59, 45.19, -8.7]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setG, playG)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="a6" geometry={nodes.a6.geometry} position={a ? [8.59, 44.39, -20.78] : [8.59, 45.19, -20.78]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setA, playA)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="h7" geometry={nodes.h7.geometry} position={h ? [8.58, 44.39, -44.39] : [8.58, 45.19, -44.39]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setH, playH)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="c8" geometry={nodes.c2.geometry} position={c2 ? [-9.1, 44.39, -44.67] : [-9.1, 45.19, -44.67]} rotation={[-Math.PI / 2, 0.01, 0]} onClick={() => play(setC2, playC2)}>
          <meshStandardMaterial color={'whitesmoke'} />
        </mesh>
        <mesh name="Floor" geometry={nodes.Floor.geometry} castShadow receiveShadow rotation={[-Math.PI / 2, 0, -Math.PI / 2]}  >
          <meshStandardMaterial map={woodTexture} displacementScale={0.2} />
        </mesh>
      </group>
    </group >
  )
}

export default Piano
useGLTF.preload('/piano.gltf')
