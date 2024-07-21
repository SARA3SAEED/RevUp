import React, { useRef } from "react";
import { useSelector } from "react-redux";
import Nissan from "../../assets/Nissan.png";
import { GiCarDoor } from "react-icons/gi";
import { GiCarWheel } from "react-icons/gi";
import { GiCarSeat } from "react-icons/gi";
import { Float, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { NissanSkyline } from "../carModels/NissanSkyline";
import { Canvas, useFrame } from "@react-three/fiber";
import { useParams } from "react-router-dom";
import { Porsche911 } from "../carModels/Porsche911";
import { ToyotaSupra } from "../carModels/ToyotaSupra";

export default function Bill() {
  const carName = localStorage.getItem("displayName");
  const carid = localStorage.getItem("displayid");
  const bodyColor = useSelector((state) => state.carColors.carBodyColor);
  const chairColor = useSelector((state) => state.carColors.InteriorColor);
  const wheelColor = useSelector((state) => state.carColors.rimColor);

  return (
    <>
      <div className="px-4 pt-0 h-full">
        <p className="text-xl font-medium">Order Summary</p>
        <div className="mt-8 space-y-3 w-full rounded-lg border bg-base-100 px-2 py-4 sm:px-6">
          {/* <img className="mb-4" src={Nissan} alt={Nissan} /> */}
          <Canvas
            camera={{
              fov: 30,
              position: [4.5, 1.6, 4.3],
            }}
          >
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <directionalLight intensity={2} position={[1.83, -0.25, 0.93]} />
            <directionalLight intensity={2} position={[-1.97, -0.002, -0.97]} />
            {/* the car model */}
            {carid == 1 && <NissanSkyline />}
            {carid == 2 && <Porsche911 />}
            {carid == 3 && <ToyotaSupra />}
            <OrbitControls
              autoRotate={true}
              enableZoom={false}
              enableRotate={false}
              autoRotateSpeed={1}
            />
          </Canvas>
          <h1 className="text-center text-xl font-semibold">{carName}</h1>
          <div className="flex flex-col w-full text-start gap-2">
            <ul className="pl-4 w-full">
              <li className="my-4 w-full justify-between flex flex-row items-center">
                <p className="text-info">Modifications:</p>
                <p className="text-info">Price</p>
              </li>
              <li className="my-4 w-full justify-between flex flex-row items-center">
                <div className="w-full flex gap-4 items-center">
                  <span className="bg-accent p-2 rounded-xl">
                    <GiCarDoor size={30} />
                  </span>
                  <div className="font-bold w-7 h-7 rounded-full shadow-lg overflow-hidden border-base-300 border">
                    <input
                      type="color"
                      className="w-20 h-20 -translate-x-1 -translate-y-2"
                      disabled
                      value={bodyColor}
                    />
                  </div>
                </div>
                <span className="font-bold">1000$</span>

                {/* <select className="rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                  <option value="Red">Red</option>
                  <option value="Blace" selected>
                    Black
                  </option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                </select> */}
              </li>
              <li className="my-4 w-full flex flex-row justify-between items-center">
                <div className="w-full flex gap-4 items-center">
                  <span className="bg-accent p-2 rounded-xl">
                    <GiCarWheel size={30} />
                  </span>
                  <div className="font-bold w-7 h-7 rounded-full shadow-lg overflow-hidden border-base-300 border">
                    <input
                      type="color"
                      className="w-20 h-20 -translate-x-1 -translate-y-2"
                      disabled
                      value={chairColor}
                    />
                  </div>
                </div>
                <span className="font-bold">500$</span>
                {/* <select className="rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                  <option value="Red" selected>
                    Red
                  </option>
                  <option value="Blace">Black</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                </select> */}
              </li>
              <li className="my-4 w-full flex flex-row justify-between items-center">
                <div className="w-full flex gap-4 items-center">
                  <span className="bg-accent p-2 rounded-xl">
                    <GiCarSeat size={30} />
                  </span>
                  <div className="font-bold w-7 h-7 rounded-full shadow-lg overflow-hidden border-base-300 border">
                    <input
                      type="color"
                      className="w-20 h-20 -translate-x-1 -translate-y-2"
                      disabled
                      value={wheelColor}
                    />
                  </div>
                </div>
                <span className="font-bold">750$</span>
                {/* <select className="rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                  <option value="Red">Red</option>
                  <option value="Blace" selected>
                    Black
                  </option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                </select> */}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="mt-8 space-y-3 rounded-lg border bg-base-100 px-2 py-4 sm:px-6">
          <div className="flex flex-col rounded-lg bg-base-100 sm:flex-row">
            <img
              className="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="https://images.pexels.com/photos/193999/pexels-photo-193999.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="font-semibold">Mercedas- Super Light</span>
              <span className="float-right text-gray-400">42EU - 8.5US</span>
              <p className="text-lg font-bold">$138.99</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg bg-base-100 sm:flex-row">
            <img
              className="m-2 h-24 w-28 rounded-md border object-cover object-center"
              src="https://images.pexels.com/photos/515674/pexels-photo-515674.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            />
            <div className="flex w-full flex-col px-4 py-4">
              <span className="font-semibold">BMW - Super Light</span>
              <span className="float-right text-gray-400">42EU - 8.5US</span>
              <p className="mt-auto text-lg font-bold">$238.99</p>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}
