/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Menu } from "../Menu";
import "./style.css";

export const Header = ({
  className,
  menuProperty1 = "selected-01",
  menuProperty11 = "unselected-01",
  override = <Menu className="menu-2" property1="unselected-01" text="About" />,
  hideMenuItems = false, // Add a new prop for controlling the visibility of menu-items
}) => {
  return (
    <div className={`header ${className}`}>
      <img className="logo" alt="Logo" src="/img/logo-01.png" />
      {!hideMenuItems && (
      <div className="menu-items">
        <Menu className="menu-instance" property1={menuProperty1} text="Home Page" />
        <Menu className="design-component-instance-node" property1={menuProperty11} text="Playground" />
        {override}
      </div>
      )}
    </div>
  );
};

Header.propTypes = {
  menuProperty1: PropTypes.string,
  menuProperty11: PropTypes.string,
};
