/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const QuestionSurvey = ({ className }) => {
  return (
    <div className={`question-survey ${className}`}>
      <div className="element-question-number">1 →</div>
      <div className="frame">
        <div className="title">What is your age?</div>
        <div className="add-description">Add description</div>
      </div>
    </div>
  );
};
