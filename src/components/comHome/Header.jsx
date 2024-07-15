import React from 'react';
import { Link } from "react-router-dom";

import img from '../../assets/car-logo1.png';

export default function Header() {
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



          <div className="absolute inset-0 bg-neutral opacity-50"></div>
          <div className="relative w-full max-w-7xl mx-auto px-4 lg:px-8 text-white text-center">
            <div className="w-full max-w-4xl mx-auto sm:px-12 mb-10 lg:mb-20">
              <h1 className="font-manrope font-bold text-4xl leading-snug sm:text-5xl mb-5">
                Explore Our 3D Car Website
              </h1>
              <p className="text-xl font-medium leading-8 mb-14 max-w-xl mx-auto">
                Discover the future of car shopping with our immersive 3D car website, where you can explore every detail of your dream car from the comfort of your home.
              </p>
            </div>
          </div>
        </section>
        <div className="navbar bg-transparent absolute top-0 w-full z-10">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
                <li><a>Collections</a></li>
                <li><a>Features</a></li>
                <li><a>Contact Us</a></li>
              </ul>
            </div>
              <img src={img} className='w-16' /><p className='text-white'>RevUp</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <li><a>Collections</a></li>
              <li><a>Features</a></li>
              <li><a>Contact Us</a></li>
            </ul>
          </div>
          <div className="navbar-end">
            <Link to="/singup" className="btn m-2 hover:bg-primary">Sign Up</Link>
            <Link to="/login" className="btn m-2 hover:bg-primary">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
}
