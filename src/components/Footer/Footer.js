import React from "react";
import "./Footer.css";
import Logo from "../Logo/Logo";

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer__text">May the Force be with you!</p>
      <div className="footer__logo">
        <Logo width={"20px"} height={"20px"} />
        <p>Geeks Alley</p>
      </div>
    </div>
  );
};

export default Footer;
