import React from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { NissanSkyline } from "./NissanSkyline";

export default function DetailsForGTR() {
  return (
    <div className="w-full h-full">
      <Canvas
        className="w-full h-full"
        camera={{
          fov: 37,
          position: [4.3, 1.4, 4.1],
        }}
      >
        <OrbitControls />
        <directionalLight intensity={2} />
        <directionalLight position={(1, 10, 1)} intensity={2} />
        <directionalLight position={(4.22, 1.63, -8.91)} intensity={2} />
        <directionalLight position={(0.01, 1.17, -9.93)} intensity={2} />
        <ambientLight intensity={0.1} />
        <NissanSkyline />
      </Canvas>
    </div>
  );
}
