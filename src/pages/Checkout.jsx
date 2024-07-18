import React, { useState, useEffect, Component } from "react";
import Bill from "../components/comCheckout/Bill";
import Pay from "../components/comCheckout/Pay";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import Bannar from "../components/Bannar";

export default function Checkout() {
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
    <>
      {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}

      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 my-28 max-sm:my-16 ">
        <Bill />
        <Pay />
      </div>
      {/* <Bannar /> */}
      <Footer />
    </>
  );
}
