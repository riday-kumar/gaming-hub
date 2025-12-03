import React, { useContext } from "react";
import GameTitle from "../components/GameTitle";
import soldier from "../assets/soldier.jpg";
import { FaFacebookF, FaSquareShareNodes, FaTag } from "react-icons/fa6";
import { FaArrowLeft, FaClock, FaLaptop, FaYoutube } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";
import { CiTwitter } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";
import { Link, Navigate, useLoaderData, useParams } from "react-router";

const GameDetails = () => {
  const { id } = useParams();
  const allGames = useLoaderData();

  const findGame = allGames.find((game) => game.id == id);
  const {
    title,
    category,
    releaseDate,
    developer,
    platforms,
    ratings,
    downloadLink,
    description,
    coverPhoto,
  } = findGame;

  return (
    <div>
      <title>{`HKS | ${title} `}</title>
      <GameTitle heading={title} coverPhoto={coverPhoto}></GameTitle>
      <div className="my-20 w-5/6 mx-auto grid grid-cols-6 gap-10">
        <div className="col-span-6 lg:col-span-3 xl:col-span-4">
          <img
            className="rounded-t-md w-full h-[500px]"
            src={coverPhoto}
            alt=""
          />
          <div className="bg-white p-10 ">
            <h2 className="text-[30px] text-primary uppercase  mb-5  font-extrabold">
              About <span className="text-neutral">{title}</span>
            </h2>
            <p className="text-justify">{description}</p>
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/our-game" replace="" className="btn btn-lg btn-neutral">
              <FaArrowLeft /> All The Games
            </Link>
          </div>
        </div>
        <aside className="w-full col-span-6 lg:col-span-3 xl:col-span-2 mx-auto">
          <div className="bg-white rounded-md p-10 space-y-5">
            <h2 className="text-[30px] text-primary font-extrabold text-center">
              GAME <span className="text-neutral">DETAILS</span>
            </h2>
            <div className="space-y-3">
              <div className="flex items-center max-md:flex-wrap gap-2 font-bold">
                <FaTag className="text-neutral" />{" "}
                <p className="font-bold text-[18px] text-[#555]">Genre :</p>
                <span className=" ml-3">{category}</span>
              </div>
              <div className="flex items-center max-md:flex-wrap gap-2 font-bold">
                <FaClock className="text-neutral" />{" "}
                <p className="font-bold text-[18px] text-[#555]">
                  Release Date :{" "}
                </p>
                <span className=" ml-3">{releaseDate}</span>
              </div>
              <div className="flex items-center max-md:flex-wrap gap-2 font-bold">
                <MdEngineering className="text-neutral" />{" "}
                <p className="font-bold text-[18px] text-[#555]">Developer :</p>
                <span className=" ml-3">{developer}</span>
              </div>
              <div className="flex items-center max-md:flex-wrap gap-2 font-bold">
                <FaLaptop className="text-neutral" />{" "}
                <p className="font-bold text-[18px] text-[#555]">
                  Platforms :{" "}
                </p>
                {platforms.map((d, index) => (
                  <span key={index} className=" ml-3">
                    {d + ","}
                  </span>
                ))}
              </div>
              <div className="flex items-center max-md:flex-wrap gap-2 font-bold">
                <FaSquareShareNodes className="text-neutral" />{" "}
                <p className="font-bold text-[18px] text-[#555]">Sites : </p>
                <span className=" flex items-center gap-3 text-[18px] ml-3">
                  <a href="">
                    <FaFacebookF />
                  </a>
                  <a href="">
                    <CiTwitter />
                  </a>
                  <a href="">
                    <FaYoutube />
                  </a>
                </span>
              </div>
              <div className="flex items-center max-md:flex-wrap gap-2 font-bold">
                <IoIosStar className="text-neutral" />{" "}
                <p className="font-bold text-[18px] text-[#555]">Rating : </p>
                <span className=" ml-3 ">{ratings}</span>
              </div>
            </div>
            <div>
              <Link
                to={downloadLink}
                target="_blank"
                className="btn btn-neutral w-full text-white"
              >
                Download
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default GameDetails;
