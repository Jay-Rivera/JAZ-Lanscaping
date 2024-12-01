import React from "react";
import Logo from "../assets/pressure__washer.svg";

function Services() {
  return (
    <div className="services__section">
      <div className="services__title">Our Services</div>
      <div className="services__sub-title">Here is what we do</div>
      <div className="services__slides">
        <div className="service__slide">
          <div className="service__title">Pressure Washing</div>
          <div className="service__image--section">
            <img className="service__image" src={Logo} alt="" />
          </div>
          <div className="service__description">
            Washing with water and pressure
          </div>
        </div>
        <div className="service__slide">
          <div className="service__title">Pressure Washing</div>
          <div className="service__image--section">
            <img className="service__image" src={Logo} alt="" />
          </div>
          <div className="service__description">
            Washing with water and pressure
          </div>
        </div>
        <div className="service__slide">
          <div className="service__title">Pressure Washing</div>
          <div className="service__image--section">
            <img className="service__image" src={Logo} alt="" />
          </div>
          <div className="service__description">
            Washing with water and pressure
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
