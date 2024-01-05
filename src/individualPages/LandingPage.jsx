import React from "react";
import LandingPageHeader from "../assets/landingPageHeader.jpeg";

const LandingPage = () => {
  return (
    <div className="w-full">
      <img
        src={LandingPageHeader}
        alt="landingPageHeader"
        className="w-full h-1/3"
      />
      <div className="absolute top-40 left-20 w-5/12 h-4/6 bg-pink-500 rounded-tl-[90px] rounded-br-[90px] opacity-90">
      <p className="text-white font-bold text-center">Empowering Your Financial Freedom</p>
      </div>
    </div>
  );
};

export default LandingPage;
