import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import Loader from "../Loader";

export default function DashStatus() {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tempId, setTempId] = useState("");
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null); 


  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "admin") {
      axios
        .get(`https://66980ca602f3150fb66fe5dc.mockapi.io/user`)
        .then((res) => {
          const users = res.data;

          const allRequests = [];

          users.forEach((user) => {
            if (user.modification) {
              user.modification.forEach((mod) => {
                allRequests.push({
                  id: mod.id,
                  carName: mod.carName,
                  requester: user.username,
                  userId: user.id,
                  date: mod.date,
                  status: mod.status,
                  selected: false,
                });
              });
            }
          });

          setRequests(allRequests);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
        });

      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    console.log("Requests state updated:", requests);
  }, [requests]);

  const handleCheckboxChange = (index) => {
    const updatedRequests = [...requests];
    updatedRequests[index].selected = !updatedRequests[index].selected;
    setRequests(updatedRequests);
  };

  const handleStatusChange = () => {
    const updatedRequests = requests.filter((request) => request.selected);

    updatedRequests.forEach((request) => {
      axios
        .get(
          `https://66980ca602f3150fb66fe5dc.mockapi.io/user/${request.userId}`
        )
        .then((res) => {
          const user = res.data;

          const updatedModifications = user.modification.map((mod) =>
            mod.id === request.id ? { ...mod, status: "done" } : mod
          );

          return axios.put(
            `https://66980ca602f3150fb66fe5dc.mockapi.io/user/${request.userId}`,
            {
              modification: updatedModifications,
            }
          );
        })
        .then(() => {
          console.log(`Status updated for request ${request.id}`);
          setRequests((prevRequests) =>
            prevRequests.map((req) =>
              req.id === request.id ? { ...req, status: "done" } : req
            )
          );
        })
        .catch((err) => {
          console.error(
            `Error updating status for request ${request.id}:`,
            err
          );
        });
    });
  };

  const handleDelete = (id) => {
    setTempId(id);
    document.getElementById("my_modal_1").showModal();
  };

  const confirmDelete = () => {
    const updatedRequests = requests.filter((request) => request.id !== tempId);
    setRequests(updatedRequests);
  };

  const handleShow = (id) => {
    const request = requests.find((req) => req.id === id);
    setSelectedRequest(request);
    document.getElementById("my_modal_1-details").showModal();
  };


  if (isLoading) {
    return <Loader />;
  }

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
              <th className="font-semibold text-left py-3 pl-3 pr-1 w-16 lg:w-14">
                {/* <input type="checkbox" name="" id="" /> */}
              </th>
              <th className="font-semibold text-left py-3 px-1 w-14 lg:w-44 truncate">
                ID
              </th>
              <th className="font-semibold text-left py-3 px-1 w-28 lg:w-36 max-w-xs xl:max-w-lg truncate">
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
              <th className="font-semibold text-left py-3 px-1 flex-1 truncate">
                Details
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
                      color={request.status === "done" ? "#7BFC2C" : "#FFFF1F"}
                    />
                  </div>
                </td>
                <td className="py-3 px-1 w-14 md:w-36">{request.id}</td>
                <td className="py-3 px-1  w-28 lg:w-44">
                  <div className="relative group ">
                    <p className=" truncate">{request.carName}</p>
                  </div>
                </td>
                <td className="py-3 px-1 flex-1 truncate">
                  {request.requester}
                </td>
                <td className="py-3 px-1 flex-1 truncate">{request.status}</td>
                <td className="py-3 px-1 flex-1 truncate">{request.date}</td>
                <td className="py-3 px-1 flex-1 truncate">
                  <button onClick={() => handleDelete(request.id)}>
                    <MdDeleteForever size={23} color="red" />
                  </button>
                </td>
                <td className="py-3  flex-1 truncate ">
                  <button className="w-10 lg:w-16 h-9 bg-blue-500 text-white rounded" 
                  onClick={() => handleShow(request.id)}>
                    Show
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

      <dialog id="my_modal_1-details" className="modal-details lg:w-[50%] rounded-xl bg-base-100">
        <div className="p-14">
             <h3 className="font-bold text-lg">Request Details</h3>
          {selectedRequest && (
            <div>
              <p className="py-4"><strong>Car Name:</strong> {selectedRequest.carName}</p>
              <p className="py-4"><strong>Requester:</strong> {selectedRequest.requester}</p>
              <p className="py-4"><strong>Status:</strong> {selectedRequest.status}</p>
            </div>
          )}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Warning</h3>
          <p className="py-4">Are you sure you want to delete this message?</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => confirmDelete()}
                className="btn btn-primary mr-2"
              >
                Delete
              </button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}
