/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";

export const Cta = ({ property1, className }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/survey");
  };
  return (
    <div className={`CTA ${property1} ${className}`} onClick={handleClick}>
      <div className="frame">
        <div className="let-s-find-out">Let’s find out</div>
        {["default", "home-page-botton"].includes(property1) && (
          <div className="noun-arrow">
            <img
              className="group"
              alt="Group"
              src={property1 === "home-page-botton" ? "/img/group-1.png" : "/img/group-2.png"}
            />
            <div className="overlap-group">
              <div className="created-by-nailil">Created by nailil jamila</div>
              <div className="from-the-noun">from the Noun Project</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Cta.propTypes = {
  property1: PropTypes.oneOf(["violet-botton", "home-page-botton", "yellow-botton", "default"]),
};
