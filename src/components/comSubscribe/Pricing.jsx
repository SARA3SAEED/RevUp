import React from "react";

export default function Pricing({ onStartFreeTrialClick }) {
  return (
    <>
      <div className="container px-6 py-20 ">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Vip
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $99.99
              </span>
              <span className="text-gray-500 dark:text-gray-400">/year</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
              Exclusive Color Options
              </li>
              <li className="text-gray-500 dark:text-gray-400">
              Five Free Oil Changes
              </li>
              <li className="text-gray-500 dark:text-gray-400">
              Monthly Car Cleaning
              </li>
              <li className="text-gray-500 dark:text-gray-400">
              Discounts on Additional Services 5%
              </li>
              <li className="text-gray-500 dark:text-gray-400">
              Exclusive Accessories
              </li>
              <li className="text-gray-500 dark:text-gray-400">24x7 Support</li>
            </ul>
            <button 
            onClick={onStartFreeTrialClick}
            className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Start To Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
