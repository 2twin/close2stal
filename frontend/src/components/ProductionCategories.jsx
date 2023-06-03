import React, { useState } from "react";

import overlayArrow from "../assets/img/overlay-arrow.svg";

import AddProduction from "./AddProduction";
import { Link } from "react-router-dom";

const productionCategories = ({ music, video, isLogged }) => {
  const [activeCategory, setActiveCategory] = useState("music");

  const handleTabClick = (e) => {
    setActiveCategory(e.target.dataset.category);
  };

  const renderCategory = () => {
    switch (activeCategory) {
      case "music":
        return (
          <div className="productionCategory productionMusic">
            <div className="container">
              <div className="productionGrid">
                {music.map((item) => (
                  <Link to={item.streamingLink} target="_blank" key={item._id}>
                    <div className="productionItem">
                      <span className="font-bold">
                        {item.artist} - {item.title}
                      </span>
                      <div className="productionItem__img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="overlay">
                        <span className="overlay-btn">
                          Play now
                          <img src={overlayArrow} alt="" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      case "video":
        return (
          <div className="productionCategory productionVideo">
            <div className="container">
              <div className="productionGrid">
                {video.map((item) => (
                  <Link to={item.video} target="_blank" key={item._id}>
                    <div className="productionItem">
                      <span className="font-bold">{item.artist} - {item.title}</span>
                      <div className="productionItem__img">
                        <img src={item.thumbnail} alt="" />
                      </div>
                      <div className="overlay">
                        <span className="overlay-btn">
                          View now
                          <img src={overlayArrow} alt="" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return <AddProduction/>;
    }
  };

  return (
    <>
      <div className="productionTabs">
        <div className="container">
          <span
            className={"tab" + (activeCategory === "music" ? " active" : "")}
            data-category="music"
            onClick={handleTabClick}
          >
            Music
          </span>
          <span
            className={"tab" + (activeCategory === "video" ? " active" : "")}
            data-category="video"
            onClick={handleTabClick}
          >
            Video
          </span>
          {isLogged && (
            <span
              className={"tab" + (activeCategory === "add" ? " active" : "")}
              data-category="add"
              onClick={handleTabClick}
            >
              Add Production
            </span>
          )}
        </div>
      </div>
      {renderCategory()}
    </>
  );
};

export default productionCategories;
