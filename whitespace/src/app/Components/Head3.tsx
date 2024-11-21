import React from "react";
import Image from "next/image";
import circle from "@/app/Asset/circle.png";

const Head3 = () => {
  return (
    <div className="w-full  px-6 sm:px-10 md:px-28 md:flex">
      <div className="w-[220px]  md:w-[500px] ">
        <Image src={circle} alt="circle.png" />
      </div>

      <div className="w-full sm:w-[500px] md:w-[600px] ml-2 md:ml-20 ">
        <h2 className="mt-4 font-bold text-[36px] sm:text-[40px] md:text-[48px] leading-[1.2] tracking-[-0.02em] text-[#212529]">
          Work together
        </h2>
        <p className="mt-4 font-normal text-base sm:text-lg md:text-lg leading-[1.6] text-[#212529]">
          With Whitepace, share your notes with your colleagues and collaborate
          on them. You can also publish a note to the internet and share the URL
          with others.
        </p>
        <div className="mt-8 mb-8">
          <button className="rounded-md px-4 sm:px-6 md:px-6 py-3 bg-[#4F9CF9] text-white">
            Try it now -&gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Head3;
