import { Canvas, useFrame } from "react-three-fiber";
import { useRef } from "react";
import {
  SphereBufferGeometry,
  MeshStandardMaterial,
  TextureLoader,
} from "three";

function Globe() {
  const texture = new TextureLoader().load("/world.jpg");

  const globeRef = useRef();

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
  });

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh ref={globeRef}>
        <sphereBufferGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Canvas>
  );
}

export default Globe;
