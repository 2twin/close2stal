import React from "react";
import mainLogo from "../assets/img/main-logo.svg";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="font-bold">
              <NavLink to="/">
                <img src={mainLogo} alt="Close2Stal" />
              </NavLink>
            </li>
            <li className="font-bold">
              <NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/production">Production</NavLink>
            </li>
            <li className="font-bold">
            <NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/tour">Tour</NavLink>
            </li>
            <li className="font-bold">
              <NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/spotlight">Spotlight</NavLink>
            </li>
            <li className="font-bold">
            <NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/store">Store</NavLink>
            </li>
            <li className="font-bold">
              <NavLink className={({isActive}) => isActive ? "activeLink" : ""} to="/login">Login/SignUp</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
