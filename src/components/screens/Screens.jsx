// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./screens.css";

// import required modules
import { Pagination } from "swiper";

import screen1 from "../../assets/screen1.png";
import screen2 from "../../assets/screen2.png";
import screen3 from "../../assets/screen3.png";
// import screen4 from "../assets/screen4.png";

export default function Screens() {
  return (
    <>
      <div className="title screens-title">Checkout our app interface look</div>
      <div className="text screens-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
        ante velit vitae.
      </div>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="screens-images">
            {/* <img src={screen1} alt="screenshot 1" /> */}
            <img src={screen2} alt="screenshot 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="screens-images">
            <img src={screen2} alt="screenshot 2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="screens-images">
            {/* <img src={screen3} alt="screenshot 3" /> */}
            <img src={screen2} alt="screenshot 2" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
