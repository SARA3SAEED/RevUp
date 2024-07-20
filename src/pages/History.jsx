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
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(true);

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

  const toggleOrderDetails = () => {
    setIsOrderDetailsVisible(!isOrderDetailsVisible);
  };

  return (
    !isLoading && (
      <div className="flex flex-col items-center justify-between min-h-screen">
        {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}
        {isLoggedIn ? (
          <section className="w-full py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
              <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
                Order history
              </h2>
              <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
                Check the status of recent orders, manage returns{" "}
              </p>

              <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
                {user.modification && user.modification.length > 0 ? (
                  user.modification.map((item) => (
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
                      <div className="data">
                        <p className="font-semibold text-base leading-7 text-black">
                          Order Id:{" "}
                          <span className="text-indigo-600 font-medium">
                            {item.id}
                          </span>
                          <p className="text-gray-600">{item.date}</p>
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={toggleOrderDetails}
                        class="hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                        id="hs-basic-collapse"
                        data-hs-collapse="#hs-basic-collapse-heading"
                      >
                        Track Your Order
                        <svg
                          className={`hs-collapse-open:rotate-180 flex-shrink-0 size-4 text-white ${
                            isOrderDetailsVisible ? "rotate-180" : ""
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6"></path>
                        </svg>
                      </button>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No orders found.</p>
                )}

                {isOrderDetailsVisible &&
                  user.modification &&
                  user.modification.length > 0 && (
                    <div className="w-full px-3 min-[400px]:px-6">
                      {user.modification.map((item) => (
                        <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full">
                          <div className="img-box w-1/3">
                            <img className="mb-4" src={Poesche} alt={Poesche} />
                          </div>
                          <div className="flex flex-row items-center w-full ">
                            <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                              <div className="flex items-center">
                                <div className="">
                                  <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                    {item.carName}
                                  </h2>
                                  <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                    By:  {user.fullName}
                                  </p>
                                  <div className="flex flex-col ">
                                    <div className=" flex font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                      <p className="">External Color: </p>
                                      <div className="mt-1 mx-3 relative w-5 h-5 overflow-hidden rounded-full">
                                        <input
                                          className="absolute w-20 h-20 -translate-x-1 -translate-y-1"
                                          type="color"
                                          value={item.chairColor}
                                          disabled
                                        />
                                      </div>
                                    </div>

                                    <div className="flex font-medium text-base leading-7 text-black ">
                                      <p> Body Color: </p>
                                      <div className="mt-1 mx-8 relative w-5 h-5 overflow-hidden rounded-full">
                                        <input
                                          className="absolute w-20 h-20 -translate-x-1 -translate-y-1"
                                          type="color"
                                          value={item.chairColor}
                                          disabled
                                        />
                                      </div>
                                    </div>

                                    <div className="flex font-medium text-base leading-7 text-black ">
                                      <p>Wheel Color: </p>
                                      <span className="text-gray-500">
                                        <div className="mt-1 mx-6 relative w-5 h-5 overflow-hidden rounded-full">
                                          <input
                                            className="absolute w-20 h-20 -translate-x-1 -translate-y-1"
                                            type="color"
                                            value={item.wheelColor}
                                            disabled
                                          />
                                        </div>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center">
                                <div className="">
                                  <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                                    Transaction Details
                                  </h2>
                                  <p className="font-normal text-lg leading-8 text-gray-500 mb-3 ">
                                    By: RevUp
                                  </p>
                                  <div className="flex flex-col ">
                                    <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                      Total Price:{" "}
                                      <span className="text-gray-500">
                                        {" "}
                                        1500$
                                      </span>
                                    </p>
                                    <p className="font-medium text-base leading-7 text-black ">
                                      Status:{" "}
                                      <span className="text-gray-500">
                                        {" "}
                                        {item.status}
                                      </span>
                                    </p>
                                    <p className="font-medium text-base leading-7 text-black ">
                                      Appointment date:{" "}
                                      <span className="text-gray-500">
                                        {" "}
                                        {item.appointmentDate}
                                      </span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
          </section>
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
