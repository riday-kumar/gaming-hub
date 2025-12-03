import React from "react";

import { FaStar } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import PopularGame from "./PopularGame";
import { motion } from "framer-motion";

const PopularGames = ({ mostPopular }) => {
  return (
    <motion.div
      className=" w-5/6 mx-auto"
      initial={{ x: 1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 2.5, ease: "easeInOut" }}
    >
      <h1 className="mb-10 text-4xl md:text-5xl text-center font-extrabold text-white">
        Popular <span className="text-neutral">Games</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {mostPopular.map((game) => (
          <PopularGame game={game} key={game.id}></PopularGame>
        ))}
      </div>

      {/* try new */}
      {/* <div className="grid grid-cols-2">
        <div className="relative">
          <div className="border-8 rounded-md border-purple-700">
            <img src="https://i.ibb.co.com/1tQqsmCS/free-fire.jpg" alt="" />
          </div>
          <div className="bg-[#5768d9] text-white absolute -bottom-32 left-0 right-0 p-10 rounded-lg w-[90%] mx-auto grid grid-cols-2 justify-items-end">
            <div className="space-y-2">
              <p className="text-[25px] font-bold">Free Fire</p>
              <p className="text-[18px] font-bold">
                Developer <span className="text-neutral">Hridoy Saha</span>
              </p>
              <p className="text-[18px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
                dolore. <span className="text-yellow-300">Read More</span>{" "}
              </p>
              <p className="text-[16px]">⭐ (4.5)</p>
            </div>
            <div>
              <p className="text-[18px] mb-2">Download now at</p>
              <img src="https://i.ibb.co.com/twb2Qj0x/apple.png" alt="" />
              <img src="https://i.ibb.co.com/M52h2DDM/play-store.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default PopularGames;
