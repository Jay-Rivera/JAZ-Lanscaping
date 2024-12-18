import React from "react";
import FooterLogo from "../assets/black__logo--simple.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__main">
        <div className="footer__logo">
          <img src={FooterLogo} alt="" />
        </div>
        <div className="footer__links">
          <Link className="footer__link" to={""}>
            Home
          </Link>
          <Link className="footer__link" to={"/About"}>
            About
          </Link>
          <Link className="footer__link" to={"/Contact"}>
            Contact
          </Link>
        </div>
      </div>
      <div className="footer__design">
        <div className="h2">Created by Jose Rivera</div>
      </div>
    </div>
  );
}

export default Footer;
