import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";

export default function DashStatus() {
  return (
    <>
      <div className="overflow-x-auto">
        <table
          aria-describedby="info-popup"
          aria-label="open tickets"
          className="border-t min-w-full h-full table-auto"
        >
          <thead className="w-full px-4">
            <tr className="border-b flex flex-wrap md:flex-no-wrap">
              <th className="font-semibold text-left py-3 pl-3 pr-1 w-24">
                <input type="checkbox" name="" id="" />
              </th>
              <th className="font-semibold text-left py-3 px-1 w-24 truncate">
                ID
              </th>
              <th className="font-semibold text-left py-3 px-1 w-full max-w-xs xl:max-w-lg truncate">
                Car Name
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Requester
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Status Request
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Date of Request
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Delete
              </th>
            </tr>
          </thead>

        <tbody className="w-full px-4">
          {/* In progress */}
          <tr className="border-b flex flex-wrap md:flex-no-wrap">
            <th className="bg-gray-100 text-left px-3 py-2 w-full" colSpan={7}>
              <h2 className="text-sm">
                <span className="font-normal mr-1">Priority</span>
                <span>In progress</span>
              </h2>
            </th>
          </tr>
          <tr
            role="row"
            className="hover:bg-blue-100 border-b flex flex-wrap md:flex-no-wrap cursor-pointer"
          >
            <td
              role="cell"
              headers="select"
              className="py-3 pl-3 pr-1 w-24 flex items-start"
            >
              <input className="mt-1" type="checkbox" />
              <div className="ml-auto relative group">
                <span
                  style={{
                    padding: "2px 5px",
                    fontSize: "0.7rem",
                    position: "relative",
                    bottom: 2,
                  }}
                  className="font-mono rounded-sm bg-red-600 text-white leading-none"
                >
                  O
                </span>
              </div>
            </td>
            <td className="py-3 px-1 w-24">#12534</td>
            <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
              <div className="relative group w-full">
                <p className="w-full truncate">
                  Quo laudantium error corporis accusamus unde, labore quidem
                  non officiis.
                </p>
              </div>
            </td>
            <td className="py-3 px-1 flex-1 truncate">Marla Darsuz</td>
            <td className="py-3 px-1 flex-1 truncate">Tuesday 09:56</td>
            <td className="py-3 px-1 flex-1 truncate">UK Support</td>
            <td className="py-3 px-1 flex-1 truncate">Nico Braun</td>
          </tr>

          {/* Done */}
          <tr className="border-b flex flex-wrap md:flex-no-wrap">
            <th className="bg-gray-100 text-left px-3 py-2 w-full" colSpan={7}>
              <h2 className="text-sm">
                <span className="font-normal mr-1">Priority</span>
                <span>Done</span>
              </h2>
            </th>
          </tr>

          <tr
            role="row"
            className="hover:bg-blue-100 border-b flex flex-wrap md:flex-no-wrap cursor-pointer"
          >
            <td
              role="cell"
              headers="select"
              className="py-3 pl-3 pr-1 w-24 flex items-start"
            >
              <input className="mt-1" type="checkbox" />
              <div className="ml-auto relative group">
                <span
                  style={{
                    padding: "2px 5px",
                    fontSize: "0.7rem",
                    position: "relative",
                    bottom: 2,
                  }}
                  className="font-mono rounded-sm bg-yellow-400 text-black leading-none"
                >
                  N
                </span>
                {/* dropdown */}
                <span className="hidden group-hover:block ml-4 mt-10 w-screen max-w-lg absolute top-0 border shadow-lg p-6 bg-white rounded-md z-50 text-gray-900">
                  <article>
                    <header>
                      <div>
                        <span className="px-3 py-1 uppercase text-xs leading-none rounded-sm bg-yellow-400 text-black">
                          New
                        </span>
                        <span className="ml-2 text-gray-700">
                          Incident #12534
                        </span>
                      </div>
                    </header>
                  </article>
                </span>
              </div>
            </td>
            <td className="py-3 px-1 w-24">#12534</td>
            <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
              <div className="relative group w-full">
                <p className="w-full truncate">
                  Quo laudantium error corporis accusamus unde, labore quidem
                  non officiis.
                </p>
              </div>
            </td>
            <td className="py-3 px-1 flex-1 truncate">Marla Darsuz</td>
            <td className="py-3 px-1 flex-1 truncate">Tuesday 09:56</td>
            <td className="py-3 px-1 flex-1 truncate">UK Support</td>
            <td className="py-3 px-1 flex-1 truncate">Nico Braun</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
}
