import React from "react";
import Header from "../components/comHome/Header";
import Footer from "../components/Footer";
import Brand from "../components/comHome/Brand";
import Banner from "../components/comHome/Banner";
import Feature from "../components/comHome/Feature";
import Header2 from "../components/comHome/Header2";
import Header3 from "../components/comHome/Header3";

export default function Home() {
  return (
    <>
      <Header />
      <Feature />
      <Header3 />
      <Header2 />
      <Brand />
      <Banner />
      <Footer />
    </>
  );
}
