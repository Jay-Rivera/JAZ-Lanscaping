import React from "react";
import Black_Logo from "../assets/White JAZ LOGO.png";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="nav__section">
      <div className="nav__logo">
        <NavLink to="">
          <img src={Black_Logo} className="nav__logo--img" />
        </NavLink>
      </div>
      <div className="nav__links">
        <NavLink className="nav__link--component" to="">
          Home
        </NavLink>
        <NavLink className="nav__link--component" to="/About">
          About
        </NavLink>
        <NavLink className="button" to="/Contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
