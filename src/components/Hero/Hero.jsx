import React from "react";
import "./Hero.css";
import arrow from "../../assets/arrow.svg";
import abstractShapes from "../../assets/abstract-shapes.png";

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
            className="hero__input"
            type="email"
            placeholder="Enter your email"
          />
          <button className="text-reg hero__submit">
            Sign up
            <img className="hero__arrow" src={arrow} alt="arrow" />
          </button>
        </div>
      </div>
      <div className="hero__column">
        <img
          className="hero__graphic"
          src={abstractShapes}
          alt="abstract shapes"
        />
      </div>
    </section>
  );
};

export default Hero;
