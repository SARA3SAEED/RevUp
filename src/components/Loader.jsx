import React from "react";
import "../App.css";
import Lamburgini from "../assets/Lamburgini.png";

function Loader() {
  return (
    <div className="w-full overflow-hidden h-screen flex items-center justify-center">
      <div className="flex flex-row items-center justify-center self-end m-auto relative animataion">
        <img src={Lamburgini} className="w-36" alt="car moves" />
        <div className="w-[100vw] h-6 bg-gradient-to-r from-primary to-base-100 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Loader;
