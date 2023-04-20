import React, { Suspense, useState } from 'react';
import './App.css';
import Piano from './components/piano';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Notes from './components/Notes/Notes';
import Start from './components/Start/Start';

function App() {
  const [start, isStarted] = useState(false);

  return (
    <>
      {start ? null : <Start play={isStarted} />}
      <Canvas shadows >
        <Suspense fallback={null}>
          <OrbitControls />
          <ambientLight intensity={0.1} />
          <directionalLight position={[5, 10, -3]} castShadow intensity={1} />
          <Piano start={start} />
          <Notes />
        </Suspense>
      </ Canvas>
    </>
  );
}

export default App;

