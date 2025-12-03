import React from "react";
import { Link } from "react-router";

const PopularGame = ({ game }) => {
  const { id, coverPhoto, title, ratings, developer } = game;
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3">
      <Link to={`/game-detail/${id}`}>
        <div className="bg-secondary py-10 px-5">
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
        </div>
      </Link>
    </div>
  );
};

export default PopularGame;
