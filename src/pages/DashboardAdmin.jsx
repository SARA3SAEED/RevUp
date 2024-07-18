// import React, { useState, useEffect } from "react";
// import Sidebar from "../components/comAdmin/Sidebar";
// import DashStatus from "../components/comAdmin/DashStatus";
// import Nav from "../components/Nav";
// import NavLog from "../components/NavLog";

// export default function DashboardAdmin() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userRole, setUserRole] = useState("");

//   useEffect(() => {
//     const userId = localStorage.getItem("user");
//     const role = localStorage.getItem("role");
//     if (userId) {
//       setIsLoggedIn(true);
//       setUserRole(role);
//     } else {
//       setIsLoggedIn(false);
//       setUserRole("");
//     }
//   }, []);

//   return (
//     <>
//       <style
//         dangerouslySetInnerHTML={{
//           __html: `
//             html {
//               font-size: 14px;
//               line-height: 1.285;
//               font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
//                 Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial,
//                 sans-serif;
//             }
//             html, body {
//               width: 100%;
//               height: 100%;
//             }
//             .group:hover .group-hover\\:block {
//               display: block;
//             }
//             .focus\\:cursor-text:focus {
//               cursor: text;
//             }
//             .focus\\:w-64:focus {
//               width: 16rem;
//             }
//             .h-16 {
//               height: 50px;
//             }
//             .bg-teal-900 {
//               background: #03363d;
//             }
//             .bg-gray-100 {
//               background: #f8f9f9;
//             }
//             .hover\\:border-green-500:hover {
//               border-color: #78a300;
//             }
//           `,
//         }}
//       />
//       {isLoggedIn ? <NavLog role={userRole} /> : <Nav />}
//       <div className="h-full w-full flex overflow-hidden antialiased text-gray-800 bg-white">
//         <Sidebar />
//         <div className="flex-1 flex flex-col">
//           {/* section body header */}
//           <header
//             aria-label="page caption"
//             className="flex-none flex h-16 bg-gray-100 border-t px-4 items-center"
//           >
//             <h1 id="page-caption" className="font-semibold text-lg">
//               Dashboard
//             </h1>
//           </header>

//           {/* main content */}
//           <main className="flex-grow flex min-h-0 border-t">
//             <section
//               aria-label="main content"
//               className="flex min-h-0 flex-col flex-auto border-l"
//             >
//               <DashStatus />
//             </section>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }
