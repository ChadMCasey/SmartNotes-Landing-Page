import React from "react";
import "./Video.css";
import videoImg from "../../assets/video.png";
import TLgradient from "../../assets/vid-top-left-gradient.png";
import BRgradient from "../../assets/vid-bottom-right-gradient.png";

const Video = () => {
  return (
    <section className="video">
      <div className="video__container">
        <img className="video__image" src={videoImg} alt="Video" />
        <button className="video__play"></button>
        <div className="video__overlay"></div>
      </div>
      <img
        src={TLgradient}
        alt="gradient"
        className="video-gradient video__tl-gradient"
      />
      <img
        src={BRgradient}
        alt="gradient"
        className="video-gradient video__br-gradient"
      />
    </section>
  );
};

export default Video;
