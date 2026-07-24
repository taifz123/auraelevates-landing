import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'

function roundedRectShape(width, height, radius) {
  const x = -width / 2
  const y = -height / 2
  const shape = new THREE.Shape()

  shape.moveTo(x + radius, y)
  shape.lineTo(x + width - radius, y)
  shape.quadraticCurveTo(x + width, y, x + width, y + radius)
  shape.lineTo(x + width, y + height - radius)
  shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height)
  shape.lineTo(x + radius, y + height)
  shape.quadraticCurveTo(x, y + height, x, y + height - radius)
  shape.lineTo(x, y + radius)
  shape.quadraticCurveTo(x, y, x + radius, y)

  return shape
}

function createFrameGeometry() {
  const frame = roundedRectShape(2.75, 1.48, 0.48)
  const hole = roundedRectShape(2.32, 1.06, 0.36)
  frame.holes.push(hole)

  return new THREE.ExtrudeGeometry(frame, {
    depth: 0.22,
    bevelEnabled: true,
    bevelSize: 0.06,
    bevelThickness: 0.06,
    bevelSegments: 4,
    curveSegments: 24,
  })
}

function Glasses() {
  const group = useRef(null)
  const leftFrame = useMemo(() => createFrameGeometry(), [])
  const rightFrame = useMemo(() => createFrameGeometry(), [])
  const reducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    [],
  )

  useEffect(
    () => () => {
      leftFrame.dispose()
      rightFrame.dispose()
    },
    [leftFrame, rightFrame],
  )

  useFrame((state, delta) => {
    if (!group.current) return
    const targetX = reducedMotion ? -0.08 : -0.08 + state.pointer.y * 0.08
    const targetY = reducedMotion ? -0.26 : -0.26 + state.pointer.x * 0.16
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetX, 4, delta)
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetY, 4, delta)
    group.current.rotation.z = THREE.MathUtils.damp(
      group.current.rotation.z,
      reducedMotion ? -0.08 : -0.08 - state.pointer.x * 0.035,
      4,
      delta,
    )
    if (!reducedMotion) group.current.position.y = Math.sin(state.clock.elapsedTime * 0.42) * 0.04
  })

  return (
    <group ref={group} scale={0.92}>
      <mesh geometry={leftFrame} position={[-1.55, 0, 0]}>
        <meshStandardMaterial color="#24221f" roughness={0.22} metalness={0.62} />
      </mesh>
      <mesh geometry={rightFrame} position={[1.55, 0, 0]}>
        <meshStandardMaterial color="#24221f" roughness={0.22} metalness={0.62} />
      </mesh>

      {[-1.55, 1.55].map((x) => (
        <mesh key={x} position={[x, 0, 0.2]}>
          <planeGeometry args={[2.25, 1]} />
          <meshPhysicalMaterial
            color="#767b74"
            roughness={0.08}
            metalness={0.18}
            transmission={0.46}
            transparent
            opacity={0.58}
            thickness={0.18}
          />
        </mesh>
      ))}

      <mesh position={[0, 0.22, 0.08]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.11, 0.11, 0.74, 24]} />
        <meshStandardMaterial color="#24221f" roughness={0.28} metalness={0.55} />
      </mesh>

      {[-1, 1].map((side) => (
        <group key={side}>
          <mesh position={[side * 3.1, 0.28, -0.38]} rotation={[0.04, side * 0.42, side * -0.03]}>
            <boxGeometry args={[1.65, 0.2, 0.28]} />
            <meshStandardMaterial color="#1b1a18" roughness={0.3} metalness={0.48} />
          </mesh>
          <mesh position={[side * 3.83, 0.16, -0.78]} rotation={[0.08, side * 0.62, side * -0.06]}>
            <boxGeometry args={[1.3, 0.22, 0.3]} />
            <meshStandardMaterial color="#151412" roughness={0.36} metalness={0.4} />
          </mesh>
        </group>
      ))}

      <mesh position={[1.08, 0.48, 0.28]}>
        <circleGeometry args={[0.11, 32]} />
        <meshStandardMaterial color="#11100e" roughness={0.08} metalness={0.65} />
      </mesh>
    </group>
  )
}

export default function GlassesScene() {
  return (
    <div className="glasses-scene" role="img" aria-label="Abstract sculptural smart-glasses form">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0.5, 0.2, 8.6], fov: 38 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        fallback={<div className="glasses-fallback" aria-hidden="true" />}
      >
        <ambientLight intensity={1.3} />
        <directionalLight position={[3, 5, 6]} intensity={6} color="#f7e7ca" />
        <directionalLight position={[-5, -1, 2]} intensity={3.5} color="#e14a2b" />
        <pointLight position={[0, 0, 5]} intensity={3} color="#ffffff" />
        <Glasses />
      </Canvas>
    </div>
  )
}
