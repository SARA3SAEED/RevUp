import React from "react";

export default function Pricing({ onStartFreeTrialClick }) {
  return (
    <>
      <div className="container px-6 py-20 bg-base-100 ">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-base-200 border-2 rounded-lg lg:mx-4 ">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-primary uppercase rounded-lg bg-base-300">
                Vip
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-neutral uppercas">
                $99.99
              </span>
              <span className="text-neutral">/year</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-neutral">Exclusive Color Options</li>
              <li className="text-neutral">Five Free Oil Changes</li>
              <li className="text-neutral">Monthly Car Cleaning</li>
              <li className="text-neutral">
                Discounts on Additional Services 5%
              </li>
              <li className="text-neutral">Exclusive Accessories</li>
              <li className="text-neutral">24x7 Support</li>
            </ul>
            <button
              onClick={onStartFreeTrialClick}
              className="btn btn-primary inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase focus:outline-none"
            >
              Start To Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
