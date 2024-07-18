import React, { useState, useEffect, Component } from "react";
import DetailsForGTR from "../components/carModels/DetailsForGTR";
import { useDispatch, useSelector } from "react-redux";
import {
  setBodyColor,
  setCamera,
  setInteriorColor,
  setRimColor,
} from "../redux/Slices/ColorsSlice";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import {
  GiCarWheel,
  GiCarSeat,
  GiCarDoor,
  GiSteeringWheel,
} from "react-icons/gi";
import { BiSend } from "react-icons/bi";
import aa from "../assets/pexels.jpg";

export default function Details() {
  const [tabIndex, setTabIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bodyColorChanger = (e) => {
    dispatch(
      setBodyColor({
        color: e,
        target: [0, 0, 0],
        position: [4.5, 1.6, 4.3],
      })
    );
  };
  const interiorColorChanger = (e) => {
    dispatch(
      setInteriorColor({
        color: e,
        target: [0, 0, 0],
        position: [0.1487268292, 0.484143883, -0.6101339379],
      })
    );
  };
  const rimColorChanger = (e) => {
    dispatch(
      setRimColor({
        color: e,
        target: [0, 0, 0],
        position: [-2.3294932994, 0.0127804534, 1.0361409115],
      })
    );
  };
  const cameraSetter = (e) => {
    if (e == 1) {
      dispatch(
        setCamera({
          target: [0, 0, 0],
          position: [4.5, 1.6, 4.3],
        })
      );
    } else if (e == 2) {
      dispatch(
        setCamera({
          target: [0, 0, 0],
          position: [-2.3294932994, 0.0127804534, 1.0361409115],
        })
      );
    } else if (e == 3) {
      dispatch(
        setCamera({
          target: [0, 0, 0],
          position: [0.1271644018, 0.4528997581, -0.5879844349],
        })
      );
    }
  };
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

    <div className="flex flex-col w-full  h-screen justify-between ">
      <div>{isLoggedIn ? <NavLog role={userRole} /> : <Nav />}</div>
      <div className="flex flex-col items-center  w-full">

        <div className=" flex justify-between w-full h-full min-h-[30rem] ">

          <div className="w-full h-full flex flex-col flex-1">
            <div className="relative h-full bg-accent ">
              <DetailsForGTR />
              <div className="flex absolute top-1 justify-center w-full">
                {isOpen && (
                  <div className="flex gap-8 justify-center mt-2">
                    <button
                      onClick={() =>
                        tabIndex == 1
                          ? bodyColorChanger("#ffffff")
                          : tabIndex == 2
                          ? rimColorChanger("#ffffff")
                          : tabIndex == 3
                          ? interiorColorChanger("#ffffff")
                          : ""
                      }
                      className="w-10 h-10 rounded-full bg-white"
                    ></button>
                    <button
                      onClick={() =>
                        tabIndex == 1
                          ? bodyColorChanger("#000000")
                          : tabIndex == 2
                          ? rimColorChanger("#000000")
                          : tabIndex == 3
                          ? interiorColorChanger("#000000")
                          : ""
                      }
                      className="w-10 h-10 rounded-full bg-black"
                    ></button>
                    <button
                      onClick={() =>
                        tabIndex == 1
                          ? bodyColorChanger("#ff0000")
                          : tabIndex == 2
                          ? rimColorChanger("#ff0000")
                          : tabIndex == 3
                          ? interiorColorChanger("#ff0000")
                          : ""
                      }
                      className="w-10 h-10 rounded-full bg-[#ff0000]"
                    ></button>
                    <button
                      onClick={() =>
                        tabIndex == 1
                          ? bodyColorChanger("#00ff00")
                          : tabIndex == 2
                          ? rimColorChanger("#00ff00")
                          : tabIndex == 3
                          ? interiorColorChanger("#00ff00")
                          : ""
                      }
                      className="w-10 h-10 rounded-full bg-[#00ff00]"
                    ></button>
                    <button
                      onClick={() =>
                        tabIndex == 1
                          ? bodyColorChanger("#0000ff")
                          : tabIndex == 2
                          ? rimColorChanger("#0000ff")
                          : tabIndex == 3
                          ? interiorColorChanger("#0000ff")
                          : ""
                      }
                      className="w-10 h-10 rounded-full bg-[#0000ff]"
                    ></button>
                  </div>
                )}
              </div>
              <div className=" flex absolute sm:right-1 sm:w-20 sm:top-2 sm:h-5/6 max-sm:-bottom-20 max-sm:w-full  ">
                <div className="absolute sm:right-24 sm:top-0 max-sm:top-10 ">
                  {isOpen && (
                    <div className="w-24 h-24 flex sm:flex-col bg-slate-200 rounded-xl items-center justify-center gap-4 border p-2">
                      <h1>VIP ONLY</h1>
                      <div className="overflow-hidden w-10 h-10 rounded-full">
                        <input
                          className="-translate-x-2 -translate-y-2 w-20 h-20 "
                          type="color"
                          onChange={(e) =>
                            tabIndex == 1
                              ? bodyColorChanger(e.target.value)
                              : tabIndex == 2
                              ? rimColorChanger(e.target.value)
                              : tabIndex == 3
                              ? interiorColorChanger(e.target.value)
                              : ""
                          }
                        />
                      </div>
                    </div>
                  )}
                </div>
                <ul className="menu max-sm:menu-horizontal bg-base-200 gap-4 max-sm:w-full rounded-box">
                  <li>
                    <button
                      className="tooltip tooltip-left"
                      data-tip="Body Color"
                      onClick={() => {
                        setTabIndex(1);
                        setIsOpen(true);
                        cameraSetter(1);
                      }}
                    >
                      <GiCarDoor size={30} />
                    </button>
                  </li>
                  <li>
                    <button
                      className="tooltip tooltip-left"
                      data-tip="Rim Color"
                      onClick={() => {
                        setTabIndex(2);
                        setIsOpen(true);
                        cameraSetter(2);
                      }}
                    >
                      <GiCarWheel size={30} />
                    </button>
                  </li>
                  <li>
                    <button
                      className="tooltip tooltip-left"
                      data-tip="Interior Color"
                      onClick={() => {
                        setTabIndex(3);
                        setIsOpen(true);
                        cameraSetter(3);
                      }}
                    >
                      <GiCarSeat size={30} />
                    </button>
                  </li>
                  {/* <li>
                    <button
                      className="tooltip tooltip-left"
                      data-tip="Steering Wheel"
                      onClick={() => {
                        setTabIndex(3);
                        setIsOpen(true);
                        cameraSetter(3);
                      }}
                    >
                      <GiSteeringWheel size={30} />
                    </button>
                  </li> */}
                  <li>
                    <Link
                      to={"../checkout"}
                      className="tooltip tooltip-left"
                      data-tip="Checkout"
                    >
                      <BiSend size={30} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
