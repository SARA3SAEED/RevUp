import React, { useState, useEffect, Component } from "react";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import Poesche from "../assets/porsche.png";

export default function History() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    if (userId) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole("");
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-between min-h-screen">
      {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}
      <h1 className="text-center text-neutral font-bold text-3xl w-full p-4 py-8">
        Orders
      </h1>
      <div className="flex flex-col p-2">
        <div className="collapse collapse-arrow bg-secondary bg-opacity-20">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium flex justify-between max-sm:flex-col">
            <p className="max-sm:pb-2">#2879fnk8568s00v99</p>
            <p>{new Date().toLocaleString("en-US")}</p>
          </div>
          <div className="collapse-content flex flex-row items-center justify-around p-2 bg-base-100 border-b">
            <div className="flex flex-col w-1/2 text-start gap-2">
              <p className="w-full">
                <span className="font-bold pr-2">Appointment date: </span>
                {new Date().toLocaleString("en-US")}
              </p>
              <p className="w-full">
                <span className="font-bold pr-2">Orders: </span>
                <br />
                <ul className="pl-4">
                  <li>
                    <span className="font-bold pr-2">External Color: </span>
                    Black
                  </li>
                  <li>
                    <span className="font-bold pr-2">Body Color: </span>
                    Red
                  </li>
                  <li>
                    <span className="font-bold pr-2">Gear Color: </span>
                    Black
                  </li>
                </ul>
              </p>
              <p className="w-fit  px-2 rounded-full bg-primary text-base-100  ">
                <span className="font-bold pr-2">Status: </span>in progress
              </p>
            </div>
            <div className="w-1/3 flex- flex-col items-start justify-start text-center text-xl font-semibold">
              <img className="mb-4" src={Poesche} alt={Poesche} />
              <h1>Porsche 911</h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
