import React, { useEffect, useMemo, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { setCamera } from "../../redux/Slices/ColorsSlice";
import { NissanSkyline } from "../carModels/NissanSkyline";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

const CameraController = () => {
  const { camera, gl } = useThree();
  const dispatch = useDispatch();
  const { fov, position, target } = useSelector(
    (state) => state.carColors.camera
  );

  useEffect(() => {
    if (fov !== undefined && position !== undefined) {
      camera.fov = fov;
      camera.position.set(...position);
      camera.updateProjectionMatrix();
    }
  }, [camera, fov, position]);

  useEffect(() => {
    if (fov !== undefined && position !== undefined) {
      dispatch(
        setCamera({
          fov: camera.fov,
          position: [camera.position.x, camera.position.y, camera.position.z],
        })
      );
    }
  }, [
    camera.fov,
    camera.position.x,
    camera.position.y,
    camera.position.z,
    dispatch,
  ]);

  return null;
};
export default function DetailsForGTR() {
  const { fov, position, target } = useSelector(
    (state) => state.carColors.camera
  );
  const orbitControlsRef = useRef(null);

  const cameraProps = useMemo(() => {
    return {
      fov: fov || 75,
      position: position || [0, 0, 5],
      target: target || [0, 0, 0],
    };
  }, [fov, position, target]);

  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera
        camera={(cameraProps.fov, cameraProps.position)}
        gl={{ antialias: true }}
      />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <directionalLight intensity={2} position={(1.83, -0.25, 0.93)} />
      <directionalLight intensity={2} position={(-1.97, -0.002, -0.97)} />
      <NissanSkyline />
      <CameraController />
      <OrbitControls
        ref={orbitControlsRef}
        target={cameraProps.target}
        enableDamping
      />
    </Canvas>
  );
}
