import React, { useState } from "react";

import mediaSmall from "../assets/img/media-small.png";
import mediaLarge from "../assets/img/media-large.png";

import AddStoreItem from "./AddStoreItem";

const productionCategories = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleTabClick = (e) => {
    setActiveCategory(e.target.dataset.category);
  }

  const renderCategory = () => {
    switch (activeCategory) {
      case "all":
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
      default:
        return (
          <AddStoreItem/>
        )
    }
  }

  return (
    <>
      <div className="productionTabs">
        <div className="container">
          <span className={"tab" + (activeCategory === "all" ? " active" : "")} data-category="all" onClick={handleTabClick}>All</span>
          <span className={"tab" + (activeCategory === "add" ? " active" : "")} data-category="add" onClick={handleTabClick}>Add Product</span>
        </div>
      </div>
      {
        renderCategory()
      }
    </>
  );
};

export default productionCategories;
