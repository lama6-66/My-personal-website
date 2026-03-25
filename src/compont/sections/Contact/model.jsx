import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import Model from "./Programmer_desktop_3d_pc";
import Particles from "../HeroModel/Particles"
function ContactModel() {
  const Tablet = useMediaQuery({ query: "(max-width:1024px)" });
  const Mobile = useMediaQuery({ query: "(max-width:768px)" });

  return (
    <Canvas camera={{ position: [0,1,2.5
        
    ],fov:60}}>
      <ambientLight intensity={1.5} color="#1a1a40" />
      <directionalLight position={[5, 5, 5]} intensity={7} />

      <OrbitControls
      target={[0,1,0]}
        enablePan={false}
        enableZoom={true}
        autoRotate
        maxDistance={50}
        minDistance={0.8}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <Particles count={1000} />

<Model
  position={[0, 0, 0]}
  scale={Mobile ? 0.6 : Tablet ? 0.7 : 0.8}
/>
    </Canvas>
  );
}

export default ContactModel;