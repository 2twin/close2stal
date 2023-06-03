import { useState, useEffect } from "react";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./components/Root";
import Home from "./pages/Home";
import Production from "./pages/Production";
import Tour from "./pages/Tour";
import Spotlight from "./pages/Spotlight";
import Login from "./pages/Login";
import Store from "./pages/Store";

import axios from "axios";

function App() {
  const [tourList, setTourList] = useState([]);
  const [music, setMusic] = useState([]);
  const [video, setVideo] = useState([]);
  const [store, setStore] = useState([]);

  const [isLogged, setIsLogged] = useState(false);

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
          path="/"
          element={<Root isLogged={isLogged} setIsLogged={setIsLogged} />}
        >
          <Route
            path=""
            element={<Home tourList={tourList} music={music} video={video} />}
          />
          <Route
            path="production"
            element={
              <Production music={music} video={video} isLogged={isLogged} />
            }
          />
          <Route
            path="tour"
            element={<Tour tourList={tourList} isLogged={isLogged} />}
          />
          <Route path="spotlight" element={<Spotlight />} />
          <Route
            path="store"
            element={<Store isLogged={isLogged} store={store} />}
          />
          <Route
            path="login"
            element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
          />
        </Route>
    )
  );

  useEffect(() => {
    async function fetchData() {
      const tourData = await axios.get(
        // "https://646ba0e17d3c1cae4ce41357.mockapi.io/api/v1/tour"
        "http://localhost:8080/api/v1/tour"
      );
      setTourList(tourData.data.data);

      const musicData = await axios.get(
        // "https://646ba0e17d3c1cae4ce41357.mockapi.io/api/v1/music"
        "http://localhost:8080/api/v1/music"
      );
      setMusic(musicData.data.data);

      const videoData = await axios.get(
        // "https://646ba8c47d3c1cae4ce41cab.mockapi.io/api/v1/video"
        "http://localhost:8080/api/v1/video"
      );
      setVideo(videoData.data.data);

      const storeData = await axios.get(
        // "https://646ba8c47d3c1cae4ce41cab.mockapi.io/api/v1/store"
        "http://localhost:8080/api/v1/store"
      );
      setStore(storeData.data.data);
    }

    fetchData();
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
