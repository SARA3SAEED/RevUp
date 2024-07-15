import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      {/* <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 justify-between items-center gap-12 md:px-8 md:flex">
          <div className="flex-1 max-w-xl">
            <h3 className="text-3xl font-bold">
              Get all of our updates directly to your inbox.
            </h3>
            <p className="text-info mt-3">
              Stay up-to-date with the latest car news, exclusive offers, and
              in-depth reviews of the newest models. Don't miss out on the best
              tips and advice for keeping your car in top condition.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="items-center gap-x-3 space-y-3 sm:space-y-0 md:space-y-3 sm:flex md:block"
            >
              <div className="relative">
                <svg
                  className="w-6 h-6 text-info absolute left-3 inset-y-0 my-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-3 py-2 text-info bg-transparent outline-none border focus:border-primary shadow-sm rounded-lg sm:max-w-xs"
                />
              </div>
              <button
                className="block w-full py-3 px-4 font-medium text-sm text-center text-base-100 bg-primary
                                          hover:bg-indigo-500 active:shadow-none rounded-lg shadow sm:w-auto md:w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}
      <footer className="bg-neutral mt-auto text-base-100 w-full text-center0 lg:text-left">
        <div className="bg-black/5 p-4 text-center text-surface ">
          © 2023 Copyright:
          <Link to="/" className="font-medium text-sm ">
            RevUp
          </Link>
        </div>
      </footer>
    </>
  );
}
