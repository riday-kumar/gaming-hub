import React from "react";
import wartank from "../../assets/wartank.jpg";
import { Link } from "react-router";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: -400 }}
      animate={{ y: 0 }}
      transition={{ duration: 6.5, ease: "easeOut" }}
      className=" pt-16 text-white  bg-[#000033]"
    >
      <div className="w-5/6 pb-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center max-lg:gap-10">
        <div>
          <div className="flex items-center gap-1">
            <img
              src="https://i.ibb.co.com/pj7K5wvN/hks-removebg-preview.png"
              className="w-28 h-22"
              alt=""
            />
            <p className="font-bold text-2xl">HKS</p>
          </div>
          <div className="space-y-5">
            <p className="text-justify">
              HKS is your ultimate online game library — discover, explore, and
              support amazing indie developers from around the world. Play
              smarter. Game better.
            </p>
            <div className="*:cursor-pointer flex max-lg:justify-center items-center gap-2 *:w-10  rounded-full">
              <img
                src="https://img.icons8.com/?size=100&id=uLWV5A9vXIPu&format=png&color=000000"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=114445&format=png&color=000000"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=19318&format=png&color=000000"
                alt=""
              />
              <img
                src="https://img.icons8.com/?size=100&id=5MQ0gPAYYx7a&format=png&color=000000"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <p className="font-bold text-2xl">Useful Links</p>
          <ul className="*:hover:text-neutral">
            <li>
              <Link>About Us</Link>
            </li>
            <li>
              <Link>Games</Link>
            </li>
            <li>
              <Link>Events</Link>
            </li>
            <li>
              <Link>Leaderboard</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl">Useful Links</p>
          <ul className="*:hover:text-neutral">
            <li>
              <Link>Support</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-2xl">Gallery</p>
          <div className="grid grid-cols-3 gap-4 pt-2">
            <img
              src="https://i.ibb.co.com/dJ5xhJfV/cyberpunk.jpg"
              alt="Cyberpunk"
              className="rounded-lg rounded-none w-10 h-10"
            />
            <img
              src="https://i.ibb.co.com/FbDG8vjT/fortnite.jpg"
              alt="Fortnite"
              className="rounded-lg rounded-none w-10 h-10"
            />
            <img
              src="https://i.ibb.co.com/1tQqsmCS/free-fire.jpg"
              alt="Free Fire"
              className="rounded-lg rounded-none w-10 h-10"
            />
            <img
              src="https://i.ibb.co.com/BV8y7HkN/genshin.webp"
              alt="Genshin Impact"
              className="rounded-lg rounded-none w-10 h-10"
            />
            <img
              src="https://i.ibb.co.com/ym58KtBG/godofwar.jpg"
              alt="God of War"
              className="rounded-lg rounded-none w-10 h-10"
            />
            <img
              src="https://i.ibb.co.com/B5fD30Fh/league.jpg"
              alt="League of Legends"
              className="rounded-lg rounded-none w-10 h-10"
            />
          </div>
        </div>
      </div>
      <div className=" py-3 text-white text-center">
        <p>© HKS - Game Hub 2025</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
