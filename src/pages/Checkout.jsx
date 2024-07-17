import React from "react";
import Bill from "../components/comCheckout/Bill";
import Pay from "../components/comCheckout/Pay";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Bannar from "../components/Bannar";

export default function Checkout() {
  return (
    <>
      <Nav />
      <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32 my-28 max-sm:my-16 ">
        <Bill />
        <Pay />
      </div>
      {/* <Bannar /> */}
      <Footer />
    </>
  );
}
