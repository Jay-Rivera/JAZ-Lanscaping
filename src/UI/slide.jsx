import React, { useRef, useState } from "react";
import pic1 from "../assets/porch__before.JPG";
import pic2 from "../assets/porch__after.JPG";
import pic3 from "../assets/Patio__furniture--before.JPG";
import pic4 from "../assets/patio__furniture--after.JPG";
import pic5 from "../assets/roof__before.JPG";
import pic6 from "../assets/roof__after.JPG";
import pic7 from "../assets/Moldy__Patio--furniture.JPG";
import pic8 from "../assets/moldy__furniture--after.JPG";
import pic9 from "../assets/walkway.JPG";
import pic10 from "../assets/walkway__clean.JPG";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Slide() {
  const options = {
    margin: 100,
    items: 3,
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
    },
  };

  return (
    <div className="services__slides--about">
      <OwlCarousel className="owl-theme" {...options}>
        <div class="service__img">
          <img src={pic1} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic2} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic3} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic4} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic5} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic6} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic7} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic8} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic9} class="about__image" alt="" />
        </div>
        <div class="service__img">
          <img src={pic10} class="about__image" alt="" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default Slide;
