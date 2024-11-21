import React from "react";
const Head6 = () => {
  return (
    <div className="md:pt-[80px] md:pb-[80px] lg:pt-[80px] lg:pb-[80px] bg-[#043873] text-white p-6 md:flex md:flex-col md:items-center md:justify-center md:space-x-4">
      <div className="md:flex md:flex-col md:items-center md:space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl">
          {" "}
          Your work, everywhere you are
        </h1>
        <p className="mt-4 text-sm md:text-base md:text-center">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitepace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <button className="mt-4 bg-[#4F9CF9] text-white py-2 px-4 rounded-md">
          Try Taskey -&gt;
        </button>
      </div>
    </div>
  );
};

export default Head6;
