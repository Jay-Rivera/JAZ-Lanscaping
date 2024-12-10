import React from "react";
import OwnerImage from "../assets/owner-picture.jpg";

function Owner() {
  return (
    <div className="owner__section">
      <div className="owner__title--section">
        <h1 className="owner__title">
          <span className="green">J</span>ose <span className="green">A</span>.{" "}
          <span className="green">Z</span>uniga
        </h1>
      </div>
      <div className="owner__cards">
        <div className="owner__slides">
          <div className="owner__img--slide">
            <img className="owner__image" src={OwnerImage} alt="" />
          </div>
          <div className="owner__slide">
            <h2 className="owner__slide--text">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Corrupti ea unde non accusantium quod expedita error ex porro
              distinctio quasi quia vel consectetur, sunt recusandae modi
              officiis fugiat ipsum atque."
            </h2>
            <h3 className="owner__slide--signature">- JAZ</h3>
          </div>
          <div className="owner__slide">
            <h2 className="owner__slide--text">
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              ea unde non accusantium quod expedita error ex porro distinctio
              quasi quia vel consectetur, sunt recusandae modi officiis fugiat
              ipsum atque."
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
