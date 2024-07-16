import React from "react";
import "../App.css";

function Loader() {
  return (
    <div className="w-full relative overflow-hidden h-fit mt-auto self-end">
      <div className="flex flex-row items-center justify-center self-end relative -right-full animataion">
        <img src={Lamburgini} className="w-36" alt="car moves" />
        <div className="w-[100vw] h-6 bg-gradient-to-r from-primary to-base-100 rounded-xl"></div>
      </div>
    </div>
  );
}

export default Loader;
