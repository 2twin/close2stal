import React, { useState } from "react";
import { Link } from "react-router-dom";
// import * as tour from "../../../../Tours.js";
// console.log(tour)
const initialTourState = {
  date: "",
  venue: "",
  city: "",
  country: "",
};

const TourList = ({ tourList }) => {
  const isTourPage = window.location.pathname.startsWith("/tour");

  const [isEditing, setIsEditing] = useState(true);

  const [tourState, setTourState] = useState(initialTourState);

  const handleInputChange = (event) => {
    setTourState({
      ...tourState,
      [event.target.name]: event.target.value,
    });
  };

  const toggleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async  (event) => {
    event.preventDefault();
    const newDate = {
     // id: crypto.randomUUID(),
      date: tourState.date,
      venue: tourState.venue,
      city: tourState.city,
      country: tourState.country,
    };


// il y a juste cette partie là à faire, la partie de la requête 
console.log(newDate)
await fetch('http://localhost:3000/tour',{
method: 'POST',
body: JSON.stringify(newDate),
headers:{'Content-type': 'application/json'}
});
    tourList.push(newDate);
 toggleIsEditing()
}
    

  return (
    <section className="tour" id="tour">
      <div className="container">
        <div className="tour__inner">
          <h2 className="section-title">Tour</h2>
          {isTourPage && <button className={"add-btn" + (!isEditing ? " close" : "")} onClick={toggleIsEditing}>+</button>}
          {isEditing ? (
            <ul className="tour__list">
              <li className="tour__tabs">
                <span className="tour__tab">Past dates</span>
                <span className="tour__tab active">Upcoming dates</span>
              </li>
              {tourList.map((tour) => (
                <li key={tour.id}>
                  <div className="">
                    <span>{tour.date}</span>
                    <span>{tour.venue}</span>
                  </div>
                  <div className="">
                    <span>
                      {tour.city}, {tour.country}
                    </span>
                    <button className="btn btn-primary">Tickets</button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <form className="standart-form" onSubmit={handleSubmit}>
              <span className="standart-form__heading">Add a new date</span>
              <input
                type="text"
                value={tourState.date}
                name="date"
                placeholder="DATE"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                value={tourState.venue}
                name="venue"
                placeholder="VENUE"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                value={tourState.city}
                name="city"
                placeholder="CITY"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                value={tourState.country}
                name="country"
                placeholder="COUNTRY"
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="btn btn-primary">Save</button>
            </form>
          )}
          <Link to="/tour">
            {!isTourPage && (
              <button className="btn btn-outline">Show all dates</button>
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TourList;