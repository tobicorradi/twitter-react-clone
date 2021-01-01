import React from "react";
import "./Trend.css";
const Trend = () => {
  return (
    <div className="trend">
      <span className="trend__info">Trending in Argentina</span>
      <span className="trend__title">
        <strong>
          Arsenal vs Chelsea: The Gunners win the London derby 3-1
        </strong>
      </span>
      <span className="trend__info trend__tweets">8,591 Tweets</span>
    </div>
  );
};

export default Trend;
