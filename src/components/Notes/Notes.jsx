import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import notes from './notes.jpg';

const Notes = () => {
    const notesMap = useLoader(TextureLoader, notes)
    return (
        <mesh name="notes" position={[-0.11, 0.63, -0.082]}>
            <boxGeometry args={[0.01, 0.20, 0.40]} />
            <meshStandardMaterial displacementScale={0.2} map={notesMap} />
        </mesh>
    )
}

export default Notes