import React, { useState } from "react";
import axios from "axios";
import img from "../assets/car-logo1.png";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("Email must contain '@' and a '.'");
      return;
    }
    if (password.length < 8) {
      setError("Password must be more than 8 characters");
      return;
    }

    try {
      const checkEmailResponse = await axios.get(
        "https://66980ca602f3150fb66fe5dc.mockapi.io/user"
      );

      const emailExists = checkEmailResponse.data.filter(user => user.email === email);
      
      if (emailExists) {
        setError("Email is already registered. Please use a different email.");
        return;
      }

      const role = email.includes("@revup") ? "admin" : "user";
      const response = await axios.post(
        "https://66980ca602f3150fb66fe5dc.mockapi.io/user",
        {
          username,
          email,
          password,
          role,
          isVIP: false,
          modification: [],
          fullName: "",
          mobile: "",
          salary: "",
          bank: "",
          address: "",
          state: "",
          zip: "",
        }
      );
      navigate("/login");
    } catch (error) {
      console.error("Error signing up", error);
      setError("Error signing up. Please try again.");
    }
  };

  return (
    <>
      <div className="my-12 h-full">
        <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
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
              <form onSubmit={handleSignup} className="space-y-5">
                {error && <p className="text-red-500">{error}</p>}
                <div>
                  <label className="font-medium">Name</label>
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white font-medium bg-primary hover:bg-info hover:text-neutral active:bg-primary rounded-lg duration-150 mt-5"
                >
                  Create account
                </button>
              </form>
              {/* <div className="">
                <button
                  className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
                >
                  <FcGoogle size={20} />
                  Continue with Google
                </button>
              </div> */}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
