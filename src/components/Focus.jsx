import React from "react";
import subscribe from "../assets/subscribe.png";
const Focus = () => {
  return (
    <div className="w-5/6 mx-auto flex max-lg:flex-col gap-10 justify-between items-center">
      <div className="text-white lg:w-[50%] space-y-10">
        <h3 className="text-4xl font-bold">
          We Focus On Quality Entertainment
        </h3>
        <p className="text-[18px] text-justify">
          Our main focus is to provide the best entertainment possible for our
          players. We place key emphasis on creating games that are of a high
          quality in every way possible. This means that we ensure that all our
          games themes are engaging, our features unique and captivating and our
          art, stunning and precise! We don’t cut corners and do whatever is
          necessary to offer a memorable gameplay experience.
        </p>
      </div>
      <div>
        <img src={subscribe} alt="" />
      </div>
    </div>
  );
};

export default Focus;
