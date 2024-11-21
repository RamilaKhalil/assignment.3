import Image from "next/image";
import React from "react";
import logo from "@/app/Asset/Logo.png";

const Nav = () => {
  return (
    <div className="w-full h-full py-4 px-4  bg-[#043873] flex justify-between items-center">
      <div className="w-[150px] h-[30px] md:w-[191px] md:h-[34px] ">
        <Image src={logo} alt="logo-image" />
      </div>

      {/* Toggle button for mobile screens */}
      <div className=" md:hidden flex items-center space-x-2 text-white">
        <button className="p-2">
          {/* Simple hamburger icon for toggle */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      <div
        className="hidden lg:flex lg:items-center lg:space-x-10 
      md:flex md:items-center md:space-x-10"
      >
        <ul
          className="hidden lg:flex lg:space-x-6  lg:font-semibold lg:text-[#fff] 
        md:flex md:space-x-6  md:text-[#fff]  md:ml-6 md:mr-9"
        >
          <li>Products</li>
          <li>Solutions</li>
          <li>Resources</li>
          <li>Pricing</li>
        </ul>
      </div>
      <div className="hidden md:flex md:items-center ">
        <button className=" md:ml-9 px-6 py-2  rounded-lg text-[#043873] bg-[#FFE492] lg:mr-3">
          Login
        </button>
      </div>
    </div>
  );
};

export default Nav;
