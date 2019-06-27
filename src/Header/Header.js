import React from "react";
import "./Header.css";
import logo from "../assets/logo.png";
//we have to assign ids to menu and contact component
const Header = () => {
  return (
    <div className="header align-items-center">
      <a href="#menu">Menu</a>
      <img src={logo} alt="logo" />
      <a href="#contact">Contact</a>
    </div>
  );
};

export default Header;
