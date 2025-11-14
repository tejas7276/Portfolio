import * as THREE from "three"
import { useRef, useEffect } from "react"
import { Float } from "@react-three/drei"

function RotatingBox() {
  const meshRef = useRef<THREE.Mesh>(null!)

  useEffect(() => {
    const animate = () => {
      if (meshRef.current) {
        meshRef.current.rotation.x += 0.001
        meshRef.current.rotation.y += 0.002
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhongMaterial color="#7c3aed" emissive="#5b21b6" shininess={100} />
      </mesh>
    </Float>
  )
}

export default RotatingBox
