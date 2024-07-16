import React from "react";
import Nav from "../components/Nav";
import Bannar from "../components/Bannar";
import Footer from "../components/Footer";
import SectionFooter from "../components/SectionFooter";
import Team from "../components/comAbout/Team";
import Contact from "../components/comAbout/Contact";
import Main from "../components/comAbout/Main";

export default function About() {
  return (
    <>
      <Nav />
      <Main />
      <Team />
      <Contact />
      <Bannar />
      {/* <SectionFooter /> */}
      <Footer />
    </>
  );
}
