import React, { Suspense } from "react";
import { Canvas, } from "@react-three/fiber";

import { OrbitControls , useGLTF } from "@react-three/drei";

const Model = () => {
  return (
    <Suspense fallback={null}>
      <primitive object={useGLTF("./desktop_pc/scene.gltf").scene} />
    </Suspense>
  );
};

const Scene = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
