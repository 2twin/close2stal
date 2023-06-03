import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const SpotlightPreview = () => {
  return (
    <>
      <div className="spotlightPreview">
        <h2 className="section-title">Spotlight</h2>
        <Swiper
          direction={"vertical"}
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
          }}
          modules={[Navigation]}
          className="spotlightSwiper"
        >
          <SwiperSlide>
            <iframe
              src="https://www.youtube.com/embed/x60MPD__PhA?controls=0&autoplay=1"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
          <SwiperSlide>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/9AMWrXXmzGc?controls=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
          <div className="navigation">
            <button className="prev-slide"></button>
            <button className="next-slide"></button>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SpotlightPreview;
