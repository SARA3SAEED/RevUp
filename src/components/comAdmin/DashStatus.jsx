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
      status: "UK Support",
      selected: false,
    },
    {
      id: "#12534",
      carName: "Quo laudantium error corporis accusamus unde",
      requester: "Marla Darsuz",
      date: "Tuesday 09:56",
      status: "UK Support",
      selected: false,
    },
    {
      id: "#12534",
      carName: "Quo laudantium error corporis accusamus unde",
      requester: "Marla Darsuz",
      date: "Tuesday 09:56",
      status: "UK Support",
      selected: false,
    },
    {
      id: "#12534",
      carName: "Quo laudantium error corporis accusamus unde",
      requester: "Marla Darsuz",
      date: "Tuesday 09:56",
      status: "UK Support",
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
          status: "In Progress",
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
            {/* In progress */}
            {/* <tr className="border-b flex flex-wrap md:flex-no-wrap">
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
                <GrStatusGoodSmall size={18} color="red" />
              </div>
            </td>
            <td className="py-3 px-1 w-24">#12534</td>
            <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
              <div className="relative group w-full">
                <p className="w-full truncate">
                  {" "}
                  Quo laudantium error corporis accusamus unde, labore quidem
                  non officiis.
                </p>
              </div>
            </td>
            <td className="py-3 px-1 flex-1 truncate">Marla Darsuz</td>
            <td className="py-3 px-1 flex-1 truncate">Tuesday 09:56</td>
            <td className="py-3 px-1 flex-1 truncate">UK Support</td>
            <td className="py-3 px-1 flex-1 truncate">
              <MdDeleteForever size={23} color="red" />
            </td>
          </tr> */}

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
                      color={
                        request.status === "In Progress" ? "red" : "yellow"
                      }
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

            {/* Done */}
            <tr className="border-b flex flex-wrap md:flex-no-wrap">
              <th
                className="bg-gray-100 text-left px-3 py-2 w-full"
                colSpan={7}
              >
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
                  <GrStatusGoodSmall size={20} color="yellow" />
                </div>
              </td>
              <td className="py-3 px-1 w-24">#12534</td>
              <td className="py-3 px-1 w-full max-w-xs xl:max-w-lg">
                <div className="relative group w-full">
                  <p className="w-full truncate">
                    {" "}
                    Quo laudantium error corporis accusamus unde, labore quidem
                    non officiis.
                  </p>
                </div>
              </td>
              <td className="py-3 px-1 flex-1 truncate">Marla Darsuz</td>
              <td className="py-3 px-1 flex-1 truncate">Tuesday 09:56</td>
              <td className="py-3 px-1 flex-1 truncate">UK Support</td>
              <td className="py-3 px-1 flex-1 truncate">
                <MdDeleteForever size={23} color="red" />
              </td>
            </tr>
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
