import React from "react";

export default function Bill() {
  return (
    <>
      <div className="px-4 pt-8">
        <p className="text-xl font-medium">Order Summary</p>
        <div className="mt-8 space-y-3 rounded-lg border bg-base-100 px-2 py-4 sm:px-6">
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
        </div>
      </div>
    </>
  );
}
