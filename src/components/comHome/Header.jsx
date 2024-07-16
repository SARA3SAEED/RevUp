import { Link } from "react-router-dom";
import img from "../../assets/car-logo1.png";
import React, { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className="relative">
        <section className="relative h-screen bg-base-100 flex items-center justify-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="https://videos.pexels.com/video-files/9129105/9129105-uhd_2732_1440_25fps.mp4"
            autoPlay
            muted
            loop
          ></video>
          <a
            href="#feature-section"
            className="absolute bottom-10 text-base-100 font-bold text-xl  animate-bounce z-10"
          >
            ⯆
          </a>
          <div className="absolute inset-0 bg-neutral opacity-50"></div>
          <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 text-base-100 text-center">
            <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-20">
              <h1 className="font-manrope font-bold text-4xl leading-snug sm:text-5xl mb-5">
                Explore Our 3D Car Website
              </h1>
              <p className="text-xl font-medium leading-8 mb-14 max-w-xl mx-auto">
                Discover the future of car shopping with our immersive 3D car
                website, where you can explore every detail of your dream car
                from the comfort of your home.
              </p>
            </div>
          </div>
        </section>


        <div
          className={`navbar ${
            scrolled ? "bg-neutral" : "bg-transparent"
          } fixed top-0 w-full z-10 transition-colors duration-300`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100  rounded-box z-[1] mt-3 w-52 p-2 shadow "
              >
                <li>
                  <Link to="/cars">Collections</Link>
                </li>
                <li>
                  <Link to="/order">Order History</Link>
                </li>
                <li>
                  <Link to="about">Contact Us</Link>
                </li>
              </ul>
            </div>
            <Link to="/" className="flex">
              <img src={img} className="w-16" />
              <p
                className={` mt-5 text-base-100 ${
                  scrolled ? "text-base-100" : "text-base-100"
                }`}
              >
                RevUp
              </p>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className={`menu menu-horizontal px-1 text-base-100 ${
                scrolled ? "text-base-100" : "text-base-100"
              }`}
            >
              <li>
                <Link to="/cars">Collections</Link>
              </li>
              <li>
                <Link to="/order">Order History</Link>
              </li>
              <li>
                <Link to="about">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/singup" className="menu  px-1 text-base-100 mx-2 ">
              Sign Up
            </Link>
            <Link to="/login" className="menu px-1 text-base-100  mx-2 ">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
