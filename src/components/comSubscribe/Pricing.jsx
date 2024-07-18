import React from "react";

export default function Pricing({ onStartFreeTrialClick }) {
  return (
    <>
      <div className="container px-6 py-20 ">
        <div className="flex flex-col items-center justify-center space-y-8 lg:-mx-4 lg:flex-row lg:items-stretch lg:space-y-0">
          <div className="flex flex-col w-full max-w-sm p-8 space-y-8 text-center bg-white border-2 border-gray-200 rounded-lg lg:mx-4 dark:bg-gray-900 dark:border-gray-700">
            <div className="flex-shrink-0">
              <h2 className="inline-flex items-center justify-center px-2 font-semibold tracking-tight text-blue-400 uppercase rounded-lg bg-gray-50 dark:bg-gray-700">
                Expert
              </h2>
            </div>
            <div className="flex-shrink-0">
              <span className="pt-2 text-3xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $49.90
              </span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="flex-1 space-y-4">
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited projects
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited projects
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited collaborators
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Unlimited storage
              </li>
              <li className="text-gray-500 dark:text-gray-400">
                Real-time collaborations
              </li>
              <li className="text-gray-500 dark:text-gray-400">24x7 Support</li>
            </ul>
            <button 
            onClick={onStartFreeTrialClick}
            className="inline-flex items-center justify-center px-4 py-2 font-medium text-white uppercase transition-colors bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none">
              Start free trial
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
