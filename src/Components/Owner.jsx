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
              "I aim to treat every lawn as if it was my own. I have the
              expertise neeeded to ensure every lawn reaches the elegancy it
              deserves."
            </h2>
            <h3 className="owner__slide--signature">- JAZ</h3>
          </div>
          <div className="owner__slide">
            <h2 className="owner__slide--text">
              Started landscaping in 1998. In 2007 I started my own Landscaping
              business. My main goal is to ensure that every customer is always
              happy with the service. I am always open to the feedback my
              customers have to build a great relationship. I've built my
              business with building a relationship first with the client and
              treat everyone like family.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Owner;
