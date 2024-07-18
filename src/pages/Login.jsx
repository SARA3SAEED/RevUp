import React, { useState } from "react";
import axios from "axios";
import img from "../assets/car-logo1.png";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        "https://66980ca602f3150fb66fe5dc.mockapi.io/user"
      );
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        console.log("Login successful");
        localStorage.setItem("user", user.id);
        localStorage.setItem("role", user.role);

        navigate("/cars");
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error logging in", error);
      setError("Error logging in. Please try again.");
    }
  };

  return (
    <>
      <div className="my-12 ">
        <main className="w-full h-screen flex flex-col items-center justify-center sm:px-4">
          <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
            <div className="text-center">
              <Link to="/">
                <img src={img} width={130} className="mx-auto" />
              </Link>
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Welcome ..
                </h3>
                <p className="">
                  Don't have an account?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-primary hover:text-primary"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
            <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
              <form onSubmit={handleLogin} className="space-y-5">
                {error && <p className="text-red-500">{error}</p>}
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border
                     focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Password</label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border
                     focus:border-primary shadow-sm rounded-lg"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white font-medium bg-primary
                 hover:bg-info hover:text-neutral active:bg-primary rounded-lg duration-150 mt-5"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
