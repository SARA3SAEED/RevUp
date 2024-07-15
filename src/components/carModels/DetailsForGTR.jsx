import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { setCamera } from "../../redux/Slices/ColorsSlice";
import { NissanSkyline } from "../carModels/NissanSkyline";
import { OrbitControls } from "@react-three/drei";

const CameraController = () => {
  const { camera, gl } = useThree();
  const dispatch = useDispatch();
  const cam = useSelector((state) => state.carColors.camera);

  useEffect(() => {
    if (cam?.fov && cam?.position) {
      camera.fov = cam.fov;
      camera.position.set(...cam.position);
      camera.updateProjectionMatrix();
    }
  }, [camera, cam?.fov, cam?.position]);

  useFrame(() => {
    dispatch(
      setCamera({
        fov: camera.fov,
        position: [camera.position.x, camera.position.y, camera.position.z],
      })
    );
  });

  return null;
};

export default function DetailsForGTR() {
  const cam = useSelector((state) => state.carColors.camera);

  const cameraProps = useMemo(() => {
    return {
      fov: cam?.fov || 75,
      position: cam?.position || [0, 0, 5],
    };
  }, [cam?.fov, cam?.position]);

  return (
    <Canvas
      className="w-full h-full"
      camera={cameraProps}
      gl={{ antialias: true }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <NissanSkyline />
      <CameraController />
      <OrbitControls />
    </Canvas>
  );
}
