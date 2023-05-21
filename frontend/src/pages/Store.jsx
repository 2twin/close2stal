import React from "react";

import StoreCategories from "../components/StoreCategories";

const Store = () => {
  return (
    <>
      <section className="productionHero productionHero_store">
      <div className="container">
        <div className="productionHero__inner">
          <span className="font-bold">
            Discover Stal's <br /> Marketplace
          </span>
        </div>
      </div>
      </section>
      <StoreCategories />
    </>
  );
};

export default Store;
