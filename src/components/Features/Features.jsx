import React from "react";
import "./Features.css";
import { features } from "../../utils/constants";

const Features = () => {
  return (
    <section className="features">
      <div className="features__heading-container">
        <h2 className="features__heading">Discover the Power of SmartNotes</h2>
        <p className="features__subheading">
          SmartNotes is packed with innovative features designed to
          revolutionize the way you take notes, collaborate with others, and
          stay organized.
        </p>
      </div>
      <div className="features__feature-container">
        {features.map((obj) => {
          return (
            <div className="feature">
              <img
                src={obj.image}
                alt={obj.heading}
                className="feature__icon"
              />
              <p className="feature__heading">{obj.heading}</p>
              <p className="feature__description">{obj.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
