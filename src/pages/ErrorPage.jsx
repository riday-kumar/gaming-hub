import Lottie from "lottie-react";
import React from "react";
import cat from "../assets/404_cat.json";
import Navbar from "../components/HomeLayout/Navbar";
import Footer from "../components/HomeLayout/Footer";
const ErrorPage = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center items-center bg-primary">
        <Lottie animationData={cat}></Lottie>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
