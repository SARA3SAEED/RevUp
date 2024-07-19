/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 .\public\models\audiRsEtron.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import { MeshStandardMaterial } from "three";

export function AudiRsEtron(props) {
  const cbc = useSelector((state) => state.carColors.carBodyColor);
  const inc = useSelector((state) => state.carColors.InteriorColor);
  const rim = useSelector((state) => state.carColors.rimColor);
  const carBodyColor = new MeshStandardMaterial({ color: "#ff0000" });
  const interiorColor = new MeshStandardMaterial({ color: inc });
  const rimColor = new MeshStandardMaterial({ color: rim });
  const { nodes, materials } = useGLTF("./models/audiRsEtron.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.525, 0.015]} scale={0.692}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <lineSegments
            geometry={nodes.Object_20.geometry}
            material={materials.window_coloured}
          />
          <mesh
            geometry={nodes.Object_2.geometry}
            material={materials.black_base}
          />
          <mesh
            geometry={nodes.Object_3.geometry}
            material={materials.carbon}
          />
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.seatbelt}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials.spoiler_steel}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials.carbon_M}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials.coloured}
          />
          <mesh geometry={nodes.Object_8.geometry} material={materials.glass} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.gril1} />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.gril2}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.gril3}
          />
          <mesh geometry={nodes.Object_12.geometry} material={materials.hood} />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.int_till}
          />
          <mesh geometry={nodes.Object_14.geometry} material={carBodyColor} />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.lights}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.plate_corner}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials.redlight}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.remap_plate}
          />
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials.window}
          />
          <mesh
            geometry={nodes.Object_21.geometry}
            material={materials.window_coloured}
          />
          <mesh geometry={nodes.Object_22.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_25.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_26.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_27.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_28.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_29.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_30.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_32.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_33.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_34.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_35.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_36.geometry} material={materials.None} />
          <mesh geometry={nodes.Object_37.geometry} material={materials.None} />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.Wilwood_Forged_Narrow_6R_6Piston_Caliper}
          />
          <mesh
            geometry={nodes.Object_39.geometry}
            material={materials.Wilwood_Forged_Narrow_6R_6Piston_Caliper}
          />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials.Wilwood_Forged_Narrow_6R_6Piston_Caliper}
          />
          <mesh
            geometry={nodes.Object_41.geometry}
            material={materials.Wilwood_Forged_Narrow_6R_6Piston_Caliper}
          />
          <mesh
            geometry={nodes.Object_42.geometry}
            material={materials.black_base}
          />
          <mesh geometry={nodes.Object_43.geometry} material={materials.body} />
          <mesh geometry={nodes.Object_44.geometry} material={materials.body} />
          <mesh geometry={nodes.Object_45.geometry} material={materials.body} />
          <mesh geometry={nodes.Object_46.geometry} material={materials.body} />
          <mesh geometry={nodes.Object_47.geometry} material={materials.body} />
          <mesh geometry={nodes.Object_48.geometry} material={materials.body} />
          <mesh
            geometry={nodes.Object_49.geometry}
            material={materials.spoiler}
          />
          <mesh
            geometry={nodes.Object_50.geometry}
            material={materials["tire.001"]}
          />
          <mesh
            geometry={nodes.Object_51.geometry}
            material={materials.rotor}
          />
          <mesh
            geometry={nodes.Object_52.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Object_53.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Object_54.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Object_55.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Object_56.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Object_57.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Object_58.geometry}
            material={materials.plastic}
          />
          <mesh
            geometry={nodes.Object_59.geometry}
            material={materials.plastic}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./models/audiRsEtron.glb");