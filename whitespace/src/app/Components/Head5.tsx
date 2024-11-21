import React from "react";

const Head5 = () => {
  return (
    <div className="bg-[#ffff] md:pt-[80px] md:pb-[80px] lg:pt-[80px] lg:pb-[80px] text-[#212529] p-6 md:flex md:items-center md:justify-between md:space-x-4">
      <div className="mt-6 md:mt-0 md:flex-1 bg-blue-300 w-full h-40 md:w-[500px] md:h-[250px]"></div>

      <div className="md:flex-1 md:space-y-4">
        <h1 className="text-3xl font-bold md:text-4xl">
          {" "}
          Customise it to
          <br /> your needs
        </h1>
        <p className="mt-4 text-sm md:text-base">
          Customise the app with plugins, custom themes, and multiple text
          editors (Rich Text or Markdown). Or create your own scripts and
          plugins using the Extension API.
        </p>
        <button className="mt-4 bg-[#4F9CF9] text-white py-2 px-4 rounded-md">
          Get Started -&gt;
        </button>
      </div>
    </div>
  );
};

export default Head5;
