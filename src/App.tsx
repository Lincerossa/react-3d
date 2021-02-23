
import React, { useRef, useState, FunctionComponent, useCallback, Suspense, useEffect } from 'react'
import styled from 'styled-components'
import rd from 'randomcolor'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { useSelector } from 'react-redux'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import type { Mesh } from 'three'
import { getDirectionValue } from './redux/direction/reducer'
import DirectionController from './DirectionController'

type CubeProps = {
  items: [number, number, number],
  color: string,
  directionValue: boolean
}

const Cube : FunctionComponent<CubeProps> = ({items, color, directionValue}) => {

  const [ isHovered, setIsHovered] = useState<boolean | null>(null)
  const myGeometry= useRef<Mesh>(null)


  useFrame(() => {
    if(myGeometry.current) {
      myGeometry.current.rotation.y += directionValue ? .01 : -.01
      myGeometry.current.rotation.x += directionValue ? .01 : -.01
      myGeometry.current.rotation.z += directionValue ? .01 : -.01
    }
  })
  const onHover = useCallback((e, value) => {
    e.stopPropagation()
    setIsHovered(value)
  }, [setIsHovered])

  const texture_1 = useLoader(TextureLoader, '/pp.png')

  return (
    <mesh ref={myGeometry}
    onPointerOver={e => onHover(e, true)}
    onPointerOut={e => onHover(e, null)}
    >
      <boxBufferGeometry attach="geometry" args={items} />
      <meshStandardMaterial attach="material" map={texture_1} color={isHovered ? "pink" : color} />
    </mesh>
  )
}



const Cubes: FunctionComponent<any> = ({directionValue}) => {
  return (
    <group position={[0, 0, 0 ]}>
      {
        Array.from({length:10}).map((e,i) => 
        <Suspense key={i} fallback={null}>
        <Cube directionValue={directionValue} items={[Math.random()*5, Math.random()*5, Math.random()*5]} color={rd( )}  />
      </Suspense>
         )
      }
    </group> 
  )
}

const App: FunctionComponent<any> = () =>{  

  const directionValue: boolean = useSelector(getDirectionValue)

  return (
    <CanvasWrapper>
      <div>Direction: <strong>{directionValue ? "positive" : "negative"}</strong></div>
      <DirectionController />
      <Canvas>
        <pointLight position={[10, 10, 10]} />
        <Cubes directionValue={directionValue} />
      </Canvas>
    </CanvasWrapper>
  )
}

const CanvasWrapper = styled.div`
  canvas {
    height: 100vh;
    width: 100vw;
  }
`

export default App;
    