import React from "react";
import Trend from "../Trend";
import "./TrendBox.css";
const TrendBox = () => {
  return (
    <div className="trendBox">
      <div className="trendBox__header">
        <h2 className="trendBox__title content__title">What’s happening</h2>
      </div>
      <Trend />
      <Trend />
      <Trend />
      <Trend />
      <div className="trendBox__bottom">
        <span>Show More</span>
      </div>
    </div>
  );
};

export default TrendBox;
