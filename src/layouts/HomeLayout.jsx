import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/HomeLayout/Navbar";
import Footer from "../components/HomeLayout/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-purple-900">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
