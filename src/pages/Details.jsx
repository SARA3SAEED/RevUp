import React, { useState } from "react";
import DetailsForGTR from "../components/carModels/DetailsForGTR";
import { useDispatch, useSelector } from "react-redux";
import { setBodyColor } from "../redux/Slices/ColorsSlice";

export default function Details() {
  const carBodyColor = useSelector((state) => state.carColors.carBodyColor);
  console.log(carBodyColor);
  const dispatch = useDispatch();
  const colorChanger = (e) => {
    dispatch(setBodyColor(e));
  };
  return (
    <div className="w-full h-screen flex justify-between">
      <div className="w-1/2 h-full">
        <DetailsForGTR />
      </div>
      <div className=" flex gap-8">
        <button onClick={() => colorChanger("#ff0000")}>red</button>
        <button onClick={() => colorChanger("#00ff00")}>green</button>
        <button onClick={() => colorChanger("#0000ff")}>blue</button>
        <button onClick={() => colorChanger("#ffffff")}>white</button>
        <button onClick={() => colorChanger("#000000")}>black</button>
      </div>
    </div>
  );
}
