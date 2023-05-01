import { useState } from "react";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    /* Wrap this Root Route to create Router here */
    <Route path="/" element={<Root />}>
      {/* Add Routes here! */}
      <Route path="" element={<Home />} />
      <Route path="production" element={<Production />} />
      <Route path="tour" element={<Tour />} />
      <Route path="spotlight" element={<Spotlight />} />
      <Route path="store" element={<Store />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
