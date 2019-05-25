import React from "react";
import "./Footer.css";
import twit from "../assets/twit.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";

//we have to assign ids to menu and contact component
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-address">
        <p>142 W72 ST NYC 10023</p>
        <p>(212)498-0022</p>
      </div>
      <div className="logos-container">
        <img className="logos" src={facebook} alt="social media" />
        <img className="logos" src={instagram} alt="social media" />
        <img className="logos" src={twit} alt="social media" />
      </div>
    </div>
  );
};

export default Footer;
