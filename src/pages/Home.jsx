import React, { Suspense } from "react";
import Banner from "../components/Banner";
import PopularGames from "../components/PopularGames";
import Newsletter from "../components/Newsletter";
import { useLoaderData } from "react-router";
import BannerSlider from "../components/BannerSlider";

const Home = () => {
  const allGames = useLoaderData();

  const mostPopular = allGames
    .filter((data) => data.ratings >= 4.8)
    .slice(0, 4);

  return (
    <div className="space-y-20">
      {/* <Banner></Banner> */}
      <BannerSlider className=""></BannerSlider>

      <PopularGames mostPopular={mostPopular}></PopularGames>

      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
