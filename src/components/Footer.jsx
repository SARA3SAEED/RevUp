import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    {/* bg-neutral text-base-100 */}
      <footer className="bg-gray-50 text-neutral mt-auto  w-full text-center0 lg:text-left">
        <div className="bg-black/5 p-4 text-center text-surface ">
          © 2023 Copyright:
          <Link to="/" className="font-medium text-sm ">
            RevUp
          </Link>
        </div>
      </footer>
    </>
  );
}
