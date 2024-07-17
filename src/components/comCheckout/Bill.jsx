import React from "react";
import Porsche from "../../assets/porsche.png";

export default function Bill() {
  return (
    <>
      <div className="px-4 pt-0 h-full">
        <p className="text-xl font-medium">Order Summary</p>
        <div className="mt-8 space-y-3 rounded-lg border bg-base-100 px-2 py-4 sm:px-6">
          <img className="mb-4" src={Porsche} alt={Porsche} />
          <h1 className="text-center text-xl font-semibold">Porsche 911</h1>
          <div className="flex flex-col w-1/2 text-start gap-2">
            <ul className="pl-4 w-full">
              <li className="my-4 w-full flex flex-row items-center">
                <p className="font-bold w-32">External Color: </p>
                <select className="rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                  <option value="Red">Red</option>
                  <option value="Blace" selected>
                    Black
                  </option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                </select>
              </li>
              <li className="my-4 w-full flex flex-row items-center">
                <p className="font-bold w-32">Body Color: </p>
                <select className="rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                  <option value="Red" selected>
                    Red
                  </option>
                  <option value="Blace">Black</option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                </select>
              </li>
              <li className="my-4 w-full flex flex-row items-center">
                <p className="font-bold w-32">Gear Color: </p>
                <select className="rounded-md border border-gray-200 px-4 py-2 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                  <option value="Red">Red</option>
                  <option value="Blace" selected>
                    Black
                  </option>
                  <option value="Green">Green</option>
                  <option value="Blue">Blue</option>
                  <option value="White">White</option>
                </select>
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
