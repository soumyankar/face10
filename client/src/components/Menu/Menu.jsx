/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import React from "react";
import "./style.css";

export const Menu = ({ property1, className, text = "Home Page", link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link); // Use the navigate function to redirect to the provided link
    }
  };

  return (
    <div className={`menu ${property1} ${className}`} onClick={handleClick} style={{ cursor: "pointer" }}>
      <div className="home-page">{text}</div>
    </div>
  )
};

Menu.propTypes = {
  property1: PropTypes.oneOf([
    "mouse-over-05",
    "mouse-hover-03",
    "unselected-02",
    "selected-01",
    "mouse-over-04",
    "unselected-01",
  ]),
  text: PropTypes.string,
};
