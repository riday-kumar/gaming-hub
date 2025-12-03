import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/HomeLayout/Navbar";
import Footer from "../components/HomeLayout/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-primary">
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
