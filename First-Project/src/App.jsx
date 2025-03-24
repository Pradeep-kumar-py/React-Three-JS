import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { DirectionalLight } from 'three'
import RotatingCube from './components/RotatingCube'

function App() {

  return (

    // <Canvas style={{height: '100vh', width: '100vw'}} >        
    //   <OrbitControls enableZoom enablePan enableRotate />
    //   <directionalLight position={[1,1,1]} intensity={10} color={0x9CDBA6} />
    //   <color attach='background' args={['#F0F0F0']} />
    //   <RotatingCube/>
    // </Canvas>
    <div className="h-screen w-screen">
      <Canvas className="h-full w-full">
        <OrbitControls enableZoom enablePan enableRotate />
        <directionalLight position={[1, 1, 1]} intensity={10} color={0x9CDBA6} />
        <color attach='background' args={['#F0F0F0']} />
        <RotatingCube />
      </Canvas>
    </div>

  )
}

export default App
