import React, { useState, useEffect, Component } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import nessan from "../assets/Nissan.png";
import pursh from "../assets/porsche.png";
import genesis from "../assets/Lotus-Emira.png";
import carMoves from "../assets/carMoves.gif";
import videoCar from "../assets/videoCar.mp4";
import Lamborghini from "../assets/Lamborghini.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../App.css";
import NavLog from "../components/NavLog";
// import { Center } from "@react-three/drei";
// import { current } from "@reduxjs/toolkit";

export default function Cars() {
  const arrayOfImages = [
    { name: "Nissan-GTR", src: nessan },
    { name: "Pursche 911", src: pursh },
    { name: "Lotus-Emira", src: genesis },
    { name: "Lamborghini", src: Lamborghini },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isSmall, setIsSmall] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isVisible = scrollTop > 20; // Adjust this threshold as needed
      setIsVisible(isVisible);
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
    infinite: true,
    lazyLoad: true,
    centerPadding: 0,
    slidesToShow: 3,
    slideToScroll: 1,
    autoPlay: true,
    autoPlaySpeed: 1000,
    centerMode: true,
    vertical: isSmall,
    verticalSwiping: isSmall,
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
  }, []);

  return (
    !isLoading && (
      <div className="min-w-screen min-h-screen flex flex-col items-center justify-between">
        {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}

        {/* {userId ? <NavLog /> : <Nav />} */}
        <h1 className="absolute z-30 top-1/2 text-center text-neutral font-bold text-5xl w-full p-4">
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
        <a
          href="#carsContainer"
          className="absolute btn btn-base w-14 h-14 bg-opacity-30 border-none bottom-10 text-neutral font-bold text-3xl rounded-full animate-bounce z-10 "
        >
          ⯆
        </a>
        <div className="w-full flex flex-col items-center justify-center h-[80vh] max-sm:h-screen max-sm:justify-start">
          <h1 className="text-neutral text-3xl font-bold mt-5 text-start w-[90vw] p-2">
            Car Models
          </h1>
          <div
            id="carsContainer"
            className={
              isVisible
                ? "relative slider-container w-[90vw] h-1/2 my-auto max-sm:my-0 visible"
                : "relative slider-container w-[90vw] h-1/2 my-auto max-sm:my-0"
            }
          >
            <Slider {...settings}>
              {arrayOfImages.map((item, index) => (
                <button
                  key={index}
                  onClick={() => navigate("../det")}
                  className={
                    index == slideIndex
                      ? "slide slide-active flex flex-col items-center justify-center rounded-lg p-2 "
                      : "slide flex flex-col items-center justify-center rounded-lg p-2 "
                  }
                >
                  <img src={item.src} alt={item} />
                  <h1
                    // style={{ cursor: "pointer" }}
                    // onClick={() => navigate("/det")}
                    className="text-xl font-semibold text-center py-3"
                  >
                    {item.name}
                  </h1>
                </button>
              ))}
            </Slider>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}
