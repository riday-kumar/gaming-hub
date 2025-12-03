import React from "react";

const PageHeading = ({ heading }) => {
  return (
    <div className="section-bg py-20 text-white  md:py-32  bg-blend-overlay bg-[#15397284]">
      <h1 className="text-5xl md:text-6xl font-bold text-center">{heading}</h1>
    </div>
  );
};

export default PageHeading;
