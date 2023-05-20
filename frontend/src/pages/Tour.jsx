import React from 'react'
import TourList from '../components/TourList';

import { tourList } from '../data';

const Tour = () => {
  return (
    <TourList tourList={tourList} />
  )
}

export default Tour