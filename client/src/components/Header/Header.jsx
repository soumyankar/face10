/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "../Menu";
import "./style.css";

export const Header = ({
  className,
  // menuProperty1 = "selected-01",
  // menuProperty11 = "unselected-01",
  override = <Menu className="menu-2" property1="unselected-01" text="About" />,
  hideMenuItems = false, // Add a new prop for controlling the visibility of menu-items
}) => {
  const navigate = useNavigate();

  const handleClickLogo = () => {
      navigate("/"); // Use the navigate function to redirect to the provided link
    }

  const isHomePage = window.location.pathname === "/"; // Check if the current page is the home page
  const isPlaygroundPage = window.location.pathname.startsWith("/survey");
  const isAboutPage = window.location.pathname === "/about";

  // Define the prop value based on the location
  const selectedPropHomePage = isHomePage ? "mouse-over-05" : "unselected-02";
  const selectedPropPlaygroundPage = isPlaygroundPage ? "mouse-over-05" : "unselected-02";
  const selectedPropAboutPage = isAboutPage ? "mouse-over-05" : "unselected-02";
  return (
    <div className={`header ${className}`}>
      <img className="logo" alt="Logo" src="/img/logo-01.png" onClick={handleClickLogo} style={{ cursor: "pointer" }}/>
      {!hideMenuItems && (
      <div className="menu-items">
        <Menu className="menu-instance" property1={selectedPropHomePage} text="Home Page" link="/" />
        <Menu className="design-component-instance-node" property1={selectedPropPlaygroundPage} text="Playground" link="/survey" />
        <Menu className="design-component-instance-node" property1={selectedPropAboutPage} text="About" link="/about" />
      </div>
      )}
    </div>
  );
};

Header.propTypes = {
  menuProperty1: PropTypes.string,
  menuProperty11: PropTypes.string,
};
