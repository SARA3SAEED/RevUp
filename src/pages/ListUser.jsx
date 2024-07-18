import React, { useState, useEffect, Component } from "react";
import Sidebar from "../components/comAdmin/Sidebar";
import DashList from "../components/comAdmin/DashList";
import Nav from "../components/Nav";
import NavLog from "../components/NavLog";

export default function ListUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    if (userId) {
      setIsLoggedIn(true);
      setUserRole(role);
    } else {
      setIsLoggedIn(false);
      setUserRole("");
    }
  }, []);
  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html:
            '\n        html {\n            font-size: 14px;\n            line-height: 1.285;\n            font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",\n                Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial,\n                sans-serif;\n        }\n\n        html,\n        body {\n            width: 100%;\n            height: 100%;\n        }\n\n        /* can be configured in tailwind.config.js */\n        .group:hover .group-hover\\:block {\n            display: block;\n        }\n\n        .focus\\:cursor-text:focus {\n            cursor: text;\n        }\n\n        .focus\\:w-64:focus {\n            width: 16rem;\n        }\n\n        /* zendesk styles */\n        .h-16 {\n            height: 50px;\n        }\n\n        .bg-teal-900 {\n            background: #03363d;\n        }\n\n        .bg-gray-100 {\n            background: #f8f9f9;\n        }\n\n        .hover\\:border-green-500:hover {\n            border-color: #78a300;\n        }\n    ',
        }}
      />
{isLoggedIn ? <NavLog role={userRole} /> : <Nav />}
      <div className="h-full w-full flex  overflow-hidden antialiased text-gray-800 bg-white">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          {/* section body header */}
          <header
            aria-label="page caption"
            className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
          >
            <h1 id="page-caption" className="font-semibold text-lg">
              Dashboard
            </h1>
          </header>

          {/* main content */}
          <main className="flex-grow flex min-h-0 border-t">
            <section
              aria-label="main content"
              className="flex min-h-0 flex-col flex-auto border-l"
            >
              <DashList />
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
