import React from "react";
import heroArrow from "../../assets/arrow.svg";
import abstractShapes from "../../assets/abstract-shapes.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__column">
        <h1 className="h1 hero__heading">
          <span className="hero__heading-gradient">Intelligent</span>
          cloud-based{" "}
          <span className="hero__heading-gradient">note-taking</span>
          and collaboration tool
        </h1>
        <p className="text-reg hero__subheading">
          Experience the power of smart note-taking and transform the way you
          work today.
        </p>
        <div className="hero__input-container">
          <input
            type="email"
            placeholder="Enter your email"
            className="hero__input"
          />
          <button className="text-reg hero__submit">
            Sign up
            <img src={heroArrow} alt="arrow" className="hero__arrow" />
          </button>
        </div>
      </div>
      <div className="hero__column">
        <img
          src={abstractShapes}
          alt="abstract shapes"
          className="hero__graphic"
        />
      </div>
    </section>
  );
};

export default Hero;
