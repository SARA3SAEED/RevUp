import React, { useState } from "react";
import DetailsForGTR from "../components/carModels/DetailsForGTR";
import { useDispatch, useSelector } from "react-redux";
import { setBodyColor } from "../redux/Slices/ColorsSlice";

export default function Details() {
  const carBodyColor = useSelector((state) => state.carColors.camera);
  console.log(carBodyColor);
  const dispatch = useDispatch();
  const bodyColorChanger = (e) => {
    dispatch(
      setBodyColor({
        color: e,
        fov: 45,
        position: [4.5, 1.6, 4.3],
      })
    );
  };
  return (
    <div className="w-full h-screen flex justify-between">
      <div className="w-1/2 h-full">
        <DetailsForGTR />
      </div>
      <div className=" flex w-1/2 h-full gap-8">
        <button onClick={() => bodyColorChanger("#ff0000")}>red</button>
        <button onClick={() => bodyColorChanger("#00ff00")}>green</button>
        <button onClick={() => bodyColorChanger("#0000ff")}>blue</button>
        <button onClick={() => bodyColorChanger("#ffffff")}>white</button>
        <button onClick={() => bodyColorChanger("#000000")}>black</button>
      </div>
    </div>
  );
}
