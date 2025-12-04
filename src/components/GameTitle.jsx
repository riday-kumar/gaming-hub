import React from "react";
import bg from "../assets/detailBg.jpg";
const GameTitle = ({ heading, coverPhoto }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" py-20 text-white  md:py-32  bg-blend-overlay bg-[#15397284]"
    >
      <div className="w-5/6 mx-auto">
        <h1 className="animate-bounce uppercase text-5xl md:text-6x font-bold text-center lg:text-left  bg-linear-to-r from-orange-500 via-red-500 to-purple-700 bg-clip-text text-transparent">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default GameTitle;
