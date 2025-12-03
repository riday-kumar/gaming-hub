import React from "react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import sli1 from "../assets/banner-1.jpg";
import sli2 from "../assets/banner-4.jpg";
import sli4 from "../assets/banner-5.jpg";
import SliderText from "./SliderText";
// import sli4 from "../assets/sli4.jpg";
// import sli5 from "../assets/detailThree.webp";
const BannerSlider = () => {
  return (
    <div className="w-5/6 mx-auto *:rounded-lg my-10 ">
      <Swiper
        className=""
        modules={[Pagination, Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        // navigation
        loop={true}
        autoplay={{ delay: 2000 }}
        effect="fade"
      >
        <SwiperSlide>
          <SliderText
            img={sli1}
            heading={<>Discover & Collect the Best Gaming</>}
            paragraph={`Explore top-rated titles, new releases, and hidden gems.Build your ultimate collection and level up your experience.`}
          ></SliderText>
        </SwiperSlide>
        <SwiperSlide>
          <SliderText
            img={sli2}
            heading={<>Best Game Playing Today</>}
            paragraph={`Jump into the hottest games players are talking about right now.Play, compete, and enjoy the thrill of today’s top hits.`}
          ></SliderText>
        </SwiperSlide>
        <SwiperSlide>
          <SliderText
            img={sli4}
            heading={<>Enjoy Every Game In Virtual</>}
            paragraph={`Step into immersive worlds crafted for true gamers.Every moment feels real, every adventure unforgettable.`}
          ></SliderText>
        </SwiperSlide>
        {/* <SwiperSlide>
          <SliderText
            img={sli5}
            heading={
              <>
                Planting Today For <br /> Tomorrow’s Harvest
              </>
            }
            paragraph={`We cultivate every crop responsibly — for a greener planet and
              healthier generations ahead.`}
          ></SliderText>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
