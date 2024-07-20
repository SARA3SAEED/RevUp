import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

export default function DashList() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await axios.get("https://66980ca602f3150fb66fe5dc.mockapi.io/contact");
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRequests();
  }, []);

  const handleCheckboxChange = (index) => {
    const newRequests = [...requests];
    newRequests[index].selected = !newRequests[index].selected;
    setRequests(newRequests);
  };

 
  const handleDelete = async (id) => {
      await axios.delete(`https://66980ca602f3150fb66fe5dc.mockapi.io/contact/${id}`);
      setRequests(requests.filter(request => request.id !== id));
  };

  const handleStatusChange = async () => {
    try {
      const updatedRequests = requests.map(request => {
        if (request.selected) {
          return { ...request, status: "Done" };
        }
        return request;
      });

      await Promise.all(
        updatedRequests
          .filter(request => request.selected)
          .map(request =>
            axios.put(`https://66980ca602f3150fb66fe5dc.mockapi.io/contact/${request.id}`, {
              ...request,
              status: "Done"
            })
          )
      );

      setRequests(updatedRequests);
    } catch (error) {
      console.error("Error updating status:", error);
    }
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
              <th className="font-semibold text-left py-3 px-1 w-96 truncate">
                ID
              </th>
              <th className="font-semibold text-left py-3 px-1 w-44 max-w-xs xl:max-w-lg truncate">
              Requester
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Email
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Status Request
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Massage
              </th>
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Delete
              </th>
            </tr>
          </thead>

          <tbody className="w-full px-4">
            {requests.map((request, index) => (
              <tr
                key={request.id}
                className="border-b flex flex-wrap md:flex-no-wrap"
              >
                <td className="py-3 pl-3 pr-1 w-24 flex items-start">
                  <input
                    type="checkbox"
                    checked={request.selected || false}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <div className="ml-auto relative group">
                    <GrStatusGoodSmall
                      size={18}
                      color={request.status === "Done" ? "yellow" : "red"}
                    />
                  </div>
                </td>
                <td className="py-3 px-1 w-96">{request.id}</td>
                <td className="py-3 px-1 w-44 max-w-xs xl:max-w-lg">
                  <div className="relative group ">
                    <p className="truncate">{request.fullName}</p>
                  </div>
                </td>
                <td className="py-3 px-1 flex-1 truncate">
                  {request.email}
                </td>
                <td className="py-3 px-1 flex-1 truncate">{request.status}</td>
                <td className="py-3 px-1 flex-1 truncate">{request.message}</td>
                <td className="py-3 px-1 flex-1 truncate">
                  <button onClick={() => handleDelete(request.id)}>
                    <MdDeleteForever size={23} color="red" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleStatusChange}
        className="mt-4 mx-auto w-80 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Change Status to Done
      </button>
    </>
  );
}
