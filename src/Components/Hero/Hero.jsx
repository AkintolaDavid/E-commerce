import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero_left">
        <h2>NEW ARIVALS ONLY</h2>
        <div>
          <p>new</p>
          <img src={hand_icon} alt="" style={{ height: "90px" }} />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero_btn">
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero_right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};
