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
  const price =
    planPeriod === "/ monthly" ? "$" + planPrice : "$" + planPrice * 12 * 0.75;
  return (
    <div className={`pricing-tile ${dark}`}>
      <div className="plan-section">
        <img className="plan-section__icon" src={planIcon} alt={plan} />
        <p className="text-small plan-section__plan">{plan}</p>
      </div>
      <div className="pricing-section">
        <h2 className={`h2 pricing-section__price ${dark}`}>
          {planPrice ? price : "Custom"}
        </h2>
        <p className={`text-reg pricing-section__period ${dark}`}>
          {planPrice ? planPeriod : ""}
        </p>
      </div>
      <div className="bullets-section">
        {bullets.map((bullet, i) => {
          return (
            <div className="pricing-bullet" key={i}>
              <img className="pricing-bullet__check" src={check} alt="check" />
              <p className={`text-reg pricing-bullet__text ${dark}`}>
                {bullet}
              </p>
            </div>
          );
        })}
      </div>
      <button className={`pricing-cta ${dark}`}>
        <span className="text-med pricing-cta__text">{CallToAction}</span>
        <img
          className={`pricing-cta__icon ${dark}`}
          src={darkMode ? arrowDark : arrowLight}
          alt="arrow"
        />
      </button>
      <p className="text-tiny pricing-tile__no-card">
        {planPrice ? "No credit card required" : ""}
      </p>
    </div>
  );
};

export default PricingTile;
