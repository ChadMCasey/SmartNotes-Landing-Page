import React from "react";
import "./Logos.css";
import { logos } from "../../utils/constants";

const Logos = () => {
  return (
    <section className="logos">
      <div className="logos__slide">
        {logos.map((img, i) => (
          <img src={img} key={i} alt="Logo" className="logo" />
        ))}
        {logos.map((img, i) => (
          <img src={img} key={i} alt="Logo" className="logo" />
        ))}
      </div>
      <div className="logos__overlay logos__overlay_left"></div>
      <div className="logos__overlay logos__overlay_right"></div>
    </section>
  );
};

export default Logos;
