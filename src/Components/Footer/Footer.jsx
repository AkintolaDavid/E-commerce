import React from "react";
import logo from "../Assets/logo_big.png";
import instagram from "../Assets/instagram_icon.png";
import pininterest from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src={logo} />
        <h1>SHOPPER</h1>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer_social_icons">
        <div className="footer_social_icons_container">
          <img src={instagram} />
        </div>
        <div className="footer_social_icons_container">
          <img src={pininterest} />
        </div>
        <div className="footer_social_icons_container">
          <img src={whatsapp} />
        </div>
      </div>
      <hr />
      <p>Copyright @2023 -All Rights Reserved</p>
    </div>
  );
};
