import React from "react";
import PressureWasher from "../assets/pressure__washer.svg";
import CleanUp from "../assets/Cleanup_img.svg";
import Planting from "../assets/planting__img.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Services() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
  };

  return (
    <div className="services__section">
      <div className="services__title">Our Services</div>
      <div className="services__sub-title">Here is what we do</div>
      <div className="services__slides">
        <Slider {...settings}>
          <div className="service__slide">
            <div className="service__title">Lawn Maintenance</div>
            <div className="service__image--section">
              <img className="service__image" src={CleanUp} alt="" />
            </div>
            <div className="service__description">Clean Up / Trim / Prune</div>
          </div>
          <div className="service__slide">
            <div className="service__title">Pressure Washing</div>
            <div className="service__image--section">
              <img className="service__image" src={PressureWasher} alt="" />
            </div>
            <div className="service__description">
              Washing with water and pressure
            </div>
          </div>
          <div className="service__slide">
            <div className="service__title">Lawn Maintenance</div>
            <div className="service__image--section">
              <img className="service__image" src={CleanUp} alt="" />
            </div>
            <div className="service__description">Clean Up / Trim / Prune</div>
          </div>
          <div className="service__slide">
            <div className="service__title">Pressure Washing</div>
            <div className="service__image--section">
              <img className="service__image" src={PressureWasher} alt="" />
            </div>
            <div className="service__description">
              Washing with water and pressure
            </div>
          </div>
          <div className="service__slide">
            <div className="service__title">Planting</div>
            <div className="service__image--section">
              <img className="service__image" src={Planting} alt="" />
            </div>
            <div className="service__description">
              Tree and Flower Planting and Removal
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Services;
