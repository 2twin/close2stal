import React from 'react'

import ProductionCategories from "../components/ProductionCategories";

const Production = ({music, video, isLogged}) => {
  return (
    <>
      <section className="productionHero">
        <div className="container">
          <div className="productionHero__inner">
            <span className="font-bold">
              Discover Stal's <br /> Productions
            </span>
          </div>
        </div>
      </section>
      <ProductionCategories music={music} video={video} isLogged={isLogged}/>
    </>
  )
}

export default Production