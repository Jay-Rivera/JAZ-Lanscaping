import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero__section">
        <div className="hero__left">
          <h1 className="hero__title">
            Elevate Your Home's
            <br /> <span className="green">Greenery</span>
          </h1>
          <Link>Learn More</Link>
        </div>
        <div className="hero__right">
          {/* <img
            src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="hero__image"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
