import React from "react";

const SliderText = ({ img, heading, paragraph }) => {
  return (
    <div
      className={`slider-full-container text-center bg-center bg-blue-500 bg-blend-overlay bg-no-repeat`}
      style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}
    >
      <h1 className="pre-head slider-head">{heading}</h1>

      <p className="font-setisfa text-3xl">{paragraph}</p>
    </div>
  );
};

export default SliderText;
