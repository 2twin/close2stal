import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Navigation } from "swiper";

const SpotlightPreview = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        navigation={{
          nextEl: ".next-slide",
          prevEl: ".prev-slide"
        }}
        modules={[Navigation]}
        className="spotlightSwiper"
      >
        <SwiperSlide>
          <iframe
            src="https://www.youtube.com/embed/x60MPD__PhA?controls=0&autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <div className="navigation">
          <button className="prev-slide"></button>
          <button className="next-slide"></button>
        </div>
      </Swiper>
    </>
  );
};

export default SpotlightPreview;
