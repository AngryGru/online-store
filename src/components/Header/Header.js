import React from "react";
import "./Header.css";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="header">
      <Logo width={"70px"} height={"70px"} />
      <h1 className="header-title">Geeks Alley</h1>
    </div>
  );
};

export default Header;
