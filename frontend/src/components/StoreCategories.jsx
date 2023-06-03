import React, { useState } from "react";

import overlayArrow from "../assets/img/overlay-arrow.svg";

import AddStoreItem from "./AddStoreItem";

const storeCategories = ({ isLogged, store }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleTabClick = (e) => {
    setActiveCategory(e.target.dataset.category);
  };

  const renderCategory = () => {
    switch (activeCategory) {
      case "all":
        return (
          <div className="productionCategory productionMusic">
            <div className="container">
              <div className="productionGrid">
                {store.map((item) => (
                  <div className="productionItem" key={item._id}>
                    <span className="font-bold">{item.title}</span>
                    <div className="productionItem__img">
                      <img src={item.images[0]} alt="" />
                    </div>
                    <div className="overlay">
                      <span className="overlay-btn">
                        Buy now
                        <img src={overlayArrow} alt="" />
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return <AddStoreItem />;
    }
  };

  return (
    <>
      <div className="productionTabs">
        <div className="container">
          <span
            className={"tab" + (activeCategory === "all" ? " active" : "")}
            data-category="all"
            onClick={handleTabClick}
          >
            Merch
          </span>
          {isLogged && (
            <span
              className={"tab" + (activeCategory === "add" ? " active" : "")}
              data-category="add"
              onClick={handleTabClick}
            >
              Add Product
            </span>
          )}
        </div>
      </div>
      {renderCategory()}
    </>
  );
};

export default storeCategories;
