import React from "react";
import "./Video.css";
import videoImg from "../../assets/video.png";
import TLgradient from "../../assets/vid-top-left-gradient.png";
import BRgradient from "../../assets/vid-bottom-right-gradient.png";

const Video = () => {
  return (
    <section className="video">
      <div className="video__container">
        <img className="video__image" src={videoImg} alt="video" />
        <button className="video__play"></button>
        <div className="video__overlay"></div>
      </div>
      <img
        className="video-gradient video__tl-gradient"
        src={TLgradient}
        alt="gradient"
      />
      <img
        className="video-gradient video__br-gradient"
        src={BRgradient}
        alt="gradient"
      />
    </section>
  );
};

export default Video;
