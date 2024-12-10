import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
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

export default Hero;
