import React from "react";
import "./Logos.css";
import { logos } from "../../utils/constants";

const Logos = () => {
  return (
    <section className="logos">
      <div className="logos__slide">
        {logos.map((img, i) => (
          <img className="logo" src={img} alt="logo" key={i} />
        ))}
        {logos.map((img, i) => (
          <img className="logo" src={img} alt="logo" key={i} />
        ))}
      </div>
      <div className="logos__overlay logos__overlay_left"></div>
      <div className="logos__overlay logos__overlay_right"></div>
    </section>
  );
};

export default Logos;
