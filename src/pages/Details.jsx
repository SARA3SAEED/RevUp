import React, { useState, useEffect } from "react";
import DetailsForGTR from "../components/carModels/DetailsForGTR";
import { useDispatch, useSelector } from "react-redux";
import { setBodyColor } from "../redux/Slices/ColorsSlice";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Details() {
  const [activeSlide, setActiveSlide] = useState(0);

  const dispatch = useDispatch();
  const bodyColorChanger = (e) => {
    const colors = ["#ffffff", "#000000", "#ff0000", "#00ff00", "#0000ff"];
    dispatch(
      setBodyColor({
        color: colors[e],
        fov: 45,
        position: [4.5, 1.6, 4.3],
      })
    );
  };

  const settings = {
    className: "center",
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    arrows: false,
    centerPadding: "100px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    variableWidth: true,
    afterChange: (current) => {
      bodyColorChanger(current);
    },
  };
  return (
    <div className="flex flex-col w-full  h-screen justify-between ">
      <div>
        <Nav />
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex w-11/12 justify-center items-center bg-slate-300 h-40">
          <div className="slider-container  w-full">
            <Slider {...settings} className="w-full text-center ">
              <div className="!flex justify-center	" style={{ width: 250 }}>
                <div className="w-32 h-32 bg-white border rounded-full "></div>
              </div>
              <div className="!flex justify-center	" style={{ width: 250 }}>
                <div className="w-32 h-32 bg-black border rounded-full	"></div>
              </div>
              <div className="!flex justify-center	" style={{ width: 250 }}>
                <div className="w-32 h-32 bg-[#ff0000] border rounded-full	"></div>
              </div>
              <div className="!flex justify-center	" style={{ width: 250 }}>
                <div className="w-32 h-32 bg-[#00ff00] border rounded-full	"></div>
              </div>
              <div className="!flex justify-center	" style={{ width: 250 }}>
                <div className="w-32 h-32 bg-[#0000ff] border rounded-full	"></div>
              </div>
            </Slider>
          </div>
        </div>
        <div className=" flex justify-between w-full h-full min-h-[30rem]">
          <div className="w-1/2 h-[30rem]">
            <DetailsForGTR />
          </div>
          <div className=" flex w-1/2 h-full gap-8">
            <div className="flex flex-col">
              <button className="btn">body colors</button>
            </div>
          </div>
        </div>
      </div>
      <div>{/* <Footer />  */}</div>
    </div>
  );
}
