import React from "react";
import Black_Logo from "../assets/cream__Logo.svg";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="hero">
      <div className="nav__section">
        <div className="nav__logo">
          <img src={Black_Logo} className="nav__logo--img" />
        </div>
        <div className="nav__links">
          <Link className="nav__link--component">Home</Link>
          <Link className="nav__link--component">About</Link>
          <Link className="button">Contact</Link>
        </div>
      </div>
      <div className="hero__section">
        <div className="hero__left">
          <h1 className="hero__title text__shadow">
            Elevate Your Home's
            <br /> <span className="">Greenery</span>
          </h1>
          <div className="hero__button"></div>
          <Link className="button hero__btn">Learn More</Link>
        </div>
        <div className="hero__right"></div>
      </div>
    </div>
  );
}

export default Nav;
