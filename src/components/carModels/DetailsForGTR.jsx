import React, { useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { setCamera } from "../../redux/Slices/ColorsSlice";
import { NissanSkyline } from "../carModels/NissanSkyline";
import { OrbitControls } from "@react-three/drei";

export default function DetailsForGTR() {
  const cam = useSelector((state) => state.carColors.camera);
  const orbitControlsRef = useRef(null);
  console.log(orbitControlsRef);

  // const controls = useMemo(() => {
  //   const controls = new OrbitControls(camera, renderer.domElement);
  //   // Initial configuration based on cam
  //   return controls;
  // }, [camera, renderer, cam]);

  // useEffect(() => {
  //   // Update OrbitControls properties based on cam
  //   controls.target.set(...cam.target);
  //   controls.position.set(...cam.position);
  //   // Other property updates as needed
  // }, [cam, controls]);

  return (
    <Canvas className="w-full h-full">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <directionalLight intensity={2} position={(1.83, -0.25, 0.93)} />
      <directionalLight intensity={2} position={(-1.97, -0.002, -0.97)} />
      <NissanSkyline />
      <OrbitControls
        ref={orbitControlsRef}
        position={cam.position}
        target={cam.target}
      />
    </Canvas>
  );
}
