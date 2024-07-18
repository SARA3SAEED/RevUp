import React, { useState, useEffect, Component } from "react";
import Pricing from "../components/comSubscribe/Pricing";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Footer from "../components/Footer";
import PayCard from "../components/comSubscribe/PayCard";

export default function Subscribe() {
  const [showPayCard, setShowPayCard] = useState(false);

  const handleStartFreeTrialClick = () => {
    setShowPayCard(true);
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
    <>
      {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}

      <div className="bg-gradient-to-b from-black to-white flex sm:px-10 lg:px-20 xl:px-32 mb-2 max-sm:my-16 ">
        <Pricing onStartFreeTrialClick={handleStartFreeTrialClick} />
        {showPayCard && <PayCard />}
      </div>
      <Footer />
    </>
  );
}
