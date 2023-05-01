import React from "react";

import { Link } from "react-router-dom";

import cd1 from "../assets/img/vetement_CD_1.png";
import cd5 from "../assets/img/vetement_CD_5.png";
import cd2 from "../assets/img/vetement_CD_2.png";
import cd4 from "../assets/img/vetement_CD_4.png";
import aubi2 from "../assets/img/STAL_AUBI_CD_2.png";
import aubi1 from "../assets/img/STAL_AUBI_CD_1.png";

const StorePreview = () => {
  return (
    <section className="store" id="store">
      <div className="container">
        <div className="store__inner">
          <h2 className="section-title">Store</h2>
          <span className="section-subtitle">Special Packs “Aubi”</span>
          <div className="store__row">
            <div className="store__grid">
              <div className="store__card">
                <img src={cd1} alt="" />
              </div>
              <div className="store__card">
                <img src={cd2} alt="" />
              </div>
              <div className="store__card">
                <img src={cd5} alt="" />
              </div>
              <div className="store__card">
                <img src={cd4} alt="" />
              </div>
            </div>
          </div>

          <span className="section-subtitle">Albums “Aubi”</span>
          <div className="store__row">
            <div className="store__grid">
              <div className="store__card">
                <img src={aubi2} alt="" />
              </div>
              <div className="store__card">
                <img src={aubi1} alt="" />
              </div>
            </div>
          </div>
          <Link to="/store">
            <button className="btn btn-outline-dark">Go to the store</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StorePreview;
