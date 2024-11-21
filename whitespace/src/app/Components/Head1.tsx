import React from "react";

const Head1 = () => {
  return (
    <div className="md:pt-[80px] md:pb-[80px] lg:pt-[80px] lg:pb-[80px] bg-[#043873] text-white p-6 md:flex md:items-center md:justify-between md:space-x-4">
      <div className="md:flex-1 md:space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl">
          Get More Done with whitespace
        </h1>
        <p className="mt-4 text-sm md:text-base">
          Improve your team’s workflow with our tools and analytics for managing
          your single tasks.
        </p>
        <button className="mt-4 bg-[#4F9CF9] text-white py-2 px-4 rounded-md">
          Try whitespace free -&gt;
        </button>
      </div>

      <div className="mt-6 md:mt-0 md:flex-1 bg-blue-300 w-full h-40 md:w-[500px] md:h-[250px]"></div>
    </div>
  );
};

export default Head1;
