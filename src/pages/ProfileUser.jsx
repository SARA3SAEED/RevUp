import React, { useState, useEffect, Component } from "react";
import Profile from "../components/comProfile/Profile";
import CardStatus from "../components/comProfile/CardStatus";
import CardPro from "../components/comProfile/CardPro";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";

export default function ProfileUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [showProfile, setShowProfile] = useState(false);


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

  const handleEditClick = () => {
    setShowProfile(true);
  };

  return (
    <>
      {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}
      <div className="flex justify-center">
      {showProfile ? <Profile /> : <CardPro onEditClick={handleEditClick} />}
      <CardStatus />
      </div>
      {/* <Profile /> */}
    </>
  );
}