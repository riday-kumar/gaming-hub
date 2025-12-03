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
      <div className="grid grid-cols-12 gap-5 md:gap-10">
        {mostPopular.map((game) => (
          <PopularGame game={game} key={game.id}></PopularGame>
        ))}
      </div>
    </motion.div>
  );
};

export default PopularGames;
