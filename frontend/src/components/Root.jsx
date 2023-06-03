import React from "react";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

export default function Root({ isLogged, setIsLogged }) {
  return (
    <>
      <Header isLogged={isLogged} setIsLogged={setIsLogged} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
