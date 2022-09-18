import React from "react";
import downloadApp from "../../assets/Download Icon.svg";
import heroImg from "../../assets/hero-mobile-view.png";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_box_border">
        <div className="hero_box">
          <div className="title hero_title">
            a great app makes your life better
          </div>
          <div className="text hero_text">
            Join the community, Share your knowledge, Ask for answers from
            peers, Build your community Monetize & earn from knowledge Make
            Knowledge Cool Again Be Cool Together
          </div>
          <div className="title hero__download__text">download app now</div>
          <div className="hero__download__img">
            <img src={downloadApp} alt="download our app" />
          </div>
        </div>
      </div>
      <div className="hero_img">
        <img src={heroImg} alt="mobile screen" />
      </div>
    </div>
  );
};

export default Hero;
