import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import Poesche from "../assets/porsche.png";

export default function History() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://66980ca602f3150fb66fe5dc.mockapi.io/user/${localStorage.getItem(
          "user"
        )}`
      )
      .then(function (res) {
        setUser(res.data);
        setIsLoading(false);
      });
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
    !isLoading && (
      <div className="flex flex-col items-center justify-between min-h-screen">
        {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}
        {isLoggedIn ? (
          <>
            <h1 className="text-center text-neutral font-bold text-3xl w-full p-4 py-8">
              Orders
            </h1>
            <div className="flex flex-col p-2 gap-2">
              {user.modification.map((item) => (
                <div className="collapse collapse-arrow bg-secondary bg-opacity-20">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium flex justify-between max-sm:flex-col">
                    <p className="max-sm:pb-2">{item.id}</p>
                    <p>{item.date}</p>
                  </div>
                  <div className="collapse-content flex flex-row items-center justify-around p-2 bg-base-100 border-b">
                    <div className="flex flex-col w-1/2 text-start gap-2">
                      <p className="w-full">
                        <span className="font-bold pr-2">
                          Appointment date:{" "}
                        </span>
                        {item.appointmentDate}
                      </p>
                      <p className="w-full">
                        <span className="font-bold pr-2">Order: </span>
                        <br />
                        <ul className="pl-4">
                          <li className="flex flex-row items-center">
                            <span className="font-bold pr-2">Body Color: </span>
                            <div className="relative w-5 h-5 overflow-hidden rounded-full">
                              <input
                                className="absolute w-20 h-20 -translate-x-1 -translate-y-1"
                                type="color"
                                value={item.bodyColor}
                                disabled
                              />
                            </div>
                          </li>
                          <li className="flex flex-row items-center">
                            <span className="font-bold pr-2">
                              Internal Color:{" "}
                            </span>
                            <div className="relative w-5 h-5 overflow-hidden rounded-full">
                              <input
                                className="absolute w-20 h-20 -translate-x-1 -translate-y-1"
                                type="color"
                                value={item.chairColor}
                                disabled
                              />
                            </div>
                          </li>
                          <li className="flex flex-row items-center">
                            <span className="font-bold pr-2">
                              Wheel Color:{" "}
                            </span>
                            <div className="relative w-5 h-5 overflow-hidden rounded-full">
                              <input
                                className="absolute w-20 h-20 -translate-x-1 -translate-y-1"
                                type="color"
                                value={item.wheelColor}
                                disabled
                              />
                            </div>
                          </li>
                        </ul>
                      </p>
                      <p className="w-fit  px-2 rounded-full bg-primary text-base-100  ">
                        <span className="font-bold pr-2">Status: </span>
                        {item.status}
                      </p>
                    </div>
                    <div className="w-1/3 flex- flex-col items-start justify-start text-center text-xl font-semibold">
                      <img className="mb-4" src={Poesche} alt={Poesche} />
                      <h1>{item.carName}</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <h1 className="m-auto text-3xl font-bold opacity-30">
            Login Or Sign Up
          </h1>
        )}
        <Footer />
      </div>
    )
  );
}
