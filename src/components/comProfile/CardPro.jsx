import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoPersonOutline } from "react-icons/io5";

export default function CardPro({ onEditClick }) {
  const [userInfo, setUserInfo] = useState(null);
  
  useEffect(() => {
    const userId = localStorage.getItem('user');
    if (userId) {
      axios.get(`https://66980ca602f3150fb66fe5dc.mockapi.io/user/${userId}`)
        .then((response) => {
          setUserInfo(response.data);
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
        });
    } else {
      console.error("No user ID found in localStorage");
    }
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="m-auto p-2">
      <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <div className="relative mx-auto w-36 rounded-full">
          {/* Uncomment the icon below if needed */}
          {/* <IoPersonOutline size={130} color="gray" /> */}
        </div>
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-gray-900">
          {userInfo.fullName}
        </h1>
        <h3 className="font-lg text-semibold text-center leading-6 text-gray-600">
          {userInfo.role} 
        </h3>
        <p className="w-96 text-center text-sm leading-6 text-gray-500 hover:text-gray-600">
          {userInfo.profile}
        </p>
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
          <li className="flex items-center py-3 text-sm">
            <span>Email</span>
            <span className="ml-auto">{userInfo.email}</span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Mobile Number</span>
            <span className="ml-auto">{userInfo.mobile}</span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Address</span>
            <span className="ml-auto">{userInfo.address}</span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Status</span>
            <span className="ml-auto">
              {userInfo.isVIP ? "vip" : "basic"}
            </span>
          </li>
        </ul>
        <div className="w-full rounded-lg bg-primary mt-4 text-white text-lg font-semibold">
          <button type="submit" className="w-full p-2" onClick={onEditClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
