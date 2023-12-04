import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_container_wrapper">
        <div className="hero_container_wrapper_title">
          <h2>luxury motors</h2>
          <p>German precision</p>
        </div>
        <div className="hero_container_wrapper_cta_box">
          <button className="hero_container_wrapper_cta_btn">
            find my car
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
