import React from "react";

import "./Header.css";
import logo from "../../assets/logo.svg";
import headerArrow from "../../assets/arrow.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-section">
        <img className="header__logo" src={logo} alt="Logo" />
        <h3 className="header__name">SmartNotes</h3>
      </div>
      <ul className="header__link-section">
        <a href="#" className="header__link">
          Features
        </a>
        <a href="#" className="header__link">
          Pricing
        </a>
        <a href="#" className="header__link">
          Support
        </a>
      </ul>
      <button className="header__cta">
        Get Started
        <img src={headerArrow} alt="Arrow" className="header__arrow" />
      </button>
    </header>
  );
};

export default Header;
