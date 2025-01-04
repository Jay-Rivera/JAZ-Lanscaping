import React from "react";
import FooterLogo from "../assets/black__logo--simple.svg";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer__section">
      <div className="footer__main">
        <div className="footer__logo">
          <NavLink to="">
            <img src={FooterLogo} alt="" />
          </NavLink>
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
        <div className="h2">
          © Copyright 2025. All Rights Reserved. JAZ Landscaping & Maintenance.
        </div>
      </div>
    </div>
  );
}

export default Footer;
