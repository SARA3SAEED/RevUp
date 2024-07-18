import React, { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";

export default function DashStatus() {
  const [requests, setRequests] = useState([
    {
      id: "#12534",
      carName: "Quo laudantium error corporis accusamus unde",
      requester: "Marla Darsuz",
      date: "Tuesday 09:56",
      status: "In Progress",
      selected: false,
    },
    {
      id: "#12534",
      carName: "Quo laudantium error corporis accusamus unde",
      requester: "Marla Darsuz",
      date: "Tuesday 09:56",
      status: "In Progress",
      selected: false,
    },
    {
      id: "#12534",
      carName: "Quo laudantium error corporis accusamus unde",
      requester: "Marla Darsuz",
      date: "Tuesday 09:56",
      status: "In Progress",
      selected: false,
    },
  ]);

  const handleCheckboxChange = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].selected = !updatedRequests[index].selected;
    setRequests(updatedRequests);
  };

  const handleStatusChange = () => {
    const updatedRequests = requests.map((request) => {
      if (request.selected) {
        return {
          ...request,
          status: "Done",
        };
      }
      return request;
    });
    setRequests(updatedRequests);
  };

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
            {requests.map((request, index) => (
              <tr
                key={index}
                className="border-b flex flex-wrap md:flex-no-wrap"
              >
                <td className="py-3 pl-3 pr-1 w-24 flex items-start">
                  <input
                    type="checkbox"
                    checked={request.selected}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div className="ml-auto relative group">
                    <GrStatusGoodSmall
                      size={18}
                      color={request.status === "Done" ? "yellow" : "red"}
                    />
                  </div>
                </td>
                <td className="py-3 px-1 w-24">{request.id}</td>
                <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
                  <div className="relative group w-full">
                    <p className="w-full truncate">{request.carName}</p>
                  </div>
                </td>
                <td className="py-3 px-1 flex-1 truncate">
                  {request.requester}
                </td>
                <td className="py-3 px-1 flex-1 truncate">{request.status}</td>
                <td className="py-3 px-1 flex-1 truncate">{request.date}</td>
                <td className="py-3 px-1 flex-1 truncate">
                  <MdDeleteForever size={23} color="red" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleStatusChange}
        className="mt-4 mx-auto w-96 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Change Status to In Progress
      </button>
    </>
  );
}
