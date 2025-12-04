import React from "react";
import blogOne from "../assets/blogOne.jpg";
import blogTwo from "../assets/blogTwo.jpg";
import blogThree from "../assets/blogThree.jpg";
import { SlCalender } from "react-icons/sl";

const Blog = () => {
  return (
    <div className="w-5/6 mx-auto">
      <h1 className="uppercase text-4xl text-white font-bold mb-10">
        Latest News & Blog
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="bg-[#785ce7] p-10 space-y-3 rounded-md [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
          <img src={blogOne} alt="" />
          <div className="flex gap-3 items-center text-cyan-400 font-semibold">
            <SlCalender />
            <p>3 DEC 25</p>
          </div>
          <hr className="text-gray-400" />
          <h2 className="text-3xl text-white font-semibold">
            Next-Gen Battle Royale Arrives Worldwide
          </h2>
          <p className="text-xl text-white/70 text-justify">
            The new BR update drops massive maps, smarter AI opponents, and
            insane weapon balancing to push competitive gameplay to the next
            level.
          </p>
          <p className="cursor-pointer text-yellow-400">Read More</p>
        </div>
        <div className="bg-[#785ce7] p-10 space-y-3 rounded-md [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
          <img src={blogTwo} alt="" />
          <div className="flex gap-3 items-center text-cyan-400 font-semibold">
            <SlCalender />
            <p>3 DEC 25</p>
          </div>
          <hr className="text-gray-400" />
          <h2 className="text-3xl text-white font-semibold">
            Top 10 Gaming Gear Picks for 2025
          </h2>
          <p className="text-xl text-white/70 text-justify">
            Discover the best keyboards, mice, and headsets trusted by pros to
            boost performance and dominate the battlefield.
          </p>
          <p className="cursor-pointer text-yellow-400">Read More</p>
        </div>
        <div className="bg-[#785ce7] p-10 space-y-3 rounded-md [clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]">
          <img src={blogThree} alt="" />
          <div className="flex gap-3 items-center text-cyan-400 font-semibold">
            <SlCalender />
            <p>3 DEC 25</p>
          </div>
          <hr className="text-gray-400" />
          <h2 className="text-3xl text-white font-semibold">
            AI-Powered NPCs Change the Way You Play
          </h2>
          <p className="text-xl text-white/70 text-justify">
            Developers introduce advanced behavior systems allowing enemies to
            learn, adapt, and fight smarter than ever before.
          </p>
          <p className="cursor-pointer text-yellow-400">Read More</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
