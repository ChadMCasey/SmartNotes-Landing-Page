import React from "react";
import "./PricingTile.css";
import check from "../../assets/check.png";
import arrowDark from "../../assets/arrow.svg";
import arrowLight from "../../assets/colored-arrow.svg";

const PricingTile = ({
  plan,
  planIcon,
  planPrice,
  planPeriod,
  bullets,
  CallToAction,
  darkMode,
}) => {
  const dark = darkMode ? "dark" : "";

  return (
    <div className={`pricing-tile ${dark}`}>
      <div className="plan-section">
        <img className="plan-section__icon" src={planIcon} alt={plan} />
        <p className="plan-section__plan">{plan}</p>
      </div>
      <div className="pricing-section">
        <h2 className="pricing-section__price">{planPrice || "Custom"}</h2>
        <p className={`pricing-section__period ${dark}`}>{planPeriod || ""}</p>
      </div>
      <div className="bullets-section">
        {bullets.map((bullet) => {
          return (
            <div className="pricing-bullet">
              <img className="pricing-bullet__check" src={check} alt="check" />
              <p className="text-reg pricing-bullet__text">{bullet}</p>
            </div>
          );
        })}
      </div>
      <button className={`pricing-cta ${dark}`}>
        <span className="pricing-cta__text">{CallToAction}</span>
        <img
          className="pricing-cta__icon"
          src={darkMode ? arrowDark : arrowLight}
        />
      </button>
    </div>
  );
};

export default PricingTile;
