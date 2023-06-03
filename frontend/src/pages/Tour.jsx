import React from "react";
import TourList from "../components/TourList";

const Tour = ({tourList, isLogged}) => {
  return <TourList tourList={tourList} isLogged={isLogged} />;
};

export default Tour;
