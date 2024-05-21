import React from "react";
import "./Navigation.css";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow.svg";

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="navigation__logo-section">
        <img className="navigation__logo" src={logo} alt="logo" />
        <h3 className="navigation__name">SmartNotes</h3>
      </div>
      <ul className="navigation__link-section">
        <a href="#" className="text-reg navigation__link">
          Features
        </a>
        <a href="#" className="text-reg navigation__link">
          Pricing
        </a>
        <a href="#" className="text-reg navigation__link">
          Support
        </a>
      </ul>
      <button className="text-reg navigation__cta">
        Get Started
        <img className="navigation__arrow" src={arrow} alt="arrow" />
      </button>
    </nav>
  );
};

export default Navigation;
