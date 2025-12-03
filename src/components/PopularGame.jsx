import React from "react";
import { Link } from "react-router";

const PopularGame = ({ game }) => {
  const { id, coverPhoto, title, ratings, developer, description } = game;
  const shortText = description.split(" ", 8).join(" ");
  return (
    // <div className="col-span-12 md:col-span-6 lg:col-span-3">
    <div className="mb-50">
      <Link to={`/game-detail/${id}`}>
        {/* <div className="bg-secondary py-10 px-5">
          <img
            className="mx-auto w-60 h-[250px] rounded-lg"
            src={coverPhoto}
            alt=""
          />
        </div>
        <div className="card-ft pt-9 px-5 text-center text-white">
          <p className="text-[20px] font-bold uppercase">{title}</p>
          <p className="font-medium">⭐ {ratings}</p>
          <p className="text-[20px] font-bold">
            Developer <span className="text-neutral">{developer}</span>
          </p>
        </div> */}

        <div className="relative">
          <div className="border-8 rounded-md border-purple-700">
            <img className="h-96 w-full" src={coverPhoto} alt="" />
          </div>
          <div className="bg-[#5768d9] text-white absolute -bottom-32 left-0 right-0 p-10 rounded-lg w-[90%] mx-auto grid xl:grid-cols-2 justify-items-center xl:justify-items-end">
            <div className="space-y-2">
              <p className="text-[25px] font-bold">{title}</p>

              <p className="text-[18px] text-justify">
                {shortText}
                <span className="pl-1 text-yellow-300">Read More</span>
              </p>
              <p className="text-[16px]">⭐ ({ratings})</p>
            </div>
            <div>
              <p className="text-[18px] mb-2">Download now at</p>
              <img src="https://i.ibb.co.com/twb2Qj0x/apple.png" alt="" />
              <img src="https://i.ibb.co.com/M52h2DDM/play-store.png" alt="" />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PopularGame;
