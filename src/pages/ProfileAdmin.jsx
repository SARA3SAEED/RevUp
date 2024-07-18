import React, { useState, useEffect, Component } from "react";
// import Profile from "../components/comProfile/Profile";
// import Sidebar from "../components/comAdmin/Sidebar";
// import CardPro from "../components/comProfile/CardPro";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import DashboardAdmin from '../pages/DashboardAdmin';


export default function ProfileAdmin() {
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

  // const handleEditClick = () => {
  //   setShowProfile(true);
  // };


  
  return (
    <>
      {/* {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}

      <div className="h-full w-full flex items-center overflow-hidden antialiased text-gray-800 bg-white">
        {/* <Sidebar />
        {showProfile ? <Profile /> : <CardPro onEditClick={handleEditClick} />} */}
        <DashboardAdmin />
      {/* </div> */}
    </>
  );
}
