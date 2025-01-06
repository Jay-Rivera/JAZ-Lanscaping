import React, { useState } from "react";
import Black_Logo from "../assets/White JAZ LOGO.png";
import { NavLink } from "react-router-dom";

function Nav() {
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className="nav__section">
      <div className="nav__logo">
        <NavLink to="">
          <img src={Black_Logo} className="nav__logo--img" />
        </NavLink>
      </div>
      <div className="burger__menu" onClick={updateMenu}>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
        <div className={burger_class}></div>
      </div>
      <div className={menu_class}>
        <NavLink onClick={updateMenu} className="nav__link--component" to="">
          Home
        </NavLink>
        <NavLink
          onClick={updateMenu}
          className="nav__link--component"
          to="/About"
        >
          About
        </NavLink>
        <NavLink onClick={updateMenu} className="button" to="/Contact">
          Contact
        </NavLink>
      </div>
      <div className="nav__links">
        <NavLink className="nav__link--component" to="">
          Home
        </NavLink>
        <NavLink className="nav__link--component" to="/About">
          About
        </NavLink>
        <NavLink className="button" to="/Contact">
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
