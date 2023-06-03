import React from "react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import overlayArrow from "../assets/img/overlay-arrow.svg";

const ProductionPreview = ({ music, video }) => {
  return (
    <>
      <h2 className="section-title preview-title">Production</h2>
      <div className="slider">
        <div className="slider-track">
          {music.map((item) => {
            return (
              <Link to={item.steamingLink} target="_blank" key={item._id}>
                <div className="slider-item">
                  <img src={item.image} alt="" />
                  <span className="tag">Music</span>
                  <span className="title">
                    {item.artist} - {item.title}
                  </span>
                  <div className="overlay">
                    <span className="overlay-btn">
                      View now
                      <img src={overlayArrow} alt="" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          {music.map((item) => {
            return (
              <Link to={item.steamingLink} target="_blank" key={item._id}>
                <div className="slider-item">
                  <img src={item.image} alt="" />
                  <span className="tag">Music</span>
                  <span className="title">
                    {item.artist} - {item.title}
                  </span>
                  <div className="overlay">
                    <span className="overlay-btn">
                      View now
                      <img src={overlayArrow} alt="" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="slider-track reversed">
          {video.map((item) => {
            return (
              <Link to={item.video} target="_blank" key={item._id}>
                <div className="slider-item">
                  <img src={item.thumbnail} alt="" />
                  <span className="tag">Video</span>
                  <span className="title">
                    {item.artist} - {item.title}
                  </span>
                  <div className="overlay">
                    <span className="overlay-btn">
                      View now
                      <img src={overlayArrow} alt="" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
          {video.map((item) => {
            return (
              <Link to={item.video} target="_blank" key={item._id}>
                <div className="slider-item">
                  <img src={item.thumbnail} alt="" />
                  <span className="tag">Video</span>
                  <span className="title">
                    {item.artist} - {item.title}
                  </span>
                  <div className="overlay">
                    <span className="overlay-btn">
                      View now
                      <img src={overlayArrow} alt="" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Link to="/production">
        <button className="btn btn-outline-dark btn-preview">
          Show productions
        </button>
      </Link>
    </>
  );
};

export default ProductionPreview;
