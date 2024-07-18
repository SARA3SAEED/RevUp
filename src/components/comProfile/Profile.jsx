import React from "react";

export default function Profile() {
  return (
    <>
      <section className="py-10 m-auto ">
        <div className=" mx-auto flex gap-4">
          <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
            {/*  */}
            <div className="">
              <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                Profile
              </h1>

              <form>
                <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                  <div className="w-full  ">
                    <label htmlFor="" className="mb-2 dark:text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                      placeholder="full name"
                    />
                  </div>
                </div>
                <div className="w-full  mb-4 mt-6">
                  <label htmlFor="" className="mb-2 dark:text-gray-300">
                    Profile
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                    placeholder="profile"
                  />
                </div>
                <label
                  className="mt-4 mb-2 block text-sm font-medium"
                  htmlFor="email"
                >
                  Email
                </label>
                <div className="relative">
                  <input
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                    id="email"
                    name="email"
                    placeholder="your.email@gmail.com"
                    type="text"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3 text-gray-400">
                    @
                  </div>
                </div>
                <label
                  className="mt-4 mb-2 block text-sm w-8/12 mr-2 font-medium"
                  htmlFor="billing-address"
                >
                  Mobile Number
                </label>
                <div className="flex flex-row">
                  <p className="w-2/12 flex-shrink-0 rounded-md border bg-base-100 border-gray-200  py-3 text-center text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary">
                    +966
                  </p>
                  {/* <div className="relative w-7/12 flex-shrink-0"> */}
                  <input
                    className="relative w-6/12 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                    id="card-no"
                    name="card-no"
                    placeholder="5xx-xxx-xxx"
                    type="text"
                  />
                </div>

                <label
                  className="mt-4 mb-2 block text-sm font-medium"
                  htmlFor="billing-address"
                >
                  Address
                </label>
                <div className="flex flex-col sm:flex-row">
                  <div className="relative flex-shrink-0 sm:w-7/12">
                    <input
                      className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                      id="billing-address"
                      name="billing-address"
                      placeholder="Street Address"
                      type="text"
                    />
                    <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                      <img
                        alt=""
                        className="h-4 w-4 object-contain"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1024px-Flag_of_Saudi_Arabia.svg.png"
                      />
                    </div>
                  </div>
                  <select
                    className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-secondary focus:ring-secondary"
                    name="billing-state"
                    type="text"
                  >
                    <option value="State">State</option>
                  </select>
                  <input
                    className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-secondary focus:ring-secondary"
                    name="billing-zip"
                    placeholder="ZIP"
                    type="text"
                  />
                </div>

                <div className="flex items-center py-3 text-sm mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm">
                  <span>Status</span>
                  <span className="ml-auto">
                    <select className="rounded-full py-1 px-2 text-xs font-medium">
                      <option value="open">Open for </option>
                      <option value="scripe">Scripe</option>
                      <option value="cancel">Cancel</option>
                    </select>
                  </span>
                </div>

                <div className="w-full rounded-lg bg-primary mt-4 text-white text-lg font-semibold">
                  <button type="submit" className="w-full p-2">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
