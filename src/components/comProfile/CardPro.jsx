import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdEmail } from "react-icons/md";
import { RiUserLocationFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa6";
import { GrStatusInfo } from "react-icons/gr";
import { IoPersonOutline } from "react-icons/io5";

export default function CardPro({ onEditClick }) {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("user");
    if (userId) {
      axios
        .get(`https://66980ca602f3150fb66fe5dc.mockapi.io/user/${userId}`)
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
    return <div className="absolute translate-y-1/2 m-auto">Loading...</div>;
  }

  return (
    <div className="absolute w-2/3 max-sm:w-11/12 translate-y-1/2 m-auto p-2">
      <div className="rounded-lg  bg-base-100 bg-opacity-25 px-4 pt-8 pb-10 shadow-lg">
        <div className="relative mx-auto rounded-full">
          {/* Uncomment the icon below if needed */}
          {/* <IoPersonOutline size={130} color="gray" /> */}
        </div>
        <h1 className="my-1 text-center text-xl font-bold leading-8 text-neutral">
          {userInfo.fullName}
        </h1>
        <h3 className="font-lg text-semibold text-center leading-6 text-neutral">
          {userInfo.role}
        </h3>
        <p className="w-96 max-sm:w-60 text-center text-sm leading-6 ">
          {userInfo.profile}
        </p>
        <ul className="mt-3 rounded bg-transparent bg-opacity-35 py-2 px-3 text-neutral shadow-sm hover:shadow">
          <li className="flex items-center py-3 text-md">
            <MdEmail />
            <span className="ml-2">{userInfo.email}</span>
          </li>
          <li className="flex items-center py-3 text-md">
            <FaPhone />
            <span className="ml-2">{userInfo.mobile}</span>
          </li>
          <li className="flex items-center py-3 text-md">
            <RiUserLocationFill />
            <span className="ml-2">{userInfo.address}</span>
          </li>
          <li className="flex items-center py-3 text-md">
            <GrStatusInfo />
            <span className="ml-2">{userInfo.isVIP ? "vip" : "basic"}</span>
          </li>
        </ul>
        <div className="btn w-full rounded-lg btn-primary mt-4 text-base-100 text-lg font-semibold">
          <button type="submit" className="w-full p-2" onClick={onEditClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
