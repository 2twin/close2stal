import React from "react";
import Hero from "../components/Hero";
import Bio from "../components/Bio";
import TourList from "../components/TourList";
import Store from "../components/StorePreview";
import ProductionPreview from "../components/ProductionPreview";
import SpotlightPreview from "../components/SpotlightPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <Bio />
      <TourList />
      <ProductionPreview />
      <SpotlightPreview />
      <Store />
    </>
  );
};

export default Home;
