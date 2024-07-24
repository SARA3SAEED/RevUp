import React, { useState, useEffect, Component } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { setCarName } from "../redux/Slices/ColorsSlice";
import { useDispatch, useSelector } from "react-redux";
import nessan from "../assets/Nissan.png";
import pursh from "../assets/porsche.png";
import genesis from "../assets/Lotus-Emira.png";
import carMoves from "../assets/carMoves.gif";
import videoCar from "../assets/videoCar.mp4";
import ToyotaSupra from "../assets/ToyotaSupra.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../App.css";
import NavLog from "../components/NavLog";
import Nav2 from "../components/Nav2";

import Stage from "../assets/Stage.png";
import Light from "../assets/Light.png";
// import { Center } from "@react-three/drei";
// import { current } from "@reduxjs/toolkit";

export default function Cars() {
  const arrayOfImages = [
    { id: 1, name: "Nissan-GTR", src: nessan },
    { id: 2, name: "Pursche 911", src: pursh },
    { id: 3, name: "Lotus-Emira", src: genesis },
    { id: 4, name: "ToyotaSupra", src: ToyotaSupra },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isVisible = scrollTop > 20;
      setIsVisible(isVisible);
      setIsLoading(false);
    };
    window.screen.width > 600 ? setIsSmall(false) : setIsSmall(true);

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const settings = {
    dots: true,
    speed: 500,
    beforeChange: (current, next) => setSlideIndex(next),
    className: "center",
    focusOnSelect: true,
    infinite: true,
    // lazyLoad: true,
    centerPadding: 0,
    slidesToShow: isSmall ? 1 : 3,
    slideToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000,
    centerMode: true,
    // vertical: isSmall,
    // verticalSwiping: isSmall,
    arrows: false,
    // prevArrow: "►",
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
    setIsLoading(false);
  }, []);

  const handleClick = (carr) => {
    dispatch(setCarName({ carName: carr.name }));
    localStorage.setItem("displayid", carr.id);
    localStorage.setItem("displayName", carr.name);
    navigate(`../det/${carr.id}`);
  };
  return isLoading ? (
    <Loader />
  ) : (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-between">
      <Nav2 />
      {/* {userId ? <NavLog /> : <Nav />} */}
      <h1 className="absolute z-30 top-1/3 text-center text-neutral font-bold text-5xl w-full p-4">
        Discover the new Models
      </h1>
      {/* <div className="relative"></div> */}
      <video
        className="relative h-[90vh] w-full object-cover	"
        // width="100vw"
        // height="100vh"
        type="video/mp4"
        autoPlay
        loop
        muted
      >
        <source src={videoCar} />
      </video>
      <button
        onClick={() => {
          window.scrollTo({
            top: 1000,
            behavior: "smooth",
          });
        }}
        // href="#carsContainer"
        className="absolute btn btn-base w-14 h-14 bg-opacity-30 border-none bottom-40 text-neutral font-bold text-3xl rounded-full animate-bounce z-10 "
      >
        ⯆
      </button>
      <div className="w-full flex flex-col items-center justify-center h-[90vh] max-sm:h-[50vh] max-sm:justify-start">
        <h1 className="text-neutral text-3xl font-bold mt-5 text-start w-[90vw] p-2">
          Car Models
        </h1>
        <div
          id="carsContainer"
          className={`relative slider-container w-[90vw] h-1/2 my-auto max-sm:my-0 ${
            isVisible && "visible"
          }`}
        >
          {/* <img
            src={Light}
            alt="Light"
            className="h-96 absolute left-1/2 -translate-x-1/2 w-[45rem] -translate-y-[35%] z-10 m-auto"
          /> */}
          <Slider {...settings}>
            {arrayOfImages.map((item, index) => (
              <div
                key={index}
                className={`sm:relative slide flex flex-col items-center text-center rounded-lg p-2 ${
                  index == slideIndex ? "slide-active " : ""
                }`}
              >
                <img
                  src={item.src}
                  // className="sm:absolute sm:z-10 "
                  alt={item.name}
                />
                {/* <div className="flex flex-row gap-2 items-center justify-center mt-8"> */}
                {/* <p className="text-xl font-semibold text-center">
                    {item.name}
                  </p> */}
                <button
                  className="btn btn-accent text-xl mt-8 max-sm:mt-10 w-1/2 max-sm:w-2/3"
                  onClick={() => handleClick(item)}
                >
                  {item.name}
                  &nbsp;&nbsp;<span className="">&#x27A4;</span>
                </button>
                {/* </div> */}
              </div>
            ))}
          </Slider>
          <img
            src={Stage}
            // style={{
            //   display: screen.width <= 600 ? "none" : "block",
            // }}
            alt="Stage"
            className="drop-shadow-lg h-12 absolute left-1/2 -translate-x-1/2 w-[35rem] top-[40%] max-sm:translate-y-12 -z-10 m-auto"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
