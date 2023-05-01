import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode } from "swiper";

const ProductionPreview = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        freeMode={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
          waitForTransition: false
        }}
        modules={[FreeMode, Autoplay]}
        className="productionSwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </>
  );
}

export default ProductionPreview