import React, { useState, useEffect } from "react";
import DetailsForGTR from "../components/carModels/DetailsForGTR";
import { useDispatch, useSelector } from "react-redux";
import {
  setBodyColor,
  setCamera,
  setInteriorColor,
} from "../redux/Slices/ColorsSlice";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bodyColorChanger = (e) => {
    dispatch(
      setBodyColor({
        color: e,
        fov: 30,
        position: [4.5, 1.6, 4.3],
      })
    );
  };
  const interiorColorChanger = (e) => {
    dispatch(
      setInteriorColor({
        color: e,
        fov: 30,
        position: [0.1487268292, 0.484143883, -0.6101339379],
      })
    );
  };
  const cameraSetter = () => {
    dispatch(
      setCamera({
        fov: 30,
        position: [0.1487268292, 0.484143883, -0.6101339379],
      })
    );
  };

  return (
    <div className="flex flex-col w-full  h-screen justify-between ">
      <div>
        <Nav />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className=" flex justify-between w-full h-full min-h-[30rem]">
          <div className="w-1/2 h-full">
            <div className="relative h-full">
              <DetailsForGTR />
              <button
                onClick={cameraSetter}
                className="z-50 absolute right-2 top-2"
              >
                interur
              </button>
            </div>
          </div>
          <div className=" flex w-1/2 bg-slate-200 h-full ">
            <div className="flex justify-around w-full">
              <div className="flex flex-col flex-1 gap-8 items-center">
                <div className="flex flex-col gap-8 items-center">
                  <h1>Body Colors</h1>
                  <div className="flex gap-8 justify-center">
                    <button
                      onClick={() => bodyColorChanger("#ffffff")}
                      className="w-10 h-10 rounded-full bg-white"
                    ></button>
                    <button
                      onClick={() => bodyColorChanger("#000000")}
                      className="w-10 h-10 rounded-full bg-black"
                    ></button>
                    <button
                      onClick={() => bodyColorChanger("#ff0000")}
                      className="w-10 h-10 rounded-full bg-[#ff0000]"
                    ></button>
                    <button
                      onClick={() => bodyColorChanger("#00ff00")}
                      className="w-10 h-10 rounded-full bg-[#00ff00]"
                    ></button>
                    <button
                      onClick={() => bodyColorChanger("#0000ff")}
                      className="w-10 h-10 rounded-full bg-[#0000ff]"
                    ></button>
                  </div>
                </div>
                <div className="flex flex-col gap-8 items-center">
                  <h1>interur Colors</h1>
                  <div className="flex gap-8 justify-center">
                    <button
                      onClick={() => interiorColorChanger("#ffffff")}
                      className="w-10 h-10 rounded-full bg-white"
                    ></button>
                    <button
                      onClick={() => interiorColorChanger("#000000")}
                      className="w-10 h-10 rounded-full bg-black"
                    ></button>
                    <button
                      onClick={() => interiorColorChanger("#ff0000")}
                      className="w-10 h-10 rounded-full bg-[#ff0000]"
                    ></button>
                    <button
                      onClick={() => interiorColorChanger("#00ff00")}
                      className="w-10 h-10 rounded-full bg-[#00ff00]"
                    ></button>
                    <button
                      onClick={() => interiorColorChanger("#0000ff")}
                      className="w-10 h-10 rounded-full bg-[#0000ff]"
                    ></button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center w-52 border gap-8 border-black">
                <h1>VIP</h1>

                <input
                  className=" w-10 h-10 "
                  style={{ borderRadius: "50%" }}
                  type="color"
                  name=""
                  onChange={(e) => bodyColorChanger(e.target.value)}
                  id=""
                />
                <div>a</div>
                <input
                  className=" w-10 h-10 "
                  style={{ borderRadius: "50%" }}
                  type="color"
                  name=""
                  onChange={(e) => interiorColorChanger(e.target.value)}
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
        <button className="btn" onClick={() => navigate("../checkout")}>
          checkout
        </button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
