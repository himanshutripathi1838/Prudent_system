import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const BLUE = "#4aa8ff";

function ChipCore() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.18;
  });
  return (
    <group ref={ref}>
      <mesh>
        <boxGeometry args={[1.1, 0.18, 1.1]} />
        <meshStandardMaterial color="#0f1c30" metalness={0.7} roughness={0.3} emissive={BLUE} emissiveIntensity={0.12} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(1.1, 0.18, 1.1)]} />
        <lineBasicMaterial color={BLUE} transparent opacity={0.85} />
      </lineSegments>
    </group>
  );
}

function DeviceRing({ count, radius, speed, y }: { count: number; radius: number; speed: number; y: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * speed;
  });
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const a = (i / count) * Math.PI * 2;
        return [Math.cos(a) * radius, y, Math.sin(a) * radius] as [number, number, number];
      }),
    [count, radius, y],
  );
  const points = useMemo(() => [...nodes, nodes[0] ?? ([0, y, radius] as [number, number, number])], [nodes, y, radius]);
  return (
    <group ref={ref}>
      <Line points={points} color={BLUE} transparent opacity={0.28} lineWidth={1} />
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.055, 12, 12]} />
          <meshBasicMaterial color={BLUE} />
        </mesh>
      ))}
    </group>
  );
}

function PulseWave() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    const t = (clock.getElapsedTime() % 4) / 4;
    if (ref.current) {
      const s = 1 + t * 3.4;
      ref.current.scale.set(s, s, s);
      (ref.current.material as THREE.MeshBasicMaterial).opacity = 0.35 * (1 - t);
    }
  });
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[0.9, 0.94, 64]} />
      <meshBasicMaterial color={BLUE} transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  );
}

function NeuralMesh() {
  const ref = useRef<THREE.Points>(null);
  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const n = 220;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 2.6 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2.6;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    g.setAttribute("position", new THREE.BufferAttribute(arr, 3));
    return g;
  }, []);
  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y -= delta * 0.04;
  });
  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial size={0.035} color={BLUE} transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

function EncryptionRings() {
  const ref = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.12;
      ref.current.rotation.z += delta * 0.07;
    }
  });
  return (
    <group ref={ref}>
      {[1.7, 2.15].map((r) => (
        <mesh key={r} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[r, 0.006, 8, 120]} />
          <meshBasicMaterial color={BLUE} transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ simplified }: { simplified: boolean }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 5, 4]} intensity={30} color={BLUE} />
      <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.5}>
        <ChipCore />
      </Float>
      <DeviceRing count={simplified ? 8 : 10} radius={1.9} speed={0.16} y={0} />
      <DeviceRing count={simplified ? 5 : 7} radius={2.8} speed={-0.1} y={0.7} />
      <PulseWave />
      <NeuralMesh />
      <EncryptionRings />
    </>
  );
}

export default function TechScene({ simplified = false }: { simplified?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 1.8, 6], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      frameloop="always"
      style={{ pointerEvents: "none" }}
    >
      <Scene simplified={simplified} />
    </Canvas>
  );
}
