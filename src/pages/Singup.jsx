import React from "react";
import img from "../assets/car-logo1.png";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function Singup() {
  return (
    <>
      <div className="my-12 h-full">
        <main className="w-full h-screen flex flex-col items-center justify-center  sm:px-4">
          <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
            <div className="text-center">
              <Link to="/">
                <img src={img} width={130} className="mx-auto" />
              </Link>
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Create an account
                </h3>
                <p className="">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-medium text-primary hover:text-primary"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
              <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                <div>
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border
                    focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border
                    focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Password</label>
                  <input
                    type="password"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border
                    focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <Link to="/login">
                  <button
                    className="w-full px-4 py-2 text-white font-medium bg-primary
                hover:bg-info hover:text-neutral active:bg-primary rounded-lg duration-150 mt-5"
                  >
                    Create account
                  </button>
                </Link>
              </form>
              <div className="">
                {/* <button
                  className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border 
                  rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
                >
                  <FcGoogle size={20} />
                  Continue with Google
                </button> */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
