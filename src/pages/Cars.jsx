import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import nessan from "../assets/Nissan-GTR.png";
import pursh from "../assets/pursh.png";
import genesis from "../assets/genesis.png";
import carMoves from "../assets/carMoves.gif";
import videoCar from "../assets/videoCar.mp4";
import Lamburgini from "../assets/Lamburgini.png";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../App.css";

export default function Cars() {
  const arrayOfImages = [nessan, pursh, genesis];
  const [content, setContent] = useState({
    first: arrayOfImages[0],
    second: arrayOfImages[1],
    third: arrayOfImages[2],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // const animation = useSpring({
  //   opacity: isVisible ? 1 : 0,
  //   from: { opacity: 0 },
  //   config: { duration: 1000 }, // Adjust animation duration
  // });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const isVisible = scrollTop > 500; // Adjust this threshold as needed
      setIsVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setIsAnimated(false);
    };
  }, []);

  const goPrev = () => {
    const copyOfArr = content;
    setContent({
      first: copyOfArr.third,
      second: copyOfArr.first,
      third: copyOfArr.second,
    });
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
  };

  const goForward = () => {
    const copyOfArr = content;
    setContent({
      first: copyOfArr.second,
      second: copyOfArr.third,
      third: copyOfArr.first,
    });
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
    }, 1000);
  };
  return (
    !isLoading && (
      <div className="min-w-screen min-h-screen flex flex-col items-center">
        <Nav></Nav>
        <h1 className="absolute z-30 top-20 text-base-100 bg-neutral bg-opacity-10 font-bold text-3xl text-start w-full p-4">
          Discover the new Models
        </h1>

        <video
          className="w-screen relative"
          src={videoCar}
          autoPlay
          loop
          muted
        ></video>
        <a
          href="#carsContainer"
          className="absolute bottom-10 btn btn-base-100 text-neutral font-bold text-xl rounded-full animate-bounce z-10"
        >
          ⯆
        </a>
        <div
          id="carsContainer"
          className={
            isVisible
              ? "carousel carousel-center bg-base-100 rounded-box w-full space-x-8 p-4 m-auto transition ease-in-out duration-500 h-[90vh] is-visible"
              : "carousel carousel-center bg-base-100 rounded-box w-full space-x-8 p-4 m-auto transition ease-in-out duration-500 h-[90vh]"
          }
        >
          <div
            id="item1"
            className={
              // "carousel-item rounded-xl flex items-center justify-between w-[30rem] bg-base-100 shadow-lg  transition ease-in-out duration-500 scale-50 smallCom" +
              isAnimated
                ? "carousel-item rounded-xl flex items-center justify-between w-[50rem] bg-base-100 shadow-lg  transition ease-in-out duration-500 scale-50 smallCom animated"
                : "carousel-item rounded-xl flex items-center justify-between w-[50rem] bg-base-100 shadow-lg  transition ease-in-out duration-500 scale-50 smallCom"
            }
          >
            <img className="w-[42rem] h-[19]" src={content.first} />
          </div>
          <div
            id="item2"
            className={
              isAnimated
                ? "carousel-item rounded-xl flex items-center justify-between w-[50rem] shadow-lg bg-base-100 transition ease-in-out duration-500 z-10"
                : "carousel-item rounded-xl flex items-center justify-between w-[50rem] shadow-lg bg-base-100 transition ease-in-out duration-500 z-10 smallCom"
            }
          >
            <a
              href="#item1"
              className="btn btn-circle btn-ghost text-secondary"
              onClick={() => goPrev()}
            >
              ❮
            </a>
            <div className="flex flex-col justify-center items-center">
              <img className="w-[45rem] h-[20rem]" src={content.second} />
              <p className="b border-t border-base-300 text-center text-xl w-full pt-2">
                Purch 911
              </p>
              <p className="text-primary">New</p>
            </div>
            <a
              href="#item3"
              className="btn btn-circle btn-ghost text-secondary"
              onClick={() => goForward()}
            >
              ❯
            </a>
          </div>
          <div
            id="item3"
            className={
              // "carousel-item rounded-xl flex items-center justify-between w-[30rem] bg-base-100 shadow-lg  transition ease-in-out duration-500 scale-50 smallCom" +
              isAnimated
                ? "carousel-item rounded-xl flex items-center justify-between w-[50rem] bg-base-100 shadow-lg  transition ease-in-out duration-500 scale-50 smallCom animated"
                : "carousel-item rounded-xl flex items-center justify-between w-[50rem] bg-base-100 shadow-lg  transition ease-in-out duration-500 scale-50 smallCom"
            }
          >
            <img className="w-[42rem] h-[18rem]" src={content.third} />
          </div>
        </div>
        <div className="w-full relative overflow-hidden h-fit mt-auto self-end">
          <div className="flex flex-row items-center justify-center self-end relative -right-full animataion">
            <img src={Lamburgini} className="w-36" alt="car moves" />
            <div className="w-[100vw] h-6 bg-gradient-to-r from-primary to-base-100 rounded-xl"></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  );
}
