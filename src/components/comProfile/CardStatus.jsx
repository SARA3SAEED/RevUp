import React from 'react';


export default function CardStatus() {
  return (
    <>
    <div className="py-10 w-96">
    <div className="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li className="flex items-center py-3 text-sm">
        <span>Status</span>
        <span className="ml-auto">
          <span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">
            Open for side gigs
          </span>
        </span>
      </li>
      <li className="flex items-center py-3 text-sm">
        <span>Deta of Order</span>
        <span className="ml-auto">Apr 08, 2022</span>
      </li>
        </ul>
        </div>
        </div>
    </>
  )
}
