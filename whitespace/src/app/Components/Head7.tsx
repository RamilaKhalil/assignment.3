import React from "react";

const Head7 = () => {
  return (
    <div className="bg-white text-center p-10">
      <h2 className="text-4xl font-bold mb-8 pb-8">Our Sponsors</h2>

      <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
        <div className="flex items-center justify-center">
          <img src="/Apple.png" alt="Apple" className="h-5" />
        </div>

        <div className="flex items-center justify-center">
          <img src="/Microsoft.png" alt="Microsoft" className="h-5" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/Slack.png" alt="Slack" className="h-5" />
        </div>

        <div className="flex items-center justify-center">
          <img src="/Google.png" alt="Google" className="h-5" />
        </div>
      </div>
    </div>
  );
};

export default Head7;
