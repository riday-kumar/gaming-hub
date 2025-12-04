import React, { useContext, useEffect, useState } from "react";
import PageHeading from "../components/PageHeading";
import trending from "../assets/tranding.jpg";
import Newsletter from "../components/Newsletter";
import { Link, useLoaderData } from "react-router";

const OurGame = () => {
  const allGames = useLoaderData();
  const [games, setGames] = useState([]);

  useEffect(() => {
    setGames(allGames);
  }, [allGames]);

  const handleSort = (e) => {
    const sortType = e.target.value;

    const sorted = [...games].sort((a, b) => {
      if (sortType === "asc") {
        return a.title.localeCompare(b.title); // A → Z
      }
      if (sortType === "desc") {
        return b.title.localeCompare(a.title); // Z → A
      }
      return 0;
    });

    setGames(sorted);
  };

  return (
    <div className="space-y-20">
      <PageHeading heading={"Our Game"}></PageHeading>
      <div className="w-5/6 mx-auto">
        <select
          defaultValue="Sort My Interests"
          className="select appearance-none"
          onChange={handleSort}
        >
          <option disabled={true}>Sort By Game Title</option>
          <option value="asc">Sort by Title (A-Z)</option>
          <option value="dec">Sort by Title (Z-A)</option>
        </select>
      </div>
      <div className="w-11/12 md:w-5/6 mx-auto grid grid-cols-12 md:gap-10">
        {games.map((game) => (
          <div
            key={game.id}
            className="max-md:mb-10 relative rounded-2xl bg-accent col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 text-white"
          >
            <Link to={`/game-detail/${game.id}`}>
              <img className="w-full h-[400px]" src={game.coverPhoto} alt="" />
              <span className="absolute top-5 left-5  bg-neutral px-2 py-0.5 rounded-md font-bold">
                {game.deviceType}
              </span>
              <div className="py-8 px-5 space-y-5">
                <h2 className="text-center font-bold text-2xl uppercase">
                  {game.title}
                </h2>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 bg-primary font-bold  px-4 py-1 rounded-md">
                    <img
                      className="h-5 w-5"
                      src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                      alt=""
                    />{" "}
                    <span>4.8</span>
                  </div>
                  <p className="bg-neutral px-2 py-0.5 rounded-md font-bold">
                    {game.price}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
        {/* <div className=" relative rounded-lg bg-accent col-span-12 md:col-span-6 lg:col-span-3 text-white">
          <img className="w-full" src={trending} alt="" />
          <span className="absolute top-5 left-5  bg-neutral px-2 py-0.5 rounded-md font-bold">
            Mobile
          </span>
          <div className="py-8 px-5 space-y-5">
            <h2 className="text-center font-bold text-2xl uppercase">
              PubG Ultimate Cup
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 bg-primary font-bold  px-4 py-1 rounded-md">
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                  alt=""
                />{" "}
                <span>4.8</span>
              </div>
              <p className="bg-neutral px-2 py-0.5 rounded-md font-bold">
                Free
              </p>
            </div>
          </div>
        </div>
        <div className=" relative rounded-lg bg-accent col-span-12 md:col-span-6 lg:col-span-3 text-white">
          <img className="w-full" src={trending} alt="" />
          <span className="absolute top-5 left-5  bg-neutral px-2 py-0.5 rounded-md font-bold">
            Mobile
          </span>
          <div className="py-8 px-5 space-y-5">
            <h2 className="text-center font-bold text-2xl uppercase">
              PubG Ultimate Cup
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 bg-primary font-bold  px-4 py-1 rounded-md">
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                  alt=""
                />{" "}
                <span>4.8</span>
              </div>
              <p className="bg-neutral px-2 py-0.5 rounded-md font-bold">
                Free
              </p>
            </div>
          </div>
        </div>
        <div className=" relative rounded-lg bg-accent col-span-12 md:col-span-6 lg:col-span-3 text-white">
          <img className="w-full" src={trending} alt="" />
          <span className="absolute top-5 left-5  bg-neutral px-2 py-0.5 rounded-md font-bold">
            Mobile
          </span>
          <div className="py-8 px-5 space-y-5">
            <h2 className="text-center font-bold text-2xl uppercase">
              PubG Ultimate Cup
            </h2>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2 bg-primary font-bold  px-4 py-1 rounded-md">
                <img
                  className="h-5 w-5"
                  src="https://img.icons8.com/?size=100&id=8ggStxqyboK5&format=png&color=000000"
                  alt=""
                />{" "}
                <span>4.8</span>
              </div>
              <p className="bg-neutral px-2 py-0.5 rounded-md font-bold">
                Free
              </p>
            </div>
          </div>
        </div> */}
      </div>
      <Newsletter></Newsletter>
    </div>
  );
};

export default OurGame;
