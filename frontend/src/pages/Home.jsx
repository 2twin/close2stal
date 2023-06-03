import React from "react";
import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import Bio from "../components/Bio";
import TourList from "../components/TourList";
import Store from "../components/StorePreview";
import ProductionPreview from "../components/ProductionPreview";

import spotlight from "../assets/img/Spotlight.png";

const Home = ({ tourList, music, video }) => {
  return (
    <>
      <Hero />
      <Bio />
      <TourList tourList={tourList} />
      <ProductionPreview music={music} video={video} />
      <div className="spotlightPreview">
        <h2 className="section-title">Spotlight</h2>
        <img src={spotlight} alt="Spotlight" />
        <Link to="/spotlight">
          <button className="btn btn-outline btn-preview">
            Show spotlight
          </button>
        </Link>
      </div>
      <Store />
    </>
  );
};

export default Home;
