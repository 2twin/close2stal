import React from "react";
import { Link } from "react-router-dom";

const TourList = () => {
  const isTourPage = window.location.pathname.startsWith("/tour");

  return (
    <section className="tour" id="tour">
      <div className="container">
        <div className="tour__inner">
          <h2 className="section-title">Tour</h2>
          <ul className="tour__list">
            <li className="tour__tabs">
              <span className="tour__tab">Past dates</span>
              <span className="tour__tab active">Upcoming dates</span>
            </li>
            <li>
              <div className="">
                <span>Fri, MAR 20</span>
                <span>Wembley Stadium</span>
              </div>
              <div className="">
                <span>Manchester, UK</span>
                <button className="btn btn-primary">Tickets</button>
              </div>
            </li>
            <li>
              <div className="">
                <span>Fri, MAR 20</span>
                <span>Wembley Stadium</span>
              </div>
              <div className="">
                <span>Manchester, UK</span>
                <button className="btn btn-primary">Tickets</button>
              </div>
            </li>
            <li>
              <div className="">
                <span>Fri, MAR 20</span>
                <span>Wembley Stadium</span>
              </div>
              <div className="">
                <span>Manchester, UK</span>
                <button className="btn btn-primary">Tickets</button>
              </div>
            </li>
            <li>
              <div className="">
                <span>Fri, MAR 20</span>
                <span>Wembley Stadium</span>
              </div>
              <div className="">
                <span>Manchester, UK</span>
                <button className="btn btn-primary">Tickets</button>
              </div>
            </li>
          </ul>
          <Link to="/tour">
            {
              !isTourPage && <button className="btn btn-outline">Show all dates</button>
            }
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourList;
