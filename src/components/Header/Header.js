import React from "react";
import "./Header.css";
import Weather from "../Weather/Weather";

const Header = () => {
  return (
    <div className="headermain">
      <h1 className="spacex">SpaceX</h1>
      <Weather />
    </div>
  );
};

export default Header;
