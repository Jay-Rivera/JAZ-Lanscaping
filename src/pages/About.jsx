import React from "react";
import Test from "../assets/owner-picture.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function About() {
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
    <div className="service__section">
      <div className="service__top--section">
        <div className="service__page--title">
          <h1>Our Services</h1>
        </div>
        <div className="service__carousel">
          <div className="service__img">
            <img src={Test} alt="" />
          </div>
          <div className="service__img">
            <img src={Test} alt="" />
          </div>
          <div className="service__img">
            <img src={Test} alt="" />
          </div>
          <div className="service__img">
            <img src={Test} alt="" />
          </div>
        </div>
      </div>
      <div className="service__bottom--section">
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Service 1</h2>
          <p className="service__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            consequatur, reprehenderit perferendis dolores sint dolorum veniam
            odio asperiores impedit beatae enim nostrum ipsam voluptatum. Nobis
            consequuntur expedita natus ipsum recusandae dolore est dicta illo
            aliquam? Fugiat, nulla qui harum hic ratione explicabo, aut, quasi
            iste ut cupiditate quis inventore ipsum. Sequi, nisi accusantium
            saepe debitis possimus voluptate excepturi dicta perferendis.
          </p>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Service 1</h2>
          <p className="service__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            consequatur, reprehenderit perferendis dolores sint dolorum veniam
            odio asperiores impedit beatae enim nostrum ipsam voluptatum. Nobis
            consequuntur expedita natus ipsum recusandae dolore est dicta illo
            aliquam? Fugiat, nulla qui harum hic ratione explicabo, aut, quasi
            iste ut cupiditate quis inventore ipsum. Sequi, nisi accusantium
            saepe debitis possimus voluptate excepturi dicta perferendis.
          </p>
        </div>
        <div className="service__bottom--container">
          <h2 className="service__sub--title">Service 1</h2>
          <p className="service__para">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
            consequatur, reprehenderit perferendis dolores sint dolorum veniam
            odio asperiores impedit beatae enim nostrum ipsam voluptatum. Nobis
            consequuntur expedita natus ipsum recusandae dolore est dicta illo
            aliquam? Fugiat, nulla qui harum hic ratione explicabo, aut, quasi
            iste ut cupiditate quis inventore ipsum. Sequi, nisi accusantium
            saepe debitis possimus voluptate excepturi dicta perferendis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
