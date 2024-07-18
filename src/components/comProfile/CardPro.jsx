import React from "react";
import { IoPersonOutline } from "react-icons/io5";

export default function CardPro({ onEditClick }) {
  return (
    <>
      <div className="m-10 max-w-sm">
        <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
          <div className="relative mx-auto w-36 rounded-full">
            <div className="mx-auto h-auto w-full rounded-full ">
              <IoPersonOutline size={130} color="gray" />
            </div>
          </div>
          <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
            Michael Simbal
          </h1>
          <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
            Marketing Exec. at Denva Corp
          </h3>
          <p className="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Architecto, placeat!
          </p>
          <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
            <li className="flex items-center py-3 text-sm">
              <span> Email</span>
              <span className="ml-auto">email@gmail.com</span>
            </li>

            <li className="flex items-center py-3 text-sm">
              <span>Mobile Number</span>
              <span className="ml-auto">5xx-xxx-xxx</span>
            </li>

            <li className="flex items-center py-3 text-sm">
              <span> Address</span>
              <span className="ml-auto">Street Address</span>
            </li>
          </ul>
          <div className="w-full rounded-lg bg-primary mt-4 text-white text-lg font-semibold">
            <button type="submit" className="w-full p-4" onClick={onEditClick}>
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
