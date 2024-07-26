import React from "react";
import "./Banner.css";
import Logo from "./../images/logo2.png";

const Banner = () => {
  return (
    <div>
      <header className="banner">
        <img src={Logo} className="logo" alt="Logo" />
        <div className="title-container">
          <h2 className="title">MEDRISEHUB PVT. LTD.</h2>
        </div>
      </header>
    </div>
  );
};

export default Banner;