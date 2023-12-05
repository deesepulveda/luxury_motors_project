import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_container_wrapper">
        <div className="hero_container_wrapper_title">
          <h2>
            luxury <span>motors</span>
          </h2>
          <p className="title_german_luxury">German luxury</p>
          <p className="title_automotive">automotive</p>
        </div>
        <div className="hero_container_wrapper_cta_box">
          <button className="hero_container_wrapper_cta_btn cta_btn_explore">
            Explore
          </button>
          <button className="hero_container_wrapper_cta_btn cta_btn_tour">
            tour
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
