import React from "react";
import PressureWasher from "../assets/pressure__washer.svg";
import CleanUp from "../assets/Cleanup_img.svg";
import Planting from "../assets/planting__img.svg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Services() {
  const options = {
    margin: 40,
    items: 4,
    center: true,
    nav: true,
    dots: false,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      900: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  return (
    <div className="services__section">
      <div className="services__title">Our Services</div>
      <div className="services__sub-title">Here is what we do</div>
      <div className="services__slides">
        <OwlCarousel className="owl-theme" {...options}>
          <div className="service__slide owl-height">
            <div className="service__title">Lawn Maintenance</div>
            <div className="service__image--section">
              <img className="service__image" src={CleanUp} alt="" />
            </div>
            <div className="service__description">Clean Up / Trim / Prune</div>
          </div>
          <div className="service__slide owl-height">
            <div className="service__title">Planting</div>
            <div className="service__image--section">
              <img className="service__image" src={Planting} alt="" />
            </div>
            <div className="service__description">
              Tree and Flower Planting and Removal
            </div>
          </div>
          <div className="service__slide owl-height">
            <div className="service__title">Pressure Washing</div>
            <div className="service__image--section">
              <img className="service__image" src={PressureWasher} alt="" />
            </div>
            <div className="service__description">
              Washing with water and pressure
            </div>
          </div>
          <div className="service__slide owl-height">
            <div className="service__title">Lawn Restoration</div>
            <div className="service__image--section">
              <img className="service__image" src={CleanUp} alt="" />
            </div>
            <div className="service__description">Seeding</div>
          </div>
          <div className="service__slide owl-height">
            <div className="service__title">Holiday Decorations</div>
            <div className="service__image--section">
              <img className="service__image" src={PressureWasher} alt="" />
            </div>
            <div className="service__description">
              Christmas lights and much more!
            </div>
          </div>
        </OwlCarousel>
      </div>
    </div>
  );
}

export default Services;
