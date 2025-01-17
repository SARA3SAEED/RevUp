/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 .\public\models\porsche911.glb 
*/

import React from "react";
import { useGLTF } from "@react-three/drei";
import { useSelector } from "react-redux";
import { MeshStandardMaterial } from "three";

export function Porsche911(props) {
  const cbc = useSelector((state) => state.carColors.carBodyColor);
  const inc = useSelector((state) => state.carColors.InteriorColor);
  const rim = useSelector((state) => state.carColors.rimColor);
  const rimType = useSelector((state) => state.carColors.rimType);
  const carBodyColor = new MeshStandardMaterial({ color: cbc });
  const interiorColor = new MeshStandardMaterial({ color: inc });
  const rimColor = new MeshStandardMaterial({ color: rim });
  const { nodes, materials } = useGLTF("./models/porsche911.glb");
  const nodes1 = useGLTF('./models/wheelRims.glb').nodes

  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.094, 0.025]} scale={0.735}>
        <group position={[-0.005, 0.08, 0.003]}>
          <mesh
            geometry={nodes.Object_4.geometry}
            material={materials.undersd}
          />
          <mesh
            geometry={nodes.Object_5.geometry}
            material={materials["11BLACK.001"]}
          />
          <mesh
            geometry={nodes.Object_6.geometry}
            material={materials["inttex.001"]}
          />
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials["11BLACK.002"]}
          />
          <mesh
            geometry={nodes.Object_8.geometry}
            material={materials["Porsche_911GT3_2022_Grille4A_DiffuseAOSO.001"]}
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials["30.001"]}
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.carbon_c}
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.alck_df}
          />
          <mesh geometry={nodes.Object_12.geometry} material={interiorColor} />
          <mesh
            geometry={nodes.Object_13.geometry}
            material={materials.st_SECONDARY}
          />
          <mesh
            geometry={nodes.Object_14.geometry}
            material={materials.GRIL5}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials.screw_015_nr4572nt}
          />
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.material}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials["Porsche_911GT3_2022_Grille1A_DiffuseAOSO.001"]}
          />
          <mesh
            geometry={nodes.Object_18.geometry}
            material={materials.Porsche_911GT3_2022_Grille2A_DiffuseAOSO}
          />
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials.Porsche_911GT3_2022_Grille1A_DiffuseAOSO}
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.Porsche_911GT3_2022_Grille4A_DiffuseAOSO}
          />
          <mesh
            geometry={nodes.Object_21.geometry}
            material={materials.circles_015b}
          />
          <mesh
            geometry={nodes.Object_22.geometry}
            material={materials.gt3rs_002_D_SECONDARY}
          />
          <mesh geometry={nodes.Object_23.geometry} material={interiorColor} />
          <mesh
            geometry={nodes.Object_24.geometry}
            material={materials.por_911gt3rs_16_symbols_embossed_D}
          />
          <mesh
            geometry={nodes.Object_25.geometry}
            material={materials.material_25}
          />
          <mesh
            geometry={nodes.Object_26.geometry}
            material={materials.SEATBELT_1}
          />
          <mesh
            geometry={nodes.Object_27.geometry}
            material={materials.Leather_Perf_D_SECONDARY}
          />
          <mesh
            geometry={nodes.Object_28.geometry}
            material={materials["LGT.001"]}
          />
          <mesh
            geometry={nodes.Object_29.geometry}
            material={materials["11BLACK.003"]}
          />
          <mesh
            geometry={nodes.Object_30.geometry}
            material={materials.TurboS_Lightmap}
          />
          <mesh
            geometry={nodes.Object_31.geometry}
            material={materials.POR_992_19_gauges_LIT}
          />
          <mesh
            geometry={nodes.Object_32.geometry}
            material={materials.guage_992_d1}
          />
          <mesh
            geometry={nodes.Object_33.geometry}
            material={materials.por_com}
          />
          <mesh geometry={nodes.Object_34.geometry} material={carBodyColor} />
          <mesh
            geometry={nodes.Object_35.geometry}
            material={materials.vehicle_mesh}
          />
          <mesh
            geometry={nodes.Object_36.geometry}
            material={materials["28.002"]}
          />
          <mesh
            geometry={nodes.Object_37.geometry}
            material={materials["28.001"]}
          />
          <mesh
            geometry={nodes.Object_38.geometry}
            material={materials.bulb_NO}
          />
          <mesh
            geometry={nodes.Object_39.geometry}
            material={materials["LGT.002"]}
          />
          <mesh
            geometry={nodes.Object_40.geometry}
            material={materials.material_31}
          />
          <mesh
            geometry={nodes.Object_41.geometry}
            material={materials.script_rt_dials_race}
          />
          <mesh
            geometry={nodes.Object_42.geometry}
            material={materials["glass22.002"]}
          />
        </group>
        <group position={[-0.821, -0.196, -1.333]}>
          {rimType == 1 && <mesh geometry={nodes.Object_60.geometry} material={rimColor} />}
          {rimType == 2 && <group position={[-0.127, 0, 0]} rotation={[0, 3.15, 0]} scale={1.05}>
            <mesh geometry={nodes1.Object_7.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_8.geometry} material={rimColor} />
          </group>}
          {rimType == 3 && <group position={[-0.11, 0, 0]} rotation={[1.5, 0.01, 1.58]} scale={0.021}>
            <mesh geometry={nodes1.Object_4.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_5.geometry} material={rimColor} />
          </group>}


          <mesh
            geometry={nodes.Object_61.geometry}
            material={materials.tire_mic1}
          />
          <mesh
            geometry={nodes.Object_62.geometry}
            material={materials.bra7997ke_disk}
          />
          <mesh geometry={nodes.Object_63.geometry} material={materials.rim1} />
          <mesh
            geometry={nodes.Object_64.geometry}
            material={materials["11BLACK.003"]}
          />
          <mesh
            geometry={nodes.Object_65.geometry}
            material={materials["11BLACK"]}
          />
          <mesh
            geometry={nodes.Object_66.geometry}
            material={materials.material_46}
          />
          <mesh
            geometry={nodes.Object_67.geometry}
            material={materials.material_47}
          />
        </group>
        <group position={[-0.821, -0.196, 1.241]}>

          {rimType == 1 && <mesh geometry={nodes.Object_69.geometry} material={rimColor} />}
          {rimType == 2 && <group position={[-0.127, 0, 0]} rotation={[0, 3.15, 0]} scale={1.05}>
            <mesh geometry={nodes1.Object_7.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_8.geometry} material={rimColor} />
          </group>}
          {rimType == 3 && <group position={[-0.11, 0, 0]} rotation={[1.5, 0.01, 1.58]} scale={0.021}>
            <mesh geometry={nodes1.Object_4.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_5.geometry} material={rimColor} />
          </group>}
          <mesh
            geometry={nodes.Object_70.geometry}
            material={materials.tire_mic1}
          />
          <mesh
            geometry={nodes.Object_71.geometry}
            material={materials.bra7997ke_disk}
          />
          <mesh geometry={nodes.Object_72.geometry} material={materials.rim1} />
          <mesh
            geometry={nodes.Object_73.geometry}
            material={materials["11BLACK.003"]}
          />
          <mesh
            geometry={nodes.Object_74.geometry}
            material={materials["11BLACK"]}
          />
          <mesh
            geometry={nodes.Object_75.geometry}
            material={materials.material_46}
          />
          <mesh
            geometry={nodes.Object_76.geometry}
            material={materials.material_47}
          />
        </group>
        <group position={[0.821, -0.196, -1.333]} scale={[-1, 1, 1]}>

          {rimType == 1 && <mesh geometry={nodes.Object_78.geometry} material={rimColor} />}
          {rimType == 2 && <group position={[-0.127, 0, 0]} rotation={[0, 3.15, 0]} scale={1.05}>
            <mesh geometry={nodes1.Object_7.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_8.geometry} material={rimColor} />
          </group>}
          {rimType == 3 && <group position={[-0.11, 0, 0]} rotation={[1.5, 0.01, 1.58]} scale={0.021}>
            <mesh geometry={nodes1.Object_4.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_5.geometry} material={rimColor} />
          </group>}

          <mesh
            geometry={nodes.Object_79.geometry}
            material={materials.tire_mic1}
          />
          <mesh
            geometry={nodes.Object_80.geometry}
            material={materials.bra7997ke_disk}
          />
          {/* <mesh geometry={nodes.Object_81.geometry} material={rimColor} /> */}
          <mesh
            geometry={nodes.Object_82.geometry}
            material={materials["11BLACK.003"]}
          />
          <mesh
            geometry={nodes.Object_83.geometry}
            material={materials["11BLACK"]}
          />
          <mesh
            geometry={nodes.Object_84.geometry}
            material={materials.material_46}
          />
          <mesh
            geometry={nodes.Object_85.geometry}
            material={materials.material_47}
          />
        </group>
        <group position={[0.821, -0.196, 1.241]} scale={[-1, 1, 1]}>

          {rimType == 1 && <mesh geometry={nodes.Object_87.geometry} material={rimColor} />}
          {rimType == 2 && <group position={[-0.127, 0, 0]} rotation={[0, 3.15, 0]} scale={1.05}>
            <mesh geometry={nodes1.Object_7.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_8.geometry} material={rimColor} />
          </group>}
          {rimType == 3 && <group position={[-0.11, 0, 0]} rotation={[1.5, 0.01, 1.58]} scale={0.021}>
            <mesh geometry={nodes1.Object_4.geometry} material={rimColor} />
            <mesh geometry={nodes1.Object_5.geometry} material={rimColor} />
          </group>}
          <mesh
            geometry={nodes.Object_88.geometry}
            material={materials.tire_mic1}
          />
          <mesh
            geometry={nodes.Object_89.geometry}
            material={materials.bra7997ke_disk}
          />
          <mesh geometry={nodes.Object_90.geometry} material={materials.rim1} />
          <mesh
            geometry={nodes.Object_91.geometry}
            material={materials["11BLACK.003"]}
          />
          <mesh
            geometry={nodes.Object_92.geometry}
            material={materials["11BLACK"]}
          />
          <mesh
            geometry={nodes.Object_93.geometry}
            material={materials.material_46}
          />
          <mesh
            geometry={nodes.Object_94.geometry}
            material={materials.material_47}
          />
        </group>
        <mesh
          geometry={nodes.Object_44.geometry}
          material={materials.roughness_fine_001_DIFF}
        />
        <mesh
          geometry={nodes.Object_45.geometry}
          material={materials["30.002"]}
        />
        <mesh
          geometry={nodes.Object_46.geometry}
          material={materials.por_emblem_006_DW}
        />
        <mesh
          geometry={nodes.Object_48.geometry}
          material={materials.roughness_fine_001_DIFF}
        />
        <mesh
          geometry={nodes.Object_49.geometry}
          material={materials["30.002"]}
        />
        <mesh
          geometry={nodes.Object_50.geometry}
          material={materials.por_emblem_006_DW}
        />
        <mesh
          geometry={nodes.Object_52.geometry}
          material={materials.roughness_fine_001_DIFF}
        />
        <mesh
          geometry={nodes.Object_53.geometry}
          material={materials["30.002"]}
        />
        <mesh
          geometry={nodes.Object_54.geometry}
          material={materials.por_emblem_006_DW}
        />
        <mesh
          geometry={nodes.Object_56.geometry}
          material={materials.roughness_fine_001_DIFF}
        />
        <mesh
          geometry={nodes.Object_57.geometry}
          material={materials["30.002"]}
        />
        <mesh
          geometry={nodes.Object_58.geometry}
          material={materials.por_emblem_006_DW}
        />
      </group>
    </group>
  );
}
useGLTF.preload('./models/wheelRims.glb')

useGLTF.preload("./models/porsche911.glb");
