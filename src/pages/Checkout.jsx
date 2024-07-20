import React, { useState, useEffect, Component } from "react";
import Bill from "../components/comCheckout/Bill";
import Pay from "../components/comCheckout/Pay";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import Bannar from "../components/Bannar";
import Loader from "../components/Loader";

export default function Checkout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}

      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-16 my-28 max-sm:my-16 gap-4 ">
        <Bill />
        <Pay />
      </div>
      {/* <Bannar /> */}
      <Footer />
    </>
  );
}
