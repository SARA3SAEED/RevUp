import React, { useState, useEffect, Component } from "react";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";
import Bannar from "../components/Bannar";
import Footer from "../components/Footer";
import SectionFooter from "../components/SectionFooter";
import Team from "../components/comAbout/Team";
import Contact from "../components/comAbout/Contact";
import Main from "../components/comAbout/Main";

export default function About() {
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
      <Main />
      <Team />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
