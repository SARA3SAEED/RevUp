import React, { useState, useEffect, Component } from "react";
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

 


  
  return (
    <>
 
        <DashboardAdmin />
    </>
  );
}
