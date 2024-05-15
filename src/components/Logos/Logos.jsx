import React from "react";
import "./Logos.css";
import { logos } from "../../utils/constants";

const Logos = () => {
  return (
    <section className="logos">
      {logos.map((img, i) => {
        return <img src={img} key={i} alt="Logo" className="logos__img" />;
      })}
      <div className="logos__overlay logos__overlay_start"></div>
      <div className="logos__overlay logos__overlay_end"></div>
    </section>
  );
};

export default Logos;
