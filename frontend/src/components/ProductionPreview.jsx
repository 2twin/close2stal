import React from "react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import media1 from "../assets/img/Media-1.png";
import media2 from "../assets/img/Media-2.png";
import media3 from "../assets/img/Media-3.png";
import media4 from "../assets/img/Media-4.png";
import media5 from "../assets/img/Media-5.png";
import media6 from "../assets/img/Media-6.png";
import media7 from "../assets/img/Media-7.png";
import media8 from "../assets/img/Media-8.png";
import media9 from "../assets/img/Media-9.png";
import media10 from "../assets/img/Media-10.png";
import media11 from "../assets/img/Media-11.png";
import media12 from "../assets/img/Media-12.png";
import media13 from "../assets/img/Media-13.png";
import media14 from "../assets/img/Media-13.png";
import { NavLink } from "react-router-dom";

const mediaArray = [
  media1,
  media2,
  media3,
  media4,
  media5,
  media6,
  media7,
  media8,
  media9,
  media10,
  media11,
  media12,
  media13,
  media14,
];

const ProductionPreview = () => {
  return (
    <>
      <div className="slider">
        <div className="slider-track">
          {mediaArray.map((item, idx) => {
            if (idx < 7) {
              return (
                <NavLink to="/production" key={idx}>
                  <div className="slider-item">
                    <img src={item} alt="" />
                    <span className="tag">Music</span>
                    <span className="title">Lorem Ipsum</span>
                  </div>
                </NavLink>
              );
            }
          })}
          {mediaArray.map((item, idx) => {
            if (idx < 7) {
              return (
                <NavLink to="/production" key={idx}>
                  <div className="slider-item" key={idx}>
                    <img src={item} alt="" />
                    <span className="tag">Music</span>
                    <span className="title">Lorem Ipsum</span>
                  </div>
                </NavLink>
              );
            }
          })}
        </div>
        <div className="slider-track reversed">
          {mediaArray.map((item, idx) => {
            if (idx >= 7) {
              return (
                <NavLink to="/production" key={idx}>
                  <div className="slider-item" key={idx}>
                    <img src={item} alt="" />
                    <span className="tag">Music</span>
                    <span className="title">Lorem Ipsum</span>
                  </div>
                </NavLink>
              );
            }
          })}
          {mediaArray.map((item, idx) => {
            if (idx >= 7) {
              return (
                <NavLink to="/production" key={idx}>
                  <div className="slider-item" key={idx}>
                    <img src={item} alt="" />
                    <span className="tag">Music</span>
                    <span className="title">Lorem Ipsum</span>
                  </div>
                </NavLink>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default ProductionPreview;
