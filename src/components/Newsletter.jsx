import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      transition={{ duration: 5, ease: "easeOut" }}
      className="bg-secondary py-20 md:py-[150px] flex justify-center items-center"
    >
      <div>
        <p className="mb-10 text-center text-4xl md:text-5xl font-bold text-white">
          Sign Up For Our Newsletter
        </p>
        <div className="flex max-md:gap-5 max-md:flex-col items-center">
          <input
            className="border-2 md:border-r-0 p-5 border-white text-white h-10 w-[80%] md:w-[90%]"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            id=""
          />
          <button className="border-2 btn h-10 p-5 md:rounded-l-none md:border-l-0 border-neutral bg-neutral text-white">
            Subscribe Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Newsletter;
