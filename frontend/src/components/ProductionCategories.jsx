import React, { useState } from "react";

import mediaSmall from "../assets/img/media-small.png";
import mediaLarge from "../assets/img/media-large.png";

import AddProduction from "./AddProduction";

const productionCategories = () => {
  const [activeCategory, setActiveCategory] = useState("music");

  const handleTabClick = (e) => {
    setActiveCategory(e.target.dataset.category);
  }

  const renderCategory = () => {
    switch (activeCategory) {
      case "music":
        return (
          <div className="productionCategory productionMusic">
            <div className="container">
              <div className="productionGrid">
                <div className="productionItem">
                  <span className="font-bold">Aubi Gold</span>
                  <div className="productionItem__img">
                    <img src={mediaSmall} alt="" />
                  </div>
                </div>
                <div className="productionItem">
                  <span className="font-bold">Aubi Gold</span>
                  <div className="productionItem__img">
                    <img src={mediaLarge} alt="" />
                  </div>
                </div>
                <div className="productionItem">
                  <span className="font-bold">Aubi Gold</span>
                  <div className="productionItem__img">
                    <img src={mediaSmall} alt="" />
                  </div>
                </div>
                <div className="productionItem">
                  <span className="font-bold">Aubi Gold</span>
                  <div className="productionItem__img">
                    <img src={mediaSmall} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "video":
        return (
          <div className="productionCategory productionVideo">
            <div className="container">
              <div className="productionGrid">
                <div className="productionItem">
                  <span className="font-bold">Video</span>
                  <div className="productionItem__img">
                    <img src={mediaLarge} alt="" />
                  </div>
                </div>
                <div className="productionItem">
                  <span className="font-bold">Video</span>
                  <div className="productionItem__img">
                    <img src={mediaLarge} alt="" />
                  </div>
                </div>
                <div className="productionItem">
                  <span className="font-bold">Aubi Gold</span>
                  <div className="productionItem__img">
                    <img src={mediaSmall} alt="" />
                  </div>
                </div>
                <div className="productionItem">
                  <span className="font-bold">Aubi Gold</span>
                  <div className="productionItem__img">
                    <img src={mediaSmall} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <AddProduction></AddProduction>
        )
    }
  }

  return (
    <>
      <div className="productionTabs">
        <div className="container">
          <span className={"tab" + (activeCategory === "music" ? " active" : "")} data-category="music" onClick={handleTabClick}>Music</span>
          <span className={"tab" + (activeCategory === "video" ? " active" : "")} data-category="video" onClick={handleTabClick}>Video</span>
          <span className={"tab" + (activeCategory === "add" ? " active" : "")} data-category="add" onClick={handleTabClick}>Add Production</span>
        </div>
      </div>
      {
        renderCategory()
      }
    </>
  );
};

export default productionCategories;
